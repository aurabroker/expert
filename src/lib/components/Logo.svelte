<script>
	/**
	 * @typedef {Object} Props
	 * @property {'full' | 'mark'} [variant] - full = pełny lockup, mark = sam gem
	 * @property {string} [class] - klasy wysokości/utility (np. "h-10")
	 */

	/** @type {Props} */
	let { variant = 'full', class: klass = '' } = $props();

	const src = $derived(variant === 'mark' ? '/logo-mark.png' : '/logo.png');
</script>

<img
	{src}
	alt="Aura Expert — zmień agenta na experta"
	class={klass ? `w-auto ${klass}` : 'h-11 w-auto'}
	width="1000"
	decoding="async"
/>
