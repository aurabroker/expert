<script>
	import Icon from './Icon.svelte';
	import { services } from '$data/content.js';
</script>

<section id="uslugi" class="section bg-white">
	<div class="container-x">
		<div class="max-w-2xl reveal">
			<p class="eyebrow">Zakres ochrony</p>
			<h2 class="mt-4 text-3xl font-bold text-navy sm:text-4xl">Nasze specjalizacje ubezpieczeniowe</h2>
			<p class="mt-4 text-lg text-muted">
				Od ochrony zarządu, danych i finansów firmy, po dedykowaną polisę dla branży beauty —
				projektujemy ochronę tam, gdzie naprawdę jej potrzeba.
			</p>
		</div>

		<div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each services as service, i}
				<article class="service-card reveal" style="transition-delay:{i * 100}ms">
					<div class="service-card__icon">
						<Icon name={service.icon} class="h-7 w-7" />
					</div>
					<span class="service-card__tag">{service.tag}</span>
					<h3 class="mt-3 text-xl font-bold text-white">{service.title}</h3>
					<p class="mt-1 text-sm font-medium text-cyan-light">{service.subtitle}</p>
					<p class="mt-4 text-sm leading-relaxed text-slate-300">{service.description}</p>

					<ul class="mt-6 space-y-2.5">
						{#each service.points as point}
							<li class="flex items-start gap-2.5 text-sm text-slate-200">
								<Icon name="check" class="mt-0.5 h-4 w-4 flex-none text-cyan-light" />
								<span>{point}</span>
							</li>
						{/each}
					</ul>

					<a href="/#kontakt" class="service-card__cta">
						{service.cta}
						<Icon name="arrow" class="h-4 w-4" />
					</a>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.service-card {
		position: relative;
		display: flex;
		flex-direction: column;
		border-radius: 22px;
		padding: 2rem 1.75rem;
		background: linear-gradient(160deg, #1e3a4c 0%, #0f2438 100%);
		border: 1px solid rgba(255, 255, 255, 0.06);
		overflow: hidden;
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease,
			border-color 0.3s ease;
	}
	.service-card::before {
		content: '';
		position: absolute;
		top: -40%;
		right: -30%;
		height: 220px;
		width: 220px;
		border-radius: 50%;
		background: radial-gradient(circle, rgba(28, 157, 215, 0.35), transparent 70%);
		opacity: 0;
		transition: opacity 0.35s ease;
	}
	.service-card:hover {
		transform: translateY(-6px);
		border-color: rgba(28, 157, 215, 0.4);
		box-shadow: 0 30px 60px -30px rgba(28, 157, 215, 0.4);
	}
	.service-card:hover::before {
		opacity: 1;
	}
	.service-card__icon {
		display: grid;
		place-items: center;
		height: 56px;
		width: 56px;
		border-radius: 16px;
		background: rgba(28, 157, 215, 0.12);
		border: 1px solid rgba(28, 157, 215, 0.25);
		color: #4fb9e8;
	}
	.service-card__tag {
		margin-top: 1.25rem;
		font-family: 'Sora', sans-serif;
		font-size: 0.7rem;
		font-weight: 700;
		letter-spacing: 0.22em;
		text-transform: uppercase;
		color: #ff7a00;
	}
	.service-card__cta {
		margin-top: auto;
		padding-top: 1.75rem;
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		font-size: 0.85rem;
		font-weight: 600;
		color: #4fb9e8;
		transition: gap 0.2s ease;
	}
	.service-card__cta:hover {
		gap: 0.7rem;
		color: #ffffff;
	}
</style>
