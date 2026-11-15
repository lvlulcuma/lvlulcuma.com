---
# Roadmap topic. Its title and summary show on every job page that lists "web-basics" in learn.yml.
# The text under the dashes is the topic's own page: lvlulcuma.com/pl/roadmap/topics/web-basics/
# How these pages are written: docs/claude/roadmap-topic.md
title: "Jak działa sieć WWW"
summary: "Adresy URL, żądania i odpowiedzi HTTP, metody i kody statusu, nagłówki, ciasteczka i sesje, HTTPS oraz to, co serwer WWW lub proxy zapisuje w logach."
date: 2026-11-14
sources:
  - name: "RFC 3986: Uniform Resource Identifier (URI): Generic Syntax, 2005"
    url: "https://www.rfc-editor.org/rfc/rfc3986"
  - name: "RFC 9110: HTTP Semantics, 2022"
    url: "https://www.rfc-editor.org/rfc/rfc9110.html"
  - name: "RFC 9112: HTTP/1.1, 2022"
    url: "https://rfc-editor.org/rfc/rfc9112.html"
  - name: "RFC 9113: HTTP/2, 2022"
    url: "https://www.rfc-editor.org/rfc/rfc9113"
  - name: "RFC 9114: HTTP/3, 2022"
    url: "https://www.rfc-editor.org/rfc/rfc9114"
  - name: "RFC 5789: PATCH Method for HTTP, 2010"
    url: "https://www.rfc-editor.org/rfc/rfc5789"
  - name: "RFC 6265: HTTP State Management Mechanism (cookies), 2011"
    url: "https://www.rfc-editor.org/rfc/rfc6265"
  - name: "IETF draft-ietf-httpbis-rfc6265bis: Cookies (the update to RFC 6265)"
    url: "https://datatracker.ietf.org/doc/draft-ietf-httpbis-rfc6265bis/"
  - name: "RFC 7239: Forwarded HTTP Extension, 2014"
    url: "https://rfc-editor.org/rfc/rfc7239"
  - name: "RFC 6797: HTTP Strict Transport Security (HSTS), 2012"
    url: "https://datatracker.ietf.org/doc/rfc6797/"
  - name: "RFC 8446: The Transport Layer Security (TLS) Protocol Version 1.3, 2018"
    url: "https://www.rfc-editor.org/rfc/rfc8446"
  - name: "RFC 9846: The Transport Layer Security (TLS) Protocol Version 1.3, July 2026"
    url: "https://www.rfc-editor.org/rfc/rfc9846.html"
  - name: "RFC 8996: Deprecating TLS 1.0 and TLS 1.1, 2021"
    url: "https://rfc-editor.org/rfc/rfc8996.html"
  - name: "RFC 9849: TLS Encrypted Client Hello, March 2026"
    url: "https://datatracker.ietf.org/doc/rfc9849/"
  - name: "RFC 6962: Certificate Transparency, 2013"
    url: "https://www.rfc-editor.org/rfc/rfc6962"
  - name: "MDN Web Docs: Overview of HTTP"
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview"
  - name: "MDN Web Docs: HTTP response status codes"
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status"
  - name: "MDN Web Docs: Set-Cookie header"
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie"
  - name: "MDN Web Docs: Same-origin policy"
    url: "https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Same-origin_policy"
  - name: "MDN Web Docs: Referrer-Policy header"
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Referrer-Policy"
  - name: "MDN Web Docs: X-Forwarded-For header"
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/X-Forwarded-For"
  - name: "MDN Web Docs: Proxy servers and tunneling"
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling"
  - name: "MDN Web Docs: Strict-Transport-Security header"
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security"
  - name: "OWASP HTTP Security Response Headers Cheat Sheet"
    url: "https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html"
  - name: "OWASP Session Management Cheat Sheet"
    url: "https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html"
  - name: "Chromium Blog: SameSite Cookie Changes in February 2020"
    url: "https://blog.chromium.org/2020/02/samesite-cookie-changes-in-february.html"
  - name: "Google: Chrome Now Warns Before Insecure HTTP Connections, October 2026"
    url: "https://blog.google/security/chrome-now-warns-before-insecure-http-connections/"
  - name: "Chromium Blog: An Update on the Lock Icon, May 2023"
    url: "https://blog.chromium.org/2023/05/an-update-on-lock-icon.html"
  - name: "CA/Browser Forum: Ballot SC-081v3, Introduce Schedule of Reducing Validity and Data Reuse Periods, 2025"
    url: "https://cabforum.org/2025/04/11/ballot-sc081v3-introduce-schedule-of-reducing-validity-and-data-reuse-periods/"
  - name: "Sophos X-Ops: Cookie stealing, the new perimeter bypass, 2022"
    url: "https://news.sophos.com/en-us/2022/08/18/cookie-stealing-the-new-perimeter-bypass/"
  - name: "CISA Alert TA17-075A: HTTPS Interception Weakens TLS Security, 2017"
    url: "https://www.cisa.gov/news-events/alerts/2017/03/16/https-interception-weakens-tls-security"
  - name: "Apache HTTP Server documentation: Log Files"
    url: "https://httpd.apache.org/docs/logs.html"
  - name: "nginx documentation: ngx_http_log_module"
    url: "https://nginx.org/en/docs/http/ngx_http_log_module.html"
  - name: "Microsoft Learn: Configure Logging in IIS"
    url: "https://learn.microsoft.com/en-us/iis/manage/provisioning-and-managing-iis/configure-logging-in-iis"
  - name: "curl: curl shipped by Microsoft"
    url: "https://curl.se/windows/microsoft.html"
  - name: "Chrome for Developers: Inspect network activity"
    url: "https://developer.chrome.com/docs/devtools/network"
  - name: "WebKit: Enabling Web Inspector (Safari)"
    url: "https://webkit.org/web-inspector/enabling-web-inspector/"
visuals:
  visit:
    kind: route
    stages:
      - where: "Znaleźć serwer"
        steps: ["DNS: <code>shop.example</code>?", "<code>203.0.113.10</code>"]
      - where: "Otworzyć bezpieczny kanał (TLS)"
        steps: ["Powitanie", "Certyfikat", "Klucze uzgodnione"]
      - where: "Pytanie i odpowiedź (HTTP)"
        steps: ["<code>GET /</code>", "<code>200 OK</code> i ciasteczko"]
      - where: "Dociągnąć resztę i działać dalej"
        steps: ["Style, obrazy, skrypty", "Każde kolejne żądanie niesie ciasteczko"]
    caption: "Jedna wizyta na stronie głównej sklepu. Najpierw przeglądarka poznaje adres i otwiera bezpieczny kanał, a potem przeglądarka i serwer wymieniają żądania i odpowiedzi, dopóki nie wyjdziesz."
  url:
    kind: window
    title: "Jeden adres URL, część po części"
    lead: ["https://shop.example:443/cart/items?id=42&amp;color=blue#reviews", "adres URL ze wszystkimi typowymi częściami"]
    head: ["Część", "W tym adresie"]
    rows:
      - ["Schemat: jak rozmawiać", "<code>https</code>"]
      - ["Host: która strona", "<code>shop.example</code>"]
      - ["Port (zwykle pomijany)", "<code>443</code>"]
      - ["Ścieżka: co dokładnie na stronie", "<code>/cart/items</code>"]
      - ["Parametry: dodatkowe szczegóły", "<code>id=42&amp;color=blue</code>"]
      - ["Fragment: miejsce na stronie", "<code>reviews</code> (nigdy nie trafia do serwera)"]
    mark: 2
    caption: "To host decyduje, dokąd pójdzie twoje żądanie. Całą resztą zarządza już sama strona."
  status:
    kind: cards
    layout: rows
    cards:
      - title: "1xx: chwileczkę"
        text: "Wstępna informacja, zanim przyjdzie właściwa odpowiedź. W logach rzadka."
        tags: ["100 Continue"]
      - title: "2xx: sukces"
        text: "Proszę bardzo albo: zrobione."
        tags: ["200 OK", "201 Created", "204 No Content"]
      - title: "3xx: przekierowanie"
        text: "Zasób jest gdzie indziej albo twoja zapisana kopia wciąż jest dobra."
        tags: ["301", "302", "304", "307", "308"]
      - title: "4xx: błąd klienta"
        text: "Coś jest nie tak z żądaniem: zły adres, brak logowania, brak dostępu albo za dużo żądań."
        tags: ["400", "401", "403", "404", "429"]
      - title: "5xx: błąd serwera"
        text: "Żądanie wyglądało dobrze, ale serwerowi nie udało się na nie odpowiedzieć."
        tags: ["500", "502", "503", "504"]
    caption: "Pierwsza cyfra mówi, jaka to odpowiedź, zanim poznasz dokładny kod."
  login:
    kind: route
    stages:
      - where: "Logowanie, raz"
        steps: ["<code>POST /login</code> z twoim hasłem", "<code>200 OK</code> + <code>Set-Cookie: session=7f3a…</code>"]
      - where: "Każde kolejne żądanie"
        steps: ["<code>Cookie: session=7f3a…</code>", "Serwer szuka sesji 7f3a…", "Twoje zamówienia, twój koszyk"]
    caption: "Hasło jedzie przez sieć raz. Potem dowodem, że to ty, jest ciasteczko, dlatego ukraść je to tyle, co ukraść hasło."
  cookie:
    kind: window
    title: "Jeden nagłówek Set-Cookie, rozłożony na części"
    lead: ["session=7f3a9c…", "nazwa i wartość: długi losowy identyfikator, a nie twoje hasło"]
    head: ["Atrybut", "Co robi"]
    rows:
      - ["<code>Secure</code>", "Wysyłane tylko przez HTTPS"]
      - ["<code>HttpOnly</code>", "Skrypty strony nie mogą go odczytać, więc wstrzyknięty kod nie ukradnie go w ten sposób"]
      - ["<code>SameSite=Lax</code>", "Pomijane w większości żądań, które zaczynają inne strony"]
      - ["<code>Path=/</code>", "Wysyłane dla każdej podstrony serwisu"]
      - ["<code>Max-Age=3600</code>", "Usuwane po godzinie (3 600 sekund)"]
    caption: "Dobrze ustawione ciasteczko sesyjne. Bez <code>Max-Age</code> ani <code>Expires</code> żyłoby do zamknięcia przeglądarki."
  https:
    kind: cards
    cards:
      - title: "Ukrywa HTTPS"
        text: "Zaszyfrowane między twoją przeglądarką a serwerem."
        tags: ["ścieżka i parametry", "nagłówki i ciasteczka", "sama strona", "to, co wpisujesz w formularze"]
      - title: "Wciąż widać w sieci"
        text: "To widzi każdy po drodze."
        tags: ["oba adresy IP", "nazwa strony (zwykle)", "kiedy i ile danych"]
    caption: "Nazwa strony zwykle wycieka przez DNS i powitanie TLS. Szyfrowany DNS i Encrypted Client Hello mogą ją ukryć, jeśli obie strony je obsługują."
  proxies:
    kind: cards
    layout: rows
    cards:
      - title: "Proxy przekazujące"
        text: "Stoi przed użytkownikami, na przykład firmowe proxy WWW. Widzi i zapisuje, jakie strony odwiedza każda osoba."
        tags: ["firmowe proxy WWW", "bezpieczna brama internetowa (SWG)"]
      - title: "Odwrotne proxy"
        text: "Stoi przed serwerami. Przyjmuje żądanie każdego odwiedzającego i przekazuje je serwerowi, który stoi za nim."
        tags: ["load balancer", "CDN", "firewall aplikacji webowych (WAF)"]
    caption: "Ten sam pomysł po przeciwnych stronach. W obu przypadkach następna maszyna rozmawia z proxy, a nie z odwiedzającym."
  logline:
    kind: window
    title: "Jeden wiersz logu dostępu, pole po polu"
    head: ["Pole", "W tym wierszu"]
    rows:
      - ["Kto pytał (<code>%h</code>)", "<code>203.0.113.25</code>"]
      - ["Tożsamość (<code>%l</code>)", "<code>-</code> (prawie zawsze puste)"]
      - ["Użytkownik (<code>%u</code>)", "<code>-</code> (tylko przy wbudowanym logowaniu HTTP)"]
      - ["Kiedy (<code>%t</code>)", "<code>[12/Nov/2026:14:02:17 -0500]</code>"]
      - ["Żądanie (<code>%r</code>)", "<code>GET /cart?item=42 HTTP/1.1</code>"]
      - ["Kod statusu (<code>%&gt;s</code>)", "<code>200</code>"]
      - ["Wysłane bajty (<code>%b</code>)", "<code>5120</code>"]
      - ["Skąd przyszedł (Referer)", "<code>https://shop.example/</code>"]
      - ["Za kogo się podaje (User-Agent)", "<code>Mozilla/5.0 (Windows NT 10.0; …)</code>"]
    mark: 5
    caption: "Format combined z Apache, którego nginx też używa domyślnie. Kody w nawiasach to te z jego konfiguracji."
  quiz:
    kind: questions
    items:
      - q: "Dokąd naprawdę prowadzi <code>https://shop.example.account-check.example/login</code>?"
        a: "Do <code>account-check.example</code>. Host kończy się na pierwszym pojedynczym <code>/</code> i czyta się go od prawej: <code>shop.example.</code> na początku to tylko etykieta, którą właściciel tamtej strony dopisał z przodu."
      - q: "Która część <code>https://shop.example/help?topic=returns#refunds</code> nigdy nie dociera do serwera?"
        a: "<code>#refunds</code>, czyli fragment. Przeglądarka zatrzymuje go dla siebie, żeby przewinąć do miejsca na stronie. Parametry <code>?topic=returns</code> są wysyłane i zwykle trafiają do logów serwera."
      - q: "W logu jest 300 żądań w dwie minuty z jednego adresu do <code>/login</code>, wszystkie z kodem <code>401</code>, a potem jedno <code>302</code> do <code>/account</code>. Co najpewniej się stało?"
        a: "Ktoś, prawie na pewno skrypt, zgadywał hasła i ostatnia próba się udała: przekierowanie na stronę konta tak właśnie wygląda po udanym logowaniu. To ten sukces jest wierszem, na który trzeba zareagować."
      - q: "Czym różni się <code>401</code> od <code>403</code>?"
        a: "<code>401</code> oznacza, że żądanie nie ma ważnych danych uwierzytelniających: najpierw się zaloguj. <code>403</code> oznacza, że serwer zrozumiał żądanie i odmawia, nawet po zalogowaniu. Serwer może też odpowiedzieć <code>404</code>, żeby ukryć, że zabroniona strona istnieje."
      - q: "Dlaczego nie można ufać nagłówkom User-Agent ani X-Forwarded-For w żądaniu?"
        a: "Oba pisze klient, a klient może wpisać cokolwiek. X-Forwarded-For jest wiarygodny tylko w tej części, którą dopisało proxy kontrolowane przez ciebie."
      - q: "Ciasteczko sesyjne ma ustawione <code>HttpOnly</code>. Czy to powstrzyma infostealera na komputerze użytkownika przed jego zabraniem?"
        a: "Nie. <code>HttpOnly</code> tylko nie pozwala skryptom na stronach internetowych go odczytać. Złośliwe oprogramowanie na komputerze czyta magazyn ciasteczek przeglądarki bezpośrednio, a kto wstawi to ciasteczko do swojej przeglądarki, jest zalogowany jako ty, bez hasła i drugiego składnika."
      - q: "W kawiarnianym Wi-Fi otwierasz <code>https://bank.example/statements?year=2026</code>. Co z tego może zobaczyć właściciel sieci: nazwę strony, ścieżkę, rok, twoje ciasteczko?"
        a: "Zwykle nazwę strony (z DNS i powitania TLS), a do tego adresy IP i ilość przesłanych danych. Ścieżka, parametry z rokiem i ciasteczko są wewnątrz zaszyfrowanego połączenia."
      - q: "Log Apache pokazuje <code>[12/Nov/2026:14:02:17 -0500]</code>, a log IIS <code>2026-11-12 19:02:17</code>. Czy to może być ta sama chwila?"
        a: "Tak. Apache zapisuje czas lokalny z przesunięciem względem UTC (tu o 5 godzin wstecz), więc 14:02 przy −0500 to 19:02 UTC, a IIS zapisuje swoje logi W3C w UTC."
---

## Krótko

Wyobraź sobie sieć WWW jako kawiarnię z ladą i bardzo słabą pamięcią. Do kuchni nie wchodzisz: podajesz pisemne
zamówienie i dostajesz coś w zamian.

- Twoja **przeglądarka** pisze zamówienie, czyli **żądanie**. Mówi ono, co zrobić (**metoda**, na przykład `GET`),
  o jaką rzecz chodzi (**URL**) i dodaje kilka uwag (**nagłówki**).
- **Serwer** daje **odpowiedź**: trzycyfrowy **kod statusu** (`200` to „proszę bardzo”, `404` to „nie mamy
  czegoś takiego”), własne uwagi i samą rzecz, na przykład stronę internetową.
- Kawiarnia zapomina o tobie, gdy tylko odejdziesz od lady, więc daje ci numerek, czyli **ciasteczko** (cookie),
  które pokazujesz przy każdym zamówieniu. Dzięki temu strona wie, że to wciąż ty, już po zalogowaniu.
- **HTTPS** to ta sama rozmowa przez zaplombowaną rurę: ludzie obok widzą, że jesteś w kawiarni, ale nie widzą, co
  zamawiasz.
- Serwer i każde **proxy** pomiędzy zapisują każde zamówienie w księdze, czyli w **logach**.

<mark>Sieć WWW to rozmowa z żądań i odpowiedzi: przeglądarka pyta metodą i adresem URL, serwer odpowiada kodem
statusu, a jedno żądanie z następnym łączy tylko to, co przeglądarka odsyła z powrotem, zwykle ciasteczko.</mark>
Prawie każdy atak na strony i prawie każdy log WWW, jaki kiedykolwiek zobaczysz, składa się z tych kilku części.

Po lekturze tej strony będziesz umieć:

- rozłożyć adres URL na części, powiedzieć, do której strony naprawdę prowadzi i które części docierają do serwera;
- przeczytać surowe żądanie i odpowiedź HTTP wiersz po wierszu;
- znać główne metody i kody statusu oraz to, co sugeruje ich nagły wysyp w logu;
- wymienić nagłówki ważne dla bezpieczeństwa i wiedzieć, które z nich klient może podrobić;
- wyjaśnić, jak ciasteczka utrzymują logowanie i dlaczego skradzione ciasteczko jest warte tyle, co hasło;
- powiedzieć, co chroni HTTPS, co zostaje widoczne i czego dowodzi certyfikat;
- odczytać wiersz logu dostępu serwera WWW pole po polu.

## Słowa, które się przydadzą

- **Przeglądarka** (albo **user agent**, „agent użytkownika”) — program, który wysyła żądania w twoim imieniu.
  Żądania wysyłają też skrypty i aplikacje, więc logi często mówią po prostu „klient”.
- **Serwer** — program, który odpowiada. Jedna maszyna może obsługiwać wiele stron, a jedna strona może działać
  na wielu maszynach.
- **Zasób** — wszystko, co ma adres: strona, obraz, plik, kawałek danych.
- **HTML, CSS i JavaScript** — treść strony, jej wygląd i zachowanie. Żeby wczytać to wszystko, jedna strona zwykle
  potrzebuje dziesiątek osobnych żądań.
- **API** — adres przeznaczony dla programów, a nie ludzi. Zwykle odpowiada danymi (często JSON), a nie stroną.
- **Zwykły tekst** — wiadomości HTTP/1.1 da się po prostu przeczytać, dlatego najłatwiej na nich się uczyć.

## Jedna wizyta od początku do końca

Wpisujesz `shop.example` i naciskasz Enter. Oto co się dzieje, zanim cokolwiek zobaczysz.

<!-- pic: visit -->

1. **Znaleźć serwer.** Przeglądarka pyta DNS o adres `shop.example` i dostaje `203.0.113.10` (o DNS piszemy
   w [Podstawach sieci](/pl/roadmap/topics/networking-basics/)).
2. **Otworzyć bezpieczny kanał.** Łączy się z portem 443 i uzgadnia szyfrowanie za pomocą **TLS**. Serwer dowodzi,
   kim jest, **certyfikatem**.
3. **Pytanie i odpowiedź.** Przeglądarka wysyła `GET /`, a serwer odpowiada `200 OK` ze stroną i ciasteczkiem.
4. **Dociągnąć resztę.** Strona wymienia swoje style, obrazy i skrypty, a każdy z nich to kolejne żądanie. Każde
   następne żądanie do tej strony niesie ciasteczko z powrotem.

Reszta tej strony rozkłada każdą część na czynniki pierwsze.

## Adresy URL: adres wszystkiego

**URL** nazywa zasób i mówi, jak do niego dotrzeć. Jego części określa norma (RFC 3986), więc każda przeglądarka,
serwer i narzędzie bezpieczeństwa dzieli go tak samo.

<!-- pic: url -->

- **Schemat** — `https` albo `http`, czyli protokół, którego użyć.
- **Host** — nazwa strony (albo adres IP). To ta część decyduje, dokąd pójdzie twoje żądanie.
- **Port** — prawie zawsze pomijany, bo każdy schemat ma domyślny: 443 dla `https`, 80 dla `http`.
- **Ścieżka** — co dokładnie na tej stronie, jak ścieżka do folderu: `/cart/items`.
- **Parametry** (query) — dodatkowe szczegóły po `?`, zapisane jako pary `name=value` połączone znakiem `&`. Tu
  mieszkają wyszukiwane słowa, filtry i identyfikatory.
- **Fragment** — po `#`, miejsce na stronie. Przeglądarka zatrzymuje go dla siebie: fragmenty nigdy nie są wysyłane
  do serwera i nigdy nie trafiają do jego logów.

Niektóre znaki nie mogą wystąpić wprost, więc zapisuje się je jako `%` i dwie cyfry szesnastkowe. To **kodowanie
procentowe** (percent-encoding): spacja zmienia się w `%20`. Atakujący też z niego korzystają, żeby przemycić znaki
obok filtrów, które szukają tylko zwykłej postaci, więc w logach widać je często.

**Pochodzenie** (origin) strony to jej schemat, host i port razem. Przeglądarki trzymają strony o różnym pochodzeniu
osobno: zgodnie z **zasadą tego samego pochodzenia** (same-origin policy) skrypt z jednego pochodzenia nie może
odczytać tego, co odsyła inne, chyba że tamta strona na to pozwala (nagłówkami zwanymi **CORS**). Wersje strony
z `http://` i `https://` albo z różnymi portami to różne pochodzenia.

### Jak bezpiecznie czytać adres URL

Phishing liczy na to, że ludzie źle odczytają adres URL. Dwie zasady wystarczają na większość sztuczek:

- **Host kończy się na pierwszym pojedynczym `/`. Czytaj go od prawej.** W
  `https://shop.example.account-check.example/login` stroną jest `account-check.example`, a `shop.example.` to tylko
  etykieta, którą jej właściciel dopisał z przodu.
- **Wszystko przed `@` w tej części to nazwa użytkownika, a nie strona.** W `https://shop.example@203.0.113.50/`
  żądanie idzie do `203.0.113.50`. Przeglądarki mogą ostrzec przed takim linkiem, ale nie każda aplikacja to robi.

> [!WARNING]
> Nigdy nie umieszczaj sekretów w adresie URL. Parametry są wysyłane w pierwszym wierszu żądania, więc trafiają do
> logów serwerów i proxy, do historii przeglądarki, a czasem także do nagłówka Referer wysyłanego do następnej strony.

## Żądania i odpowiedzi

Każda wymiana to jedno **żądanie** i jedna **odpowiedź**. W HTTP/1.1 jedno i drugie to zwykły tekst. Oto przeglądarka
prosi o stronę koszyka:

```http
GET /cart?item=42 HTTP/1.1
Host: shop.example
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) …
Accept: text/html
Accept-Language: en-US
Cookie: session=7f3a9c…
```

- **Wiersz żądania** (request line) zawiera metodę (`GET`), cel (`/cart?item=42`) i wersję (`HTTP/1.1`).
- Potem idą **nagłówki**, po jednym `Name: value` w wierszu.
- Pusty wiersz kończy nagłówki. Po nim żądanie może nieść **treść** (body), na przykład dane formularza w `POST`.
  To żądanie żadnej treści nie ma.

Nagłówek `Host` jest w HTTP/1.1 obowiązkowy, a na żądanie bez niego serwer musi odpowiedzieć `400`. Istnieje, bo
jeden adres IP często obsługuje wiele stron, a serwer musi wiedzieć, o którą ci chodzi.

A oto odpowiedź serwera:

```http
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Content-Length: 5120
Set-Cookie: session=7f3a9c…; Secure; HttpOnly; SameSite=Lax; Path=/
Strict-Transport-Security: max-age=31536000

<!doctype html>
…
```

**Wiersz statusu** (status line) podaje wersję, kod i krótkie hasło (`200 OK`). Dalej są nagłówki, pusty wiersz,
a potem treść, tutaj sama strona.

HTTP jest **bezstanowy** (stateless): każde żądanie stoi samo, a nic w protokole nie łączy go z poprzednim.
Ciasteczka, opisane niżej, to sposób, w jaki strony i tak cię pamiętają.

> [!ASIDE] Wersje
> HTTP/2 (RFC 9113) wysyła te same wiadomości jako zwarte ramki binarne i przesyła wiele naraz jednym połączeniem.
> HTTP/3 (RFC 9114) robi to samo na QUIC, czyli na UDP. Znaczenie jest identyczne (RFC 9110), więc narzędzia
> przeglądarki pokazują każdą wersję tak, jakby była tekstem z przykładu wyżej.

## Metody: czego klient chce

Metoda to czasownik żądania. Oto te, które zobaczysz:

| Metoda | Prosi serwer, żeby | Bezpieczna | Idempotentna |
|---|---|---|---|
| GET | wysłał zasób (stronę, obraz, dane) | Tak | Tak |
| HEAD | wysłał tylko nagłówki, które dostałby GET | Tak | Tak |
| POST | przetworzył dane od klienta (logowanie, wpis, płatność) | Nie | Nie |
| PUT | utworzył albo zastąpił zasób pod tym adresem URL | Nie | Tak |
| PATCH | zmienił część zasobu | Nie | Nie |
| DELETE | usunął zasób | Nie | Tak |
| OPTIONS | powiedział, które metody są tu dozwolone | Tak | Tak |

**Bezpieczna** (safe) znaczy, że metoda tylko czyta: klient nie prosi o żadne zmiany. **Idempotentna** znaczy, że to
samo żądanie wysłane dwa razy działa tak samo jak wysłane raz: usunięcie czegoś już usuniętego niczego więcej nie
zmienia, ale płatność wysłana dwa razy płaci dwa razy. Dlatego przeglądarki pytają, zanim ponownie wyślą formularz.

Co to znaczy dla bezpieczeństwa:

- **Metoda to obietnica, a nie gwarancja.** Jeśli strona coś zmienia na `GET` (`/delete?id=7`), może to uruchomić
  zwykły link albo obrazek.
- **GET umieszcza swoje dane w adresie URL**, a więc w logach i historii. Logowanie i formularze powinny iść w treści
  POST, której logi dostępu nie zapisują.
- **Nietypowe metody z zewnątrz** (`PUT`, `DELETE` i `TRACE`, który do celów testowych odsyła żądanie z powrotem)
  warto sprawdzić, jeśli publiczna strona ich nie używa.

## Kody statusu: jak poszło

Kod statusu to trzycyfrowe podsumowanie odpowiedzi, a jego pierwsza cyfra mówi, jaka to odpowiedź.

<!-- pic: status -->

Kody, które spotkasz najczęściej, i co mogą znaczyć w logu:

| Kod | Znaczy | W logu może wskazywać na |
|---|---|---|
| 200 OK | Proszę bardzo | Normę, ale 200 zaraz po wielu porażkach to wiersz do przeczytania |
| 201 Created | Powstało coś nowego | Przesłany plik albo nowe konto |
| 204 No Content | Zrobione, nie ma czego odsyłać | Normę przy wielu wywołaniach API |
| 301, 308 | Przeniesiono na stałe | 308 zachowuje metodę, więc POST zostaje POST-em |
| 302, 307 | Przeniesiono tymczasowo (często na stronę logowania) | 307 zachowuje metodę. 302 po POST-cie logowania często oznacza, że się udało |
| 304 Not Modified | Twoja zapisana kopia wciąż jest dobra | Normę, a odpowiedź jest mała |
| 400 Bad Request | Żądanie jest źle zbudowane | Zepsutych klientów albo kogoś, kto wysyła dziwne dane |
| 401 Unauthorized | Brak ważnych danych logowania: najpierw się zaloguj | Wiele z rzędu z jednego adresu: zgadywanie haseł |
| 403 Forbidden | Zrozumiano, ale odmówiono | Kogoś, kto sięga po coś, czego mu nie wolno |
| 404 Not Found | Nic tu nie ma (albo jest ukryte) | Serie dla dziwnych ścieżek: skaner zgaduje |
| 429 Too Many Requests | Zwolnij | Zadziałało ograniczanie liczby żądań |
| 500 Internal Server Error | Zawiódł kod samego serwera | Serie po dziwnych danych wejściowych warto sprawdzić |
| 502 Bad Gateway | Proxy dostało zepsutą odpowiedź od serwera za nim | Aplikacja za proxy nie działa |
| 503 Service Unavailable | Przeciążony albo wyłączony na czas prac | Może iść w ślad za zalewem żądań |
| 504 Gateway Timeout | Serwer za proxy odpowiadał za wolno | Przeciążenie albo wolne, ciężkie żądanie |

Dwie pary często się mylą:

- **401 i 403.** Mimo nazwy `401 Unauthorized` dotyczy tego, kim jesteś: żądaniu brakuje ważnych danych
  uwierzytelniających, a odpowiedź musi powiedzieć, jak się zalogować. `403 Forbidden` znaczy, że serwer zrozumiał
  żądanie i odmawia, nawet po zalogowaniu. Serwer może też odpowiedzieć `404` zamiast `403`,
  żeby ukryć, że zabroniona strona w ogóle istnieje.
- **Kod sukcesu nie zawsze jest dobrą wiadomością.** Podczas ataku groźny jest ten wiersz, który zadziałał: `200`
  dla kopii zapasowej, którą zgadł skaner, albo przekierowanie po setnej próbie logowania.

## Nagłówki: uwagi przy każdej wiadomości

Nagłówki niosą wszystko, co nie jest treścią. Najważniejsze dla bezpieczeństwa:

| Nagłówek żądania | Co mówi |
|---|---|
| Host | Dla której strony jest żądanie |
| User-Agent | Która przeglądarka czy narzędzie twierdzi, że wysłało żądanie |
| Accept, Accept-Language | Jakie formaty i języki klient woli |
| Referer | Strona, z której tu trafiono |
| Cookie | Ciasteczka zapisane przez przeglądarkę dla tej strony |
| Authorization | Dane logowania, na przykład token, dla API albo logowania |
| Content-Type | Format treści, na przykład dane formularza albo JSON |
| Origin | Która witryna zaczęła żądanie |
| X-Forwarded-For | Adres klienta, dopisany po drodze przez proxy |

| Nagłówek odpowiedzi | Co mówi |
|---|---|
| Content-Type | Co jest w treści, na przykład `text/html` |
| Set-Cookie | Zapisz to ciasteczko |
| Location | Dokąd iść dalej; wysyłany z przekierowaniami |
| Cache-Control | Czy i jak długo wolno przechowywać odpowiedź |
| Server | Jakie oprogramowanie serwera odpowiedziało, czasem z wersją |
| Strict-Transport-Security | Dla tej strony tylko HTTPS |
| Content-Security-Policy | Jakie skrypty, obrazy i ramki strona może wczytać |
| X-Content-Type-Options | `nosniff`: nie zgaduj typu, ufaj `Content-Type` |
| X-Frame-Options | Czy inne strony mogą pokazywać tę stronę w ramce |

> [!WARNING]
> **Każdy nagłówek żądania pisze klient**, a klient może wpisać cokolwiek. User-Agent „Googlebot” niczego nie
> dowodzi, Referer można zmyślić, a X-Forwarded-For można wypełnić, zanim żądanie w ogóle dotrze do twojego proxy.
> Ufaj tylko temu, co dopisała maszyna, którą kontrolujesz.

Nagłówki bezpieczeństwa z drugiej tabeli to własna obrona strony, a ich sprawdzenie należy do większości ocen
bezpieczeństwa aplikacji webowych. `Content-Security-Policy` ogranicza, co strona może wczytać, i w ten sposób mocno
osłabia wstrzyknięte skrypty. Jej reguła `frame-ancestors` zastępuje starszy `X-Frame-Options`, a oba nie pozwalają
innym stronom niepostrzeżenie pokazywać twojej strony wewnątrz swojej, żeby nakłonić ludzi do kliknięcia
(**clickjacking**).

> [!ASIDE] Referer przez jedno „r”
> Nazwa nagłówka ma literówkę w samej normie HTTP i ta literówka została. Nowszy nagłówek `Referrer-Policy`, który
> decyduje, ile z niego przeglądarki wysyłają, jest napisany poprawnie.

## Ciasteczka i sesje: jak strona cię pamięta

Ponieważ HTTP między żądaniami wszystko zapomina, strony używają **ciasteczek** (plików cookie; RFC 6265 z 2011 roku,
jego aktualizacja jest wciąż dopracowywana). Odpowiedź wysyła `Set-Cookie`, przeglądarka zapisuje ciasteczko i od tej
pory odsyła je w nagłówku `Cookie` z każdym żądaniem do tej strony.

<!-- pic: login -->

**Sesja** to pamięć strony o tobie, przechowywana na serwerze: kim jesteś, co masz w koszyku. Ciasteczko zawiera
tylko długi losowy **identyfikator sesji**, który na nią wskazuje. Na dobrze zrobionej stronie:

- identyfikator jest na tyle losowy, że nikt nie zgadnie innego;
- zaraz po zalogowaniu wydawany jest **nowy** identyfikator, więc ten, który ktoś podrzucił przed logowaniem, staje
  się bezużyteczny;
- wylogowanie **kończy sesję na serwerze**. Samo usunięcie ciasteczka nie wystarczy, bo skopiowany identyfikator
  nadal by działał.

Ciasteczka mają atrybuty, które ograniczają, dokąd trafiają i kto może je odczytać:

<!-- pic: cookie -->

- **Secure** — wysyłane tylko przez HTTPS. Strony na `http://` nie mogą go nawet ustawić.
- **HttpOnly** — JavaScript strony nie może go odczytać, więc skrypt wstrzyknięty w stronę nie skopiuje go tak po
  prostu. Przeglądarka i tak wysyła je z każdym żądaniem.
- **SameSite** — `Strict` nigdy nie wysyła ciasteczka w żądaniach, które zaczynają inne strony, `Lax` wysyła je tylko
  przy prostych przejściach, takich jak kliknięcie linku, a `None` wysyła zawsze (i wymaga `Secure`). Od 2020 roku
  (Chrome 80) Chrome traktuje ciasteczko bez SameSite jak `Lax`, ale nie każda przeglądarka tak robi, więc strony
  powinny ustawiać ten atrybut same.
- **Expires albo Max-Age** — kiedy je usunąć (jeśli ustawiono oba, wygrywa Max-Age). Bez żadnego z nich to ciasteczko
  sesyjne, które znika po zamknięciu przeglądarki.
- **Domain i Path** — które hosty i ścieżki je dostają. Nazwa zaczynająca się od `__Host-` przypina ciasteczko do
  dokładnie tego hosta: musi mieć Secure, `Path=/` i nie może mieć Domain.

API często obywają się bez ciasteczek i wysyłają token w nagłówku **Authorization**. Idea jest ta sama: kto ma token,
ten jest traktowany jak ty.

**Dlatego skradzione ciasteczka są tak cenne.** Hasło i drugi składnik sprawdza się raz, przy logowaniu. Potem
dowodem jest ciasteczko sesyjne. **Infostealery** (złośliwe oprogramowanie kradnące dane) kopiują ciasteczka prosto
z magazynu przeglądarki, a atakujący, który wczyta je do swojej przeglądarki, wchodzi na konto bez hasła i kodu.
Zespoły bezpieczeństwa nazywają to **pass-the-cookie**. Rozwiązaniem jest zakończenie skradzionych sesji na serwerze,
a nie tylko zmiana hasła.

## HTTPS: bezpieczny kanał

**HTTPS** to HTTP przesyłany wewnątrz **TLS**, zwykle na porcie 443. TLS daje trzy rzeczy:

- **Poufność:** nikt po drodze nie może przeczytać wiadomości.
- **Integralność:** nikt nie może ich niepostrzeżenie zmienić w drodze.
- **Tożsamość serwera:** serwer pokazuje **certyfikat**, który przeglądarka sprawdza.

Aktualna wersja to TLS 1.3: zdefiniował ją w 2018 roku RFC 8446, a w lipcu 2026 roku wydano ją ponownie z poprawkami
jako RFC 9846 (wciąż wersja 1.3). TLS 1.2 nadal jest powszechny. TLS 1.0 i 1.1 formalnie wycofano w 2021 roku
(RFC 8996), więc jeśli je widzisz, to już jest znalezisko.

<!-- pic: https -->

### Czego dowodzi certyfikat

Certyfikat mówi: „ten klucz należy do `shop.example`”, a podpisuje go **urząd certyfikacji**, któremu ufają
przeglądarki. Dowodzi, że rozmawiasz z prawdziwym właścicielem tej nazwy. Nie dowodzi, że właściciel jest uczciwy:
strony phishingowe też dostają certyfikaty i większość z nich działa na HTTPS. Właśnie dlatego Chrome usunął kłódkę
z paska adresu w Chrome 117 (wrzesień 2023) i pokazuje zamiast niej neutralną ikonę ustawień: zbyt wiele osób
odczytywało kłódkę jako „ta strona jest bezpieczna”.

Certyfikaty żyją teraz krótko. Zgodnie z zasadą CA/Browser Forum (głosowanie SC-081v3) publiczne certyfikaty
wydane od 15 marca 2026 roku są ważne najwyżej **200 dni**, od marca 2027 roku 100 dni, a od marca 2029 roku
47 dni, więc odnawianie musi być automatyczne.

Każdy publiczny certyfikat trafia też do publicznych logów **Certificate Transparency** (przejrzystości
certyfikatów, RFC 6962). Każdy może je przeszukiwać, na przykład na crt.sh: właściciele zauważają certyfikaty, o które
nigdy nie prosili, a śledczy i atakujący tak samo znajdują tam nazwy hostów firmy, także wewnętrzne, które trafiły
do certyfikatów.

### HSTS i HTTPS domyślnie

Strona może wysłać `Strict-Transport-Security` (HSTS, RFC 6797), żeby przeglądarka używała dla niej tylko HTTPS przez
tyle sekund, ile podaje `max-age`. Po pierwszej wizycie wpisany link `http://` jest zamieniany na HTTPS, zanim
cokolwiek opuści komputer. Przeglądarki idą teraz w tę samą stronę: od października 2026 roku Chrome domyślnie
ostrzega i pyta, zanim otworzy publiczną stronę, która nie obsługuje HTTPS.

> [!NOTE]
> Niektóre firmy odszyfrowują HTTPS własnych pracowników na proxy, żeby go sprawdzać, za pomocą certyfikatu
> instalowanego na służbowych komputerach. Pomaga to wyłapywać złośliwe oprogramowanie, ale ma własne ryzyka: CISA
> ostrzegała w 2017 roku, że wiele takich produktów źle sprawdza certyfikaty i może osłabić właśnie to
> bezpieczeństwo, które sprawdza.

## Proxy, load balancery i CDN

W drodze z przeglądarki do serwera żądania często przechodzą przez inne maszyny. Każda z nich może czytać, zmieniać
i zapisywać to, co przez nią przechodzi, o ile widzi, co jest w środku.

<!-- pic: proxies -->

- **Proxy przekazujące** (forward proxy) pracuje dla użytkowników. Firmowe proxy WWW widzi, jakie strony odwiedzają
  wszyscy. Przy HTTPS zwykle widzi tylko nazwę strony: przeglądarka wysyła `CONNECT shop.example:443`, a reszta
  płynie przez proxy zaszyfrowana.
- **Odwrotne proxy** (reverse proxy) pracuje dla serwerów: load balancery, CDN i firewalle aplikacji webowych (WAF)
  przyjmują żądanie odwiedzającego i przekazują je dalej.

Za odwrotnym proxy serwer widzi adres **proxy**, a nie odwiedzającego. Proxy przekazują pierwotny adres w nagłówku
`X-Forwarded-For` (standard de facto) albo w nowszym nagłówku `Forwarded` (RFC 7239). Każde proxy dopisuje adres,
od którego dostało żądanie, więc lista rośnie od lewej do prawej i ufać można tylko wpisom, które dodały twoje
własne proxy.

## Logi serwera WWW

Prawie każdy serwer WWW prowadzi **log dostępu** (access log), jeden wiersz na żądanie, oraz **log błędów** (error
log) na problemy. Najpopularniejszy układ logu dostępu to format **combined** z Apache, którego nginx używa domyślnie:

```
203.0.113.25 - - [12/Nov/2026:14:02:17 -0500] "GET /cart?item=42 HTTP/1.1" 200 5120 "https://shop.example/" "Mozilla/5.0 (Windows NT 10.0; …)"
```

<!-- pic: logline -->

O czym pamiętać, czytając taki wiersz:

- **Strefy czasowe się różnią.** Apache i nginx zapisują czas lokalny z przesunięciem względem UTC (`-0500`).
  Microsoft IIS w swoim domyślnym formacie W3C zapisuje UTC. Zanim zestawisz zdarzenia, przelicz wszystko na UTC.
- **Adres może należeć do proxy.** Za load balancerem albo CDN pierwsze pole to proxy, chyba że serwer ustawiono tak,
  by zapisywał X-Forwarded-For.
- **To, czego brakuje, też się liczy.** Te formaty zapisują wiersz żądania razem z parametrami, ale nie treść POST
  i nie ciasteczka, chyba że ktoś je dodał. Hasła z formularza logowania w logu nie ma, a hasło w adresie URL jest.
- **`-` w miejscu użytkownika to norma.** To pole wypełnia się tylko przy wbudowanym logowaniu HTTP, a dokumentacja
  Apache ostrzega, żeby nie ufać mu przy `401`, bo użytkownik nie został jeszcze sprawdzony.

IIS zapisuje te same fakty w nazwanych polach, wymienionych w wierszu nagłówka pliku (`date time c-ip cs-method
cs-uri-stem sc-status …`). Logi proxy są podobne, ale przy każdym żądaniu podają użytkownika i pełny adres docelowy,
często z kategorią strony i informacją, czy żądanie przepuszczono.

## Jak to wygląda w pracy

Oto zmyślony fragment logu dostępu, od jakiego zaczyna się wiele dochodzeń:

```
198.51.100.23 - - [12/Nov/2026:03:14:07 +0000] "GET /.env HTTP/1.1" 404 153 "-" "python-requests/2.32.3"
198.51.100.23 - - [12/Nov/2026:03:14:07 +0000] "GET /wp-login.php HTTP/1.1" 404 153 "-" "python-requests/2.32.3"
198.51.100.23 - - [12/Nov/2026:03:14:08 +0000] "GET /backup.zip HTTP/1.1" 200 48211337 "-" "python-requests/2.32.3"
```

Czytaj to tak: jeden adres, trzy żądania w około sekundę (skrypt, a nie człowiek), w User-Agent biblioteka
programistyczna zamiast przeglądarki i zgadywanie plików, które strony często zostawiają na wierzchu. Dwa pudła,
potem trafienie: `200` i 48 MB wysłane w odpowiedzi na `/backup.zip`. Pierwsze dwa wiersze to szum tła, który
dostaje każda publiczna strona. Trzeci to incydent.

- **Centrum operacji bezpieczeństwa (SOC):** oddzielasz szum tła od wiersza, który zadziałał, i ustawiasz alerty na
  serie `401`, nietypowe metody albo nagłe `200` dla pliku, którego nikt nie powinien pobierać.
- **Reagowanie na incydenty i informatyka śledcza:** odtwarzasz, co się stało, z logów serwera WWW, proxy i WAF,
  przeliczasz ich czas na UTC, sprawdzasz X-Forwarded-For z proxy, żeby znaleźć prawdziwy adres, a na komputerze
  ofiary przeglądasz historię przeglądarki i magazyn ciasteczek, żeby ustalić, co mógł zabrać infostealer.
- **Testy penetracyjne i bug bounty:** za zgodą stawiasz między przeglądarką a stroną proxy przechwytujące, takie jak
  Burp Suite, i zmieniasz metody, nagłówki, ciasteczka i parametry, żeby zobaczyć, czemu serwer ufa.
- **Bezpieczeństwo aplikacji i programowanie:** sprawdzasz atrybuty ciasteczek, nagłówki bezpieczeństwa, dozwolone
  metody i to, co zdradzają strony błędów.
- **Bezpieczeństwo chmury:** load balancery, CDN i WAF piszą własne logi żądań, a ty pilnujesz, żeby były włączone
  i przechowywane.

## Spróbuj samodzielnie

Dziesięć minut z własną przeglądarką i terminalem. Wszystko tutaj tylko czyta publiczne strony albo twoje własne
ustawienia.

> [!NOTE]
> Nazwy kart i menu są tu podane tak, jak pokazuje je angielski interfejs. Jeśli twoja przeglądarka jest po polsku,
> są w tych samych miejscach, ale mogą być przetłumaczone. To, co wypisuje curl, jest zawsze po angielsku.

### Zobacz, jak wczytuje się strona

Otwórz dowolną stronę, a potem narzędzia deweloperskie przeglądarki: **F12** albo **Ctrl+Shift+I** w Windows
i Linuksie, **Cmd+Option+I** na Macu. W Safari najpierw włącz **Show features for web developers** w **Settings** >
**Advanced**.

1. Otwórz kartę **Network** i odśwież stronę. Każdy wiersz to jedno żądanie.
2. Kliknij pierwszy wiersz, czyli samą stronę. Znajdź kod statusu, nagłówki żądania i nagłówki odpowiedzi.
3. Poszukaj `Set-Cookie` i nagłówków bezpieczeństwa, takich jak `Strict-Transport-Security`. Potem policz, ilu żądań
   potrzebowała jedna strona.
4. Ciasteczka mają osobny widok: **Application** > **Cookies** w Chrome i Edge, **Storage** w Firefoksie. Sprawdź,
   które z nich mają Secure, HttpOnly i SameSite.

### Wyślij żądanie samodzielnie

<!-- for: windows -->

Otwórz PowerShell i wpisuj `curl.exe`, a nie samo `curl`: w Windows PowerShell samo `curl` może uruchomić inne
polecenie, Invoke-WebRequest. curl jest częścią Windows od Windows 10 w wersji 1803.

```powershell
curl.exe -I https://example.com
curl.exe -v https://example.com -o NUL
```

<!-- for: macos, linux -->

Otwórz terminal i uruchom:

```sh
curl -I https://example.com
curl -v https://example.com -o /dev/null
```

<!-- /for -->

Pierwsze polecenie wysyła żądanie `HEAD` i wypisuje tylko wiersz statusu i nagłówki. Drugie pokazuje całą wymianę:
wiersze zaczynające się od `>` to to, co wysłał curl, wiersze z `<` to to, co wróciło, a wiersze z `*` to własne
uwagi curl o połączeniu i TLS.

### Sprawdź certyfikaty strony

Otwórz [crt.sh](https://crt.sh/) w przeglądarce i wyszukaj `example.com`. Każdy wiersz to certyfikat zapisany
w publicznych logach Certificate Transparency, z datami ważności i urzędem, który go wydał. Spróbuj z firmą, którą
znasz, i zobacz, ile nazw hostów się pojawi.

Chcesz bezpiecznie poćwiczyć na prawdziwych żądaniach? [Laboratorium do atakowania aplikacji webowych
i API](/pl/lab/web-app-hacking/) uruchamia podatne aplikacje na twoim własnym komputerze, gdzie można przechwycić
i zmienić każde żądanie.

## Sprawdź się

Spróbuj odpowiedzieć, zanim rozwiniesz każdą odpowiedź.

<!-- pic: quiz -->

## Dowiedz się więcej

- **[MDN Web Docs: HTTP](https://developer.mozilla.org/docs/Web/HTTP/Guides/Overview)**: bezpłatne przewodniki
  Mozilli po HTTP, od przeglądu po każdy nagłówek i kod statusu. Źródło, z którego korzysta większość programistów.
- **[PortSwigger Web Security Academy](https://portswigger.net/web-security)**: bezpłatne lekcje i praktyczne
  laboratoria o atakach na aplikacje webowe od twórców Burp Suite. Wszystko z tej strony jest dla nich podstawą.
- **[OWASP Session Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html)**:
  jak tworzyć, chronić i kończyć sesje; napisane dla programistów i osób sprawdzających ich kod.
