---
# How this site is secured → lvlulcuma.com/pl/colophon/
# Keep every sentence true. The header list is filled in from public/_headers automatically.
updated: 2026-10-27
intro: "Strona specjalisty od bezpieczeństwa powinna przejść te same testy, które sam przeprowadziłby u klienta. Poniżej opisuję zastosowane zabezpieczenia — możesz je sprawdzić samodzielnie."
key:   # the big fact at the top of the box beside the page
  label: "Pliki JavaScript"
  value: "0"
---

## Hosting

Statyczny HTML zbudowany w Astro i serwowany przez Cloudflare. Nie ma kodu po stronie serwera, bazy danych, logowania ani panelu administracyjnego, a strony nie uruchamiają żadnego JavaScriptu.

## Prywatność

Bez ciasteczek, analityki i zapytań do zewnętrznych serwisów. Czcionki są hostowane lokalnie, więc przeglądarka łączy się tylko z tą domeną.

## Nagłówki odpowiedzi

Każda strona jest wysyłana z tymi nagłówkami. Content-Security-Policy blokuje wszystkie skrypty, a budowanie kończy się błędem, jeśli jakakolwiek strona by je zawierała.

<!-- response-headers -->

## DNS i poczta

Strefa jest podpisana DNSSEC. Rekordy CAA ograniczają, które urzędy certyfikacji mogą wystawiać certyfikaty dla domeny. SPF i DMARC nakazują serwerom pocztowym odrzucać wiadomości podszywające się pod tę domenę.

## Sprawdź sam

- [securityheaders.com](https://securityheaders.com/?q=lvlulcuma.com&followRedirects=on)
- [MDN HTTP Observatory](https://developer.mozilla.org/en-US/observatory/analyze?host=lvlulcuma.com)
- [internet.nl](https://internet.nl/site/lvlulcuma.com/)
- [DNSViz (DNSSEC)](https://dnsviz.net/d/lvlulcuma.com/dnssec/)
