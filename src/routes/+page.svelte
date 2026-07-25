<script>
	import Header from '$components/Header.svelte';
	import Hero from '$components/Hero.svelte';
	import ServiceCards from '$components/ServiceCards.svelte';
	import Benefits from '$components/Benefits.svelte';
	import Testimonials from '$components/Testimonials.svelte';
	import ContactForm from '$components/ContactForm.svelte';
	import Footer from '$components/Footer.svelte';
	import { site } from '$data/content.js';

	const title = 'Aura Expert — Specjalistyczne ubezpieczenia dla firm | D&O, Cyber, TAX';
	const ogImage = `${site.url}/images/hero.jpg`;

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'InsuranceAgency',
		name: site.name,
		description: site.description,
		url: site.url,
		logo: `${site.url}/logo.png`,
		email: site.email,
		telephone: site.phone,
		areaServed: 'PL',
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Słupsk',
			addressRegion: 'Pomorskie',
			addressCountry: 'PL'
		},
		slogan: site.tagline
	};
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={site.description} />
	<meta
		name="keywords"
		content="ubezpieczenie D&O, ubezpieczenie cyber, ochrona podatkowa, ubezpieczenia dla firm, ubezpieczenie zarządu, Aura Expert"
	/>
	<link rel="canonical" href={site.url} />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={site.name} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={site.description} />
	<meta property="og:url" content={site.url} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:locale" content="pl_PL" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={site.description} />
	<meta name="twitter:image" content={ogImage} />

	{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
</svelte:head>

<Header />

<main>
	<Hero />
	<ServiceCards />
	<Benefits />
	<Testimonials />
	<ContactForm />
</main>

<Footer />
