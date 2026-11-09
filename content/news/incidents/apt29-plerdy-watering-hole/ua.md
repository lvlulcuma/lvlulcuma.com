---
# An incident breakdown → lvlulcuma.com/ua/news/incidents/apt29-plerdy-watering-hole/
title: "Poisoned Source: шпигуни перетворили український вебтрекер на пастку для старих телефонів"
dek: "4 листопада 2026 року Sekoia повідомила, що хакери, яких вона пов'язує з APT29, захопили скрипт аналітики Plerdy та інші сайти, щоб надсилати вже виправлені експлойти для iPhone і Android, які крали cookie, логіни, а на деяких iPhone — майже всі дані."
type: espionage
status: report          # unfolding | confirmed | report (the victim or investigators published a full report)
date: 2026-11-04        # when it became public
published: 2026-11-09   # when this breakdown was published
who: "Відвідувачі сайтів, що завантажують скрипт українського сервісу аналітики Plerdy (переважно українських), та інших зламаних сайтів у США, Чехії й Болгарії"
sector: "Вебсайти та їхні мобільні відвідувачі"
entry: "Зламані сайти й захоплений сторонній скрипт аналітики (атака на водопої); як саме змінили скрипт, невідомо"
impact: "Старі iPhone і Android-телефони, з яких заходили на ці сайти, могли втратити cookie браузера, збережені логіни й паролі Wi-Fi, а деякі iPhone — майже всі дані; кількість жертв невідома"
timeline:
  - date: 2026-08-27
    text: "До скрипта аналітики Plerdy додають код, і кожен сайт, що його завантажує, починає завантажувати ще й скрипт для збору відбитків пристрою із сервера нападників."
  - date: 2026-09-03
    text: "Через тиждень зміна в скрипті Plerdy зникає."
  - date: 2026-10
    text: "У середині жовтня Sekoia помічає кампанію на сайті української газовидобувної компанії, а потім і на інших зламаних сайтах: великої американської асоціації хімічної промисловості, чеської ультраправої партії та болгарського сайту, пов'язаного з військовими."
  - date: 2026-11-04
    text: "Sekoia публікує звіт Poisoned Source і з середнім або високим рівнем упевненості пов'язує кампанію з APT29. Того ж дня CISA додає CVE-2024-27834, одну з використаних вразливостей iPhone, до свого переліку вразливостей, які вже експлуатують, не згадуючи кампанію."
attack:
  - tactic: "Підготовка ресурсів"
    id: T1608.004
    name: "Stage Capabilities: Drive-by Target"
    text: "Додали свій код у скрипт аналітики Plerdy та на зламані сайти, щоб відвідувачі завантажували скрипт нападників."
  - tactic: "Підготовка ресурсів"
    id: T1583.001
    name: "Acquire Infrastructure: Domains"
    text: "Створили домени-двійники, як-от `america250[.]holiday` і `theowo[.]club`, що копіювали справжні сайти."
  - tactic: "Розвідка"
    id: T1592
    name: "Gather Victim Host Information"
    text: "Скрипт для збору відбитків збирав 394 характеристики пристрою й браузера кожного відвідувача."
  - tactic: "Початковий доступ"
    id: T1456
    name: "Drive-By Compromise"
    text: "Телефони, з яких заходили на сайти, отримували ланцюжок експлойтів для Safari чи Chrome, підібраний під їхню версію системи."
  - tactic: "Підвищення привілеїв"
    id: T1404
    name: "Exploitation for Privilege Escalation"
    text: "Виходили з пісочниці браузера через інші вразливості, зокрема в ядрі iPhone і в графічному драйвері Android."
  - tactic: "Збір даних"
    id: T1533
    name: "Data from Local System"
    text: "Забирали cookie, збережені логіни, історію переглядів і паролі Wi-Fi; на iOS 18.5 — ще й повідомлення, пошту, фото, дані про місцеперебування тощо."
detect:
  - "Вебсторінки, що завантажують скрипти з доменів, які оприлюднила Sekoia, як-от `edge-ord.clouds-stacks[.]com` і `static.flux-telemetry[.]com`."
  - "Телефони, що з'єднуються з `ad.starx-net[.]com` на порту 8881: туди всі три ланцюжки експлойтів відправляли викрадені дані."
  - "Сторонній скрипт на вашому сайті, наприклад трекер аналітики, який раптом додає тег `<script>` і тягне код з іншого домену."
  - "Заходи на домени-двійники, як-от `america250[.]holiday` і `theowo[.]club`."
  - "Старі версії в переліку ваших телефонів: ланцюжки для iPhone націлені на iOS від 16.0 до 17.4 і 18.5, ланцюжок для Android — на Chrome від 139 до 145."
check:
  - "Оновіть телефони й браузери. Sekoia каже, що телефон з оновленою системою від цих атак захищений."
  - "Знайдіть робочі телефони, які застрягли на старих версіях iOS чи Android, і оновіть або замініть їх, зокрема телефони підрядників і постачальників."
  - "Якщо ваш сайт завантажує скрипти інших компаній, ведіть їхній список, стежте за змінами й приберіть ті, що не потрібні."
  - "Заблокуйте домени й адреси, які оприлюднила Sekoia."
unknown:
  - "Скільки телефонів заразили й скільки даних викрали. Sekoia встановити цього не змогла."
  - "Як нападники змінили скрипт Plerdy і чи знала про це компанія. Коментарів Plerdy не публікували."
  - "Чи цікавили нападників відвідувачі конкретних сайтів, чи якомога більше неоновлених телефонів."
  - "Звідки взялися експлойти. Sekoia вважає, що їх, імовірно, створила третя сторона."
  - "Чому телефони з Chrome 143 і Samsung Galaxy S25 Ultra оминули."
  - "Коли почалася вся кампанія і чи вона ще триває."
jobs: [threat-intelligence-analyst, threat-hunter, malware-analyst, endpoint-security-engineer, appsec-engineer]
topics: [mobile-spyware, actor-tracking, ioc-enrichment, patch-management, client-side-bugs]
sources:
  - name: "Sekoia: Poisoned Source: APT29 watering holes target mobile devices with n-day exploits"
    url: "https://www.sekoia.com/blog/poisoned-source-apt29-watering-holes-targets-mobile-devices-with-n-day-exploits"
  - name: "The Record: Russian state-linked hackers target iPhone, Android devices in zero-click espionage campaign"
    url: "https://therecord.media/russia-hackers-smartphone-cyberattacks"
  - name: "Help Net Security: Russian hackers target iOS and Android users with n-day exploits"
    url: "https://www.helpnetsecurity.com/2026/11/04/apt29-watering-hole-mobile-devices-n-day-exploits/"
  - name: "The Hacker News: APT29-Linked Hackers Hijack Web Analytics Script to Deliver iOS and Android Exploits"
    url: "https://thehackernews.com/2026/11/apt29-linked-hackers-hijack-web.html"
  - name: "Security Affairs: Russian APT29 Targets Mobile Users with Watering Hole Attacks"
    url: "https://securityaffairs.com/202473/apt/russian-apt29-targets-mobile-users-with-watering-hole-attacks.html"
---

APT29 — хакерське угруповання, пов'язане з російською державою. 4 листопада компанія Sekoia із середнім або високим рівнем упевненості заявила, що за кампанією, яку вона назвала Poisoned Source, стоїть APT29 або одна з її підгруп. Уперше Sekoia помітила її в середині жовтня на сайті української газовидобувної компанії.

Слід привів до Plerdy — українського сервісу вебаналітики, скрипт якого завантажують тисячі сайтів, переважно українських, серед них сайти армії, сил спеціальних операцій і виробників військової техніки. З 27 серпня до 3 вересня цей скрипт підтягував ще й скрипт нападників. Вони також зламали сайти великої американської асоціації хімічної промисловості, чеської ультраправої партії й болгарської організації, пов'язаної з військовими, а ще створили сайти-двійники інших ресурсів.

Скрипт нападників збирав сотні характеристик пристрою кожного відвідувача. Відвідувачі без сенсорного екрана чи з неможливим розміром екрана нічого не отримували. Телефони отримували ланцюжок експлойтів під свою систему: на iOS 16 — той, що крав cookie браузера; на iOS 18.5 — набір DarkSword, який копіює повідомлення, пошту, фото, паролі, дані про місцеперебування й багато іншого; на Android з Chrome від 139 до 145 — інструмент, який Sekoia назвала AndroSnitch: він забирав cookie, логіни, історію Chrome і паролі Wi-Fi. Жоден з них не намагався закріпитися на телефоні.

Усі вразливості в цих ланцюжках виправили ще до початку кампанії, тож телефон з оновленою системою був у безпеці. Скільки телефонів уразили і що зробили з даними, Sekoia не знає.
