---
# An incident breakdown → lvlulcuma.com/pl/news/incidents/armory-castle-vcenter-zero-day/
title: "ARMORY CASTLE i vCenter: jak prawdopodobnie chińscy szpiedzy zamienili nieznany błąd VMware w klucze do serwerowni"
dek: "19 listopada 2026 roku Broadcom załatał CVE-2026-123890, krytyczny błąd w VMware vCenter, a Mandiant (część Google) poinformował, że prawdopodobnie powiązana z Chinami grupa szpiegowska ARMORY CASTLE wykorzystywała go od początku września, by podrabiać dostęp administratora, przejmować hosty ESXi i kopiować dane prosto z dysków maszyn wirtualnych."
type: espionage
status: report          # unfolding | confirmed | report (the victim or investigators published a full report)
date: 2026-11-19        # when it became public
published: 2026-11-23   # when this breakdown was published
who: "Organizacje korzystające z VMware vCenter Server i VMware Cloud Foundation. Mandiant badał kilka włamań, ale nie wskazał ofiar ani ich branż czy krajów."
sector: "Każda organizacja z infrastrukturą wirtualną VMware"
entry: "We włamaniu opisanym przez Google: błąd zero-day w urządzeniu do zdalnej pomocy BeyondTrust Remote Support (CVE-2026-102764); już w sieci: błąd vCenter CVE-2026-123890, dający dostęp administratora"
impact: "Pełna kontrola administratora nad vCenter i jego hostami ESXi; baza poświadczeń Windows (NTDS) i pliki rejestru skopiowane z dysku wirtualnego i prawdopodobnie wyniesione; długotrwałe backdoory na urządzeniach z Linuksem. Liczba zaatakowanych organizacji jest nieznana."
timeline:
  - date: 2026-07-13
    text: "Kontekst: data kompilacji zapisana w BONESAW, narzędziu napastników do vCenter. Google zaznacza, że taką datę da się sfałszować, ale twierdzi, że grupa znała błąd przed 29 lipca."
  - date: 2026-07-29
    text: "Broadcom ujawnia wcześniejszy błąd vCenter, CVE-2026-59309. Później Broadcom nazywa nowy błąd osobnym problemem."
  - date: 2026-09
    text: "Na początku września napastnicy uruchamiają BONESAW przeciw vCenter z już załataną luką CVE-2026-59309: to pierwsze znane użycie nowego błędu."
  - date: 2026-10-15
    text: "Google opisuje, jak ta sama grupa wykorzystywała błąd zero-day w BeyondTrust Remote Support (CVE-2026-102764), którym napastnicy weszli do sieci we włamaniu opisanym później."
  - date: 2026-11-19
    text: "Broadcom wydaje poprawki CVE-2026-123890 z oceną 9,8 na 10 i podaje, że obejścia nie ma. Jego biuletyn nie wspomina o atakach, a odkrycie przypisuje Mandiantowi."
  - date: 2026-11-19
    text: "Google Threat Intelligence Group i Mandiant publikują, jak ARMORY CASTLE wykorzystywała błąd od początku września, wraz ze wskaźnikami i regułami wykrywania."
attack:
  - tactic: "Dostęp początkowy"
    id: T1190
    name: "Exploit Public-Facing Application"
    text: "Weszli przez błąd zero-day w urządzeniu BeyondTrust Remote Support (CVE-2026-102764)."
  - tactic: "Utrzymanie dostępu"
    id: T1505.003
    name: "Server Software Component: Web Shell"
    text: "Umieścili web shelle (najpierw SLIMSAVAGE, potem CAGEMATCH) na wewnętrznym urządzeniu z Linuksem; pierwszy otwierał się hasłem `123`."
  - tactic: "Eskalacja uprawnień"
    id: T1548.001
    name: "Abuse Elevation Control Mechanism: Setuid and Setgid"
    text: "Za pomocą gdb ustawili bit setuid na `/bin/env`, by zostać rootem."
  - tactic: "Rozpoznanie systemu"
    id: T1046
    name: "Network Service Discovery"
    text: "Skanowali sieć nmapem w poszukiwaniu portów VMware, takich jak 2012, 5480 i 9080."
  - tactic: "Dostęp do poświadczeń"
    id: T1606.002
    name: "Forge Web Credentials: SAML Tokens"
    text: "Wyjęli klucz podpisujący SAML z bazy katalogowej vCenter i podrabiali tokeny administratora (BONESAW, SAWSNAKE), co omija też uwierzytelnianie wieloskładnikowe."
  - tactic: "Utrzymanie dostępu"
    id: T1098.004
    name: "Account Manipulation: SSH Authorized Keys"
    text: "Dodali własny klucz do `authorized_keys` konta root na ESXi."
  - tactic: "Dostęp do poświadczeń"
    id: T1003.003
    name: "OS Credential Dumping: NTDS"
    text: "Skopiowali pliki NTDS, SYSTEM i SECURITY z maszyny wirtualnej z Windows, czytając jej dysk z hosta ESXi."
  - tactic: "Utrzymanie dostępu"
    id: T1543.002
    name: "Create or Modify System Process: Systemd Service"
    text: "Uruchomili backdoora LAZYBONES jako usługę systemd, która restartowała się co 50 minut."
  - tactic: "Dowodzenie i kontrola (C2)"
    id: T1102.002
    name: "Web Service: Bidirectional Communication"
    text: "LAZYBONES odbierał polecenia i wysyłał wyniki przez Slacka, szyfrując je AES-256."
detect:
  - "W vCenter szukaj kont administratorów SSO lub kont maszyn, których nikt nie zakładał, oraz lokalnych kont administratorów o nazwach w rodzaju `sps-…@vsphere.local`."
  - "Szukaj włączania i wyłączania SSH przez API urządzenia (`PUT /rest/appliance/access/ssh`): wyłączona usługa SSH nie dowodzi, że nikt z niej nie korzystał."
  - "Na ESXi sprawdź `authorized_keys` konta root pod kątem nowych kluczy i obserwuj logowania do Host Client jako `vpxuser` oraz logowania SSH jako root."
  - "Obserwuj połączenia z usługą katalogową vCenter na porcie TCP 2012 oraz z portami 5480 i 9080 z maszyn, które nie służą do administrowania, a także skanowanie tych portów w stylu nmapa."
  - "Na urządzeniach z Linuksem szukaj plików `/tmp/123`, `/tmp/sss`, `/tmp/dbr` i `/usr/bin/vmtoolscs`, serwera SSH Dropbear na porcie TCP 53 lub 33992 oraz web shelli `ActiveSer.jsp` i `u.jsp`. Google opublikował reguły YARA i adresy IP."
check:
  - "Zainstaluj poprawki Broadcomu z 19 listopada: vCenter 8.0 U3m, VMware Cloud Foundation 5.2.5 oraz VCF lub vSphere Foundation 9.0.2.0200 albo 9.1.1.0200. Obejścia nie ma. vCenter 7.0 nie ma publicznej poprawki, bo jego ogólne wsparcie skończyło się w październiku 2025 roku."
  - "Jeśli mogło dojść do ataku, traktuj klucze podpisujące i certyfikaty vCenter jako skradzione i wymień je: sama zmiana haseł nie wystarczy."
  - "Dopuszczaj ruch do portów vCenter 2012, 5480 i 22 oraz do API vSphere tylko z maszyn administracyjnych."
  - "Obejmij urządzenia (vCenter, urządzenia do zdalnej pomocy i inne urządzenia z Linuksem) EDR-em i centralnym logowaniem: napastnicy poruszali się właśnie po maszynach, których nikt nie pilnował."
  - "Szybko łataj urządzenia do zdalnej pomocy i inne urządzenia brzegowe: tym razem wejściem był błąd zero-day w BeyondTrust."
unknown:
  - "Ile organizacji zaatakowano i w jakich branżach oraz krajach. Mandiant podaje tylko, że badał wiele incydentów."
  - "Kiedy dokładnie Mandiant znalazł błąd i kiedy powiadomił Broadcom."
  - "Co jeszcze napastnicy zabrali poza plikami poświadczeń Windows opisanymi przez Google."
  - "Czy błąd wykorzystują teraz inni napastnicy. Gdy wyszły poprawki, nikt nie widział publicznego kodu exploita, a Google nie udostępnił BONESAW."
jobs: [threat-hunter, incident-responder, threat-intelligence-analyst, security-administrator, detection-engineer]
topics: [virtualization-security, edge-device-incidents, persistence-hunting, patch-management, actor-tracking]
sources:
  - name: "Google Threat Intelligence: ARMORY CASTLE Exploits vSphere"
    url: "https://cloud.google.com/blog/topics/threat-intelligence/armory-castle-exploits-vsphere"
  - name: "SecurityWeek: Newly Patched VMware vCenter Flaw Exploited as Zero-Day by Chinese APT"
    url: "https://www.securityweek.com/newly-patched-vmware-vcenter-flaw-exploited-as-zero-day-by-chinese-apt/"
  - name: "Help Net Security: VMware vCenter zero-day exploited for months before patch (CVE-2026-123890)"
    url: "https://www.helpnetsecurity.com/2026/11/20/vmware-vcenter-zero-day-cve-2026-123890-exploited/"
  - name: "The Hacker News: China-Linked Hackers Exploit Critical VMware vCenter Zero-Day to Gain Admin Access and Steal Data"
    url: "https://thehackernews.com/2026/11/china-linked-hackers-exploit-critical.html"
  - name: "SOC Prime: CVE-2026-123890: Critical VMware vCenter Zero-Day Exploited by China-Linked Hackers"
    url: "https://socprime.com/blog/cve-2026-123890-critical-vmware-vcenter-zero-day-exploited-by-china-linked-hackers/"
---

vCenter Server to konsola, którą firmy zarządzają hostami VMware ESXi, czyli fizycznymi serwerami, na których działają ich maszyny wirtualne. Administrator w vCenter ma dostęp do każdej maszyny wirtualnej, którą ten zarządza. 19 listopada 2026 roku Broadcom załatał CVE-2026-123890 z oceną 9,8 na 10, błąd w sposobie, w jaki usługa katalogowa vCenter obsługuje logowanie. Napastnik, który może dotrzeć do tej usługi przez sieć, potrafi poznać tajny klucz sesji i działać jako administrator bez żadnego hasła.

Tego samego dnia Google Threat Intelligence Group i Mandiant podały, że od początku września błąd wykorzystywała ARMORY CASTLE, prawdopodobnie powiązana z Chinami grupa szpiegowska, wcześniej śledzona jako UNC5221. Według Google grupa od 2023 roku dostaje się do sieci przez błędy zero-day i świeżo ujawnione luki w urządzeniach brzegowych i zabezpieczających. Mandiant znalazł błąd podczas swoich śledztw i zgłosił go Broadcomowi, którego biuletyn nie wspomina o atakach.

We włamaniu opisanym przez Google napastnicy weszli przez błąd zero-day w urządzeniu BeyondTrust Remote Support, umieścili web shelle na wewnętrznym urządzeniu z Linuksem, zostali rootem i przeskanowali sieć w poszukiwaniu portów VMware. Przechodzili między urządzeniami z Linuksem, na których nie było oprogramowania ochronnego, i przynieśli pięć nowych narzędzi. Jedno z nich, BONESAW, wykorzystywało błąd, by założyć konto administratora vCenter, zabrać klucz podpisujący vCenter i podrabiać logowania administratora. Inne, SAWSNAKE, podrabiało dla administratora tokeny SAML, co pozwala obejść także uwierzytelnianie wieloskładnikowe.

Jako administratorzy napastnicy włączali SSH, zabierali główny klucz vCenter i hasło do jego bazy danych, po czym znów wyłączali SSH. Na hostach ESXi logowali się jako root, dodawali własny klucz SSH i czytali bezpośrednio dysk maszyny wirtualnej z Windows, kopiując pliki NTDS, SYSTEM i SECURITY, czyli dane potrzebne do złamania albo ponownego użycia haseł domeny Windows. Według Google archiwa prawdopodobnie wyniesiono przez urządzenie BeyondTrust. Backdoor LAZYBONES, sterowany przez Slacka, pozwalał im zostać w środku.
