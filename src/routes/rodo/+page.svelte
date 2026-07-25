<script>
	import LegalPage from '$components/LegalPage.svelte';
	import { site, company } from '$data/content.js';
</script>

<LegalPage
	title="Nota informacyjna RODO"
	updated="Warszawa, wrzesień 2025"
	description="Nota informacyjna RODO Aura Expert sp. z o.o. zgodnie z art. 13–14 ogólnego rozporządzenia o ochronie danych osobowych."
>
	<p>
		Administratorem danych osobowych jest <strong>{company.legalName}</strong> (Aura Expert) z siedzibą
		w Warszawie, przy ulicy Bolkowskiej 2A lok. 28, 01-466 Warszawa, zarejestrowaną w rejestrze
		przedsiębiorców Krajowego Rejestru Sądowego prowadzonego przez Sąd Rejonowy dla m.st. Warszawy w
		Warszawie, XII Wydział Gospodarczy Krajowego Rejestru Sądowego pod nr KRS {company.krs}, REGON
		{company.regon}, NIP {company.nip}, kapitał zakładowy {company.kapital}.
	</p>

	<h2>W związku z czym przetwarzamy dane</h2>
	<p>Aura Expert przetwarza dane osobowe m.in. w związku z:</p>
	<ul>
		<li>
			wykonywaniem czynności agencyjnych zgodnie z ustawą z dnia 15 grudnia 2017 r. o dystrybucji
			ubezpieczeń (Dz.U. z 2017 r. poz. 2486 ze zm.);
		</li>
		<li>udostępnieniem klientom Aura Expert narzędzi informatycznych do komunikacji;</li>
		<li>obsługą reklamacji kierowanych do Aura Expert;</li>
		<li>obsługą zapytań kierowanych przez strony internetowe Aura Expert.</li>
	</ul>

	<h2>Czyje dane przetwarzamy</h2>
	<p>Aura Expert przetwarza dane osobowe m.in. następujących osób:</p>
	<ul>
		<li>
			klientów Aura Expert — na podstawie zgody osoby, której dane dotyczą, lub w związku z zawarciem
			umowy z klientem;
		</li>
		<li>
			pracowników klientów Aura Expert — na podstawie zgody, umowy powierzenia lub prawnie
			uzasadnionego interesu;
		</li>
		<li>osób składających reklamację — na podstawie przepisów prawa;</li>
		<li>osób kierujących zapytania przez strony internetowe — na podstawie zgody osoby, której dane dotyczą;</li>
		<li>
			pozostałych osób — na podstawie zgody lub żądania podjęcia działań przed zawarciem umowy.
		</li>
	</ul>

	<h2>Skąd pozyskujemy dane</h2>
	<p>Aura Expert zbiera dane osobowe:</p>
	<ul>
		<li>bezpośrednio od osób fizycznych — poprzez formularze, wnioski i dokumenty papierowe oraz elektronicznie, w tym pocztę e-mail;</li>
		<li>od pracodawców osób fizycznych — w analogiczny sposób;</li>
		<li>od innych dystrybutorów ubezpieczeń;</li>
		<li>od naszych klientów zgodnie z umową powierzenia.</li>
	</ul>

	<h2>Komu udostępniamy dane</h2>
	<p>Aura Expert udostępnia dane osobowe:</p>
	<ul>
		<li>zakładom ubezpieczeń i innym podmiotom współpracującym z Aura Expert;</li>
		<li>dystrybutorom ubezpieczeń — w zakresie i celu wykonywania czynności na rzecz i w imieniu naszych klientów;</li>
		<li>podmiotom świadczącym usługi lecznicze — w zakresie i celu obsługi szkód;</li>
		<li>innym instytucjom ustawowo upoważnionym do dostępu do danych w zakresie określonym w przepisach prawa.</li>
	</ul>

	<h2>Przekazywanie danych poza EOG</h2>
	<p>
		Aura Expert przetwarza dane na obszarze Europejskiego Obszaru Gospodarczego (EOG). W wyjątkowych
		przypadkach dane transferowane są poza ten obszar — każdorazowo upewniamy się wówczas, że mamy na
		to zgodę osoby, której dane dotyczą, lub że jest to zgodne z przepisami prawa legalizującymi
		transfer danych do państwa trzeciego.
	</p>

	<h2>Okres przetwarzania danych</h2>
	<p>Dane osobowe będą przetwarzane przez Aura Expert m.in.:</p>
	<ul>
		<li>
			przez okres umowy z Aura Expert oraz dodatkowo okres przedawnienia roszczeń wynikających z tej
			umowy, a także do momentu wygaśnięcia obowiązku przechowywania dokumentów wynikającego z
			przepisów prawa;
		</li>
		<li>
			w sytuacji, gdy podstawą przetwarzania jest zgoda — do dnia jej cofnięcia lub ustania celu, dla
			którego zgoda była wyrażona.
		</li>
	</ul>

	<h2>Prawa osób, których dane dotyczą</h2>
	<p>Osobom, których dane przetwarza Aura Expert, przysługują prawa:</p>
	<ul>
		<li>dostępu do treści swoich danych i ich sprostowania,</li>
		<li>usunięcia danych,</li>
		<li>ograniczenia przetwarzania,</li>
		<li>przenoszenia danych,</li>
		<li>wniesienia sprzeciwu wobec przetwarzania,</li>
		<li>cofnięcia zgody w dowolnym momencie — bez wpływu na zgodność z prawem przetwarzania sprzed cofnięcia,</li>
		<li>wniesienia skargi do organu nadzorczego zajmującego się ochroną danych osobowych.</li>
	</ul>

	<h2>Inspektor Ochrony Danych</h2>
	<p>W sprawach związanych z danymi osobowymi można kontaktować się z Inspektorem Ochrony Danych Aura Expert:</p>
	<ul>
		<li>elektronicznie: <a href="mailto:{company.iodEmail}">{company.iodEmail}</a>,</li>
		<li>telefonicznie: <a href="tel:{site.phoneHref}">{site.phone}</a>,</li>
		<li>listownie: {company.address}.</li>
	</ul>

	<p class="legal-note">
		<strong>Nota informacyjna RODO</strong> zgodnie z art. 13–14 ogólnego rozporządzenia o ochronie
		danych osobowych z dnia 27 kwietnia 2016 r. (RODO).
	</p>
</LegalPage>
