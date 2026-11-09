---
# An incident breakdown → lvlulcuma.com/ua/news/incidents/openssh-alpine-sshole/
title: "*sshole: як надто довгий пароль відчинив сервери на Alpine Linux"
dek: "5 листопада 2026 року OpenSSH і Alpine Linux виправили вразливість, через яку будь-хто міг увійти в облікові записи без пароля на Alpine та інших системах на musl, надіславши пароль завдовжки від 257 до 1024 байтів; компанія з розвідки загроз каже, що нападники скористалися нею за кілька годин."
type: vulnerability
status: unfolding       # unfolding | confirmed | report (the victim or investigators published a full report)
date: 2026-11-05        # when it became public
published: 2026-11-09   # when this breakdown was published
who: "Сервери й контейнери з OpenSSH на Alpine Linux, а також інші системи на musl, як-от OpenWrt з OpenSSH, Buildroot і Yocto"
sector: "Linux-сервери, контейнери й хмарні образи"
entry: "Вразливість у перевірці пароля SSH (CVE-2026-123158): пароль не потрібен, лише ім'я облікового запису, в якого його немає"
impact: "Будь-хто, хто може дістатися до SSH, може увійти в облікові записи без пароля; на деяких хмарних образах такий обліковий запис може отримати права root; через вразливість захопили щонайменше один сервер-приманку"
timeline:
  - date: 2012-08
    text: "Для контексту: musl, бібліотека C, яку використовує Alpine, починає повертати «*», коли функція хешування пароля дає збій, і перестає приймати паролі SHA-crypt, довші за 256 байтів."
  - date: 2016-07-15
    text: "Для контексту: щоб закрити витік через час відповіді (CVE-2016-6210), OpenSSH починає хешувати спроби входу й для облікових записів без придатного пароля, беручи сіль іншого облікового запису. Разом із поведінкою musl саме це згодом і відчиняє двері."
  - date: 2026-11-05
    text: "Дослідник Озгюн Кюльтекін з Wakefield публікує опис *sshole. OpenSSH випускає версію 10.6p2 з виправленням, а Alpine — виправлені пакети й нові випуски 3.21.10, 3.22.8, 3.23.8 і 3.24.4. Про атаки поки не повідомляють."
  - date: 2026-11-06
    text: "У звітах з'являється номер CVE-2026-123158 з оцінкою 8,1 (High). Компанія з розвідки загроз Previdian каже, що нападники вісім разів пробували вразливість з однієї адреси й отримали root на одному з її серверів-приманок менш ніж за дев'ять годин після публікації CVE."
attack:
  - tactic: "Початковий доступ"
    id: T1190
    name: "Exploit Public-Facing Application"
    text: "Надіслали через SSH надто довгий пароль для облікового запису без пароля й увійшли."
  - tactic: "Розвідка в системі"
    id: T1033
    name: "System Owner/User Discovery"
    text: "Запустили `id` на сервері-приманці Previdian, щоб побачити, ким вони стали."
  - tactic: "Розвідка в системі"
    id: T1082
    name: "System Information Discovery"
    text: "Запустили `uname` і `hostname`, щоб дізнатися про систему."
detect:
  - "`Accepted password for` у `/var/log/messages` для облікового запису без пароля (root, користувач, який входить лише за ключем, або `alpine`). Alpine радить вважати сервер скомпрометованим, якщо такий вхід не можна виключити."
  - "Невдала спроба входу за паролем, а потім успішна в тому самому SSH-з'єднанні."
  - "`id`, `uname` і `hostname`, запущені в неінтерактивних SSH-сесіях одразу після входу, як на сервері-приманці Previdian."
  - "Нові користувачі, нові файли, змінені `authorized_keys` або використання `doas`, яких ніхто не може пояснити."
check:
  - "В Alpine виконайте `apk upgrade -U -a`, а потім `rc-service sshd restart`: запущений демон працює зі старим кодом, доки його не перезапустять."
  - "Перевіряйте встановлений пакет командою `apk info -v openssh-server`, а не за версією в банері SSH: Alpine виправляє старі версії, не змінюючи номера версії."
  - "Якщо оновитися зараз не можна, вимкніть вхід за паролем: задайте `PasswordAuthentication no`, перевірте файл командою `sshd -t`, перезапустіть і переконайтеся через `sshd -T | grep -i passwordauthentication`. Тримайте відкритою одну сесію й спершу перевірте вхід за ключем."
  - "Дивіться не лише на сервери: контейнери із sshd, образи, зібрані до 5 листопада, а також роутери й пристрої на OpenWrt, Buildroot чи Yocto з OpenSSH."
  - "Знайте, в яких облікових записів у полі пароля стоїть `*` (користувачі, які входять лише за ключем, root, `alpine` на деяких хмарних образах): саме вони під загрозою. Облікових записів, заблокованих через `!`, це не стосується."
  - "Системи з glibc, SSH з увімкненим PAM і Dropbear не вразливі."
unknown:
  - "Скільки серверів і образів контейнерів під загрозою. Shodan показує близько 22 мільйонів систем з відкритим SSH, але Alpine працює лише на частині з них."
  - "Чи є атаки, крім восьми спроб з однієї адреси, які бачила Previdian. Інші джерела використання вразливості не підтверджували."
  - "Чи хтось знайшов і використовував вразливість ще до публікації."
  - "Які пристрої та інші продукти на musl постачають OpenSSH без PAM і потребуватимуть власних оновлень."
  - "Коли саме про вразливість повідомили OpenSSH: у звітах це то «напередодні», то «на початку тижня»."
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

OpenSSH — стандартний спосіб віддалено входити на Linux-сервери. Alpine Linux — невелика Linux-система, яка працює в безлічі Docker-контейнерів і хмарних серверів. Замість glibc вона використовує musl — меншу версію бібліотеки C, на яку спирається майже кожна програма. 5 листопада дослідник Озгюн Кюльтекін з Wakefield опублікував вразливість, яку назвав *sshole, і того ж дня OpenSSH і Alpine випустили виправлення.

Для вразливості потрібні три речі, звичні для Alpine: SSH без PAM, увімкнений вхід за паролем (так за замовчуванням в OpenSSH) і хоча б один обліковий запис зі справжнім паролем. Тоді нападник може увійти в будь-який обліковий запис, у якого в полі пароля стоїть лише «*», тобто пароля немає, надіславши пароль завдовжки від 257 до 1024 байтів. Таке поле мають користувачі, що входять лише за ключем, а також root, хоча прямий вхід root через SSH в Alpine за замовчуванням заблоковано. На деяких хмарних образах Alpine вразливий користувач `alpine` може отримати права root без пароля.

Вразливість виросла з двох давніх рішень. З 2012 року musl повертає «*», коли не може захешувати пароль, а паролі SHA-crypt, довші за 256 байтів, вона хешувати не може. З 2016 року OpenSSH хешує спроби входу навіть для облікових записів без придатного пароля, беручи сіль іншого облікового запису, щоб кожна перевірка тривала однаково. Результат, «*», збігається зі збереженим «*», і двері відчиняються. Розробники OpenSSH кажуть, що корінь проблеми не в їхньому коді; версія 10.6p2 її обходить.

6 листопада компанія з розвідки загроз Previdian повідомила, що нападники за кілька годин використали вразливість, отримали root на одному з її серверів-приманок і запустили лише базові команди. Інші дослідники й сама Alpine на момент публікації атак не бачили.
