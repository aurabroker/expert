# Aura Expert

Strona firmowa **Aura Expert** — specjalistyczne ubezpieczenia dla firm (D&O, Cyber, Ochrona Podatkowa).
_zmień agenta na experta_

Zbudowana w **SvelteKit** i hostowana na **Cloudflare Pages**. Formularz kontaktowy wysyła
wiadomości przez **Resend API**.

## Stack

- [SvelteKit](https://kit.svelte.dev/) (Svelte 5) + Vite
- [Tailwind CSS](https://tailwindcss.com/)
- [`@sveltejs/adapter-cloudflare`](https://kit.svelte.dev/docs/adapter-cloudflare) — deploy na Cloudflare Pages
- [Resend](https://resend.com/) — wysyłka e-maili z formularza

## Wymagania

- Node.js 18+ (zalecane 20/22)

## Uruchomienie lokalne

```bash
npm install
cp .env.example .env   # uzupełnij RESEND_API_KEY, aby przetestować formularz
npm run dev
```

Aplikacja: http://localhost:5173

## Zmienne środowiskowe

| Zmienna              | Opis                                                       | Wymagana |
| -------------------- | ---------------------------------------------------------- | -------- |
| `RESEND_API_KEY`     | Klucz API Resend do wysyłki e-maili                        | tak\*    |
| `CONTACT_TO_EMAIL`   | Adres odbiorcy zgłoszeń (domyślnie `zarzad@auraexpert.pl`) | nie      |
| `CONTACT_FROM_EMAIL` | Nadawca (domena zweryfikowana w Resend)                    | nie      |
| `PUBLIC_GA_ID`       | ID Google Analytics 4 (np. `G-XXXXXXXXXX`); puste = wył.   | nie      |

\* Bez `RESEND_API_KEY` formularz zwróci komunikat o niedostępności, reszta strony działa normalnie.

W Cloudflare Pages ustaw je w **Settings → Environment variables** (Production i Preview).

## Struktura

```
src/
├─ app.css                 # Tailwind + style bazowe
├─ app.html                # szablon HTML, fonty
├─ lib/
│  ├─ components/          # Header, Hero, ServiceCards, Benefits, Testimonials, ContactForm, Footer, Logo, Icon
│  └─ data/content.js      # treści strony (edytuj tutaj)
└─ routes/
   ├─ +layout.svelte       # globalne style, animacje, GA4
   ├─ +page.svelte         # strona główna + SEO/OG/JSON-LD
   ├─ +page.js             # prerender = true
   └─ api/contact/+server.js  # endpoint formularza (Resend)
static/
├─ favicon.svg
├─ robots.txt, sitemap.xml
└─ images/                 # hero.jpg, consultant.jpg (grafika)
```

## Grafika

Obrazy w `static/images/` (hero, konsultant) wygenerowano w stylu marki.
Aby podmienić — wgraj własne pliki pod tymi samymi nazwami.

## Deploy (Cloudflare Pages)

1. Podłącz repozytorium GitHub w panelu Cloudflare Pages.
2. **Build command:** `npm run build`
3. **Build output directory:** `.svelte-kit/cloudflare`
4. Ustaw zmienne środowiskowe (patrz wyżej).
5. Push do gałęzi → automatyczny deploy.

## Budowanie produkcyjne

```bash
npm run build
npm run preview
```
