---
# A weekly digest → lvlulcuma.com/pl/news/2026-w46/ (the folder name is the year and ISO week number)
title: "Gorące lodówki, zamrożone miliardy i błąd znaleziony z pomocą AI"
dek: "Francja obwiniła Iran o ataki na lodówki w supermarketach, błąd w Outlooku znaleziony z pomocą AI okazał się już atakowany, a USA zamroziły 1,2 mld dolarów z łupu z Binance. Do tego do 37,6 mln rekordów z Nitori, atak ransomware na Uniwersytet Vanderbilta i zhakowana ukraińska agencja informacyjna."
date: 2026-11-16   # when this digest was published
action: "Sprawdź, czy listopadową aktualizację zainstalował sam Office, a nie tylko Windows: poprawka błędu w Outlooku, który już jest atakowany, przychodzi wyłącznie z aktualizacjami Office."
stories:
  - title: "Francja obwinia irańskich Strażników Rewolucji o ataki na lodówki w supermarketach"
    type: espionage
    text:
      - "W poniedziałek 9 listopada Francja oficjalnie obwiniła irański Korpus Strażników Rewolucji Islamskiej o październikowe ataki na urządzenia chłodnicze w ok. 700 francuskich sklepach spożywczych, głównie supermarketach. Raport francuskich służb cyberbezpieczeństwa i wywiadu wskazuje Shahid Kaveh, hakerską jednostkę Strażników. Sabotaż zepsuł żywność i wywołał co najmniej 15 pożarów."
      - "Minister spraw zagranicznych Jean-Noël Barrot nazwał atak bezprecedensowym pod względem skali i agresji. Francja wezwała ambasadora Iranu i będzie zabiegać o sankcje UE. Paryska prokuratura wszczęła śledztwo wobec szefa jednostki i dwóch jego zastępców i wystąpiła o międzynarodowe nakazy aresztowania. Następnego dnia irańskie MSZ odrzuciło oskarżenia. Francuski raport nie obejmuje fali ataków z początku listopada, która dotknęła inne kraje, w tym Polskę."
    notes:
      - label: "Dowody"
        text: "Śledczy wskazują na infrastrukturę atakujących, sposób włamania zgodny z innymi atakami tej jednostki i ślady języka perskiego. Ci sami hakerzy atakowali też sprzęt w kilku małych elektrowniach wodnych, z „umiarkowanymi” skutkami."
      - label: "Strażnicy Rewolucji (IRGC)"
        text: "Odrębna gałąź irańskich sił zbrojnych, działająca obok regularnej armii. Do jej jednostek cybernetycznych należy Shahid Kaveh, którą USA łączą z atakami na sterowniki przemysłowe w amerykańskich wodociągach w 2023 roku."
    why: "To pierwszy raz, gdy rząd wskazał sprawców ataków na lodówki, a Francja nazywa to pierwszym cybersabotażem na dużą skalę na swoim terytorium. Sprzęt sklepowy wystawiony do internetu staje się celem państwowych hakerów, a nie tylko wandali."
    do: "Odłącz od internetu sterowniki urządzeń chłodniczych i innych systemów budynku, zmień domyślne hasła i zezwalaj na zdalny dostęp tylko przez VPN z uwierzytelnianiem wieloskładnikowym."
    incident: supermarket-freezer-attacks
    sources:
      - name: "The Record: France blames Iran for fridge cyberattacks, says some caused fires"
        url: "https://therecord.media/france-blames-iran-for-fridge-cyberattacks"
      - name: "WUNC (NPR): Iran denies it was behind cyber fridge attacks targeting France"
        url: "https://www.wunc.org/2026-11-09/iran-denies-it-was-behind-cyber-fridge-attacks-targeting-france"
      - name: "Khaleej Times (Reuters): France accuses IRGC of cyberattack on supermarket fridges, summons Iran ambassador"
        url: "https://www.khaleejtimes.com/world/france-accuses-irgc-cyberattack-supermarket-fridges"
  - title: "Microsoft poprawia 1093 błędy, a jedną lukę w Outlooku już wykorzystywano w atakach"
    type: vulnerability
    text:
      - "We wtorek 10 listopada Microsoft wydał poprawki dla 1093 błędów bezpieczeństwa — to drugi miesiąc z rzędu, gdy jest ich ponad tysiąc. Rok temu firma poprawiała ok. stu miesięcznie. Według Microsoftu znajdować tyle pomagają narzędzia AI."
      - "Jedną z luk atakujący już wykorzystywali: błąd w klasycznej aplikacji Outlook dla Windows. Gdy ktoś otworzy spreparowany plik wiadomości, Outlook bez zwykłego ostrzeżenia łączy się z serwerem atakującego i przekazuje przekształconą postać hasła użytkownika do Windows. Wśród osób, którym przypisano znalezienie luki, jest Benoît Sevens z Anthropic, który korzystał z modelu AI tej firmy, Claude. Microsoft nie ujawnił, kto wykorzystywał lukę ani przeciwko komu."
    notes:
      - label: "W liczbach"
        text: "Microsoft poprawił w tym roku już ponad 5100 błędów bezpieczeństwa — znacznie więcej niż w którymkolwiek wcześniejszym roku. A z 1093 listopadowych wiadomo o atakach tylko na ten jeden."
      - label: "Skrót NTLM"
        text: "NTLM to stary sposób, w jaki Windows udowadnia innemu komputerowi, kim jesteś, za pomocą przekształconej wersji hasła (skrótu, ang. hash). Kto go przechwyci, może próbować go złamać albo przekazać dalej, by zalogować się jako ty gdzie indziej."
    why: "Wykradzionym skrótem można otworzyć inne systemy firmy w imieniu użytkownika. Microsoft ocenia lukę tylko jako „umiarkowaną”, więc łatwo ją pominąć, ale to jedyna w tym miesiącu, o której wiadomo, że atakujący z niej korzystają."
    do: "Zaktualizuj Office, nie tylko Windows: poprawka przychodzi z aktualizacjami Office (np. Office LTSC 2021, kompilacja 16.0.14334.21048). Zablokuj wychodzący ruch SMB (port TCP 445) do internetu. Luka to CVE-2026-124194; CISA dała amerykańskim urzędom czas do 24 listopada."
    incident: outlook-ntlm-zero-day
    sources:
      - name: "Krebs on Security: Microsoft Fixes Nearly 1,100 Security Vulnerabilities"
        url: "https://krebsonsecurity.com/2026/11/microsoft-fixes-nearly-1100-security-vulnerabilities/"
      - name: "Tenable: Microsoft's November 2026 Patch Tuesday addresses 1093 CVEs (CVE-2026-124194)"
        url: "https://www.tenable.com/blog/microsoft-november-2026-patch-tuesday-addresses-1093-cves-cve-2026-124194"
      - name: "The Record: Microsoft's Patch Tuesday surpasses 1,000 bugs for second month in a row"
        url: "https://therecord.media/patch-tuesday-microsoft-1000-bugs-again"
      - name: "The Hacker News: Microsoft Patches 1,259 Flaws, Including Exploited Outlook Bug That May Expose NTLMv2 Hashes"
        url: "https://thehackernews.com/2026/11/microsoft-patches-1259-flaws-including.html"
  - title: "USA zamrażają 1,2 mld dolarów z łupu z Binance i wyłączają fałszywe wideorozmowy Korei Północnej"
    type: takedown
    text:
      - "W czwartek 12 listopada Departament Sprawiedliwości USA ogłosił, że sąd pozwolił mu zająć lub zablokować ponad 1,2 mld dolarów w kryptowalutach skradzionych z Binance w październiku. To największa odnotowana kradzież kryptowalut. Z pomocą firm kryptowalutowych zamrożono łącznie ponad 2,7 mld dolarów. FBI obwinia TraderTraitor, północnokoreańską grupę hakerską. Tego samego dnia Binance ogłosiła, że pokryła z własnych środków wszystkie 6,34 mld dolarów strat klientów."
      - "FBI wyłączyło też serwery „FaceStealer”, osobnego północnokoreańskiego procederu, który w ciągu 18 miesięcy ukradł ponad 400 mln dolarów w kryptowalutach. Ofiary często dostawały zaproszenie na spotkanie od znajomej osoby, której konto przejęto. Podczas fałszywej rozmowy na Zoomie lub w Teams widziały nagrania wcześniejszych ofiar i słyszały prośbę, by naprawić „problem z dźwiękiem”. „Naprawa” instalowała złośliwe oprogramowanie, które po cichu nagrywało też je, na potrzeby kolejnej rundy."
    notes:
      - label: "Najciekawsze"
        text: "Każda ofiara stawała się przynętą: jej nagranie z kamerki pokazywano kolejnej, więc rozmowa wyglądała na pełną prawdziwych ludzi. FBI zajęło ponad 900 takich nagrań. „Deepfake musi być tylko na tyle dobry, by uchodzić za obraz z kamerki” — ostrzega FBI."
      - label: "Zamrożone kryptowaluty"
        text: "Stablecoinami, takimi jak USDT i USDC, zarządzają firmy Tether i Circle, które mogą zablokować tokeny pod danym adresem. Dlatego zamrożony łup to głównie stablecoiny, a ok. 2,8 mld dolarów, głównie w etherze i bitcoinie, wciąż jest w portfelach złodziei — podaje firma analityczna Elliptic."
    why: "Skradzione kryptowaluty rzadko udaje się odzyskać, więc zamrożenie takiej kwoty to wyjątek. A FaceStealer pokazuje, że znajoma twarz na wideorozmowie nie jest już dowodem: według FBI nabrali się doświadczeni programiści i specjaliści od bezpieczeństwa, a złośliwe oprogramowanie trafiło nawet na komputer opiekuna biblioteki JavaScript pobieranej dziesiątki milionów razy w tygodniu, zanim je wykryto."
    do: "Dołączaj do rozmów tylko przez oficjalną aplikację Zoom lub Teams, nigdy nie wklejaj poleceń ani nie instaluj „aktualizacji”, by naprawić dźwięk w trakcie rozmowy, a nieoczekiwane zaproszenia sprawdzaj u tej osoby innym kanałem. Ofiary mogą to zgłosić na ic3.gov ze słowem kluczowym FaceStealer."
    incident: binance-crypto-theft
    sources:
      - name: "U.S. Department of Justice: Justice Department Announces Actions to Disrupt North Korea's Massive Theft of Cryptocurrency"
        url: "https://www.justice.gov/opa/pr/justice-department-announces-actions-disrupt-north-koreas-massive-theft-cryptocurrency"
      - name: "FBI FLASH: North Korean Hackers Use Secretly Recorded Webcam Library of 900+ Tech Workers in $400M 'FaceStealer' Crypto Theft Scheme"
        url: "https://www.ic3.gov/CSA/2026/261112.pdf"
      - name: "The Record: Feds announce seizure of $1.2 billion from Binance theft; also takedown of 'FaceStealer' tools"
        url: "https://therecord.media/stolen-binance-crypto-recovered-doj-facestealer-disrupted"
      - name: "Elliptic: How North Korea is laundering the $6.4 billion stolen from Binance"
        url: "https://elliptic.co/insights/how-north-korea-is-laundering-the-6-4-billion-stolen-from-binance/"
  - title: "Hakerzy włamali się do Nitori, mogło wyciec do 37,6 mln rekordów klientów"
    type: breach
    text:
      - "Nitori to japońska sieć sklepów z meblami i artykułami do domu, która ma 879 sklepów w Japonii. W poniedziałek 9 listopada firma poinformowała, że ktoś włamał się do jednego z jej systemów i że mogło wyciec do 37,62 mln rekordów z danymi osobowymi. To m.in. imiona i nazwiska, adresy, numery telefonów, adresy e-mail, daty urodzenia i płeć członków programu klienckiego, dane kontaktowe klientów firmowych oraz zamówienia internetowe."
      - "Nitori wykryła włamanie 6 listopada i je zablokowała. Logi wskazują, że atakujący mogli być w środku już od połowy lub końca października. Według firmy wśród danych nie ma haseł ani numerów kart. Nie podała, jak napastnicy się dostali ani czy chodzi o ransomware, a nikt nie przyznał się do ataku."
    notes:
      - label: "W liczbach"
        text: "37,62 mln to liczba rekordów, nie osób: jeden klient może pojawić się więcej niż raz. Dla porównania aplikacja Nitori miała w marcu 2026 roku ok. 25 mln użytkowników."
      - label: "Analiza logów"
        text: "Przeglądanie zapisów, które systemy prowadzą o tym, kto co i kiedy robił. Tak Nitori ustaliła, że atakujący mogli być w środku tygodniami, zanim ktokolwiek to zauważył."
    why: "Imiona, adresy i historia zamówień to dokładnie to, czego oszuści potrzebują do wiarygodnych fałszywych wiadomości od Nitori albo firmy kurierskiej. Dane kontaktowe klientów firmowych przydają się też do fałszywych faktur."
    do: "Jeśli kupujesz w Nitori, spodziewaj się fałszywych e-maili, SMS-ów i telefonów w jej imieniu: firma zapewnia, że nigdy nie prosi o hasła, numery kart ani PIN-y. Jeśli przechowujesz dane klientów, ustaw alerty na nietypowo duże odczyty lub eksporty tych danych."
    sources:
      - name: "ニトリ: 当社システムへの不正アクセスによる個人情報漏えいの可能性に関するお詫びとお知らせ"
        url: "https://www.nitori-net.jp/ec/notices/info261109/"
      - name: "BleepingComputer: Japanese furniture giant Nitori says hackers stole 37.6M customer records"
        url: "https://www.bleepingcomputer.com/news/security/japanese-furniture-giant-nitori-says-hackers-stole-376m-customer-records/"
      - name: "Impress Watch: ニトリ、最大3762万件の個人情報流出の恐れ　不正アクセス"
        url: "https://www.watch.impress.co.jp/docs/news/2154952.html"
      - name: "innovatopia: ニトリに不正アクセス、最大3,762万件の個人情報が流出の可能性 パスワードとカードは対象外"
        url: "https://innovatopia.jp/cyber-security/cyber-security-news/119884/"
  - title: "Uniwersytet Vanderbilta wyłącza komputery, a gang ransomware twierdzi, że ma milion numerów ubezpieczenia społecznego"
    type: ransomware
    text:
      - "W poniedziałek 9 listopada Uniwersytet Vanderbilta w Nashville w stanie Tennessee kazał studentom i pracownikom wyłączyć uczelniane komputery i odłączyć się od kampusowego Wi-Fi z powodu „aktywnego incydentu cyberbezpieczeństwa”. Na ekranach pojawiły się żądania okupu, a niektóre komputery odtwarzały nagrany głos: „Zostaliście przejęci przez BYOD”."
      - "BYOD, gang ransomware działający od września, twierdzi, że przejął sieć i ukradł ponad milion numerów ubezpieczenia społecznego (SSN) oraz dane studentów i pracowników. Uczelnia nie potwierdziła, czy i co wyciekło. Wi-Fi, poczta i narzędzia do nauki wróciły w ciągu doby, a wszyscy musieli zmienić hasła, ale OneDrive i Box 15 listopada wciąż nie działały. Centrum medyczne Vanderbilta, osobna organizacja, podaje, że jego systemy nie ucierpiały."
    notes:
      - label: "Najciekawsze"
        text: "W październiku ten sam gang przyznał się do ataku na szpital Uniwersytetu Nowego Meksyku, który zakłócił leczenie pacjentów. Potem przeprosił i zaproponował pacjentom do 2500 dolarów na osobę, ale dane zatrzymał."
      - label: "Kontroler domeny"
        text: "Serwer, który przechowuje konta i hasła sieci Windows. Kto go kontroluje, zwykle może dotrzeć do każdego komputera w organizacji. BYOD twierdzi, że przejął kontroler domeny uczelni."
    why: "Jeśli BYOD mówi prawdę, wśród danych są numery ubezpieczenia społecznego, których nie da się po prostu zmienić jak hasła. Uczelnia mówi, że pełne przywrócenie systemów może potrwać tygodnie, a do sądu trafił już pozew zbiorowy."
    do: "Jeśli studiujesz lub pracujesz na Vanderbilcie, zmień hasło zgodnie z prośbą uczelni, odrzucaj prośby MFA, których nie inicjujesz, i ufaj tylko oficjalnym kanałom. Każdy w USA może bezpłatnie zablokować swoją historię kredytową w Equifax, Experian i TransUnion."
    sources:
      - name: "Vanderbilt University: Active Cybersecurity Incident Updates"
        url: "https://news.vanderbilt.edu/2026/11/09/nov-9-active-cybersecurity-incident-updates/"
      - name: "BleepingComputer: Vanderbilt University hit in BYOD ransomware attack, data theft claimed"
        url: "https://www.bleepingcomputer.com/news/security/vanderbilt-university-hit-in-byod-ransomware-attack-data-theft-claimed/"
      - name: "The Register: Ransomware threat blares from Vanderbilt University computers during cyberattack"
        url: "https://www.theregister.com/cyber-crime/2026/11/10/ransomware-threat-blares-from-vanderbilt-university-computers-during-cyberattack/5308687"
      - name: "The Vanderbilt Hustler: LIVE COVERAGE: Vanderbilt experiencing cyberattack, agencies responding"
        url: "https://vanderbilthustler.com/2026/11/09/breaking-vanderbilt-wi-fi-networks-reportedly-hacked-vuit-yet-to-confirm/"
      - name: "Gizmodo: Hacker Group Claims UNM Hospital Cyberattack, Then Apologizes and Offers Patients $2,500"
        url: "https://gizmodo.com/hacker-group-claims-unm-hospital-cyberattack-then-apologizes-and-offers-patients-2500-2000832169"
  - title: "Hakerzy podmienili stronę ukraińskiej agencji państwowej Ukrinform i przejęli jej konto na X"
    type: accounts
    text:
      - "W środę 11 listopada stronę główną Ukrinformu, państwowej agencji informacyjnej Ukrainy, zastąpiono antyukraińskim napisem, przekreśloną ukraińską flagą i linkiem do kanału na Telegramie. Konto agencji na X przemianowano i dodano do opisu prorosyjskie hasło."
      - "Agencja usunęła obraz w ciągu kilku minut i przełączyła stronę w tryb prac technicznych; następnego dnia po południu strona znów działała. Ukrinform współpracuje z Państwową Służbą Łączności Specjalnej i Ochrony Informacji oraz ze służbą bezpieczeństwa SBU. Dyrektor generalny agencji Serhij Czerewaty mówi, że stoi za tym rosja i że próby włamań zdarzają się niemal co miesiąc. Nikt nie ujawnił, jak napastnicy się dostali."
    notes:
      - label: "Pracowity miesiąc"
        text: "To kolejny w tym miesiącu atak na kanały, którym w Ukrainie się ufa: fałszywe alarmy w aplikacji „Alarm powietrzny” 1 listopada, fałszywe e-maile od The Kyiv Independent 4 listopada i z newslettera „Ukraińskiej Prawdy” 6 listopada. Nikt nie wykazał związku między tymi atakami."
      - label: "Defacement"
        text: "Podmiana stron internetowych przez atakujących na własne. Nie oznacza jeszcze kradzieży danych, ale pokazuje, że mogli zmieniać stronę."
    why: "Państwowej agencji ufają czytelnicy i inne redakcje, więc przejęta strona lub konto szybko roznosi wrogi przekaz. Ukrinform mówi, że atakujący stale doskonalą swoje metody."
    do: "Jeśli prowadzisz redakcję lub publiczne konta, chroń panel administracyjny strony i media społecznościowe uwierzytelnianiem wieloskładnikowym odpornym na phishing, ogranicz listę administratorów i zaplanuj, jak szybko wyłączyć stronę. Czytelnicy: sprawdzaj dziwne posty w innych kanałach redakcji."
    sources:
      - name: "The Kyiv Independent: Hackers target Ukraine's state news agency Ukrinform, replace website with anti-Ukrainian messages"
        url: "https://kyivindependent.com/hackers-target-ukraines-state-news-agency-ukrinform-replace-website-with-anti-ukrainian-messages/"
      - name: "Детектор медіа: Хакери з ночі атакують ресурси Укрінформу"
        url: "https://detector.media/infospace/article/253925/2026-11-11-khakery-z-nochi-atakuyut-resursy-ukrinformu/"
      - name: "Укрінформ: Сайт Укрінформу поновлює роботу після кібератаки"
        url: "https://www.ukrinform.ua/rubric-society/4183861-sajt-ukrinformu-ponovlue-robotu-pisla-kiberataki.html"
      - name: "IMI: Ukrinform website targeted in cyberattack"
        url: "https://imi.org.ua/en/russias-crimes/rosiyani-atakuvali-sajt-ukrinformu"
fun:   # "Fun story of the week": a light, true story from this week that isn't one of the stories above
  title: "Godzina snu mniej, więcej kliknięć w phishing"
  text:
    - "Neurobiolodzy z Uniwersytetu Kalifornijskiego w Irvine przeanalizowali ćwiczebne e-maile phishingowe, które duża amerykańska instytucja co kilka miesięcy wysyła ponad 11 000 pracowników."
    - "W poniedziałek po wiosennej zmianie czasu w 2026 roku, która zabrała ludziom do godziny snu, w link kliknęło 17,76% osób. W poniedziałek przed zmianą — 15,56%. Według badaczy szansa, że ktoś da się nabrać, wzrosła o 13%. Ich artykuł ukazał się w PNAS 9 listopada."
    - "Kierownik badania Eitan Schechtman ma nadzieję, że pracodawcy zachowają szczególną ostrożność przy zmianie czasu, w święta i podczas dużych wydarzeń sportowych. I dodaje: „Lepszy sen prawdopodobnie prowadzi do lepszych decyzji”."
  sources:
    - name: "EurekAlert! (UC Irvine)"
      url: "https://www.eurekalert.org/news-releases/1150614"
    - name: "Popular Science"
      url: "https://www.popsci.com/health/sleep-loss-scam-daylight-saving-time/"
---

W tym tygodniu napastnicy pożyczali cudze zaufanie: sterownik lodówki zostawiony w internecie, plik wiadomości wyglądający jak każdy inny, twarz znajomego na wideorozmowie, strona główna agencji informacyjnej. Dobre wieści przyszły od obrońców: model AI pomógł znaleźć błąd w Outlooku, a szybkie blokady nie pozwoliły zniknąć miliardom dolarów w skradzionych kryptowalutach.
