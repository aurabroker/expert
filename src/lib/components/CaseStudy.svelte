<script>
	import Icon from './Icon.svelte';
	import { caseStudies } from '$data/content.js';
</script>

<section id="case-study" class="section bg-slate-50">
	<div class="container-x">
		<div class="max-w-2xl reveal">
			<p class="eyebrow">Case study</p>
			<h2 class="mt-4 text-3xl font-bold text-navy sm:text-4xl">Jak działamy, gdy pojawia się ryzyko</h2>
			<p class="mt-4 text-lg text-muted">
				Przykładowe realizacje pokazujące, jak dobrana przez nas ochrona sprawdza się w praktyce —
				od wyzwania po realny efekt.
			</p>
		</div>

		<div class="mt-14 grid gap-6 md:grid-cols-3">
			{#each caseStudies as cs, i}
				<article class="cs-card reveal" style="transition-delay:{i * 100}ms">
					<div class="cs-card__head">
						<span class="cs-card__tag">{cs.tag}</span>
						<div class="cs-card__metric">
							<span class="cs-card__metric-num">{cs.metric}</span>
							<span class="cs-card__metric-label">{cs.metricLabel}</span>
						</div>
					</div>

					<h3 class="cs-card__title">{cs.title}</h3>

					<div class="cs-card__block">
						<span class="cs-card__label">Wyzwanie</span>
						<p>{cs.challenge}</p>
					</div>
					<div class="cs-card__block">
						<span class="cs-card__label">Rozwiązanie</span>
						<p>{cs.solution}</p>
					</div>

					<div class="cs-card__result">
						<Icon name="check" class="mt-0.5 h-4 w-4 flex-none text-emerald-600" />
						<span>{cs.result}</span>
					</div>
				</article>
			{/each}
		</div>

		<p class="mt-8 text-sm text-slate-400 reveal">
			Powyższe realizacje mają charakter anonimizowany i poglądowy.
		</p>
	</div>
</section>

<style>
	.cs-card {
		display: flex;
		flex-direction: column;
		border-radius: 20px;
		background: #ffffff;
		border: 1px solid rgba(15, 36, 56, 0.08);
		padding: 1.9rem;
		box-shadow: 0 10px 40px -24px rgba(15, 36, 56, 0.4);
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease,
			border-color 0.3s ease;
	}
	.cs-card:hover {
		transform: translateY(-4px);
		border-color: rgba(28, 157, 215, 0.35);
		box-shadow: 0 24px 60px -30px rgba(15, 36, 56, 0.45);
	}
	.cs-card__head {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 1rem;
	}
	.cs-card__tag {
		align-self: flex-start;
		border-radius: 999px;
		background: rgba(28, 157, 215, 0.1);
		color: #127bb0;
		font-family: 'Sora', sans-serif;
		font-size: 0.7rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		padding: 0.35rem 0.7rem;
	}
	.cs-card__metric {
		text-align: right;
		line-height: 1.05;
	}
	.cs-card__metric-num {
		display: block;
		font-family: 'Sora', sans-serif;
		font-size: 1.65rem;
		font-weight: 800;
		color: #0f2438;
	}
	.cs-card__metric-label {
		display: block;
		font-size: 0.7rem;
		color: #94a3b8;
	}
	.cs-card__title {
		margin-top: 1.25rem;
		font-size: 1.15rem;
		font-weight: 700;
		color: #0f2438;
		letter-spacing: -0.01em;
	}
	.cs-card__block {
		margin-top: 1.1rem;
	}
	.cs-card__label {
		display: block;
		margin-bottom: 0.25rem;
		font-size: 0.7rem;
		font-weight: 700;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: #ff7a00;
	}
	.cs-card__block p {
		font-size: 0.9rem;
		line-height: 1.6;
		color: #475569;
	}
	.cs-card__result {
		margin-top: auto;
		padding-top: 1.5rem;
		display: flex;
		align-items: flex-start;
		gap: 0.55rem;
		font-size: 0.9rem;
		font-weight: 600;
		color: #0f2438;
	}
</style>
