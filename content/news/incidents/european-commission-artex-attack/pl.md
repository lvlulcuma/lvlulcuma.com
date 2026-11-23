---
# An incident breakdown → lvlulcuma.com/pl/news/incidents/european-commission-artex-attack/
title: "Komisja Europejska: atak „wygenerowany przez AI”, przez który systemy płac i urlopów nie działały ponad 10 dni"
dek: "19 listopada 2026 roku Komisja Europejska potwierdziła atak, którego pierwsze oznaki wykryła 22 października, i nazwała go „kampanią cybernetyczną wygenerowaną przez AI”; systemy kadrowe, płacowe, zwrotów kosztów leczenia i tłumaczeń wyłączono, a źródła Politico twierdzą, że napastnicy użyli ARTEX, narzędzia AI do włamań o otwartym kodzie, przed którym FBI ostrzegało kilka dni wcześniej."
type: breach
status: unfolding       # unfolding | confirmed | report (the victim or investigators published a full report)
date: 2026-11-19        # when it became public
published: 2026-11-23   # when this breakdown was published
who: "Komisja Europejska, organ wykonawczy UE, i jej pracownicy"
sector: "Sektor publiczny (instytucja UE)"
entry: "Na razie nieznane"
impact: "Systemy do pasków płacowych, ewidencji czasu pracy i urlopów (Sysper), zwrotów kosztów leczenia (MyPMO) i tłumaczeń wyłączone, niektóre na ponad 10 dni; 18 listopada Sysper znów przestał działać. Komisja twierdzi, że nie znalazła dowodów na wyciek danych dotyczący ogółu pracowników, i powiadomiła osoby, których systemy były celem."
timeline:
  - date: 2026-01
    text: "Kontekst: włamanie do platformy Komisji do zarządzania urządzeniami mobilnymi mogło ujawnić imiona, nazwiska i numery telefonów części pracowników. Urzędnicy nie łączą tego z obecnym atakiem."
  - date: 2026-03
    text: "Kontekst: przez kompromitację łańcucha dostaw Trivy dochodzi do włamania do infrastruktury chmurowej, na której działa strona Europa. Urzędnicy nie łączą z obecnym atakiem także tego przypadku."
  - date: 2026-07
    text: "Według FBI na GitHubie pojawia się ARTEX, narzędzie open source, które przy pomocy modeli AI szuka słabych punktów w systemach. Co najmniej od sierpnia używają go napastnicy."
  - date: 2026-10-08
    text: "Twórca ARTEX usuwa projekt z GitHuba, ale kopie i komercyjna wersja „ARTEX PRO” nadal krążą w sieci."
  - date: 2026-10-22
    text: "Komisja wykrywa pierwsze oznaki ataku."
  - date: 2026-10-26
    text: "Po pierwszym dochodzeniu Komisja potwierdza incydent."
  - date: 2026-11-05
    text: "CERT-EU, służba cyberbezpieczeństwa instytucji UE, publikuje ostrzeżenie przed ARTEX."
  - date: 2026-11-13
    text: "FBI wydaje pilne ostrzeżenie (FLASH) w sprawie ARTEX: w części włamań napastnicy dochodzą do uprzywilejowanego dostępu w mniej niż trzy godziny, a w internecie jest otwartych ponad 1600 paneli sterowania ARTEX."
  - date: 2026-11-18
    text: "System kadrowy Sysper znów przestaje działać. Komisarz Henna Virkkunen informuje pozostałych komisarzy."
  - date: 2026-11-19
    text: "Politico informuje o ataku. Na południowym briefingu rzecznik Thomas Regnier go potwierdza i nazywa kampanią cybernetyczną wygenerowaną przez AI, w której użyto publicznie dostępnego narzędzia."
attack:
  - tactic: "Przygotowanie zasobów"
    id: T1588.002
    name: "Obtain Capabilities: Tool"
    text: "Użyli publicznie dostępnego narzędzia opartego na AI; według źródeł Politico był to ARTEX."
detect:
  - "Szybkie, systematyczne sondowanie: wiele zapytań w krótkim czasie próbujących SQL injection, fałszowania żądań po stronie serwera (SSRF) albo sztuczek z XML, czyli właśnie takich testów, jakie automatyzuje ARTEX."
  - "Konto lub sesja przeglądające rekordy jeden po drugim albo pobierające nietypowo dużo rekordów, zwłaszcza na portalach dla partnerów i pracowników."
  - "Ślady Kerberoastingu i DCSync w Active Directory: FBI wymienia je wśród technik z katalogu ARTEX."
  - "Na początku incydentu zabezpiecz logi logowań i audytu dostawcy tożsamości: pokazują, jak daleko zaszło włamanie."
check:
  - "Zdejmij interfejsy zarządzania z internetu."
  - "Włącz uwierzytelnianie wieloskładnikowe w krytycznych systemach i dawaj aplikacjom tylko te uprawnienia i zgody, których naprawdę potrzebują."
  - "Przeszukaj pliki konfiguracyjne, kod infrastruktury, potoki CI/CD i paczki JavaScript pod kątem sekretów i wymień wszystkie, które wyszły na jaw."
  - "Sprawdzaj uprawnienia po stronie serwera, ograniczaj częstotliwość zapytań i zwracaj komunikaty o błędach, które nie zdradzają, jak system działa w środku."
  - "Naprawiaj także znaleziska o niskim poziomie ważności, jak apeluje CERT-EU, i przeprowadź ćwiczenia sztabowe (tabletop) ze scenariuszem, w którym intruz dochodzi do uprzywilejowanego dostępu w kilka godzin."
unknown:
  - "Jak napastnicy się dostali i jakiej słabości lub konta użyli."
  - "Czy ARTEX posłużył do włamania, czy tylko do rozpoznania systemów. Sama Komisja nie wskazała narzędzia."
  - "Kim są napastnicy i czego chcieli. Rzecznik nie wskazał sprawców i nie wiedział o żadnym żądaniu okupu."
  - "Jakie dane, jeśli w ogóle, wyniesiono. Źródła Politico mówią, że mogło dojść do kompromitacji dużej ilości danych; Komisja twierdzi, że nie znalazła dowodów na wyciek dotyczący ogółu pracowników, a jej dochodzenie trwa."
  - "Czy ten atak ma związek z incydentami w Komisji ze stycznia i marca."
jobs: [incident-responder, soc-analyst, detection-engineer, threat-intelligence-analyst, security-manager]
topics: [ai-enabled-threats, ai-incidents, incident-response-process, data-breach-response, attack-surface-management]
sources:
  - name: "The Record: European Commission confirms cyberattack, says hackers used AI tool"
    url: "https://therecord.media/european-commission-confirms-cyberattack-using-ai"
  - name: "SecurityWeek: European Commission Confirms AI-Assisted Cyberattack Disrupted Services"
    url: "https://www.securityweek.com/european-commission-confirms-ai-assisted-cyberattack-disrupted-services/"
  - name: "The Register: European Commission scrambles to contain AI-assisted cyberattack"
    url: "https://www.theregister.com/cyber-crime/2026/11/19/european-commission-scrambles-to-contain-ai-assisted-cyberattack/5311103"
  - name: "Cloud Security Alliance: AI-Tool Attack on the European Commission: Lessons for Defenders"
    url: "https://labs.cloudsecurityalliance.org/research/csa-research-note-european-commission-ai-cyberattack-2026112/"
  - name: "Latin Times: European Commission Confirms AI-Linked Cyberattack After Nearly Four-Week Disclosure Delay"
    url: "https://www.latintimes.com/ai-artex-framework-european-commission-cyberattack-601595"
---

Komisja Europejska to organ wykonawczy UE. 22 października 2026 roku wykryła pierwsze oznaki ataku na swoje systemy informatyczne, a 26 października, po pierwszym dochodzeniu, potwierdziła incydent. Publicznie milczała do 19 listopada, kiedy Politico podało, że systemy dla pracowników nie działają od ponad 10 dni.

Zaatakowane systemy obsługują codzienne sprawy pracowników: Sysper służy do pasków płacowych, ewidencji czasu pracy i wniosków urlopowych, MyPMO do zwrotów kosztów leczenia, do tego usługi tłumaczeniowe. Komisja podaje, że czasowo wyłączyła kilka aplikacji i większość już działa, ale 18 listopada Sysper znów przestał działać. Zapytany, dlaczego nie powiedziano o tym wcześniej, rzecznik Thomas Regnier odparł, że nagłaśnianie działań obronnych mogłoby je osłabić, i dodał: „Niczego nie ukrywaliśmy”.

Regnier powiedział, że „była to kampania cybernetyczna wygenerowana przez AI”, w której użyto publicznie dostępnego narzędzia, ale go nie nazwał. Anonimowe źródła Politico wskazały ARTEX, framework open source, który łączy się z komercyjnymi modelami AI i sam wyszukuje oraz wykorzystuje słabe punkty. Pojawił się na GitHubie w lipcu jako narzędzie do testów penetracyjnych, a według FBI napastnicy używają go co najmniej od sierpnia. CERT-EU ostrzegł przed nim 5 listopada, a FBI 13 listopada.

Komisja podaje, że powiadomiła osoby, których systemy były celem, zapobiegawczo sprawdza inne systemy i jest w kontakcie z CERT-EU oraz Europejskim Inspektorem Ochrony Danych. Twierdzi, że nie znalazła dowodów na wyciek danych dotyczący ogółu pracowników, choć źródła Politico mówią, że mogło dojść do kompromitacji dużej ilości danych. To już trzeci publicznie znany incydent w Komisji w tym roku, po włamaniu do platformy zarządzania urządzeniami mobilnymi w styczniu i do infrastruktury chmurowej strony Europa w marcu. Urzędnicy nie łączą tych trzech zdarzeń.
