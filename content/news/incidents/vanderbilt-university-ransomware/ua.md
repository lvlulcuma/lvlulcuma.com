---
# An incident breakdown → lvlulcuma.com/ua/news/incidents/vanderbilt-university-ransomware/
title: "Університет Вандербільта: записки з вимогою викупу, що говорять, кампус, який попросили вимкнутися, і заява про мільйон номерів соцстрахування"
dek: "9 листопада 2026 року Університет Вандербільта в Нашвіллі попросив студентів і працівників вимкнути університетські пристрої через кібератаку, яку взяло на себе угруповання вимагачів BYOD; воно стверджує, що викрало понад мільйон номерів соціального страхування, а університет не підтвердив, чи щось викрали."
type: ransomware
status: unfolding       # unfolding | confirmed | report (the victim or investigators published a full report)
date: 2026-11-09        # when it became public
published: 2026-11-16   # when this breakdown was published
who: "Університет Вандербільта в Нашвіллі (штат Теннессі), де навчається близько 14 000 студентів; Медичний центр Університету Вандербільта, окрема організація, каже, що його системи не постраждали"
sector: "Вища освіта"
entry: "Поки невідомо"
impact: "9 листопада університетські пристрої вимкнули, а більшість систем обмежили; усім довелося змінити пароль; хмарні сховища (OneDrive, SharePoint, Box) не працювали й за тиждень. BYOD стверджує, що має понад мільйон номерів соціального страхування та записи студентів і працівників; університет крадіжки даних не підтвердив."
timeline:
  - date: 2026-09-29
    text: "Для контексту: на сайті витоків нового угруповання вимагачів BYOD з'являються перші жертви, за словами дослідника програм-вимагачів Аллана Ліски."
  - date: 2026-10-26
    text: "Для контексту: BYOD заявляє про атаку на систему охорони здоров'я Університету Нью-Мексико, через яку швидкі перенаправляють до інших лікарень. Наступного дня угруповання вибачається і пропонує пацієнтам до 2500 доларів кожному, але дані залишає собі."
  - date: 2026-11-09
    text: "Уранці університет повідомляє, що реагує на активний кіберінцидент, і просить студентів і працівників вимкнути університетські пристрої та відключитися від Wi-Fi кампусу. На робочих столах з'являються записки з вимогою викупу README_BYOD_31.txt, а деякі комп'ютери програють записане голосове повідомлення від BYOD."
  - date: 2026-11-09
    text: "BYOD додає університет на свій сайт витоків і стверджує, що має понад мільйон номерів соціального страхування та повністю захопило контролер домену. Увечері Wi-Fi кампусу запрацював знову."
  - date: 2026-11-10
    text: "Запрацювали пошта, Okta, Brightspace, Zoom і система запису на курси YES, університетськими пристроями знову можна користуватися. Університет каже, що повне відновлення може тривати тижні. Офіс ФБР у Нашвіллі повідомляє, що допомагає."
  - date: 2026-11-12
    text: "Університет робить зміну пароля обов'язковою для всіх користувачів у межах ліквідації наслідків."
  - date: 2026-11-13
    text: "Більшість систем працює, але OneDrive, SharePoint і Box досі вимкнені. З'являються повідомлення про колективний позов через атаку, поданий до федерального суду в Теннессі."
  - date: 2026-11-15
    text: "Студентська газета повідомляє, що OneDrive і Box досі недоступні."
attack:
  - tactic: "Вплив"
    id: T1491.001
    name: "Defacement: Internal Defacement"
    text: "Заповнили робочі столи університетських комп'ютерів записками з вимогою викупу й програвали на них записане голосове повідомлення, щоб тиснути на університет."
detect:
  - "Власний список тривожних ознак університету: несподівані спливні вікна чи попередження про безпеку, перейменовані, переміщені чи видалені файли й теки, незвичні зміни дозволів в OneDrive чи Box, незнайомі застосунки чи запити, а також несподівані прохання ввести пароль або підтвердити MFA."
  - "Багато копій того самого текстового файлу, що раптом з'являються на робочих столах: один викладач Вандербільта нарахував близько 40 файлів «Read Me»."
  - "Оновлення системи, які ніхто не запускав: працівник університету помітив їх того понеділкового ранку."
check:
  - "Майте спосіб зв'язатися з усіма, який не залежить від атакованих систем. Університет використовував свій новинний сайт, SMS-сповіщення й окрему адресу служби безпеки кампусу."
  - "Заздалегідь напишіть прості інструкції: вимкніть пристрій, нічого не виправляйте самі й повідомте з іншого пристрою, як просив університет."
  - "Перевіряйте привілейовані облікові записи, контролери домену й активність у хмарних сховищах, а також цілісність резервних копій: BYOD стверджує, що захопило контролер домену й має резервні копії."
  - "Заздалегідь вирішіть, хто дає дозвіл повертати сервіси, і переконайтеся, що нападників вже немає, перш ніж це робити."
  - "Студентам і працівникам: змініть пароль, як просять, відхиляйте запити MFA, яких ви не ініціювали, і довіряйте лише офіційним каналам. Будь-хто в США може безкоштовно заморозити свою кредитну історію в Equifax, Experian і TransUnion."
unknown:
  - "Як BYOD потрапило всередину і коли."
  - "Чи справді викрали якісь дані і чиї. Університет не надсилав жодних повідомлень постраждалим."
  - "Чи шифрували файли. Університет не вживав слова «програма-вимагач»."
  - "Чи справді захопили контролер домену й резервні копії."
  - "Скільки вимагає BYOD. У заголовку студентської газети згадано 750 000 доларів, але перевірити це не вдалося."
  - "Коли запрацюють хмарні сховища."
jobs: [incident-responder, incident-response-manager, soc-analyst, iam-engineer, security-administrator]
topics: [ransomware-response, incident-response-process, crisis-communications, mfa-conditional-access, backup-resilience]
sources:
  - name: "Vanderbilt University: Active Cybersecurity Incident Updates"
    url: "https://news.vanderbilt.edu/2026/11/09/nov-9-active-cybersecurity-incident-updates/"
  - name: "The Vanderbilt Hustler: LIVE COVERAGE: Vanderbilt experiencing cyberattack, agencies responding"
    url: "https://vanderbilthustler.com/2026/11/09/breaking-vanderbilt-wi-fi-networks-reportedly-hacked-vuit-yet-to-confirm/"
  - name: "BleepingComputer: Vanderbilt University hit in BYOD ransomware attack, data theft claimed"
    url: "https://www.bleepingcomputer.com/news/security/vanderbilt-university-hit-in-byod-ransomware-attack-data-theft-claimed/"
  - name: "The Record: Vanderbilt cybersecurity incident impacting campus devices and systems"
    url: "https://therecord.media/vanderbilt-cyberattack-ransomware-alert"
  - name: "The Register: Ransomware threat blares from Vanderbilt University computers during cyberattack"
    url: "https://www.theregister.com/cyber-crime/2026/11/10/ransomware-threat-blares-from-vanderbilt-university-computers-during-cyberattack/5308687"
  - name: "CyberScoop: Vanderbilt University reels following ransomware attack claimed by BYOD group"
    url: "https://cyberscoop.com/vanderbilt-university-ransomware-attack-byod/"
  - name: "Infosecurity Magazine: Vanderbilt University Takes Systems Offline After Cyber Incident"
    url: "https://www.infosecurity-magazine.com/news/vanderbilt-university-cyber/"
  - name: "Malwarebytes: Vanderbilt restores systems after cyberattack as hackers claim data theft"
    url: "https://www.malwarebytes.com/blog/news/2026/11/vanderbilt-restores-systems-after-cyberattack-as-hackers-claim-data-theft"
  - name: "Inside Higher Ed: Ransomware Gang Says It Hacked Vanderbilt University"
    url: "https://www.insidehighered.com/news/tech-innovation/administrative-tech/2026/11/11/ransomware-gang-says-it-hacked-vanderbilt"
  - name: "Nashville Scene: Ongoing Vanderbilt Hack Focused on Cloud Storage"
    url: "https://www.nashvillescene.com/news/pithinthewind/vanderbilt-university-ransomware-hack-update/article_2c82fa08-50e2-4642-9826-13003a662adc.html"
  - name: "WSMV: Cybercrime group claims it stole social security numbers during ongoing Vanderbilt breach, report says. Here's what we know"
    url: "https://www.wsmv.com/2026/11/09/vanderbilt-urges-university-community-shut-down-devices-amid-cybersecurity-incident-heres-what-we-know/"
  - name: "eSecurity Planet: Vanderbilt Cyberattack: Hackers Claim Theft of More Than 1M SSNs"
    url: "https://www.esecurityplanet.com/threats/news-vanderbilt-cyberattack-byod-ssn-claim/"
  - name: "Inc.: Hackers Claim 1 Million Social Security Numbers Were Stolen From Vanderbilt. Now 1 Demand Could Last a Lifetime"
    url: "https://www.inc.com/amaya-nichole/hackers-claim-social-security-numbers-stolen-vanderbilt-now-1-demand-last-lifetime/91435748"
  - name: "The Record: Michigan State cyber incident claimed by ransomware gang behind recent hospital attack"
    url: "https://therecord.media/michigan-state-university-byod-gang-cyber-incident"
  - name: "BleepingComputer: UNM Health ransomware attack disrupts patient care, surgeries"
    url: "https://www.bleepingcomputer.com/news/security/unm-health-ransomware-attack-disrupts-patient-care-surgeries/"
  - name: "Gizmodo: Hacker Group Claims UNM Hospital Cyberattack, Then Apologizes and Offers Patients $2,500"
    url: "https://gizmodo.com/hacker-group-claims-unm-hospital-cyberattack-then-apologizes-and-offers-patients-2500-2000832169"
---

Університет Вандербільта — приватний університет у Нашвіллі (штат Теннессі), де навчається близько 14 000 студентів. Уранці в понеділок, 9 листопада, він повідомив, що реагує на активний кіберінцидент, і попросив студентів і працівників вимкнути університетські пристрої та відключитися від Wi-Fi кампусу. Людям сказали нічого не виправляти самостійно й телефонувати в ІТ-підтримку з іншого пристрою. Заняття тривали за розкладом, хоча деякі викладачі свої скасували.

На робочих столах у кампусі з'явилися записки з вимогою викупу README_BYOD_31.txt, а деякі комп'ютери програвали записаний голос: «Вас зламало BYOD». Того ж дня BYOD, угруповання вимагачів, яке вперше помітили наприкінці вересня, додало університет на свій сайт витоків. Воно стверджує, що захопило контролер домену мережі, має резервні копії й викрало понад мільйон номерів соціального страхування, а також імена, контакти, записи студентів і працівників та дослідницькі дані.

Університет називає це кібератакою, але не підтвердив, хто за нею стоїть, чи щось зашифрували і які дані, якщо такі є, викрали. Wi-Fi запрацював того ж вечора, а пошта, Okta, Brightspace і Zoom — наступного ранку. 12 листопада всі мусили змінити пароль. Хмарні сховища залишалися вимкненими: 13 листопада OneDrive, SharePoint і Box досі не працювали, а студентська газета повідомила, що й 15 листопада вони були недоступні. ФБР каже, що допомагає, а до суду вже подано колективний позов.

Медичний центр Університету Вандербільта, окрема організація, каже, що його системи не постраждали. BYOD нове, але активне. У жовтні воно заявило про атаку на систему охорони здоров'я Університету Нью-Мексико, а потім вибачилося і запропонувало пацієнтам до 2500 доларів кожному, але дані залишило собі. Також угруповання внесло до свого списку Університет штату Мічиган, який каже, що не бачить ознак компрометації своєї центральної системи облікових записів.
