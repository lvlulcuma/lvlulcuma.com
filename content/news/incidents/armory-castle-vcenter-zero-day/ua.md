---
# An incident breakdown → lvlulcuma.com/ua/news/incidents/armory-castle-vcenter-zero-day/
title: "ARMORY CASTLE і vCenter: як імовірно китайські шпигуни перетворили невідому ваду VMware на ключі від серверної"
dek: "19 листопада 2026 року Broadcom виправила CVE-2026-123890 — критичну ваду у VMware vCenter, а Mandiant (частина Google) повідомила, що ймовірно пов'язане з Китаєм шпигунське угруповання ARMORY CASTLE використовувало її з початку вересня, щоб підробляти доступ адміністратора, захоплювати хости ESXi і копіювати дані просто з дисків віртуальних машин."
type: espionage
status: report          # unfolding | confirmed | report (the victim or investigators published a full report)
date: 2026-11-19        # when it became public
published: 2026-11-23   # when this breakdown was published
who: "Організації, що користуються VMware vCenter Server і VMware Cloud Foundation. Mandiant розслідувала кілька вторгнень, але не назвала ні жертв, ні їхніх галузей чи країн."
sector: "Будь-які організації з віртуальною інфраструктурою VMware"
entry: "У вторгненні, яке описує Google, — вада нульового дня в пристрої віддаленої підтримки BeyondTrust Remote Support (CVE-2026-102764); уже всередині мережі — вада vCenter CVE-2026-123890 для доступу адміністратора"
impact: "Повний контроль адміністратора над vCenter і його хостами ESXi; базу облікових даних Windows (NTDS) і файли реєстру скопійовано з віртуального диска й, імовірно, вивезено; довготривалі бекдори на Linux-пристроях. Скільки організацій постраждали, невідомо."
timeline:
  - date: 2026-07-13
    text: "Для контексту: дата збирання всередині BONESAW — інструменту нападників для vCenter. Google зауважує, що таку дату можна підробити, але каже, що угруповання знало про ваду ще до 29 липня."
  - date: 2026-07-29
    text: "Broadcom розкриває давнішу ваду vCenter — CVE-2026-59309. Згодом Broadcom називає нову ваду окремою проблемою."
  - date: 2026-09
    text: "На початку вересня нападники запускають BONESAW проти vCenter, де вже закрито CVE-2026-59309: це перше відоме використання нової вади."
  - date: 2026-10-15
    text: "Google описує, як те саме угруповання використовувало ваду нульового дня в BeyondTrust Remote Support (CVE-2026-102764) — саме через неї нападники проникли в мережу у вторгненні, яке Google опише згодом."
  - date: 2026-11-19
    text: "Broadcom випускає виправлення CVE-2026-123890 з оцінкою 9,8 з 10 і повідомляє, що обхідного рішення немає. Про атаки в її бюлетені не йдеться, а знахідку приписано Mandiant."
  - date: 2026-11-19
    text: "Google Threat Intelligence Group і Mandiant публікують, як ARMORY CASTLE використовувало ваду з початку вересня, разом з індикаторами й правилами виявлення."
attack:
  - tactic: "Початковий доступ"
    id: T1190
    name: "Exploit Public-Facing Application"
    text: "Проникли через ваду нульового дня в пристрої BeyondTrust Remote Support (CVE-2026-102764)."
  - tactic: "Закріплення"
    id: T1505.003
    name: "Server Software Component: Web Shell"
    text: "Розмістили вебшели (спершу SLIMSAVAGE, потім CAGEMATCH) на внутрішньому Linux-пристрої; перший відкривався паролем `123`."
  - tactic: "Підвищення привілеїв"
    id: T1548.001
    name: "Abuse Elevation Control Mechanism: Setuid and Setgid"
    text: "Через gdb встановили біт setuid на `/bin/env`, щоб стати root."
  - tactic: "Розвідка в системі"
    id: T1046
    name: "Network Service Discovery"
    text: "Сканували мережу через nmap у пошуках портів VMware, як-от 2012, 5480 і 9080."
  - tactic: "Доступ до облікових даних"
    id: T1606.002
    name: "Forge Web Credentials: SAML Tokens"
    text: "Забрали ключ підпису SAML із бази каталогу vCenter і підробляли токени адміністратора (BONESAW, SAWSNAKE), що заодно обходить багатофакторну автентифікацію."
  - tactic: "Закріплення"
    id: T1098.004
    name: "Account Manipulation: SSH Authorized Keys"
    text: "Додали власний ключ до `authorized_keys` облікового запису root на ESXi."
  - tactic: "Доступ до облікових даних"
    id: T1003.003
    name: "OS Credential Dumping: NTDS"
    text: "Скопіювали файли NTDS, SYSTEM і SECURITY з віртуальної машини Windows, прочитавши її диск із хоста ESXi."
  - tactic: "Закріплення"
    id: T1543.002
    name: "Create or Modify System Process: Systemd Service"
    text: "Запустили бекдор LAZYBONES як службу systemd, що перезапускалася кожні 50 хвилин."
  - tactic: "Керування й контроль (C2)"
    id: T1102.002
    name: "Web Service: Bidirectional Communication"
    text: "LAZYBONES отримував команди й надсилав результати через Slack, шифруючи їх AES-256."
detect:
  - "У vCenter пошукайте облікові записи адміністраторів SSO чи машин, яких ніхто не створював, і локальні облікові записи адміністраторів з іменами на кшталт `sps-…@vsphere.local`."
  - "Шукайте вмикання й вимикання SSH через API пристрою (`PUT /rest/appliance/access/ssh`): вимкнена служба SSH не доводить, що нею не користувалися."
  - "На ESXi перевірте `authorized_keys` облікового запису root на нові ключі й стежте за входами в Host Client як `vpxuser` та входами через SSH як root."
  - "Стежте за з'єднаннями зі службою каталогу vCenter на TCP-порту 2012, а також з портами 5480 і 9080 з машин, які не використовують для адміністрування, і за скануванням цих портів у стилі nmap."
  - "На Linux-пристроях шукайте файли `/tmp/123`, `/tmp/sss`, `/tmp/dbr` і `/usr/bin/vmtoolscs`, SSH-сервер Dropbear на TCP-порту 53 чи 33992 і вебшели `ActiveSer.jsp` та `u.jsp`. Google опублікувала правила YARA й IP-адреси."
check:
  - "Установіть виправлення Broadcom від 19 листопада: vCenter 8.0 U3m, VMware Cloud Foundation 5.2.5, а також VCF чи vSphere Foundation 9.0.2.0200 або 9.1.1.0200. Обхідного рішення немає. Для vCenter 7.0 публічного виправлення немає, бо його загальна підтримка завершилася в жовтні 2025 року."
  - "Якщо вас могли атакувати, вважайте ключі підпису й сертифікати vCenter викраденими та замініть їх: самої зміни паролів замало."
  - "Дозвольте доступ до портів vCenter 2012, 5480 і 22 та до API vSphere лише з машин для адміністрування."
  - "Підключіть пристрої (vCenter, пристрої віддаленої підтримки та інші Linux-пристрої) до EDR і централізованого журналювання: нападники рухалися саме машинами, за якими ніхто не стежив."
  - "Швидко оновлюйте пристрої віддаленої підтримки та інші пристрої на периметрі мережі: цього разу вхід відкрила вада нульового дня в BeyondTrust."
unknown:
  - "Скільки організацій атакували, у яких галузях і країнах. Mandiant каже лише, що розслідувала кілька інцидентів."
  - "Коли саме Mandiant знайшла ваду і коли повідомила Broadcom."
  - "Що ще нападники забрали, крім файлів облікових даних Windows, які описує Google."
  - "Чи використовують ваду тепер інші нападники. Коли вийшли виправлення, публічного коду експлойта ніхто не бачив, а BONESAW Google не оприлюднила."
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

vCenter Server — це консоль, якою компанії керують хостами VMware ESXi, тобто фізичними серверами, на яких працюють їхні віртуальні машини. Адміністратор у vCenter може дістатися до кожної віртуальної машини, якою той керує. 19 листопада 2026 року Broadcom виправила CVE-2026-123890 з оцінкою 9,8 з 10 — ваду в тому, як служба каталогу vCenter обробляє входи. Нападник, який може дістатися до цієї служби мережею, здатен дізнатися секретний ключ сесії й діяти як адміністратор без жодного пароля.

Того ж дня Google Threat Intelligence Group і Mandiant повідомили, що з початку вересня ваду використовувало ARMORY CASTLE — імовірно пов'язане з Китаєм шпигунське угруповання, яке раніше відстежували як UNC5221. За словами Google, з 2023 року угруповання проникає в мережі через вади нульового дня та щойно розкриті вади в пристроях на периметрі й засобах безпеки. Mandiant знайшла ваду під час своїх розслідувань і повідомила про неї Broadcom, а в бюлетені Broadcom про атаки не згадано.

У вторгненні, яке описує Google, нападники увійшли через ваду нульового дня в пристрої BeyondTrust Remote Support, розмістили вебшели на внутрішньому Linux-пристрої, стали root і просканували мережу в пошуках портів VMware. Вони переходили між Linux-пристроями, на яких не було захисного ПЗ, і принесли п'ять нових інструментів. Один із них, BONESAW, через ваду створював обліковий запис адміністратора vCenter, забирав ключ підпису vCenter і підробляв входи адміністратора. Інший, SAWSNAKE, підробляв для адміністратора токени SAML, що дає змогу обійти й багатофакторну автентифікацію.

Ставши адміністраторами, нападники вмикали SSH, забирали головний ключ vCenter і пароль до його бази даних, а потім знову вимикали SSH. На хостах ESXi вони входили як root, додавали власний ключ SSH і читали диск віртуальної машини Windows напряму, копіюючи файли NTDS, SYSTEM і SECURITY — дані, потрібні, щоб зламати або повторно використати паролі домену Windows. За словами Google, архіви, імовірно, вивезли через пристрій BeyondTrust. Бекдор LAZYBONES, яким керували через Slack, давав змогу залишатися всередині.
