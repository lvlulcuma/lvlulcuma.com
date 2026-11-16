---
# An incident breakdown → lvlulcuma.com/ua/news/incidents/outlook-ntlm-zero-day/
title: "Ваду в Outlook, знайдену за допомогою Claude, уже атакували: що вона видає і як перевірити"
dek: "10 листопада 2026 року Microsoft виправила ваду в Outlook (CVE-2026-124194), яку нападники вже використовували: коли людина відкриває підготовлений файл повідомлення, класичний Outlook без звичного попередження надсилає нападнику NTLMv2-хеш користувача."
type: vulnerability
status: unfolding       # unfolding | confirmed | report (the victim or investigators published a full report)
date: 2026-11-10        # when it became public
published: 2026-11-16   # when this breakdown was published
who: "Користувачі класичного Outlook для Windows у Microsoft 365 Apps for Enterprise, Office LTSC 2021 і Office LTSC 2024"
sector: "Будь-які організації, що користуються Outlook у Windows"
entry: "Підготовлений файл повідомлення, який користувач відкриває в класичному Outlook (CVE-2026-124194). Як нападники доставляли такі файли, не розкрито."
impact: "NTLMv2-хеш користувача потрапляє на сервер нападника, де його можна зламати або передати далі, щоб увійти від імені користувача; кого атакували і скількох, невідомо"
timeline:
  - date: 2023-03-14
    text: "Для контексту: Microsoft виправляє CVE-2023-23397 — давнішу ваду в Outlook, через яку NTLM-хеші витікали до нападників через нагадування в календарі, без жодних дій користувача."
  - date: 2026-11-10
    text: "Листопадові оновлення Microsoft виправляють 1093 вразливості — другий місяць поспіль понад тисячу. Лише одну позначено як таку, що вже використовується: CVE-2026-124194 в Outlook з оцінкою 6,5 і рівнем «Moderate» (помірний). Виправлення приходить з оновленнями Office."
  - date: 2026-11-10
    text: "У бюлетені Microsoft знахідку приписують Бенуа Севенсу з Anthropic, який працював із ШІ-моделлю компанії Claude; деякі джерела називають також другого дослідника, nono. Подробиць атак Microsoft не наводить."
  - date: 2026-11-10
    text: "CISA додає ваду до каталогу вразливостей, які вже використовують, і дає федеральним відомствам США час до 24 листопада, щоб її закрити."
attack:
  - tactic: "Виконання"
    id: T1204.002
    name: "User Execution: Malicious File"
    text: "Жертва має відкрити підготовлений файл повідомлення; область попереднього перегляду ваду не запускає."
  - tactic: "Доступ до облікових даних"
    id: T1187
    name: "Forced Authentication"
    text: "Outlook з'єднується з мережевим розташуванням, яке контролює нападник, і Windows разом із з'єднанням надсилає NTLMv2-хеш користувача."
detect:
  - "З'єднання `outlook.exe` з публічними IP-адресами на TCP-портах 445 або 139, особливо одразу після того, як хтось відкрив файл `.msg` чи `.oft`."
  - "Запасний шлях через WebDAV: `rundll32.exe` запускає `davclnt.dll,DavSetCookie` із зовнішнім іменем хоста."
  - "Вихідний NTLM до зовнішніх серверів у журналі `Microsoft-Windows-NTLM/Operational` (подія 8001), якщо ввімкнено аудит NTLM."
  - "Мережеві входи з NTLM (подія 4624, тип входу 3) для пари «користувач — адреса джерела», якої раніше не було: можлива ознака переданого далі хешу."
  - "Microsoft і CISA не опублікували індикаторів компрометації, тож це поведінка, яку варто шукати, а не готові сигнатури."
check:
  - "Переконайтеся, що оновився саме Office: накопичувальне оновлення Windows цю ваду не закриває. Серед виправлених збірок — Office LTSC 2021 16.0.14334.21048 і Office LTSC 2024 16.0.17932.21140; збірки Microsoft 365 Apps перелічено на `aka.ms/OfficeSecurityReleases`."
  - "Заблокуйте вихідний SMB-трафік (TCP 445 і 139) з вашої мережі в інтернет."
  - "Ускладніть передачу хешу далі: вимагайте підпис SMB, підпис LDAP і прив'язку каналу (channel binding), а також Extended Protection for Authentication на сервісах, що приймають NTLM."
  - "Подумайте про обмеження вихідного NTLM політикою «Restrict NTLM: Outgoing NTLM traffic to remote servers»: спершу в режимі аудиту, потім із блокуванням."
  - "Якщо хтось міг відкрити такий файл, змініть його пароль, завершіть його сесії й перевірте, де обліковий запис входив після цього."
  - "Office 2016 і 2019 не підтримуються з жовтня 2025 року й не входять до списку виправлених продуктів Microsoft: плануйте перехід з них."
unknown:
  - "Хто використовував ваду, проти кого, наскільки широко і відколи."
  - "Як підготовлені файли потрапляли до жертв: електронною поштою, через завантаження чи в месенджерах."
  - "Чи почалися атаки до того, як дослідники повідомили про ваду, чи після."
  - "Яка частина файлу містить адресу, з якою з'єднується Outlook. Microsoft технічних подробиць не публікувала."
  - "Як саме Claude допоміг знайти ваду. Опису досі не опубліковано."
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

У вівторок, 10 листопада, Microsoft випустила щомісячні оновлення безпеки. За підрахунком, яким користується більшість аналітиків, вони виправляють 1093 вразливості — другий місяць поспіль понад тисячу. У Microsoft кажуть, що знаходити вади значно швидше допомагають інструменти ШІ; роком раніше компанія виправляла близько сотні на місяць. З усіх цих вразливостей відомо про атаки лише на одну: CVE-2026-124194 у класичному застосунку Outlook для Windows.

Вада ховається в тому, як Outlook обробляє спеціально підготовлений файл повідомлення. Коли користувач його відкриває, Outlook з'єднується з мережевим розташуванням, яке контролює нападник, і не показує попередження, яке зазвичай з'являється перед завантаженням зовнішнього вмісту. Тоді Windows надсилає на той сервер NTLMv2-хеш користувача — перетворений доказ знання пароля. Просто переглянути лист в області попереднього перегляду недостатньо: файл треба відкрити.

Маючи хеш, нападник може спробувати зламати пароль офлайн або в реальному часі передати хеш далі й увійти від імені користувача в інші системи, які приймають NTLM без підпису. Microsoft оцінює ваду лише в 6,5 з 10 («Moderate», помірна), а виправлення приходить з оновленнями Office, а не Windows, тож його легко пропустити.

У бюлетені Microsoft знахідку приписують Бенуа Севенсу з Anthropic, який працював із ШІ-моделлю компанії Claude; деякі джерела називають і другого дослідника, nono. Сатнам Наранг з Tenable сказав, що більшу частину року ШІ «насипав дедалі більші стоги сіна», а тепер, схоже, «уперше знайшов голку». Хто використовував ваду, проти кого і відколи, Microsoft не повідомила, а технічного опису поки не опубліковано.
