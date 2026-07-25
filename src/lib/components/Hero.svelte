<script>
	import Icon from './Icon.svelte';
	import { hero } from '$data/content.js';
</script>

<section id="top" class="hero">
	<div class="hero__bg" aria-hidden="true"></div>
	<div class="container-x relative grid items-center gap-12 pt-32 pb-16 md:pt-40 md:pb-24 lg:grid-cols-[1.05fr_0.95fr]">
		<div class="max-w-xl">
			<p class="eyebrow reveal">
				<span class="h-px w-6 bg-cyan"></span>
				{hero.eyebrow}
			</p>
			<h1 class="reveal mt-5 text-4xl font-extrabold leading-[1.08] text-navy sm:text-5xl lg:text-6xl" style="transition-delay:80ms">
				{hero.title}
			</h1>
			<p class="reveal mt-6 text-lg leading-relaxed text-muted" style="transition-delay:160ms">
				{hero.subtitle}
			</p>
			<div class="reveal mt-9 flex flex-wrap gap-4" style="transition-delay:240ms">
				<a href={hero.primaryCta.href} class="btn-primary">
					{hero.primaryCta.label}
					<Icon name="arrow" class="h-4 w-4" />
				</a>
				<a href={hero.secondaryCta.href} class="btn-outline">{hero.secondaryCta.label}</a>
			</div>

			<dl class="reveal mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-navy/10 pt-8" style="transition-delay:320ms">
				{#each hero.stats as stat}
					<div>
						<dt class="font-display text-3xl font-bold text-navy">{stat.value}</dt>
						<dd class="mt-1 text-xs font-medium uppercase tracking-wide text-muted">{stat.label}</dd>
					</div>
				{/each}
			</dl>
		</div>

		<div class="hero__visual reveal" style="transition-delay:200ms">
			<div class="hero__frame">
				<img
					src="/images/hero.jpg"
					alt="Doradca ubezpieczeniowy Aura Expert w nowoczesnym biurze"
					width="720"
					height="880"
					loading="eager"
					fetchpriority="high"
				/>
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
	.hero__visual {
		position: relative;
		margin-inline: auto;
		max-width: 460px;
	}
	.hero__frame {
		position: relative;
		border-radius: 26px;
		overflow: hidden;
		box-shadow: 0 40px 80px -40px rgba(15, 36, 56, 0.55);
		background: linear-gradient(135deg, #1e3a4c, #0f2438);
		aspect-ratio: 4 / 5;
	}
	.hero__frame img {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
	.hero__badge {
		position: absolute;
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
</style>
