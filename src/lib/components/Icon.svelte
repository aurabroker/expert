<script>
	/** @type {{ name: string; class?: string }} */
	let { name, class: klass = 'h-6 w-6' } = $props();
</script>

<svg
	class={klass}
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width="1.6"
	stroke-linecap="round"
	stroke-linejoin="round"
	aria-hidden="true"
>
	{#if name === 'shield'}
		<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
		<path d="M9 12l2 2 4-4" />
	{:else if name === 'network'}
		<rect x="3" y="11" width="18" height="10" rx="2" />
		<path d="M7 11V8a5 5 0 0 1 10 0v3" />
		<circle cx="12" cy="16" r="1.5" />
	{:else if name === 'tax'}
		<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
		<path d="M14 2v6h6" />
		<path d="M9 13l6 4M15 13l-6 4" />
	{:else if name === 'sparkle'}
		<path d="M12 3l1.9 5L19 9.9l-5 1.9L12 17l-1.9-5.1L5 9.9l5.1-1.9z" />
		<path d="M18.5 14l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z" />
	{:else if name === 'medal'}
		<circle cx="12" cy="9" r="6" />
		<path d="M8.2 13.5L7 22l5-3 5 3-1.2-8.5" />
		<path d="M12 6.5l1 2 2 .2-1.5 1.4.4 2L12 11l-1.9 1.1.4-2L9 8.7l2-.2z" />
	{:else if name === 'tools'}
		<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2-2z" />
	{:else if name === 'people'}
		<circle cx="9" cy="8" r="3" />
		<path d="M3 21v-1a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v1" />
		<path d="M16 3.5a3 3 0 0 1 0 5.8M21 21v-1a5 5 0 0 0-3.5-4.8" />
	{:else if name === 'clock'}
		<circle cx="12" cy="12" r="9" />
		<path d="M12 7v5l3 2" />
	{:else if name === 'arrow'}
		<path d="M5 12h14M13 6l6 6-6 6" />
	{:else if name === 'check'}
		<path d="M20 6L9 17l-5-5" />
	{:else if name === 'mail'}
		<rect x="3" y="5" width="18" height="14" rx="2" />
		<path d="M3 7l9 6 9-6" />
	{:else if name === 'phone'}
		<path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L20 19v-4l-5-2" />
	{:else if name === 'pin'}
		<path d="M12 22s7-6 7-12a7 7 0 0 0-14 0c0 6 7 12 7 12z" />
		<circle cx="12" cy="10" r="2.5" />
	{/if}
</svg>
