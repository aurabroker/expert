<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import { site } from '$data/content.js';

	let { children } = $props();

	function initRevealAnimations() {
		const els = Array.from(document.querySelectorAll('.reveal'));
		if (!('IntersectionObserver' in window)) {
			// Brak wsparcia — treść zostaje widoczna (bez animacji).
			return () => {};
		}
		// Włączamy animacje dopiero teraz; jeśli skrypt się nie wykona, treść pozostaje widoczna.
		document.documentElement.classList.add('js-reveal');
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
		const vh = window.innerHeight || 800;
		for (const el of els) {
			// Elementy już w widoku pokazujemy natychmiast (bez migotania), resztę obserwujemy.
			if (el.getBoundingClientRect().top < vh * 0.92) {
				el.classList.add('is-visible');
			} else {
				io.observe(el);
			}
		}
		return () => io.disconnect();
	}

	function initAnalytics() {
		const id = site.gaId;
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
