import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { site } from '$data/content.js';

export const prerender = false;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** @param {string} str */
function escapeHtml(str) {
	return String(str)
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;');
}

/**
 * Weryfikuje token Cloudflare Turnstile.
 * Awaria samego Turnstile (sieć) nie blokuje zgłoszenia — prawdziwy lead jest ważniejszy niż spam.
 * @param {string} secret
 * @param {string} token
 * @param {string | null} ip
 */
async function verifyTurnstile(secret, token, ip) {
	try {
		const form = new FormData();
		form.append('secret', secret);
		form.append('response', token);
		if (ip) form.append('remoteip', ip);
		const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
			method: 'POST',
			body: form
		});
		const data = await res.json();
		if (data.success !== true) {
			console.warn('[contact] Turnstile odrzucił token:', data['error-codes']);
		}
		return data.success === true;
	} catch (err) {
		console.error('[contact] Błąd połączenia z Turnstile — przepuszczam zgłoszenie:', err);
		return true;
	}
}

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	/** @type {Record<string, unknown>} */
	let body;
	try {
		body = await request.json();
	} catch {
		return json({ ok: false, error: 'Nieprawidłowe dane.' }, { status: 400 });
	}

	const name = String(body.name ?? '').trim();
	const email = String(body.email ?? '').trim();
	const phone = String(body.phone ?? '').trim();
	const message = String(body.message ?? '').trim();
	const consent = body.consent === true;
	const honeypot = String(body.hp ?? '').trim();

	// Bot złapany w honeypot — udajemy sukces, nie wysyłamy (ślad w logach serwera).
	if (honeypot) {
		console.warn('[contact] Honeypot wypełniony — zgłoszenie odrzucone jako bot.');
		return json({ ok: true });
	}

	if (!name || !email || !message) {
		return json({ ok: false, error: 'Uzupełnij imię, e-mail i wiadomość.' }, { status: 400 });
	}
	if (!EMAIL_RE.test(email)) {
		return json({ ok: false, error: 'Podaj poprawny adres e-mail.' }, { status: 400 });
	}
	if (!consent) {
		return json({ ok: false, error: 'Wymagana jest zgoda na przetwarzanie danych.' }, { status: 400 });
	}
	if (message.length > 5000) {
		return json({ ok: false, error: 'Wiadomość jest zbyt długa.' }, { status: 400 });
	}

	// Cloudflare Turnstile — wymagany, gdy ustawiono TURNSTILE_SECRET_KEY (produkcja).
	const turnstileSecret = env.TURNSTILE_SECRET_KEY;
	if (turnstileSecret) {
		const token = String(body.turnstileToken ?? '').trim();
		const ok = token && (await verifyTurnstile(turnstileSecret, token, request.headers.get('cf-connecting-ip')));
		if (!ok) {
			return json(
				{ ok: false, error: 'Weryfikacja antyspamowa nie powiodła się. Odśwież stronę i spróbuj ponownie.' },
				{ status: 400 }
			);
		}
	} else {
		console.warn('[contact] Brak TURNSTILE_SECRET_KEY — weryfikacja Turnstile pominięta.');
	}

	const apiKey = env.RESEND_API_KEY;
	const to = env.CONTACT_TO_EMAIL || 'zarzad@auraexpert.pl';
	const from = env.CONTACT_FROM_EMAIL || 'Aura Expert <formularz@auraexpert.pl>';

	// Bez klucza API nie możemy wysłać — zwróć błąd konfiguracji (log po stronie serwera).
	if (!apiKey) {
		console.error('[contact] Brak RESEND_API_KEY — wiadomość nie została wysłana.');
		return json(
			{
				ok: false,
				error: `Formularz jest chwilowo niedostępny. Spróbuj ponownie za chwilę lub zadzwoń: ${site.phone}.`
			},
			{ status: 503 }
		);
	}

	const html = `
		<h2>Nowe zapytanie z formularza Aura Expert</h2>
		<p><strong>Imię i nazwisko:</strong> ${escapeHtml(name)}</p>
		<p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
		<p><strong>Telefon:</strong> ${escapeHtml(phone) || '—'}</p>
		<p><strong>Wiadomość:</strong></p>
		<p style="white-space:pre-wrap">${escapeHtml(message)}</p>
	`;

	try {
		const res = await fetch('https://api.resend.com/emails', {
			method: 'POST',
			headers: {
				authorization: `Bearer ${apiKey}`,
				'content-type': 'application/json'
			},
			body: JSON.stringify({
				from,
				to: [to],
				reply_to: email,
				subject: `Nowe zapytanie od ${name}`,
				html
			})
		});

		if (!res.ok) {
			const detail = await res.text().catch(() => '');
			console.error('[contact] Resend error:', res.status, detail);
			return json(
				{ ok: false, error: 'Nie udało się wysłać wiadomości. Spróbuj ponownie za chwilę.' },
				{ status: 502 }
			);
		}
	} catch (err) {
		console.error('[contact] Błąd sieci przy wysyłce:', err);
		return json(
			{ ok: false, error: 'Nie udało się wysłać wiadomości. Spróbuj ponownie za chwilę.' },
			{ status: 502 }
		);
	}

	return json({ ok: true });
}
