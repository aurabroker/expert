<script>
	import Icon from './Icon.svelte';
	import { site, rodoText } from '$data/content.js';

	let name = $state('');
	let email = $state('');
	let phone = $state('');
	let message = $state('');
	let consent = $state(false);
	let company = $state(''); // honeypot — musi zostać pusty

	/** @type {'idle' | 'sending' | 'success' | 'error'} */
	let status = $state('idle');
	let errorMsg = $state('');

	async function handleSubmit(/** @type {SubmitEvent} */ e) {
		e.preventDefault();
		if (status === 'sending') return;
		errorMsg = '';

		if (!name.trim() || !email.trim() || !message.trim()) {
			status = 'error';
			errorMsg = 'Proszę uzupełnić imię, e-mail i treść wiadomości.';
			return;
		}
		if (!consent) {
			status = 'error';
			errorMsg = 'Prosimy o wyrażenie zgody na przetwarzanie danych.';
			return;
		}

		status = 'sending';
		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify({ name, email, phone, message, consent, company })
			});
			const data = await res.json().catch(() => ({}));
			if (!res.ok || !data.ok) {
				throw new Error(data.error || 'Nie udało się wysłać wiadomości.');
			}
			status = 'success';
			name = email = phone = message = '';
			consent = false;
		} catch (err) {
			status = 'error';
			errorMsg = err instanceof Error ? err.message : 'Wystąpił błąd. Spróbuj ponownie.';
		}
	}
</script>

<section id="kontakt" class="section bg-white">
	<div class="container-x">
		<div class="contact-grid">
			<div class="reveal">
				<p class="eyebrow">Kontakt</p>
				<h2 class="mt-4 text-3xl font-bold text-navy sm:text-4xl">Porozmawiajmy o ochronie Twojej firmy</h2>
				<p class="mt-4 text-lg text-muted">
					Zostaw wiadomość — bezpłatna analiza ryzyka w 48 godzin, bez zobowiązań. Odpowiadamy średnio
					w ciągu 2 godzin.
				</p>

				<ul class="mt-8 space-y-4">
					<li class="contact-item">
						<span class="contact-item__icon"><Icon name="mail" class="h-5 w-5 text-cyan" /></span>
						<a href="mailto:{site.email}">{site.email}</a>
					</li>
					<li class="contact-item">
						<span class="contact-item__icon"><Icon name="phone" class="h-5 w-5 text-cyan" /></span>
						<a href="tel:{site.phoneHref}">{site.phone}</a>
					</li>
					<li class="contact-item">
						<span class="contact-item__icon"><Icon name="pin" class="h-5 w-5 text-cyan" /></span>
						<span>{site.location}</span>
					</li>
				</ul>
			</div>

			<div class="contact-card reveal" style="transition-delay:120ms">
				{#if status === 'success'}
					<div class="contact-success" role="status">
						<div class="contact-success__icon"><Icon name="check" class="h-8 w-8 text-white" /></div>
						<h3 class="mt-4 text-xl font-bold text-navy">Dziękujemy!</h3>
						<p class="mt-2 text-muted">Skontaktujemy się z Państwem wkrótce.</p>
						<button class="btn-outline mt-6" onclick={() => (status = 'idle')}>
							Wyślij kolejną wiadomość
						</button>
					</div>
				{:else}
					<form onsubmit={handleSubmit} novalidate>
						<div class="form-row">
							<label class="form-field">
								<span class="form-label">Imię i nazwisko *</span>
								<input class="form-input" type="text" bind:value={name} placeholder="Jan Kowalski" autocomplete="name" required />
							</label>
						</div>
						<div class="form-row form-row--split">
							<label class="form-field">
								<span class="form-label">E-mail *</span>
								<input class="form-input" type="email" bind:value={email} placeholder="jan@firma.pl" autocomplete="email" required />
							</label>
							<label class="form-field">
								<span class="form-label">Telefon</span>
								<input class="form-input" type="tel" bind:value={phone} placeholder="+48 600 000 000" autocomplete="tel" />
							</label>
						</div>
						<div class="form-row">
							<label class="form-field">
								<span class="form-label">Wiadomość *</span>
								<textarea class="form-input" rows="4" bind:value={message} placeholder="W czym możemy pomóc?" required></textarea>
							</label>
						</div>

						<!-- honeypot -->
						<label class="hp" aria-hidden="true">
							Firma<input type="text" tabindex="-1" autocomplete="off" bind:value={company} />
						</label>

						<label class="form-consent">
							<input type="checkbox" bind:checked={consent} />
							<span>{rodoText}</span>
						</label>

						{#if status === 'error'}
							<p class="form-error" role="alert">{errorMsg}</p>
						{/if}

						<button type="submit" class="btn-accent mt-5 w-full" disabled={status === 'sending'}>
							{#if status === 'sending'}
								<span class="spinner"></span> Wysyłanie…
							{:else}
								Wyślij zapytanie
								<Icon name="arrow" class="h-4 w-4" />
							{/if}
						</button>
					</form>
				{/if}
			</div>
		</div>
	</div>
</section>

<style>
	.contact-grid {
		display: grid;
		gap: 3rem;
		align-items: start;
	}
	@media (min-width: 900px) {
		.contact-grid {
			grid-template-columns: 0.95fr 1.05fr;
			gap: 4rem;
		}
	}
	.contact-item {
		display: flex;
		align-items: center;
		gap: 0.9rem;
		font-size: 1rem;
		color: #33414d;
	}
	.contact-item a:hover {
		color: #127bb0;
	}
	.contact-item__icon {
		display: grid;
		place-items: center;
		height: 44px;
		width: 44px;
		flex: none;
		border-radius: 12px;
		background: rgba(28, 157, 215, 0.1);
	}
	.contact-card {
		border-radius: 24px;
		background: #ffffff;
		border: 1px solid rgba(15, 36, 56, 0.1);
		box-shadow: 0 30px 70px -40px rgba(15, 36, 56, 0.5);
		padding: 2rem;
	}
	@media (min-width: 640px) {
		.contact-card {
			padding: 2.5rem;
		}
	}
	.form-row {
		margin-bottom: 1.1rem;
	}
	.form-row--split {
		display: grid;
		gap: 1.1rem;
	}
	@media (min-width: 560px) {
		.form-row--split {
			grid-template-columns: 1fr 1fr;
		}
	}
	.form-field {
		display: block;
	}
	.form-label {
		display: block;
		margin-bottom: 0.4rem;
		font-size: 0.82rem;
		font-weight: 600;
		color: #33414d;
	}
	.form-input {
		width: 100%;
		border-radius: 12px;
		border: 1px solid rgba(15, 36, 56, 0.15);
		background: #f8fafc;
		padding: 0.75rem 0.9rem;
		font-size: 0.95rem;
		color: #1a1a1a;
		transition:
			border-color 0.2s ease,
			box-shadow 0.2s ease,
			background 0.2s ease;
	}
	.form-input::placeholder {
		color: #9aa7b2;
	}
	.form-input:focus {
		outline: none;
		border-color: #1c9dd7;
		background: #ffffff;
		box-shadow: 0 0 0 4px rgba(28, 157, 215, 0.12);
	}
	textarea.form-input {
		resize: vertical;
		min-height: 110px;
	}
	.form-consent {
		display: flex;
		align-items: flex-start;
		gap: 0.6rem;
		margin-top: 0.4rem;
		font-size: 0.8rem;
		line-height: 1.5;
		color: #667380;
	}
	.form-consent input {
		margin-top: 0.15rem;
		height: 1.05rem;
		width: 1.05rem;
		flex: none;
		accent-color: #1c9dd7;
	}
	.form-error {
		margin-top: 0.9rem;
		border-radius: 10px;
		background: rgba(220, 38, 38, 0.08);
		padding: 0.65rem 0.85rem;
		font-size: 0.82rem;
		color: #b91c1c;
	}
	.hp {
		position: absolute;
		left: -9999px;
		width: 1px;
		height: 1px;
		overflow: hidden;
	}
	.spinner {
		height: 16px;
		width: 16px;
		border-radius: 50%;
		border: 2px solid rgba(255, 255, 255, 0.4);
		border-top-color: #ffffff;
		animation: spin 0.7s linear infinite;
	}
	.contact-success {
		text-align: center;
		padding: 1.5rem 0;
	}
	.contact-success__icon {
		display: grid;
		place-items: center;
		height: 64px;
		width: 64px;
		margin: 0 auto;
		border-radius: 50%;
		background: linear-gradient(135deg, #16a34a, #0f8a3d);
	}
	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}
</style>
