---
# A weekly digest → lvlulcuma.com/pl/news/2026-w47/ (the folder name is the year and ISO week number)
title: "Zatruty skrypt na 178 stronach i atak „wygenerowany przez AI” na UE"
dek: "Hakerzy podrzucili złośliwy kod do skryptu, który ładuje 178 dużych stron, prawdopodobnie chińscy szpiedzy przez miesiące wykorzystywali nieznany błąd w VMware, a błąd w Javie nazwany Java4Shell zagraża Jirze, Jenkinsowi i Keycloakowi. Do tego atak „wygenerowany przez AI” na Komisję Europejską, zatrzymania podejrzanych o ransomware w Ukrainie i wyciek w Transport for London."
date: 2026-11-23   # when this digest was published
action: "Zaktualizuj Javę na serwerach do wydań z 17 listopada, także kopie wbudowane w aplikacje i kontenery: błąd Java4Shell dotyczy Javy 17 i nowszych na wielu nowoczesnych procesorach serwerowych Intel i AMD."
stories:
  - title: "Hakerzy podrzucili złośliwy kod do skryptu 178 dużych stron, od CNN po HSBC"
    type: supply-chain
    text:
      - "Optimizely sprzedaje narzędzia, którymi firmy porównują różne wersje swoich stron internetowych. Strony korzystające z jej produktu Web Experimentation ładują niewielki skrypt Optimizely. W poniedziałek 16 listopada ktoś wykorzystał błąd w procesie zakładania konta w tym produkcie, dostał się do projektów klientów i dopisał do skryptu własny kod. Odwiedzający takie strony jak CNN, BBC, Zoom, Salesforce i HSBC ładowali go przez większość dnia."
      - "Kod podmieniał adresy portfeli kryptowalutowych na adresy napastników, kopiował numery kart wpisywane w formularze, zabierał ciasteczka i zrzuty ekranu, a na iPhone'ach i iPadach ze starszym iOS próbował uruchomić znane zestawy hakerskie. Optimizely twierdzi, że zamknęła lukę w ciągu trzech godzin od jej wykrycia, że ucierpiało mniej niż 5% jej klientów i że nie był to wyciek haseł. Badacze namierzyli co najmniej 7000 dolarów skradzionych kryptowalut, ale nikt nie wie, ile kart przechwycono."
    notes:
      - label: "W liczbach"
        text: "Report URI sprawdziła 1611 skryptów Optimizely i w 188 znalazła złośliwy kod. Wśród 178 zaatakowanych organizacji 32 to banki i inne firmy finansowe. Tylko 24 miały politykę bezpieczeństwa dla przeglądarki na tyle surową, by zatrzymać atak, a 68 nie miało żadnej."
      - label: "Content Security Policy (CSP)"
        text: "Lista, którą strona przekazuje przeglądarce: skąd wolno ładować skrypty i dokąd wolno wysyłać dane. Surowa polityka blokuje nieznane serwery, więc może zatrzymać atak nawet wtedy, gdy złośliwy kod przychodzi w skrypcie zaufanego dostawcy."
    why: "Skrypt jednego dostawcy działał naraz na 178 stronach, którym ludzie ufają, a znane marki nie ochroniły odwiedzających. Każdy zewnętrzny skrypt na stronie daje jego dostawcy możliwość zmieniania jej treści."
    do: "Jeśli 16 listopada zdarzyło ci się płacić kartą lub wysyłać kryptowaluty na dużej stronie, sprawdź wyciąg i historię portfela, a iPhone'y i iPady zaktualizuj do najnowszego iOS. Właściciele stron: usuńcie zewnętrzne skrypty ze stron płatności i ustawcie surową Content Security Policy."
    incident: optimizely-script-hijack
    sources:
      - name: "Optimizely: Security Advisory: Web Experimentation Security Incident (Updated November 19, 2026)"
        url: "https://support.optimizely.com/hc/en-us/articles/50521849710605-Security-Advisory-Web-Experimentation-Security-Incident-Updated-November-19-2026"
      - name: "The Record: Website management platform Optimizely confirms hackers put malicious code into customer sites"
        url: "https://therecord.media/optimizely-malicious-code-customer-sites"
      - name: "Help Net Security: Malware spread through Optimizely hits 178 organizations, including BBC, CNN and Zoom"
        url: "https://www.helpnetsecurity.com/2026/11/17/optimizely-vulnerability-malicious-javascript/"
      - name: "StepSecurity: OPTIMJACK: Optimizely-Hosted Scripts Loaded a Crypto Clipper and Card Skimmer on 178 Organizations"
        url: "https://www.stepsecurity.io/blog/optimjack-optimizely-hosted-scripts-crypto-clipper-card-skimmer"
  - title: "Prawdopodobnie chińscy szpiedzy przez miesiące wykorzystywali nieznany błąd w VMware"
    type: espionage
    text:
      - "W czwartek 19 listopada Broadcom załatał krytyczny błąd w VMware vCenter, oprogramowaniu, którym wiele firm zarządza wszystkimi swoimi serwerami wirtualnymi z jednego miejsca. Tego samego dnia Mandiant (część Google) poinformował, że prawdopodobnie chińska grupa szpiegowska, którą nazywa ARMORY CASTLE, wykorzystywała ten błąd od początku września, na długo przed poprawką. Błąd pozwala każdemu, kto ma dostęp sieciowy do vCenter, zostać administratorem bez hasła."
      - "W atakach badanych przez Mandiant grupa najpierw wchodziła przez lukę w urządzeniu do zdalnej pomocy technicznej BeyondTrust, a potem przechodziła na maszyny z Linuksem bez żadnego oprogramowania ochronnego. Stamtąd podrabiała logowania administratora do vCenter, docierała do serwerów pod spodem i kopiowała bazę haseł Windows prosto z dysku maszyny wirtualnej. Zostawiła backdoora, który przyjmuje polecenia przez Slacka."
    notes:
      - label: "Sprytny ruch"
        text: "Napastnicy nie musieli nawet dotykać samej maszyny z Windows: czytali jej dysk z serwera pod spodem, gdzie narzędzia ochronne Windows tego nie widzą. Zdalne logowanie do vCenter (SSH) włączali tylko na tyle, ile było trzeba, i potem znów je wyłączali."
      - label: "vCenter i ESXi"
        text: "ESXi to system, który uruchamia maszyny wirtualne na fizycznym serwerze. vCenter zarządza wieloma serwerami ESXi z jednej konsoli, więc kto go kontroluje, ten dociera do każdej maszyny wirtualnej na nich."
    why: "vCenter trzyma klucze do całej serwerowni firmy, a w tych atakach stał wśród urządzeń, których nie pilnowało żadne zabezpieczenie. System załatany dziś może nadal skrywać podrobione konta i skradzione klucze z września."
    do: "Zainstaluj aktualizację Broadcomu z 19 listopada (na przykład vCenter 8.0 U3m): obejścia nie ma. Potem poszukaj nieoczekiwanych kont administratorów i maszyn, śladów wcześniejszego użycia SSH na vCenter i nowych kluczy w pliku authorized_keys konta root na ESXi. Błąd ma numer CVE-2026-123890."
    sources:
      - name: "Google Threat Intelligence: ARMORY CASTLE Exploits vSphere"
        url: "https://cloud.google.com/blog/topics/threat-intelligence/armory-castle-exploits-vsphere"
      - name: "SecurityWeek: Newly Patched VMware vCenter Flaw Exploited as Zero-Day by Chinese APT"
        url: "https://www.securityweek.com/newly-patched-vmware-vcenter-flaw-exploited-as-zero-day-by-chinese-apt/"
      - name: "Help Net Security: VMware vCenter zero-day exploited for months before patch (CVE-2026-123890)"
        url: "https://www.helpnetsecurity.com/2026/11/20/vmware-vcenter-zero-day-cve-2026-123890-exploited/"
      - name: "The Hacker News: China-Linked Hackers Exploit Critical VMware vCenter Zero-Day to Gain Admin Access and Steal Data"
        url: "https://thehackernews.com/2026/11/china-linked-hackers-exploit-critical.html"
  - title: "„Java4Shell”: błąd w dekoderze Base64 w Javie zagraża Jirze, Jenkinsowi i Keycloakowi"
    type: vulnerability
    text:
      - "We wtorek 17 listopada Oracle i projekt OpenJDK załatali poważny błąd w Javie, języku, na którym działa niezliczona liczba aplikacji biznesowych. Siedzi on w „skrócie”, którym Java na nowszych procesorach serwerowych Intel i AMD dekoduje Base64, popularny sposób zamiany danych na zwykły tekst. Specjalnie przygotowany ciąg znaków sprawia, że Java zapisuje dane poza końcem przydzielonego fragmentu pamięci. Błąd znalazła firma Calif, a jego przydomek Java4Shell nawiązuje do Log4Shell, błędu w javowej bibliotece do logowania z 2021 roku."
      - "Calif twierdzi, że zamieniła błąd w przejęcie bez hasła w sześciu popularnych aplikacjach, w tym w Jirze, Confluence, Jenkinsie i Keycloaku, a pracę przyspieszyła agentami AI. Tych exploitów nie opublikowała i nie potwierdzono dotąd żadnych ataków. Ale inni badacze już położyli nim serwery testowe, a firma VulnCheck ma działający exploit dla swoich klientów."
    notes:
      - label: "Kogo to dotyczy"
        text: "Do ataku potrzebne są Java 17.0.6 lub nowsza, procesor z zestawem instrukcji AVX-512 VBMI (serwery Intel Xeon od Ice Lake, AMD Zen 4 i nowsze) oraz aplikacja dekodująca Base64 od obcych. Java 8 i 11 oraz serwery ARM nie są zagrożone."
      - label: "Base64"
        text: "Sposób zapisania dowolnych danych 64 zwykłymi znakami (literami, cyframi, + i /), żeby mogły przejść tam, gdzie oczekiwany jest tekst, na przykład w nagłówku logowania albo w tokenie bezpieczeństwa. Aplikacje dekodują go bez przerwy, często zanim sprawdzą, kto pyta."
    why: "Java działa w ogromnej liczbie firmowych narzędzi, a wiele z nich jest dostępnych z internetu. Zamiana błędu w przejęcie systemu jest trudna, ale badacze już to zrobili, a watchTowr ocenia ataki jako bardzo prawdopodobne."
    do: "Zaktualizuj Javę do wydań z 17 listopada (u Oracle to 17.0.21.1, 21.0.13.1, 25.0.5.1 i 27.0.1.1, albo odpowiednie wersje twojego dostawcy). Dopóki nie możesz, uruchamiaj Javę z opcjami -XX:+UnlockDiagnosticVMOptions -XX:-UseBASE64Intrinsics. Błąd ma numer CVE-2026-114938."
    sources:
      - name: "VulnCheck: Java4Shell CVE-2026-114938: Fine, I Guess We'll Do This Again"
        url: "https://www.vulncheck.com/blog/java4shell"
      - name: "watchTowr: Frequently Asked Questions About the Java Remote Code Execution Vulnerability (Java4Shell CVE-2026-114938)"
        url: "https://watchtowr.com/intelligence/java4shell-cve-2026-114938-faq/"
      - name: "The Hacker News: Java4Shell Flaw (CVE-2026-114938) Enables Pre-Auth RCE in Jira, Jenkins, Keycloak and More"
        url: "https://thehackernews.com/2026/11/java4shell-cve-2026-114938-enables-pre.html"
      - name: "Censys: Nov 18 Advisory: OpenJDK Remote Code Execution (Java4Shell) [CVE-2026-114938]"
        url: "https://censys.com/advisory/cve-2026-114938/"
  - title: "Komisja Europejska potwierdza atak, który sama nazywa „wygenerowanym przez AI”"
    type: breach
    text:
      - "W czwartek 19 listopada Komisja Europejska potwierdziła cyberatak, po tym jak napisało o nim Politico. Pierwsze oznaki Komisja zauważyła już 22 października. Systemy do pasków płacowych, wniosków urlopowych i zwrotów kosztów leczenia pracowników, a także usługi tłumaczeniowe zostały wyłączone, niektóre na ponad 10 dni, a 18 listopada system kadrowy znów przestał działać."
      - "Rzecznik Thomas Regnier powiedział, że „była to kampania cybernetyczna wygenerowana przez AI”, w której użyto publicznie dostępnego narzędzia. Źródła Politico wskazały to narzędzie: ARTEX, program open source, który przy pomocy komercyjnych modeli AI sam wyszukuje słabe punkty i je wykorzystuje. Komisja nie wskazała napastników ani nie powiedziała, jak się dostali, a także twierdzi, że nie znalazła dowodów na wyciek danych dotyczący ogółu jej pracowników."
    notes:
      - label: "Ostrzeżenie FBI"
        text: "13 listopada FBI ostrzegło, że napastnicy używają ARTEX co najmniej od sierpnia, a niektóre włamania dochodzą do uprzywilejowanego dostępu w mniej niż trzy godziny. W internecie było otwartych ponad 1600 paneli sterowania ARTEX."
      - label: "Testy penetracyjne"
        text: "Włamywanie się do własnych systemów za zgodą właściciela, żeby znaleźć słabe punkty przed przestępcami. ARTEX wydano w lipcu właśnie jako narzędzie do tej pracy, a potem obrócono przeciwko prawdziwym ofiarom."
    why: "Narzędzia takie jak ARTEX pozwalają w kilka godzin zrobić to, na co doświadczony zespół potrzebował wcześniej dni. To już trzeci publicznie znany incydent w Komisji w tym roku, a zespół reagowania instytucji UE apeluje o naprawianie nawet znalezisk o niskim poziomie ważności."
    do: "Zdejmij z internetu strony administracyjne i panele zarządzania, włącz uwierzytelnianie wieloskładnikowe w kluczowych systemach i ustaw alert, gdy jedno konto przegląda wiele rekordów po kolei: właśnie te kroki przeciw ARTEX zalecają FBI i CERT-EU."
    sources:
      - name: "The Record: European Commission confirms cyberattack, says hackers used AI tool"
        url: "https://therecord.media/european-commission-confirms-cyberattack-using-ai"
      - name: "SecurityWeek: European Commission Confirms AI-Assisted Cyberattack Disrupted Services"
        url: "https://www.securityweek.com/european-commission-confirms-ai-assisted-cyberattack-disrupted-services/"
      - name: "The Register: European Commission scrambles to contain AI-assisted cyberattack"
        url: "https://www.theregister.com/cyber-crime/2026/11/19/european-commission-scrambles-to-contain-ai-assisted-cyberattack/5311103"
      - name: "Cloud Security Alliance: AI-Tool Attack on the European Commission: Lessons for Defenders"
        url: "https://labs.cloudsecurityalliance.org/research/csa-research-note-european-commission-ai-cyberattack-2026112/"
  - title: "Ukraina i FBI zatrzymują czterech podejrzanych o okupy warte 40,5 mln dolarów"
    type: takedown
    text:
      - "W środę 18 listopada ukraińska Prokuratura Generalna i Policja Narodowa poinformowały, że wspólnie z FBI rozbiły międzynarodową grupę wymuszeń. Policja przeprowadziła 66 przeszukań w Kijowie i 11 obwodach, a czterech kluczowych członków trafiło do aresztu. Grozi im do 15 lat więzienia."
      - "Według śledczych grupa, licząca co najmniej 27 osób z Ukrainy, Kazachstanu, rosji i innych krajów, dzwoniła do pracowników firm, podając się za dział IT, czasem z głosami wygenerowanymi przez AI. Gdy ktoś podał dane logowania albo zainstalował program do zdalnego dostępu, napastnicy kradli dane, szyfrowali pliki i żądali okupu w kryptowalutach. Co najmniej 28 firm zapłaciło ponad 40,5 mln dolarów. Szersza sieć, w której są byli członkowie gangu ransomware Conti, liczy ponad 60 osób w ośmiu jurysdykcjach."
    notes:
      - label: "Łup"
        text: "Policja zabezpieczyła komputery, telefony, karty bankowe, prawie 370 000 dolarów w gotówce i 20 000 euro. Dokumenty sądowe, na które powołują się dziennikarze, wymieniają ofiary z USA, na przykład producenta ropy Warren Oil, który według doniesień zapłacił około 5 mln dolarów w bitcoinach po kradzieży 1,4 TB danych."
      - label: "Vishing"
        text: "Phishing głosowy: oszukiwanie przez telefon zamiast przez e-mail. Podszywanie się pod pomoc techniczną działa, bo pracownicy są przyzwyczajeni, że dział IT prosi ich o zainstalowanie narzędzia albo podyktowanie kodu."
    why: "Podejrzani o ransomware rzadko trafiają do aresztu. Śledczy mówią, że dostali się do czatów grupy i wciąż ustalają kolejnych członków szerszej sieci."
    do: "Ustalcie sposób sprawdzania, czy telefon od „IT” jest prawdziwy, na przykład oddzwanianie na znany numer. Nigdy nie instaluj programów do zdalnego dostępu ani nie podawaj kodów tylko dlatego, że prosi o to rozmówca, i blokuj programy do zdalnego dostępu, których twoja firma nie używa."
    sources:
      - name: "BleepingComputer: Ukraine, FBI arrest ransomware gang members tied to $40M in ransoms"
        url: "https://www.bleepingcomputer.com/news/security/ukraine-fbi-arrest-ransomware-gang-members-tied-to-40m-in-ransoms/"
      - name: "The Record: Ukraine exposes ransomware network extorting US oil, healthcare firms"
        url: "https://therecord.media/ukraine-ransomware-arrests-cyber"
      - name: "Інтерфакс-Україна: Офіс генпрокурора та ФБР викрили міжнародне хакерське угруповання, арештовано 4 ключових учасників"
        url: "https://interfax.com.ua/news/general/1238478.html"
      - name: "Цензор.НЕТ: Виманили понад $40,5 млн у 28 підприємств: Нацполіція спільно з ФБР викрили групу хакерів, - Цуцкірідзе"
        url: "https://censor.net/ua/news/4034335/vykryly-grupu-hakeriv-scho-vymanyla-ponad-40-mln-dolariv"
  - title: "Hakerzy dotarli do danych 265 000 posiadaczy londyńskich kart Oyster photocard"
    type: breach
    text:
      - "Transport for London (TfL) zarządza miejskimi autobusami i metrem. W poniedziałek 16 listopada klienci zaczęli dostawać e-maile z prośbą o założenie konta, a TfL wykryło podejrzaną aktywność na stronie Oyster photocard i wyłączyło system. Photocard to imienne karty ze zdjęciem, które dają darmowe lub tańsze przejazdy dzieciom, studentom, osobom po 60. roku życia, praktykantom i weteranom."
      - "TfL podaje, że napastnicy mogli zobaczyć imiona i nazwiska, numery telefonów, adresy e-mail i domowe, daty urodzenia oraz pytania i odpowiedzi zabezpieczające około 265 000 klientów. Hasła, dane płatnicze, zdjęcia i historia podróży według TfL nie ucierpiały, podobnie jak imiona i daty urodzenia dzieci z kartami Zip. TfL nie ujawniło, jak napastnicy się dostali. Powiadomiło ICO, brytyjski urząd ochrony danych."
    notes:
      - label: "Nie pierwszy raz"
        text: "We wrześniu 2024 roku członkowie grupy Scattered Spider włamali się do sieci TfL, a tamten atak kosztował około 29 mln funtów. Dwóch z nich przyznało się do winy i w tym roku usłyszało wyroki."
      - label: "Pytania zabezpieczające"
        text: "Zapasowe pytania w rodzaju „Twoja pierwsza szkoła?”, którymi potwierdzasz tożsamość, gdy zapomnisz hasła. W przeciwieństwie do hasła prawdziwej odpowiedzi nie da się zmienić, więc jeśli tych samych odpowiedzi używasz także gdzie indziej, ustaw tam nowe."
    why: "Imiona, adresy domowe i daty urodzenia studentów i starszych osób to dokładnie to, czego oszuści potrzebują do przekonujących fałszywych wiadomości od TfL czy banku, a wykradzione odpowiedzi zabezpieczające mogą pomóc otworzyć inne konta."
    do: "Posiadacze photocard: ignorujcie niespodziewane e-maile „załóż konto”, zmieńcie odpowiedzi zabezpieczające używane na innych stronach i przygotujcie się na zmianę hasła i pytania zabezpieczającego, gdy strona wróci."
    sources:
      - name: "BleepingComputer: Transport for London breach exposes 265,000 Oyster card users' data"
        url: "https://www.bleepingcomputer.com/news/security/transport-for-london-breach-exposes-265-000-oyster-card-users-data/"
      - name: "Help Net Security: 265,000 Oyster photocard customers' data exposed in Transport for London breach"
        url: "https://www.helpnetsecurity.com/2026/11/20/transport-for-london-oyster-photocard-data-breach/"
      - name: "ITPro: Oyster photocard breach: TfL takes system offline after 260,000+ customers affected by attack"
        url: "https://www.itpro.com/cyber-resilience/data-breaches/oyster-photocard-breach-tfl-takes-system-offline-after-260-000-customers-affected-by-attack"
      - name: "TEISS: Transport for London data breach exposes details of about 265,000 Oyster photocard users"
        url: "https://www.teiss.co.uk/news/transport-for-london-data-breach-exposes-details-of-about-265000-oyster-photocard-users-18499"
fun:   # "Fun story of the week": a light, true story from this week that isn't one of the stories above
  title: "„123456” znów wygrywa, ale ulubione hasło Duńczyków mówi „Lukas jest fajny”"
  text:
    - "Menedżer haseł NordPass opublikował coroczną listę najpopularniejszych haseł, ułożoną z haseł, które wyciekły od września 2025 do września 2026 roku w 44 krajach."
    - "„123456” znów jest na pierwszym miejscu, jak w siedmiu z ostatnich ośmiu lat, przed „admin” i „12345678”. „1234” po raz pierwszy trafiło do pierwszej piątki, a „password” spadło na siódme miejsce."
    - "Niektóre kraje mają własne przeboje. W Danii wygrało „lukasersej123”, czyli po duńsku „Lukas jest fajny 123”. A niektórzy po prostu wpisują słowo „hasło” w swoim języku, na przykład „contraseña” albo „motdepasse”."
  sources:
    - name: "TechRadar"
      url: "https://www.techradar.com/pro/security/the-worlds-most-popular-passwords-for-2026-have-been-revealed-and-unsurprisingly-theyre-all-pretty-bad"
    - name: "Cybernews"
      url: "https://cybernews.com/security/nordpass-2026-most-popular-passwords-study/"
---

W tym tygodniu drogę do środka otwierało zaufanie: skrypt dostawcy, który 178 stron ładuje bez zastanowienia, urządzenie do zdalnej pomocy i konsola serwerów, których nikt nie pilnuje, telefon od „IT”. A ataki przyspieszają: narzędzie AI dochodziło do uprzywilejowanego dostępu w kilka godzin, a badacze przy pomocy agentów AI zamienili błąd w Javie w działające exploity.
