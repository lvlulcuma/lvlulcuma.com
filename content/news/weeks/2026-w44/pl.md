---
# A weekly digest → lvlulcuma.com/pl/news/2026-w44/ (the folder name is the year and ISO week number)
title: "14-letni błąd i „nie” warte 50 milionów dolarów"
dek: "Błąd w PHP dociera do firewalli, japoński hosting nie zapłaci 50 mln dolarów okupu, a dane 41 tys. pracowników amerykańskich służb trafiają do sieci. Do tego fałszywe rachunki za prąd w Ukrainie, zajęty hosting dla przestępców i wyciek przez dostawcę Coinbase."
date: 2026-11-01   # when this digest was published
action: "Znajdź wszystkie miejsca, w których w twojej sieci działa PHP, także wewnątrz firewalla, i sprawdź, czy jest aktualny."
stories:
  - title: "Błąd w PHP służy do włamań na serwery, a teraz także na firewalle"
    type: vulnerability
    text:
      - "PHP to język, na którym działa ogromna część internetu. Dwie poważne podatności w nim, nazwane PHP2Shell, pozwalają każdemu przejąć serwer, po prostu wysyłając do niego żądania HTTP. Hasło nie jest potrzebne."
      - "PHP wydał poprawkę 21 października. W tym tygodniu CISA potwierdziła prawdziwe ataki, a firma Palo Alto Networks poinformowała, że podatności są już wykorzystywane przeciw jej firewallom. Jedna grupa dokłada drugą podatność, w Linuksie, żeby przejąć pełną kontrolę."
    notes:
      - label: "W liczbach"
        text: "Ponad 50 tys. prób ataku z 70 krajów — tyle naliczyło samo jedno laboratorium uniwersyteckie."
      - label: "Najciekawsze"
        text: "Ten błąd jest w PHP od wersji 5.4, wydanej w 2012 roku. A atakujący zaczęli go wykorzystywać cztery dni przed poprawką, bo szczegóły wyciekły wcześniej."
    why: "PHP kryje się też w produktach takich jak firewalle. Tam nie zaktualizujesz go sam — musisz czekać na poprawkę od producenta."
    do: "Zaktualizuj PHP do najnowszej wersji swojej gałęzi (8.2.35, 8.3.36, 8.4.27 lub 8.5.12). Jeśli masz Palo Alto, zainstaluj poprawkę i nie wystawiaj panelu administracyjnego firewalla do internetu."
    sources:
      - name: "The Register: CISA confirms PHP2Shell under attack"
        url: "https://www.theregister.com/a/5305681"
      - name: "Palo Alto Networks: CVE-2026-109618 advisory"
        url: "https://security.paloaltonetworks.com/CVE-2026-109618"
      - name: "Unit 42: PHP2Shell threat brief"
        url: "https://unit42.paloaltonetworks.com/cve-2026-109618-cve-2026-109619/"
  - title: "Japoński hosting odmawia zapłaty 50 mln dolarów okupu"
    type: ransomware
    text:
      - "GMO Internet wynajmuje komputery w chmurze, na których wiele osób w Japonii handluje walutami. Hakerzy włamali się do usługi, ukradli dane, zostawili złośliwe oprogramowanie na maszynach części klientów i zażądali ok. 50 mln dolarów."
      - "GMO odmówiła. Hakerzy opublikowali wtedy część danych klientów, a GMO zaleciła klientom zrobienie kopii zapasowych własnych komputerów i ich wyłączenie. Niektórzy inwestorzy twierdzą, że z ich rachunków zniknęły pieniądze przez transakcje, których nie zawierali."
    notes:
      - label: "Żądanie okupu"
        text: "Hakerzy dali GMO czas do 17:00 tego samego dnia i podpowiedzieli, że pieniądze może od razu przelać własna giełda kryptowalut GMO."
      - label: "Co GMO zrobiła zamiast tego"
        text: "Firma wypłaca każdemu klientowi 5000 jenów (ok. 30 dolarów), pokrywa potwierdzone straty i oferuje 1 mln dolarów nagrody za informacje o sprawcach."
    why: "Jedno włamanie do firmy hostingowej dotknęło naraz tysięcy klientów. A ponieważ na tych komputerach były zapisane dane logowania do rachunków maklerskich, kradzież szybko zamieniła się w prawdziwe pieniądze."
    do: "Nie zapisuj danych logowania do banku ani brokera na wynajmowanych lub współdzielonych komputerach i włącz uwierzytelnianie dwuskładnikowe wszędzie, gdzie da się przelać pieniądze."
    sources:
      - name: "BleepingComputer: GMO urges customers to shut down PCs"
        url: "https://www.bleepingcomputer.com/news/security/japans-gmo-urges-customers-to-shut-down-pcs-amid-ransomware-threat/"
      - name: "Jiji Press (Nippon.com): GMO customer info exposed"
        url: "https://www.nippon.com/en/news/yjj2026102700370/"
      - name: "Webhosting.Today: GMO refuses ransom and offers a $1 million bounty"
        url: "https://webhosting.today/2026/10/28/japans-gmo-refuses-ransom-after-vps-breach-and-offers-1-million-bounty/"
  - title: "Dane 41 tys. pracowników DHS opublikowane w sieci"
    type: breach
    text:
      - "W środę serwis z wyciekami DDoSecrets opublikował listę ponad 41 tys. osób pracujących dla Departamentu Bezpieczeństwa Krajowego USA (DHS), m.in. w straży granicznej, służbie imigracyjnej i agencji ds. cyberbezpieczeństwa. Są na niej imiona i nazwiska, stanowiska, służbowe telefony i adresy e-mail."
      - "Grupa hakerów nazywająca się Department of Peace twierdzi, że zdobyła dane przez Okta — usługę logowania, z której korzysta DHS. Okta odpowiada, że nie widzi śladów włamania. Agencja Reuters sprawdziła część listy i znalazła na niej prawdziwych pracowników."
    notes:
      - label: "Logowanie jednokrotne (SSO)"
        text: "Jedno logowanie, które otwiera wszystkie aplikacje w pracy. Okta to jedna z największych firm SSO, więc jest też cennym celem."
      - label: "Co jest w plikach"
        text: "Lista pokazuje też, do jakich wewnętrznych grup należą ludzie i z jakich aplikacji mogą korzystać. Niektóre grupy mają nazwy w rodzaju „Undercover Operations” (operacje pod przykryciem)."
    why: "Nie ma tu haseł. Ale spis tego, kto gdzie pracuje i z jakich systemów korzysta, to gotowa lista celów dla phishingu, a dla osób na wrażliwych stanowiskach także zagrożenie dla bezpieczeństwa."
    do: "Sprawdź, które aplikacje i klucze API mogą odczytać cały katalog pracowników twojej firmy, i odbierz ten dostęp tam, gdzie nie jest potrzebny."
    sources:
      - name: "CyberScoop: Leak site publishes data on more than 41,000 DHS employees"
        url: "https://cyberscoop.com/dhs-employee-data-leak-ddosecrets/"
      - name: "Reuters (via GV Wire): Leak website releases data on DHS employees"
        url: "https://gvwire.com/2026/10/28/leak-website-releases-data-on-tens-of-thousands-of-dhs-employees/"
  - title: "Fałszywe rachunki za prąd „od DTEK” trafiają do ukraińskich urzędów"
    type: phishing
    text:
      - "29 października ukraińskie urzędy dostały maile rzekomo od księgowego DTEK, dużej ukraińskiej firmy energetycznej, z wezwaniem do spłaty długu za prąd. CERT-UA, ukraiński rządowy zespół reagowania na incydenty, łączy atak z powiązaną z rosją grupą UAC-0050."
      - "Link „zapłać dług” w załączonym PDF-ie pobierał LiteManager, prawdziwy program do zdalnego sterowania. Instalował się tak, by startować razem z Windowsem, i dawał atakującym cichy, stały dostęp do komputera."
    notes:
      - label: "Narzędzie zdalnego dostępu"
        text: "Program, przez który można obsługiwać komputer na odległość. Takich samych używają informatycy, więc zabezpieczenia często je przepuszczają."
      - label: "Sprytny trik"
        text: "Pobrane archiwum zawierało drugie archiwum, zabezpieczone hasłem, a hasło leżało obok w pliku tekstowym. Zabezpieczenia nie zajrzą do zaszyfrowanego archiwum, a człowiek otworzy je w kilka sekund."
    why: "Przez rosyjskie ataki na sieć energetyczną wyłączany jest prąd, a w rachunkach łatwo się pogubić, więc pismo o długu wydaje się wiarygodne."
    do: "Dopuszczaj tylko narzędzia zdalnego dostępu, których twój zespół naprawdę używa, i ustaw alert na każde inne. Rachunki sprawdzaj na stronie samego dostawcy, nigdy przez link z maila."
    sources:
      - name: "Portal rządu Ukrainy: ostrzeżenie CERT-UA"
        url: "https://www.kmu.gov.ua/news/khakery-rozsylaiut-lysty-derzhustanovam-vid-imeni-dtek-dlia-vstanovlennia-prohram-viddalenoho-dostupu"
      - name: "Ukrinform: rosyjscy hakerzy wysyłali fałszywe pisma od DTEK"
        url: "https://ukrinform.ua/rubric-society/4179756-rosijski-hakeri-atakuvali-derzustanovi-vidpravlali-listi-vid-dtek-pro-borgi-za-elektriku.html"
  - title: "FBI zajmuje stronę hostingu stworzonego dla przestępców"
    type: takedown
    text:
      - "We wtorek FBI wraz z partnerami z Niemiec, Holandii i Wielkiej Brytanii zajęło domenę virtualine.net. Virtualine wynajmował serwery, otwarcie reklamował się na forach hakerskich i obiecywał ignorować skargi i prośby policji."
      - "Wśród klientów były gangi ransomware i operatorzy złośliwego oprogramowania kradnącego hasła. Według prokuratury Virtualine prał też pieniądze i utrzymywał w sieci forum z materiałami przedstawiającymi wykorzystywanie seksualne dzieci. Nikogo nie zatrzymano."
    notes:
      - label: "Hosting „kuloodporny”"
        text: "Hosting, który ignoruje zgłoszenia nadużyć i prośby policji, żeby serwery przestępców działały dalej."
      - label: "Najciekawsze"
        text: "Serwery kosztowały od 0,79 dolara miesięcznie. Po zajęciu domeny właściciel opublikował list otwarty pod inną domeną."
    why: "Zajęcie domeny nie wyłącza serwerów, a takie hostingi często wracają pod nową nazwą w ciągu kilku dni. Każda taka akcja daje jednak obrońcom nowe listy sieci do zablokowania."
    do: "Blokuj ruch do sieci znanych z hostingu „kuloodpornego”. Darmowa lista Spamhaus DROP to łatwy początek."
    sources:
      - name: "The Record: FBI seizes ‘bulletproof’ hosting site"
        url: "https://therecord.media/fbi-seizure-csam-virtualine"
      - name: "TRM Labs: FBI seizes Virtualine domain"
        url: "https://www.trmlabs.com/resources/blog/fbi-seizes-virtualine-domain-after-provider-led-bulletproof-hosting-sector-in-illicit-inflows"
  - title: "Dane klientów Coinbase wyciekły przez firmę analityczną"
    type: supply-chain
    text:
      - "Coinbase, jedna z największych giełd kryptowalut, podaje, że dane kontaktowe części jej klientów wyciekły z Amplitude, firmy analitycznej, z którą współpracuje. Ucierpieli też inni klienci Amplitude."
      - "Coinbase zapewnia, że jej własne systemy i pieniądze klientów są bezpieczne. Nie podała, ilu osób to dotyczy."
    notes:
      - label: "Narzędzie analityczne"
        text: "Kod na stronie lub w aplikacji, który zapisuje, co robią użytkownicy, żeby firma mogła to analizować. Często dostaje więcej danych osobowych, niż potrzebuje."
      - label: "Skąd 70 tys.?"
        text: "Tę liczbę podał w swoim wpisie szef bezpieczeństwa SlowMist, firmy zajmującej się bezpieczeństwem blockchainów. Coinbase jej nie potwierdziła."
    why: "Adres e-mail lub numer telefonu powiązany z kontem kryptowalutowym to dokładnie to, czego oszuści potrzebują do fałszywych telefonów „z supportu Coinbase”. I nie trzeba było do tego włamywać się do samej Coinbase."
    do: "Sprawdź, co narzędzia analityczne na twojej stronie wysyłają do dostawców. Tam, gdzie się da, przekazuj wewnętrzny identyfikator zamiast prawdziwego adresu czy numeru telefonu."
    sources:
      - name: "Decrypt: Coinbase customer data hit in analytics vendor breach"
        url: "https://decrypt.co/382009/coinbase-customer-data-hit-analytics-vendor-breach-funds-not-impacted"
      - name: "Crowdfund Insider: Coinbase clarifies the Amplitude incident"
        url: "https://www.crowdfundinsider.com/2026/10/320708-coinbase-clarifies-amplitude-data-breach-impacted-only-limited-customer-contact-information/"
  - title: "Hakerzy rozesłali fałszywe alarmy radiacyjne przez ukraińską aplikację „Alarm powietrzny”"
    type: phishing
    text:
      - "„Alarm powietrzny” («Повітряна тривога») to oficjalna aplikacja, z której miliony Ukraińców dowiadują się, że trzeba iść do schronu. W niedzielę około 22:47 nagle ostrzegła przed promieniowaniem, zagrożeniem chemicznym i walkami ulicznymi w Kijowie, zabarwiła na czerwono całą mapę i pokazała wiadomość po rosyjsku o rzekomo lecącej rakiecie Oriesznik."
      - "Siły Powietrzne podały, że zagrożenia nie ma, a aplikację zhakowano. Zespół wyłączył powiadomienia i wstrzymał działanie aplikacji, a około 2:00 przywrócił większość funkcji. Jak atakujący dostali się do środka, oficjalnie na razie nie wiadomo."
    notes:
      - label: "Najciekawsze"
        text: "W obwodzie lwowskim część głośników ulicznych też odtworzyła sygnał „Niebezpieczeństwo radiacyjne”. Władze obwodu tłumaczyły to awarią aplikacji."
      - label: "Powiadomienie push"
        text: "Wiadomość, którą serwer aplikacji wysyła na twój telefon, nawet gdy aplikacja jest zamknięta. Kto kontroluje wysyłkę, ten dociera do wszystkich użytkowników naraz."
    why: "Fałszywy alarm na milionach telefonów sieje panikę, a kolejny, prawdziwy alarm ktoś może zlekceważyć. Każdy system, który w kilka sekund dociera do całego kraju, to łakomy cel."
    do: "Włącz powiadomienia alarmowe w ustawieniach telefonu i nigdy nie klikaj linków w powiadomieniach o alarmie. Jeśli zarządzasz systemem ostrzegania, wymagaj zatwierdzenia przez drugą osobę dla rzadkich alarmów i tych wysyłanych do całego kraju."
    incident: air-alert-app-hack
    sources:
      - name: "Суспільне: Застосунок «Повітряна тривога», ймовірно, зламаний, радіаційної загрози в Україні немає — Повітряні сили"
        url: "https://suspilne.media/1442465-zastosunok-povitrana-trivoga-jmovirno-zlamanij-radiacijnoi-zagrozi-v-ukraini-nemae-povitrani-sili/"
      - name: "Укрінформ: Застосунок «Повітряна тривога» відновлює роботу після зламу"
        url: "https://www.ukrinform.ua/rubric-society/4180346-zastosunok-povitrana-trivoga-prizupiniv-robotu-cerez-zlam.html"
      - name: "РБК-Україна: У Повітряних Силах підтвердили злам додатку, після чого послідували тривожні сповіщення"
        url: "https://www.rbc.ua/rus/news/povitryanih-silah-pidtverdili-zlam-dodatku-1793569071.html"
fun:   # "Fun story of the week": a light, true story from this week that isn't one of the stories above
  title: "Brytyjski wywiad nie może doliczyć się tysięcy pendrive'ów"
  text:
    - "Brytyjska agencja wywiadu elektronicznego GCHQ nie może doliczyć się tysięcy pendrive'ów, dysków zewnętrznych i kart pamięci — ogłosił w czwartek jej organ nadzoru. Na części z nich mogą być dane z inwigilacji."
    - "Organ nadzoru jest „rozczarowany” — jak na brytyjskiego urzędnika to niemal krzyk. GCHQ twierdzi, że nośniki mogły wcale nie zaginąć: stary system ewidencji po prostu źle je śledził."
    - "To nie pierwszy raz: w 2008 roku GCHQ nie mogła znaleźć 35 swoich laptopów, w tym trzech przeznaczonych do informacji ściśle tajnych."
  sources:
    - name: "The Record"
      url: "https://therecord.media/gchq-cannot-account-for-thousands-of-data-devices"
    - name: "Computer Weekly"
      url: "https://www.computerweekly.com/news/366652841/UK-surveillance-watchdog-disappointed-over-government-investigatory-powers-failings"
    - name: "ITPro (2010)"
      url: "https://itpro.com/621412/gchqs-cavalier-attitude-leads-to-35-lost-laptops"
revisions:
  - date: 2026-11-02
    note: "Dodano włamanie do aplikacji „Alarm powietrzny”."
---

W tym tygodniu większość ataków weszła cudzymi drzwiami: przez błąd w PHP, firmę hostingową, usługę logowania i narzędzie analityczne. Można robić wszystko dobrze i i tak oberwać przez dostawcę.
