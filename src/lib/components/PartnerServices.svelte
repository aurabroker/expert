<script>
	import Icon from './Icon.svelte';
	import { externalServices } from '$data/content.js';
</script>

<section id="serwisy" class="section bg-slate-50">
	<div class="container-x">
		<div class="max-w-2xl reveal">
			<p class="eyebrow">Nasze serwisy</p>
			<h2 class="mt-4 text-3xl font-bold text-navy sm:text-4xl">Poznaj pozostałe serwisy Aura Expert</h2>
			<p class="mt-4 text-lg text-muted">
				Wyspecjalizowane rozwiązania w ramach grupy Aura Expert — dla przedsiębiorców, zespołów i branż.
			</p>
		</div>

		<div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each externalServices as s, i}
				{#if s.soon}
					<div class="ps-card ps-card--soon reveal" style="transition-delay:{i * 90}ms">
						<span class="ps-media ps-media--{s.kind}"><img src={s.img} alt={s.label} loading="lazy" /></span>
						<span class="ps-body">
							<span class="ps-label">{s.label}</span>
							<span class="ps-desc">{s.desc}</span>
							<span class="ps-soon">wkrótce</span>
						</span>
					</div>
				{:else}
					<a
						href={s.href}
						target="_blank"
						rel="noopener"
						class="ps-card reveal"
						style="transition-delay:{i * 90}ms"
					>
						<span class="ps-media ps-media--{s.kind}"><img src={s.img} alt={s.label} loading="lazy" /></span>
						<span class="ps-body">
							<span class="ps-label">{s.label}</span>
							<span class="ps-desc">{s.desc}</span>
							<span class="ps-more">Przejdź do serwisu <Icon name="arrow" class="h-4 w-4" /></span>
						</span>
					</a>
				{/if}
			{/each}
		</div>
	</div>
</section>

<style>
	.ps-card {
		display: flex;
		flex-direction: column;
		border-radius: 20px;
		border: 1px solid rgba(15, 36, 56, 0.09);
		background: #ffffff;
		overflow: hidden;
		box-shadow: 0 10px 40px -26px rgba(15, 36, 56, 0.4);
		transition:
			transform 0.28s ease,
			border-color 0.28s ease,
			box-shadow 0.28s ease;
	}
	a.ps-card:hover {
		transform: translateY(-5px);
		border-color: rgba(28, 157, 215, 0.4);
		box-shadow: 0 26px 60px -30px rgba(15, 36, 56, 0.45);
	}

	/* Górny pas media — na całej szerokości boxa */
	.ps-media {
		display: grid;
		place-items: center;
		width: 100%;
		height: 160px;
	}
	/* Fasetkowe "U" na granatowym tle — duże, wypełnia box */
	.ps-media--facet {
		background: linear-gradient(160deg, #1e3a4c 0%, #0f2438 100%);
	}
	.ps-media--facet img {
		height: 128px;
		width: auto;
		object-fit: contain;
		filter: drop-shadow(0 10px 22px rgba(28, 157, 215, 0.3));
	}
	/* Logotypy na białym tle — większe */
	.ps-media--logo {
		background: #ffffff;
		border-bottom: 1px solid rgba(15, 36, 56, 0.08);
		padding: 1rem 1.5rem;
	}
	.ps-media--logo img {
		max-height: 66px;
		max-width: 82%;
		width: auto;
		object-fit: contain;
	}

	.ps-body {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 1.5rem 1.75rem 1.75rem;
	}
	.ps-label {
		font-family: 'Sora', sans-serif;
		font-size: 1.05rem;
		font-weight: 700;
		color: #0f2438;
	}
	.ps-desc {
		margin-top: 0.35rem;
		font-size: 0.88rem;
		line-height: 1.5;
		color: #667380;
	}
	.ps-more {
		margin-top: 1.1rem;
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		font-size: 0.85rem;
		font-weight: 600;
		color: #127bb0;
		transition: gap 0.2s ease;
	}
	a.ps-card:hover .ps-more {
		gap: 0.7rem;
	}
	.ps-card--soon {
		opacity: 0.92;
	}
	.ps-soon {
		margin-top: 1.1rem;
		display: inline-flex;
		align-items: center;
		font-size: 0.68rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: #ff7a00;
		border: 1px solid rgba(255, 122, 0, 0.45);
		border-radius: 999px;
		padding: 0.2rem 0.7rem;
	}
</style>
