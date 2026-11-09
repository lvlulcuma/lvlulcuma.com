---
# An incident breakdown → lvlulcuma.com/pl/news/incidents/supermarket-freezer-attacks/
title: "Zamrażarki w supermarketach nastawione na 50 °C: druga fala ataków na europejskie systemy chłodnicze"
dek: "W nocy na 2 listopada 2026 roku napastnicy zmienili ustawienia dostępnych z internetu sterowników urządzeń chłodniczych w supermarketach w całej Europie, także w Polsce, trzy tygodnie po ataku na ok. 700 francuskich sklepów; nikt się do tego nie przyznał."
type: vulnerability
status: unfolding       # unfolding | confirmed | report (the victim or investigators published a full report)
date: 2026-11-02        # when it became public
published: 2026-11-09   # when this breakdown was published
who: "Supermarkety i małe sklepy spożywcze w co najmniej sześciu krajach Europy, m.in. Delhaize, Carrefour, Coop w Szwecji, SuperValu i sklepy Auchan w Polsce; do tego trzy placówki francuskiej służby krwi (EFS)"
sector: "Handel spożywczy i chłodnie"
entry: "Sterowniki urządzeń chłodniczych dostępne z internetu, wiele z domyślnymi lub prostymi hasłami albo przestarzałym oprogramowaniem, według Danfoss i CERT Polska. Nie potwierdzono jednej drogi wejścia."
impact: "Lodówki i zamrażarki nagrzewały się albo przechodziły w tryb rozmrażania; sklepy wyrzucały żywność albo wycofywały ją ze sprzedaży; w Polsce zaatakowano co najmniej dwa urządzenia; we francuskiej służbie krwi zmieniono ustawienia komór chłodniczych, ale nie stracono preparatów krwi"
timeline:
  - date: 2026-10-11
    text: "Kontekst: w nocy urządzenia chłodnicze we francuskich supermarketach zostają przełączone w tryb rozmrażania. Według paryskiej prokuratury dotyczy to ok. 700 sklepów."
  - date: 2026-10-13
    text: "Kontekst: Danfoss, producent wielu takich sterowników, radzi klientom w Holandii odłączyć je od publicznego internetu."
  - date: 2026-11-02
    text: "W nocy przez sprzęt dostawcy urządzeń chłodniczych zostają zmienione ustawienia komór chłodniczych w trzech placówkach francuskiej służby krwi EFS. Pracownicy i niezależne alarmy to wychwytują, a osocze trafia do innych placówek."
  - date: 2026-11-02
    text: "W nocy na poniedziałek druga fala uderza w supermarkety w Belgii, Szwecji, Irlandii, Estonii, Holandii i Luksemburgu. Niektóre zamrażarki w Szwecji ustawiono na 50 °C, w Belgii urządzenia przełączono w tryb rozmrażania. Delhaize, Carrefour, Coop w Szwecji i inni potwierdzają incydenty."
  - date: 2026-11-02
    text: "W Polsce przestają działać lodówki w sklepie Auchan w Olsztynie."
  - date: 2026-11-03
    text: "CERT Polska podaje, że znalazł w Polsce 140 urządzeń chłodniczych dostępnych z internetu i skontaktował się z ich właścicielami; potwierdza ataki na co najmniej dwa. Auchan Polska potwierdza nieprawidłowości w sterowaniu urządzeniami chłodniczymi w trzech sklepach. EFS potwierdza atak na swoje komory chłodnicze."
  - date: 2026-11-04
    text: "Coolworld, dostawca urządzeń chłodniczych dla służby krwi, informuje, że incydent związany z zewnętrznym oprogramowaniem do zarządzania chłodzeniem dotknął ograniczonej liczby jego urządzeń."
  - date: 2026-11-05
    text: "CISA, FBI oraz amerykańskie ministerstwa zdrowia, rolnictwa i transportu wzywają organizacje do zabezpieczenia przemysłowych systemów chłodniczych i systemów monitorowania łańcucha chłodniczego."
attack:
  - tactic: "Dostęp początkowy"
    id: T0883
    name: "Internet Accessible Device"
    text: "Docierali do sterowników, których strony WWW były otwarte na internet. Sam CERT Polska znalazł w Polsce 140 takich urządzeń."
  - tactic: "Dostęp początkowy"
    id: T1078.001
    name: "Valid Accounts: Default Accounts"
    text: "Logowali się tam, gdzie wciąż działały domyślne lub proste hasła, według Danfoss i CERT Polska."
  - tactic: "Zakłócenie sterowania procesem"
    id: T0836
    name: "Modify Parameter"
    text: "Przełączali urządzenia w tryb rozmrażania i podnosili zadaną temperaturę, w niektórych szwedzkich sklepach do 50 °C."
  - tactic: "Wpływ"
    id: T0879
    name: "Damage to Property"
    text: "Żywność się nagrzała i trzeba ją było wyrzucić, np. mięso za ok. 15 tys. euro w jednej belgijskiej masarni."
detect:
  - "Zmiany zadanej temperatury albo trybu, których nikt nie planował, zwłaszcza w nocy: tryb rozmrażania na wielu urządzeniach naraz albo temperatura ustawiona dużo powyżej normy."
  - "Logowania na stronę sterownika spoza twojej sieci albo z adresów, z których nikt wcześniej się nie logował."
  - "Niezależne czujniki temperatury, które pokazują co innego niż sterownik. We francuskiej służbie krwi zmianę wychwycili technik i osobne alarmy."
  - "Twoje własne sterowniki w wyszukiwarkach urządzeń internetowych. Censys naliczył 6695 wystawionych do internetu sterowników urządzeń chłodniczych 9 października i wciąż 3124 dnia 5 listopada."
check:
  - "Odłącz sterowniki od publicznego internetu. Jeśli potrzebujesz zdalnego dostępu, daj go tylko przez firewall albo VPN, które aktualizujesz na bieżąco."
  - "Zmień domyślne hasła, używaj silnych haseł i odpornego na phishing uwierzytelniania wieloskładnikowego, gdzie się da, i wpuszczaj tylko ze znanych adresów."
  - "Wydziel systemy chłodnicze i inne systemy budynku do osobnego segmentu sieci."
  - "Aktualizuj sterowniki i wymieniaj te, których producent już nie wspiera. Danfoss mówi, że większość zaatakowanych urządzeń to wycofane z produkcji modele."
  - "Włącz logowanie, przeglądaj logi i trzymaj kopie ustawień sterowników offline, żeby szybko je przywrócić."
  - "Dopilnuj, żeby pracownicy sprawdzali temperaturę i wiedzieli, co zrobić z żywnością z lodówki, która się nagrzała. Główny Inspektor Sanitarny mówi, że takiej żywności nie wolno sprzedawać."
  - "Incydenty zgłaszaj do CERT Polska."
unknown:
  - "Kto stoi za atakami. Nikt się nie przyznał, a belgijskie centrum cyberbezpieczeństwa mówi, że sprawców może nie dać się ustalić nigdy."
  - "Czy fala październikowa, listopadowa i atak na służbę krwi to dzieło tych samych osób."
  - "Ile w sumie sklepów i urządzeń zaatakowano i ile żywności stracono."
  - "Jak dokładnie napastnicy dostawali się do każdego systemu: przez domyślne hasła, stare oprogramowanie czy znaną podatność. Szwedzkie centrum cyberbezpieczeństwa nie podało, jak zaatakowano sklepy w Szwecji."
  - "Która część sprzętu Coolworld została użyta i czy ma to związek ze sterownikami Danfoss."
  - "Czy do wyszukiwania i atakowania urządzeń użyto AI. Belgijskie centrum cyberbezpieczeństwa wspomniało o takim ryzyku, ale mówi, że tego nie wie."
jobs: [ot-security-analyst, ot-security-engineer, iot-security-engineer, network-security-engineer, incident-responder]
topics: [attack-surface-management, asset-inventory, patch-management, security-baselines, firewall-rule-management]
sources:
  - name: "Portal Spożywczy: Pierwszy potwierdzony atak na lodówkę w Polsce. 140 urządzeń było narażonych"
    url: "https://www.portalspozywczy.pl/handel/wiadomosci/ataki-na-lodowki-i-zamrazarki-w-europie-w-polsce-potwierdzono-jeden-incydent,294868.html"
  - name: "Le Monde Informatique: L'Établissement français du sang touché par une cyberattaque"
    url: "https://www.lemondeinformatique.fr/cybersecurite-conformite/2026-11-06-l-etablissement-francais-du-sang-touche-par-une-cyberattaque"
  - name: "Aleteia: Les chambres froides de l'Établissement français du sang victimes d'une cyberattaque"
    url: "https://fr.aleteia.org/2026/11/05/les-chambres-froides-de-letablissement-francais-du-sang-victimes-dune-cyberattaque/"
  - name: "The Record: Second wave of suspected cyberattacks hits supermarket freezers across Europe"
    url: "https://therecord.media/cyberattack-grocery-freezers-europe"
  - name: "TechCrunch: A fresh wave of cyberattacks has hit Europe's supermarket refrigerators, destroying food across countries"
    url: "https://techcrunch.com/2026/11/02/a-fresh-wave-of-cyberattacks-has-hit-europes-supermarket-refrigerators-destroying-food-across-countries/"
  - name: "The Hacker News: New Wave of Refrigeration Cyberattacks Hits Supermarkets Across Europe, Forcing Stores to Pull Food"
    url: "https://thehackernews.com/2026/11/second-wave-of-cyberattacks-hits.html"
  - name: "Spider's Web: Polskie sklepy też na celowniku hakerów. Pracownicy zauważyli coś niepokojącego"
    url: "https://spidersweb.pl/2026/11/polskie-sklepy-lodowki-atak.html"
  - name: "Spider's Web: Niedziałające lodówki to dopiero ostrzeżenie. Co jeszcze będą próbowali atakować?"
    url: "https://spidersweb.pl/2026/11/lodowki-to-ostrzezenie.html"
  - name: "Interia: Fala ataków hakerskich w całej Europie. Celem sklepy w Polsce"
    url: "https://wydarzenia.interia.pl/kraj/news-fala-atakow-hakerskich-w-calej-europie-celem-sklepy-w-polsce,nId,23569075"
  - name: "The Record: Harden cooling systems now, feds warn critical infrastructure operators amid attacks"
    url: "https://therecord.media/cyberattacks-refrigeration-cisa-fbi"
  - name: "SecurityWeek: US Agencies Urge Organizations to Harden Refrigeration Controllers"
    url: "https://www.securityweek.com/us-agencies-urge-organizations-to-harden-refrigeration-controllers/"
  - name: "The Register: Feds warn grocers: Don't chill on cyber defenses as freezer hacking spree heats up"
    url: "https://www.theregister.com/security/2026/11/05/feds-warn-grocers-dont-chill-on-cyber-defenses-as-freezer-hacking-spree-heats-up/5307978"
  - name: "Malwarebytes: Ataki na supermarkety i systemy przechowywania krwi wywołują ostrzeżenie w USA"
    url: "https://www.malwarebytes.com/pl/blog/news/2026/11/attacks-on-supermarket-and-blood-storage-systems-prompt-us-warning"
---

Sterowniki urządzeń chłodniczych to małe komputery, które sterują lodówkami i zamrażarkami w sklepach i magazynach. Wiele z nich ma stronę WWW do zdalnego podglądu. W październiku ok. 700 francuskich supermarketów odkryło, że w nocy ich urządzenia przełączono w tryb rozmrażania. W nocy na poniedziałek, 2 listopada, to się powtórzyło, tym razem w całej Europie.

Sklepy w Belgii, Szwecji, Irlandii, Estonii, Holandii i Luksemburgu zgłaszały, że lodówki i zamrażarki się nagrzewają. Niektóre zamrażarki w Szwecji ustawiono na 50 °C, a w Belgii, według firmy instalującej urządzenia chłodnicze, przełączono je w tryb rozmrażania. Delhaize, Carrefour, Coop w Szwecji, SuperValu i inni potwierdzili incydenty, w każdej sieci najwyżej w kilkudziesięciu sklepach, i wyrzucali żywność albo wycofywali ją ze sprzedaży. Danfoss, producent wielu takich sterowników, poinformował, że zaatakowane systemy w Holandii nie były w bezpiecznej sieci i wciąż miały domyślne hasła.

W Polsce Auchan potwierdził nieprawidłowości w sterowaniu urządzeniami chłodniczymi w trzech sklepach: w Olsztynie, Częstochowie-Poczesnej i Sosnowcu. CERT Polska znalazł 140 urządzeń chłodniczych dostępnych z internetu, skontaktował się z ich właścicielami i potwierdził ataki na co najmniej dwa. „To nie są skomplikowane ataki” — mówi szef CERT Polska Marcin Dudek: sprawcy masowo skanują sieć, szukają dostępnych urządzeń i testują proste hasła.

We Francji zmieniono ustawienia komór chłodniczych w trzech placówkach krajowej służby krwi EFS, przez sprzęt dostawcy, którego media zidentyfikowały jako Coolworld. Pracownicy zauważyli to na czas i nie stracono preparatów krwi. 5 listopada pięć amerykańskich agencji, w tym CISA i FBI, wezwało organizacje do odłączenia takich sterowników od internetu. Nikt nie przyznał się do ataków.
