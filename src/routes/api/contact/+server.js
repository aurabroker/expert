import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

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
	const honeypot = String(body.company ?? '').trim();

	// Bot złapany w honeypot — udajemy sukces, nie wysyłamy.
	if (honeypot) {
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

	const apiKey = env.RESEND_API_KEY;
	const to = env.CONTACT_TO_EMAIL || 'biuro@auraexpert.pl';
	const from = env.CONTACT_FROM_EMAIL || 'Aura Expert <formularz@auraexpert.pl>';

	// Bez klucza API nie możemy wysłać — zwróć błąd konfiguracji (log po stronie serwera).
	if (!apiKey) {
		console.error('[contact] Brak RESEND_API_KEY — wiadomość nie została wysłana.');
		return json(
			{ ok: false, error: 'Formularz jest chwilowo niedostępny. Napisz do nas na biuro@auraexpert.pl.' },
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
