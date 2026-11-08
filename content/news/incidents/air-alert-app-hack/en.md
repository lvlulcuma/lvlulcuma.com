---
# An incident breakdown → lvlulcuma.com/en/news/incidents/air-alert-app-hack/
title: "Hackers send fake radiation and street-fighting alerts through Ukraine's Air Alert app"
dek: "On the evening of 1 November, the app millions of Ukrainians rely on for air-raid warnings showed false radiation, chemical, street-fighting and missile alerts, which the Air Force says came from a hack, and it stayed offline for nearly three hours."
type: phishing
status: unfolding       # unfolding | confirmed | report (the victim or investigators published a full report)
date: 2026-11-01        # when it became public
published: 2026-11-02   # when this breakdown was published
who: "Air Alert («Повітряна тривога»), Ukraine's official air-raid alert app, built by Ajax Systems and Stfalcon with support from the Ministry of Digital Transformation"
sector: "Public warning systems"
entry: "Not known yet"
impact: "False radiation, chemical, street-fighting and missile alerts on phones across Ukraine; the app offline for nearly three hours; some street loudspeakers in Lviv region played a radiation signal"
timeline:
  - date: 2026-10-17
    text: "Context: the app gets a map of the approximate movement of russian drones and missiles. That evening Interfax-Ukraine reports that the app and its website have stopped working, with no cause given. No source links this to the November attack."
  - date: 2026-11-01
    text: "At about 22:47 Kyiv time the app starts showing false alerts: radiation and chemical danger and street fighting for users in Kyiv and Kharkiv, a red threat level across Ukraine, and a message in russian about a “nuclear alert” and an Oreshnik missile, with a link to a Telegram channel."
  - date: 2026-11-01
    text: "At 23:02 the Air Force says the app has probably come under hostile interference and that there is no radiation threat."
  - date: 2026-11-01
    text: "By about 23:10 the app is unavailable. Its team says outsiders interfered with it, switches off push notifications and pauses the app. Air Force spokesman Yurii Ihnat tells RBC-Ukraine the app was hacked."
  - date: 2026-11-01
    text: "In Lviv region, some street loudspeakers play a “radiation danger” signal. The regional administration blames a malfunction of the app and says there is no threat."
  - date: 2026-11-02
    text: "Around 02:00 the team starts bringing the app back: alerts and the map's threat levels work again, but the drone and missile markers on the map stay switched off."
  - date: 2026-11-02
    text: "A group calling itself Hitcore claims the attack in comments to a Telegram channel. Officials haven't confirmed the claim."
  - date: 2026-11-02
    text: "Context: russia's Emergencies Ministry says its own app was hit by “a massive cyberattack” that sent fake information to users. Nobody has shown the two attacks are linked."
detect:
  - "Alert types that almost never appear, all at once: radiation, chemical danger, street fighting and a nationwide red level within a few minutes."
  - "Alert text that breaks the system's own patterns: a different language, a mocking tone, or a link to a Telegram channel."
  - "Alerts in the app that don't match the official source they should come from, here the Air Force's own channels."
  - "Logins to the alert-sending console or servers from a new device, place or time, especially just before a burst of unusual alerts."
check:
  - "If you run a system that sends alerts or push notifications to many people, require a second person to approve rare alert types (radiation, chemical) and anything sent to the whole country."
  - "Protect every admin and operator account with phishing-resistant MFA, such as security keys, and do admin work on separate, locked-down computers."
  - "Keep a tested way to stop all push notifications at once, and a correction message ready to send."
  - "If your sirens, loudspeakers or doors act on another system's alerts by themselves, check what they do with an alert type they've never received before."
  - "In Ukraine, turn on emergency alerts in your phone's settings (they arrive even in silent mode), heed street sirens, and don't rely on a single app."
  - "Never tap a link inside an alert notification."
unknown:
  - "How the attackers got in, and which part they reached: the app's servers, the console that sends alerts, or an administrator's account."
  - "Whether the Hitcore claim is true. Officials haven't commented on it."
  - "How many people got the fake alerts, and exactly how long they stayed up."
  - "How the false signal reached loudspeakers in Lviv region, and whether devices anywhere else did the same."
  - "When the drone and missile markers will be back on the map, and what the team has changed."
  - "Whether the attack on russia's Emergencies Ministry app a few hours later is connected."
  - "Whether the 17 October outage had anything to do with it. No source connects them."
jobs: [incident-responder, soc-analyst, threat-intelligence-analyst, appsec-engineer, iam-engineer]
topics: [crisis-communications, hacktivism-influence, phishing-analysis, identity-attacks, incident-response-process]
sources:
  - name: "Укрінформ: Застосунок «Повітряна тривога» відновлює роботу після зламу"
    url: "https://www.ukrinform.ua/rubric-society/4180346-zastosunok-povitrana-trivoga-prizupiniv-robotu-cerez-zlam.html"
  - name: "Інтерфакс-Україна: Мобільний застосунок \"Повітряна тривога\" зазнав ворожого втручання з фейком про радіаційну загрозу – ПС ЗСУ"
    url: "https://interfax.com.ua/news/general/1229371.html"
  - name: "РБК-Україна: У Повітряних Силах підтвердили злам додатку, після чого послідували тривожні сповіщення"
    url: "https://www.rbc.ua/rus/news/povitryanih-silah-pidtverdili-zlam-dodatku-1793569071.html"
  - name: "Суспільне: Застосунок «Повітряна тривога», ймовірно, зламаний, радіаційної загрози в Україні немає — Повітряні сили"
    url: "https://suspilne.media/1442465-zastosunok-povitrana-trivoga-jmovirno-zlamanij-radiacijnoi-zagrozi-v-ukraini-nemae-povitrani-sili/"
  - name: "Суспільне Харків: У Харкові через застосунок «Повітряна тривога» надійшли хибні сповіщення про радіаційну та хімічну небезпеки"
    url: "https://suspilne.media/kharkiv/1442463-u-harkovi-cerez-zastosunok-povitrana-trivoga-nadijsli-hibni-spovisenna-pro-radiacijnu-ta-himicnu-nebezpeku-so-vidomo/"
  - name: "ZN.UA: Застосунок «Тривога» зламано: сервіс поступово відновлює свою роботу"
    url: "https://zn.ua/ukr/war/dodatok-trivoha-jmovirno-zlamano.html"
  - name: "Фокус: Застосунок \"Повітряна тривога\" частково відновив роботу після кібератаки: що відомо"
    url: "https://focus.ua/uk/voennye-novosti/773257-zastosunok-povitryana-trivoga-chastkovo-vidnoviv-robotu-pislya-kiberataki"
  - name: "Факти ICTV: Застосунок Повітряна тривога зламали, радіаційної загрози немає – Повітряні сили"
    url: "https://fakty.com.ua/ua/ukraine/20261101-zastosunok-povitryana-tryvoga-zlamaly-radiatsijnoyi-zagrozy-nemaye-povitryani-syly/"
  - name: "Гордон: Мінцифри назвало альтернативні джерела інформування про повітряну тривогу"
    url: "https://gordonua.com/ukr/section-war/news-mintsyfry-nazvalo-alternatyvni-dzherela-informuvannya-pro-povitryanu-tryvohu-de-braty-dani-02-11-2026.html"
  - name: "DailyLviv: Гучномовці на Львівщині відтворили сигнал «Радіаційна небезпека». У ЛОВА заспокоїли"
    url: "https://dailylviv.com/news/sytuatsiyi-i-pryhody/huchnomovtsi-na-lvivshchyni-vidtvoryla-syhnal-radiatsiyna-nebezpeka-u-lova-zaspokoyily-198349"
  - name: "Reuters (via WMBD): Ukrainian air force says public air raid alert app sent erroneous alerts after being hacked"
    url: "https://wmbdradio.com/2026/11/01/ukrainian-air-force-says-public-air-raid-alert-app-has-been-hacked/"
  - name: "The Kyiv Independent: Ukraine's air raid alert system hacked, Air Force says as false nuclear, chemical warnings sound"
    url: "https://kyivindependent.com/ukraines-air-raid-alert-system-hacked-air-force-says-as-false-nuclear-chemical-warnings-sound/"
  - name: "КП в Украине: Кибератака на приложение \"Повітряна тривога\" - заявление Минцифры и хакеров, что делать"
    url: "https://kp.ua/incidents/a738215-kiberataka-v-prilozhenii-vozdushnaja-trevoha-zajavlenie-mintsifry-i-zajavlenie-khakerov-chto-delat"
  - name: "dpa (via Yahoo News): Emergency apps hacked in Ukraine and russia"
    url: "https://www.yahoo.com/news/world/articles/emergency-apps-hacked-ukraine-russia-014816544.html"
  - name: "Інтерфакс-Україна: Застосунок і сайт \"Повітряна тривога\" перестали працювати невдовзі після анонсу про відображення там руху ворожих цілей"
    url: "https://interfax.com.ua/news/telecom/1221960.html"
  - name: "Ajax Systems: Четверта річниця застосунку «Повітряна тривога»: понад 46 мільйонів завантажень і 6,7 мільйона користувачів"
    url: "https://ajax.systems/ua/blog/air-alert-fourth-anniversary/"
---

Air Alert («Повітряна тривога») is the app Ukrainians use to know when to head for a shelter. Ajax Systems and Stfalcon built it in the first days of the full-scale invasion, with support from the Ministry of Digital Transformation. In March, Ajax said more than 6.7 million people use it every day.

At about 22:47 Kyiv time on Sunday, 1 November, it started showing alerts that weren't real. Users in Kyiv and Kharkiv were warned of radiation, chemical danger and street fighting, and the map turned red across the whole country, the level for a massive drone or missile attack. One message, in russian, claimed a “nuclear alert” was coming and that an Oreshnik ballistic missile was on its way, and it pointed to a Telegram channel. In Lviv region, some street loudspeakers played a “radiation danger” signal, which the regional administration blamed on a malfunction of the app.

At 23:02 the Air Force said there was no radiation threat and that the app had probably come under hostile interference. Its spokesman, Yurii Ihnat, then told RBC-Ukraine that “according to our data” the app was hacked. The app's team said outsiders had interfered with it, switched off push notifications and took the app offline. Around 02:00 it started coming back, with alerts and threat levels but without the drone and missile markers on its map. The team says the app stores no personal data. Street sirens and the state alert system kept working, the Ministry of Digital Transformation and the State Emergency Service said.

Nobody official has said how the attackers got in. A group calling itself Hitcore claims it tricked a system administrator into opening a malicious file; that's unconfirmed. Hours later, russia's Emergencies Ministry said its own app had been hit by “a massive cyberattack” that sent fake information to users. Nobody has shown that the two attacks are linked.
