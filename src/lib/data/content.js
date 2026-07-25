// Centralne źródło treści strony Aura Expert.
// Edytuj tutaj, aby zmienić teksty bez dotykania komponentów.

export const site = {
	name: 'Aura Expert',
	tagline: 'zmień agenta na experta',
	description:
		'Specjalistyczne rozwiązania ubezpieczeniowe dla firm. Ochrona dyrektorów (D&O), danych (Cyber) i finansów (TAX) przed współczesnymi zagrożeniami.',
	url: 'https://auraexpert.pl',
	email: 'zarzad@auraexpert.pl',
	phone: '+48 504 400 901',
	phoneHref: '+48504400901',
	location: 'Warszawa',
	// Google Analytics 4 — wpisz ID (np. 'G-XXXXXXXXXX'), puste = wyłączone.
	// Stała build-time: strona pozostaje w pełni statyczna (bez fetchy w runtime).
	gaId: ''
};

// Dane rejestrowe (z informacji o dystrybutorze).
export const company = {
	legalName: 'Aura Expert spółka z ograniczoną odpowiedzialnością',
	shortName: 'Aura Expert sp. z o.o.',
	address: 'ul. Bolkowska 2A/28, 01-466 Warszawa',
	krs: '0000599840',
	krsCourt:
		'Sąd Rejonowy dla m.st. Warszawy w Warszawie, XIII Wydział Gospodarczy Krajowego Rejestru Sądowego',
	nip: '5242793544',
	regon: '363673048',
	kapital: '5 000 zł',
	knfNumber: '11229690/A',
	knfRegister: 'https://rpu.knf.gov.pl',
	iodEmail: 'iod@auraexpert.pl'
};

export const nav = [
	{ label: 'Strona główna', href: '/#top' },
	{ label: 'Ubezpieczenie D&O', href: '/#uslugi' },
	{ label: 'Ubezpieczenie Cyber', href: '/#uslugi' },
	{ label: 'Ochrona Podatkowa', href: '/#uslugi' }
];

export const hero = {
	eyebrow: 'Wyspecjalizowana agencja ubezpieczeniowa',
	title: 'Specjalistyczne rozwiązania ubezpieczeniowe dla firm',
	subtitle:
		'Ochrona Państwa dyrektorów, danych i finansów przed współczesnymi zagrożeniami — projektowana przez ekspertów, nie sprzedawana z katalogu.',
	// Zdjęcie hero wygenerowane w Bloom (on-brand), zoptymalizowane do WebP/JPEG.
	// Źródło: assets/source/man02.png. Podmiana: nadpisz static/images/hero.{webp,jpg}.
	image: '/images/hero.jpg',
	primaryCta: { label: 'Poproś o konsultację', href: '/#kontakt' },
	secondaryCta: { label: 'Nasze usługi', href: '/#uslugi' },
	stats: [
		{ value: '250+', label: 'Chronionych firm' },
		{ value: '98%', label: 'Skuteczność roszczeń' },
		{ value: '48h', label: 'Analiza ryzyka' }
	]
};

export const services = [
	{
		id: 'do',
		tag: 'D&O',
		title: 'Ubezpieczenie D&O',
		subtitle: 'Odpowiedzialność członków zarządu',
		icon: 'shield',
		description:
			'Osobista ochrona majątku członków zarządu, rady nadzorczej i kadry menedżerskiej przed roszczeniami z tytułu decyzji biznesowych.',
		points: [
			'Ochrona majątku osobistego kadry zarządzającej',
			'Koszty obrony prawnej i postępowań regulacyjnych',
			'Roszczenia wspólników, wierzycieli i pracowników',
			'Ochrona przy zmianach właścicielskich i M&A'
		],
		cta: 'Dowiedz się więcej'
	},
	{
		id: 'oc-zawodowe',
		tag: 'OC zawodowe',
		title: 'Odpowiedzialność cywilna zawodowa',
		subtitle: 'Ochrona wykonujących zawód',
		icon: 'briefcase',
		description:
			'Ochrona przed roszczeniami za szkody wyrządzone przy wykonywaniu zawodu — dla profesjonalistów, firm usługowych i zawodów zaufania publicznego.',
		points: [
			'Szkody wyrządzone klientom przy wykonywaniu zawodu',
			'Błędy, zaniedbania i uchybienia zawodowe',
			'Koszty obrony prawnej i postępowań',
			'OC obowiązkowe oraz nadwyżkowe'
		],
		cta: 'Dowiedz się więcej'
	},
	{
		id: 'cyber',
		tag: 'Cyber',
		title: 'Ubezpieczenie Cyber',
		subtitle: 'Ochrona danych i ciągłości działania',
		icon: 'network',
		description:
			'Kompleksowa ochrona na wypadek incydentu cybernetycznego — od wycieku danych, przez ransomware, po przerwę w działalności.',
		points: [
			'Wyciek i naruszenie ochrony danych (RODO)',
			'Ransomware, wyłudzenia i przywracanie systemów',
			'Utrata zysku z przerwy w działalności',
			'Wsparcie zespołu reagowania 24/7'
		],
		cta: 'Dowiedz się więcej'
	},
	{
		id: 'tax',
		tag: 'TAX',
		title: 'Ochrona Podatkowa',
		subtitle: 'Bezpieczeństwo finansów firmy',
		icon: 'tax',
		description:
			'Zabezpieczenie firmy na wypadek kontroli i sporów podatkowych — pokrycie kosztów doradztwa, reprezentacji i postępowań.',
		points: [
			'Koszty kontroli i postępowań podatkowych',
			'Reprezentacja przed organami skarbowymi',
			'Spory dotyczące VAT, CIT i cen transferowych',
			'Doradztwo prewencyjne i audyt ryzyka'
		],
		cta: 'Dowiedz się więcej'
	},
	{
		id: 'beauty',
		tag: 'Beauty',
		title: 'BeautyPolisa',
		subtitle: 'Ochrona salonów i gabinetów',
		icon: 'sparkle',
		description:
			'Dedykowana ochrona dla salonów kosmetycznych, studiów tatuażu, barberów i gabinetów SPA — od OC za szkody klientom po sprzęt i lokal.',
		points: [
			'OC za szkody wyrządzone klientom',
			'Ubezpieczenie sprzętu i wyposażenia',
			'Ochrona lokalu i następstw zdarzeń',
			'Zabiegi kosmetyczne, tatuaż, SPA i barber'
		],
		cta: 'Dowiedz się więcej'
	},
	{
		id: 'grupowe',
		tag: 'Grupowe',
		title: 'Ubezpieczenia grupowe',
		subtitle: 'Ochrona zespołu i pracowników',
		icon: 'people',
		description:
			'Grupowe ubezpieczenia na życie i zdrowie dla pracowników — atrakcyjny benefit, który wzmacnia lojalność i bezpieczeństwo zespołu.',
		points: [
			'Grupowe ubezpieczenie na życie',
			'Pakiety zdrowotne i medyczne',
			'Ochrona na wypadek choroby i NNW',
			'Korzystne warunki dla całego zespołu'
		],
		cta: 'Dowiedz się więcej'
	}
];

export const benefits = [
	{
		icon: 'medal',
		title: 'Ekspertyza',
		description:
			'Dysponujemy wieloletnim doświadczeniem w ubezpieczeniach korporacyjnych. Łączymy wiedzę prawną z analizą ryzyka, by chronić to, co naprawdę istotne.'
	},
	{
		icon: 'tools',
		title: 'Rozwiązania na miarę',
		description:
			'Dostosowujemy każdą polisę do specyfiki Państwa działalności. Porównujemy oferty wielu ubezpieczycieli i negocjujemy warunki bez kompromisów.'
	},
	{
		icon: 'people',
		title: 'Wsparcie klienta',
		description:
			'Angażujemy się na każdym etapie — od analizy, przez wdrożenie, po obsługę szkody. W trudnym momencie jesteśmy po Państwa stronie.'
	},
	{
		icon: 'clock',
		title: 'Szybkość działania',
		description:
			'Bezpłatna analiza ryzyka w 48 godzin i średni czas odpowiedzi poniżej 2 godzin. Działamy wtedy, gdy liczy się każda chwila.'
	}
];

// Case study — anonimizowane, przykładowe realizacje (do podmiany na prawdziwe).
export const caseStudies = [
	{
		tag: 'Cyber',
		metric: '72h',
		metricLabel: 'powrót do działania',
		title: 'Ransomware w szczycie sezonu',
		challenge:
			'Atak ransomware zaszyfrował systemy sprzedaży sklepu e-commerce w najgorszym możliwym momencie — podczas szczytu sezonu.',
		solution:
			'Uruchomiliśmy zespół reagowania, a polisa cyber pokryła koszty przywrócenia systemów oraz utracony zysk z przerwy w działalności.',
		result: 'Powrót do sprzedaży w 72 godziny i pełna wypłata odszkodowania.'
	},
	{
		tag: 'D&O',
		metric: '100%',
		metricLabel: 'kosztów obrony',
		title: 'Roszczenie wobec zarządu',
		challenge:
			'Po zmianie właścicielskiej wspólnik skierował roszczenie wobec członków zarządu spółki technologicznej.',
		solution:
			'Polisa D&O przejęła koszty obrony prawnej i zabezpieczyła majątek osobisty kadry zarządzającej.',
		result: 'Zarząd bez ryzyka finansowego, spór zakończony ugodą.'
	},
	{
		tag: 'OC zawodowe',
		metric: '0 zł',
		metricLabel: 'strat klienta',
		title: 'Błąd w biurze rachunkowym',
		challenge:
			'Pomyłka w rozliczeniu naraziła klienta biura rachunkowego na dopłatę podatku i odsetki, a samo biuro — na kontrolę.',
		solution:
			'OC zawodowe pokryło roszczenie klienta, a ochrona podatkowa — koszty postępowania i profesjonalnej reprezentacji.',
		result: 'Klient bez strat finansowych, reputacja biura zachowana.'
	}
];

export const rodoText =
	'Wyrażam zgodę na przetwarzanie moich danych osobowych przez Aura Expert w celu obsługi zapytania. Zapoznałem się z polityką prywatności.';
