---
# A weekly digest → lvlulcuma.com/ua/news/2026-w47/ (the folder name is the year and ISO week number)
title: "Отруєний скрипт на 178 сайтах і «згенерована ШІ» атака на ЄС"
dek: "Хакери підклали шкідливий код у скрипт, який завантажують 178 великих сайтів, імовірно китайські шпигуни місяцями використовували невідому ваду VMware, а вада в Java на прізвисько Java4Shell загрожує Jira, Jenkins і Keycloak. А ще — «згенерована ШІ» атака на Європейську комісію, арешти підозрюваних вимагачів в Україні та витік у Transport for London."
date: 2026-11-23   # when this digest was published
action: "Оновіть Java на серверах до випусків від 17 листопада, зокрема копії, вбудовані в застосунки й контейнери: вада Java4Shell зачіпає Java 17 і новіші на багатьох сучасних серверних процесорах Intel і AMD."
stories:
  - title: "Хакери підклали шкідливий код у скрипт 178 великих сайтів — від CNN до HSBC"
    type: supply-chain
    text:
      - "Optimizely продає інструменти, якими компанії порівнюють різні версії своїх вебсторінок. Сайти, що користуються її продуктом Web Experimentation, завантажують на сторінки невеликий скрипт Optimizely. У понеділок, 16 листопада, хтось скористався вадою в процесі реєстрації облікового запису цього продукту, дістався до проєктів клієнтів і додав до скрипту власний код. Відвідувачі таких сайтів, як CNN, BBC, Zoom, Salesforce і HSBC, отримували його майже весь день."
      - "Код підміняв адреси криптогаманців на адреси нападників, копіював номери карток, які люди вводили у форми, забирав cookie та знімки екрана, а на iPhone і iPad зі старішою iOS намагався запустити відомі хакерські набори. Optimizely каже, що закрила діру протягом трьох годин після виявлення, що постраждали менше ніж 5% її клієнтів і що це не був витік паролів. Дослідники відстежили щонайменше 7000 доларів викраденої криптовалюти, але скільки карток забрали, ніхто не знає."
    notes:
      - label: "У цифрах"
        text: "Report URI перевірила 1611 скриптів Optimizely і знайшла шкідливий код у 188. Серед 178 уражених організацій 32 — банки та інші фінансові компанії. Лише 24 мали політику безпеки для браузера, достатньо сувору, щоб зупинити атаку, а 68 не мали жодної."
      - label: "Content Security Policy (CSP)"
        text: "Список, який сайт передає браузеру: звідки можна завантажувати скрипти й куди можна надсилати дані. Сувора політика блокує незнайомі сервери, тож може зупинити атаку, навіть коли шкідливий код приходить через скрипт довіреного постачальника."
    why: "Скрипт одного постачальника працював одразу на 178 сайтах, яким люди довіряють, і відомі назви не захистили відвідувачів. Кожен сторонній скрипт на сайті дає своєму постачальнику змогу змінювати сторінки."
    do: "Якщо 16 листопада ви платили карткою або надсилали криптовалюту на великому сайті, перевірте виписку й історію гаманця, а iPhone і iPad оновіть до останньої iOS. Власникам сайтів: приберіть сторонні скрипти зі сторінок оплати й налаштуйте сувору Content Security Policy."
    incident: optimizely-script-hijack
    sources:
      - name: "Optimizely: Security Advisory: Web Experimentation Security Incident (Updated November 19, 2026)"
        url: "https://support.optimizely.com/hc/en-us/articles/50521849710605-Security-Advisory-Web-Experimentation-Security-Incident-Updated-November-19-2026"
      - name: "The Record: Website management platform Optimizely confirms hackers put malicious code into customer sites"
        url: "https://therecord.media/optimizely-malicious-code-customer-sites"
      - name: "Help Net Security: Malware spread through Optimizely hits 178 organizations, including BBC, CNN and Zoom"
        url: "https://www.helpnetsecurity.com/2026/11/17/optimizely-vulnerability-malicious-javascript/"
      - name: "StepSecurity: OPTIMJACK: Optimizely-Hosted Scripts Loaded a Crypto Clipper and Card Skimmer on 178 Organizations"
        url: "https://www.stepsecurity.io/blog/optimjack-optimizely-hosted-scripts-crypto-clipper-card-skimmer"
  - title: "Імовірно китайські шпигуни місяцями використовували невідому ваду VMware"
    type: espionage
    text:
      - "У четвер, 19 листопада, Broadcom виправила критичну ваду у VMware vCenter — програмі, через яку багато компаній керують усіма своїми віртуальними серверами з одного місця. Того ж дня Mandiant (частина Google) повідомила, що ймовірно китайське шпигунське угруповання, яке вона називає ARMORY CASTLE, використовувало цю ваду з початку вересня, задовго до виправлення. Вада дає змогу будь-кому, хто має мережевий доступ до vCenter, стати адміністратором без пароля."
      - "В атаках, які розслідувала Mandiant, угруповання спершу проникало через діру в пристрої віддаленої підтримки BeyondTrust, потім переходило на Linux-машини без жодного захисного ПЗ. Звідти нападники підробляли входи адміністратора до vCenter, діставалися серверів під ним і копіювали базу паролів Windows прямо з диска віртуальної машини. Вони залишили бекдор, який отримує команди через Slack."
    notes:
      - label: "Хитрий хід"
        text: "Нападникам навіть не довелося торкатися самої Windows-машини: вони читали її диск із сервера під нею, де захисні засоби Windows цього не бачать. А віддалений вхід до vCenter (SSH) вмикали лише на той час, що був потрібен, і потім знову вимикали."
      - label: "vCenter і ESXi"
        text: "ESXi — це система, яка запускає віртуальні машини на фізичному сервері. vCenter керує багатьма серверами ESXi з однієї консолі, тож хто контролює його, той може дістатися до кожної віртуальної машини на них."
    why: "У vCenter — ключі від усієї серверної кімнати компанії, а в цих атаках він стояв серед пристроїв, за якими не стежив жоден засіб захисту. Система, оновлена сьогодні, може й далі приховувати підроблені облікові записи та викрадені ключі з вересня."
    do: "Установіть оновлення Broadcom від 19 листопада (наприклад, vCenter 8.0 U3m): обхідного рішення немає. Потім пошукайте неочікувані облікові записи адміністраторів і машин, сліди давнішого використання SSH на vCenter і нові ключі у файлі authorized_keys облікового запису root на ESXi. Вада має номер CVE-2026-123890."
    sources:
      - name: "Google Threat Intelligence: ARMORY CASTLE Exploits vSphere"
        url: "https://cloud.google.com/blog/topics/threat-intelligence/armory-castle-exploits-vsphere"
      - name: "SecurityWeek: Newly Patched VMware vCenter Flaw Exploited as Zero-Day by Chinese APT"
        url: "https://www.securityweek.com/newly-patched-vmware-vcenter-flaw-exploited-as-zero-day-by-chinese-apt/"
      - name: "Help Net Security: VMware vCenter zero-day exploited for months before patch (CVE-2026-123890)"
        url: "https://www.helpnetsecurity.com/2026/11/20/vmware-vcenter-zero-day-cve-2026-123890-exploited/"
      - name: "The Hacker News: China-Linked Hackers Exploit Critical VMware vCenter Zero-Day to Gain Admin Access and Steal Data"
        url: "https://thehackernews.com/2026/11/china-linked-hackers-exploit-critical.html"
  - title: "«Java4Shell»: вада в декодері Base64 у Java загрожує Jira, Jenkins і Keycloak"
    type: vulnerability
    text:
      - "У вівторок, 17 листопада, Oracle і проєкт OpenJDK виправили серйозну ваду в Java — мові, на якій працює безліч бізнесових застосунків. Вона ховається у «швидкому шляху», яким Java на новіших серверних процесорах Intel і AMD декодує Base64 — поширений спосіб перетворювати дані на звичайний текст. Спеціально підготовлений рядок змушує Java записувати дані за межею виділеної ділянки пам'яті. Ваду знайшла компанія Calif, і вона має прізвисько Java4Shell — відлуння Log4Shell, вади в бібліотеці журналювання Java 2021 року."
      - "Calif каже, що перетворила ваду на захоплення без пароля в шести популярних застосунках, серед яких Jira, Confluence, Jenkins і Keycloak, і пришвидшила цю роботу за допомогою ШІ-агентів. Ці експлойти вона не публікувала, і атак поки не підтверджено. Але інші дослідники вже обвалювали нею тестові сервери, а компанія VulnCheck має робочий експлойт для своїх клієнтів."
    notes:
      - label: "Кого це стосується"
        text: "Для вади потрібні Java 17.0.6 або новіша, процесор із набором інструкцій AVX-512 VBMI (сервери Intel Xeon, починаючи з Ice Lake, і AMD Zen 4 та новіші) і застосунок, який декодує Base64 від сторонніх людей. Java 8 і 11 та сервери на ARM вада не зачіпає."
      - label: "Base64"
        text: "Спосіб записати будь-які дані 64 звичайними символами (літерами, цифрами, + і /), щоб вони могли пройти там, де очікують текст, — наприклад, у заголовку входу чи в токені безпеки. Застосунки постійно його декодують, часто ще до того, як перевірять, хто звертається."
    why: "Java працює всередині величезної кількості корпоративних інструментів, і багато з них доступні з інтернету. Перетворити ваду на захоплення системи складно, але дослідники вже це зробили, а watchTowr оцінює атаки як дуже ймовірні."
    do: "Оновіть Java до випусків від 17 листопада (у Oracle це 17.0.21.1, 21.0.13.1, 25.0.5.1 і 27.0.1.1, або відповідні збірки вашого постачальника). Поки не можете, запускайте Java з параметрами -XX:+UnlockDiagnosticVMOptions -XX:-UseBASE64Intrinsics. Вада має номер CVE-2026-114938."
    sources:
      - name: "VulnCheck: Java4Shell CVE-2026-114938: Fine, I Guess We'll Do This Again"
        url: "https://www.vulncheck.com/blog/java4shell"
      - name: "watchTowr: Frequently Asked Questions About the Java Remote Code Execution Vulnerability (Java4Shell CVE-2026-114938)"
        url: "https://watchtowr.com/intelligence/java4shell-cve-2026-114938-faq/"
      - name: "The Hacker News: Java4Shell Flaw (CVE-2026-114938) Enables Pre-Auth RCE in Jira, Jenkins, Keycloak and More"
        url: "https://thehackernews.com/2026/11/java4shell-cve-2026-114938-enables-pre.html"
      - name: "Censys: Nov 18 Advisory: OpenJDK Remote Code Execution (Java4Shell) [CVE-2026-114938]"
        url: "https://censys.com/advisory/cve-2026-114938/"
  - title: "Європейська комісія підтвердила атаку, яку сама називає «згенерованою ШІ»"
    type: breach
    text:
      - "У четвер, 19 листопада, Європейська комісія підтвердила кібератаку після того, як про неї написало видання Politico. Перші ознаки Комісія помітила ще 22 жовтня. Системи для розрахункових листів, заяв на відпустку й відшкодування медичних витрат працівників, а також служби перекладу відключили, деякі — більш ніж на 10 днів, а 18 листопада система управління персоналом знову перестала працювати."
      - "Речник Тома Реньє сказав, що «це була кіберкампанія, згенерована ШІ», і в ній використали загальнодоступний інструмент. Джерела Politico назвали цей інструмент: ARTEX — програма з відкритим кодом, яка за допомогою комерційних ШІ-моделей сама шукає слабкі місця й використовує їх. Комісія не назвала нападників і не сказала, як вони проникли, а також заявила, що не знайшла доказів витоку даних, який зачепив би всіх її працівників."
    notes:
      - label: "Попередження ФБР"
        text: "13 листопада ФБР попередило, що нападники використовують ARTEX щонайменше із серпня і в деяких випадках отримують привілейований доступ менш ніж за три години. В інтернеті були відкриті понад 1600 панелей керування ARTEX."
      - label: "Тестування на проникнення"
        text: "Злам власних систем із дозволу власника, щоб знайти слабкі місця раніше за злочинців. ARTEX випустили в липні саме як інструмент для такої роботи, а потім його обернули проти справжніх жертв."
    why: "Інструменти на кшталт ARTEX дають змогу за години зробити те, на що раніше досвідченій команді потрібні були дні. Це вже третій публічно відомий інцидент у Комісії цього року, а команда реагування установ ЄС закликає виправляти навіть знахідки низької серйозності."
    do: "Приберіть з інтернету адміністративні сторінки й панелі керування, увімкніть багатофакторну автентифікацію на ключових системах і налаштуйте сповіщення, коли один обліковий запис переглядає багато записів поспіль: саме ці кроки проти ARTEX радять ФБР і CERT-EU."
    sources:
      - name: "The Record: European Commission confirms cyberattack, says hackers used AI tool"
        url: "https://therecord.media/european-commission-confirms-cyberattack-using-ai"
      - name: "SecurityWeek: European Commission Confirms AI-Assisted Cyberattack Disrupted Services"
        url: "https://www.securityweek.com/european-commission-confirms-ai-assisted-cyberattack-disrupted-services/"
      - name: "The Register: European Commission scrambles to contain AI-assisted cyberattack"
        url: "https://www.theregister.com/cyber-crime/2026/11/19/european-commission-scrambles-to-contain-ai-assisted-cyberattack/5311103"
      - name: "Cloud Security Alliance: AI-Tool Attack on the European Commission: Lessons for Defenders"
        url: "https://labs.cloudsecurityalliance.org/research/csa-research-note-european-commission-ai-cyberattack-2026112/"
  - title: "Україна разом із ФБР затримала чотирьох підозрюваних, причетних до викупів на 40,5 млн доларів"
    type: takedown
    text:
      - "У середу, 18 листопада, Офіс генерального прокурора й Національна поліція повідомили, що разом із ФБР викрили міжнародне угруповання вимагачів. Поліція провела 66 обшуків у Києві та 11 областях, чотирьох ключових учасників узято під варту. Їм загрожує до 15 років позбавлення волі."
      - "За даними слідства, угруповання щонайменше з 27 людей з України, Казахстану, росії та інших країн телефонувало працівникам компаній під виглядом IT-підтримки, іноді з голосами, згенерованими ШІ. Коли людина передавала дані для входу чи встановлювала програму віддаленого доступу, нападники викрадали дані, шифрували файли й вимагали криптовалюту. Щонайменше 28 компаній заплатили понад 40,5 млн доларів. До ширшої мережі, де є колишні учасники угруповання вимагачів Conti, входять понад 60 людей у восьми юрисдикціях."
    notes:
      - label: "Що вилучили"
        text: "Поліція вилучила комп'ютери, телефони, банківські картки, майже 370 000 доларів готівкою і 20 000 євро. У судових документах, на які посилаються журналісти, названо постраждалих зі США, зокрема нафтовидобувну компанію Warren Oil, яка, за повідомленнями, заплатила близько 5 млн доларів у біткоїнах після того, як у неї викрали 1,4 ТБ даних."
      - label: "Вішинг"
        text: "Голосовий фішинг: обман телефоном, а не електронною поштою. Видавати себе за службу підтримки вигідно, бо працівники звикли, що IT-відділ просить їх щось установити чи продиктувати код."
    why: "Підозрювані у вимаганнях рідко опиняються під вартою. Слідчі кажуть, що отримали доступ до внутрішнього листування угруповання і досі встановлюють інших учасників ширшої мережі."
    do: "Домовтеся, як перевіряти, що дзвінок від «IT» справжній, — наприклад, передзвонювати на відомий номер. Ніколи не встановлюйте програми віддаленого доступу й не диктуйте коди лише тому, що про це просить співрозмовник, і блокуйте програми віддаленого доступу, якими ваша компанія не користується."
    sources:
      - name: "BleepingComputer: Ukraine, FBI arrest ransomware gang members tied to $40M in ransoms"
        url: "https://www.bleepingcomputer.com/news/security/ukraine-fbi-arrest-ransomware-gang-members-tied-to-40m-in-ransoms/"
      - name: "The Record: Ukraine exposes ransomware network extorting US oil, healthcare firms"
        url: "https://therecord.media/ukraine-ransomware-arrests-cyber"
      - name: "Інтерфакс-Україна: Офіс генпрокурора та ФБР викрили міжнародне хакерське угруповання, арештовано 4 ключових учасників"
        url: "https://interfax.com.ua/news/general/1238478.html"
      - name: "Цензор.НЕТ: Виманили понад $40,5 млн у 28 підприємств: Нацполіція спільно з ФБР викрили групу хакерів, - Цуцкірідзе"
        url: "https://censor.net/ua/news/4034335/vykryly-grupu-hakeriv-scho-vymanyla-ponad-40-mln-dolariv"
  - title: "Хакери дісталися даних 265 000 власників лондонських проїзних Oyster photocard"
    type: breach
    text:
      - "Transport for London (TfL) керує міськими автобусами й метро. У понеділок, 16 листопада, клієнти почали отримувати листи з проханням створити обліковий запис, а TfL помітила підозрілу активність на сайті Oyster photocard і відключила систему. Photocard — це іменні проїзні з фото, які дають безплатний чи пільговий проїзд дітям, студентам, людям старшим за 60, учням на виробництві та ветеранам."
      - "TfL каже, що нападники могли бачити імена, номери телефонів, адреси електронної пошти й домашні адреси, дати народження, а також контрольні запитання й відповіді приблизно 265 000 клієнтів. Паролі, платіжні дані, фото й історія поїздок, за її словами, не постраждали, як і імена та дати народження дітей із картками Zip. Як нападники проникли, TfL не повідомила. Вона поінформувала ICO — британського регулятора у сфері захисту даних."
    notes:
      - label: "Не вперше"
        text: "У вересні 2024 року учасники угруповання Scattered Spider зламали мережу TfL, і та атака коштувала близько 29 млн фунтів. Двоє з них визнали провину й цього року отримали вироки."
      - label: "Контрольні запитання"
        text: "Запасні запитання на кшталт «Ваша перша школа?», якими підтверджують особу, коли забули пароль. На відміну від пароля, правдиву відповідь не зміниш, тож якщо ви використовували ті самі запитання деінде, поставте там нові відповіді."
    why: "Імена, домашні адреси й дати народження студентів і літніх людей — саме те, що потрібно шахраям для переконливих фальшивих повідомлень від TfL чи банку, а викрадені контрольні відповіді можуть допомогти відкрити інші облікові записи."
    do: "Власникам photocard: ігноруйте неочікувані листи «створіть обліковий запис», змініть контрольні відповіді, які використовували на інших сайтах, і будьте готові змінити пароль і контрольне запитання, коли сайт запрацює знову."
    sources:
      - name: "BleepingComputer: Transport for London breach exposes 265,000 Oyster card users' data"
        url: "https://www.bleepingcomputer.com/news/security/transport-for-london-breach-exposes-265-000-oyster-card-users-data/"
      - name: "Help Net Security: 265,000 Oyster photocard customers' data exposed in Transport for London breach"
        url: "https://www.helpnetsecurity.com/2026/11/20/transport-for-london-oyster-photocard-data-breach/"
      - name: "ITPro: Oyster photocard breach: TfL takes system offline after 260,000+ customers affected by attack"
        url: "https://www.itpro.com/cyber-resilience/data-breaches/oyster-photocard-breach-tfl-takes-system-offline-after-260-000-customers-affected-by-attack"
      - name: "TEISS: Transport for London data breach exposes details of about 265,000 Oyster photocard users"
        url: "https://www.teiss.co.uk/news/transport-for-london-data-breach-exposes-details-of-about-265000-oyster-photocard-users-18499"
fun:   # "Fun story of the week": a light, true story from this week that isn't one of the stories above
  title: "«123456» знову перший, а в Данії найпопулярніший пароль каже «Лукас крутий»"
  text:
    - "Менеджер паролів NordPass опублікував свій щорічний список найпоширеніших паролів. Його склали з паролів, що витекли з вересня 2025 до вересня 2026 року в 44 країнах."
    - "«123456» знову на першому місці, як і в семи з останніх восьми років, а за ним «admin» і «12345678». «1234» уперше потрапив до п'ятірки, а «password» опустився на сьоме місце."
    - "У деяких країн свої хіти. У Данії найпопулярнішим був «lukasersej123», тобто данською «Лукас крутий 123». А дехто просто вводить слово «пароль» своєю мовою, як-от «contraseña» чи «motdepasse»."
  sources:
    - name: "TechRadar"
      url: "https://www.techradar.com/pro/security/the-worlds-most-popular-passwords-for-2026-have-been-revealed-and-unsurprisingly-theyre-all-pretty-bad"
    - name: "Cybernews"
      url: "https://cybernews.com/security/nordpass-2026-most-popular-passwords-study/"
---

Цього тижня шлях усередину відкривала довіра: скрипт постачальника, який 178 сайтів завантажують не задумуючись, пристрій віддаленої підтримки й консоль серверів, за якими ніхто не стежить, дзвінок від «IT». А атаки стають швидшими: ШІ-інструмент отримував привілейований доступ за години, а дослідники за допомогою ШІ-агентів перетворили ваду в Java на робочі експлойти.
