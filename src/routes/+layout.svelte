<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import { env } from '$env/dynamic/public';

	let { children } = $props();

	function initRevealAnimations() {
		const els = document.querySelectorAll('.reveal');
		if (!('IntersectionObserver' in window)) {
			els.forEach((el) => el.classList.add('is-visible'));
			return () => {};
		}
		const io = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						entry.target.classList.add('is-visible');
						io.unobserve(entry.target);
					}
				}
			},
			{ threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
		);
		els.forEach((el) => io.observe(el));
		return () => io.disconnect();
	}

	function initAnalytics() {
		const id = env.PUBLIC_GA_ID;
		if (!id) return;
		const s = document.createElement('script');
		s.async = true;
		s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
		document.head.appendChild(s);
		/** @type {any} */ (window).dataLayer = /** @type {any} */ (window).dataLayer || [];
		function gtag() {
			/** @type {any} */ (window).dataLayer.push(arguments);
		}
		/** @type {any} */ (window).gtag = gtag;
		gtag('js', new Date());
		gtag('config', id);
	}

	onMount(() => {
		const cleanup = initRevealAnimations();
		initAnalytics();
		return cleanup;
	});
</script>

{@render children()}
