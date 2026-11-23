---
# An incident breakdown → lvlulcuma.com/pl/news/incidents/ukraine-fbi-extortion-arrests/
title: "Ukraina i FBI rozbijają grupę „pomocy technicznej”, która zebrała 40,5 mln dolarów okupów"
dek: "18 listopada 2026 roku ukraińska Prokuratura Generalna i Policja Narodowa poinformowały, że wspólnie z FBI rozbiły międzynarodową grupę, która dzwoniła do pracowników firm, podając się za dział IT, włamywała się do sieci, kradła dane i szyfrowała pliki; co najmniej 28 firm zapłaciło ponad 40,5 mln dolarów, a czterech kluczowych członków trafiło do aresztu."
type: takedown
status: confirmed       # unfolding | confirmed | report (the victim or investigators published a full report)
date: 2026-11-18        # when it became public
published: 2026-11-23   # when this breakdown was published
who: "Grupa wymuszeń licząca co najmniej 27 osób z Ukrainy, Kazachstanu, rosji i innych krajów, część sieci ponad 60 osób w ośmiu jurysdykcjach, do której należą byli członkowie Conti. Jej ofiarami było co najmniej 28 firm, kilka z nich w USA."
sector: "Ofiary głównie z branży naftowo-gazowej, farmaceutycznej, produkcji, logistyki, finansów i infrastruktury krytycznej"
entry: "Telefony do pracowników od fałszywej „pomocy technicznej”, częściowo zautomatyzowane głosami wygenerowanymi przez AI. Dokumenty sądowe wspominają też strony phishingowe udające firmowe logowanie do VPN, podszyte numery telefonów oraz TeamViewera i AnyDeska."
impact: "Co najmniej 28 firm zapłaciło ponad 40,5 mln dolarów (około 1,8 mld hrywien) okupu po kradzieży danych, zaszyfrowaniu plików i paraliżu działalności. Czterech kluczowych podejrzanych jest w areszcie; grozi im do 15 lat więzienia."
timeline:
  - date: 2024-08
    text: "Według dokumentów sądowych: grupa atakuje amerykańskiego producenta ropy Warren Oil, kradnie 1,4 TB danych i po żądaniu 10 mln dolarów dostaje około 5 mln dolarów w bitcoinach. Atak rozlewa się na inne firmy z tej samej grupy."
  - date: 2024-10
    text: "Według dokumentów sądowych: zaatakowana zostaje firma usług energetycznych Newpark Resources, która później płaci 1,5 mln dolarów po żądaniu 10 mln. Mniej więcej w tym samym czasie producent opon Maxxis International-USA traci 142 GB danych."
  - date: 2026-06
    text: "Według dokumentów sądowych: po ataku w maju i czerwcu firma usług medycznych Quantum Health płaci 5 mln dolarów w kryptowalutach przy żądaniu 15 mln."
  - date: 2026-11-18
    text: "Prokuratura Generalna i Policja Narodowa ogłaszają sprawę: 66 przeszukań w Kijowie i 11 obwodach wspólnie z FBI, czterech kluczowych członków w areszcie, podejrzenia udziału w organizacji przestępczej i ingerencji w systemy informatyczne."
  - date: 2026-11-18
    text: "Pełniący obowiązki szefa Policji Narodowej Maksym Cuckiridze mówi portalowi Censor.NET, że grupa miała własną platformę z wiadomościami głosowymi wygenerowanymi przez AI do automatyzacji telefonów i że zapłaciło co najmniej 28 firm."
attack:
  - tactic: "Dostęp początkowy"
    id: T1566.004
    name: "Phishing: Spearphishing Voice"
    text: "Dzwonili do pracowników, podając się za dział IT, czasem przez platformę odtwarzającą wiadomości głosowe wygenerowane przez AI."
  - tactic: "Dostęp do poświadczeń"
    id: T1111
    name: "Multi-Factor Authentication Interception"
    text: "W przypadku Warren Oil pracownik wpisał dane logowania na stronie phishingowej udającej firmowy VPN, a napastnicy zdobyli też kod uwierzytelniania dwuskładnikowego."
  - tactic: "Dowodzenie i kontrola (C2)"
    id: T1219.002
    name: "Remote Access Tools: Remote Desktop Software"
    text: "Namawiali pracowników do zainstalowania TeamViewera lub AnyDeska, a potem wchodzili przez nie do sieci."
  - tactic: "Wpływ"
    id: T1486
    name: "Data Encrypted for Impact"
    text: "Szyfrowali pliki, żeby sparaliżować firmę. Dokumenty sądowe, na które powołuje się BleepingComputer, wskazują ransomware Chaos; władze go nie nazwały."
  - tactic: "Wpływ"
    id: T1657
    name: "Financial Theft"
    text: "Żądali kryptowalut za przywrócenie dostępu i grozili publikacją skradzionych danych; co najmniej 28 firm zapłaciło ponad 40,5 mln dolarów."
detect:
  - "Telefony lub czaty od „pomocy technicznej”, do których twój dział IT nie otworzył zgłoszenia, zwłaszcza z prośbą o instalację narzędzia albo podyktowanie kodu."
  - "Programy do zdalnego dostępu, takie jak TeamViewer czy AnyDesk, nagle zainstalowane lub uruchomione na służbowym komputerze albo łączące się z nieznanymi kontami."
  - "Logowanie do VPN tuż po telefonie do tego samego użytkownika, z nowego urządzenia lub miejsca albo z potwierdzeniem drugiego składnika w trakcie rozmowy."
  - "Duże transfery danych na zewnątrz w dniach przed zaszyfrowaniem plików: Warren Oil straciło 1,4 TB."
check:
  - "Ustalcie, jak pracownicy mogą sprawdzić, że IT to naprawdę IT: numer zgłoszenia, oddzwonienie na znany numer albo hasło umowne."
  - "Blokujcie programy do zdalnego dostępu, których firma nie używa, a dozwolone dopuszczajcie tylko na zarządzanych urządzeniach."
  - "Stosujcie odporne na phishing uwierzytelnianie wieloskładnikowe, czyli klucze bezpieczeństwa albo klucze dostępu (passkeys), do VPN i poczty, żeby nie było kodu, który rozmówca może wyłudzić."
  - "Ćwiczcie na phishingu telefonicznym, nie tylko na fałszywych e-mailach."
  - "Miejcie kopie zapasowe offline i sprawdzony plan odtworzenia, żeby okup nie był jedynym wyjściem."
unknown:
  - "Nazwa grupy oraz nazwiska, wiek i role czterech podejrzanych."
  - "Jakiego ransomware używano: dokumenty sądowe cytowane przez BleepingComputer mówią o Chaos, a władze go nie nazwały."
  - "Którzy członkowie byli wcześniej w Conti i jaki związek ma grupa z BlackSuit, który w 2024 roku przyznał się do ataku na Maxxis."
  - "Pełna lista ofiar i ostateczna wysokość szkód, która według śledczych może być wyższa."
  - "Dokąd trafiły pieniądze i czy członkowie za granicą usłyszą zarzuty lub zostaną wydani."
jobs: [cybercrime-investigator, incident-responder, awareness-specialist, soc-analyst, threat-intelligence-analyst]
topics: [cybercrime-disruption, international-cooperation, social-engineering-tests, ransomware-response, crypto-tracing]
sources:
  - name: "Інтерфакс-Україна: Офіс генпрокурора та ФБР викрили міжнародне хакерське угруповання, арештовано 4 ключових учасників"
    url: "https://interfax.com.ua/news/general/1238478.html"
  - name: "Цензор.НЕТ: Виманили понад $40,5 млн у 28 підприємств: Нацполіція спільно з ФБР викрили групу хакерів, - Цуцкірідзе"
    url: "https://censor.net/ua/news/4034335/vykryly-grupu-hakeriv-scho-vymanyla-ponad-40-mln-dolariv"
  - name: "LB.ua: В Україні викрили міжнародне хакерське угруповання, яке отримало понад 40 млн доларів викупу"
    url: "https://lb.ua/society/2026/11/18/781980_ukrayini_vikrili_mizhnarodne.html"
  - name: "The Record: Ukraine exposes ransomware network extorting US oil, healthcare firms"
    url: "https://therecord.media/ukraine-ransomware-arrests-cyber"
  - name: "BleepingComputer: Ukraine, FBI arrest ransomware gang members tied to $40M in ransoms"
    url: "https://www.bleepingcomputer.com/news/security/ukraine-fbi-arrest-ransomware-gang-members-tied-to-40m-in-ransoms/"
---

18 listopada 2026 roku ukraińska Prokuratura Generalna i Policja Narodowa poinformowały, że wspólnie z FBI rozbiły międzynarodową grupę, która włamywała się do firm i wymuszała od nich pieniądze. Cyberpolicja i FBI śledziły jej działalność przez ponad dwa lata. Policja przeprowadziła jednocześnie 66 przeszukań w Kijowie i 11 obwodach i zatrzymała czterech kluczowych członków, którzy trafili do aresztu. Są podejrzani o udział w organizacji przestępczej i nieuprawnioną ingerencję w systemy informatyczne (art. 255 cz. 2 i art. 361 cz. 5 ukraińskiego kodeksu karnego), za co grozi do 15 lat więzienia.

Według śledczych grupa liczyła co najmniej 27 członków z Ukrainy, Kazachstanu, rosji i innych krajów. Dokumenty sądowe opisują liderów, koordynatorów, specjalistów od socjotechniki, operatorów technicznych i osoby zajmujące się płatnościami. Grupa była częścią szerszej sieci ponad 60 osób w ośmiu jurysdykcjach, w której są byli członkowie gangu ransomware Conti. Członkowie porozumiewali się przez Rocket.Chat, qTOX i Telegram, a ukraińscy śledczy uzyskali dostęp do tych rozmów i odtworzyli przebieg ataków.

Ataki zaczynały się od telefonu. Podając się za dział IT, często z pomocą platformy odtwarzającej wiadomości głosowe wygenerowane przez AI, dzwoniący nakłaniali pracowników do podania danych logowania albo instalacji programu do zdalnego dostępu. Jeden napastnik trzymał pracownika przy telefonie, a drugi w tym czasie wchodził do sieci. Potem grupa kradła dane, szyfrowała pliki i żądała kryptowalut, grożąc publikacją tego, co zabrała. Co najmniej 28 firm zapłaciło ponad 40,5 mln dolarów, czyli około 1,8 mld hrywien.

Dokumenty sądowe, na które powołują się The Record i BleepingComputer, wymieniają kilka ofiar z USA: producenta ropy Warren Oil, który w sierpniu 2024 roku stracił 1,4 TB danych i zapłacił około 5 mln dolarów w bitcoinach; firmę usług energetycznych Newpark Resources, która zapłaciła 1,5 mln dolarów; producenta opon Maxxis International-USA; oraz Quantum Health, które w 2026 roku zapłaciło 5 mln dolarów. Policja zabezpieczyła komputery, telefony, karty bankowe, prawie 370 000 dolarów w gotówce i 20 000 euro i zapowiada, że nadal ustala kolejnych członków sieci.
