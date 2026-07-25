<script>
	import { onMount } from 'svelte';
	import Logo from './Logo.svelte';
	import Icon from './Icon.svelte';
	import { nav } from '$data/content.js';

	let scrolled = $state(false);
	let open = $state(false);

	onMount(() => {
		const onScroll = () => (scrolled = window.scrollY > 12);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<header class="header" class:header--scrolled={scrolled} class:header--open={open}>
	<div class="container-x flex h-[var(--nav-h)] items-center justify-between gap-6">
		<a href="/#top" class="shrink-0" aria-label="Aura Expert — strona główna" onclick={() => (open = false)}>
			<Logo />
		</a>

		<nav class="hidden items-center gap-8 lg:flex" aria-label="Główna nawigacja">
			{#each nav as item}
				<a href={item.href} class="nav-link">{item.label}</a>
			{/each}
		</nav>

		<div class="hidden items-center gap-3 lg:flex">
			<a href="/#kontakt" class="btn-primary text-sm">Portal Klienta</a>
		</div>

		<button
			class="menu-toggle lg:hidden"
			aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
			aria-expanded={open}
			onclick={() => (open = !open)}
		>
			{#if open}
				<svg viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.8">
					<path d="M6 6l12 12M18 6L6 18" stroke-linecap="round" />
				</svg>
			{:else}
				<svg viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.8">
					<path d="M4 7h16M4 12h16M4 17h16" stroke-linecap="round" />
				</svg>
			{/if}
		</button>
	</div>

	{#if open}
		<div class="mobile-menu lg:hidden">
			<nav class="container-x flex flex-col gap-1 py-4" aria-label="Nawigacja mobilna">
				{#each nav as item}
					<a href={item.href} class="mobile-link" onclick={() => (open = false)}>
						<span>{item.label}</span>
						<Icon name="arrow" class="h-4 w-4 text-cyan" />
					</a>
				{/each}
				<a href="/#kontakt" class="btn-primary mt-3" onclick={() => (open = false)}>Portal Klienta</a>
			</nav>
		</div>
	{/if}
</header>

<style>
	.header {
		position: fixed;
		inset: 0 0 auto 0;
		z-index: 50;
		background: rgba(255, 255, 255, 0.72);
		backdrop-filter: saturate(160%) blur(14px);
		border-bottom: 1px solid transparent;
		transition:
			box-shadow 0.25s ease,
			background 0.25s ease,
			border-color 0.25s ease;
	}
	.header--scrolled {
		background: rgba(255, 255, 255, 0.92);
		border-bottom-color: rgba(15, 36, 56, 0.08);
		box-shadow: 0 8px 30px -18px rgba(15, 36, 56, 0.35);
	}
	.header--open {
		background: #ffffff;
	}
	.nav-link {
		position: relative;
		font-size: 0.95rem;
		font-weight: 500;
		color: #1a1a1a;
		transition: color 0.2s ease;
	}
	.nav-link::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: -6px;
		height: 2px;
		width: 0;
		background: #1c9dd7;
		transition: width 0.25s ease;
	}
	.nav-link:hover {
		color: #127bb0;
	}
	.nav-link:hover::after {
		width: 100%;
	}
	.menu-toggle {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		height: 44px;
		width: 44px;
		border-radius: 12px;
		color: #0f2438;
		transition: background 0.2s ease;
	}
	.menu-toggle:hover {
		background: rgba(15, 36, 56, 0.06);
	}
	.mobile-menu {
		border-top: 1px solid rgba(15, 36, 56, 0.08);
		background: #ffffff;
		animation: menu-in 0.2s ease;
	}
	.mobile-link {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.85rem 0.25rem;
		font-weight: 500;
		color: #1a1a1a;
		border-bottom: 1px solid rgba(15, 36, 56, 0.06);
	}
	@keyframes menu-in {
		from {
			opacity: 0;
			transform: translateY(-6px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
