---
# An incident breakdown → lvlulcuma.com/pl/news/incidents/vanderbilt-university-ransomware/
title: "Uniwersytet Vanderbilta: mówiące żądania okupu, kampus wezwany do wyłączenia komputerów i deklaracja o milionie numerów ubezpieczenia społecznego"
dek: "9 listopada 2026 roku Uniwersytet Vanderbilta w Nashville kazał studentom i pracownikom wyłączyć uczelniane urządzenia podczas cyberataku, do którego przyznał się gang ransomware BYOD; gang twierdzi, że ukradł ponad milion numerów ubezpieczenia społecznego, a uczelnia nie potwierdziła, czy cokolwiek wyciekło."
type: ransomware
status: unfolding       # unfolding | confirmed | report (the victim or investigators published a full report)
date: 2026-11-09        # when it became public
published: 2026-11-16   # when this breakdown was published
who: "Uniwersytet Vanderbilta w Nashville w stanie Tennessee, z ok. 14 000 studentów; Centrum Medyczne Uniwersytetu Vanderbilta, osobna organizacja, podaje, że jego systemy nie ucierpiały"
sector: "Szkolnictwo wyższe"
entry: "Jeszcze nieznane"
impact: "9 listopada wyłączono uczelniane urządzenia i ograniczono większość systemów; wszyscy musieli zmienić hasła; magazyny w chmurze (OneDrive, SharePoint, Box) nie działały jeszcze tydzień później. BYOD twierdzi, że ma ponad milion numerów ubezpieczenia społecznego oraz dane studentów i pracowników; uczelnia nie potwierdziła kradzieży danych."
timeline:
  - date: 2026-09-29
    text: "Dla kontekstu: na stronie z wyciekami nowego gangu ransomware BYOD pojawiają się pierwsze ofiary, według badacza ransomware Allana Liski."
  - date: 2026-10-26
    text: "Dla kontekstu: BYOD przyznaje się do ataku na system ochrony zdrowia Uniwersytetu Nowego Meksyku, przez który karetki są kierowane gdzie indziej. Dzień później gang przeprasza i oferuje pacjentom do 2500 dolarów na osobę, ale dane zatrzymuje."
  - date: 2026-11-09
    text: "Rano uczelnia informuje, że reaguje na aktywny incydent cyberbezpieczeństwa, i każe studentom i pracownikom wyłączyć uczelniane urządzenia i odłączyć się od kampusowego Wi-Fi. Na pulpitach pojawiają się żądania okupu README_BYOD_31.txt, a niektóre komputery odtwarzają nagraną wiadomość głosową od BYOD."
  - date: 2026-11-09
    text: "BYOD wpisuje uczelnię na swoją stronę z wyciekami i twierdzi, że ma ponad milion numerów ubezpieczenia społecznego i w pełni przejął kontroler domeny. Wieczorem kampusowe Wi-Fi znów działa."
  - date: 2026-11-10
    text: "Wracają poczta, Okta, Brightspace, Zoom i system zapisów na zajęcia YES, a z uczelnianych urządzeń można znów korzystać. Uczelnia mówi, że pełne przywrócenie może potrwać tygodnie. Biuro FBI w Nashville podaje, że pomaga."
  - date: 2026-11-12
    text: "Uczelnia wprowadza obowiązkową zmianę hasła dla wszystkich użytkowników w ramach usuwania skutków ataku."
  - date: 2026-11-13
    text: "Większość systemów działa, ale OneDrive, SharePoint i Box wciąż są wyłączone. Pojawiają się informacje o pozwie zbiorowym w sprawie ataku, złożonym w sądzie federalnym w Tennessee."
  - date: 2026-11-15
    text: "Gazeta studencka podaje, że OneDrive i Box wciąż są niedostępne."
attack:
  - tactic: "Wpływ"
    id: T1491.001
    name: "Defacement: Internal Defacement"
    text: "Zapełnili pulpity uczelnianych komputerów żądaniami okupu i odtwarzali na nich nagraną wiadomość głosową, by wywrzeć presję na uczelnię."
detect:
  - "Lista sygnałów ostrzegawczych samej uczelni: nieoczekiwane wyskakujące okna lub ostrzeżenia bezpieczeństwa, pliki i foldery o zmienionych nazwach, przeniesione lub usunięte, nietypowe zmiany uprawnień w OneDrive lub Box, nieznane aplikacje lub monity oraz nieoczekiwane prośby o hasło lub zatwierdzenie MFA."
  - "Wiele kopii tego samego pliku tekstowego nagle pojawiających się na pulpitach: jeden z wykładowców Vanderbilta naliczył ok. 40 plików „Read Me”."
  - "Aktualizacje systemu, których nikt nie uruchamiał: jeden z pracowników uczelni zauważył je w ten poniedziałkowy poranek."
check:
  - "Miej sposób na dotarcie do wszystkich, który nie zależy od atakowanych systemów. Uczelnia korzystała ze swojej strony z wiadomościami, alertów SMS i osobnego adresu e-mail służb bezpieczeństwa kampusu."
  - "Przygotuj wcześniej proste instrukcje: wyłącz urządzenie, nic nie naprawiaj sam i zgłoś sprawę z innego urządzenia, tak jak prosiła uczelnia."
  - "Sprawdzaj konta uprzywilejowane, kontrolery domeny i aktywność w magazynach w chmurze, a także integralność kopii zapasowych: BYOD twierdzi, że przejął kontroler domeny i ma kopie zapasowe."
  - "Zdecyduj wcześniej, kto zatwierdza przywracanie usług, i upewnij się, że atakujących już nie ma, zanim to zrobisz."
  - "Studenci i pracownicy: zmieńcie hasło zgodnie z prośbą, odrzucajcie prośby MFA, których nie inicjowaliście, i ufajcie tylko oficjalnym kanałom. Każdy w USA może bezpłatnie zablokować swoją historię kredytową w Equifax, Experian i TransUnion."
unknown:
  - "Jak i kiedy BYOD dostał się do środka."
  - "Czy jakiekolwiek dane rzeczywiście wykradziono i czyje. Uczelnia nie wysłała żadnych powiadomień."
  - "Czy pliki zostały zaszyfrowane. Uczelnia nie użyła słowa ransomware."
  - "Czy kontroler domeny i kopie zapasowe naprawdę zostały przejęte."
  - "Ile żąda BYOD. W tytule artykułu gazety studenckiej pada kwota 750 000 dolarów, ale nie udało się jej sprawdzić."
  - "Kiedy wrócą magazyny w chmurze."
jobs: [incident-responder, incident-response-manager, soc-analyst, iam-engineer, security-administrator]
topics: [ransomware-response, incident-response-process, crisis-communications, mfa-conditional-access, backup-resilience]
sources:
  - name: "Vanderbilt University: Active Cybersecurity Incident Updates"
    url: "https://news.vanderbilt.edu/2026/11/09/nov-9-active-cybersecurity-incident-updates/"
  - name: "The Vanderbilt Hustler: LIVE COVERAGE: Vanderbilt experiencing cyberattack, agencies responding"
    url: "https://vanderbilthustler.com/2026/11/09/breaking-vanderbilt-wi-fi-networks-reportedly-hacked-vuit-yet-to-confirm/"
  - name: "BleepingComputer: Vanderbilt University hit in BYOD ransomware attack, data theft claimed"
    url: "https://www.bleepingcomputer.com/news/security/vanderbilt-university-hit-in-byod-ransomware-attack-data-theft-claimed/"
  - name: "The Record: Vanderbilt cybersecurity incident impacting campus devices and systems"
    url: "https://therecord.media/vanderbilt-cyberattack-ransomware-alert"
  - name: "The Register: Ransomware threat blares from Vanderbilt University computers during cyberattack"
    url: "https://www.theregister.com/cyber-crime/2026/11/10/ransomware-threat-blares-from-vanderbilt-university-computers-during-cyberattack/5308687"
  - name: "CyberScoop: Vanderbilt University reels following ransomware attack claimed by BYOD group"
    url: "https://cyberscoop.com/vanderbilt-university-ransomware-attack-byod/"
  - name: "Infosecurity Magazine: Vanderbilt University Takes Systems Offline After Cyber Incident"
    url: "https://www.infosecurity-magazine.com/news/vanderbilt-university-cyber/"
  - name: "Malwarebytes: Vanderbilt restores systems after cyberattack as hackers claim data theft"
    url: "https://www.malwarebytes.com/blog/news/2026/11/vanderbilt-restores-systems-after-cyberattack-as-hackers-claim-data-theft"
  - name: "Inside Higher Ed: Ransomware Gang Says It Hacked Vanderbilt University"
    url: "https://www.insidehighered.com/news/tech-innovation/administrative-tech/2026/11/11/ransomware-gang-says-it-hacked-vanderbilt"
  - name: "Nashville Scene: Ongoing Vanderbilt Hack Focused on Cloud Storage"
    url: "https://www.nashvillescene.com/news/pithinthewind/vanderbilt-university-ransomware-hack-update/article_2c82fa08-50e2-4642-9826-13003a662adc.html"
  - name: "WSMV: Cybercrime group claims it stole social security numbers during ongoing Vanderbilt breach, report says. Here's what we know"
    url: "https://www.wsmv.com/2026/11/09/vanderbilt-urges-university-community-shut-down-devices-amid-cybersecurity-incident-heres-what-we-know/"
  - name: "eSecurity Planet: Vanderbilt Cyberattack: Hackers Claim Theft of More Than 1M SSNs"
    url: "https://www.esecurityplanet.com/threats/news-vanderbilt-cyberattack-byod-ssn-claim/"
  - name: "Inc.: Hackers Claim 1 Million Social Security Numbers Were Stolen From Vanderbilt. Now 1 Demand Could Last a Lifetime"
    url: "https://www.inc.com/amaya-nichole/hackers-claim-social-security-numbers-stolen-vanderbilt-now-1-demand-last-lifetime/91435748"
  - name: "The Record: Michigan State cyber incident claimed by ransomware gang behind recent hospital attack"
    url: "https://therecord.media/michigan-state-university-byod-gang-cyber-incident"
  - name: "BleepingComputer: UNM Health ransomware attack disrupts patient care, surgeries"
    url: "https://www.bleepingcomputer.com/news/security/unm-health-ransomware-attack-disrupts-patient-care-surgeries/"
  - name: "Gizmodo: Hacker Group Claims UNM Hospital Cyberattack, Then Apologizes and Offers Patients $2,500"
    url: "https://gizmodo.com/hacker-group-claims-unm-hospital-cyberattack-then-apologizes-and-offers-patients-2500-2000832169"
---

Uniwersytet Vanderbilta to prywatna uczelnia w Nashville w stanie Tennessee, na której studiuje ok. 14 000 osób. W poniedziałek 9 listopada rano poinformował, że reaguje na aktywny incydent cyberbezpieczeństwa, i kazał studentom i pracownikom wyłączyć uczelniane urządzenia i odłączyć się od kampusowego Wi-Fi. Ludzie mieli niczego nie naprawiać sami i dzwonić do działu IT z innego urządzenia. Zajęcia odbywały się zgodnie z planem, choć część wykładowców je odwołała.

Na pulpitach w kampusie pojawiły się żądania okupu README_BYOD_31.txt, a niektóre komputery odtwarzały nagrany głos: „Zostaliście przejęci przez BYOD”. Tego samego dnia BYOD, gang ransomware zauważony po raz pierwszy pod koniec września, wpisał uczelnię na swoją stronę z wyciekami. Twierdzi, że przejął kontroler domeny, ma kopie zapasowe i ukradł ponad milion numerów ubezpieczenia społecznego, a także imiona i nazwiska, dane kontaktowe, dane studentów i pracowników oraz dane badawcze.

Uczelnia mówi o cyberataku, ale nie potwierdziła, kto za nim stoi, czy coś zaszyfrowano ani jakie dane, jeśli w ogóle, wykradziono. Wi-Fi wróciło tego samego wieczoru, a poczta, Okta, Brightspace i Zoom następnego ranka. 12 listopada wszyscy musieli zmienić hasła. Magazyny w chmurze pozostały wyłączone: 13 listopada OneDrive, SharePoint i Box wciąż nie działały, a gazeta studencka podała, że 15 listopada nadal były niedostępne. FBI mówi, że pomaga, a do sądu trafił już pozew zbiorowy.

Centrum Medyczne Uniwersytetu Vanderbilta, osobna organizacja, podaje, że jego systemy nie ucierpiały. BYOD jest nowy, ale aktywny. W październiku przyznał się do ataku na system ochrony zdrowia Uniwersytetu Nowego Meksyku, potem przeprosił i zaoferował pacjentom do 2500 dolarów na osobę, ale dane zatrzymał. Wpisał też na swoją listę Uniwersytet Stanowy Michigan, który twierdzi, że nie widzi oznak przejęcia swojego centralnego systemu kont.
