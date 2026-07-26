<script>
	import Icon from './Icon.svelte';
	import Facets from './Facets.svelte';
	import { benefits } from '$data/content.js';
</script>

<section id="dlaczego" class="section bg-navy relative overflow-hidden">
	<div class="benefits__glow" aria-hidden="true"></div>
	<div class="benefits__facets" aria-hidden="true"><Facets tone="cyan" /></div>
	<div class="container-x relative">
		<div class="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
			<div class="reveal lg:sticky lg:top-28">
				<p class="eyebrow text-cyan-light">Dlaczego Aura Expert</p>
				<h2 class="mt-4 text-3xl font-bold text-white sm:text-4xl">
					Dlaczego warto wybrać Aura&nbsp;Expert?
				</h2>
				<p class="mt-4 text-lg text-slate-300">
					Nie jesteśmy kolejnym agentem z katalogiem polis. Jesteśmy ekspertami, którzy projektują
					ochronę tak, by zadziałała w najtrudniejszym momencie.
				</p>
				<a href="/#kontakt" class="btn-accent mt-8">
					Poproś o konsultację
					<Icon name="arrow" class="h-4 w-4" />
				</a>
			</div>

			<div class="grid gap-5 sm:grid-cols-2">
				{#each benefits as benefit, i}
					<div class="benefit-card reveal" style="transition-delay:{i * 90}ms">
						{#if benefit.iconImg}
							<img
								class="benefit-card__img"
								src={benefit.iconImg}
								alt=""
								width="52"
								height="52"
								loading="lazy"
								decoding="async"
							/>
						{:else}
							<div class="benefit-card__icon">
								<Icon name={benefit.icon} class="h-6 w-6" />
							</div>
						{/if}
						<h3 class="mt-5 text-lg font-bold text-white">{benefit.title}</h3>
						<p class="mt-2 text-sm leading-relaxed text-slate-300">{benefit.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.benefits__glow {
		position: absolute;
		top: -20%;
		left: 50%;
		height: 600px;
		width: 900px;
		transform: translateX(-50%);
		background: radial-gradient(circle, rgba(28, 157, 215, 0.16), transparent 60%);
		pointer-events: none;
	}
	.benefits__facets {
		position: absolute;
		bottom: -90px;
		left: -70px;
		width: 320px;
		opacity: 0.16;
		transform: rotate(12deg);
		pointer-events: none;
	}
	@media (max-width: 768px) {
		.benefits__facets {
			width: 200px;
			opacity: 0.12;
		}
	}
	.benefit-card {
		border-radius: 20px;
		padding: 1.75rem;
		background: rgba(255, 255, 255, 0.04);
		border: 1px solid rgba(255, 255, 255, 0.08);
		transition:
			transform 0.3s ease,
			background 0.3s ease,
			border-color 0.3s ease;
	}
	.benefit-card:hover {
		transform: translateY(-4px);
		background: rgba(255, 255, 255, 0.07);
		border-color: rgba(28, 157, 215, 0.35);
	}
	.benefit-card__img {
		height: 52px;
		width: 52px;
		object-fit: contain;
		display: block;
		filter: drop-shadow(0 6px 14px rgba(28, 157, 215, 0.3));
	}
	.benefit-card__icon {
		display: grid;
		place-items: center;
		height: 52px;
		width: 52px;
		border-radius: 14px;
		background: linear-gradient(135deg, rgba(28, 157, 215, 0.25), rgba(28, 157, 215, 0.08));
		color: #4fb9e8;
	}
</style>
