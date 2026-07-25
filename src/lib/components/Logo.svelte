<script>
	/**
	 * @typedef {Object} Props
	 * @property {'full' | 'mark'} [variant] - full = gem + wordmark, mark = gem only
	 * @property {boolean} [light] - use light wordmark text (for dark backgrounds)
	 * @property {string} [class] - extra classes
	 */

	/** @type {Props} */
	let { variant = 'full', light = false, class: klass = '' } = $props();
</script>

<span class="logo {klass}" class:logo--light={light}>
	<svg
		class="logo__mark"
		viewBox="0 0 128 152"
		role="img"
		aria-label="Aura Expert"
		xmlns="http://www.w3.org/2000/svg"
	>
		<defs>
			<linearGradient id="aura-a" x1="0.1" y1="0" x2="0.6" y2="1">
				<stop offset="0" stop-color="#cfeafb" />
				<stop offset="1" stop-color="#8fd2f2" />
			</linearGradient>
			<linearGradient id="aura-b" x1="0.4" y1="0" x2="1" y2="1">
				<stop offset="0" stop-color="#4cb6e7" />
				<stop offset="1" stop-color="#1c9dd7" />
			</linearGradient>
			<linearGradient id="aura-c" x1="0.4" y1="0.1" x2="1" y2="1">
				<stop offset="0" stop-color="#1f97cf" />
				<stop offset="1" stop-color="#0e6d9d" />
			</linearGradient>
			<linearGradient id="aura-d" x1="0" y1="1" x2="0.7" y2="0">
				<stop offset="0" stop-color="#aadcf5" />
				<stop offset="1" stop-color="#6ac3ea" />
			</linearGradient>
		</defs>

		<!-- Faceted crystal gem -->
		<g>
			<polygon points="57,3 20,41 57,68" fill="url(#aura-a)" />
			<polygon points="57,3 111,41 57,68" fill="url(#aura-b)" />
			<polygon points="111,41 100,97 57,68" fill="url(#aura-c)" />
			<polygon points="20,41 17,97 57,68" fill="url(#aura-d)" />
			<polygon points="17,97 60,149 57,68" fill="url(#aura-a)" />
			<polygon points="100,97 60,149 57,68" fill="url(#aura-c)" />
			<polygon points="17,97 100,97 57,68" fill="url(#aura-b)" opacity="0.55" />
		</g>

		<!-- White arch "A": rounded top, two legs, crossbar -->
		<g
			fill="none"
			stroke="#ffffff"
			stroke-width="13"
			stroke-linecap="butt"
			stroke-linejoin="round"
		>
			<path d="M45 122 L45 60 A16 16 0 0 1 77 60 L77 122" />
			<line x1="45" y1="99" x2="77" y2="99" />
		</g>
	</svg>

	{#if variant === 'full'}
		<span class="logo__word">
			<span class="logo__aura">Aura</span><span class="logo__expert">expert</span>
		</span>
	{/if}
</span>

<style>
	.logo {
		display: inline-flex;
		align-items: center;
		gap: 0.55rem;
		line-height: 1;
		user-select: none;
	}
	.logo__mark {
		height: 2.5rem;
		width: auto;
		flex: none;
	}
	.logo__word {
		display: flex;
		align-items: baseline;
		gap: 0.28rem;
		font-family: 'Sora', 'Inter', sans-serif;
		font-weight: 700;
		font-size: 1.45rem;
		letter-spacing: -0.02em;
	}
	.logo__aura {
		color: #1c9dd7;
	}
	.logo__expert {
		color: #5a6b78;
		font-weight: 500;
	}
	.logo--light .logo__expert {
		color: #cdd9e2;
	}
</style>
