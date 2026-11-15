---
# Roadmap topic. Its title and summary show on every job page that lists "linux-basics" in learn.yml.
# The text under the dashes is the topic's own page: lvlulcuma.com/pl/roadmap/topics/linux-basics/
# How these pages are written: docs/claude/roadmap-topic.md
title: "Podstawy Linuksa"
summary: "System plików, użytkownicy i uprawnienia, procesy i usługi, menedżery pakietów, gdzie są logi (/var/log) i codzienne polecenia powłoki: ls, cd, grep, cat, tail, ps, ssh."
date: 2026-11-15
sources:
  - name: "Canonical: Canonical releases Ubuntu 26.04 LTS Resolute Raccoon"
    url: "https://canonical.com/blog/canonical-releases-ubuntu-26-04-lts-resolute-raccoon"
  - name: "Ubuntu 26.04 LTS release notes"
    url: "https://documentation.ubuntu.com/release-notes/26.04/"
  - name: "Debian: Debian 13 \"trixie\" released, August 9, 2025"
    url: "https://www.debian.org/News/2025/20250809.en.html"
  - name: "Kali Docs: Kali's relationship with Debian"
    url: "https://www.kali.org/docs/policy/kali-linux-relationship-with-debian/"
  - name: "Ubuntu project docs: Package format"
    url: "https://documentation.ubuntu.com/project/how-ubuntu-is-made/concepts/package-format/"
  - name: "Linux Foundation: Filesystem Hierarchy Standard 3.0, 2015"
    url: "https://refspecs.linuxfoundation.org/FHS_3.0/fhs/index.html"
  - name: "systemd: file-hierarchy(7)"
    url: "https://www.freedesktop.org/software/systemd/man/255/file-hierarchy.html"
  - name: "Debian 13 release notes: Issues to be aware of for trixie"
    url: "https://www.debian.org/releases/stable/release-notes/issues"
  - name: "Debian 12 release notes: Issues to be aware of for bookworm"
    url: "https://www.debian.org/releases/bookworm/amd64/release-notes/ch-information.en.html"
  - name: "Debian 11 release notes (yescrypt by default)"
    url: "https://www.debian.org/releases/bullseye/amd64/release-notes"
  - name: "Microsoft Learn: Adjust case sensitivity (WSL)"
    url: "https://learn.microsoft.com/windows/wsl/case-sensitivity"
  - name: "Linux man-pages: passwd(5)"
    url: "https://man7.org/linux/man-pages/man5/passwd.5.html"
  - name: "Linux man-pages: shadow(5)"
    url: "https://man7.org/linux/man-pages/man5/shadow.5.html"
  - name: "Debian manpages: crypt(5), libxcrypt"
    url: "https://manpages.debian.org/trixie/libcrypt-dev/crypt.5.en.html"
  - name: "Ubuntu manpages: login.defs(5)"
    url: "https://manpages.ubuntu.com/manpages/stonking/man5/login.defs.5.html"
  - name: "Ubuntu manpages: pam_umask(8)"
    url: "https://manpages.ubuntu.com/manpages/noble/man8/pam_umask.8.html"
  - name: "Ubuntu Server docs: User management"
    url: "https://documentation.ubuntu.com/server/how-to/security/user-management"
  - name: "Ubuntu Community Help: RootSudo"
    url: "https://help.ubuntu.com/community/RootSudo"
  - name: "Red Hat: Managing sudo access (RHEL 10)"
    url: "https://docs.redhat.com/en/documentation/Red_Hat_Enterprise_Linux/10/html/security_hardening/managing-sudo-access"
  - name: "Ubuntu Discourse: Ubuntu 25.10 (Questing Quokka) release notes"
    url: "https://discourse.ubuntu.com/t/questing-quokka-release-notes/59220"
  - name: "Trifecta Tech Foundation: Memory-safe sudo to become the default in Ubuntu, May 2025"
    url: "https://trifectatech.org/blog/memory-safe-sudo-to-become-the-default-in-ubuntu"
  - name: "GNU Coreutils manual: Mode structure"
    url: "https://www.gnu.org/s/coreutils/manual/html_node/Mode-Structure.html"
  - name: "GNU Coreutils manual: What information is listed (ls)"
    url: "https://gnu.org/software/coreutils/manual/html_node/What-information-is-listed.html"
  - name: "GNU Coreutils manual: shred invocation"
    url: "https://www.gnu.org/software/coreutils/shred"
  - name: "Arch manual pages: chmod(1)"
    url: "https://man.archlinux.org/man/chmod.1.txt"
  - name: "procps-ng: ps(1)"
    url: "https://man.archlinux.org/man/core/procps-ng/ps.1.en"
  - name: "Linux man-pages: signal(7)"
    url: "https://www.man7.org/linux/man-pages/man7/signal.7.html"
  - name: "Linux man-pages: proc_pid_exe(5)"
    url: "https://man7.org/linux/man-pages/man5/proc_pid_exe.5.html"
  - name: "SUSE: What is a kernel thread?"
    url: "https://www.suse.com/blog/what-is-a-kernel-thread/"
  - name: "Elastic Security: Executable Masquerading as Kernel Process (detection rule)"
    url: "https://www.elastic.co/guide/en/security/current/executable-masquerading-as-kernel-process.html"
  - name: "Linux man-pages: systemd.unit(5)"
    url: "https://man7.org/linux/man-pages/man5/systemd.unit.5.html"
  - name: "systemd: systemd.exec(5)"
    url: "https://www.freedesktop.org/software/systemd/man/253/systemd.exec.html"
  - name: "systemd: systemd.service(5)"
    url: "https://www.freedesktop.org/software/systemd/man/systemd.service.html"
  - name: "Microsoft Learn: Use systemd to manage Linux services with WSL"
    url: "https://learn.microsoft.com/windows/wsl/systemd"
  - name: "Debian manpages: crontab(5)"
    url: "https://manpages.debian.org/testing/cron/crontab.5.en.html"
  - name: "Debian manpages: apt-secure(8)"
    url: "https://manpages.debian.org/unstable/apt/apt-secure.8.en.html"
  - name: "dpkg(1) manual"
    url: "https://www.mankier.com/1/dpkg"
  - name: "Red Hat: Verifying packages with rpm -V"
    url: "https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/5/html/Deployment_Guide/s2-rpm-verifying.html"
  - name: "Red Hat: DNF commands list (RHEL 10)"
    url: "https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/10/html/managing_software_with_the_dnf_tool/dnf-commands-list"
  - name: "Fedora Project Wiki: DNF"
    url: "https://fedoraproject.org/wiki/DNF"
  - name: "Alpine Linux Wiki: Alpine Package Keeper"
    url: "https://wiki.alpinelinux.org/wiki/Alpine_Package_Keeper"
  - name: "Red Hat: Troubleshooting problems by using log files (RHEL 10)"
    url: "https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/10/html/risk_reduction_and_recovery_operations/troubleshooting-problems-by-using-log-files"
  - name: "Ubuntu tutorial: Viewing and monitoring log files"
    url: "https://ubuntu.com/tutorials/viewing-and-monitoring-log-files"
  - name: "Ubuntu: rsyslog default rules (50-default.conf)"
    url: "https://patches.ubuntu.com/r/rsyslog/rsyslog_8.2504.0-1ubuntu2.patch"
  - name: "systemd: journald.conf(5)"
    url: "https://www.freedesktop.org/software/systemd/man/258/journald.conf.html"
  - name: "Linux man-pages: journalctl(1)"
    url: "https://man7.org/linux/man-pages/man1/journalctl.1.html"
  - name: "GNU Bash manual: Bash History Facilities"
    url: "https://www.gnu.org/s/bash/manual/html_node/Bash-History-Facilities.html"
  - name: "IANA: Service Name and Transport Protocol Port Number Registry"
    url: "https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml"
  - name: "RFC 4251: The Secure Shell (SSH) Protocol Architecture, 2006"
    url: "https://www.rfc-editor.org/rfc/rfc4251"
  - name: "RFC 4252: The Secure Shell (SSH) Authentication Protocol, 2006"
    url: "https://www.rfc-editor.org/rfc/rfc4252"
  - name: "Linux man-pages: ssh(1)"
    url: "https://man7.org/linux/man-pages/man1/ssh.1.html"
  - name: "Linux man-pages: sshd(8)"
    url: "https://man7.org/linux/man-pages/man8/sshd.8.html"
  - name: "Linux man-pages: sshd_config(5)"
    url: "https://man7.org/linux/man-pages/man5/sshd_config.5.html"
  - name: "OpenSSH 9.5 release notes (Ed25519 keys by default)"
    url: "https://www.openssh.com/txt/release-9.5"
  - name: "OpenSSH 9.8 release notes (sshd-session)"
    url: "https://www.openssh.com/txt/release-9.8"
  - name: "OpenSSH 10.0 release notes (sshd-auth)"
    url: "https://openssh.com/txt/release-10.0"
  - name: "MITRE ATT&CK T1548.001: Setuid and Setgid"
    url: "https://attack.mitre.org/techniques/T1548/001/"
  - name: "MITRE ATT&CK T1036.004: Masquerade Task or Service"
    url: "https://attack.mitre.org/techniques/T1036/004/"
  - name: "MITRE ATT&CK T1543.002: Systemd Service"
    url: "https://attack.mitre.org/techniques/T1543/002/"
  - name: "MITRE ATT&CK T1053.006: Systemd Timers"
    url: "https://attack.mitre.org/techniques/T1053/006/"
  - name: "MITRE ATT&CK T1053.003: Cron"
    url: "https://attack.mitre.org/techniques/T1053/003/"
  - name: "MITRE ATT&CK T1546.004: Unix Shell Configuration Modification"
    url: "https://attack.mitre.org/techniques/T1546/004/"
  - name: "MITRE ATT&CK T1098.004: SSH Authorized Keys"
    url: "https://attack.mitre.org/techniques/T1098/004/"
  - name: "MITRE ATT&CK T1110.001: Password Guessing"
    url: "https://attack.mitre.org/techniques/T1110/001/"
  - name: "OverTheWire: Bandit"
    url: "https://overthewire.org/wargames/bandit/"
  - name: "Linux Foundation: Introduction to Linux (LFS101)"
    url: "https://training.linuxfoundation.org/training/introduction-to-linux/"
  - name: "TryHackMe: free learning path"
    url: "https://tryhackme.com/resources/blog/free_path"
visuals:
  # ls -l on the passwd program, one piece per row; the setuid bit is the point.
  lsl:
    kind: window
    title: "ls -l /usr/bin/passwd, kawałek po kawałku"
    lead: ["-rwsr-xr-x 1 root root 64152 May 30 2024 /usr/bin/passwd", "z jednego komputera z Ubuntu; rozmiar i data będą u ciebie inne"]
    head: ["Kawałek", "Co oznacza"]
    rows:
      - ["<code>-</code>", "Typ pliku: zwykły plik. <code>d</code> oznaczałoby katalog (folder), <code>l</code> dowiązanie"]
      - ["<code>rws</code>", "Właściciel może czytać, zmieniać i uruchamiać. <code>s</code> zamiast <code>x</code> to setuid: program działa jako jego właściciel"]
      - ["<code>r-x</code>", "Grupa może czytać i uruchamiać"]
      - ["<code>r-x</code>", "Wszyscy pozostali mogą czytać i uruchamiać"]
      - ["<code>1</code>", "Ile nazw (dowiązań twardych) ma plik"]
      - ["<code>root root</code>", "Właściciel, potem grupa"]
      - ["<code>64152</code>", "Rozmiar w bajtach"]
      - ["<code>May 30 2024</code>", "Kiedy ostatnio zmieniła się zawartość"]
    mark: 2
    caption: "Uruchomić <code>passwd</code> może każdy, a dzięki <code>s</code> działa on jako root. Tylko tak może zapisać twoje nowe hasło w <code>/etc/shadow</code>, pliku, którego nie możesz nawet przeczytać."
  # What happens when a normal user types sudo.
  sudo:
    kind: route
    stages:
      - where: "Wpisujesz sudo apt update"
        steps: ["sudo pyta o twoje własne hasło, nie o hasło roota"]
      - where: "sudo sprawdza reguły"
        steps: ["W /etc/sudoers: czy twoje konto albo jedna z twoich grup może to uruchomić?"]
      - where: "apt działa"
        steps: ["Jako root, użytkownik 0", "Twoja powłoka zostaje twoja: moc roota miało tylko to jedno polecenie"]
    caption: "Jeśli reguły na to nie pozwalają, sudo odmawia i nic nie działa jako root. Kto może pożyczać moc roota, określa <code>/etc/sudoers</code>, zwykle przez grupę: <code>sudo</code> w Debianie i Ubuntu, <code>wheel</code> w Red Hacie."
  # Parent and child pairs on Linux: what's normal, what needs an explanation.
  ptree:
    kind: cards
    cards:
      - title: "Normalne"
        text: "Pary, które zobaczysz na każdym zdrowym serwerze."
        tags: ["sshd → sshd-session → bash", "kthreadd (PID 2) → [kworker/0:1]", "systemd (PID 1) → cron → sh"]
      - title: "Wymaga wyjaśnienia"
        text: "Nie zawsze atak, ale nigdy nic, co można przepuścić bez zastanowienia."
        tags: ["nginx → sh → curl", "[kworker/0:2], którego rodzicem nie jest PID 2", "program działający z /tmp albo /dev/shm", "/proc/PID/exe kończące się na (deleted)"]
    caption: "Nazwa w nawiasach kwadratowych niczego nie dowodzi: każdy program może nazwać się <code>[kworker]</code>. Jego rodzic, jego użytkownik i jego plik w <code>/proc</code> powiedzą znacznie więcej."
  # A made-up unit file, line by line.
  unit:
    kind: window
    title: "/etc/systemd/system/backup-agent.service (zmyślony)"
    head: ["Wiersz", "Co robi"]
    rows:
      - ["<code>[Unit]</code>", "Zaczyna sekcję opisującą jednostkę"]
      - ["<code>Description=Nightly backup agent</code>", "Nazwa, którą pokazuje <code>systemctl status</code>"]
      - ["<code>[Service]</code>", "Zaczyna sekcję o tym, jak ją uruchamiać"]
      - ["<code>ExecStart=/opt/backup-agent/bin/agent</code>", "Program, który uruchamia systemd"]
      - ["<code>User=backup</code>", "Konto, jako które działa. Bez tego wiersza usługa systemowa działa jako root"]
      - ["<code>Restart=on-failure</code>", "Uruchom ją ponownie, jeśli padnie albo zakończy się błędem"]
      - ["<code>[Install]</code>", "Zaczyna sekcję, którą czyta <code>systemctl enable</code>"]
      - ["<code>WantedBy=multi-user.target</code>", "enable podpina tu jednostkę, więc startuje przy każdym rozruchu"]
    mark: 4
    caption: "Żeby ocenić usługę, przeczytaj trzy wiersze: co uruchamia (<code>ExecStart</code>), jako kto (<code>User</code>) i czy startuje przy rozruchu (<code>WantedBy</code>, jeśli jest włączona)."
  # The first places to check for anything that starts by itself, with their ATT&CK technique.
  persist:
    kind: cards
    layout: rows
    cards:
      - title: "Usługi systemd"
        text: "Plik jednostki włączony tak, by startował przy każdym rozruchu, zwykle jako root. Utworzenie ogólnosystemowej wymaga roota."
        tags: ["/etc/systemd/system", "~/.config/systemd/user", "ATT&CK T1543.002"]
      - title: "Timery systemd"
        text: "Jednostka .timer, która uruchamia usługę według harmonogramu, jak zaplanowane zadanie w Windowsie."
        tags: ["systemctl list-timers", "ATT&CK T1053.006"]
      - title: "cron"
        text: "Wiersz w crontabie uruchamia polecenie o ustalonych porach albo przy każdym rozruchu z @reboot. Własny może mieć każdy użytkownik."
        tags: ["crontab -l", "/etc/crontab", "/etc/cron.d", "ATT&CK T1053.003"]
      - title: "Pliki startowe powłoki"
        text: "Polecenia w .bashrc albo .profile wykonują się za każdym razem, gdy ten użytkownik otwiera powłokę. Zmiana własnych nie wymaga roota."
        tags: ["~/.bashrc", "/etc/profile", "ATT&CK T1546.004"]
      - title: "SSH authorized_keys"
        text: "Jeden wiersz więcej i ktoś może logować się własnym kluczem, bez żadnego hasła."
        tags: ["~/.ssh/authorized_keys", "ATT&CK T1098.004"]
    caption: "Pierwsze pięć miejsc do sprawdzenia, gdy szukasz czegoś, co uruchamia się samo albo wpuszcza kogoś z powrotem."
  # One made-up journal line from the SSH server, piece by piece.
  logline:
    kind: window
    title: "Jedno logowanie przez SSH w dzienniku (zmyślone)"
    lead: ["Nov 12 09:41:09 web-01 sshd-session[2211]: Accepted password for deploy from 203.0.113.50 port 51562 ssh2", "tak, jak pokazuje je journalctl"]
    head: ["Kawałek", "Co oznacza"]
    rows:
      - ["<code>Nov 12 09:41:09</code>", "Kiedy to się stało, w czasie lokalnym komputera. Bez roku"]
      - ["<code>web-01</code>", "Nazwa komputera"]
      - ["<code>sshd-session[2211]</code>", "Program i jego PID: serwer SSH (przed OpenSSH 9.8 <code>sshd</code>)"]
      - ["<code>Accepted password</code>", "Logowanie się udało, hasłem. Logowanie kluczem daje <code>Accepted publickey</code>"]
      - ["<code>for deploy</code>", "Konto"]
      - ["<code>from 203.0.113.50 port 51562</code>", "Skąd: adres i jego port"]
    mark: 4
    caption: "Po setkach nieudanych prób z tego samego adresu liczy się właśnie ten wiersz: ktoś ma teraz powłokę jako <code>deploy</code>."
  # SSH keys: what lives where, and what proves what.
  ssh:
    kind: route
    stages:
      - where: "Na twoim komputerze"
        steps: ["ssh-keygen tworzy dwa pliki: id_ed25519 (klucz prywatny) i id_ed25519.pub (publiczny)", "Klucz prywatny nigdy nie opuszcza twojego komputera"]
      - where: "Na serwerze"
        steps: ["Twój klucz publiczny trafia do ~/.ssh/authorized_keys twojego konta na serwerze", "Własny klucz hosta serwera dowodzi, że to maszyna, o którą ci chodziło"]
      - where: "Przy połączeniu"
        steps: ["ssh porównuje klucz hosta z known_hosts i ostrzega, jeśli się zmienił", "Twój ssh podpisuje kluczem prywatnym, a serwer sprawdza podpis publicznym", "Żadne hasło nie idzie przez sieć"]
    caption: "Kto może dopisać wiersz do <code>authorized_keys</code>, ten może logować się jako to konto. Dlatego lubią go atakujący (ATT&amp;CK T1098.004) i dlatego sprawdzają go obrońcy."
  quiz:
    kind: questions
    items:
      - q: "<code>ls -ld /tmp</code> pokazuje <code>drwxrwxrwt</code>. Co robi <code>t</code> i po co jest w <code>/tmp</code>?"
        a: "To bit sticky. Tworzyć pliki w <code>/tmp</code> może każdy, ale usunąć albo zmienić nazwę pliku może tylko jego właściciel (albo właściciel folderu, albo root). Bez niego każdy użytkownik mógłby kasować pliki tymczasowe wszystkich innych."
      - q: "<code>/etc/shadow</code> ma <code>-rw-r----- root shadow</code>. Czy alex, który nie należy do grupy shadow, może go przeczytać? Jaki to tryb liczbowo?"
        a: "Nie. Właściciel (root) może czytać i zapisywać, grupa (shadow) czytać, wszyscy pozostali nic. To 640: 4+2, 4, 0."
      - q: "Crontab roota co noc uruchamia <code>/opt/scripts/cleanup.sh</code>, a <code>ls -l</code> pokazuje go jako <code>-rwxrwxrwx</code>. Dlaczego to poważne?"
        a: "Każdy na komputerze może zmienić skrypt, a cokolwiek do niego dopisze, wykona się jako root przy następnym uruchomieniu. Plik, który uruchamia root, może być zapisywalny tylko dla roota."
      - q: "Proces <code>[kworker/0:2]</code> działa jako deploy z rodzicem o PID 1, a <code>/proc/2290/exe</code> wskazuje na <code>/dev/shm/.k (deleted)</code>. Wątek jądra czy nie?"
        a: "Nie. Prawdziwe wątki jądra należą do roota, uruchamia je kthreadd (PID 2) i nie mają pliku programu. To program, który pożyczył zaufaną nazwę (ATT&amp;CK T1036.004) i usunął własny plik. Dopóki działa, wciąż można go skopiować z <code>/proc/2290/exe</code>, więc zrób to, zanim go zatrzymasz."
      - q: "<code>kill 2290</code> nie zatrzymuje procesu: przechwytuje sygnał i działa dalej. Co możesz wysłać zamiast tego i jaki jest haczyk?"
        a: "<code>kill -9 2290</code> wysyła SIGKILL, którego nie da się przechwycić, zablokować ani zignorować. Haczyk: program nie zdąży po sobie posprzątać, a w dochodzeniu przepadnie wszystko, co było tylko w jego pamięci, więc najpierw zbierz dowody."
      - q: "SSH ostrzega, że klucz hosta serwera się zmienił. Co mogło się stać i co robisz?"
        a: "Serwer mógł zostać przeinstalowany albo dostać nowe klucze, ale ktoś może też siedzieć między tobą a nim. Właśnie dlatego ssh wyłącza logowanie hasłem dla tego połączenia. Zanim usuniesz stary klucz z <code>known_hosts</code>, sprawdź to u osoby, która opiekuje się serwerem."
      - q: "Na serwerze z Debianem 13 nie ma <code>/var/log/auth.log</code>. Gdzie podziały się komunikaty o logowaniach?"
        a: "Trafiły do dziennika systemd. Od Debiana 12 rsyslog, program, który pisze te pliki tekstowe, nie jest instalowany domyślnie. Czytaj je przez <code>journalctl</code>, na przykład <code>journalctl -u ssh</code>."
      - q: "<code>sudo dpkg --verify coreutils</code> wypisuje <code>??5??????   /usr/bin/ls</code>. Co ci to mówi, a czego nie dowodzi?"
        a: "Zawartość pliku nie zgadza się już z sumą kontrolną zapisaną przez pakiet: ktoś albo coś zmienił <code>ls</code>. Warto się przyjrzeć. Ale dpkg nazywa to sprawdzeniem integralności, nie weryfikacją bezpieczeństwa: atakujący z prawami roota może zmienić także bazę, więc czysty wynik nie dowodzi, że plik jest bezpieczny."
      - q: "alex uruchamia <code>sudo -l</code> i widzi <code>(ALL : ALL) ALL</code>. Co to oznacza, jeśli atakujący ukradnie hasło alexa?"
        a: "alex może uruchomić dowolne polecenie jako dowolny użytkownik, także root. Z tym hasłem atakujący zostaje rootem jednym <code>sudo</code>. Dlatego <code>sudo -l</code> jest wśród pierwszych poleceń atakujących i dlatego obrońcy trzymają grupę sudo małą."
---

## Krótko

Wyobraź sobie komputer z Linuksem jako dużą bibliotekę.

- Każda sala, półka i książka należy do jednej mapy, która zaczyna się od drzwi wejściowych, `/`: to **system
  plików**. Nawet maszyny biblioteki i pracujący w niej ludzie mają w niej swój wpis. W Linuksie prawie wszystko jest
  plikiem.
- Każdy ma **kartę biblioteczną** z numerem: to **użytkownik** i jego **UID**. Karty należą do klubów, czyli **grup**,
  więc reguła może dotyczyć całego klubu naraz.
- Każda książka ma etykietę z trzema polami: co może z nią robić jej **właściciel**, jej **grupa** i **wszyscy
  pozostali**: czytać, zmieniać albo uruchamiać. To **uprawnienia**.
- Jedna karta otwiera wszystkie drzwi: **root**, numer 0. Pracownicy pożyczają jej moc na jedno zadanie naraz przez
  **sudo**.
- Ludzie, którzy pracują w tej chwili, to **procesy**. Nocna zmiana, która przychodzi przed wszystkimi, to **usługi**,
  a główny bibliotekarz, który ich zatrudnia i pilnuje, to **systemd**.
- Nowe książki przychodzą w zaplombowanych, podpisanych pudłach od znanych dostawców: to **pakiety**, które rozpakowuje
  **menedżer pakietów**, na przykład apt.
- Wszystko, co ważne, trafia do dziennika: to **logi**, w `/var/log` i w **dzienniku systemd** (journal).
- Z biblioteką rozmawiasz przez okienko przy ladzie, czyli **powłokę**. **SSH** to to samo okienko, do którego
  bezpiecznie podchodzisz z innego budynku.

<mark>W Linuksie prawie wszystko jest plikiem w jednym drzewie, które zaczyna się od `/`, a każdy plik i każdy proces
należy do jakiegoś użytkownika. Trzy zestawy uprawnień do odczytu, zapisu i wykonania decydują, kto co może, a root,
użytkownik 0, może prawie wszystko.</mark> Prawie wszystko, co obrońcy sprawdzają na serwerze z Linuksem, sprowadza się
do trzech pytań: kim jestem, do czego mam dostęp i co uruchamia się samo?

Po lekturze tej strony będziesz umieć:

- poruszać się po systemie plików i powiedzieć, co jest w `/etc`, `/home`, `/var/log`, `/tmp` i `/proc`;
- czytać `/etc/passwd`, wyjaśnić, czym jest UID, i powiedzieć, kto może używać `sudo`;
- czytać `ls -l` i tryby takie jak 755 i 600 oraz zauważyć ryzykowny plik z setuid;
- przeglądać procesy, czytać drzewo procesów i sprawdzać podejrzany proces przez `/proc`;
- przeglądać usługi, timery i zadania crona oraz wymienić miejsca, z których programy uruchamiają się same;
- instalować, wyszukiwać i sprawdzać oprogramowanie menedżerem pakietów;
- znaleźć logi, przeczytać wiersz o logowaniu przez SSH i przeszukiwać je za pomocą `journalctl` i `grep`;
- łączyć codzienne polecenia potokami i logować się przez SSH kluczem zamiast hasłem.

## Słowa, które się przydadzą

- **Jądro** (kernel): rdzeń systemu, który uruchamia programy i rozmawia ze sprzętem. Ściśle biorąc, „Linux” to tylko
  jądro.
- **Dystrybucja** (distro): jądro razem z programami, ustawieniami i menedżerem pakietów, gotowe do instalacji:
  Ubuntu, Debian, Red Hat Enterprise Linux (RHEL), Fedora, Kali.
- **Terminal i powłoka** (shell): terminal to okno, a powłoka to program w nim, który czyta twoje polecenia.
  Większość systemów Linux używa **basha**.
- **Ścieżka**: adres pliku w drzewie, na przykład `/home/alex/notes.txt`.
- **root**: wszechmocne konto, użytkownik 0. To samo słowo nazywa też szczyt drzewa, `/`, i własny folder domowy
  roota, `/root`.
- **Demon** (daemon): program działający w tle, często z nazwą zakończoną na „d”: `sshd`, `systemd-journald`.
- **Pakiet**: program spakowany razem ze swoimi plikami, wersją i listą tego, czego jeszcze potrzebuje, gotowy do
  zainstalowania przez menedżer pakietów.

> [!NOTE]
> Przykłady na tej stronie pochodzą z Ubuntu 26.04 LTS („Resolute Raccoon”, wydane 23 kwietnia 2026 r., wspierane
> do kwietnia 2031 r.) i Debiana 13 „trixie” (9 sierpnia 2025 r.). Ubuntu jest zbudowane na Debianie, a Kali Linux na
> testowej gałęzi Debiana, więc to, co działa w jednym, zwykle działa też w pozostałych. Tam, gdzie Red Hat Enterprise
> Linux i Fedora robią coś inaczej, strona o tym mówi.

## System plików

### Jedno drzewo od `/`

Windows ma litery dysków, Linux ma jedno drzewo. Wszystko zwisa z jego szczytu, `/`, nazywanego **katalogiem
głównym**. Drugi dysk czy pendrive nie dostaje litery: jest **montowany**, czyli podpinany do folderu w drzewie, na
przykład w `/mnt` albo `/media`.

- **Ścieżka bezwzględna** zaczyna się od szczytu: `/var/log/syslog`. **Ścieżka względna** zaczyna się tam, gdzie
  jesteś: z `/var` ścieżka `log/syslog` prowadzi do tego samego pliku.
- `.` oznacza folder, w którym jesteś, `..` folder piętro wyżej, a `~` twój folder domowy: dla alexa `~/notes.txt`
  to `/home/alex/notes.txt`.
- Nazwy **rozróżniają wielkość liter**: `Report.txt` i `report.txt` to dwa różne pliki.
- Nazwa zaczynająca się od kropki jest **ukryta**: `.bashrc`, `.ssh`. Zwykłe `ls` ją pomija, `ls -a` pokazuje.
  Ukryte nie znaczy tajne, to tylko zdejmuje ustawienia z oczu, ale łatwo też schować tam plik, na który nikt nie
  patrzy.

### Foldery, które warto znać

Co gdzie leży, określa **Filesystem Hierarchy Standard** (FHS 3.0, 2015), a w systemach z systemd także jego zasady
file-hierarchy. Te foldery znajdziesz na prawie każdym komputerze z Linuksem:

| Folder | Co w nim jest | Dlaczego to ważne dla bezpieczeństwa |
|---|---|---|
| `/etc` | Ustawienia całego systemu, w plikach tekstowych | Konta, reguły sudo, serwer SSH, cron: zmieniasz plik tutaj, zmieniasz system |
| `/home` | Folder dla każdej osoby: `/home/alex` | Jej pliki, ukryte ustawienia, klucze SSH i historia powłoki |
| `/root` | Własny folder domowy roota, poza `/home` | To samo, ale dla najpotężniejszego konta |
| `/var/log` | Logi, które przetrwają restart | Pierwsze miejsce, do którego się zagląda, gdy coś się stało |
| `/tmp` | Pliki tymczasowe, które może zapisywać każdy; zwykle czyszczony przy rozruchu | Ulubione miejsce, żeby coś podrzucić: pisać może tam każdy |
| `/var/tmp` | Pliki tymczasowe, które przetrwają restart | To samo, ale pliki zostają po ponownym uruchomieniu |
| `/dev/shm` | Pamięć współdzielona, w RAM-ie, czyszczona przy rozruchu | Zapisywalny dla każdego i po restarcie nic nie zostaje |
| `/usr/bin`, `/usr/sbin` | Programy. `/bin` i `/sbin` to dziś tylko dowiązania do nich | Tu mieszkają zaufane programy; „systemowy” program gdzie indziej jest dziwny |
| `/opt` | Dodatkowe oprogramowanie, często spoza dystrybucji | Sprawdź, skąd wziął się każdy program |
| `/usr/local` | Oprogramowanie zainstalowane ręcznie przez administratora | Żadna baza pakietów nie ręczy za te pliki |
| `/boot` | Jądro i pliki, które uruchamiają system | To, co zmieniono tutaj, uruchamia się przed wszystkim innym |
| `/proc` | Nie leży na dysku: jądro pokazuje każdy działający proces jako folder | Żywe dowody o każdym procesie |
| `/dev` | Urządzenia pokazane jako pliki: dyski, terminale, `/dev/null` | |
| `/run` | Dane potrzebne programom w trakcie działania, w pamięci | Czyszczony przy każdym rozruchu |

Zasady systemd wymieniają jedyne miejsca, do których może pisać zwykły użytkownik: `/tmp`, `/var/tmp`, `/dev/shm`,
jego folder domowy i mały folder użytkownika w `/run`. Właśnie na tej krótkiej liście atakujący, który dostał się do
środka jako zwykły użytkownik, zostawia swoje pliki, dlatego obrońcy zaglądają tam najpierw.

> [!NOTE]
> Debian 13 zmienił dwa z tych folderów. `/tmp` mieszka teraz w pamięci (to **tmpfs**), więc po każdym restarcie jest
> pusty, a pliki, których nikt nie używał, znikają automatycznie: po 10 dniach w `/tmp` i po 30 dniach w `/var/tmp`.
> Dowody w tych folderach żyją krótko.

### Wszystko jest plikiem

Linux pokazuje prawie wszystko jako pliki: ustawienia to pliki tekstowe w `/etc`, urządzenia to pliki w `/dev`, a
działające procesy to foldery w `/proc`. Dlatego te same kilka narzędzi, `cat`, `grep` i `ls`, działa z prawie
wszystkim. Pierwszy znak w `ls -l` mówi, na jaki typ pliku patrzysz:

| Znak | Typ |
|---|---|
| `-` | Zwykły plik |
| `d` | Katalog (folder) |
| `l` | Dowiązanie symboliczne: wskaźnik na inną ścieżkę |
| `c`, `b` | Urządzenie: znakowe (terminal) albo blokowe (dysk) |
| `p`, `s` | Potok albo gniazdo: sposoby, w jakie programy rozmawiają ze sobą |

## Użytkownicy, grupy i root

### Konta to wiersze w pliku tekstowym

Każde konto to jeden wiersz w `/etc/passwd`, pliku, który **może przeczytać każdy**. Wiersz ma siedem pól
rozdzielonych dwukropkami:

```
alex:x:1000:1000:Alex Example:/home/alex:/bin/bash
```

| Pole | Tutaj | Co oznacza |
|---|---|---|
| Nazwa | `alex` | Nazwa do logowania |
| Hasło | `x` | Skrótu tu nie ma, jest w `/etc/shadow` |
| UID | `1000` | Numer użytkownika: Linux sprawdza właśnie jego, nie nazwę |
| GID | `1000` | Numer głównej grupy użytkownika |
| Komentarz | `Alex Example` | Zwykle imię i nazwisko |
| Folder domowy | `/home/alex` | Skąd użytkownik zaczyna |
| Powłoka | `/bin/bash` | Program, który startuje przy logowaniu. Konta usług mają `/usr/sbin/nologin`: żadnego logowania |

Skróty (hashe) haseł leżą w **`/etc/shadow`**, którego zwykli użytkownicy nie powinni móc przeczytać. W Debianie i Ubuntu ma
uprawnienia `-rw-r-----`, a jego właścicielem jest root i grupa shadow. Drugie pole pokazuje, jak zahaszowano hasło:

- `$y$…` to **yescrypt**, domyślny od Debiana 11; właśnie tę metodę biblioteka libxcrypt zaleca dla nowych skrótów.
- `$6$…` to **SHA-512 crypt**, starsza metoda, którą wciąż spotkasz na wielu systemach.
- Pole, które jest `!` albo `*` lub zaczyna się od `!`, oznacza, że żadne hasło nie zadziała: konto nie może
  zalogować się hasłem. Tak wyglądają nowe konta, którym nikt jeszcze nie nadał hasła.

### UID: numer za nazwą

| UID | Kto |
|---|---|
| `0` | root. Każde konto z UID 0 ma moc roota, jakkolwiek się nazywa |
| `1`–`999` | Konta systemowe i usługowe, na przykład `www-data` dla serwera WWW. Nowe dostają domyślnie 101–999 |
| `1000` i więcej | Ludzie. Konto pierwszej osoby zwykle dostaje 1000 |

Drugie konto z UID 0 to klasyczna kryjówka: niewinna nazwa z mocą roota. Szybki test: czy jakikolwiek wiersz w
`/etc/passwd` poza wierszem roota ma `0` w trzecim polu.

`id` pokazuje, kim jesteś w tej chwili:

```sh
id
```

```
uid=1000(alex) gid=1000(alex) groups=1000(alex),4(adm),27(sudo)
```

### Grupy

Każdy użytkownik ma grupę główną (w Debianie i Ubuntu grupę o tej samej nazwie co on) i może należeć do kolejnych
grup, wymienionych w `/etc/group`. Kilka grup daje prawdziwą moc:

- **sudo** (Debian, Ubuntu) i **wheel** (Red Hat, Fedora): mogą uruchamiać polecenia jako root przez `sudo`.
- **adm** i **systemd-journal**: mogą czytać cały dziennik systemu, nie tylko własne komunikaty.

### root i sudo

root może przeczytać i zmienić każdy plik i zatrzymać każdy proces: sprawdzanie uprawnień, o którym za chwilę, prawie
go nie dotyczy. Dlatego codzienną pracę wykonuje się jako zwykły użytkownik, a moc roota pożycza się tylko wtedy, gdy
jest potrzebna.

- W **Ubuntu** hasło roota jest zablokowane: nikt nie może zalogować się jako root. Zamiast tego pierwsze konto
  utworzone podczas instalacji należy do grupy **sudo**.
- **`sudo`** uruchamia jedno polecenie jako root, prosząc o **twoje własne** hasło. Kto może go używać, określają
  `/etc/sudoers` i pliki w `/etc/sudoers.d/`. W Ubuntu wiersz `%sudo ALL=(ALL:ALL) ALL` pozwala grupie sudo uruchamiać
  wszystko; w Red Hacie to samo dla wheel robi `%wheel ALL=(ALL) ALL`. Edytuj te pliki tylko przez `visudo`, który
  przed zapisaniem sprawdza je pod kątem błędów: zepsuty plik sudoers może całkiem unieruchomić sudo.
- **`sudo -l`** pokazuje, co wolno ci uruchamiać przez sudo. To jedno z pierwszych poleceń, które atakujący uruchamia
  po wejściu do systemu, i z tego samego powodu obrońca powinien je sprawdzać.

<!-- pic: sudo -->

> [!ASIDE] Nowe sudo w Ubuntu
> Od Ubuntu 25.10 polecenie `sudo` dostarcza **sudo-rs**, bezpieczna pamięciowo nowa wersja napisana w języku
> programowania Rust przez Trifecta Tech Foundation. Nadal wpisujesz `sudo`, więc na tej stronie nic się nie zmienia,
> ale właśnie dlatego w Ubuntu 26.04 możesz zobaczyć „sudo-rs” w nazwach pakietów i komunikatach. Oryginalne sudo nadal
> jest, tylko jego programy mają w nazwie końcówkę `.ws`.

## Uprawnienia

### Jak czytać `ls -l`

Każdy plik ma **właściciela**, **grupę** i **tryb**: trzy zestawy po trzy bity, dla właściciela, dla grupy i dla
wszystkich pozostałych (często nazywanych „others”). Każdy zestaw mówi, czy dana osoba może **r**ead, czyli czytać,
**w**rite, czyli zmieniać, albo e**x**ecute, czyli wykonywać plik.

<!-- pic: lsl -->

W przypadku **folderu** te same litery znaczą coś trochę innego i na tym potykają się początkujący:

- **r** pozwala zobaczyć nazwy w środku.
- **w** pozwala tworzyć, usuwać i zmieniać nazwy plików w środku, nawet tych, których sam nie możesz zmieniać.
- **x** pozwala wejść do folderu i dostać się do plików w nim. Bez tego znajomość nazwy pliku nic nie da.

Linux sprawdza tylko jeden zestaw: jeśli jesteś właścicielem, obowiązują bity właściciela; jeśli nie, ale należysz do
grupy pliku, bity grupy; w przeciwnym razie bity pozostałych. root pomija te sprawdzenia.

### Tryby jako liczby

Każda litera ma wartość: **r = 4, w = 2, x = 1**. Zsumuj je dla każdego zestawu, a dostaniesz trzy cyfry:

| Tryb | Litery | Typowe zastosowanie |
|---|---|---|
| `755` | `rwxr-xr-x` | Programy i foldery, z których korzystać może każdy, a zmieniać tylko właściciel |
| `644` | `rw-r--r--` | Zwykłe pliki: właściciel edytuje, wszyscy czytają |
| `640` | `rw-r-----` | `/etc/shadow`: root zapisuje, grupa shadow czyta, nikt więcej |
| `600` | `rw-------` | Pliki prywatne, na przykład prywatne klucze SSH |
| `700` | `rwx------` | Prywatne foldery, na przykład `~/.ssh` |
| `1777` | `rwxrwxrwt` | `/tmp`: zapisują wszyscy, bit sticky chroni każdy plik |
| `777` | `rwxrwxrwx` | Zmienić może każdy: prawie zawsze błąd |

Tryby zmienia się poleceniem `chmod`, a właścicieli `chown` (potrzebny root):

```sh
chmod 600 ~/.ssh/id_ed25519
chmod u+x backup.sh
sudo chown alex:alex report.txt
```

`u+x` znaczy „dodaj wykonywanie użytkownikowi, który jest właścicielem”; `g` to grupa, `o` pozostali, `a` wszyscy
trzej.

Nowe pliki dostają tryb od **umask**, która odejmuje bity od wartości początkowej (666 dla plików, 777 dla folderów).
Zwykła wartość to `022`, co daje pliki `644` i foldery `755`. W Ubuntu zwykły użytkownik, którego grupa główna nazywa
się tak jak on, dostaje zamiast tego `002`, więc jego nowe pliki mają `664`: zmieniać je może też grupa.

### Trzy specjalne bity

Czwarta cyfra z przodu dodaje jeszcze trzy bity. Są rzadkie i właśnie dlatego warto je sprawdzać:

- **setuid** (`4000`, `s` w miejscu x właściciela): program działa **jako właściciel pliku**, a nie jako ten, kto go
  uruchomił. Tego potrzebuje `passwd`, żeby zmienić `/etc/shadow`.
- **setgid** (`2000`, `s` w miejscu x grupy): ten sam pomysł dla grupy.
- **bit sticky** (`1000`, `t` w miejscu x pozostałych): w folderze, do którego każdy może pisać, usunąć albo zmienić
  nazwę pliku może tylko jego właściciel (albo właściciel folderu, albo root). Ma go `/tmp`.

Program z setuid roota, który da się zmusić do uruchamiania innych poleceń albo który ma błąd, rozdaje roota.
Atakujący szukają takich w pierwszej kolejności (ATT&CK T1548.001), więc szukaj ich i ty:

```sh
find / -perm -4000 -type f 2>/dev/null
```

`-perm -4000` znaczy „ma bit setuid”, a `2>/dev/null` wyrzuca błędy „Permission denied” z folderów, których nie możesz
otworzyć. W `/usr/bin` niewielkiej instalacji Ubuntu 24.04 jest ich na przykład dziesięć: `chfn`, `chsh`,
`fusermount3`, `gpasswd`, `mount`, `newgrp`, `passwd`, `su`, `sudo` i `umount`. Trzymaj listę tego, co normalne: nowy
plik z setuid, zwłaszcza w `/tmp` albo folderze domowym, wymaga wyjaśnienia.

> [!WARNING]
> `chmod 777` „naprawia” błąd uprawnień, pozwalając wszystkim zmieniać plik. Jeśli root albo usługa kiedykolwiek go
> uruchomi, każdy na komputerze może uruchomić własny kod z tą mocą. Daj temu jednemu kontu, które tego potrzebuje, ten
> jeden bit, którego potrzebuje.

## Procesy

### Co ma proces

**Proces** to działający program. Każdy ma:

- **PID** (identyfikator procesu) i **PPID**, czyli PID swojego rodzica: każdy proces uruchamia inny proces;
- **użytkownika**, jako który działa, i to decyduje, do czego ma dostęp;
- **wiersz poleceń**: program i wszystko, co wpisano po nim;
- plik programu, z którego go uruchomiono, oraz otwarte pliki i połączenia sieciowe.

Pierwszy proces, PID 1, to **systemd**: uruchamia całą resztę w przestrzeni użytkownika. PID 2 to **kthreadd**, który
uruchamia własnych pomocników jądra, czyli **wątki jądra**. Nie mają pliku programu ani wiersza poleceń, więc `ps`
pokazuje ich nazwy w nawiasach kwadratowych: `[kworker/0:1]`.

### Jak je zobaczyć

```sh
ps -ef
ps -ef --forest
top
```

- `ps -ef` wypisuje wszystkie procesy z użytkownikiem (UID), PID, PPID, czasem startu i poleceniem. W poradnikach
  zobaczysz też `ps aux`: tę samą listę w starszym stylu BSD, z kolumnami procesora i pamięci.
- `--forest` rysuje listę jako drzewo, więc widać, kto uruchomił kogo.
- `top` pokazuje na żywo najbardziej zajęte procesy; żeby wyjść, naciśnij `q`.

W kolumnie `STAT` polecenia `ps aux` pojawiają się litery, które warto znać: **R** działa, **S** śpi (na coś czeka),
**D** czeka na dysk i nie da się go przerwać, **T** zatrzymany, **Z** zombie (zakończył się, ale rodzic jeszcze go nie
odebrał) i **I** bezczynny wątek jądra.

<!-- pic: ptree -->

### Zaglądamy do `/proc`

Wszystko, co pokazuje `ps`, bierze z `/proc`, a ty też możesz to przeczytać. Każdy proces ma folder `/proc/<PID>`;
dwa wpisy w nim warto znać od pierwszego dnia:

- **`/proc/<PID>/exe`** to dowiązanie do pliku programu, z którego uruchomiono proces. Jeśli ten plik został od tamtej
  pory usunięty, dowiązanie kończy się na ` (deleted)`. To częsta sztuczka złośliwego oprogramowania, które nie chce
  zostawiać niczego na dysku. Proces wciąż trzyma plik otwarty, więc dopóki działa, możesz skopiować go z powrotem z
  `/proc/<PID>/exe`.
- **`/proc/<PID>/cmdline`** zawiera wiersz poleceń, z którym uruchomiono proces. Program może sam wybrać nazwę, którą
  tam pokazuje, więc `ps` może wypisać `[kworker/0:2]` dla czegokolwiek; dowiązanie `exe`, prowadzone przez jądro,
  nadal wskazuje prawdziwy plik.

`$$` to PID twojej własnej powłoki, więc `ls -l /proc/$$/exe` pokazuje, jakim programem jest twoja powłoka.

### Jak zatrzymać proces: sygnały

Proces zatrzymuje się albo popędza, wysyłając mu **sygnał**. Wysyła go `kill`; mimo nazwy nie zawsze zabija.

| Sygnał | Numer | O co prosi |
|---|---|---|
| SIGTERM | 15 | „Proszę, zakończ się”. To wysyła `kill` domyślnie; program może najpierw posprzątać albo go zignorować |
| SIGINT | 2 | Przerwanie z klawiatury: to wysyła Ctrl+C |
| SIGHUP | 1 | Terminal, do którego należał, został zamknięty |
| SIGKILL | 9 | Zakończ się natychmiast. Nie da się go przechwycić, zablokować ani zignorować |

```sh
kill 2290
kill -9 2290
```

Zamiast numeru możesz podać nazwę: `kill -KILL 2290` to to samo co `kill -9 2290`.

> [!TIP]
> W dochodzeniu nie spiesz się z `kill -9`. Pamięć procesu i usunięty plik jego programu znikną razem z nim. Najpierw
> zbierz (skopiuj `/proc/<PID>/exe`, zanotuj jego wiersz poleceń, użytkownika i połączenia sieciowe), potem zatrzymaj.

## Usługi i systemd

### Jednostki

**Usługa** to program działający w tle, zwykle od rozruchu, niezależnie od tego, czy ktoś jest zalogowany. W Debianie,
Ubuntu, Red Hacie, Fedorze i większości innych dystrybucji uruchamia je, zatrzymuje i restartuje **systemd**. Każdą
rzecz, którą zarządza, opisuje w małym pliku tekstowym zwanym **jednostką** (unit): `ssh.service` dla serwera SSH w
Ubuntu, `apt-daily.timer` dla timera, który codziennie sprawdza aktualizacje.

Pliki jednostek leżą w trzech głównych miejscach:

| Folder | Kto je tam kładzie |
|---|---|
| `/usr/lib/systemd/system` | Pakiety |
| `/etc/systemd/system` | Administrator. Jednostka tutaj wygrywa z jednostką o tej samej nazwie z pakietu |
| `~/.config/systemd/user` | Pojedynczy użytkownik, dla własnych usług |

<!-- pic: unit -->

Polecenia, których będziesz używać najczęściej:

```sh
systemctl status ssh
systemctl list-units --type=service --state=running
systemctl list-unit-files --state=enabled
sudo systemctl restart ssh
sudo systemctl enable ssh
systemctl list-timers
```

`status` pokazuje, czy usługa działa, jej PID, plik jednostki i ostatnie wiersze logów. `enable` sprawia, że startuje
przy każdym rozruchu (tworząc dowiązania, o które prosi sekcja `[Install]`), a `disable` to cofa; `start`, `stop` i
`restart` działają od razu. Jednostka serwera SSH nazywa się `ssh` w Debianie i Ubuntu oraz `sshd` w Red Hacie i
Fedorze.

**Timer** to jednostka, która uruchamia usługę według harmonogramu: codziennie, godzinę po rozruchu, w każdy
poniedziałek. `systemctl list-timers` pokazuje każdy timer, kiedy ostatnio zadziałał i kiedy zadziała następnym razem.

### cron

Przed timerami systemd był **cron** i wciąż jest popularny. Każdy wiersz **crontaba** ma pięć pól czasu i polecenie:

```
# minute  hour  day of month  month  day of week   command
  30      2     *             *      *             /usr/local/bin/backup.sh
  @reboot                                          /home/alex/start.sh
```

Pierwszy wiersz działa codziennie o 02:30 (`*` znaczy „każdy”); drugi raz za każdym razem, gdy startuje cron, czyli
przy każdym rozruchu. Pola to: minuta 0–59, godzina 0–23, dzień miesiąca 1–31, miesiąc 1–12 i dzień tygodnia 0–7,
gdzie zarówno 0, jak i 7 oznaczają niedzielę.

- `crontab -l` pokazuje twój własny crontab, a `crontab -e` go edytuje. Własny może mieć każdy użytkownik, a root może
  przeczytać każdy: `sudo crontab -l -u alex`.
- `/etc/crontab` i pliki w `/etc/cron.d/` działają dla całego systemu. Ich wiersze mają przed poleceniem jeszcze jedno
  pole: użytkownika, jako który ma się wykonać.

### Gdzie programy uruchamiają się same

Usługi, timery, cron i pliki startowe powłoki robią w Linuksie to, co usługi, zaplanowane zadania i klucze Run w
Windowsie. Atakujący korzystają z nich z tego samego powodu: to, co podrzucili, wraca po restarcie albo przy nowym
logowaniu. Obrońcy nazywają to **mechanizmami przetrwania (persistence)**.

<!-- pic: persist -->

## Menedżery pakietów

### Pakiety i skąd się biorą

W Linuksie rzadko pobiera się programy ze stron WWW. Instaluje się **pakiety** z **repozytoriów** dystrybucji,
internetowych magazynów pakietów, które ona buduje i podpisuje, za pomocą **menedżera pakietów**, który przy okazji
instaluje wszystko, czego potrzebuje każdy pakiet, i aktualizuje wszystko naraz.

| Rodzina | Pliki pakietów | Narzędzia | Kto używa |
|---|---|---|---|
| Debian | `.deb` | `apt`, `dpkg` | Debian, Ubuntu, Kali |
| Red Hat | `.rpm` | `dnf`, `rpm` | RHEL, Fedora |
| Alpine | `.apk` | `apk` | Alpine Linux |

```sh
sudo apt update
sudo apt upgrade
sudo apt install nmap
```

`apt update` pobiera najnowsze listy pakietów; `apt upgrade` instaluje nowsze wersje tego, co już masz; `apt install`
dodaje pakiet. W Red Hacie i Fedorze te same zadania wykonują `sudo dnf upgrade` i `sudo dnf install nmap`.

Zanim apt zaufa repozytorium, sprawdza podpis cyfrowy na jego liście pakietów i odrzuca niepodpisane repozytoria,
chyba że się go do tego zmusi. Właśnie dlatego „zaplombowane pudła od znanych dostawców” to prawda. Dodanie cudzego
repozytorium albo zainstalowanie pliku `.deb` ze strony WWW oznacza powierzenie jego autorowi roota: instalacja pakietu
odbywa się z mocą roota.

### Czyj to plik i czy go zmieniono?

Menedżer pakietów pamięta, który pakiet położył każdy plik i gdzie. To odpowiada na dwa pytania, które obrońcy zadają
bez przerwy:

```sh
dpkg -S /usr/bin/ls
dpkg -L coreutils
sudo dpkg --verify coreutils
```

- `dpkg -S` podaje pakiet, z którego pochodzi plik: tutaj `coreutils: /usr/bin/ls`. Program w `/usr/bin`, który nie
  należy do żadnego pakietu, zasługuje na bliższe spojrzenie; typowy niegroźny wyjątek to dowiązanie do
  `/etc/alternatives`, na przykład `/usr/bin/editor`. Pytaj ze ścieżką `/usr/bin`: `dpkg -S /bin/ls` w obecnych
  systemach nic nie znajduje, bo `/bin` jest tylko dowiązaniem.
- `dpkg -L` wypisuje wszystkie pliki, które zainstalował pakiet.
- `dpkg --verify` porównuje pliki z sumami kontrolnymi zapisanymi przy instalacji. Gdy wszystko jest w porządku, nic
  nie wypisuje. Wiersz w rodzaju `??5??????   /usr/bin/ls` oznacza, że zmieniła się zawartość; `missing`, że pliku
  nie ma.

W Red Hacie i Fedorze na pierwsze pytanie odpowiada `rpm -qf /usr/bin/ls`, a na ostatnie `rpm -V coreutils`, z kodami
takimi jak `S` (rozmiar), `5` (suma kontrolna) i `T` (czas modyfikacji) dla tego, co się różni.

> [!WARNING]
> Sam dpkg nazywa `--verify` sprawdzeniem integralności, a nie weryfikacją bezpieczeństwa. Atakujący z prawami roota
> zmieni bazę pakietów równie łatwo jak pliki, więc czysty wynik znaczy „nic oczywistego”, a nie „bezpiecznie”.

Debian i Ubuntu zapisują też każdą zmianę pakietów w `/var/log/dpkg.log` i `/var/log/apt/history.log`, skąd widać, co
instalowano i kiedy.

## Logi: gdzie leżą

### Dwa rodzaje logów

System Linux prowadzi logi w najwyżej dwóch miejscach naraz:

- **Dziennik systemd** (journal), prowadzony przez `systemd-journald`. Zbiera komunikaty jądra, każdej usługi i
  programów we własnym formacie binarnym, a czyta się go poleceniem **`journalctl`**. Jest zapisywany na dysku w
  `/var/log/journal`, jeśli ten folder istnieje; w przeciwnym razie tylko w pamięci, w `/run/log/journal`, i znika
  przy następnym restarcie.
- **Pliki tekstowe w `/var/log`**, które pisze osobny program, **rsyslog**: dostaje kopię komunikatów i rozkłada je do
  plików. Czyta się je za pomocą `less`, `tail` i `grep`.

Co dokładnie masz, zależy od dystrybucji. Od Debiana 12 rsyslog **nie jest instalowany domyślnie**: Debian trzyma
tylko dziennik systemd. Red Hat Enterprise Linux ma oba, a dziennik przekazuje komunikaty dalej do rsysloga. W Ubuntu
rsyslog, jeśli jest zainstalowany, pisze `auth.log` i `syslog`. Sprawdź poleceniem `ls /var/log`.

| Co | Debian i Ubuntu z rsyslogiem | Red Hat (RHEL) |
|---|---|---|
| Logowania, SSH i inne komunikaty bezpieczeństwa | `/var/log/auth.log` | `/var/log/secure` |
| Prawie cała reszta | `/var/log/syslog` | `/var/log/messages` |
| Zaplanowane zadania | (w `syslog`) | `/var/log/cron` |
| Zainstalowane pakiety | `/var/log/dpkg.log`, `/var/log/apt/history.log` | |

### Jak czytać dziennik systemd

```sh
journalctl -u ssh --since today
journalctl -f
journalctl -b -p err
journalctl -k
```

- `-u` pokazuje jedną jednostkę (tutaj serwer SSH), a `--since` ogranicza czas: `today`, `yesterday` albo data i
  godzina, na przykład `"2026-11-12 09:00"`.
- `-f` śledzi nowe komunikaty, gdy tylko się pojawiają, jak `tail -f` dla pliku.
- `-b` pokazuje tylko bieżący rozruch, a `-p err` tylko błędy i gorsze.
- `-k` pokazuje komunikaty jądra.

Każdy użytkownik może czytać własne komunikaty, ale cały dziennik systemu jest dostępny tylko dla roota i członków grup
**adm**, **systemd-journal** i **wheel**. Dlatego często będziesz wpisywać `sudo journalctl`.

<!-- pic: logline -->

> [!NOTE]
> Od OpenSSH 9.8 (lipiec 2024 r.) serwer SSH jest podzielony na dwie części: `sshd` tylko nasłuchuje, a
> **`sshd-session`** obsługuje każde połączenie, więc wiele komunikatów o logowaniu nosi teraz jego nazwę zamiast
> `sshd`. OpenSSH 10.0 (kwiecień 2025 r.) wydzielił jeszcze **`sshd-auth`**. Wyszukiwania i reguły wykrywania napisane
> tylko dla `sshd` mogą je przegapić, więc dopasowuj wszystkie trzy.

### Inne miejsca, które pamiętają

- **`~/.bash_history`**: polecenia, które użytkownik wpisał w bashu. bash zapisuje ją, gdy powłoka się kończy, więc
  sesji, która wciąż jest otwarta, jeszcze tam nie ma, a własną historię może wyczyścić każdy. Brak historii to już
  sam w sobie trop.
- **Logowania**: narzędzia `last` i `lastlog` pokazują dawne logowania ze starszych plików binarnych. W Debianie 13 nie
  należą już do domyślnego zestawu; zastępują je pakiety **wtmpdb** i **lastlog2**. Dziennik systemd i tak zawiera
  logowania.

Jak długo przechowywać logi, jak zbierać je w jednym miejscu i jak dodać szczegółowy audyt, to tematy dalej na
ścieżce.

## Codzienne polecenia

### Te, których będziesz używać codziennie

| Polecenie | Co robi | Przykład |
|---|---|---|
| `pwd` | Pokazuje, w jakim folderze jesteś | `pwd` |
| `ls` | Wypisuje zawartość folderu: `-l` ze szczegółami, `-a` z ukrytymi plikami | `ls -la ~` |
| `cd` | Zmienia folder; samo `cd` prowadzi do domu | `cd /var/log` |
| `cat` | Wypisuje plik | `cat /etc/os-release` |
| `less` | Czyta długi plik strona po stronie; `q` kończy | `less /etc/passwd` |
| `head`, `tail` | Pierwsze albo ostatnie 10 wierszy; `tail -f` śledzi rosnący plik | `tail -n 50 auth.log` |
| `grep` | Wiersze zawierające tekst: `-i` bez względu na wielkość liter, `-r` w folderze, `-c` policz | `grep -i error syslog` |
| `find` | Pliki według nazwy, właściciela, rozmiaru, wieku albo trybu | `find /tmp -type f` |
| `file` | Czym plik jest naprawdę, cokolwiek mówi jego nazwa | `file /usr/bin/ls` |
| `wc -l` | Liczy wiersze | `wc -l /etc/passwd` |
| `sort`, `uniq -c` | Sortuje wiersze; liczy wiersze, które się powtarzają | `sort names.txt` |
| `cp`, `mv`, `rm`, `mkdir` | Kopiuje, przenosi albo zmienia nazwę, usuwa, tworzy folder | `cp a.txt b.txt` |
| `ps`, `kill` | Wypisuje procesy, wysyła im sygnały | `ps -ef` |
| `ssh` | Loguje na inny komputer | `ssh alex@203.0.113.10` |
| `man` | Podręcznik polecenia | `man grep` |

### Potoki i przekierowania

Prawdziwa siła tkwi w łączeniu małych poleceń. `|` (**potok**, pipe) przekazuje wynik jednego polecenia następnemu;
`>` zapisuje wynik do pliku (zastępując go), a `>>` dopisuje na końcu pliku. Ten wiersz liczy nieudane hasła SSH dla
każdego adresu od północy i pokazuje pierwszą piątkę:

```sh
journalctl -u ssh --since today | grep 'Failed password' | grep -o 'from [0-9.]*' | sort | uniq -c | sort -rn | head -5
```

```
   1790 from 203.0.113.50
     61 from 198.51.100.23
     22 from 198.51.100.77
```

Czytaj od lewej do prawej: komunikaty SSH z dziennika, tylko nieudane hasła, tylko „from” z adresem, sortowanie, żeby
takie same wiersze stanęły obok siebie, policzenie, sortowanie według liczby od największej (`-rn`), pierwsza piątka.
(Te liczby są zmyślone.) Z rsyslogiem pierwsze dwa kroki zastępuje `grep 'Failed password' /var/log/auth.log`.

### Jak się nie zgubić

- `man ls` otwiera podręcznik, a `ls --help` daje krótsze podsumowanie. Oba działają bez internetu.
- **Tab** uzupełnia polecenia i nazwy plików; naciśnij dwa razy, żeby zobaczyć możliwości.
- Strzałka **w górę** przywraca wcześniejsze polecenia; **Ctrl+C** zatrzymuje to, które właśnie działa.

> [!WARNING]
> `rm` nie przenosi plików do kosza: nie ma cofania, a `rm -r` usuwa folder razem z całą zawartością. Przeczytaj dwa
> razy każde polecenie z `sudo` i `rm`, zanim naciśniesz Enter. (W informatyce śledczej jest odwrotnie: usunięcie
> pliku zdejmuje tylko wpis, który wskazuje na jego dane, a same dane często zostają na dysku, dopóki nie zostaną
> nadpisane. Jak śledczy je odzyskują, dowiesz się przy systemach plików, dalej na ścieżce.)

## SSH: logowanie z innego miejsca

**SSH** (Secure Shell) daje ci zaszyfrowaną powłokę na innym komputerze. Serwer nasłuchuje na **porcie TCP 22**. W
Linuksie obie strony to prawie zawsze **OpenSSH**: klient to `ssh`, serwer to `sshd`.

```sh
ssh alex@203.0.113.10
```

### Klucze hosta: czy to właściwy serwer?

Każdy serwer SSH ma własny **klucz hosta**. Przy pierwszym połączeniu ssh pokazuje odcisk klucza i pyta, czy mu ufać;
jeśli się zgodzisz, zapisuje go w **`~/.ssh/known_hosts`**. Przy każdym kolejnym razie ssh porównuje. Jeśli klucz
serwera kiedykolwiek się zmieni, ssh głośno ostrzeże i wyłączy logowanie hasłem dla tego połączenia, bo po drugiej
stronie może być ktoś, kto udaje twój serwer.

### Klucze zamiast haseł

**Para kluczy** jest lepsza niż hasło: serwer trzyma tylko twój klucz publiczny, a prywatny masz tylko ty, więc nic,
co widzi serwer albo podsłuchujący, nie pozwala im zalogować się jako ty.

```sh
ssh-keygen -t ed25519
```

To tworzy `~/.ssh/id_ed25519` (klucz prywatny, tryb `600`) i `~/.ssh/id_ed25519.pub` (klucz publiczny). Ed25519 jest
domyślnym wyborem ssh-keygen od OpenSSH 9.5, więc `-t ed25519` tylko mówi to wprost. Klucz publiczny, jeden wiersz,
dodajesz do `~/.ssh/authorized_keys` swojego konta na serwerze. Przy połączeniu twój ssh dowodzi, że ma klucz
prywatny, podpisując nim, a serwer sprawdza podpis kluczem publicznym.

<!-- pic: ssh -->

Uprawnienia mają tu znaczenie. ssh ignoruje klucz prywatny, który mogą czytać inni użytkownicy, a serwer domyślnie
(`StrictModes yes`) odrzuca klucze, jeśli twój folder domowy, `~/.ssh` (powinien mieć `700`) albo `authorized_keys`
(`600`) mogą zmieniać inni.

### Strona serwera

Serwer SSH czyta `/etc/ssh/sshd_config`. Trzy jego ustawienia domyślne są najważniejsze dla bezpieczeństwa:

| Ustawienie | Domyślnie w OpenSSH | Co oznacza |
|---|---|---|
| `PermitRootLogin` | `prohibit-password` | root może logować się kluczem, nigdy hasłem |
| `PasswordAuthentication` | `yes` | Hasła są dozwolone, więc można je zgadywać |
| `PubkeyAuthentication` | `yes` | Logowanie kluczem jest dozwolone |

Dystrybucje i obrazy chmurowe mogą to zmieniać, więc sprawdzaj serwer, który masz przed sobą: `sudo sshd -T` wypisuje
ustawienia, których naprawdę używa. Serwer, który przyjmuje hasła na porcie 22 z internetu, dostaje próby zgadywania
haseł przez cały dzień (ATT&CK T1110.001): MITRE radzi zwracać uwagę na powtarzające się nieudane logowania, po
których przychodzi udane z tego samego adresu. Wyłączanie haseł, ograniczanie tego, kto może się logować, i reszta
utwardzania SSH to tematy dalej na ścieżce.

## Jak to wygląda w pracy

Oto zmyślone sprawdzenie serwera WWW po alercie o „wielu nieudanych logowaniach przez SSH”. Każdy wiersz to jedno
polecenie i jego odpowiedź:

```
Made-up triage · web-01 (Debian 13) · 2026-11-12

$ sudo journalctl -u ssh --since today | grep -c 'Failed password'
1873
$ sudo journalctl -u ssh --since today | grep Accepted
Nov 12 09:41:09 web-01 sshd-session[2211]: Accepted password for deploy from 203.0.113.50 port 51562 ssh2
$ ps -u deploy -o user,pid,ppid,args
USER       PID  PPID COMMAND
deploy    2290     1 [kworker/0:2]
$ sudo ls -l /proc/2290/exe
lrwxrwxrwx 1 deploy deploy 0 Nov 12 10:02 /proc/2290/exe -> /dev/shm/.k (deleted)
$ sudo crontab -l -u deploy
@reboot /home/deploy/.cache/.k
$ sudo ls -l /home/deploy/.ssh/authorized_keys
-rw------- 1 deploy deploy 189 Nov 12 09:44 /home/deploy/.ssh/authorized_keys
```

Czytaj od góry:

1. **1 873 nieudane hasła dzisiaj:** ktoś zgaduje (ATT&CK T1110.001). Samo w sobie to szum tła na każdym serwerze,
   który ma SSH otwarte na internet.
2. **Jedno `Accepted password` dla deploy** z adresu, który najwięcej zgadywał. To ten wiersz zmienia szum w incydent:
   jedna próba się udała.
3. **`[kworker/0:2]`, który należy do deploy i ma rodzica 1:** prawdziwe wątki jądra należą do roota, a uruchamia je
   kthreadd, PID 2. To program przebrany za wątek jądra (ATT&CK T1036.004).
4. **Jego plik to `/dev/shm/.k (deleted)`:** uruchomił się z folderu w pamięci, a potem sam się usunął. Wciąż jest w
   `/proc/2290/exe`, więc skopiuj go teraz, zanim coś zatrzyma proces.
5. **`@reboot` w crontabie deploy:** druga kopia, schowana w `.cache`, startuje przy każdym rozruchu
   (ATT&CK T1053.003).
6. **`authorized_keys` zmieniony o 09:44,** trzy minuty po zalogowaniu: najpewniej to klucz atakującego
   (ATT&CK T1098.004). Sama zmiana hasła deploy go nie wyrzuci.

W prawdziwej sprawie najpierw izoluje się serwer i zbiera program z `/proc`, dziennik, crontab i plik kluczy, a
dopiero potem sprząta. Kolejne pytania: do czego jeszcze miał dostęp deploy (`sudo -l -U deploy`) i dlaczego konto z hasłem
do zgadnięcia w ogóle mogło logować się nim z internetu.

- **Centrum operacji bezpieczeństwa (SOC):** czytasz takie alerty, uruchamiasz `journalctl` i `grep` na serwerze i w
  kilka minut decydujesz, czy logowanie było udanym zgadnięciem.
- **Reagowanie na incydenty i informatyka śledcza:** zbierasz procesy, pliki z `/proc`, logi i crontaby, zanim ktoś
  zrestartuje maszynę, i odtwarzasz oś czasu z dziennika systemd, historii powłoki i znaczników czasu plików.
  Informatyka śledcza Linuksa wraca głębiej dalej na ścieżce.
- **Testy penetracyjne i red teaming:** za zgodą twoje pierwsze polecenia na maszynie z Linuksem to `id`, `sudo -l` i
  szukanie plików z setuid oraz zapisywalnych skryptów, które uruchamia root.
- **Inżynieria wykrywania i threat hunting:** piszesz reguły dla nowych plików z setuid, niespodziewanych jednostek i
  timerów, zmian w crontabie, programów działających z `/tmp` albo `/dev/shm` i logowań po serii nieudanych prób.
- **Bezpieczeństwo systemów i chmury:** ustawiasz uprawnienia, trzymasz grupę sudo małą, wyłączasz hasła w SSH i
  aktualizujesz pakiety na serwerach, którymi się opiekujesz, w biurze czy w chmurze.
- **Analiza złośliwego oprogramowania:** patrzysz, jakie pliki, jednostki, wiersze crona i klucze tworzy próbka dla
  Linuksa, bo właśnie tego będzie szukać obrońca.

## Spróbuj samodzielnie

Dwadzieścia minut w terminalu Linuksa. Każde polecenie tutaj tylko czyta, oprócz `ssh-keygen` na końcu, które tworzy w
twoim folderze domowym dwa pliki, które potem usuniesz.

> [!NOTE]
> Polecenia i ich wyniki są tu podane tak, jak pokazuje je system po angielsku. Jeśli twój system jest po polsku,
> niektóre komunikaty i daty w wynikach mogą być przetłumaczone. Same polecenia są takie same.

### Otwórz terminal Linuksa

<!-- for: windows -->

Najszybciej przez WSL 2: uruchamia prawdziwe Ubuntu wewnątrz Windowsa, a dla obecnych wersji Ubuntu systemd jest tam
domyślnie włączony. Po konfiguracji otwórz **Ubuntu** z menu Start.
<!-- guide: set-up-wsl2-ubuntu -->

<!-- for: macos -->

Terminal macOS wykonuje wiele tych samych poleceń (`ls`, `cd`, `grep`, `ssh`), ale macOS to nie Linux: nie ma w nim
systemd, apt ani `/proc`. Na potrzeby tej strony użyj maszyny wirtualnej z Linuksem, na przykład Kali w UTM na Macu
z Apple silicon.
<!-- guide: set-up-kali-utm -->

<!-- for: linux -->

Otwórz aplikację Terminal. Jeśli wolisz ćwiczyć tam, gdzie nic nie zepsujesz, maszyna wirtualna z Kali działa tak
samo; strona laboratorium [Pierwsze kroki](/pl/lab/start/) porównuje możliwości.
<!-- guide: set-up-kali-virtualbox, set-up-kali-vmware -->

<!-- /for -->

### Kim jesteś i do czego masz dostęp

```sh
pwd
ls -la ~
id
ls -l /etc/passwd /etc/shadow
ls -ld /tmp
sudo -l
```

Jakie ukryte pliki są w twoim folderze domowym? Jakie grupy pokazuje `id` i czy jest wśród nich sudo? Porównaj tryby
`/etc/passwd` i `/etc/shadow`: kto może czytać każdy z nich? Znajdź `t` na końcu trybu `/tmp`. Potem przeczytaj, co
pozwala ci uruchamiać `sudo -l`.

### Programy, które działają jako root

```sh
find /usr/bin -perm -4000 -type f
ls -l /usr/bin/passwd
```

Ile jest programów z setuid i czy znasz ich nazwy? Do czego `passwd` potrzebuje `s`?

### Co działa i co uruchamia się samo

```sh
ps -ef --forest | less
ls -l /proc/$$/exe
systemctl list-units --type=service --state=running
systemctl list-timers
crontab -l
```

W drzewie znajdź swoją powłokę i przejdź w górę po jej rodzicach: co ją uruchomiło? Przewiń na początek, żeby zobaczyć
kthreadd i jego wątki jądra w nawiasach kwadratowych. `ls -l /proc/$$/exe` pokazuje plik programu twojej powłoki.
Jakie usługi działają i który timer zadziała jako następny? `crontab -l` najpewniej powie, że nie masz crontaba: to
normalne.

### Pakiety i logi

```sh
dpkg -S /usr/bin/ls
sudo dpkg --verify coreutils
ls /var/log
sudo journalctl -b -p err
journalctl -u ssh -u sshd --since today
```

Z którego pakietu pochodzi `ls` i czy `--verify` coś wypisuje? Masz `auth.log` i `syslog` czy tylko folder `journal`?
Jakie błędy zapisał ten rozruch? Jeśli serwer SSH nie jest zainstalowany, ostatnie polecenie nie pokaże żadnych wpisów.
W Fedorze zamiast `dpkg -S` użyj `rpm -qf /usr/bin/ls`.

### Utwórz klucz SSH

```sh
ssh -V
ssh-keygen -t ed25519 -f ~/practice_key -C practice
ls -l ~/practice_key ~/practice_key.pub
cat ~/practice_key.pub
rm ~/practice_key ~/practice_key.pub
```

Gdy ssh-keygen poprosi o hasło do klucza, naciśnij dwa razy Enter (ten klucz jest tylko do ćwiczeń). Porównaj oba
tryby: dlaczego klucz prywatny ma `-rw-------`, a publiczny `-rw-r--r--`? Wiersz z `.pub` to właśnie to, co trafiłoby
do `authorized_keys` na serwerze. Ostatni wiersz usuwa oba pliki.

## Sprawdź się

Spróbuj odpowiedzieć, zanim rozwiniesz każdą odpowiedź.

<!-- pic: quiz -->

## Dowiedz się więcej

- **[OverTheWire: Bandit](https://overthewire.org/wargames/bandit/)**: darmowa gra dla zupełnie początkujących.
  Logujesz się przez SSH i za pomocą `ls`, `cat`, `find`, `grep` i potoków szukasz hasła do każdego kolejnego poziomu.
  Po angielsku.
- **[Linux Foundation: Introduction to Linux (LFS101)](https://training.linuxfoundation.org/training/introduction-to-linux/)**:
  darmowy kurs we własnym tempie od Linux Foundation, organizacji, w której rozwija się jądro Linuksa. Po angielsku.
- **[Darmowa ścieżka nauki TryHackMe](https://tryhackme.com/resources/blog/free_path)**: należy do niej Linux
  Fundamentals Part 1, darmowy praktyczny pokój, który prowadzi przez pierwsze polecenia na prawdziwej maszynie z
  Linuksem. Po angielsku.
- **[Projekt Linux man-pages](https://man7.org/linux/man-pages/)**: strony podręcznika online, z wyszukiwarką i na
  bieżąco aktualizowane. Większość linków na tej stronie prowadzi właśnie tam; `man` pokazuje te same strony bez
  internetu. Po angielsku.
