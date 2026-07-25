<script>
	/**
	 * Dekoracyjny motyw fasetek (kryształ z logo Aura).
	 * @typedef {Object} Props
	 * @property {'blue' | 'cyan'} [tone] - blue = na jasne tło, cyan = na ciemne tło
	 * @property {string} [class]
	 */

	/** @type {Props} */
	let { tone = 'blue', class: klass = '' } = $props();

	const palettes = {
		blue: ['#cfeafb', '#a6def7', '#8fd2f2', '#4cb6e7', '#29a3d8', '#1c9dd7', '#0e6d9d'],
		cyan: ['#67d0ff', '#4fb9e8', '#38aee4', '#1c9dd7', '#0e6d9d', '#2bd4ff', '#8fe4ff']
	};
	const c = $derived(palettes[tone]);
</script>

<svg
	class="facets {klass}"
	viewBox="0 0 300 320"
	fill="none"
	aria-hidden="true"
	xmlns="http://www.w3.org/2000/svg"
>
	<!-- Główny kryształ -->
	<polygon points="150,8 66,74 150,120" fill={c[1]} opacity="0.85" />
	<polygon points="150,8 234,74 150,120" fill={c[3]} opacity="0.9" />
	<polygon points="66,74 40,196 150,120" fill={c[2]} opacity="0.8" />
	<polygon points="234,74 260,196 150,120" fill={c[5]} opacity="0.85" />
	<polygon points="40,196 150,312 150,120" fill={c[0]} opacity="0.75" />
	<polygon points="260,196 150,312 150,120" fill={c[4]} opacity="0.85" />
	<polygon points="40,196 260,196 150,120" fill={c[3]} opacity="0.4" />

	<!-- Odłamki -->
	<polygon points="18,20 54,34 26,58" fill={c[2]} opacity="0.5" />
	<polygon points="286,120 300,150 270,146" fill={c[4]} opacity="0.45" />
	<polygon points="250,286 288,300 262,314" fill={c[1]} opacity="0.45" />
	<polygon points="8,250 30,262 12,286" fill={c[3]} opacity="0.4" />
</svg>

<style>
	.facets {
		display: block;
		width: 100%;
		height: auto;
		pointer-events: none;
		user-select: none;
	}
</style>
