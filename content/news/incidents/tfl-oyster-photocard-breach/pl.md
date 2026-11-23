---
# An incident breakdown → lvlulcuma.com/pl/news/incidents/tfl-oyster-photocard-breach/
title: "Karty TfL Oyster photocard: dziwne e-maile „załóż konto”, a potem wyciek danych 265 000 klientów"
dek: "16 listopada 2026 roku Transport for London wykryło podejrzaną aktywność na stronie Oyster photocard i ją wyłączyło; według TfL napastnicy mogli uzyskać dostęp do imion i nazwisk, danych kontaktowych, adresów domowych, dat urodzenia oraz pytań i odpowiedzi zabezpieczających około 265 000 posiadaczy kart."
type: breach
status: confirmed       # unfolding | confirmed | report (the victim or investigators published a full report)
date: 2026-11-18        # when it became public
published: 2026-11-23   # when this breakdown was published
who: "Transport for London (TfL) i około 265 000 posiadaczy kart Oyster photocard, które dają darmowe lub tańsze przejazdy dzieciom, studentom, wychowankom pieczy zastępczej, osobom po 60. roku życia, praktykantom i weteranom"
sector: "Transport publiczny"
entry: "Na razie nieznane"
impact: "Możliwy dostęp do imion i nazwisk, numerów telefonów, adresów e-mail i domowych, dat urodzenia oraz pytań i odpowiedzi zabezpieczających około 265 000 klientów; strona photocard i konta online wyłączone. TfL podaje, że hasła, dane płatnicze, zdjęcia, dokumenty potwierdzające i historia podróży nie ucierpiały."
timeline:
  - date: 2024-09
    text: "Kontekst: członkowie Scattered Spider włamują się do sieci TfL, kradną dane klientów i zakłócają usługi online, w tym zwroty za Oyster. Atak kosztuje TfL około 29 mln funtów."
  - date: 2026-06
    text: "Kontekst: dwóch napastników z 2024 roku przyznaje się do winy."
  - date: 2026-11-16
    text: "Posiadacze Oyster photocard zaczynają dostawać e-maile z własnych systemów pocztowych TfL z prośbą o założenie konta. TfL wykrywa podejrzaną aktywność na stronie photocard, ogranicza dostęp i wyłącza system photocard."
  - date: 2026-11-18
    text: "TfL wysyła poszkodowanym klientom e-maile o incydencie."
  - date: 2026-11-19
    text: "TfL publicznie potwierdza wyciek i podaje liczbę około 265 000 klientów, więcej niż we wcześniejszym szacunku (około 250 000). Powiadomiło brytyjski urząd ochrony danych (ICO)."
detect:
  - "Dla organizacji: e-maile wysyłane przez wasze własne systemy, choć nikt ich nie planował, na przykład fala wiadomości „załóż konto”. Tu właśnie one były pierwszym sygnałem."
  - "Logowania, wyszukiwania lub eksporty w systemach kont klientów w nietypowej liczbie albo z nietypowych miejsc."
  - "Dla klientów: wiadomości, które wykorzystują dane karty, adres domowy lub datę urodzenia, by wyglądać oficjalnie, albo proszą o „potwierdzenie” odpowiedzi zabezpieczającej."
check:
  - "Klienci: ignorujcie niespodziewane e-maile z prośbą o założenie konta Oyster photocard i zgłaszajcie podejrzane wiadomości do TfL."
  - "Zmieńcie hasło i odpowiedzi zabezpieczające w innych serwisach, w których używacie tych samych. Gdy strona photocard wróci, TfL poprosi wszystkich o zmianę hasła, pytania i odpowiedzi zabezpieczającej."
  - "Karty nadal działają. Dopóki strona nie działa, sprawy przedłużeń i historii podróży załatwia obsługa klienta TfL pod numerem 0343 222 1234."
  - "Serwisy, które wciąż używają pytań zabezpieczających: traktujcie je jako słabą kontrolę, bo prawdziwej odpowiedzi po wycieku nie da się zmienić, i oferujcie zamiast nich uwierzytelnianie wieloskładnikowe."
  - "Same testy nie wystarczą: TfL podaje, że ten system przeszedł test cyberbezpieczeństwa w ciągu ostatnich 12 miesięcy. Systemy dla klientów trzeba też stale monitorować."
unknown:
  - "Jak napastnicy się dostali."
  - "Czy e-maile „załóż konto” z systemów pocztowych TfL i włamanie na stronę photocard to jeden incydent, czy dwa."
  - "Kto za tym stoi i czy jest żądanie okupu."
  - "Czy liczba poszkodowanych jeszcze wzrośnie. TfL podaje, że może."
  - "Kiedy strona photocard znów zacznie działać."
jobs: [incident-responder, data-protection-officer, privacy-analyst, soc-analyst, iam-engineer]
topics: [data-breach-response, incident-reporting-rules, customer-identity, phishing-analysis, password-policies]
sources:
  - name: "BleepingComputer: Transport for London breach exposes 265,000 Oyster card users' data"
    url: "https://www.bleepingcomputer.com/news/security/transport-for-london-breach-exposes-265-000-oyster-card-users-data/"
  - name: "Help Net Security: 265,000 Oyster photocard customers' data exposed in Transport for London breach"
    url: "https://www.helpnetsecurity.com/2026/11/20/transport-for-london-oyster-photocard-data-breach/"
  - name: "ITPro: Oyster photocard breach: TfL takes system offline after 260,000+ customers affected by attack"
    url: "https://www.itpro.com/cyber-resilience/data-breaches/oyster-photocard-breach-tfl-takes-system-offline-after-260-000-customers-affected-by-attack"
  - name: "TEISS: Transport for London data breach exposes details of about 265,000 Oyster photocard users"
    url: "https://www.teiss.co.uk/news/transport-for-london-data-breach-exposes-details-of-about-265000-oyster-photocard-users-18499"
  - name: "Yahoo News UK (This is Local London): Hackers access details of 265,000 Oyster card customers in TfL cyber breach"
    url: "https://uk.news.yahoo.com/hackers-access-details-265-000-150750904.html"
---

Transport for London (TfL) zarządza londyńskimi autobusami, metrem i innym transportem. Jego karty Oyster photocard to bilety ze zdjęciem posiadacza, które dają darmowe lub tańsze przejazdy dzieciom, studentom, wychowankom pieczy zastępczej, osobom po 60. roku życia, praktykantom i weteranom. Posiadacze zarządzają nimi przez konto photocard online.

16 listopada 2026 roku TfL dowiedziało się, że posiadacze photocard dostają e-maile z prośbą o założenie konta. Wiadomości przychodziły z własnych systemów pocztowych TfL w wyniku ich kompromitacji. Tego samego dnia TfL wykryło podejrzaną aktywność na stronie photocard, ograniczyło dostęp i wyłączyło system photocard. 18 listopada powiadomiło poszkodowanych klientów, a dzień później publicznie potwierdziło wyciek.

TfL podaje, że napastnicy mogli uzyskać dostęp do imion i nazwisk, numerów telefonów, adresów e-mail, adresów domowych, dat urodzenia oraz pytań i odpowiedzi zabezpieczających około 265 000 klientów, więcej niż we wcześniejszym szacunku (około 250 000), a liczba ta może jeszcze wzrosnąć. Według obecnej oceny hasła, dane bankowe i kartowe, historia podróży, zdjęcia i dokumenty potwierdzające nie ucierpiały, podobnie jak imiona i daty urodzenia dzieci z kartami Zip Oyster. TfL twierdzi, że na razie nie znalazło dowodów na wykorzystanie danych.

TfL nie ujawniło, jak napastnicy się dostali. Shashi Verma, dyrektor TfL ds. strategii technologicznej i przychodów, powiedział, że system przeszedł test cyberbezpieczeństwa w ciągu ostatnich 12 miesięcy, i przeprosił poszkodowanych. TfL powiadomiło ICO, brytyjski urząd ochrony danych. To drugi duży wyciek w TfL w nieco ponad dwa lata: we wrześniu 2024 roku członkowie Scattered Spider włamali się do jego sieci, a tamten atak kosztował około 29 mln funtów.
