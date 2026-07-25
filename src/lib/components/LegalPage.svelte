<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import Icon from './Icon.svelte';
	import { site } from '$data/content.js';

	/**
	 * @typedef {Object} Props
	 * @property {string} title
	 * @property {string} [updated]
	 * @property {string} [description]
	 * @property {import('svelte').Snippet} children
	 */

	/** @type {Props} */
	let { title, updated = '', description = '', children } = $props();
</script>

<svelte:head>
	<title>{title} — {site.name}</title>
	{#if description}<meta name="description" content={description} />{/if}
	<meta name="robots" content="index, follow" />
</svelte:head>

<Header />

<main class="legal">
	<div class="container-x legal__wrap">
		<a href="/#top" class="legal__back">
			<Icon name="arrow" class="h-4 w-4 rotate-180" />
			Powrót na stronę główną
		</a>
		<h1 class="legal__title">{title}</h1>
		{#if updated}
			<p class="legal__updated">Ostatnia aktualizacja: {updated}</p>
		{/if}

		<div class="legal-prose">
			{@render children()}
		</div>
	</div>
</main>

<Footer />

<style>
	.legal {
		padding-top: calc(var(--nav-h) + 2.5rem);
		padding-bottom: 5rem;
		background:
			radial-gradient(60% 40% at 90% 0%, rgba(28, 157, 215, 0.06), transparent 70%), #ffffff;
	}
	.legal__wrap {
		max-width: 820px;
	}
	.legal__back {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		font-size: 0.85rem;
		font-weight: 600;
		color: #127bb0;
	}
	.legal__back:hover {
		color: #0f2438;
	}
	.legal__title {
		margin-top: 1.25rem;
		font-size: clamp(1.9rem, 4vw, 2.6rem);
		font-weight: 800;
		color: #0f2438;
		letter-spacing: -0.02em;
	}
	.legal__updated {
		margin-top: 0.5rem;
		font-size: 0.85rem;
		color: #94a3b8;
	}

	.legal-prose {
		margin-top: 2.5rem;
		color: #33414d;
		font-size: 1rem;
		line-height: 1.75;
	}
	.legal-prose :global(h2) {
		margin-top: 2.5rem;
		margin-bottom: 0.75rem;
		font-family: 'Sora', sans-serif;
		font-size: 1.3rem;
		font-weight: 700;
		color: #0f2438;
		letter-spacing: -0.01em;
	}
	.legal-prose :global(h3) {
		margin-top: 1.75rem;
		margin-bottom: 0.5rem;
		font-family: 'Sora', sans-serif;
		font-size: 1.05rem;
		font-weight: 600;
		color: #1e3a4c;
	}
	.legal-prose :global(p) {
		margin-bottom: 1rem;
	}
	.legal-prose :global(ul),
	.legal-prose :global(ol) {
		margin: 0 0 1rem 1.25rem;
		padding: 0;
	}
	.legal-prose :global(ul) {
		list-style: none;
	}
	.legal-prose :global(ul li) {
		position: relative;
		padding-left: 1.1rem;
		margin-bottom: 0.5rem;
	}
	.legal-prose :global(ul li::before) {
		content: '';
		position: absolute;
		left: 0;
		top: 0.65rem;
		height: 6px;
		width: 6px;
		border-radius: 2px;
		background: #1c9dd7;
	}
	.legal-prose :global(ol) {
		list-style: decimal;
	}
	.legal-prose :global(ol li) {
		margin-bottom: 0.5rem;
		padding-left: 0.25rem;
	}
	.legal-prose :global(a) {
		color: #127bb0;
		font-weight: 600;
		text-decoration: underline;
		text-underline-offset: 2px;
	}
	.legal-prose :global(a:hover) {
		color: #0f2438;
	}
	.legal-prose :global(strong) {
		color: #0f2438;
		font-weight: 600;
	}
	.legal-prose :global(.legal-note) {
		margin-bottom: 2rem;
		border-left: 3px solid #ff7a00;
		background: rgba(255, 122, 0, 0.07);
		border-radius: 0 10px 10px 0;
		padding: 0.9rem 1.1rem;
		font-size: 0.9rem;
		color: #7a4a12;
	}
	.legal-prose :global(.legal-note strong) {
		color: #b3560a;
	}
</style>
