---
# A weekly digest → lvlulcuma.com/pl/news/2026-w45/ (the folder name is the year and ISO week number)
title: "Rozmowa o pracę za 6 miliardów dolarów i zamrażarki rozgrzane do 50 °C"
dek: "Fałszywa rozmowa o pracę otworzyła drogę do rekordowej kradzieży w Binance, hakerzy rozgrzali zamrażarki w supermarketach w całej Europie, a zbyt długie hasło wpuszczało atakujących na niektóre serwery z Linuksem. Do tego fałszywe e-maile o ataku jądrowym od kijowskiej redakcji, szpiedzy w ukraińskim skrypcie analitycznym i 129 mln dolarów wyłudzonych za pomocą sklonowanych przez AI prezesów."
date: 2026-11-09   # when this digest was published
action: "Znajdź wszystkie sterowniki urządzeń twojej organizacji dostępne z internetu (lodówki, ogrzewanie, kamery), odłącz je od sieci albo schowaj za VPN i zmień domyślne hasła."
stories:
  - title: "Fałszywa rozmowa o pracę otworzyła drogę do największej kradzieży kryptowalut w historii"
    type: phishing
    text:
      - "Binance to jedna z największych giełd kryptowalut na świecie. 29 października atakujący wyprowadzili z jej gorących portfeli ok. 6,34 mld dolarów. To największa odnotowana kradzież kryptowalut. FBI obwinia Koreę Północną."
      - "3 listopada Binance wyjaśniła, jak napastnicy dostali się do środka. We wrześniu z jednym z jej inżynierów skontaktowała się na portalu z ofertami pracy osoba podająca się za dyrektora projektu. Po dwóch fałszywych rozmowach kwalifikacyjnych inżynier dostał prośbę o pobranie „zadania rekrutacyjnego” na służbowy komputer. Zadanie po cichu podmieniło część narzędzia programistycznego na złośliwe oprogramowanie. Stamtąd napastnicy, przez wewnętrzne narzędzie AI, przejęli komputery dwóch inżynierów pracujących przy portfelach."
    notes:
      - label: "Fory dla napastników"
        text: "Już w czerwcu inny inżynier z zespołu portfeli, szukając narzędzia AI do programowania, pobrał podrobiony instalator. Binance to wykryła, ale napastnicy znali już jego stanowisko i to, z kim pracuje."
      - label: "Gorący portfel"
        text: "Portfel kryptowalutowy stale podłączony do internetu, żeby giełda mogła szybko realizować wypłaty. Przez tę wygodę to właśnie on jest zwykle celem."
    why: "Północnokoreańscy hakerzy wciąż wchodzą przez fałszywe oferty pracy, a laptop jednego programisty wystarczył, żeby dotrzeć do miliardów. Binance twierdzi, że w tym roku zablokowała już 57 podejrzanych prób powiązanych z Koreą Północną, zanim ta się powiodła."
    do: "Nigdy nie uruchamiaj zadania od rekrutera na służbowym komputerze, tylko na osobnej maszynie, której nie szkoda. Jeśli twoja firma zatrudnia programistów, uprzedź własny zespół, że fałszywe rozmowy kwalifikacyjne to znany trik."
    incident: binance-crypto-theft
    sources:
      - name: "Binance: Binance Security Incident on October 30, 2026: Update on Preliminary Investigation Findings and Response"
        url: "https://www.binance.com/en/square/post/384314395829022"
      - name: "Fortune: North Korea used LinkedIn, fake job interviews to trick Binance engineer in $6.3 billion hack"
        url: "https://fortune.com/2026/11/03/binance-hack-details-linkedin/"
      - name: "Security Affairs: Binance Hack: How Fake Job Interviews and AI Abuse Led to a $6.34 Billion Attack"
        url: "https://securityaffairs.com/202369/cyber-crime/binance-hack-how-fake-job-interviews-and-ai-abuse-led-to-a-6-34-billion-attack.html"
  - title: "Hakerzy rozgrzewają zamrażarki w supermarketach w całej Europie, także w Polsce"
    type: vulnerability
    text:
      - "W nocy z niedzieli na poniedziałek, 2 listopada, lodówki i zamrażarki w supermarketach w całej Europie zaczęły się nagrzewać. Niektóre w Szwecji zdalnie ustawiono na 50 °C. Sklepy w Belgii, Szwecji, Irlandii, Estonii, Holandii i Luksemburgu wyrzucały żywność albo wycofywały ją ze sprzedaży."
      - "To już druga fala: w październiku w ten sam sposób zaatakowano ok. 700 francuskich supermarketów. W Polsce CERT Polska potwierdził ataki na co najmniej dwa urządzenia chłodnicze, a Auchan zgłosił nieprawidłowości w sterowaniu chłodzeniem w trzech sklepach. W czwartek amerykańskie agencje, w tym CISA i FBI, wezwały wszystkich, którzy mają urządzenia chłodnicze i chłodnie, do zabezpieczenia tych systemów. Wcześniej zaatakowano też trzy placówki francuskiej służby krwi."
    notes:
      - label: "Najciekawsze"
        text: "To wcale nie są wyrafinowane ataki. „Sprawcy skanują masowo sieć, szukają dostępnych urządzeń, testują proste hasła” — mówi szef CERT Polska Marcin Dudek."
      - label: "Sterownik urządzeń chłodniczych"
        text: "Mały komputer, który steruje lodówkami w sklepie: ustawia temperaturę i cykle rozmrażania. Wiele z nich ma stronę WWW do zdalnego podglądu, a jeśli jest ona dostępna z internetu, zalogować się może próbować każdy."
    why: "Nikt nie przyznał się do ataków i nie wiadomo, kto za nimi stoi. Zepsuta żywność to dla sklepów duże straty, a ciepła żywność, której nikt nie zauważy, to ryzyko dla zdrowia: Główny Inspektor Sanitarny ostrzegł, że żywności z zaatakowanych lodówek nie wolno sprzedawać."
    do: "Odłącz od internetu sterowniki lodówek i innych systemów w budynku, zmień domyślne hasła, a zdalny dostęp zostaw tylko przez VPN z uwierzytelnianiem wieloskładnikowym. Incydenty zgłaszaj do CERT Polska."
    incident: supermarket-freezer-attacks
    sources:
      - name: "The Record: Second wave of suspected cyberattacks hits supermarket freezers across Europe"
        url: "https://therecord.media/cyberattack-grocery-freezers-europe"
      - name: "Portal Spożywczy: Pierwszy potwierdzony atak na lodówkę w Polsce. 140 urządzeń było narażonych"
        url: "https://www.portalspozywczy.pl/handel/wiadomosci/ataki-na-lodowki-i-zamrazarki-w-europie-w-polsce-potwierdzono-jeden-incydent,294868.html"
      - name: "Spider's Web: Polskie sklepy też na celowniku hakerów. Pracownicy zauważyli coś niepokojącego"
        url: "https://spidersweb.pl/2026/11/polskie-sklepy-lodowki-atak.html"
      - name: "The Record: Harden cooling systems now, feds warn critical infrastructure operators amid attacks"
        url: "https://therecord.media/cyberattacks-refrigeration-cisa-fbi"
  - title: "Zbyt długie hasło wpuszcza atakujących na niektóre serwery z Linuksem"
    type: vulnerability
    text:
      - "OpenSSH to standardowe narzędzie do zdalnego logowania na serwery z Linuksem. W Alpine Linux, małym systemie popularnym w kontenerach i serwerach w chmurze, błąd nazwany *sshole pozwala każdemu zalogować się na konto bez hasła, wystarczy podać hasło o długości od 257 do 1024 znaków. Działa to przy domyślnych ustawieniach Alpine, o ile choć jedno inne konto ma prawdziwe hasło."
      - "OpenSSH i Alpine wydały poprawki w czwartek, 5 listopada. Dzień później firma Previdian, zajmująca się analizą zagrożeń, poinformowała, że atakujący już wykorzystali błąd i zdobyli uprawnienia roota na jednym z jej serwerów-pułapek."
    notes:
      - label: "Najciekawsze"
        text: "Gdy hasło jest za długie, musl zwraca „*” zamiast wyniku. A „*” to dokładnie to, co Linux zapisuje dla konta bez hasła. OpenSSH porównuje jedno z drugim, widzi zgodność i wpuszcza."
      - label: "musl"
        text: "Mała wersja biblioteki C, czyli podstawowego kodu, z którego korzysta niemal każdy program w Linuksie. Alpine używa musl, a większość innych systemów Linux używa glibc, której błąd nie dotyczy."
    why: "Alpine działa w niezliczonych kontenerach i małych serwerach w chmurze, o których łatwo zapomnieć, kiedy już działają. W niektórych obrazach chmurowych odsłonięte konto może zdobyć uprawnienia roota bez hasła."
    do: "W Alpine uruchom apk upgrade, a potem zrestartuj sshd: sama aktualizacja nie wystarczy. Albo wyłącz logowanie hasłem (PasswordAuthentication no). Potem poszukaj w /var/log/messages wpisów „Accepted password” dla kont bez hasła. Błąd ma numer CVE-2026-123158 i jest poprawiony w OpenSSH 10.6p2."
    incident: openssh-alpine-sshole
    sources:
      - name: "Orca Security: *sshole: OpenSSH Authentication Bypass Gives Attackers Root on Alpine Linux"
        url: "https://orca.security/resources/research/sshole-openssh-authentication-bypass-gives-attackers-root-on-alpine-linux/"
      - name: "The Hacker News: OpenSSH Issues Emergency Fix for Flaw Letting Long Passwords Bypass SSH Auth on Alpine Linux"
        url: "https://thehackernews.com/2026/11/openssh-issues-emergency-fix-for-flaw.html"
      - name: "SecurityWeek: OpenSSH Rushes Patches for 'SSHole' Authentication Bypass"
        url: "https://www.securityweek.com/openssh-rushes-patches-for-sshole-authentication-bypass/"
      - name: "The Hacker News: Hackers Target OpenSSH SSHole Flaw Within Hours of Disclosure, Gain Root on Honeypot"
        url: "https://thehackernews.com/2026/11/hackers-exploited-openssh-sshole-flaw.html"
  - title: "Czytelnicy Kyiv Independent dostali fałszywe e-maile o ataku jądrowym"
    type: breach
    text:
      - "The Kyiv Independent to ukraińskie medium, którego czytelnicy są w większości za granicą. Około 1:00 czasu kijowskiego w środę, 4 listopada, część czytelników dostała e-mail po rosyjsku z wymysłem, że Zełenski wystrzelił głowicę jądrową na Kijów. Po południu przyszły kolejne fałszywe wiadomości, po rosyjsku i po angielsku, a podobne wpisy pojawiły się na stronie."
      - "Redakcja podaje, że hakerzy dostali się do systemu zarządzania treścią strony i do jednej z usług, przez które wysyła newslettery. Wpisy usunięto, a redakcja pracuje ze specjalistami od cyberbezpieczeństwa; nie podała, jak napastnicy dostali się do środka. Redaktorka naczelna Olga Rudenko oświadczyła, że wszystko, co wiadomo, wskazuje na rosyjską operację."
    notes:
      - label: "Trzy dni wcześniej"
        text: "1 listopada ukraińska aplikacja „Alarm powietrzny” pokazała fałszywe ostrzeżenia o promieniowaniu. Redakcja zwróciła uwagę na podobieństwa, ale nikt nie wykazał, że oba ataki są powiązane."
      - label: "System zarządzania treścią (CMS)"
        text: "Panel administracyjny, w którym pracownicy strony piszą i publikują artykuły. Kto się do niego dostanie, może opublikować cokolwiek w imieniu strony."
    why: "Fałszywa wiadomość od prawdziwego, zaufanego nadawcy przekonuje znacznie lepiej niż przypadkowy spam. Kilka dni po włamaniu do „Alarmu powietrznego” to kolejna próba siania paniki kanałem, któremu ludzie ufają."
    do: "Jeśli wysyłasz newsletter, zabezpiecz usługę wysyłkową i CMS uwierzytelnianiem wieloskładnikowym i sprawdź, kto ma dostęp. Jeśli dostaniesz alarmujący e-mail, sprawdź informację na stronie redakcji lub w oficjalnych kanałach, zanim cokolwiek zrobisz."
    incident: kyiv-independent-hack
    sources:
      - name: "The Kyiv Independent: Kyiv Independent hit by suspected Russian cyberattack"
        url: "https://kyivindependent.com/kyiv-independent-hit-by-suspected-russian-cyberattack/"
      - name: "The Record: Ukrainian news outlet Kyiv Independent hit by suspected Russian cyberattack"
        url: "https://therecord.media/ukraine-kyiv-independent-cyberattack"
      - name: "Детектор медіа: Хакери зламали одну з систем The Kyiv Independent і розіслали читачам лист про «запуск ядерної боєголовки на Київ»"
        url: "https://detector.media/infospace/article/253748/2026-11-04-khakery-zlamaly-odnu-z-system-the-kyiv-independent-i-rozislaly-chytacham-lyst-pro-zapusk-yadernoi-boiegolovky-na-kyiv/"
  - title: "Szpiedzy ukryli exploity na telefony za ukraińskim skryptem analitycznym"
    type: espionage
    text:
      - "W środę firma Sekoia, zajmująca się cyberbezpieczeństwem, poinformowała, że hakerzy, których łączy z APT29, grupą powiązaną z rosyjskim państwem, wstawili swój kod do Plerdy, ukraińskiego narzędzia analityki internetowej, które ładują tysiące stron, głównie ukraińskich. Przez tydzień, od 27 sierpnia do 3 września, odwiedzający te strony ładowali też skrypt napastników. Włamali się też na inne strony, m.in. amerykańskiego stowarzyszenia branży chemicznej i czeskiej partii politycznej."
      - "Skrypt sprawdzał telefon każdego odwiedzającego. Starsze iPhone'y i telefony z Androidem dostawały exploity, które kradły pliki cookie i zapisane loginy, a na niektórych iPhone'ach prawie wszystko: wiadomości, pocztę, zdjęcia i dane o lokalizacji. Wszystkie użyte błędy były poprawione, zanim ataki się zaczęły, więc zaktualizowane telefony były bezpieczne."
    notes:
      - label: "Sprytny trik"
        text: "Zamiast włamywać się do każdego celu osobno, zmienili jeden skrypt, który ładuje wiele stron. A odwiedzający bez ekranu dotykowego albo z niemożliwym rozmiarem ekranu dostawali po prostu pustą odpowiedź."
      - label: "Atak przy wodopoju (watering hole)"
        text: "Zamiast atakować ludzi bezpośrednio, napastnicy infekują strony, które ich cele prawdopodobnie odwiedzają, i czekają."
    why: "Na każdy użyty tu błąd była już poprawka, więc cały atak działał tylko na telefonach bez aktualizacji. Stare służbowe telefony i telefony, którymi nikt nie zarządza, to dokładnie to, czego szukają takie zestawy exploitów."
    do: "Zaktualizuj telefony już teraz i sprawdź, czy telefony służbowe nie utknęły na starych wersjach iOS lub Androida. Jeśli twoja strona ładuje skrypty innych firm, prowadź ich listę i wiedz, kto może je zmienić."
    incident: apt29-plerdy-watering-hole
    sources:
      - name: "Sekoia: Poisoned Source: APT29 watering holes target mobile devices with n-day exploits"
        url: "https://www.sekoia.com/blog/poisoned-source-apt29-watering-holes-targets-mobile-devices-with-n-day-exploits"
      - name: "The Record: Russian state-linked hackers target iPhone, Android devices in zero-click espionage campaign"
        url: "https://therecord.media/russia-hackers-smartphone-cyberattacks"
      - name: "The Hacker News: APT29-Linked Hackers Hijack Web Analytics Script to Deliver iOS and Android Exploits"
        url: "https://thehackernews.com/2026/11/apt29-linked-hackers-hijack-web.html"
  - title: "Prezesi sklonowani przez AI i fałszywi prawnicy: trzech oskarżonych o wyłudzenie 129 mln dolarów"
    type: takedown
    text:
      - "W czwartek prokuratorzy w Nowym Jorku oskarżyli trzech mężczyzn o to, że za pomocą AI podszywali się pod szefów firm i prawników i nakłonili pracowników do przelania ponad 129 mln dolarów. Zatrzymano ich w Hiszpanii i Wielkiej Brytanii między czerwcem a wrześniem; czekają na ekstradycję do USA."
      - "Według prokuratorów pracownik, który mógł zatwierdzać duże płatności, dostawał wiadomość rzekomo od prezesa o tajnej transakcji, a potem telefon, w którym AI podrabiała głos, a czasem i twarz szefa. Następnie „prawnik” z dużej międzynarodowej kancelarii podawał numer konta. Wśród ofiar są sieci szpitali w Missouri i Kalifornii oraz bank na Rhode Island."
    notes:
      - label: "Najciekawsze"
        text: "Jeden z oskarżonych miał według prokuratorów odręczny scenariusz zatytułowany „Lawyer Call” („Rozmowa z prawnikiem”). Największa pojedyncza strata to ok. 11,6 mln dolarów w brytyjskiej firmie fintech."
      - label: "Deepfake"
        text: "Fałszywe nagranie audio lub wideo zrobione przez AI, które kopiuje głos albo twarz prawdziwej osoby. Tutaj, według prokuratorów, używano go na żywo w rozmowach telefonicznych i wideo."
    why: "Znajomy głos w telefonie był kiedyś dobrym dowodem. Teraz da się go podrobić, więc zatrzyma to tylko procedura płatności, która nie ufa samej rozmowie."
    do: "Potwierdzaj każdą nietypową lub pilną płatność innym, znanym ci kanałem, na przykład oddzwoń pod numer z własnej bazy. Duże przelewy niech zatwierdzają dwie osoby."
    sources:
      - name: "CyberScoop: Authorities accuse trio of using AI deepfakes to defraud $129M from businesses"
        url: "https://cyberscoop.com/ai-deepfakes-impersonate-ceo-lawyer-defraud-companies/"
      - name: "CBS News: 3 allegedly used AI to steal some $129 million from companies by impersonating executives and lawyers"
        url: "https://www.cbsnews.com/news/3-ai-steal-129-million-companies-impersonating-executives-lawyers/"
      - name: "The Record: CEO-spoofing scammers used AI to help steal more than $100 million, feds say"
        url: "https://therecord.media/ceo-spoofing-scammers-charged"
fun:   # "Fun story of the week": a light, true story from this week that isn't one of the stories above
  title: "Adres internetowy Białego Domu do wynajęcia"
  text:
    - "Usługi „residential proxy” sprzedają dostęp do cudzych łączy internetowych — zwykle przez aplikację albo gadżet, który po cichu udostępnia sieć. Nowojorska firma Layer3 Intel, która je śledzi, znalazła wśród ich punktów wyjścia sześć adresów Białego Domu."
    - "Od 5 października do 3 listopada te adresy pojawiły się 236 razy w 28 usługach proxy, głównie wieczorem czasu wschodniego USA. Według Layer3 to wskazuje na zainfekowane urządzenie jakiejś osoby, a nie na serwer."
    - "Wynajęcie takiego punktu wyjścia kosztuje kilka dolarów. Nikt nie wykazał, że do jakiegokolwiek systemu Białego Domu ktoś się włamał, a Biały Dom nie skomentował sprawy."
  sources:
    - name: "This Week in Security"
      url: "https://this.weekinsecurity.com/researchers-detect-residential-proxies-on-the-white-house-network/"
    - name: "Infosecurity Magazine"
      url: "https://www.infosecurity-magazine.com/news/white-house-residential-proxy-exits/"
---

W tym tygodniu napastnicy rzadko potrzebowali czegoś sprytnego: fałszywej oferty pracy, lodówki w internecie z prostym hasłem, zapomnianego serwera z Alpine, telefonu bez aktualizacji, rozmowy głosem szefa. Słabym punktem było zwykle coś, czego nikt nie pilnował.
