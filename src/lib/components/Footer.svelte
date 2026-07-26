<script>
	import Logo from './Logo.svelte';
	import { site, company, externalServices } from '$data/content.js';

	const year = new Date().getFullYear();

	const columns = [
		{
			title: 'Ubezpieczenia',
			links: [
				{ label: 'Ubezpieczenie D&O', href: '/ubezpieczenia/d-o' },
				{ label: 'OC zawodowe', href: '/ubezpieczenia/oc-zawodowe' },
				{ label: 'Ubezpieczenie Cyber', href: '/ubezpieczenia/cyber' },
				{ label: 'Ochrona Podatkowa', href: '/ubezpieczenia/ochrona-podatkowa' },
				{ label: 'BeautyPolisa', href: '/ubezpieczenia/beautypolisa' },
				{ label: 'Ubezpieczenia grupowe', href: '/ubezpieczenia/ubezpieczenia-grupowe' },
				{ label: 'Case study', href: '/#case-study' }
			]
		},
		{
			title: 'Firma',
			links: [
				{ label: 'O nas', href: '/#dlaczego' },
				{ label: 'Kontakt', href: '/#kontakt' },
				{ label: 'Portal Klienta', href: '/#kontakt' }
			]
		}
	];
</script>

<footer class="footer">
	<div class="container-x">
		<div class="footer__top">
			<div class="max-w-sm">
				<span class="inline-flex rounded-xl bg-white px-5 py-4 shadow-sm">
					<Logo class="h-16 sm:h-[4.75rem]" />
				</span>
				<p class="mt-5 text-sm leading-relaxed text-slate-400">
					Specjalistyczne ubezpieczenia dla firm — D&O, Cyber, ochrona podatkowa i BeautyPolisa.
				</p>
				<div class="mt-5 space-y-1 text-sm text-slate-400">
					<p class="font-medium text-slate-300">{company.shortName}</p>
					<p>{company.address}</p>
					<p>KRS {company.krs} · NIP {company.nip} · REGON {company.regon}</p>
				</div>
			</div>

			{#each columns as col}
				<div>
					<h3 class="footer__heading">{col.title}</h3>
					<ul class="mt-4 space-y-2.5">
						{#each col.links as link}
							<li><a href={link.href} class="footer__link">{link.label}</a></li>
						{/each}
					</ul>
				</div>
			{/each}

			<div>
				<h3 class="footer__heading">Kontakt</h3>
				<ul class="mt-4 space-y-2.5 text-sm text-slate-400">
					<li><a href="mailto:{site.email}" class="footer__link">{site.email}</a></li>
					<li><a href="tel:{site.phoneHref}" class="footer__link">{site.phone}</a></li>
				</ul>
			</div>
		</div>

		<div class="footer__services">
			<span class="footer__services-label">Nasze serwisy</span>
			<div class="footer__services-links">
				{#each externalServices as s}
					{#if s.soon}
						<span class="footer__service footer__service--soon">
							{s.label}<span class="footer__soon">wkrótce</span>
						</span>
					{:else}
						<a href={s.href} class="footer__service" target="_blank" rel="noopener">{s.label}</a>
					{/if}
				{/each}
			</div>
		</div>

		<p class="footer__legal">
			{company.shortName} jest agentem ubezpieczeniowym wpisanym do rejestru agentów prowadzonego
			przez Komisję Nadzoru Finansowego (KNF) pod numerem {company.knfNumber}. Rejestr dostępny jest
			na stronie <a href={company.knfRegister} target="_blank" rel="noopener">rpu.knf.gov.pl</a>.
		</p>

		<div class="footer__bottom">
			<span>© {year} {site.name}. Wszelkie prawa zastrzeżone.</span>
			<div class="flex flex-wrap gap-x-6 gap-y-2">
				<a href="/polityka-prywatnosci" class="footer__link">Polityka prywatności</a>
				<a href="/regulamin" class="footer__link">Regulamin</a>
				<a href="/rodo" class="footer__link">RODO</a>
			</div>
		</div>
	</div>
</footer>

<style>
	.footer {
		background: #0a1a2b;
		color: #cbd5e1;
		padding: 4rem 0 2rem;
	}
	.footer__top {
		display: grid;
		gap: 2.5rem;
		grid-template-columns: 1fr;
		padding-bottom: 3rem;
		border-bottom: 1px solid rgba(255, 255, 255, 0.08);
	}
	@media (min-width: 720px) {
		.footer__top {
			grid-template-columns: 1.6fr 1fr 1fr 1fr;
		}
	}
	.footer__heading {
		font-family: 'Sora', sans-serif;
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: #ffffff;
	}
	.footer__link {
		font-size: 0.9rem;
		color: #94a3b8;
		transition: color 0.2s ease;
	}
	.footer__link:hover {
		color: #4fb9e8;
	}
	.footer__services {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.7rem 1.5rem;
		padding-top: 1.75rem;
	}
	.footer__services-label {
		font-family: 'Sora', sans-serif;
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: #ffffff;
	}
	.footer__services-links {
		display: flex;
		flex-wrap: wrap;
		gap: 0.6rem 1.25rem;
	}
	.footer__service {
		display: inline-flex;
		align-items: center;
		font-size: 0.9rem;
		color: #94a3b8;
		transition: color 0.2s ease;
	}
	.footer__service:hover {
		color: #4fb9e8;
	}
	.footer__service--soon {
		color: #64748b;
		cursor: default;
	}
	.footer__soon {
		margin-left: 0.45rem;
		font-size: 0.62rem;
		font-weight: 700;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: #ff7a00;
		border: 1px solid rgba(255, 122, 0, 0.4);
		border-radius: 999px;
		padding: 0.1rem 0.5rem;
	}
	.footer__legal {
		padding-top: 1.75rem;
		font-size: 0.78rem;
		line-height: 1.6;
		color: #64748b;
	}
	.footer__legal :global(a) {
		color: #94a3b8;
		text-decoration: underline;
		text-underline-offset: 2px;
	}
	.footer__legal :global(a:hover) {
		color: #4fb9e8;
	}
	.footer__bottom {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding-top: 1.25rem;
		font-size: 0.8rem;
		color: #64748b;
	}
	@media (min-width: 640px) {
		.footer__bottom {
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
		}
	}
</style>
