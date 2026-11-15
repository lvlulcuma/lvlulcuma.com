---
# Roadmap topic. Its title and summary show on every job page that lists "linux-basics" in learn.yml.
# The text under the dashes is the topic's own page: lvlulcuma.com/ua/roadmap/topics/linux-basics/
# How these pages are written: docs/claude/roadmap-topic.md
title: "Основи Linux"
summary: "Файлова система, користувачі й права доступу, процеси та служби, менеджери пакетів, де зберігаються журнали (/var/log), і щоденні команди оболонки: ls, cd, grep, cat, tail, ps, ssh."
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
    title: "ls -l /usr/bin/passwd, частина за частиною"
    lead: ["-rwsr-xr-x 1 root root 64152 May 30 2024 /usr/bin/passwd", "з одного комп'ютера з Ubuntu; розмір і дата у вас будуть інші"]
    head: ["Частина", "Що означає"]
    rows:
      - ["<code>-</code>", "Тип файлу: звичайний файл. <code>d</code> означав би каталог (теку), <code>l</code> — посилання"]
      - ["<code>rws</code>", "Власник може читати, змінювати й запускати. <code>s</code> замість <code>x</code> — це setuid: програма працює від імені власника"]
      - ["<code>r-x</code>", "Група може читати й запускати"]
      - ["<code>r-x</code>", "Усі інші можуть читати й запускати"]
      - ["<code>1</code>", "Скільки імен (жорстких посилань) має файл"]
      - ["<code>root root</code>", "Власник, потім група"]
      - ["<code>64152</code>", "Розмір у байтах"]
      - ["<code>May 30 2024</code>", "Коли востаннє змінювався вміст"]
    mark: 2
    caption: "Запустити <code>passwd</code> може будь-хто, і завдяки <code>s</code> він працює від імені root. Саме так він може записати ваш новий пароль у <code>/etc/shadow</code> — файл, який ви навіть прочитати не можете."
  # What happens when a normal user types sudo.
  sudo:
    kind: route
    stages:
      - where: "Ви вводите sudo apt update"
        steps: ["sudo питає ваш власний пароль, а не пароль root"]
      - where: "sudo перевіряє правила"
        steps: ["У /etc/sudoers: чи може ваш обліковий запис або одна з ваших груп виконати це?"]
      - where: "apt працює"
        steps: ["Від імені root, користувача 0", "Ваша оболонка лишається вашою: сили root мала лише ця одна команда"]
    caption: "Якщо правила цього не дозволяють, sudo відмовляє, і від імені root нічого не запускається. Хто може позичати сили root, вказано в <code>/etc/sudoers</code>, зазвичай через групу: <code>sudo</code> у Debian і Ubuntu, <code>wheel</code> у Red Hat."
  # Parent and child pairs on Linux: what's normal, what needs an explanation.
  ptree:
    kind: cards
    cards:
      - title: "Нормально"
        text: "Пари, які ви побачите на будь-якому здоровому сервері."
        tags: ["sshd → sshd-session → bash", "kthreadd (PID 2) → [kworker/0:1]", "systemd (PID 1) → cron → sh"]
      - title: "Потребує пояснення"
        text: "Не завжди атака, але й не те, що можна пропустити повз увагу."
        tags: ["nginx → sh → curl", "[kworker/0:2], чий батько — не PID 2", "програма, що працює з /tmp або /dev/shm", "/proc/PID/exe із (deleted) у кінці"]
    caption: "Ім'я у квадратних дужках нічого не доводить: будь-яка програма може назватися <code>[kworker]</code>. Її батьківський процес, її користувач і її файл у <code>/proc</code> скажуть набагато більше."
  # A made-up unit file, line by line.
  unit:
    kind: window
    title: "/etc/systemd/system/backup-agent.service (вигаданий)"
    head: ["Рядок", "Що робить"]
    rows:
      - ["<code>[Unit]</code>", "Починає розділ, що описує юніт"]
      - ["<code>Description=Nightly backup agent</code>", "Назва, яку показує <code>systemctl status</code>"]
      - ["<code>[Service]</code>", "Починає розділ про те, як його запускати"]
      - ["<code>ExecStart=/opt/backup-agent/bin/agent</code>", "Програма, яку запускає systemd"]
      - ["<code>User=backup</code>", "Обліковий запис, від імені якого вона працює. Без цього рядка системна служба працює від імені root"]
      - ["<code>Restart=on-failure</code>", "Запустити знову, якщо вона впала або завершилася з помилкою"]
      - ["<code>[Install]</code>", "Починає розділ, який читає <code>systemctl enable</code>"]
      - ["<code>WantedBy=multi-user.target</code>", "enable прив'язує юніт сюди, тож він запускається при кожному завантаженні"]
    mark: 4
    caption: "Щоб оцінити службу, прочитайте три рядки: що вона запускає (<code>ExecStart</code>), від чийого імені (<code>User</code>) і чи стартує під час завантаження (<code>WantedBy</code>, якщо її ввімкнено)."
  # The first places to check for anything that starts by itself, with their ATT&CK technique.
  persist:
    kind: cards
    layout: rows
    cards:
      - title: "Служби systemd"
        text: "Файл юніта, ввімкнений для запуску при кожному завантаженні, зазвичай від імені root. Щоб створити загальносистемний, потрібен root."
        tags: ["/etc/systemd/system", "~/.config/systemd/user", "ATT&CK T1543.002"]
      - title: "Таймери systemd"
        text: "Юніт .timer, що запускає службу за розкладом, як заплановане завдання у Windows."
        tags: ["systemctl list-timers", "ATT&CK T1053.006"]
      - title: "cron"
        text: "Рядок у crontab запускає команду в певний час або при кожному завантаженні з @reboot. Свій crontab може мати кожен користувач."
        tags: ["crontab -l", "/etc/crontab", "/etc/cron.d", "ATT&CK T1053.003"]
      - title: "Файли запуску оболонки"
        text: "Команди в .bashrc або .profile виконуються щоразу, коли цей користувач відкриває оболонку. Для зміни власних root не потрібен."
        tags: ["~/.bashrc", "/etc/profile", "ATT&CK T1546.004"]
      - title: "SSH authorized_keys"
        text: "Ще один рядок тут — і хтось може входити зі своїм ключем, без жодного пароля."
        tags: ["~/.ssh/authorized_keys", "ATT&CK T1098.004"]
    caption: "Перші п'ять місць, які варто перевірити, коли шукаєте те, що запускається само або впускає когось назад."
  # One made-up journal line from the SSH server, piece by piece.
  logline:
    kind: window
    title: "Один вхід через SSH у журналі (вигаданий)"
    lead: ["Nov 12 09:41:09 web-01 sshd-session[2211]: Accepted password for deploy from 203.0.113.50 port 51562 ssh2", "так його показує journalctl"]
    head: ["Частина", "Що означає"]
    rows:
      - ["<code>Nov 12 09:41:09</code>", "Коли це сталося, за місцевим часом комп'ютера. Без року"]
      - ["<code>web-01</code>", "Ім'я комп'ютера"]
      - ["<code>sshd-session[2211]</code>", "Програма та її PID: SSH-сервер (до OpenSSH 9.8 — <code>sshd</code>)"]
      - ["<code>Accepted password</code>", "Вхід вдався, за паролем. Вхід за ключем пише <code>Accepted publickey</code>"]
      - ["<code>for deploy</code>", "Обліковий запис"]
      - ["<code>from 203.0.113.50 port 51562</code>", "Звідки: адреса та її порт"]
    mark: 4
    caption: "Після сотень невдалих спроб із тієї самої адреси саме цей рядок важить: тепер хтось має оболонку від імені <code>deploy</code>."
  # SSH keys: what lives where, and what proves what.
  ssh:
    kind: route
    stages:
      - where: "На вашому комп'ютері"
        steps: ["ssh-keygen створює два файли: id_ed25519 (закритий ключ) та id_ed25519.pub (відкритий)", "Закритий ключ ніколи не залишає ваш комп'ютер"]
      - where: "На сервері"
        steps: ["Ваш відкритий ключ додають у ~/.ssh/authorized_keys вашого облікового запису там", "Власний ключ хоста сервера доводить, що це та машина, яку ви мали на увазі"]
      - where: "Під час підключення"
        steps: ["ssh порівнює ключ хоста з known_hosts і попереджає, якщо він змінився", "Ваш ssh підписує закритим ключем, а сервер перевіряє підпис відкритим", "Жоден пароль не йде мережею"]
    caption: "Хто може додати рядок в <code>authorized_keys</code>, той може входити від імені цього облікового запису. Тому його люблять зловмисники (ATT&amp;CK T1098.004) і тому його перевіряють захисники."
  quiz:
    kind: questions
    items:
      - q: "<code>ls -ld /tmp</code> показує <code>drwxrwxrwt</code>. Що робить <code>t</code> і навіщо він <code>/tmp</code>?"
        a: "Це sticky-біт. Створювати файли в <code>/tmp</code> може кожен, але видаляти чи перейменовувати файл може лише його власник (або власник теки, або root). Без нього будь-який користувач міг би видаляти тимчасові файли всіх інших."
      - q: "<code>/etc/shadow</code> має <code>-rw-r----- root shadow</code>. Чи може alex, який не входить до групи shadow, його прочитати? Який це режим числом?"
        a: "Ні. Власник (root) може читати й змінювати, група (shadow) — читати, усі інші не мають нічого. Це 640: 4+2, 4, 0."
      - q: "crontab root щоночі запускає <code>/opt/scripts/cleanup.sh</code>, а <code>ls -l</code> показує його як <code>-rwxrwxrwx</code>. Чому це серйозно?"
        a: "Будь-хто на комп'ютері може змінити скрипт, і все, що туди допишуть, виконається від імені root під час наступного запуску. Файл, який запускає root, має бути доступний для запису лише root."
      - q: "Процес <code>[kworker/0:2]</code> працює від імені deploy з батьківським PID 1, а <code>/proc/2290/exe</code> вказує на <code>/dev/shm/.k (deleted)</code>. Це потік ядра чи ні?"
        a: "Ні. Справжні потоки ядра належать root, їх запускає kthreadd (PID 2), і вони не мають файлу програми. Це програма, яка позичила довірене ім'я (ATT&amp;CK T1036.004) і видалила власний файл. Поки вона працює, її ще можна скопіювати з <code>/proc/2290/exe</code>, тож зробіть це, перш ніж її зупиняти."
      - q: "<code>kill 2290</code> не зупиняє процес: він перехоплює сигнал і працює далі. Що можна надіслати натомість і в чому підступ?"
        a: "<code>kill -9 2290</code> надсилає SIGKILL, який не можна перехопити, заблокувати чи проігнорувати. Підступ: програма не встигне прибрати за собою, а під час розслідування зникне все, що було лише в її пам'яті, тож спершу зберіть докази."
      - q: "SSH попереджає, що ключ хоста сервера змінився. Що могло статися і що робити?"
        a: "Сервер могли перевстановити або видати йому нові ключі — або хтось став між вами й ним. Саме тому ssh вимикає вхід за паролем для цього підключення. Перш ніж видаляти старий ключ із <code>known_hosts</code>, уточніть у того, хто обслуговує сервер."
      - q: "На сервері з Debian 13 немає <code>/var/log/auth.log</code>. Куди поділися повідомлення про входи?"
        a: "У журнал systemd. Починаючи з Debian 12, rsyslog — програма, що пише ці текстові файли, — не встановлюється за замовчуванням. Читайте їх через <code>journalctl</code>, наприклад <code>journalctl -u ssh</code>."
      - q: "<code>sudo dpkg --verify coreutils</code> виводить <code>??5??????   /usr/bin/ls</code>. Що це вам каже і чого не доводить?"
        a: "Вміст файлу більше не збігається з контрольною сумою, яку записав пакет: хтось або щось змінив <code>ls</code>. Варто придивитися. Але dpkg називає це перевіркою цілісності, а не перевіркою безпеки: зловмисник із правами root може змінити й саму базу, тож чистий результат не доводить, що файл безпечний."
      - q: "alex виконує <code>sudo -l</code> і бачить <code>(ALL : ALL) ALL</code>. Що це означає, якщо зловмисник викраде пароль alex?"
        a: "alex може виконати будь-яку команду від імені будь-якого користувача, зокрема root. З паролем зловмисник стає root однією командою <code>sudo</code>. Тому <code>sudo -l</code> — серед перших команд, які виконують зловмисники, і тому захисники тримають групу sudo маленькою."
---

## Коротко

Уявіть комп'ютер із Linux як велику бібліотеку.

- Кожна зала, полиця й книжка входить до однієї мапи, що починається від вхідних дверей, `/`, — це **файлова система**.
  Навіть машини бібліотеки й люди, які в ній працюють, мають у ній свій запис. У Linux майже все — файл.
- Кожен має **читацький квиток** із номером — це **користувач** і його **UID**. Квитки належать до клубів — **груп**,
  тож правило може стосуватися цілого клубу одразу.
- На кожній книжці є етикетка з трьома клітинками: що з нею може робити її **власник**, її **група** і **всі інші** —
  читати, змінювати чи запускати. Це **права доступу**.
- Один квиток відчиняє всі двері — **root**, номер 0. Працівники позичають його сили на одну справу за раз через
  **sudo**.
- Люди, які працюють просто зараз, — це **процеси**. Нічна зміна, що приходить раніше за всіх, — це **служби**, а
  головний бібліотекар, який їх наймає й наглядає за ними, — **systemd**.
- Нові книжки надходять у запечатаних підписаних коробках від відомих постачальників — це **пакети**, які розпаковує
  **менеджер пакетів**, як-от apt.
- Усе важливе записують у щоденник — це **журнали**: у `/var/log` і в **журналі systemd**.
- Ви спілкуєтеся з бібліотекою через віконце біля стійки — **оболонку**. **SSH** — те саме віконце, до якого безпечно
  підходять з іншої будівлі.

<mark>У Linux майже все — файл в одному дереві, що починається з `/`, і кожен файл і кожен процес належить якомусь
користувачеві. Три набори прав на читання, запис і виконання вирішують, хто що може, а root, користувач 0, може майже
все.</mark> Майже все, що захисники перевіряють на сервері з Linux, зводиться до трьох запитань: хто я, до чого маю
доступ і що запускається само?

Дочитавши, ви зможете:

- орієнтуватися у файловій системі й сказати, що лежить у `/etc`, `/home`, `/var/log`, `/tmp` і `/proc`;
- прочитати `/etc/passwd`, пояснити, що таке UID, і сказати, хто може користуватися `sudo`;
- прочитати `ls -l` і режими на зразок 755 та 600 і помітити ризикований файл із setuid;
- переглянути процеси, прочитати дерево процесів і перевірити підозрілий процес через `/proc`;
- переглянути служби, таймери й завдання cron і назвати місця, звідки програми запускаються самі;
- встановлювати, знаходити й перевіряти програми менеджером пакетів;
- знайти журнали, прочитати рядок про вхід через SSH і шукати в журналах за допомогою `journalctl` і `grep`;
- поєднувати щоденні команди через конвеєри й входити через SSH за ключем замість пароля.

## Слова, які знадобляться

- **Ядро** (kernel) — серцевина системи, яка запускає програми й спілкується з обладнанням. Строго кажучи, «Linux» —
  це лише ядро.
- **Дистрибутив** — ядро разом із програмами, налаштуваннями й менеджером пакетів, готове до встановлення: Ubuntu,
  Debian, Red Hat Enterprise Linux (RHEL), Fedora, Kali.
- **Термінал і оболонка** (shell) — термінал — це вікно, а оболонка — програма в ньому, яка читає ваші команди.
  У більшості систем Linux це **bash**.
- **Шлях** — адреса файлу в дереві, наприклад `/home/alex/notes.txt`.
- **root** — всемогутній обліковий запис, користувач 0. Тим самим словом називають і верхівку дерева, `/`, і власну
  домашню теку root, `/root`.
- **Демон** (daemon) — програма, що працює у фоні, часто з назвою на «d»: `sshd`, `systemd-journald`.
- **Пакет** — програма, упакована разом зі своїми файлами, версією та списком того, що їй ще потрібно, готова до
  встановлення менеджером пакетів.

> [!NOTE]
> Приклади на цій сторінці — з Ubuntu 26.04 LTS («Resolute Raccoon», вийшла 23 квітня 2026 року, підтримка до
> квітня 2031-го) і Debian 13 «trixie» (9 серпня 2025 року). Ubuntu побудована на Debian, а Kali Linux — на тестовій
> гілці Debian, тож те, що працює в одній, здебільшого працює й в інших. Там, де Red Hat Enterprise Linux і Fedora
> роблять інакше, сторінка про це каже.

## Файлова система

### Одне дерево від `/`

У Windows є літери дисків, а в Linux — одне дерево. Усе звисає з його верхівки, `/`, яку називають **кореневим
каталогом**. Другий диск чи флешка не отримують літери: їх **монтують**, тобто приєднують до теки всередині дерева,
наприклад до теки в `/mnt` або `/media`.

- **Абсолютний шлях** починається з верхівки: `/var/log/syslog`. **Відносний шлях** починається з того місця, де ви
  є: з `/var` шлях `log/syslog` веде до того самого файлу.
- `.` означає теку, у якій ви є, `..` — теку рівнем вище, а `~` — вашу домашню теку: для alex `~/notes.txt` — це
  `/home/alex/notes.txt`.
- Імена **чутливі до регістру**: `Report.txt` і `report.txt` — два різні файли.
- Ім'я, що починається з крапки, — **приховане**: `.bashrc`, `.ssh`. Звичайний `ls` їх пропускає, `ls -a` показує.
  Прихований не означає секретний — це лише прибирає налаштування з очей, — але й файл, на який ніхто не дивиться,
  там легко сховати.

### Теки, які варто знати

Що де лежить, визначає **стандарт ієрархії файлової системи** (Filesystem Hierarchy Standard, FHS 3.0, 2015), а в
системах із systemd — ще й його правила file-hierarchy. Ці теки ви знайдете майже на кожному комп'ютері з Linux:

| Тека | Що в ній | Чому це важливо для безпеки |
|---|---|---|
| `/etc` | Налаштування всієї системи, текстовими файлами | Облікові записи, правила sudo, SSH-сервер, cron: змінили файл тут — змінили систему |
| `/home` | Тека для кожної людини: `/home/alex` | Їхні файли, приховані налаштування, ключі SSH та історія оболонки |
| `/root` | Власна домашня тека root, поза `/home` | Те саме, але для найпотужнішого облікового запису |
| `/var/log` | Журнали, що переживають перезавантаження | Перше місце, куди дивляться після того, як щось сталося |
| `/tmp` | Тимчасові файли, які може писати будь-хто; зазвичай очищається під час завантаження | Улюблене місце, щоб щось підкинути: писати туди може кожен |
| `/var/tmp` | Тимчасові файли, що переживають перезавантаження | Те саме, але файли лишаються після перезапуску |
| `/dev/shm` | Спільна пам'ять, у RAM, очищається під час завантаження | Писати може кожен, і після перезавантаження нічого не лишається |
| `/usr/bin`, `/usr/sbin` | Програми. `/bin` і `/sbin` тепер — лише посилання на них | Тут живуть довірені програми; «системна» програма деінде — це дивно |
| `/opt` | Додаткові програми, часто не з дистрибутива | Перевірте, звідки взялася кожна програма |
| `/usr/local` | Програми, які адміністратор встановив вручну | Жодна база пакетів не ручається за ці файли |
| `/boot` | Ядро й файли, що запускають систему | Те, що змінено тут, запускається раніше за все інше |
| `/proc` | Не на диску: ядро показує кожен запущений процес як теку | Живі докази про кожен процес |
| `/dev` | Пристрої у вигляді файлів: диски, термінали, `/dev/null` | |
| `/run` | Дані, потрібні програмам під час роботи, у пам'яті | Очищається при кожному завантаженні |

Правила systemd перелічують єдині місця, куди може писати звичайний користувач: `/tmp`, `/var/tmp`, `/dev/shm`, його
домашня тека і невелика тека користувача в `/run`. Саме в цей короткий список кладе свої файли зловмисник, який
потрапив усередину як звичайний користувач, тому захисники першими дивляться туди.

> [!NOTE]
> Debian 13 змінив дві з цих тек. `/tmp` тепер живе в пам'яті (це **tmpfs**), тож після кожного перезавантаження
> вона порожня, а файли, якими ніхто не користувався, видаляються автоматично: через 10 днів у `/tmp` і через 30 днів
> у `/var/tmp`. Докази в цих теках живуть недовго.

### Усе — файл

Linux показує майже все як файли: налаштування — це текстові файли в `/etc`, пристрої — файли в `/dev`, а запущені
процеси — теки в `/proc`. Тому ті самі кілька інструментів, `cat`, `grep` і `ls`, працюють майже з усім. Перший символ
`ls -l` каже, на який тип файлу ви дивитеся:

| Символ | Тип |
|---|---|
| `-` | Звичайний файл |
| `d` | Каталог (тека) |
| `l` | Символьне посилання: вказівник на інший шлях |
| `c`, `b` | Пристрій: символьний (термінал) або блоковий (диск) |
| `p`, `s` | Канал або сокет: способи, якими програми спілкуються між собою |

## Користувачі, групи та root

### Облікові записи — це рядки в текстовому файлі

Кожен обліковий запис — це один рядок у `/etc/passwd`, файлі, який **може прочитати кожен**. Рядок має сім полів,
розділених двокрапками:

```
alex:x:1000:1000:Alex Example:/home/alex:/bin/bash
```

| Поле | Тут | Що означає |
|---|---|---|
| Ім'я | `alex` | Ім'я для входу |
| Пароль | `x` | Хешу тут немає, він у `/etc/shadow` |
| UID | `1000` | Номер користувача: Linux перевіряє саме його, а не ім'я |
| GID | `1000` | Номер основної групи користувача |
| Коментар | `Alex Example` | Зазвичай повне ім'я людини |
| Домашня тека | `/home/alex` | Звідки користувач починає |
| Оболонка | `/bin/bash` | Програма, що запускається під час входу. Службові облікові записи мають `/usr/sbin/nologin`: вхід узагалі неможливий |

Хеші паролів лежать у **`/etc/shadow`**, і звичайні користувачі не повинні мати змоги його прочитати. У Debian і
Ubuntu він має права `-rw-r-----`, власник — root і група shadow. Друге поле показує, як хешовано пароль:

- `$y$…` — це **yescrypt**, типовий метод починаючи з Debian 11, і саме його бібліотека libxcrypt радить для нових
  хешів.
- `$6$…` — це **SHA-512 crypt**, старіший метод, який досі трапляється на багатьох системах.
- Якщо поле — `!` чи `*` або починається з `!`, жоден пароль не підійде: увійти з паролем цей обліковий запис не
  може. Так виглядають нові облікові записи, яким ще не задали пароль.

### UID: номер за іменем

| UID | Хто |
|---|---|
| `0` | root. Будь-який обліковий запис із UID 0 має сили root, хоч би як він називався |
| `1`–`999` | Системні та службові облікові записи, як-от `www-data` для вебсервера. Нові за замовчуванням отримують 101–999 |
| `1000` і більше | Люди. Обліковий запис першої людини зазвичай отримує 1000 |

Другий обліковий запис з UID 0 — класична схованка: невинне ім'я із силами root. Швидка перевірка — чи має
будь-який рядок у `/etc/passwd`, крім рядка root, `0` у третьому полі.

`id` показує, хто ви просто зараз:

```sh
id
```

```
uid=1000(alex) gid=1000(alex) groups=1000(alex),4(adm),27(sudo)
```

### Групи

Кожен користувач має основну групу (у Debian і Ubuntu — групу зі своїм же ім'ям) і може входити до інших груп,
перелічених у `/etc/group`. Кілька груп дають справжню силу:

- **sudo** (Debian, Ubuntu) і **wheel** (Red Hat, Fedora): можуть виконувати команди від імені root через `sudo`.
- **adm** і **systemd-journal**: можуть читати весь системний журнал, а не лише власні повідомлення.

### root і sudo

root може прочитати й змінити будь-який файл і зупинити будь-який процес: перевірки прав, про які йдеться далі, на
нього майже не діють. Тому щоденну роботу роблять від імені звичайного користувача, а сили root позичають лише тоді,
коли вони потрібні.

- В **Ubuntu** пароль root заблоковано: увійти як root не може ніхто. Натомість перший обліковий запис, створений
  під час встановлення, входить до групи **sudo**.
- **`sudo`** виконує одну команду від імені root, попросивши **ваш власний** пароль. Хто може ним користуватися,
  вказано в `/etc/sudoers` і файлах у `/etc/sudoers.d/`. В Ubuntu рядок `%sudo ALL=(ALL:ALL) ALL` дозволяє групі sudo
  запускати будь-що; у Red Hat те саме для wheel робить `%wheel ALL=(ALL) ALL`. Редагуйте ці файли лише через
  `visudo`, який перевіряє їх на помилки перед збереженням: зламаний файл sudoers може зовсім вивести sudo з ладу.
- **`sudo -l`** показує, що вам дозволено запускати через sudo. Це одна з перших команд, яку виконує зловмисник,
  потрапивши в систему, — і з тієї ж причини її варто перевіряти захисникові.

<!-- pic: sudo -->

> [!ASIDE] Новий sudo в Ubuntu
> Починаючи з Ubuntu 25.10, команду `sudo` надає **sudo-rs** — безпечна щодо пам'яті переробка мовою програмування
> Rust від Trifecta Tech Foundation. Ви все одно вводите `sudo`, тож на цій сторінці нічого не змінюється, але саме
> тому в Ubuntu 26.04 можна побачити «sudo-rs» у назвах пакетів і повідомленнях. Оригінальний sudo нікуди не дівся,
> лише його програми перейменовано із закінченням `.ws`.

## Права доступу

### Як читати `ls -l`

Кожен файл має **власника**, **групу** і **режим** — три набори по три біти: для власника, для групи й для всіх інших
(їх часто називають «others»). Кожен набір каже, чи може ця людина **r**ead — читати, **w**rite — змінювати або
e**x**ecute — виконувати файл.

<!-- pic: lsl -->

Для **теки** ті самі літери означають дещо інше, і на цьому спотикаються новачки:

- **r** дозволяє переглянути імена всередині.
- **w** дозволяє створювати, видаляти й перейменовувати файли всередині — навіть ті, які ви самі змінювати не можете.
- **x** дозволяє зайти в теку й дістатися до файлів у ній. Без нього знання імені файлу не допоможе.

Linux перевіряє лише один набір: якщо ви власник, діють біти власника; якщо ні, але ви в групі файлу, — біти групи;
інакше — біти всіх інших. root ці перевірки пропускає.

### Режими числами

Кожна літера має значення: **r = 4, w = 2, x = 1**. Додайте їх для кожного набору — і отримаєте три цифри:

| Режим | Літери | Типове застосування |
|---|---|---|
| `755` | `rwxr-xr-x` | Програми й теки, якими можуть користуватися всі, а змінювати — лише власник |
| `644` | `rw-r--r--` | Звичайні файли: власник редагує, усі читають |
| `640` | `rw-r-----` | `/etc/shadow`: root пише, група shadow читає, більше ніхто |
| `600` | `rw-------` | Приватні файли, як-от закриті ключі SSH |
| `700` | `rwx------` | Приватні теки, як-от `~/.ssh` |
| `1777` | `rwxrwxrwt` | `/tmp`: пишуть усі, sticky-біт захищає кожен файл |
| `777` | `rwxrwxrwx` | Змінити може будь-хто: майже завжди помилка |

Режими змінюють командою `chmod`, а власників — `chown` (потрібен root):

```sh
chmod 600 ~/.ssh/id_ed25519
chmod u+x backup.sh
sudo chown alex:alex report.txt
```

`u+x` означає «додати виконання користувачеві-власникові»; `g` — це група, `o` — інші, `a` — усі три.

Нові файли отримують режим від **umask**, яка прибирає біти з початкового значення (666 для файлів, 777 для тек).
Звичне значення — `022`, що дає файли `644` і теки `755`. В Ubuntu звичайний користувач, чия основна група має його ж
ім'я, отримує натомість `002`, тож його нові файли мають `664`: змінювати їх може й група.

### Три особливі біти

Четверта цифра попереду додає ще три біти. Вони рідкісні, і саме тому їх варто перевіряти:

- **setuid** (`4000`, `s` на місці x власника): програма працює **від імені власника файлу**, а не того, хто її
  запустив. Саме це потрібно `passwd`, щоб змінити `/etc/shadow`.
- **setgid** (`2000`, `s` на місці x групи): та сама ідея для групи.
- **sticky-біт** (`1000`, `t` на місці x інших): у теці, куди можуть писати всі, видаляти чи перейменовувати файл
  може лише його власник (або власник теки, або root). Він є в `/tmp`.

Програма з setuid від root, яку можна змусити запускати інші команди або яка має помилку, роздає права root.
Зловмисники шукають такі першими (ATT&CK T1548.001) — і вам варто:

```sh
find / -perm -4000 -type f 2>/dev/null
```

`-perm -4000` означає «має біт setuid», а `2>/dev/null` відкидає помилки «Permission denied» від тек, які ви не можете
відкрити. У `/usr/bin` невеликої інсталяції Ubuntu 24.04, наприклад, їх десять: `chfn`, `chsh`, `fusermount3`,
`gpasswd`, `mount`, `newgrp`, `passwd`, `su`, `sudo` і `umount`. Тримайте список того, що нормально: новий файл із
setuid, особливо в `/tmp` чи домашній теці, потребує пояснення.

> [!WARNING]
> `chmod 777` «лікує» помилку прав, дозволяючи всім змінювати файл. Якщо root або служба колись запустить цей файл,
> будь-хто на комп'ютері зможе запустити свій код із цими силами. Дайте тому одному обліковому записові, якому це
> потрібно, той один біт, який йому потрібен.

## Процеси

### Що має процес

**Процес** — це запущена програма. Кожен має:

- **PID** (ідентифікатор процесу) і **PPID** — PID свого батька: кожен процес запускає інший;
- **користувача**, від імені якого він працює, — це вирішує, до чого він має доступ;
- **командний рядок**: програму і все, що набрано після неї;
- файл програми, з якого його запущено, а також відкриті файли й мережеві з'єднання.

Перший процес, PID 1, — це **systemd**: він запускає все інше в просторі користувача. PID 2 — **kthreadd**, який
запускає власних помічників ядра — **потоки ядра**. Вони не мають ні файлу програми, ні командного рядка, тому `ps`
показує їхні імена у квадратних дужках: `[kworker/0:1]`.

### Як їх побачити

```sh
ps -ef
ps -ef --forest
top
```

- `ps -ef` показує всі процеси з користувачем (UID), PID, PPID, часом запуску й командою. У підручниках ви побачите й
  `ps aux` — той самий список у старішому стилі BSD, зі стовпцями процесора й пам'яті.
- `--forest` малює список деревом, тож видно, хто кого запустив.
- `top` показує найзавантаженіші процеси наживо; щоб вийти, натисніть `q`.

У стовпці `STAT` команди `ps aux` трапляються літери, які варто знати: **R** — працює, **S** — спить (чогось чекає),
**D** — чекає на диск і його не можна перервати, **T** — зупинений, **Z** — зомбі (завершився, але батько ще його не
забрав) та **I** — неактивний потік ядра.

<!-- pic: ptree -->

### Зазираємо в `/proc`

Усе, що показує `ps`, він бере з `/proc`, і ви теж можете це прочитати. Кожен процес має теку `/proc/<PID>`; два
записи в ній варто знати з першого дня:

- **`/proc/<PID>/exe`** — посилання на файл програми, з якого запущено процес. Якщо цей файл відтоді видалили,
  посилання закінчується на ` (deleted)` — поширений прийом шкідливих програм, які не хочуть нічого лишати на диску.
  Процес досі тримає файл відкритим, тож поки він працює, файл можна скопіювати назад із `/proc/<PID>/exe`.
- **`/proc/<PID>/cmdline`** містить командний рядок, з яким запущено процес. Програма може сама обрати ім'я, яке
  там показує, тож `ps` може вивести `[kworker/0:2]` для чого завгодно; а посилання `exe`, яке веде ядро, однаково
  вказує на справжній файл.

`$$` — це PID вашої власної оболонки, тож `ls -l /proc/$$/exe` показує, яка програма є вашою оболонкою.

### Як зупинити процес: сигнали

Процес зупиняють або підштовхують, надсилаючи йому **сигнал**. Надсилає його `kill`; попри назву, він не завжди
вбиває.

| Сигнал | Номер | Про що просить |
|---|---|---|
| SIGTERM | 15 | «Будь ласка, зупинись». Його `kill` надсилає за замовчуванням; програма може спершу прибрати за собою або проігнорувати його |
| SIGINT | 2 | Переривання з клавіатури: те, що надсилає Ctrl+C |
| SIGHUP | 1 | Термінал, якому він належав, закрито |
| SIGKILL | 9 | Зупинись негайно. Його не можна перехопити, заблокувати чи проігнорувати |

```sh
kill 2290
kill -9 2290
```

Замість номера можна вказати назву: `kill -KILL 2290` — те саме, що `kill -9 2290`.

> [!TIP]
> Під час розслідування не поспішайте з `kill -9`. Пам'ять процесу й видалений файл його програми зникнуть разом із
> ним. Спершу зберіть (скопіюйте `/proc/<PID>/exe`, запишіть його командний рядок, користувача й мережеві
> з'єднання), а тоді зупиняйте.

## Служби та systemd

### Юніти

**Служба** — це програма, що працює у фоні, зазвичай від самого завантаження, незалежно від того, чи хтось увійшов.
У Debian, Ubuntu, Red Hat, Fedora та більшості інших дистрибутивів їх запускає, зупиняє й перезапускає **systemd**.
Кожну річ, якою він керує, він описує в невеликому текстовому файлі — **юніті** (unit): `ssh.service` для SSH-сервера в
Ubuntu, `apt-daily.timer` для таймера, що щодня перевіряє оновлення.

Файли юнітів лежать у трьох основних місцях:

| Тека | Хто їх туди кладе |
|---|---|
| `/usr/lib/systemd/system` | Пакети |
| `/etc/systemd/system` | Адміністратор. Юніт тут перемагає однойменний юніт із пакета |
| `~/.config/systemd/user` | Окремий користувач, для власних служб |

<!-- pic: unit -->

Команди, які знадобляться найчастіше:

```sh
systemctl status ssh
systemctl list-units --type=service --state=running
systemctl list-unit-files --state=enabled
sudo systemctl restart ssh
sudo systemctl enable ssh
systemctl list-timers
```

`status` показує, чи працює служба, її PID, файл юніта й останні рядки журналу. `enable` робить так, щоб вона
запускалася при кожному завантаженні (створюючи посилання, яких вимагає розділ `[Install]`), а `disable` це скасовує;
`start`, `stop` і `restart` діють одразу. Юніт SSH-сервера називається `ssh` у Debian і Ubuntu та `sshd` у Red Hat і
Fedora.

**Таймер** — це юніт, що запускає службу за розкладом: щодня, через годину після завантаження, щопонеділка.
`systemctl list-timers` показує кожен таймер, коли він спрацював востаннє і коли спрацює наступного разу.

### cron

До таймерів systemd був **cron**, і він досі поширений. Кожен рядок **crontab** має п'ять полів часу й команду:

```
# minute  hour  day of month  month  day of week   command
  30      2     *             *      *             /usr/local/bin/backup.sh
  @reboot                                          /home/alex/start.sh
```

Перший рядок спрацьовує щодня о 02:30 (`*` означає «кожен»); другий — один раз щоразу, коли запускається cron, тобто
при кожному завантаженні. Поля: хвилина 0–59, година 0–23, день місяця 1–31, місяць 1–12 і день тижня 0–7, де і 0, і 7
означають неділю.

- `crontab -l` показує ваш власний crontab, а `crontab -e` його редагує. Свій може мати кожен користувач, а root може
  прочитати будь-чий: `sudo crontab -l -u alex`.
- `/etc/crontab` і файли в `/etc/cron.d/` діють на всю систему. Їхні рядки мають ще одне поле перед командою:
  користувача, від імені якого її виконати.

### Де програми запускаються самі

Служби, таймери, cron і файли запуску оболонки роблять у Linux те саме, що служби, заплановані завдання й ключі Run у
Windows. Зловмисники користуються ними з тієї ж причини: те, що вони підкинули, повертається після перезавантаження
чи нового входу. Захисники називають це **закріпленням** (persistence).

<!-- pic: persist -->

## Менеджери пакетів

### Пакети й звідки вони беруться

У Linux програми рідко завантажують із вебсайтів. Їх встановлюють як **пакети** з **репозиторіїв** дистрибутива —
онлайн-сховищ пакетів, які він збирає й підписує, — за допомогою **менеджера пакетів**, який заразом встановлює все,
що потрібно кожному пакету, і оновлює все одразу.

| Сімейство | Файли пакетів | Інструменти | Хто користується |
|---|---|---|---|
| Debian | `.deb` | `apt`, `dpkg` | Debian, Ubuntu, Kali |
| Red Hat | `.rpm` | `dnf`, `rpm` | RHEL, Fedora |
| Alpine | `.apk` | `apk` | Alpine Linux |

```sh
sudo apt update
sudo apt upgrade
sudo apt install nmap
```

`apt update` завантажує найсвіжіші списки пакетів; `apt upgrade` встановлює новіші версії того, що у вас уже є;
`apt install` додає пакет. У Red Hat і Fedora ці самі завдання виконують `sudo dnf upgrade` і `sudo dnf install nmap`.

Перш ніж довіряти репозиторію, apt перевіряє цифровий підпис на його списку пакетів і відмовляється від непідписаних
репозиторіїв, якщо його не змусити. Саме тому «запечатані коробки від відомих постачальників» — правда. Додати чужий
репозиторій або встановити файл `.deb` із вебсайта означає довірити його авторові root: встановлення пакета виконується
із силами root.

### Чий це файл і чи його змінювали?

Менеджер пакетів пам'ятає, який пакет поклав кожен файл і куди. Це відповідає на два запитання, які захисники ставлять
постійно:

```sh
dpkg -S /usr/bin/ls
dpkg -L coreutils
sudo dpkg --verify coreutils
```

- `dpkg -S` називає пакет, з якого походить файл: тут це `coreutils: /usr/bin/ls`. Програма в `/usr/bin`, яка не
  належить жодному пакету, заслуговує на пильніший погляд; звичний нешкідливий виняток — посилання на
  `/etc/alternatives`, як-от `/usr/bin/editor`. Питайте зі шляхом `/usr/bin`: `dpkg -S /bin/ls` у сучасних системах
  нічого не знаходить, бо `/bin` — лише посилання.
- `dpkg -L` показує всі файли, які встановив пакет.
- `dpkg --verify` порівнює файли з контрольними сумами, записаними під час встановлення. Якщо все гаразд, він нічого не
  виводить. Рядок на зразок `??5??????   /usr/bin/ls` означає, що вміст змінився; `missing` — що файлу немає.

У Red Hat і Fedora на перше запитання відповідає `rpm -qf /usr/bin/ls`, а на останнє — `rpm -V coreutils`, з кодами
на зразок `S` (розмір), `5` (контрольна сума) і `T` (час зміни) для того, що відрізняється.

> [!WARNING]
> Сам dpkg називає `--verify` перевіркою цілісності, а не перевіркою безпеки. Зловмисник із правами root змінить базу
> пакетів так само легко, як і файли, тож чистий результат означає «нічого очевидного», а не «безпечно».

Debian і Ubuntu також записують кожну зміну пакетів у `/var/log/dpkg.log` і `/var/log/apt/history.log` — звідти видно,
що встановлювали і коли.

## Журнали: де вони лежать

### Два види журналів

Система Linux веде журнали щонайбільше у двох місцях одночасно:

- **Журнал systemd** (journal), який веде `systemd-journald`. Він збирає повідомлення ядра, кожної служби й програм у
  власному двійковому форматі, а читають його командою **`journalctl`**. Він зберігається на диску в
  `/var/log/journal`, якщо така тека існує; інакше — лише в пам'яті, у `/run/log/journal`, і зникає під час
  наступного перезавантаження.
- **Текстові файли в `/var/log`**, які пише окрема програма, **rsyslog**: вона отримує копію повідомлень і розкладає
  їх по файлах. Їх читають за допомогою `less`, `tail` і `grep`.

Що саме у вас є, залежить від дистрибутива. Починаючи з Debian 12, rsyslog **не встановлюється за замовчуванням**:
Debian зберігає лише журнал systemd. Red Hat Enterprise Linux має обидва, і журнал передає повідомлення далі в rsyslog.
В Ubuntu rsyslog, якщо його встановлено, пише `auth.log` і `syslog`. Перевірте командою `ls /var/log`.

| Що | Debian і Ubuntu з rsyslog | Red Hat (RHEL) |
|---|---|---|
| Входи, SSH та інші повідомлення безпеки | `/var/log/auth.log` | `/var/log/secure` |
| Майже все інше | `/var/log/syslog` | `/var/log/messages` |
| Заплановані завдання | (у `syslog`) | `/var/log/cron` |
| Встановлені пакети | `/var/log/dpkg.log`, `/var/log/apt/history.log` | |

### Як читати журнал systemd

```sh
journalctl -u ssh --since today
journalctl -f
journalctl -b -p err
journalctl -k
```

- `-u` показує один юніт (тут — SSH-сервер), а `--since` обмежує час: `today`, `yesterday` або дата й час, як-от
  `"2026-11-12 09:00"`.
- `-f` стежить за новими повідомленнями, щойно вони з'являються, як `tail -f` для файлу.
- `-b` показує лише поточне завантаження, а `-p err` — лише помилки й гірше.
- `-k` показує повідомлення ядра.

Кожен користувач може читати власні повідомлення, але весь системний журнал доступний лише root і членам груп
**adm**, **systemd-journal** і **wheel**. Тому ви часто вводитимете `sudo journalctl`.

<!-- pic: logline -->

> [!NOTE]
> Починаючи з OpenSSH 9.8 (липень 2024 року), SSH-сервер розділено на дві частини: `sshd` лише слухає, а
> **`sshd-session`** обслуговує кожне підключення, тож багато повідомлень про вхід тепер мають його ім'я замість
> `sshd`. OpenSSH 10.0 (квітень 2025 року) виокремив ще й **`sshd-auth`**. Пошук і правила виявлення, написані лише для
> `sshd`, можуть їх пропустити, тож шукайте всі три.

### Інші місця, що пам'ятають

- **`~/.bash_history`**: команди, які користувач вводив у bash. bash записує її, коли оболонка завершується, тож
  сеансу, який ще відкритий, там поки немає, а очистити власну історію може будь-хто. Відсутня історія — уже сама по
  собі зачіпка.
- **Входи**: інструменти `last` і `lastlog` показують минулі входи зі старіших двійкових файлів. У Debian 13 вони
  більше не входять до стандартного набору; їх замінюють пакети **wtmpdb** і **lastlog2**. Журнал systemd у будь-якому
  разі містить входи.

Скільки зберігати журнали, як збирати їх в одному місці і як додати детальний аудит — далі на шляху.

## Щоденні команди

### Ті, якими ви користуватиметеся щодня

| Команда | Що робить | Приклад |
|---|---|---|
| `pwd` | Показує, у якій ви теці | `pwd` |
| `ls` | Показує вміст теки: `-l` з деталями, `-a` із прихованими файлами | `ls -la ~` |
| `cd` | Переходить в іншу теку; `cd` без нічого веде додому | `cd /var/log` |
| `cat` | Виводить файл | `cat /etc/os-release` |
| `less` | Читає довгий файл посторінково; `q` — вихід | `less /etc/passwd` |
| `head`, `tail` | Перші або останні 10 рядків; `tail -f` стежить за файлом, що росте | `tail -n 50 auth.log` |
| `grep` | Рядки, що містять текст: `-i` без огляду на регістр, `-r` у теці, `-c` порахувати | `grep -i error syslog` |
| `find` | Файли за назвою, власником, розміром, віком або режимом | `find /tmp -type f` |
| `file` | Чим файл є насправді, хоч би що казала його назва | `file /usr/bin/ls` |
| `wc -l` | Рахує рядки | `wc -l /etc/passwd` |
| `sort`, `uniq -c` | Сортує рядки; рахує рядки, що повторюються | `sort names.txt` |
| `cp`, `mv`, `rm`, `mkdir` | Копіювати, перемістити або перейменувати, видалити, створити теку | `cp a.txt b.txt` |
| `ps`, `kill` | Показати процеси, надіслати їм сигнали | `ps -ef` |
| `ssh` | Увійти на інший комп'ютер | `ssh alex@203.0.113.10` |
| `man` | Посібник до команди | `man grep` |

### Конвеєри й перенаправлення

Справжня сила — у поєднанні малих команд. `|` (**конвеєр**, pipe) передає вивід однієї команди наступній; `>` записує
вивід у файл (замінюючи його), а `>>` дописує в кінець файлу. Цей рядок рахує невдалі паролі SSH для кожної адреси від
опівночі й показує перші п'ять:

```sh
journalctl -u ssh --since today | grep 'Failed password' | grep -o 'from [0-9.]*' | sort | uniq -c | sort -rn | head -5
```

```
   1790 from 203.0.113.50
     61 from 198.51.100.23
     22 from 198.51.100.77
```

Читайте зліва направо: повідомлення SSH із журналу, лише невдалі паролі, лише «from» з адресою, сортування, щоб
однакові рядки стали поруч, підрахунок, сортування за кількістю від найбільшої (`-rn`), перші п'ять. (Ці числа
вигадані.) Із rsyslog перші два кроки замінює `grep 'Failed password' /var/log/auth.log`.

### Як не загубитися

- `man ls` відкриває посібник, а `ls --help` дає коротший підсумок. Обидва працюють без інтернету.
- **Tab** доповнює команди й імена файлів; натисніть двічі, щоб побачити варіанти.
- Стрілка **вгору** повертає попередні команди; **Ctrl+C** зупиняє ту, що зараз виконується.

> [!WARNING]
> `rm` не переносить файли в кошик: скасувати не вийде, а `rm -r` видаляє теку з усім умістом. Перечитайте двічі
> будь-яку команду із `sudo` і `rm`, перш ніж натиснути Enter. (Для криміналістики все навпаки: видалення файлу
> прибирає лише запис, що вказує на його дані, а самі дані часто лишаються на диску, доки їх не перезапишуть. Як
> слідчі їх повертають, ви дізнаєтеся разом із файловими системами, далі на шляху.)

## SSH: вхід з іншого місця

**SSH** (Secure Shell) дає вам зашифровану оболонку на іншому комп'ютері. Сервер слухає **TCP-порт 22**. У Linux
обидві сторони майже завжди — **OpenSSH**: клієнт — `ssh`, сервер — `sshd`.

```sh
ssh alex@203.0.113.10
```

### Ключі хоста: чи це правильний сервер?

Кожен SSH-сервер має власний **ключ хоста**. Під час першого підключення ssh показує відбиток ключа й питає, чи
довіряти йому; якщо ви погодитеся, він зберігає його в **`~/.ssh/known_hosts`**. Щоразу потім ssh порівнює. Якщо ключ
сервера колись зміниться, ssh гучно попередить і вимкне вхід за паролем для цього підключення, бо на тому боці може
бути хтось, хто вдає ваш сервер.

### Ключі замість паролів

**Пара ключів** краща за пароль: сервер тримає лише ваш відкритий ключ, а закритий маєте лише ви, тож ніщо з того, що
бачать сервер чи підслуховувач, не дає їм увійти від вашого імені.

```sh
ssh-keygen -t ed25519
```

Це створює `~/.ssh/id_ed25519` (закритий ключ, режим `600`) і `~/.ssh/id_ed25519.pub` (відкритий ключ). Ed25519 —
типовий вибір ssh-keygen починаючи з OpenSSH 9.5, тож `-t ed25519` лише робить це явним. Відкритий ключ — один рядок —
ви додаєте в `~/.ssh/authorized_keys` свого облікового запису на сервері. Під час підключення ваш ssh доводить, що має
закритий ключ, підписуючи ним, а сервер перевіряє підпис відкритим ключем.

<!-- pic: ssh -->

Права тут важливі. ssh ігнорує закритий ключ, який можуть читати інші користувачі, а сервер за замовчуванням
(`StrictModes yes`) відхиляє ключі, якщо вашу домашню теку, `~/.ssh` (має бути `700`) або `authorized_keys` (`600`)
можуть змінювати інші.

### Сторона сервера

SSH-сервер читає `/etc/ssh/sshd_config`. Три його типові налаштування найважливіші для безпеки:

| Налаштування | Типове значення OpenSSH | Що означає |
|---|---|---|
| `PermitRootLogin` | `prohibit-password` | root може входити за ключем, але ніколи за паролем |
| `PasswordAuthentication` | `yes` | Паролі дозволено, тож їх можна підбирати |
| `PubkeyAuthentication` | `yes` | Вхід за ключем дозволено |

Дистрибутиви й хмарні образи можуть це змінювати, тож перевіряйте сервер, який перед вами: `sudo sshd -T` виводить
налаштування, які він насправді використовує. Сервер, що приймає паролі на порту 22 з інтернету, отримує спроби
вгадати пароль цілий день (ATT&CK T1110.001): MITRE радить стежити за повторними невдалими входами, після яких іде
успішний з тієї самої адреси. Вимкнення паролів, обмеження того, хто може входити, та інше зміцнення SSH — далі на
шляху.

## Як це виглядає в роботі

Ось вигадана перевірка вебсервера після сповіщення про «багато невдалих входів через SSH». Кожен рядок — одна команда
і її відповідь:

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

Читайте згори:

1. **1 873 невдалі паролі за сьогодні:** хтось підбирає (ATT&CK T1110.001). Саме по собі це фоновий шум на будь-якому
   сервері, де SSH відкрито в інтернет.
2. **Один `Accepted password` для deploy** з адреси, яка найбільше підбирала. Саме цей рядок перетворює шум на
   інцидент: одна спроба вдалася.
3. **`[kworker/0:2]`, що належить deploy і має батька 1:** справжні потоки ядра належать root, і запускає їх
   kthreadd, PID 2. Це програма, вбрана в ім'я потоку ядра (ATT&CK T1036.004).
4. **Її файл — `/dev/shm/.k (deleted)`:** вона запустилася з теки в пам'яті, а потім видалила себе. Вона досі є в
   `/proc/2290/exe`, тож скопіюйте її зараз, поки щось не зупинило процес.
5. **`@reboot` у crontab користувача deploy:** друга копія, схована в `.cache`, запускається при кожному
   завантаженні (ATT&CK T1053.003).
6. **`authorized_keys` змінено о 09:44,** за три хвилини після входу: дуже ймовірно, це ключ зловмисника
   (ATT&CK T1098.004). Сама лише зміна пароля deploy його не виставить.

У справжній справі ви ізолювали б сервер, зібрали програму з `/proc`, журнал, crontab і файл ключів — і лише потім
прибирали. Наступні запитання: до чого ще мав доступ deploy (`sudo -l -U deploy`) і чому обліковий запис із паролем,
який можна вгадати, взагалі міг ним входити з інтернету.

- **Центр моніторингу безпеки (SOC):** ви читаєте такі сповіщення, запускаєте `journalctl` і `grep` на сервері й за
  лічені хвилини вирішуєте, чи вхід був вдалою спробою підбору.
- **Реагування на інциденти й криміналістика:** ви збираєте процеси, файли з `/proc`, журнали й crontab-и, перш ніж
  щось перезавантажать, і відновлюєте хронологію з журналу systemd, історії оболонки й часових міток файлів.
  Криміналістика Linux поглиблюється далі на шляху.
- **Тестування на проникнення й червоні команди:** з дозволу ваші перші команди на машині з Linux — `id`, `sudo -l` і
  пошук файлів із setuid та скриптів, які запускає root і в які можна писати.
- **Інженерія виявлення й полювання на загрози (threat hunting):** ви пишете правила для нових файлів із setuid,
  несподіваних юнітів і таймерів, змін у crontab, програм, що працюють з `/tmp` чи `/dev/shm`, і входів після серії
  невдач.
- **Безпека систем і хмари:** ви налаштовуєте права, тримаєте групу sudo маленькою, вимикаєте паролі в SSH і вчасно
  оновлюєте пакети на серверах, які обслуговуєте, в офісі чи в хмарі.
- **Аналіз шкідливих програм:** ви дивитеся, які файли, юніти, рядки cron і ключі створює зразок під Linux, бо саме їх
  шукатиме захисник.

## Спробуйте самі

Двадцять хвилин у терміналі Linux. Кожна команда тут лише читає, крім `ssh-keygen` наприкінці, яка створює у вашій
домашній теці два файли, які ви потім видалите.

> [!NOTE]
> Команди та їхній вивід наведено так, як їх показує система англійською. Якщо ваша система українською, деякі
> повідомлення й дати у виводі можуть бути перекладені. Самі команди ті самі.

### Відкрийте термінал Linux

<!-- for: windows -->

Найшвидше — через WSL 2: він запускає справжню Ubuntu всередині Windows, і для поточних версій Ubuntu systemd там
увімкнено за замовчуванням. Після налаштування відкрийте **Ubuntu** з меню «Пуск».
<!-- guide: set-up-wsl2-ubuntu -->

<!-- for: macos -->

Термінал macOS виконує багато тих самих команд (`ls`, `cd`, `grep`, `ssh`), але macOS — не Linux: там немає ні
systemd, ні apt, ні `/proc`. Для цієї сторінки скористайтеся віртуальною машиною з Linux, наприклад Kali в UTM на Mac
з Apple silicon.
<!-- guide: set-up-kali-utm -->

<!-- for: linux -->

Відкрийте застосунок «Термінал». Якщо хочете тренуватися там, де нічого не зламаєте, віртуальна машина з Kali працює
так само; сторінка лабораторії [Перші кроки](/ua/lab/start/) порівнює варіанти.
<!-- guide: set-up-kali-virtualbox, set-up-kali-vmware -->

<!-- /for -->

### Хто ви і до чого маєте доступ

```sh
pwd
ls -la ~
id
ls -l /etc/passwd /etc/shadow
ls -ld /tmp
sudo -l
```

Які приховані файли лежать у вашій домашній теці? Які групи показує `id` і чи є серед них sudo? Порівняйте режими
`/etc/passwd` і `/etc/shadow`: хто може читати кожен? Знайдіть `t` наприкінці режиму `/tmp`. Потім прочитайте, що
дозволяє вам запускати `sudo -l`.

### Програми, що працюють від імені root

```sh
find /usr/bin -perm -4000 -type f
ls -l /usr/bin/passwd
```

Скільки програм із setuid ви знайшли і чи знайомі вам їхні назви? Навіщо `passwd` потрібна `s`?

### Що працює і що запускається само

```sh
ps -ef --forest | less
ls -l /proc/$$/exe
systemctl list-units --type=service --state=running
systemctl list-timers
crontab -l
```

У дереві знайдіть свою оболонку й пройдіть угору її батьками: що її запустило? Прогорніть на початок, щоб побачити
kthreadd і його потоки ядра у квадратних дужках. `ls -l /proc/$$/exe` показує файл програми вашої оболонки. Які
служби працюють і який таймер спрацює наступним? `crontab -l`, найімовірніше, скаже, що crontab у вас немає: це
нормально.

### Пакети й журнали

```sh
dpkg -S /usr/bin/ls
sudo dpkg --verify coreutils
ls /var/log
sudo journalctl -b -p err
journalctl -u ssh -u sshd --since today
```

З якого пакета походить `ls` і чи виводить щось `--verify`? У вас є `auth.log` і `syslog` чи лише тека `journal`? Які
помилки записало це завантаження? Якщо SSH-сервер не встановлено, остання команда не покаже жодних записів. У Fedora
замість `dpkg -S` скористайтеся `rpm -qf /usr/bin/ls`.

### Створіть ключ SSH

```sh
ssh -V
ssh-keygen -t ed25519 -f ~/practice_key -C practice
ls -l ~/practice_key ~/practice_key.pub
cat ~/practice_key.pub
rm ~/practice_key ~/practice_key.pub
```

Коли ssh-keygen попросить парольну фразу, двічі натисніть Enter (цей ключ лише для практики). Порівняйте два режими:
чому закритий ключ має `-rw-------`, а відкритий — `-rw-r--r--`? Рядок із `.pub` — це те, що ви додали б в
`authorized_keys` на сервері. Останній рядок видаляє обидва файли.

## Перевірте себе

Спробуйте відповісти, перш ніж розгорнути кожну відповідь.

<!-- pic: quiz -->

## Дізнатися більше

- **[OverTheWire: Bandit](https://overthewire.org/wargames/bandit/)**: безкоштовна гра для цілковитих новачків. Ви
  входите через SSH і за допомогою `ls`, `cat`, `find`, `grep` і конвеєрів шукаєте пароль до кожного наступного рівня.
  Англійською.
- **[Linux Foundation: Introduction to Linux (LFS101)](https://training.linuxfoundation.org/training/introduction-to-linux/)**:
  безкоштовний курс у власному темпі від Linux Foundation — організації, у якій розвивається ядро Linux. Англійською.
- **[Безкоштовний навчальний шлях TryHackMe](https://tryhackme.com/resources/blog/free_path)**: до нього входить Linux
  Fundamentals Part 1 — безкоштовна практична кімната, яка проводить вас через перші команди на справжній машині з
  Linux. Англійською.
- **[Проєкт Linux man-pages](https://man7.org/linux/man-pages/)**: сторінки посібника онлайн, з пошуком і
  оновленнями. Більшість посилань на цій сторінці веде туди; `man` показує ті самі сторінки без інтернету.
  Англійською.
