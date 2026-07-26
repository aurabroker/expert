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
	{ label: 'Ubezpieczenie D&O', href: '/ubezpieczenia/d-o' },
	{ label: 'Ubezpieczenie Cyber', href: '/ubezpieczenia/cyber' },
	{ label: 'Ochrona Podatkowa', href: '/ubezpieczenia/ochrona-podatkowa' }
];

// Powiązane serwisy Aura Expert (linki zewnętrzne w stopce).
export const externalServices = [
	{ label: 'utratadochodu.pl', href: 'https://utratadochodu.pl' },
	{ label: 'ERGO Grupa Otwarta', href: 'https://ergo.beautypolisa.eu' },
	{ label: 'Grupowe Pakiety Branżowe', href: 'https://ergo.auraexpert.pl/' },
	{ label: 'Beauty Polisa', soon: true }
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
		slug: 'd-o',
		iconImg: '/images/icons/d-o.png',
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
		slug: 'oc-zawodowe',
		iconImg: '/images/icons/oc-zawodowe.png',
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
		slug: 'cyber',
		iconImg: '/images/icons/cyber.png',
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
		slug: 'ochrona-podatkowa',
		iconImg: '/images/icons/ochrona-podatkowa.png',
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
		slug: 'beautypolisa',
		tag: 'Beauty',
		title: 'BeautyPolisa',
		subtitle: 'Ochrona salonów i gabinetów',
		icon: 'sparkle',
		logo: '/images/beautypolisa.png',
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
		slug: 'ubezpieczenia-grupowe',
		iconImg: '/images/icons/ubezpieczenia-grupowe.png',
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

// Szczegółowa treść podstron poszczególnych ubezpieczeń (klucz = slug).
export const serviceDetails = {
	'd-o': {
		lead: 'Ubezpieczenie D&O chroni majątek osobisty członków zarządu, rady nadzorczej i kadry menedżerskiej przed konsekwencjami decyzji podejmowanych w ramach pełnionych funkcji. To ochrona ludzi, którzy każdego dnia podejmują ryzyko w imieniu spółki.',
		coverage: [
			{ title: 'Ochrona majątku osobistego', desc: 'Pokrycie roszczeń kierowanych bezpośrednio do członków zarządu i rady nadzorczej.' },
			{ title: 'Koszty obrony prawnej', desc: 'Finansowanie adwokatów oraz postępowań cywilnych, karnych i administracyjnych.' },
			{ title: 'Roszczenia wewnętrzne i zewnętrzne', desc: 'Od wspólników, wierzycieli, pracowników, kontrahentów i organów państwowych.' },
			{ title: 'Postępowania regulacyjne', desc: 'Koszty związane z działaniami KNF, UOKiK, ZUS czy urzędów skarbowych.' },
			{ title: 'Zobowiązania publicznoprawne', desc: 'Odpowiedzialność członków zarządu m.in. za zaległości podatkowe i składkowe spółki.' },
			{ title: 'Transakcje i zmiany właścicielskie', desc: 'Roszczenia związane z M&A, due diligence i restrukturyzacją.' }
		],
		audience: [
			'Spółki kapitałowe (z o.o., akcyjne) i ich zarządy',
			'Rady nadzorcze i prokurenci',
			'Startupy pozyskujące inwestorów',
			'Firmy rodzinne planujące sukcesję'
		],
		faq: [
			{ q: 'Kto jest chroniony polisą D&O?', a: 'Ochroną objęci są członkowie zarządu, rady nadzorczej i prokurenci, a w wielu wariantach także kadra menedżerska wyższego szczebla oraz — w zakresie roszczeń spadkowych — ich bliscy.' },
			{ q: 'Czy D&O chroni przed roszczeniami z ZUS i US?', a: 'Tak. Coraz częściej polisy obejmują osobistą odpowiedzialność członków zarządu za zaległości publicznoprawne spółki — to jeden z kluczowych elementów, na który zwracamy uwagę.' },
			{ q: 'Czy polisa działa po ustąpieniu z funkcji?', a: 'Tak. Ochrona obejmuje roszczenia zgłoszone także po zakończeniu kadencji, o ile dotyczą okresu pełnienia funkcji (tzw. okres zgłaszania roszczeń).' }
		]
	},
	'oc-zawodowe': {
		lead: 'Ubezpieczenie odpowiedzialności cywilnej zawodowej chroni przed roszczeniami za szkody wyrządzone klientom przy wykonywaniu zawodu. Obowiązkowe dla wielu profesji — rozsądne dla każdej firmy usługowej.',
		coverage: [
			{ title: 'Szkody wyrządzone klientom', desc: 'Majątkowe i niemajątkowe następstwa błędów popełnionych przy wykonywaniu zawodu.' },
			{ title: 'Błędy i zaniedbania', desc: 'Uchybienia w świadczeniu usług, doradztwie i wykonywaniu obowiązków zawodowych.' },
			{ title: 'Koszty obrony prawnej', desc: 'Finansowanie obrony także wtedy, gdy roszczenie okaże się bezzasadne.' },
			{ title: 'OC obowiązkowe', desc: 'Spełnienie wymogów ustawowych przewidzianych dla danego zawodu.' },
			{ title: 'OC nadwyżkowe', desc: 'Podwyższenie sumy gwarancyjnej ponad ustawowe minimum, dopasowane do ryzyka.' },
			{ title: 'Działalność wsteczna', desc: 'W wybranych wariantach ochrona obejmuje także zdarzenia sprzed zawarcia polisy.' }
		],
		audience: [
			'Zawody zaufania publicznego (prawnicy, doradcy, księgowi)',
			'Firmy IT i agencje świadczące usługi profesjonalne',
			'Branża medyczna i służba zdrowia',
			'Architekci, inżynierowie i projektanci'
		],
		faq: [
			{ q: 'Czym różni się OC zawodowe od OC działalności?', a: 'OC zawodowe dotyczy błędów w świadczeniu profesjonalnych usług (tzw. czyste straty finansowe), a OC ogólne — szkód na osobie i mieniu związanych z prowadzeniem działalności. Często warto mieć oba.' },
			{ q: 'Czy OC obowiązkowe wystarczy?', a: 'Minimalne sumy ustawowe bywają zbyt niskie wobec realnych roszczeń, dlatego proponujemy rozsądne OC nadwyżkowe dopasowane do skali ryzyka.' },
			{ q: 'Czy polisa obejmuje błędy sprzed jej zawarcia?', a: 'Zależnie od wariantu można objąć ochroną tzw. działalność wsteczną — analizujemy to indywidualnie dla każdej profesji.' }
		]
	},
	cyber: {
		lead: 'Ubezpieczenie cyber to kompleksowa ochrona firmy na wypadek incydentu cybernetycznego — od wycieku danych, przez atak ransomware, po przerwę w działalności. Łączy pokrycie strat finansowych z natychmiastowym wsparciem ekspertów.',
		coverage: [
			{ title: 'Naruszenie ochrony danych', desc: 'Koszty obsługi wycieku, powiadomień i zapewnienia zgodności z RODO.' },
			{ title: 'Ransomware i cyberwymuszenia', desc: 'Negocjacje, przywracanie systemów i pokrycie kosztów w zakresie dopuszczalnym prawem.' },
			{ title: 'Przerwa w działalności', desc: 'Utracony zysk i koszty dodatkowe wynikające z niedostępności systemów.' },
			{ title: 'Odpowiedzialność wobec osób trzecich', desc: 'Roszczenia klientów i kontrahentów po incydencie bezpieczeństwa.' },
			{ title: 'Zespół reagowania 24/7', desc: 'Informatycy śledczy, prawnicy i specjaliści od komunikacji kryzysowej.' },
			{ title: 'Kary administracyjne', desc: 'Pokrycie — w dopuszczalnym zakresie — kar związanych z naruszeniem danych.' }
		],
		audience: [
			'Firmy przetwarzające dane osobowe klientów',
			'E-commerce i dostawcy usług cyfrowych',
			'Podmioty medyczne, kancelarie, biura rachunkowe',
			'Każda firma zależna od systemów IT'
		],
		faq: [
			{ q: 'Czy ubezpieczenie cyber pokrywa okup przy ransomware?', a: 'W zakresie dopuszczalnym prawem — tak, wraz z kosztami negocjacji i przywrócenia systemów. Zawsze najpierw uruchamiamy zespół reagowania, który minimalizuje szkodę.' },
			{ q: 'Czy to ochrona tylko dla dużych firm?', a: 'Nie. Małe i średnie firmy są dziś najczęstszym celem ataków, a skutki bywają dla nich bardziej dotkliwe. Zakres dobieramy do skali działalności.' },
			{ q: 'Co zrobić natychmiast po incydencie?', a: 'Skontaktować się z infolinią reagowania wskazaną w polisie — czas jest kluczowy. Zespół przejmuje obsługę techniczną, prawną i komunikacyjną.' }
		]
	},
	'ochrona-podatkowa': {
		lead: 'Ochrona podatkowa zabezpiecza firmę na wypadek kontroli i sporów z organami skarbowymi. Pokrywa koszty profesjonalnego doradztwa, reprezentacji i postępowań, tak by kontrola nie zachwiała płynnością ani spokojem zarządu.',
		coverage: [
			{ title: 'Koszty kontroli i postępowań', desc: 'Obsługa kontroli podatkowej, celno-skarbowej oraz postępowań podatkowych.' },
			{ title: 'Profesjonalna reprezentacja', desc: 'Doradcy podatkowi i radcowie prawni przed organami i sądami administracyjnymi.' },
			{ title: 'Spory VAT, CIT i PIT', desc: 'Kwestie odliczeń, kosztów uzyskania przychodu i prawidłowości rozliczeń.' },
			{ title: 'Ceny transferowe', desc: 'Wsparcie w sporach dotyczących transakcji z podmiotami powiązanymi.' },
			{ title: 'Postępowania odwoławcze', desc: 'Reprezentacja w odwołaniach oraz przed WSA i NSA.' },
			{ title: 'Doradztwo prewencyjne', desc: 'Audyt ryzyka i wsparcie ograniczające prawdopodobieństwo sporu.' }
		],
		audience: [
			'Spółki i przedsiębiorcy rozliczający VAT i CIT',
			'Firmy prowadzące transakcje międzynarodowe',
			'Podmioty z grup kapitałowych (ceny transferowe)',
			'Każdy, kto chce działać spokojnie mimo ryzyka kontroli'
		],
		faq: [
			{ q: 'Czy ochrona zadziała przy już trwającej kontroli?', a: 'Ochrona dotyczy zdarzeń zaistniałych i zgłoszonych w okresie polisy; nie obejmuje kontroli wszczętych lub znanych przed jej zawarciem. Dlatego warto zabezpieczyć się zawczasu.' },
			{ q: 'Kto reprezentuje firmę przed urzędem?', a: 'Doświadczeni doradcy podatkowi i prawnicy współpracujący w ramach programu — nie zostajesz z urzędem sam.' },
			{ q: 'Czy polisa pokrywa zaległy podatek?', a: 'Nie. Polisa pokrywa koszty obsługi i reprezentacji w sporze, a nie samo zobowiązanie podatkowe. Celem jest ograniczenie ryzyka i kosztów postępowania.' }
		]
	},
	beautypolisa: {
		lead: 'BeautyPolisa to dedykowana ochrona dla branży beauty — salonów kosmetycznych, studiów tatuażu, barberów i gabinetów SPA. Jeden pakiet obejmujący OC wobec klientów, sprzęt, lokal i specyfikę wykonywanych zabiegów.',
		coverage: [
			{ title: 'OC za szkody wobec klientów', desc: 'Następstwa zabiegów kosmetycznych, pielęgnacyjnych i upiększających.' },
			{ title: 'Sprzęt i wyposażenie', desc: 'Urządzenia, fotele i aparatura wykorzystywane w salonie.' },
			{ title: 'Ochrona lokalu', desc: 'Od pożaru, zalania, kradzieży i dewastacji.' },
			{ title: 'Zabiegi specjalistyczne', desc: 'Tatuaż, makijaż permanentny i zabiegi z użyciem igły — w dopuszczalnym zakresie.' },
			{ title: 'Przerwa w działalności', desc: 'Wsparcie przy czasowym zamknięciu salonu po zdarzeniu.' },
			{ title: 'OC pracownika i najmu', desc: 'Ochrona zespołu oraz odpowiedzialności wobec wynajmującego lokal.' }
		],
		audience: [
			'Salony kosmetyczne i fryzjerskie',
			'Studia tatuażu i makijażu permanentnego',
			'Barber shops',
			'Gabinety SPA i wellness'
		],
		faq: [
			{ q: 'Czy BeautyPolisa obejmuje zabiegi z użyciem igły (tatuaż, PMU)?', a: 'Tak — to jeden z kluczowych elementów pakietu. Zakres dopasowujemy do rodzaju wykonywanych zabiegów.' },
			{ q: 'Czy ochrona obejmuje wynajmowany lokal?', a: 'Tak. Obejmujemy odpowiedzialność wobec wynajmującego oraz mienie w lokalu, w tym wyposażenie i sprzęt.' },
			{ q: 'Czy mogę ubezpieczyć jednoosobowy salon?', a: 'Oczywiście — pakiet skalujemy od jednoosobowej działalności po sieć salonów.' }
		]
	},
	'ubezpieczenia-grupowe': {
		lead: 'Grupowe ubezpieczenia na życie i zdrowie to atrakcyjny benefit pracowniczy, który wzmacnia lojalność zespołu i realnie zwiększa jego bezpieczeństwo — przy korzystnych, negocjowanych warunkach dla całej firmy.',
		coverage: [
			{ title: 'Grupowe ubezpieczenie na życie', desc: 'Ochrona pracownika i jego najbliższych.' },
			{ title: 'Pakiety zdrowotne i medyczne', desc: 'Dostęp do prywatnej opieki i szybkich konsultacji.' },
			{ title: 'Następstwa nieszczęśliwych wypadków', desc: 'Świadczenia po wypadkach w pracy i poza nią.' },
			{ title: 'Poważne zachorowania', desc: 'Wsparcie finansowe w trudnych sytuacjach zdrowotnych.' },
			{ title: 'Elastyczne warianty', desc: 'Dopasowanie zakresu do potrzeb zespołu i budżetu firmy.' },
			{ title: 'Prosta obsługa', desc: 'Wdrożenie, administracja i wsparcie przy zgłaszaniu świadczeń.' }
		],
		audience: [
			'Firmy budujące pakiet benefitów',
			'Pracodawcy dbający o retencję talentów',
			'Zespoły od kilku do kilkuset osób',
			'Organizacje stawiające na wellbeing'
		],
		faq: [
			{ q: 'Ile osób potrzeba, by uruchomić ubezpieczenie grupowe?', a: 'Wiele programów startuje już od kilku pracowników — dobierzemy rozwiązanie do wielkości zespołu.' },
			{ q: 'Czy pracownik może rozszerzyć ochronę o rodzinę?', a: 'Tak. W większości programów pracownik może objąć ochroną współmałżonka i dzieci na preferencyjnych warunkach.' },
			{ q: 'Kto administruje ubezpieczeniem?', a: 'Wspieramy pracodawcę w całej obsłudze — od wdrożenia, przez administrację, po pomoc przy zgłaszaniu świadczeń.' }
		]
	}
};
