---
# An incident breakdown → lvlulcuma.com/pl/news/incidents/outlook-ntlm-zero-day/
title: "Błąd w Outlooku znaleziony z pomocą Claude był już atakowany: co wycieka i jak to sprawdzić"
dek: "10 listopada 2026 roku Microsoft załatał lukę w Outlooku (CVE-2026-124194), którą atakujący już wykorzystywali: otwarcie spreparowanego pliku wiadomości sprawia, że klasyczny Outlook bez zwykłego ostrzeżenia wysyła atakującemu skrót NTLMv2 użytkownika."
type: vulnerability
status: unfolding       # unfolding | confirmed | report (the victim or investigators published a full report)
date: 2026-11-10        # when it became public
published: 2026-11-16   # when this breakdown was published
who: "Użytkownicy klasycznego Outlooka dla Windows w Microsoft 365 Apps for Enterprise, Office LTSC 2021 i Office LTSC 2024"
sector: "Każda organizacja, która korzysta z Outlooka w Windows"
entry: "Spreparowany plik wiadomości, który użytkownik otwiera w klasycznym Outlooku (CVE-2026-124194). Nie ujawniono, jak atakujący dostarczali takie pliki."
impact: "Skrót NTLMv2 użytkownika trafia na serwer atakującego, gdzie można go złamać albo przekazać dalej, by zalogować się jako ten użytkownik; nie wiadomo, kogo zaatakowano ani ilu osób to dotyczy"
timeline:
  - date: 2023-03-14
    text: "Dla kontekstu: Microsoft łata CVE-2023-23397, wcześniejszą lukę w Outlooku, przez którą skróty NTLM wyciekały do atakujących przez przypomnienie w kalendarzu, bez żadnego działania użytkownika."
  - date: 2026-11-10
    text: "Listopadowe aktualizacje Microsoftu poprawiają 1093 błędy bezpieczeństwa — drugi miesiąc z rzędu ponad tysiąc. Tylko jeden jest oznaczony jako wykorzystywany: CVE-2026-124194 w Outlooku, z oceną 6,5 i poziomem „Moderate” (umiarkowany). Poprawka przychodzi z aktualizacjami Office."
  - date: 2026-11-10
    text: "Biuletyn Microsoftu przypisuje znalezienie luki Benoît Sevensowi z Anthropic, który korzystał z modelu AI tej firmy, Claude; niektóre źródła wymieniają też drugiego badacza, nono. Szczegółów ataków Microsoft nie podaje."
  - date: 2026-11-10
    text: "CISA dodaje lukę do katalogu podatności wykorzystywanych w atakach i daje federalnym urzędom USA czas do 24 listopada na jej załatanie."
attack:
  - tactic: "Wykonanie"
    id: T1204.002
    name: "User Execution: Malicious File"
    text: "Ofiara musi otworzyć spreparowany plik wiadomości; okienko podglądu nie uruchamia luki."
  - tactic: "Dostęp do poświadczeń"
    id: T1187
    name: "Forced Authentication"
    text: "Outlook łączy się z lokalizacją sieciową kontrolowaną przez atakującego, a Windows razem z połączeniem wysyła skrót NTLMv2 użytkownika."
detect:
  - "Połączenia `outlook.exe` z publicznymi adresami IP na portach TCP 445 lub 139, zwłaszcza zaraz po otwarciu pliku `.msg` lub `.oft`."
  - "Zapasowa droga przez WebDAV: `rundll32.exe` uruchamiający `davclnt.dll,DavSetCookie` z zewnętrzną nazwą hosta."
  - "Wychodzący ruch NTLM do zewnętrznych serwerów w logu `Microsoft-Windows-NTLM/Operational` (zdarzenie 8001), po włączeniu audytu NTLM."
  - "Logowania sieciowe przez NTLM (zdarzenie 4624, typ logowania 3) z parą „użytkownik — adres źródłowy”, której wcześniej nie było: możliwy znak przekazanego dalej skrótu."
  - "Microsoft i CISA nie opublikowały wskaźników włamania (IoC), więc to zachowania do wyszukiwania, a nie gotowe sygnatury."
check:
  - "Upewnij się, że zaktualizował się sam Office: zbiorcza aktualizacja Windows tej luki nie łata. Poprawione kompilacje to m.in. Office LTSC 2021 16.0.14334.21048 i Office LTSC 2024 16.0.17932.21140; kompilacje Microsoft 365 Apps są wymienione pod `aka.ms/OfficeSecurityReleases`."
  - "Zablokuj wychodzący ruch SMB (TCP 445 i 139) z twojej sieci do internetu."
  - "Utrudnij przekazywanie skrótów dalej: wymagaj podpisywania SMB, podpisywania LDAP i wiązania kanału (channel binding) oraz Extended Protection for Authentication w usługach, które przyjmują NTLM."
  - "Rozważ ograniczenie wychodzącego NTLM zasadą „Restrict NTLM: Outgoing NTLM traffic to remote servers”: najpierw w trybie audytu, potem z blokowaniem."
  - "Jeśli ktoś mógł otworzyć taki plik, zmień jego hasło, zakończ jego sesje i sprawdź, gdzie konto logowało się później."
  - "Office 2016 i 2019 nie są wspierane od października 2025 roku i nie ma ich na liście poprawionych produktów Microsoftu: zaplanuj przejście na nowszą wersję."
unknown:
  - "Kto wykorzystywał lukę, przeciwko komu, na jaką skalę i od kiedy."
  - "Jak spreparowane pliki trafiały do ofiar: e-mailem, przez pobieranie czy komunikatory."
  - "Czy ataki zaczęły się przed zgłoszeniem luki przez badaczy, czy po nim."
  - "W której części pliku jest adres, z którym łączy się Outlook. Microsoft nie opublikował szczegółów technicznych."
  - "Jak dokładnie Claude pomógł znaleźć lukę. Nie opublikowano opisu."
jobs: [vulnerability-analyst, soc-analyst, detection-engineer, threat-hunter, security-administrator]
topics: [patch-management, vulnerability-prioritization, authentication-protocols, windows-event-logs, ai-vulnerability-discovery]
sources:
  - name: "OpenCVE: CVE-2026-124194"
    url: "https://app.opencve.io/cve/CVE-2026-124194"
  - name: "Tenable: Microsoft's November 2026 Patch Tuesday addresses 1093 CVEs (CVE-2026-124194)"
    url: "https://www.tenable.com/blog/microsoft-november-2026-patch-tuesday-addresses-1093-cves-cve-2026-124194"
  - name: "Zero Day Initiative: The November 2026 Security Update Review"
    url: "https://www.zerodayinitiative.com/blog/2026/11/10/the-november-2026-security-update-review"
  - name: "Krebs on Security: Microsoft Fixes Nearly 1,100 Security Vulnerabilities"
    url: "https://krebsonsecurity.com/2026/11/microsoft-fixes-nearly-1100-security-vulnerabilities/"
  - name: "The Record: Microsoft's Patch Tuesday surpasses 1,000 bugs for second month in a row"
    url: "https://therecord.media/patch-tuesday-microsoft-1000-bugs-again"
  - name: "The Hacker News: Microsoft Patches 1,259 Flaws, Including Exploited Outlook Bug That May Expose NTLMv2 Hashes"
    url: "https://thehackernews.com/2026/11/microsoft-patches-1259-flaws-including.html"
  - name: "CSO Online: November 2026 Patch Tuesday: 63 Critical Microsoft fixes, plus an Outlook zero day that allows theft of hashed credentials"
    url: "https://www.csoonline.com/article/4247015/november-2026-patch-tuesday-63-critical-microsoft-fixes-plus-an-outlook-zero-day-that-allows-theft-of-hashed-credentials.html"
  - name: "CyberInsider: Microsoft's November updates fix 1094 flaws, Outlook zero-day"
    url: "https://cyberinsider.com/microsoft-november-2026-patch-tuesday-outlook-zero-day/"
  - name: "Daily CyberSecurity: CISA Adds Six Exploited Flaws in Outlook, Chrome, Barracuda, Cisco and Openwave to KEV Catalog"
    url: "https://securityonline.info/cisa-kev-six-vulnerabilities-november-2026/"
  - name: "ThreatDefence: Outlook CVE-2026-124194 NTLM Zero-Day: Patching and Hunting"
    url: "https://threatdefence.com/article/microsoft-outlook-cve-2026-124194-ntlm-zero-day-patching-hunting"
  - name: "OPSWAT: Microsoft's November 2026 Patch Tuesday: One Flaw in 1,095 Scored 6.5, and it's Under Attack"
    url: "https://www.opswat.com/blog/microsoft-s-november-2026-patch-tuesday-one-flaw-in-1-095-scored-6-5-and-it-s-under-attack"
---

We wtorek 10 listopada Microsoft wydał comiesięczne aktualizacje bezpieczeństwa. Według liczenia, którego używa większość analityków, poprawiają one 1093 błędy — to drugi miesiąc z rzędu ponad tysiąc. Microsoft mówi, że błędy znacznie szybciej znajdować pomagają narzędzia AI; rok wcześniej firma poprawiała ok. stu miesięcznie. Ze wszystkich tych błędów wiadomo o atakach tylko na jeden: CVE-2026-124194 w klasycznej aplikacji Outlook dla Windows.

Luka tkwi w tym, jak Outlook obsługuje specjalnie spreparowany plik wiadomości. Gdy użytkownik go otworzy, Outlook łączy się z lokalizacją sieciową kontrolowaną przez atakującego i nie pokazuje ostrzeżenia, które zwykle pojawia się przed wczytaniem zewnętrznych treści. Windows wysyła wtedy na ten serwer skrót NTLMv2 użytkownika, czyli przekształcony dowód znajomości hasła. Samo obejrzenie wiadomości w okienku podglądu nie wystarczy: plik trzeba otworzyć.

Mając skrót, atakujący może próbować złamać hasło offline albo w czasie rzeczywistym przekazać skrót dalej i zalogować się jako ten użytkownik do innych systemów, które przyjmują NTLM bez podpisywania. Microsoft ocenia lukę tylko na 6,5 na 10 („Moderate”, umiarkowana), a poprawka przychodzi z aktualizacjami Office, a nie Windows, więc łatwo ją przeoczyć.

Biuletyn Microsoftu przypisuje znalezienie luki Benoît Sevensowi z Anthropic, który korzystał z modelu AI tej firmy, Claude; niektóre źródła wymieniają też drugiego badacza, nono. Satnam Narang z Tenable powiedział, że przez większość roku AI „usypywało coraz większe stogi siana”, a teraz najwyraźniej „po raz pierwszy znalazło igłę”. Microsoft nie ujawnił, kto wykorzystywał lukę, przeciwko komu ani od kiedy, a opisu technicznego jeszcze nie opublikowano.
