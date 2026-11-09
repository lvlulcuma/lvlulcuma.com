---
# An incident breakdown → lvlulcuma.com/ua/news/incidents/supermarket-freezer-attacks/
title: "Морозильники супермаркетів на +50 °C: друга хвиля атак на холодильні системи Європи"
dek: "У ніч на 2 листопада 2026 року нападники змінили налаштування доступних з інтернету контролерів холодильного обладнання в супермаркетах по всій Європі, зокрема в Польщі, — через три тижні після атаки на близько 700 французьких магазинів; відповідальності ніхто не взяв."
type: vulnerability
status: unfolding       # unfolding | confirmed | report (the victim or investigators published a full report)
date: 2026-11-02        # when it became public
published: 2026-11-09   # when this breakdown was published
who: "Супермаркети й невеликі продуктові магазини щонайменше в шести європейських країнах, серед них Delhaize, Carrefour, Coop у Швеції, SuperValu та магазини Auchan у Польщі; також три об'єкти французької служби крові (EFS)"
sector: "Продуктова торгівля й холодові склади"
entry: "Контролери холодильного обладнання, доступні з інтернету, багато з них зі стандартними чи простими паролями або застарілим ПЗ, за словами Danfoss і CERT Polska. Єдиного способу проникнення не підтверджено."
impact: "Холодильники й морозильники нагрівалися або переходили в режим розморожування; магазини викидали продукти або знімали їх із продажу; у Польщі атаковано щонайменше два пристрої; у французькій службі крові змінено налаштування холодильних камер, але препарати крові не постраждали"
timeline:
  - date: 2026-10-11
    text: "Для контексту: уночі холодильне обладнання у французьких супермаркетах перемикають у режим розморожування. За даними паризької прокуратури, постраждали близько 700 магазинів."
  - date: 2026-10-13
    text: "Для контексту: Danfoss, що виробляє багато таких контролерів, радить своїм клієнтам у Нідерландах відключити їх від публічного інтернету."
  - date: 2026-11-02
    text: "Уночі через обладнання постачальника холодильної техніки змінюють налаштування холодильних камер на трьох об'єктах французької служби крові EFS. Працівники й незалежні сигналізації це помічають, плазму перевозять на інші об'єкти."
  - date: 2026-11-02
    text: "У ніч на понеділок друга хвиля б'є по супермаркетах у Бельгії, Швеції, Ірландії, Естонії, Нідерландах і Люксембурзі. Деякі морозильники у Швеції виставлено на 50 °C, у Бельгії обладнання перемкнули в режим розморожування. Delhaize, Carrefour, Coop у Швеції та інші підтверджують інциденти."
  - date: 2026-11-02
    text: "У Польщі перестають працювати холодильники в магазині Auchan в Ольштині."
  - date: 2026-11-03
    text: "CERT Polska повідомляє, що знайшла в Польщі 140 холодильних пристроїв, доступних з інтернету, і зв'язалася з їхніми власниками; вона підтверджує атаки щонайменше на два. Auchan Polska підтверджує збої в керуванні холодильним обладнанням у трьох магазинах. EFS підтверджує атаку на свої холодильні камери."
  - date: 2026-11-04
    text: "Coolworld, постачальник холодильного обладнання для служби крові, повідомляє, що інцидент зі стороннім програмним забезпеченням для керування холодом зачепив обмежену кількість її установок."
  - date: 2026-11-05
    text: "CISA, ФБР і міністерства охорони здоров'я, сільського господарства та транспорту США закликають організації захистити промислові холодильні системи й системи моніторингу холодового ланцюга."
attack:
  - tactic: "Початковий доступ"
    id: T0883
    name: "Internet Accessible Device"
    text: "Діставалися до контролерів, чиї вебінтерфейси були відкриті в інтернет. Лише в Польщі CERT Polska знайшла 140 таких пристроїв."
  - tactic: "Початковий доступ"
    id: T1078.001
    name: "Valid Accounts: Default Accounts"
    text: "Входили туди, де досі стояли стандартні або прості паролі, за словами Danfoss і CERT Polska."
  - tactic: "Порушення керування процесом"
    id: T0836
    name: "Modify Parameter"
    text: "Перемикали обладнання в режим розморожування й піднімали задану температуру, у деяких шведських магазинах — до 50 °C."
  - tactic: "Вплив"
    id: T0879
    name: "Damage to Property"
    text: "Продукти нагрілися, і їх довелося викинути, як-от м'ясо приблизно на 15 тисяч євро в одній бельгійській м'ясній крамниці."
detect:
  - "Зміни заданої температури чи режиму, яких ніхто не планував, особливо вночі: режим розморожування на багатьох установках одночасно або температура, задана набагато вище норми."
  - "Входи на вебсторінку контролера ззовні вашої мережі або з адрес, з яких раніше ніхто не входив."
  - "Незалежні датчики температури, що показують не те, що повідомляє контролер. У французькій службі крові зміну помітили технік і окремі сигналізації."
  - "Ваші власні контролери в пошукових системах для пристроїв в інтернеті. Censys налічив 6695 відкритих в інтернет контролерів холодильного обладнання 9 жовтня і все ще 3124 — 5 листопада."
check:
  - "Приберіть контролери з публічного інтернету. Якщо потрібен віддалений доступ, дозволяйте його тільки через фаєрвол або VPN, які ви вчасно оновлюєте."
  - "Змініть стандартні паролі, використовуйте складні паролі та стійку до фішингу багатофакторну автентифікацію, де це можливо, і дозволяйте доступ лише з відомих адрес."
  - "Винесіть холодильні та інші інженерні системи будівлі в окремий сегмент мережі."
  - "Оновлюйте контролери й замінюйте ті, які виробник уже не підтримує. Danfoss каже, що більшість уражених пристроїв — зняті з виробництва моделі."
  - "Увімкніть журналювання, переглядайте журнали й зберігайте офлайн-копії налаштувань контролерів, щоб швидко їх відновити."
  - "Переконайтеся, що працівники перевіряють температуру й знають, що робити з продуктами з холодильника, який нагрівся. Головний санітарний лікар Польщі каже, що такі продукти продавати не можна."
  - "У Польщі повідомляйте про інциденти до CERT Polska."
unknown:
  - "Хто стоїть за атаками. Ніхто не взяв відповідальність, а бельгійський центр кібербезпеки каже, що встановити нападників, можливо, не вдасться ніколи."
  - "Чи жовтнева й листопадова хвилі та атака на службу крові — справа тих самих людей."
  - "Скільки загалом постраждало магазинів і пристроїв і скільки продуктів втрачено."
  - "Як саме нападники потрапляли в кожну систему: через стандартні паролі, старе ПЗ чи відому вразливість. Шведський центр кібербезпеки не сказав, як атакували магазини в Швеції."
  - "Яку частину обладнання Coolworld використали і чи пов'язано це з контролерами Danfoss."
  - "Чи використовували ШІ, щоб знаходити й атакувати пристрої. Бельгійський центр кібербезпеки згадав про такий ризик, але сказав, що не знає."
jobs: [ot-security-analyst, ot-security-engineer, iot-security-engineer, network-security-engineer, incident-responder]
topics: [attack-surface-management, asset-inventory, patch-management, security-baselines, firewall-rule-management]
sources:
  - name: "Portal Spożywczy: Pierwszy potwierdzony atak na lodówkę w Polsce. 140 urządzeń było narażonych"
    url: "https://www.portalspozywczy.pl/handel/wiadomosci/ataki-na-lodowki-i-zamrazarki-w-europie-w-polsce-potwierdzono-jeden-incydent,294868.html"
  - name: "Le Monde Informatique: L'Établissement français du sang touché par une cyberattaque"
    url: "https://www.lemondeinformatique.fr/cybersecurite-conformite/2026-11-06-l-etablissement-francais-du-sang-touche-par-une-cyberattaque"
  - name: "Aleteia: Les chambres froides de l'Établissement français du sang victimes d'une cyberattaque"
    url: "https://fr.aleteia.org/2026/11/05/les-chambres-froides-de-letablissement-francais-du-sang-victimes-dune-cyberattaque/"
  - name: "The Record: Second wave of suspected cyberattacks hits supermarket freezers across Europe"
    url: "https://therecord.media/cyberattack-grocery-freezers-europe"
  - name: "TechCrunch: A fresh wave of cyberattacks has hit Europe's supermarket refrigerators, destroying food across countries"
    url: "https://techcrunch.com/2026/11/02/a-fresh-wave-of-cyberattacks-has-hit-europes-supermarket-refrigerators-destroying-food-across-countries/"
  - name: "The Hacker News: New Wave of Refrigeration Cyberattacks Hits Supermarkets Across Europe, Forcing Stores to Pull Food"
    url: "https://thehackernews.com/2026/11/second-wave-of-cyberattacks-hits.html"
  - name: "Spider's Web: Polskie sklepy też na celowniku hakerów. Pracownicy zauważyli coś niepokojącego"
    url: "https://spidersweb.pl/2026/11/polskie-sklepy-lodowki-atak.html"
  - name: "Spider's Web: Niedziałające lodówki to dopiero ostrzeżenie. Co jeszcze będą próbowali atakować?"
    url: "https://spidersweb.pl/2026/11/lodowki-to-ostrzezenie.html"
  - name: "Interia: Fala ataków hakerskich w całej Europie. Celem sklepy w Polsce"
    url: "https://wydarzenia.interia.pl/kraj/news-fala-atakow-hakerskich-w-calej-europie-celem-sklepy-w-polsce,nId,23569075"
  - name: "The Record: Harden cooling systems now, feds warn critical infrastructure operators amid attacks"
    url: "https://therecord.media/cyberattacks-refrigeration-cisa-fbi"
  - name: "SecurityWeek: US Agencies Urge Organizations to Harden Refrigeration Controllers"
    url: "https://www.securityweek.com/us-agencies-urge-organizations-to-harden-refrigeration-controllers/"
  - name: "The Register: Feds warn grocers: Don't chill on cyber defenses as freezer hacking spree heats up"
    url: "https://www.theregister.com/security/2026/11/05/feds-warn-grocers-dont-chill-on-cyber-defenses-as-freezer-hacking-spree-heats-up/5307978"
  - name: "Malwarebytes: Ataki na supermarkety i systemy przechowywania krwi wywołują ostrzeżenie w USA"
    url: "https://www.malwarebytes.com/pl/blog/news/2026/11/attacks-on-supermarket-and-blood-storage-systems-prompt-us-warning"
---

Контролери холодильного обладнання — це невеликі комп'ютери, які керують холодильниками й морозильниками в магазинах і на складах. Багато з них мають вебсторінку для віддаленої перевірки. У жовтні близько 700 французьких супермаркетів зранку виявили, що їхнє обладнання вночі перемкнули в режим розморожування. У ніч на понеділок, 2 листопада, це повторилося — цього разу по всій Європі.

Магазини в Бельгії, Швеції, Ірландії, Естонії, Нідерландах і Люксембурзі повідомили, що холодильники й морозильники нагріваються. Деякі морозильники у Швеції виставили на 50 °C, а в Бельгії, за словами фірми, що встановлює холодильне обладнання, його перемкнули в режим розморожування. Delhaize, Carrefour, Coop у Швеції, SuperValu та інші підтвердили інциденти, щонайбільше в кількох десятках магазинів кожна мережа, і викидали продукти або знімали їх із продажу. Danfoss, що виробляє багато таких контролерів, заявила, що уражені системи в Нідерландах не були в захищеній мережі й досі мали стандартні паролі.

У Польщі Auchan підтвердила збої в керуванні холодильним обладнанням у трьох магазинах — в Ольштині, Почесній під Ченстоховою та Сосновці. CERT Polska знайшла 140 холодильних пристроїв, доступних з інтернету, зв'язалася з їхніми власниками й підтвердила атаки щонайменше на два. «Це не складні атаки», — сказав її керівник Марцін Дудек: нападники сканують інтернет у пошуках доступних пристроїв і пробують прості паролі.

У Франції змінили налаштування холодильних камер на трьох об'єктах національної служби крові EFS — через обладнання постачальника, якого преса назвала Coolworld. Працівники вчасно це помітили, і препарати крові не постраждали. 5 листопада п'ять американських відомств, зокрема CISA і ФБР, закликали організації прибрати такі контролери з інтернету. Відповідальності за атаки ніхто не взяв.
