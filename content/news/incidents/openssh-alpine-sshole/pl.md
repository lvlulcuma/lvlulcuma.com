---
# An incident breakdown → lvlulcuma.com/pl/news/incidents/openssh-alpine-sshole/
title: "*sshole: jak zbyt długie hasło otworzyło serwery z Alpine Linux"
dek: "5 listopada 2026 roku OpenSSH i Alpine Linux poprawiły błąd, przez który każdy mógł zalogować się na konta bez hasła w Alpine i innych systemach opartych na musl, podając hasło o długości od 257 do 1024 bajtów; firma zajmująca się analizą zagrożeń twierdzi, że atakujący użyli go w ciągu kilku godzin."
type: vulnerability
status: unfolding       # unfolding | confirmed | report (the victim or investigators published a full report)
date: 2026-11-05        # when it became public
published: 2026-11-09   # when this breakdown was published
who: "Serwery i kontenery z OpenSSH na Alpine Linux oraz inne systemy oparte na musl, np. OpenWrt z OpenSSH, Buildroot i Yocto"
sector: "Serwery z Linuksem, kontenery i obrazy chmurowe"
entry: "Błąd w sprawdzaniu hasła SSH (CVE-2026-123158): hasło nie jest potrzebne, wystarczy nazwa konta, które go nie ma"
impact: "Każdy, kto ma dostęp do SSH, może zalogować się na konta bez hasła; w niektórych obrazach chmurowych takie konto może zdobyć uprawnienia roota; przez ten błąd przejęto co najmniej jeden serwer-pułapkę"
timeline:
  - date: 2012-08
    text: "Kontekst: musl, biblioteka C używana przez Alpine, zaczyna zwracać „*”, gdy funkcja haszująca hasło zawiedzie, i przestaje przyjmować hasła SHA-crypt dłuższe niż 256 bajtów."
  - date: 2016-07-15
    text: "Kontekst: żeby załatać wyciek informacji przez czas odpowiedzi (CVE-2016-6210), OpenSSH zaczyna haszować próby logowania także dla kont bez użytecznego hasła, z solą innego konta. Razem z zachowaniem musl to właśnie później otwiera drzwi."
  - date: 2026-11-05
    text: "Badacz Özgün Kültekin z Wakefield publikuje opis *sshole. OpenSSH wydaje wersję 10.6p2 z poprawką, a Alpine poprawione pakiety i nowe wydania 3.21.10, 3.22.8, 3.23.8 i 3.24.4. Na razie nikt nie zgłasza ataków."
  - date: 2026-11-06
    text: "W raportach pojawia się numer CVE-2026-123158 z oceną 8,1 (High). Firma Previdian, zajmująca się analizą zagrożeń, podaje, że atakujący osiem razy próbowali użyć błędu z jednego adresu i zdobyli roota na jednym z jej serwerów-pułapek niecałe dziewięć godzin po publikacji CVE."
attack:
  - tactic: "Dostęp początkowy"
    id: T1190
    name: "Exploit Public-Facing Application"
    text: "Wysłali przez SSH zbyt długie hasło dla konta bez hasła i weszli."
  - tactic: "Rozpoznanie systemu"
    id: T1033
    name: "System Owner/User Discovery"
    text: "Uruchomili `id` na serwerze-pułapce Previdian, żeby sprawdzić, jako kto działają."
  - tactic: "Rozpoznanie systemu"
    id: T1082
    name: "System Information Discovery"
    text: "Uruchomili `uname` i `hostname`, żeby dowiedzieć się czegoś o systemie."
detect:
  - "`Accepted password for` w `/var/log/messages` dla konta bez hasła (root, użytkownik logujący się tylko kluczem albo `alpine`). Alpine radzi uznać serwer za przejęty, jeśli nie da się wykluczyć takiego logowania."
  - "Nieudana próba logowania hasłem, a zaraz po niej udana w tym samym połączeniu SSH."
  - "`id`, `uname` i `hostname` uruchamiane w nieinteraktywnych sesjach SSH zaraz po zalogowaniu, jak na serwerze-pułapce Previdian."
  - "Nowi użytkownicy, nowe pliki, zmienione `authorized_keys` albo użycie `doas`, których nikt nie umie wyjaśnić."
check:
  - "W Alpine uruchom `apk upgrade -U -a`, a potem `rc-service sshd restart`: działający demon używa starego kodu, dopóki go nie zrestartujesz."
  - "Sprawdzaj zainstalowany pakiet poleceniem `apk info -v openssh-server`, a nie po wersji w banerze SSH: Alpine poprawia starsze wersje bez zmiany numeru wersji."
  - "Jeśli nie możesz teraz zaktualizować, wyłącz logowanie hasłem: ustaw `PasswordAuthentication no`, sprawdź plik poleceniem `sshd -t`, zrestartuj i potwierdź przez `sshd -T | grep -i passwordauthentication`. Zostaw otwartą jedną sesję i najpierw sprawdź logowanie kluczem."
  - "Patrz dalej niż na serwery: kontenery z sshd, obrazy zbudowane przed 5 listopada oraz routery i urządzenia z OpenWrt, Buildroot albo Yocto z OpenSSH."
  - "Wiedz, które konta mają w polu hasła `*` (użytkownicy logujący się tylko kluczem, root, `alpine` w niektórych obrazach chmurowych): to one są zagrożone. Konta zablokowane przez `!` nie są."
  - "Systemy z glibc, SSH z włączonym PAM i Dropbear nie są podatne."
unknown:
  - "Ile serwerów i obrazów kontenerów jest zagrożonych. Shodan pokazuje ok. 22 mln systemów z otwartym SSH, ale tylko część z nich działa na Alpine."
  - "Czy ataki wykraczają poza osiem prób z jednego adresu, które widziała firma Previdian. Inne źródła nie potwierdziły wykorzystania błędu."
  - "Czy ktoś znalazł i wykorzystywał błąd jeszcze przed publikacją."
  - "Które urządzenia i inne produkty oparte na musl dostarczają OpenSSH bez PAM i będą potrzebowały własnych aktualizacji."
  - "Kiedy dokładnie zgłoszono błąd do OpenSSH: według różnych relacji „dzień wcześniej” albo „na początku tygodnia”."
jobs: [vulnerability-analyst, security-administrator, container-security-engineer, cloud-security-engineer, soc-analyst]
topics: [patch-management, vulnerability-prioritization, linux-logs, linux-administration, security-baselines]
sources:
  - name: "Orca Security: *sshole: OpenSSH Authentication Bypass Gives Attackers Root on Alpine Linux"
    url: "https://orca.security/resources/research/sshole-openssh-authentication-bypass-gives-attackers-root-on-alpine-linux/"
  - name: "StepSecurity: CVE-2026-123158 (*sshole): OpenSSH Password Authentication Bypass on Alpine Linux"
    url: "https://www.stepsecurity.io/blog/cve-2026-123158-sshhole-openssh-musl-password-bypass"
  - name: "Field Effect: OpenSSH releases fix for authentication bypass on Alpine Linux"
    url: "https://fieldeffect.com/blog/openssh-fix-authentication-bypass-alpine-linux"
  - name: "The Hacker News: OpenSSH Issues Emergency Fix for Flaw Letting Long Passwords Bypass SSH Auth on Alpine Linux"
    url: "https://thehackernews.com/2026/11/openssh-issues-emergency-fix-for-flaw.html"
  - name: "The Hacker News: Hackers Target OpenSSH SSHole Flaw Within Hours of Disclosure, Gain Root on Honeypot"
    url: "https://thehackernews.com/2026/11/hackers-exploited-openssh-sshole-flaw.html"
  - name: "SecurityWeek: OpenSSH Rushes Patches for 'SSHole' Authentication Bypass"
    url: "https://www.securityweek.com/openssh-rushes-patches-for-sshole-authentication-bypass/"
  - name: "CSO Online: OpenSSH flaw lets attackers access password-disabled accounts on some Linux systems"
    url: "https://www.csoonline.com/article/4245407/openssh-flaw-lets-attackers-access-password-disabled-accounts-on-some-linux-systems.html"
  - name: "Linux Compatible: Alpine Linux 3.21.10, 3.22.8, 3.23.8 and 3.24.4 Patches Critical SSH Password Bypass"
    url: "https://www.linuxcompatible.org/story/alpine-linux-32110-3228-3238-and-3244-patches-critical-ssh-password-bypass/"
---

OpenSSH to standardowy sposób zdalnego logowania na serwery z Linuksem. Alpine Linux to mały system linuksowy, który działa w niezliczonych kontenerach Dockera i serwerach w chmurze. Zamiast glibc używa musl, mniejszej wersji biblioteki C, z której korzysta niemal każdy program. 5 listopada badacz Özgün Kültekin z Wakefield opublikował błąd, który nazwał *sshole, a OpenSSH i Alpine jeszcze tego samego dnia wydały poprawki.

Błąd wymaga trzech rzeczy, które w Alpine są normalne: SSH bez PAM, włączonego logowania hasłem (domyślne ustawienie OpenSSH) i co najmniej jednego konta z prawdziwym hasłem. Wtedy atakujący może zalogować się na każde konto, które w polu hasła ma tylko „*”, czyli nie ma hasła, podając hasło o długości od 257 do 1024 bajtów. Takie pole mają użytkownicy logujący się tylko kluczem, a także root, choć Alpine domyślnie blokuje bezpośrednie logowanie roota przez SSH. W niektórych obrazach chmurowych Alpine odsłonięty użytkownik `alpine` może zdobyć uprawnienia roota bez hasła.

Błąd wziął się z dwóch starych decyzji. Od 2012 roku musl zwraca „*”, gdy nie może zahaszować hasła, a haseł SHA-crypt dłuższych niż 256 bajtów zahaszować nie potrafi. Od 2016 roku OpenSSH haszuje próby logowania nawet dla kont bez użytecznego hasła, z solą innego konta, żeby każde sprawdzenie trwało tyle samo. Wynik, „*”, zgadza się z zapisanym „*” i drzwi się otwierają. Twórcy OpenSSH mówią, że źródło problemu nie leży w ich kodzie; wersja 10.6p2 go obchodzi.

6 listopada firma Previdian, zajmująca się analizą zagrożeń, poinformowała, że atakujący w ciągu kilku godzin użyli błędu, zdobyli roota na jednym z jej serwerów-pułapek i uruchomili tylko podstawowe polecenia. Inni badacze i sam Alpine w chwili publikacji nie widzieli ataków.
