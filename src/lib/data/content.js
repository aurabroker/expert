// Centralne źródło treści strony Aura Expert.
// Edytuj tutaj, aby zmienić teksty bez dotykania komponentów.

export const site = {
	name: 'Aura Expert',
	tagline: 'zmień agenta na experta',
	description:
		'Specjalistyczne rozwiązania ubezpieczeniowe dla firm. Ochrona dyrektorów (D&O), danych (Cyber) i finansów (TAX) przed współczesnymi zagrożeniami.',
	url: 'https://auraexpert.pl',
	email: 'biuro@auraexpert.pl',
	phone: '+48 123 456 789',
	phoneHref: '+48123456789',
	location: 'Słupsk, Pomorskie · Polska'
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

export const testimonials = [
	{
		quote:
			'Aura Expert uporządkowała ochronę naszego zarządu. Polisa D&O była dopięta w każdym szczególe — wreszcie mamy pewność, że decyzje biznesowe nie zagrażają majątkowi osobistemu.',
		name: 'Marek Kowalski',
		role: 'CEO · Kowalski Consulting',
		initials: 'MK'
	},
	{
		quote:
			'Po incydencie ransomware zespół Aura Expert przejął całą obsługę roszczenia. Systemy wróciły do działania, a odszkodowanie zostało wypłacone błyskawicznie.',
		name: 'Anna Nowak',
		role: 'COO · TechFlow S.A.',
		initials: 'AN'
	},
	{
		quote:
			'Kontrola podatkowa, która mogła sparaliżować firmę, przeszła gładko dzięki ochronie i reprezentacji zapewnionej przez Aura Expert. Profesjonalizm najwyższej klasy.',
		name: 'Piotr Tomaszewski',
		role: 'CFO · DewelopPL Sp. z o.o.',
		initials: 'PT'
	}
];

export const rodoText =
	'Wyrażam zgodę na przetwarzanie moich danych osobowych przez Aura Expert w celu obsługi zapytania. Zapoznałem się z polityką prywatności.';
