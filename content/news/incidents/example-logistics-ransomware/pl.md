---
# An incident breakdown → lvlulcuma.com/pl/news/incidents/example-logistics-ransomware/
# MADE-UP EXAMPLE (example: true): it shows the layout. Delete this folder once real breakdowns exist.
example: true
title: "Ransomware w Example Logistics: weszli przez niezałatany VPN, wyszli z 400 GB"
dek: "Atakujący weszli przez bramę VPN, która od sześciu tygodni czekała na łatkę, spędzili w sieci miesiąc, a potem zaszyfrowali serwery obsługujące magazyny."
type: ransomware
status: report          # unfolding | confirmed | report (the victim or investigators published a full report)
date: 2026-10-19        # when it became public
published: 2026-10-27   # when this breakdown was published
who: "Example Logistics, firma transportowa i magazynowa"
sector: "Transport i logistyka"
entry: "Niezałatana podatność w bramie VPN"
impact: "Magazyny i śledzenie przesyłek nie działały przez sześć dni; skradziono ok. 400 GB danych klientów i przewozów"
timeline:
  - date: 2026-09-02
    text: "Producent VPN wydaje poprawkę krytycznej podatności, przez którą każdy może wykonywać polecenia na bramie bez logowania."
  - date: 2026-09-09
    text: "Firmy bezpieczeństwa informują, że podatność jest już wykorzystywana. Brama Example Logistics jest łatana raz na kwartał, więc zostaje bez poprawki."
  - date: 2026-09-14
    text: "Atakujący wykorzystują podatność bramy i logują się do VPN jako administrator IT."
  - date: 2026-09-21
    text: "Zrzucają hasła z pamięci serwera plików i zdobywają konto administratora domeny."
  - date: 2026-10-14
    text: "Około 400 GB danych klientów i przewozów trafia do usługi przechowywania w chmurze."
  - date: 2026-10-17
    text: "W sobotę w nocy ransomware szyfruje hosty wirtualizacji. Systemy magazynowe i śledzenie przesyłek przestają działać."
  - date: 2026-10-19
    text: "Firma ogłasza atak i zgłasza go odpowiednim organom."
  - date: 2026-10-24
    text: "Główne systemy zostają odtworzone z kopii offline, magazyny znów pracują."
  - date: 2026-10-26
    text: "Firma publikuje raport z incydentu."
attack:
  - tactic: "Dostęp początkowy"
    id: T1190
    name: "Exploit Public-Facing Application"
    text: "Wykonali polecenia na niezałatanej bramie VPN bez logowania."
  - tactic: "Dostęp początkowy"
    id: T1078
    name: "Valid Accounts"
    text: "Zalogowali się do VPN kontem administratora IT odczytanym z konfiguracji bramy."
  - tactic: "Dostęp do poświadczeń"
    id: T1003.001
    name: "OS Credential Dumping: LSASS Memory"
    text: "Zrzucili hasła z pamięci serwera plików i znaleźli konto administratora domeny."
  - tactic: "Ruch boczny"
    id: T1021.001
    name: "Remote Services: Remote Desktop Protocol"
    text: "Przechodzili z serwera na serwer przez RDP jako administrator domeny."
  - tactic: "Eksfiltracja"
    id: T1567.002
    name: "Exfiltration Over Web Service: Exfiltration to Cloud Storage"
    text: "Skopiowali ok. 400 GB do chmury za pomocą `rclone`."
  - tactic: "Wpływ"
    id: T1490
    name: "Inhibit System Recovery"
    text: "Usunęli kopie w tle i wyłączyli wszystkie zadania kopii zapasowych, do których mieli dostęp."
  - tactic: "Wpływ"
    id: T1486
    name: "Data Encrypted for Impact"
    text: "Zaszyfrowali hosty wirtualizacji, a razem z nimi wszystkie działające na nich serwery."
detect:
  - "Logowania do VPN na konto administratora z kraju, w którym firma nie działa, tej samej nocy, gdy brama została przejęta."
  - "Zdarzenie `4624` z typem logowania `10` (RDP) z puli adresów VPN prosto na serwery, do których administratorzy zwykle łączą się przez serwer pośredniczący (jump host)."
  - "Dostęp do pamięci LSASS na serwerze plików: zdarzenie Sysmon `10` albo alert EDR o zrzucaniu poświadczeń."
  - "Uruchomienie `rclone` na serwerze, a zaraz potem nietypowo duży transfer do chmury."
  - "`vssadmin delete shadows` i wyłączanie zadań kopii zapasowych na kilka minut przed początkiem szyfrowania."
check:
  - "Łataj urządzenia dostępne z internetu (VPN, firewalle, bramy pocztowe) w ciągu kilku dni od wydania krytycznej poprawki, poza zwykłym cyklem."
  - "Wymagaj MFA przy każdym logowaniu do VPN, także dla kont administratorów i kont usługowych."
  - "Trzymaj co najmniej jedną kopię zapasową offline albo niezmienną i przetestuj pełne odtworzenie."
  - "Ustaw alert na połączenia RDP z puli adresów VPN prosto do serwerów."
  - "Zablokuj na serwerach narzędzia do przesyłania plików, takie jak `rclone`, albo przynajmniej ustaw alert na ich uruchomienie."
unknown:
  - "Skąd atakujący wzięli hasło administratora: raport nie mówi, czy było zapisane na bramie, czy używane gdzie indziej."
  - "Czy ktoś jeszcze wykorzystał tę samą podatność bramy przed 14 września."
  - "Czyje dokładnie dane klientów znalazły się wśród skradzionych."
jobs: [incident-responder, soc-analyst, vulnerability-analyst, incident-response-manager]
topics: [edge-device-incidents, ransomware-response, vulnerability-prioritization, lateral-movement-hunting, incident-recovery]
sources:
  - name: "CISA: #StopRansomware Guide"
    url: "https://www.cisa.gov/stopransomware/ransomware-guide"
  - name: "CISA: Known Exploited Vulnerabilities Catalog"
    url: "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
  - name: "MITRE ATT&CK: Data Encrypted for Impact (T1486)"
    url: "https://attack.mitre.org/techniques/T1486/"
---

Example Logistics ma 14 magazynów i sieć doręczeń paczek. W nocy z 17 na 18 października ransomware zaszyfrował hosty wirtualizacji firmy i wyłączył wszystko, co na nich działało: system zarządzania magazynem, drukowanie etykiet i śledzenie przesyłek. Przez dwa dni ciężarówki ładowano według wydrukowanych list.

Drogą wejścia była brama VPN. Producent wydał poprawkę krytycznej podatności 2 września, a tydzień później o atakach na nią pisano już publicznie, ale bramę łatano raz na kwartał. Atakujący wykorzystali podatność 14 września i spędzili w sieci miesiąc, zanim cokolwiek zaszyfrowali. Zdążyli w tym czasie znaleźć konto administratora domeny i wynieść około 400 GB danych.

Firma odtworzyła główne systemy z kopii offline w ciągu sześciu dni i twierdzi, że nie zapłaciła okupu. Po upływie wyznaczonego terminu atakujący opublikowali część skradzionych danych na swojej stronie z wyciekami.
