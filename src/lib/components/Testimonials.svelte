<script>
	import { testimonials } from '$data/content.js';
</script>

<section id="referencje" class="section bg-slate-50">
	<div class="container-x">
		<div class="max-w-2xl reveal">
			<p class="eyebrow">Referencje klientów</p>
			<h2 class="mt-4 text-3xl font-bold text-navy sm:text-4xl">Zaufali nam liderzy biznesu</h2>
			<p class="mt-4 text-lg text-muted">
				Firmy, które postawiły na eksperckie podejście do ochrony — i przekonały się o tym w praktyce.
			</p>
		</div>

		<div class="mt-14 grid gap-6 md:grid-cols-3">
			{#each testimonials as t, i}
				<figure class="testimonial reveal" style="transition-delay:{i * 100}ms">
					<div class="testimonial__stars" aria-label="Ocena 5 na 5">★★★★★</div>
					<blockquote class="testimonial__quote">„{t.quote}"</blockquote>
					<figcaption class="testimonial__author">
						<span class="testimonial__avatar">{t.initials}</span>
						<span>
							<span class="block text-sm font-semibold text-navy">{t.name}</span>
							<span class="block text-xs text-muted">{t.role}</span>
						</span>
					</figcaption>
				</figure>
			{/each}
		</div>
	</div>
</section>

<style>
	.testimonial {
		display: flex;
		flex-direction: column;
		border-radius: 20px;
		background: #ffffff;
		border: 1px solid rgba(15, 36, 56, 0.08);
		padding: 1.9rem;
		box-shadow: 0 10px 40px -24px rgba(15, 36, 56, 0.4);
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
	}
	.testimonial:hover {
		transform: translateY(-4px);
		box-shadow: 0 24px 60px -30px rgba(15, 36, 56, 0.45);
	}
	.testimonial__stars {
		color: #ff7a00;
		letter-spacing: 0.15em;
		font-size: 0.95rem;
	}
	.testimonial__quote {
		margin-top: 1rem;
		flex: 1;
		font-size: 1rem;
		line-height: 1.65;
		color: #33414d;
	}
	.testimonial__author {
		margin-top: 1.75rem;
		display: flex;
		align-items: center;
		gap: 0.85rem;
	}
	.testimonial__avatar {
		display: grid;
		place-items: center;
		height: 46px;
		width: 46px;
		flex: none;
		border-radius: 50%;
		background: linear-gradient(135deg, #1c9dd7, #0f2438);
		color: #ffffff;
		font-family: 'Sora', sans-serif;
		font-weight: 700;
		font-size: 0.9rem;
	}
</style>
