<script>
	import Header from '$components/Header.svelte';
	import Footer from '$components/Footer.svelte';
	import Icon from '$components/Icon.svelte';
	import Facets from '$components/Facets.svelte';
	import { site } from '$data/content.js';

	let { data } = $props();
	const { service, detail, related } = data;

	const metaTitle = `${service.title} — ${site.name}`;
	const metaDesc = detail?.lead ?? service.description;
</script>

<svelte:head>
	<title>{metaTitle}</title>
	<meta name="description" content={metaDesc} />
	<link rel="canonical" href={`${site.url}/ubezpieczenia/${service.slug}`} />
	<meta property="og:title" content={metaTitle} />
	<meta property="og:description" content={metaDesc} />
	<meta property="og:type" content="article" />
</svelte:head>

<Header />

<main>
	<!-- HERO -->
	<section class="svc-hero">
		<div class="svc-hero__facets" aria-hidden="true"><Facets tone="cyan" /></div>
		<div class="container-x relative">
			<nav class="svc-breadcrumb" aria-label="Ścieżka">
				<a href="/#top">Strona główna</a>
				<span aria-hidden="true">/</span>
				<a href="/#uslugi">Ubezpieczenia</a>
				<span aria-hidden="true">/</span>
				<span class="svc-breadcrumb__current">{service.title}</span>
			</nav>

			<div class="svc-hero__grid">
				<div>
					{#if service.logo}
						<span class="svc-hero__logo"><img src={service.logo} alt={service.title} height="34" /></span>
					{:else}
						<span class="svc-hero__tag">{service.tag}</span>
					{/if}
					<h1 class="svc-hero__title">{service.title}</h1>
					<p class="svc-hero__lead">{detail?.lead ?? service.description}</p>
					<div class="svc-hero__ctas">
						<a href="/#kontakt" class="btn-accent">
							Poproś o konsultację
							<Icon name="arrow" class="h-4 w-4" />
						</a>
						<a href="/#uslugi" class="btn-ghost-light">Wszystkie ubezpieczenia</a>
					</div>
				</div>

				{#if !service.logo}
					<div class="svc-hero__icon" aria-hidden="true">
						<Icon name={service.icon} class="h-14 w-14" />
					</div>
				{/if}
			</div>
		</div>
	</section>

	<!-- CO OBEJMUJE -->
	{#if detail?.coverage?.length}
		<section class="section bg-white">
			<div class="container-x">
				<div class="max-w-2xl">
					<p class="eyebrow">Zakres ochrony</p>
					<h2 class="mt-4 text-3xl font-bold text-navy sm:text-4xl">Co obejmuje ochrona</h2>
				</div>
				<div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
					{#each detail.coverage as item}
						<div class="cov-card">
							<span class="cov-card__icon"><Icon name="check" class="h-5 w-5" /></span>
							<h3 class="cov-card__title">{item.title}</h3>
							<p class="cov-card__desc">{item.desc}</p>
						</div>
					{/each}
				</div>
			</div>
		</section>
	{/if}

	<!-- DLA KOGO + FAQ -->
	<section class="section bg-slate-50">
		<div class="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
			{#if detail?.audience?.length}
				<div>
					<p class="eyebrow">Dla kogo</p>
					<h2 class="mt-4 text-2xl font-bold text-navy sm:text-3xl">Komu polecamy</h2>
					<ul class="who-list">
						{#each detail.audience as who}
							<li><Icon name="check" class="mt-0.5 h-5 w-5 flex-none text-cyan" /><span>{who}</span></li>
						{/each}
					</ul>
				</div>
			{/if}

			{#if detail?.faq?.length}
				<div>
					<p class="eyebrow">FAQ</p>
					<h2 class="mt-4 text-2xl font-bold text-navy sm:text-3xl">Najczęstsze pytania</h2>
					<div class="mt-6 space-y-3">
						{#each detail.faq as item}
							<details class="faq">
								<summary>
									<span>{item.q}</span>
									<span class="faq__chevron" aria-hidden="true"></span>
								</summary>
								<p>{item.a}</p>
							</details>
						{/each}
					</div>
				</div>
			{/if}
		</div>
	</section>

	<!-- CTA -->
	<section class="svc-cta">
		<div class="container-x text-center">
			<h2 class="text-3xl font-bold text-white sm:text-4xl">Sprawdźmy, jak możemy Cię chronić</h2>
			<p class="mx-auto mt-4 max-w-xl text-lg text-slate-300">
				Bezpłatna analiza ryzyka w 48 godzin, bez zobowiązań. Odpowiadamy średnio w ciągu 2 godzin.
			</p>
			<div class="mt-8 flex flex-wrap justify-center gap-4">
				<a href="/#kontakt" class="btn-accent">Poproś o konsultację<Icon name="arrow" class="h-4 w-4" /></a>
				<a href="tel:{site.phoneHref}" class="btn-ghost-light">{site.phone}</a>
			</div>
		</div>
	</section>

	<!-- POWIĄZANE -->
	{#if related?.length}
		<section class="section bg-white">
			<div class="container-x">
				<h2 class="text-2xl font-bold text-navy sm:text-3xl">Pozostałe ubezpieczenia</h2>
				<div class="mt-8 grid gap-5 sm:grid-cols-3">
					{#each related as r}
						<a href="/ubezpieczenia/{r.slug}" class="rel-card">
							<span class="rel-card__icon"><Icon name={r.icon} class="h-6 w-6" /></span>
							<span class="rel-card__title">{r.title}</span>
							<span class="rel-card__more">Zobacz <Icon name="arrow" class="h-4 w-4" /></span>
						</a>
					{/each}
				</div>
			</div>
		</section>
	{/if}
</main>

<Footer />

<style>
	.svc-hero {
		position: relative;
		overflow: hidden;
		background: linear-gradient(160deg, #1e3a4c 0%, #0f2438 100%);
		padding-top: calc(var(--nav-h) + 3rem);
		padding-bottom: 4rem;
	}
	.svc-hero__facets {
		position: absolute;
		top: -60px;
		right: -80px;
		width: 460px;
		max-width: 55vw;
		opacity: 0.2;
		pointer-events: none;
	}
	.svc-breadcrumb {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.82rem;
		color: #94a3b8;
	}
	.svc-breadcrumb a:hover {
		color: #4fb9e8;
	}
	.svc-breadcrumb__current {
		color: #cbd5e1;
	}
	.svc-hero__grid {
		margin-top: 2rem;
		display: grid;
		gap: 2rem;
		align-items: center;
	}
	@media (min-width: 900px) {
		.svc-hero__grid {
			grid-template-columns: 1.4fr 0.6fr;
		}
	}
	.svc-hero__tag {
		display: inline-block;
		font-family: 'Sora', sans-serif;
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: #ff7a00;
	}
	.svc-hero__logo {
		display: inline-flex;
		background: #ffffff;
		border-radius: 14px;
		padding: 0.8rem 1.1rem;
		box-shadow: 0 10px 30px -14px rgba(0, 0, 0, 0.5);
	}
	.svc-hero__logo img {
		height: 34px;
		width: auto;
		display: block;
	}
	.svc-hero__title {
		margin-top: 1rem;
		font-size: clamp(2rem, 5vw, 3.25rem);
		font-weight: 800;
		line-height: 1.08;
		color: #ffffff;
		letter-spacing: -0.02em;
	}
	.svc-hero__lead {
		margin-top: 1.25rem;
		max-width: 46rem;
		font-size: 1.125rem;
		line-height: 1.7;
		color: #cbd5e1;
	}
	.svc-hero__ctas {
		margin-top: 2rem;
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}
	.svc-hero__icon {
		display: grid;
		place-items: center;
		height: 120px;
		width: 120px;
		margin-inline: auto;
		border-radius: 28px;
		background: rgba(28, 157, 215, 0.12);
		border: 1px solid rgba(28, 157, 215, 0.28);
		color: #4fb9e8;
	}
	@media (max-width: 899px) {
		.svc-hero__icon {
			display: none;
		}
	}

	.cov-card {
		border-radius: 18px;
		border: 1px solid rgba(15, 36, 56, 0.09);
		background: #ffffff;
		padding: 1.6rem;
		box-shadow: 0 10px 34px -24px rgba(15, 36, 56, 0.4);
		transition:
			transform 0.25s ease,
			border-color 0.25s ease;
	}
	.cov-card:hover {
		transform: translateY(-3px);
		border-color: rgba(28, 157, 215, 0.35);
	}
	.cov-card__icon {
		display: grid;
		place-items: center;
		height: 40px;
		width: 40px;
		border-radius: 11px;
		background: rgba(28, 157, 215, 0.1);
		color: #127bb0;
	}
	.cov-card__title {
		margin-top: 1rem;
		font-size: 1.05rem;
		font-weight: 700;
		color: #0f2438;
	}
	.cov-card__desc {
		margin-top: 0.4rem;
		font-size: 0.9rem;
		line-height: 1.6;
		color: #475569;
	}

	.who-list {
		margin-top: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.9rem;
	}
	.who-list li {
		display: flex;
		align-items: flex-start;
		gap: 0.65rem;
		font-size: 1rem;
		color: #33414d;
	}

	.faq {
		border: 1px solid rgba(15, 36, 56, 0.1);
		border-radius: 14px;
		background: #ffffff;
		overflow: hidden;
	}
	.faq summary {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding: 1.1rem 1.25rem;
		font-weight: 600;
		color: #0f2438;
		cursor: pointer;
		list-style: none;
	}
	.faq summary::-webkit-details-marker {
		display: none;
	}
	.faq__chevron {
		flex: none;
		height: 9px;
		width: 9px;
		border-right: 2px solid #1c9dd7;
		border-bottom: 2px solid #1c9dd7;
		transform: rotate(45deg);
		transition: transform 0.2s ease;
	}
	.faq[open] .faq__chevron {
		transform: rotate(-135deg);
	}
	.faq p {
		padding: 0 1.25rem 1.2rem;
		font-size: 0.95rem;
		line-height: 1.65;
		color: #475569;
	}

	.svc-cta {
		position: relative;
		overflow: hidden;
		background: #0a1a2b;
		padding: 5rem 0;
	}

	.rel-card {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		border-radius: 16px;
		border: 1px solid rgba(15, 36, 56, 0.1);
		background: #ffffff;
		padding: 1.5rem;
		transition:
			transform 0.25s ease,
			border-color 0.25s ease,
			box-shadow 0.25s ease;
	}
	.rel-card:hover {
		transform: translateY(-3px);
		border-color: rgba(28, 157, 215, 0.4);
		box-shadow: 0 20px 50px -30px rgba(15, 36, 56, 0.45);
	}
	.rel-card__icon {
		display: grid;
		place-items: center;
		height: 44px;
		width: 44px;
		border-radius: 12px;
		background: rgba(28, 157, 215, 0.1);
		color: #127bb0;
	}
	.rel-card__title {
		font-size: 1.05rem;
		font-weight: 700;
		color: #0f2438;
	}
	.rel-card__more {
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
		font-size: 0.85rem;
		font-weight: 600;
		color: #127bb0;
	}
</style>
