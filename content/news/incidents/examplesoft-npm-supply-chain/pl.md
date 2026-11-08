---
# An incident breakdown → lvlulcuma.com/pl/news/incidents/examplesoft-npm-supply-chain/
# MADE-UP EXAMPLE (example: true): it shows the layout. Delete this folder once real breakdowns exist.
example: true
title: "Zatruta aktualizacja pakietu npm od ExampleSoft kradła sekrety z serwerów buildów"
dek: "Atakujący wyłudzili phishingiem dane maintainera, opublikowali dwie wersje popularnego pakietu z ukrytym skryptem instalacyjnym i zebrali tokeny oraz klucze chmurowe z każdego buildu, który go uruchomił. Sprzątanie wciąż trwa."
type: supply-chain
status: unfolding       # unfolding | confirmed | report (the victim or investigators published a full report)
date: 2026-10-14        # when it became public
published: 2026-10-16   # when this breakdown was published
who: "ExampleSoft, autor pakietu npm example-date, i projekty, które go instalują"
sector: "Oprogramowanie"
entry: "Konto npm maintainera przejęte przez fałszywą stronę logowania"
impact: "Dwie złośliwe wersje dostępne przez dziewięć godzin; sekrety skradzione z nieznanej liczby pipeline'ów"
timeline:
  - date: 2026-10-12
    text: "Maintainer dostaje e-mail z prośbą o ponowną weryfikację konta npm i loguje się na łudząco podobnej stronie, która prosi też o kod jednorazowy."
  - date: 2026-10-13
    text: "Z konta maintainera zostają opublikowane wersje 4.2.1 i 4.2.2 pakietu example-date, każda z nowym skryptem `postinstall`."
  - date: 2026-10-13
    text: "Dziewięć godzin później programista zauważa podczas buildu nieoczekiwane połączenia sieciowe i zgłasza pakiet."
  - date: 2026-10-14
    text: "npm usuwa obie wersje. ExampleSoft potwierdza przejęcie konta, unieważnia tokeny i publikuje czystą wersję 4.2.3."
  - date: 2026-10-15
    text: "Badacze znajdują ten sam skrypt w trzech mniejszych pakietach innych autorów."
attack:
  - tactic: "Dostęp początkowy"
    id: T1566.002
    name: "Phishing: Spearphishing Link"
    text: "Wysłali maintainerowi link do fałszywej strony logowania npm, która przechwyciła hasło i kod jednorazowy."
  - tactic: "Dostęp początkowy"
    id: T1195.002
    name: "Supply Chain Compromise: Compromise Software Supply Chain"
    text: "Opublikowali z konta maintainera dwie nowe wersje pakietu."
  - tactic: "Wykonanie"
    id: T1059.007
    name: "Command and Scripting Interpreter: JavaScript"
    text: "Skrypt `postinstall` uruchamiał się sam na każdej maszynie, która zainstalowała aktualizację."
  - tactic: "Dostęp do poświadczeń"
    id: T1552.001
    name: "Unsecured Credentials: Credentials In Files"
    text: "Odczytywał zmienne środowiskowe, `.npmrc` i pliki z poświadczeniami chmurowymi na serwerach buildów."
  - tactic: "Eksfiltracja"
    id: T1041
    name: "Exfiltration Over C2 Channel"
    text: "Wysyłał znalezione dane przez HTTPS na serwer atakujących."
detect:
  - "Aktualizacja zależności, która nagle dodaje skrypt instalacyjny (`postinstall`), choć wcześniejsze wersje go nie miały."
  - "Serwery buildów łączą się z domenami, z którymi nigdy wcześniej się nie łączyły."
  - "Nowa wersja opublikowana poza zwykłym procesem CI, więc bez informacji o pochodzeniu (provenance)."
check:
  - "Poszukaj example-date 4.2.1 lub 4.2.2 w plikach lock i logach CI."
  - "Jeśli któryś build je zainstalował, wymień wszystkie sekrety, które mógł odczytać: tokeny npm, klucze chmurowe, klucze do podpisywania."
  - "Instaluj pakiety z pliku lock poleceniem `npm ci`, żeby nowa wersja nie trafiła do buildu niezauważona."
  - "Używaj `--ignore-scripts` w buildach, które nie potrzebują skryptów instalacyjnych."
  - "Dawaj zadaniom buildów krótkotrwałe poświadczenia zamiast długowiecznych tokenów."
unknown:
  - "Ile pipeline'ów zainstalowało złośliwe wersje w ciągu tych dziewięciu godzin."
  - "Czy skradzione sekrety zostały już użyte."
  - "Kto za tym stoi i czy trzy pozostałe pakiety przejęto w ten sam sposób."
jobs: [appsec-engineer, devsecops-engineer, incident-responder, threat-intelligence-analyst]
topics: [software-supply-chain, phishing-analysis, incident-scoping, ioc-enrichment]
sources:
  - name: "MITRE ATT&CK: Compromise Software Supply Chain (T1195.002)"
    url: "https://attack.mitre.org/techniques/T1195/002/"
  - name: "npm Docs: Generating provenance statements"
    url: "https://docs.npmjs.com/generating-provenance-statements"
revisions:
  - date: 2026-10-20
    note: "Dodano trzy mniejsze pakiety, w których znaleziono ten sam skrypt."
---

example-date to niewielki pakiet npm do formatowania dat i wiele projektów instaluje go bez zastanowienia. 13 października pojawiły się dwie nowe wersje. Działały tak samo jak stare, ale każda zawierała nowy skrypt `postinstall`, który npm uruchamia sam podczas instalacji.

Skrypt szukał na maszynie sekretów: zmiennych środowiskowych, tokenów npm i plików z poświadczeniami chmurowymi. Na serwerach buildów jest ich pełno, a pakiety instaluje się tam przez cały dzień, więc to tam narobił najwięcej szkód. Wszystko, co znalazł, wysyłał na serwer atakujących.

Konto maintainera przejęto dzień wcześniej przez fałszywą stronę logowania npm, która prosiła też o kod jednorazowy, więc MFA nie pomogło. Obie wersje były dostępne przez około dziewięć godzin. Jeśli twoje buildy je zainstalowały, traktuj jako skradzione wszystkie sekrety, które te buildy mogły odczytać.
