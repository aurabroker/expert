<script>
	// „we współpracy z [logo] Nazwa partnera" — na ciemnym tle (hero, karty usług).
	// Logo partnera stoi na białym „chipie", żeby znak firmowy pozostał w oryginalnych kolorach.

	/** @type {{ partner: { name: string, logo?: string }, size?: 'sm' | 'md' }} */
	let { partner, size = 'md' } = $props();
</script>

<div class="partner partner--{size}">
	<span class="partner__label">we współpracy z</span>
	{#if partner.logo}
		<span class="partner__logo"><img src={partner.logo} alt="" loading="lazy" decoding="async" /></span>
	{/if}
	<span class="partner__name">{partner.name}</span>
</div>

<style>
	.partner {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.45rem 0.65rem;
		color: rgba(255, 255, 255, 0.75);
	}
	.partner__logo {
		display: inline-flex;
		align-items: center;
		background: #ffffff;
		border-radius: 10px;
		box-shadow: 0 10px 26px -14px rgba(0, 0, 0, 0.6);
	}
	.partner__logo img {
		display: block;
		width: auto;
	}
	.partner__name {
		font-weight: 700;
		color: #ffffff;
	}

	.partner--md {
		font-size: 0.95rem;
	}
	.partner--md .partner__logo {
		padding: 0.4rem 0.7rem;
	}
	.partner--md .partner__logo img {
		height: 26px;
	}

	.partner--sm {
		font-size: 0.78rem;
		line-height: 1.4;
	}
	.partner--sm .partner__logo {
		padding: 0.3rem 0.5rem;
		border-radius: 8px;
	}
	.partner--sm .partner__logo img {
		height: 20px;
	}
	.partner--sm .partner__name {
		font-weight: 600;
	}
</style>
