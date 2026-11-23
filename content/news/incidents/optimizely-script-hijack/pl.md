---
# An incident breakdown → lvlulcuma.com/pl/news/incidents/optimizely-script-hijack/
title: "Optimizely: jeden przejęty skrypt, 178 stron i dzień kradzieży kart, podmiany adresów krypto i exploitów na iPhone'y"
dek: "16 listopada 2026 roku napastnicy wykorzystali błąd w procesie rejestracji w Optimizely Web Experimentation, by dopisać własny JavaScript do projektów klientów, więc odwiedzający strony 178 organizacji, w tym CNN, BBC, Zoom i HSBC, ładowali kod, który podmieniał adresy krypto, kopiował numery kart i atakował starsze iPhone'y."
type: supply-chain
status: confirmed       # unfolding | confirmed | report (the victim or investigators published a full report)
date: 2026-11-16        # when it became public
published: 2026-11-23   # when this breakdown was published
who: "Optimizely, którego produkt Web Experimentation umieszcza skrypt na stronach klientów, oraz odwiedzający strony 178 organizacji, które z niego korzystały, w tym CNN, BBC, Zoom, Salesforce, HSBC, IKEA, GitLab, Equifax i Air France-KLM"
sector: "Oprogramowanie marketingowe (testowanie stron); zaatakowane strony należą do banków, firm technologicznych, handlu, serwisów streamingowych, mediów i branży podróży"
entry: "Błąd w procesie zakładania konta w Optimizely Web Experimentation, który według Optimizely pozwolił napastnikom działać jako użytkownicy wybranych kont klientów i dopisywać kod do ich projektów"
impact: "Przez większość 16 listopada odwiedzający zaatakowane strony uruchamiali kod, który podmieniał adresy portfeli kryptowalutowych, kopiował numery kart wpisywane w formularze, wysyłał napastnikom ciasteczka i zrzuty ekranu oraz próbował zestawów exploitów na iOS na iPhone'ach i iPadach. Skradziono co najmniej 7000 dolarów w kryptowalutach; ile kart przechwycono i czy zainfekowano choć jeden telefon, nie wiadomo."
timeline:
  - date: 2026-09
    text: "Kontekst: Scott Helme z Report URI mówi później, że ten sam rodzaj wstrzykniętego kodu zobaczył po raz pierwszy na tureckich stronach we wrześniu."
  - date: 2026-11-13
    text: "Kontekst: skrypty trzech innych narzędzi dla stron (Kissmetrics, StorifyMe i minute-ly) zaczynają serwować zmieniony kod, który dzieli z tym atakiem hosting i kod ładujący. Badacze zaznaczają, że to nie dowodzi, że stoją za nim ci sami napastnicy ani że dostali się tą samą drogą."
  - date: 2026-11-16
    text: "O 04:21 UTC pojawia się pierwszy wstrzyknięty kod, we fragmencie skryptu BBC. Mniej więcej godzinę później napastnicy rejestrują domenę dla głównego złośliwego kodu i w ciągu dnia publikują 26 jego wersji."
  - date: 2026-11-16
    text: "O 13:43 UTC, według Helme'a, do kodu dochodzi moduł kradzieży kart. Ostateczna wersja działa od 17:56 UTC."
  - date: 2026-11-16
    text: "Optimizely wykrywa aktywność i zamyka lukę w ciągu trzech godzin od wykrycia. Większość wstrzykniętego kodu znika między 20:40 a 23:11 UTC, kiedy Helme widzi wszystkie pliki czyste. Wieczorem Optimizely informuje, że wykryło i opanowało incydent dotyczący części klientów Web Experimentation."
  - date: 2026-11-17
    text: "O 00:37 UTC zostaje zablokowana domena ze złośliwym kodem, a o 03:37 UTC domena, z której go wstrzykiwano. Między 04:11 a 05:39 UTC portfele napastników zostają opróżnione. Report URI publikuje swoje wyliczenie: 188 zainfekowanych fragmentów skryptu należących do 178 organizacji."
  - date: 2026-11-18
    text: "Optimizely wydaje szersze oświadczenie: zakończyło aktywne sesje, unieważniło tokeny i zresetowało dostęp do zaatakowanych kont."
  - date: 2026-11-19
    text: "Optimizely aktualizuje komunikat: błąd był w procesie rejestracji, ucierpiało mniej niż 5% klientów, inne produkty nie zostały dotknięte i nie był to wyciek danych logowania. Firma podaje, że skontaktowała się z każdym klientem Web Experimentation."
attack:
  - tactic: "Dostęp początkowy"
    id: T1190
    name: "Exploit Public-Facing Application"
    text: "Wykorzystali błąd w procesie rejestracji Web Experimentation, by działać jako użytkownicy wybranych kont klientów."
  - tactic: "Dostęp początkowy"
    id: T1195.002
    name: "Supply Chain Compromise: Compromise Software Supply Chain"
    text: "Dopisali swój kod do pola Project JavaScript klientów, więc własne serwery Optimizely dostarczały go każdemu odwiedzającemu te strony."
  - tactic: "Dostęp początkowy"
    id: T1189
    name: "Drive-by Compromise"
    text: "Kierowali odwiedzających z iPhone'ów i iPadów do zestawów exploitów Coruna i DarkSword; na iOS 18.6 i starszych strona przeładowywała się co 60 sekund."
  - tactic: "Dostęp do poświadczeń"
    id: T1539
    name: "Steal Web Session Cookie"
    text: "Po podmianie adresu wysyłali napastnikom do 8000 znaków ciasteczek strony. Ciasteczka z flagą HttpOnly były poza zasięgiem."
  - tactic: "Zbieranie danych"
    id: T1113
    name: "Screen Capture"
    text: "Robili zdjęcie widocznej części strony biblioteką html2canvas i wysyłali je na serwer napastników."
  - tactic: "Wpływ"
    id: T1657
    name: "Financial Theft"
    text: "Podmieniali adresy portfeli ośmiu kryptowalut, w tym bitcoina, etheru i Solany, na własne; zanim portfele opróżniono, trafiło do nich co najmniej 7000 dolarów."
detect:
  - "Przejrzyj każde pole Project JavaScript w swoich projektach Optimizely, a nie tylko skrypt serwowany przez stronę: kod występował w trzech postaciach (zwykły tag script, ten sam adres ukryty w base64 i pełna kopia wbudowana w stronę), więc szukanie jednej domeny nie wystarczy."
  - "Przeszukaj logi proxy, DNS i raporty CSP od 04:00 UTC 16 listopada pod kątem `1688360[.]cc`, `webshell[.]lol` i domen `.icu` o przypadkowo wyglądających nazwach, a także zapytań do ścieżek `/track.js`, `/hit.php` i `/card.php`."
  - "Sprawdź też kopie skryptu Optimizely serwowane z własnej domeny: fragmenty hostowane u siebie również zostały zainfekowane."
  - "W przeglądarce skrypt zostawiał ślady, takie jak zmienne `window._k7` i `window._qxc` oraz klucze `sessionStorage` zaczynające się od `cc_`."
check:
  - "Nie trzymaj zewnętrznych skryptów na stronach płatności i logowania, a dane kart przyjmuj przez pola dostawcy płatności w osobnej ramce: ten moduł kradzieży nie miał do nich dostępu."
  - "Ustaw Content Security Policy z listą dozwolonych hostów dla skryptów (`script-src`) i przesyłania danych (`connect-src`). Report URI ustaliła, że tylko 24 ze 178 organizacji miały politykę na tyle surową, by zatrzymać ten atak, a 68 nie miało żadnej. Polityka oparta wyłącznie na `strict-dynamic` i nonce by go nie zatrzymała, bo ufa skryptom dodanym przez zaufany skrypt."
  - "Nie zezwalaj na `eval` tylko dlatego, że zaleca to dostawca: na stronie HSBC właśnie to ustawienie pozwoliło uruchomić się wbudowanej zapasowej kopii złośliwego kodu."
  - "Jeśli twoja strona była zaatakowana, traktuj numery kart wpisane 16 listopada jako ujawnione i powiadom swojego dostawcę płatności."
  - "Odwiedzający: sprawdźcie wyciągi z kart i przelewy kryptowalut z 16 listopada, porównujcie adresy portfeli na ekranie portfela sprzętowego, a nie ze skopiowanym tekstem, i zaktualizujcie iPhone'y oraz iPady."
unknown:
  - "Jak dokładnie błąd w rejestracji pozwolił napastnikom działać jako użytkownicy i do ilu kont dotarli. Optimizely nie opublikowało analizy przyczyny."
  - "Kto za tym stoi. Nie wskazano żadnej grupy ani kraju."
  - "Ile kart, ciasteczek i zrzutów ekranu przechwycono i czy jakikolwiek iPhone lub iPad został naprawdę zainfekowany: badacze widzieli dostarczanie zestawów exploitów, a nie udaną infekcję."
  - "Czy zmienione skrypty Kissmetrics, StorifyMe i minute-ly to dzieło tych samych napastników i jak się tam dostali."
  - "Ile organizacji naprawdę ucierpiało. Helme uważa, że więcej niż 178."
jobs: [appsec-engineer, secure-developer, third-party-risk-analyst, soc-analyst, threat-hunter]
topics: [supply-chain-attacks, third-party-incidents, browser-security-controls, pci-dss-basics, mobile-security]
sources:
  - name: "Optimizely: Security Advisory: Web Experimentation Security Incident (Updated November 19, 2026)"
    url: "https://support.optimizely.com/hc/en-us/articles/50521849710605-Security-Advisory-Web-Experimentation-Security-Incident-Updated-November-19-2026"
  - name: "StepSecurity: OPTIMJACK: Optimizely-Hosted Scripts Loaded a Crypto Clipper and Card Skimmer on 178 Organizations"
    url: "https://www.stepsecurity.io/blog/optimjack-optimizely-hosted-scripts-crypto-clipper-card-skimmer"
  - name: "The Record: Website management platform Optimizely confirms hackers put malicious code into customer sites"
    url: "https://therecord.media/optimizely-malicious-code-customer-sites"
  - name: "Help Net Security: Malware spread through Optimizely hits 178 organizations, including BBC, CNN and Zoom"
    url: "https://www.helpnetsecurity.com/2026/11/17/optimizely-vulnerability-malicious-javascript/"
  - name: "Sophos X-Ops: Hijacked Optimizely snippets served malicious code on major websites"
    url: "https://www.sophos.com/en-us/blog/hijacked-optimizely-snippets-served-malicious-code"
---

Optimizely Web Experimentation pozwala firmom porównywać różne wersje stron internetowych. Każdy klient dodaje do swoich stron skrypt Optimizely, a ten niesie „Project JavaScript”, czyli kod pisany przez zespół samego klienta. Wszystko, co jest w tym polu, trafia do każdego odwiedzającego i przychodzi z serwerów Optimizely, którym przeglądarki i polityki bezpieczeństwa zwykle ufają.

16 listopada 2026 roku napastnicy wykorzystali błąd w procesie zakładania konta w tym produkcie, by działać jako użytkownicy wybranych klientów, i dopisali swój kod do ich projektów. Pierwszy wstrzyknięty kod pojawił się o 04:21 UTC we fragmencie skryptu BBC. W ciągu dnia napastnicy wypuścili 26 jego wersji, a po południu dodali moduł kradzieży kart. Report URI naliczyła później 188 zainfekowanych fragmentów należących do 178 organizacji, w tym CNN, BBC, Zoom, Salesforce, HSBC, IKEA, GitLab i Air France-KLM. Trzydzieści dwie z nich to banki i inne firmy finansowe.

Kod szukał adresów portfeli kryptowalutowych obok słów takich jak „wallet” czy „send” i podmieniał je na adresy napastników. Kopiował numery kart, daty ważności i kody zabezpieczające wpisywane w formularze samych stron, a po podmianie wysyłał napastnikom ciasteczka strony i jej zrzut ekranu. Odwiedzających z iPhone'ów i iPadów kierował do zestawów exploitów Coruna i DarkSword, wymierzonych w starsze wersje iOS.

Optimizely podaje, że wykryło aktywność tego samego dnia, zamknęło lukę w ciągu trzech godzin od wykrycia, usunęło kod i skontaktowało się z każdym klientem Web Experimentation. Według firmy ucierpiało mniej niż 5% klientów, inne produkty nie zostały dotknięte i nie był to wyciek danych logowania. Jak mówi Helme, o 23:11 UTC wszystkie pliki były czyste; większość stron serwowała kod przez około 16 godzin. Badacze namierzyli co najmniej 7000 dolarów w kryptowalutach w portfelach napastników, które opróżniono wcześnie rano następnego dnia. Ile kart przechwycono, nie wie nikt poza samymi napastnikami.
