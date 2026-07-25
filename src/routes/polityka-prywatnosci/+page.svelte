<script>
	import LegalPage from '$components/LegalPage.svelte';
	import { site, company } from '$data/content.js';
</script>

<LegalPage
	title="Polityka prywatności"
	updated="25 lipca 2026"
	description="Polityka prywatności serwisu Aura Expert — zasady przetwarzania danych osobowych i wykorzystania plików cookies."
>
	<p>
		Niniejsza polityka prywatności opisuje zasady przetwarzania danych osobowych oraz wykorzystywania
		plików cookies w serwisie internetowym <strong>{site.url.replace('https://', '')}</strong>
		(dalej „Serwis"). Dbamy o prywatność osób odwiedzających Serwis i przetwarzamy dane zgodnie z
		Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 (RODO).
	</p>

	<h2>1. Administrator danych osobowych</h2>
	<p>
		Administratorem danych osobowych jest <strong>{company.legalName}</strong> ({company.shortName})
		z siedzibą przy {company.address}, wpisana do rejestru przedsiębiorców Krajowego Rejestru Sądowego
		pod numerem KRS {company.krs}, NIP {company.nip}, REGON {company.regon}.
	</p>
	<p>
		Kontakt z administratorem: e-mail <a href="mailto:{site.email}">{site.email}</a>, tel.
		<a href="tel:{site.phoneHref}">{site.phone}</a>.
	</p>

	<h2>2. Zakres i cele przetwarzania danych</h2>
	<p>Za pośrednictwem formularza kontaktowego możemy przetwarzać następujące dane:</p>
	<ul>
		<li>imię i nazwisko,</li>
		<li>adres e-mail,</li>
		<li>numer telefonu,</li>
		<li>treść wiadomości.</li>
	</ul>
	<p>Dane przetwarzamy w następujących celach i na następujących podstawach prawnych:</p>
	<ul>
		<li>
			udzielenie odpowiedzi na zapytanie i obsługa korespondencji — na podstawie prawnie
			uzasadnionego interesu administratora (art. 6 ust. 1 lit. f RODO);
		</li>
		<li>
			podjęcie działań przed zawarciem umowy oraz wykonanie czynności agencyjnych na żądanie osoby,
			której dane dotyczą (art. 6 ust. 1 lit. b RODO);
		</li>
		<li>
			realizacja obowiązków prawnych ciążących na administratorze, w tym wynikających z przepisów o
			dystrybucji ubezpieczeń (art. 6 ust. 1 lit. c RODO).
		</li>
	</ul>

	<h2>3. Dobrowolność podania danych</h2>
	<p>
		Podanie danych jest dobrowolne, jednak niezbędne do udzielenia odpowiedzi na zapytanie oraz
		nawiązania kontaktu. Niepodanie danych uniemożliwi obsługę zgłoszenia.
	</p>

	<h2>4. Okres przechowywania danych</h2>
	<p>
		Dane przechowujemy przez czas niezbędny do obsługi zapytania, a następnie przez okres wynikający z
		przepisów prawa lub do czasu przedawnienia ewentualnych roszczeń. W przypadku danych
		przetwarzanych na podstawie prawnie uzasadnionego interesu — do czasu zgłoszenia skutecznego
		sprzeciwu.
	</p>

	<h2>5. Odbiorcy danych</h2>
	<p>Odbiorcami danych mogą być:</p>
	<ul>
		<li>dostawcy usług informatycznych (hosting, poczta elektroniczna, obsługa formularza);</li>
		<li>
			zakłady ubezpieczeń, na rzecz których administrator wykonuje działalność agencyjną — w zakresie
			niezbędnym do realizacji czynności agencyjnych;
		</li>
		<li>podmioty uprawnione do uzyskania danych na podstawie obowiązujących przepisów prawa.</li>
	</ul>

	<h2>6. Przekazywanie danych poza EOG</h2>
	<p>
		Niektórzy dostawcy usług (np. hostingu lub analityki) mogą przetwarzać dane poza Europejskim
		Obszarem Gospodarczym. W takim przypadku przekazanie następuje z zachowaniem odpowiednich
		zabezpieczeń, w szczególności na podstawie standardowych klauzul umownych zatwierdzonych przez
		Komisję Europejską.
	</p>

	<h2>7. Prawa osoby, której dane dotyczą</h2>
	<p>Przysługuje Państwu prawo do:</p>
	<ul>
		<li>dostępu do danych oraz otrzymania ich kopii,</li>
		<li>sprostowania (poprawiania) danych,</li>
		<li>usunięcia danych,</li>
		<li>ograniczenia przetwarzania,</li>
		<li>wniesienia sprzeciwu wobec przetwarzania,</li>
		<li>przenoszenia danych,</li>
		<li>
			wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (ul. Stawki 2, 00-193 Warszawa).
		</li>
	</ul>

	<h2>8. Pliki cookies i analityka</h2>
	<p>
		Serwis może wykorzystywać pliki cookies niezbędne do jego prawidłowego działania oraz — o ile
		zostały włączone — narzędzia analityczne (np. Google Analytics) służące do analizy ruchu.
		Ustawieniami plików cookies można zarządzać z poziomu przeglądarki internetowej.
	</p>

	<h2>9. Zmiany polityki prywatności</h2>
	<p>
		Zastrzegamy możliwość aktualizacji niniejszej polityki. Zmiany obowiązują od chwili opublikowania
		nowej wersji w Serwisie.
	</p>

	<h2>10. Kontakt</h2>
	<p>
		W sprawach dotyczących ochrony danych osobowych prosimy o kontakt na adres
		<a href="mailto:{site.email}">{site.email}</a>. Szczegółową klauzulę informacyjną znajdą Państwo na
		stronie <a href="/rodo">RODO</a>.
	</p>
</LegalPage>
