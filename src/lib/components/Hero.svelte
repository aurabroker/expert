<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import Icon from './Icon.svelte';
	import { heroSlides } from '$data/content.js';

	const INTERVAL = 6000;
	let current = $state(0);
	let paused = $state(false);
	let timer;

	const slide = $derived(heroSlides[current]);

	function startTimer() {
		clearInterval(timer);
		timer = setInterval(() => {
			if (!paused) current = (current + 1) % heroSlides.length;
		}, INTERVAL);
	}
	function go(i) {
		current = (i + heroSlides.length) % heroSlides.length;
		startTimer();
	}

	onMount(() => {
		startTimer();
		return () => clearInterval(timer);
	});
</script>

<section
	id="top"
	class="hero"
	onmouseenter={() => (paused = true)}
	onmouseleave={() => (paused = false)}
>
	<div class="hero__media" aria-hidden="true">
		{#key current}
			{#if slide.video}
				<video
					class="hero__video"
					src={slide.video}
					poster="/images/hero.jpg"
					autoplay
					muted
					loop
					playsinline
					preload="auto"
				></video>
			{:else}
				<picture>
					<source srcset="/images/hero.webp" type="image/webp" />
					<img
						class="hero__video"
						src="/images/hero.jpg"
						alt=""
						loading="eager"
						fetchpriority="high"
					/>
				</picture>
			{/if}
		{/key}
		<div class="hero__scrim"></div>
	</div>

	<div class="container-x hero__inner">
		<div class="hero__text" aria-live="polite">
			{#key current}
				<div in:fade={{ duration: 450 }}>
					{#if slide.logo}
						<span class="hero__brand"><img src={slide.logo} alt={slide.tag} /></span>
					{:else}
						<p class="eyebrow hero__eyebrow">
							<span class="h-px w-6 bg-cyan"></span>
							{slide.tag}
						</p>
					{/if}
					<h1 class="hero__title">{slide.title}</h1>
					<p class="hero__subtitle">{slide.subtitle}</p>
					<div class="mt-9 flex flex-wrap gap-4">
						<a href={slide.href} class="btn hero__cta hero__cta--solid">
							Dowiedz się więcej
							<Icon name="arrow" class="h-4 w-4" />
						</a>
						<a href="/#kontakt" class="btn hero__cta hero__cta--ghost">Zamów analizę ryzyka</a>
					</div>
				</div>
			{/key}

			<div class="hero__controls">
				<div class="hero__dots" role="tablist" aria-label="Wybór slajdu">
					{#each heroSlides as s, i}
						<button
							class="hero__dot"
							class:is-active={i === current}
							onclick={() => go(i)}
							role="tab"
							aria-selected={i === current}
							aria-label={`${i + 1}. ${s.tag}`}
						></button>
					{/each}
				</div>
				<div class="hero__arrows">
					<button class="hero__arrow" onclick={() => go(current - 1)} aria-label="Poprzedni slajd">
						<Icon name="arrow" class="h-4 w-4 rotate-180" />
					</button>
					<button class="hero__arrow" onclick={() => go(current + 1)} aria-label="Następny slajd">
						<Icon name="arrow" class="h-4 w-4" />
					</button>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.hero {
		position: relative;
		display: flex;
		align-items: center;
		overflow: hidden;
		min-height: clamp(600px, 92vh, 900px);
		background: #091726;
	}

	/* Wideo na całą szerokość — tło */
	.hero__media {
		position: absolute;
		inset: 0;
		z-index: 0;
	}
	.hero__video {
		position: absolute;
		inset: 0;
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
	.hero__media picture {
		display: block;
		height: 100%;
		width: 100%;
	}
	.hero__scrim {
		position: absolute;
		inset: 0;
		background:
			linear-gradient(
				90deg,
				rgba(9, 23, 38, 0.92) 0%,
				rgba(9, 23, 38, 0.74) 34%,
				rgba(9, 23, 38, 0.4) 66%,
				rgba(9, 23, 38, 0.18) 100%
			),
			linear-gradient(0deg, rgba(9, 23, 38, 0.6) 0%, transparent 42%);
	}

	.hero__inner {
		position: relative;
		z-index: 2;
		width: 100%;
		padding-top: calc(var(--nav-h) + 2rem);
		padding-bottom: 3.5rem;
	}
	.hero__text {
		max-width: 40rem;
	}

	/* Logo BeautyPolisa (biały „chip", czytelny na wideo) */
	.hero__brand {
		display: inline-flex;
		align-items: center;
		background: #ffffff;
		border-radius: 14px;
		padding: 0.55rem 1.05rem;
		box-shadow: 0 14px 34px -16px rgba(0, 0, 0, 0.6);
	}
	.hero__brand img {
		height: 34px;
		width: auto;
		object-fit: contain;
	}

	.hero__eyebrow {
		color: #7fd6f7;
	}

	.hero__title {
		margin-top: 1.4rem;
		font-family: 'Sora', sans-serif;
		font-weight: 800;
		line-height: 1.08;
		letter-spacing: -0.02em;
		color: #ffffff;
		font-size: clamp(2.15rem, 5.2vw, 3.6rem);
		text-shadow: 0 2px 24px rgba(0, 0, 0, 0.35);
	}
	.hero__subtitle {
		margin-top: 1.5rem;
		max-width: 34rem;
		font-size: 1.125rem;
		line-height: 1.65;
		color: rgba(255, 255, 255, 0.82);
	}

	/* Przyciski nad wideo */
	.hero__cta {
		border-radius: 999px;
	}
	.hero__cta--solid {
		background: #ffffff;
		color: #0f2438;
		box-shadow: 0 16px 40px -18px rgba(0, 0, 0, 0.55);
	}
	.hero__cta--solid:hover {
		background: #eaf6fc;
		transform: translateY(-2px);
	}
	.hero__cta--ghost {
		border: 1px solid rgba(255, 255, 255, 0.4);
		color: #ffffff;
		background: rgba(255, 255, 255, 0.06);
	}
	.hero__cta--ghost:hover {
		background: #ffffff;
		color: #0f2438;
	}

	.hero__controls {
		margin-top: 2.5rem;
		display: flex;
		align-items: center;
		gap: 1.5rem;
	}
	.hero__dots {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
	.hero__dot {
		height: 8px;
		width: 8px;
		border-radius: 999px;
		background: rgba(255, 255, 255, 0.35);
		transition:
			width 0.3s ease,
			background 0.3s ease;
	}
	.hero__dot:hover {
		background: rgba(255, 255, 255, 0.6);
	}
	.hero__dot.is-active {
		width: 26px;
		background: #1c9dd7;
	}
	.hero__arrows {
		display: flex;
		gap: 0.5rem;
	}
	.hero__arrow {
		display: grid;
		place-items: center;
		height: 40px;
		width: 40px;
		border-radius: 999px;
		border: 1px solid rgba(255, 255, 255, 0.3);
		color: #ffffff;
		transition:
			background 0.2s ease,
			border-color 0.2s ease,
			color 0.2s ease;
	}
	.hero__arrow:hover {
		background: #ffffff;
		border-color: #ffffff;
		color: #0f2438;
	}
</style>
