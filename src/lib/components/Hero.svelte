<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import Icon from './Icon.svelte';
	import Facets from './Facets.svelte';
	import { hero, heroSlides } from '$data/content.js';

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
	<div class="hero__bg" aria-hidden="true"></div>
	<div class="hero__facets" aria-hidden="true"><Facets tone="blue" /></div>

	<div
		class="container-x relative grid items-center gap-12 pt-32 pb-16 md:pt-40 md:pb-24 lg:grid-cols-[1.05fr_0.95fr]"
	>
		<div class="max-w-xl">
			<div class="hero__text" aria-live="polite">
				{#key current}
					<div in:fade={{ duration: 450 }}>
						<p class="eyebrow">
							<span class="h-px w-6 bg-cyan"></span>
							{slide.tag}
						</p>
						<h1
							class="mt-5 text-[2.1rem] font-extrabold leading-[1.1] text-navy sm:text-5xl lg:text-[3.3rem]"
						>
							{slide.title}
						</h1>
						<p class="mt-6 text-lg leading-relaxed text-muted">{slide.subtitle}</p>
						<div class="mt-9 flex flex-wrap gap-4">
							<a href={slide.href} class="btn-primary">
								Dowiedz się więcej
								<Icon name="arrow" class="h-4 w-4" />
							</a>
							<a href="/#kontakt" class="btn-outline">Zamów analizę ryzyka</a>
						</div>
					</div>
				{/key}
			</div>

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

			<dl class="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-navy/10 pt-8">
				{#each hero.stats as stat}
					<div>
						<dt class="font-display text-3xl font-bold text-navy">{stat.value}</dt>
						<dd class="mt-1 text-xs font-medium uppercase tracking-wide text-muted">{stat.label}</dd>
					</div>
				{/each}
			</dl>
		</div>

		<div class="hero__visual">
			<div class="hero__frame">
				<div class="hero__frame-fallback"><Facets tone="cyan" /></div>
				{#each heroSlides as s, i}
					<img
						class="hero__slide-img"
						class:is-active={i === current}
						src={s.image}
						alt=""
						loading={i === 0 ? 'eager' : 'lazy'}
						fetchpriority={i === 0 ? 'high' : 'auto'}
						onerror={(e) => e.currentTarget.classList.add('failed')}
					/>
				{/each}
			</div>

			<div class="hero__badge hero__badge--top">
				<span class="hero__badge-dot"></span>
				<div>
					<p class="text-xs font-semibold text-navy">Analiza ryzyka</p>
					<p class="text-[0.7rem] text-muted">gotowa w 48h</p>
				</div>
			</div>

			<div class="hero__badge hero__badge--bottom">
				<div class="hero__badge-icon">
					<Icon name="shield" class="h-5 w-5 text-cyan" />
				</div>
				<div>
					<p class="font-display text-xl font-bold leading-none text-navy">98%</p>
					<p class="text-[0.7rem] text-muted">skuteczność roszczeń</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.hero {
		position: relative;
		overflow: hidden;
	}
	.hero__bg {
		position: absolute;
		inset: 0;
		background:
			radial-gradient(60% 55% at 85% 8%, rgba(28, 157, 215, 0.14), transparent 70%),
			radial-gradient(50% 50% at 8% 30%, rgba(28, 157, 215, 0.08), transparent 70%),
			linear-gradient(180deg, #f4f9fc 0%, #ffffff 60%);
	}
	.hero__facets {
		position: absolute;
		top: -70px;
		right: -80px;
		width: 480px;
		max-width: 55vw;
		opacity: 0.5;
		filter: drop-shadow(0 20px 40px rgba(28, 157, 215, 0.15));
		z-index: 0;
	}
	@media (max-width: 1024px) {
		.hero__facets {
			opacity: 0.28;
			top: -50px;
			right: -110px;
		}
	}
	.hero__bg::after {
		content: '';
		position: absolute;
		inset: 0;
		background-image:
			linear-gradient(rgba(15, 36, 56, 0.04) 1px, transparent 1px),
			linear-gradient(90deg, rgba(15, 36, 56, 0.04) 1px, transparent 1px);
		background-size: 44px 44px;
		mask-image: radial-gradient(70% 60% at 70% 20%, #000 0%, transparent 75%);
	}

	.hero__text {
		position: relative;
	}
	@media (min-width: 1024px) {
		.hero__text {
			min-height: 22rem;
		}
	}

	.hero__controls {
		margin-top: 1.75rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		max-width: 28rem;
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
		background: rgba(15, 36, 56, 0.2);
		transition:
			width 0.3s ease,
			background 0.3s ease;
	}
	.hero__dot:hover {
		background: rgba(15, 36, 56, 0.4);
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
		height: 38px;
		width: 38px;
		border-radius: 999px;
		border: 1px solid rgba(15, 36, 56, 0.15);
		color: #0f2438;
		transition:
			background 0.2s ease,
			border-color 0.2s ease,
			color 0.2s ease;
	}
	.hero__arrow:hover {
		background: #0f2438;
		border-color: #0f2438;
		color: #ffffff;
	}

	.hero__visual {
		position: relative;
		margin-inline: auto;
		width: 100%;
		max-width: 460px;
	}
	.hero__frame {
		position: relative;
		width: 100%;
		border-radius: 26px;
		overflow: hidden;
		box-shadow: 0 40px 80px -40px rgba(15, 36, 56, 0.55);
		background: linear-gradient(135deg, #1e3a4c, #0f2438);
		aspect-ratio: 4 / 5;
	}
	.hero__slide-img {
		position: absolute;
		inset: 0;
		z-index: 1;
		height: 100%;
		width: 100%;
		object-fit: cover;
		opacity: 0;
		transition: opacity 0.8s ease;
	}
	.hero__slide-img.is-active {
		opacity: 1;
	}
	.hero__slide-img.failed {
		opacity: 0 !important;
	}
	.hero__frame-fallback {
		position: absolute;
		inset: 0;
		display: grid;
		place-items: center;
		opacity: 0.45;
	}
	.hero__frame-fallback :global(.facets) {
		width: 62%;
	}
	.hero__badge {
		position: absolute;
		z-index: 2;
		display: flex;
		align-items: center;
		gap: 0.65rem;
		background: rgba(255, 255, 255, 0.95);
		backdrop-filter: blur(8px);
		border-radius: 16px;
		padding: 0.7rem 0.95rem;
		box-shadow: 0 16px 40px -18px rgba(15, 36, 56, 0.45);
	}
	.hero__badge--top {
		top: 1.4rem;
		left: -1.4rem;
	}
	.hero__badge--bottom {
		bottom: 1.6rem;
		right: -1.3rem;
	}
	.hero__badge-dot {
		height: 10px;
		width: 10px;
		border-radius: 50%;
		background: #16a34a;
		box-shadow: 0 0 0 4px rgba(22, 163, 74, 0.15);
	}
	.hero__badge-icon {
		display: grid;
		place-items: center;
		height: 40px;
		width: 40px;
		border-radius: 12px;
		background: rgba(28, 157, 215, 0.1);
	}
	@media (max-width: 640px) {
		.hero__badge--top {
			left: 0.4rem;
		}
		.hero__badge--bottom {
			right: 0.4rem;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.hero__slide-img {
			transition: none;
		}
	}
</style>
