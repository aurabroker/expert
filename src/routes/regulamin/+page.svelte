<script>
	import LegalPage from '$components/LegalPage.svelte';
	import { site, company } from '$data/content.js';
</script>

<LegalPage
	title="Regulamin serwisu"
	updated="25 lipca 2026"
	description="Regulamin korzystania z serwisu internetowego Aura Expert sp. z o.o."
>
	<h2>§1. Postanowienia ogólne</h2>
	<p>
		Niniejszy regulamin określa zasady korzystania z serwisu internetowego dostępnego pod adresem
		<strong>{site.url.replace('https://', '')}</strong> (dalej „Serwis"). Właścicielem i operatorem
		Serwisu jest <strong>{company.legalName}</strong> ({company.shortName}) z siedzibą przy
		{company.address}, KRS {company.krs}, NIP {company.nip}, REGON {company.regon} (dalej „Usługodawca").
	</p>

	<h2>§2. Definicje</h2>
	<ul>
		<li><strong>Serwis</strong> — strona internetowa Usługodawcy wraz z jej funkcjonalnościami;</li>
		<li><strong>Użytkownik</strong> — każda osoba korzystająca z Serwisu;</li>
		<li>
			<strong>Formularz kontaktowy</strong> — funkcjonalność umożliwiająca przesłanie zapytania do
			Usługodawcy.
		</li>
	</ul>

	<h2>§3. Rodzaj i zakres usług</h2>
	<p>Za pośrednictwem Serwisu Usługodawca świadczy nieodpłatnie usługi drogą elektroniczną polegające na:</p>
	<ul>
		<li>udostępnianiu informacji o Usługodawcy oraz oferowanych produktach ubezpieczeniowych;</li>
		<li>umożliwieniu kontaktu za pośrednictwem formularza kontaktowego.</li>
	</ul>

	<h2>§4. Warunki techniczne</h2>
	<p>
		Do korzystania z Serwisu niezbędne jest urządzenie z dostępem do internetu oraz aktualna
		przeglądarka internetowa z włączoną obsługą JavaScript. Usługodawca dokłada starań, aby Serwis
		działał w sposób ciągły, nie gwarantuje jednak nieprzerwanej dostępności.
	</p>

	<h2>§5. Formularz kontaktowy</h2>
	<p>
		Korzystanie z formularza kontaktowego jest dobrowolne i wymaga podania danych niezbędnych do
		udzielenia odpowiedzi oraz akceptacji przetwarzania danych osobowych. Użytkownik zobowiązuje się do
		podawania danych prawdziwych oraz niezamieszczania treści bezprawnych.
	</p>

	<h2>§6. Prawa własności intelektualnej</h2>
	<p>
		Wszelkie treści, znaki towarowe, logotypy oraz materiały graficzne zamieszczone w Serwisie
		podlegają ochronie prawnej i stanowią własność Usługodawcy lub podmiotów trzecich. Ich
		wykorzystywanie bez zgody uprawnionego jest zabronione.
	</p>

	<h2>§7. Charakter informacyjny i odpowiedzialność</h2>
	<p>
		Informacje zamieszczone w Serwisie mają charakter wyłącznie informacyjny i nie stanowią oferty w
		rozumieniu art. 66 Kodeksu cywilnego, ani porady prawnej, podatkowej czy rekomendacji dotyczącej
		konkretnego produktu ubezpieczeniowego. Szczegółowy zakres ochrony każdorazowo określają ogólne
		warunki ubezpieczenia oraz zawarta umowa.
	</p>

	<h2>§8. Reklamacje</h2>
	<p>
		Reklamacje dotyczące działania Serwisu można składać na adres
		<a href="mailto:{site.email}">{site.email}</a>. Reklamacja powinna zawierać opis sprawy oraz dane
		kontaktowe. Odpowiedź udzielana jest bez zbędnej zwłoki, nie później niż w terminie 30 dni.
	</p>

	<h2>§9. Dane osobowe</h2>
	<p>
		Zasady przetwarzania danych osobowych opisano w <a href="/polityka-prywatnosci">Polityce
		prywatności</a> oraz <a href="/rodo">Klauzuli informacyjnej RODO</a>.
	</p>

	<h2>§10. Postanowienia końcowe</h2>
	<p>
		W sprawach nieuregulowanych regulaminem zastosowanie mają przepisy prawa polskiego. Usługodawca
		zastrzega prawo do zmiany regulaminu — zmiany obowiązują od chwili opublikowania nowej wersji w
		Serwisie.
	</p>
</LegalPage>
