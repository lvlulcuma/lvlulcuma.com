---
# An incident breakdown → lvlulcuma.com/pl/news/incidents/air-alert-app-hack/
title: "Fałszywe alarmy o promieniowaniu i walkach ulicznych: włamanie do ukraińskiej aplikacji „Alarm powietrzny”"
dek: "Wieczorem 1 listopada aplikacja, z której korzystają miliony Ukraińców, pokazała fałszywe alarmy o promieniowaniu, zagrożeniu chemicznym, walkach ulicznych i ataku rakietowym, a potem przez prawie trzy godziny nie działała; Siły Powietrzne mówią, że została zhakowana."
type: phishing
status: unfolding       # unfolding | confirmed | report (the victim or investigators published a full report)
date: 2026-11-01        # when it became public
published: 2026-11-02   # when this breakdown was published
who: "„Alarm powietrzny” («Повітряна тривога»), oficjalna ukraińska aplikacja ostrzegająca o nalotach, stworzona przez Ajax Systems i Stfalcon przy wsparciu Ministerstwa Transformacji Cyfrowej"
sector: "Systemy ostrzegania ludności"
entry: "Na razie nieznane"
impact: "Fałszywe alarmy o promieniowaniu, zagrożeniu chemicznym, walkach ulicznych i ataku rakietowym na telefonach w całej Ukrainie; aplikacja nie działała przez prawie trzy godziny; część głośników ulicznych w obwodzie lwowskim odtworzyła sygnał zagrożenia radiacyjnego"
timeline:
  - date: 2026-10-17
    text: "Dla kontekstu: w aplikacji pojawia się mapa przybliżonego ruchu rosyjskich dronów i rakiet. Tego samego wieczoru Interfax-Ukraina podaje, że aplikacja i jej strona przestały działać, bez podania przyczyny. Żadne źródło nie łączy tego z listopadowym atakiem."
  - date: 2026-11-01
    text: "Około 22:47 czasu kijowskiego aplikacja zaczyna pokazywać fałszywe alarmy: o zagrożeniu radiacyjnym i chemicznym oraz walkach ulicznych dla użytkowników w Kijowie i Charkowie, czerwony poziom zagrożenia w całej Ukrainie oraz wiadomość po rosyjsku o „alarmie jądrowym” i rakiecie Oriesznik, z linkiem do kanału na Telegramie."
  - date: 2026-11-01
    text: "O 23:02 Siły Powietrzne podają, że aplikacja prawdopodobnie padła ofiarą wrogiej ingerencji, a zagrożenia radiacyjnego nie ma."
  - date: 2026-11-01
    text: "Około 23:10 aplikacja jest już niedostępna. Jej zespół informuje o nieuprawnionej ingerencji osób trzecich, wyłącza powiadomienia push i wstrzymuje działanie aplikacji. Rzecznik Sił Powietrznych Jurij Ihnat mówi RBK-Ukraina, że aplikację zhakowano."
  - date: 2026-11-01
    text: "W obwodzie lwowskim część głośników ulicznych odtwarza sygnał „Niebezpieczeństwo radiacyjne”. Władze obwodu tłumaczą to awarią aplikacji i zapewniają, że zagrożenia nie ma."
  - date: 2026-11-02
    text: "Około 2:00 zespół zaczyna przywracać aplikację: alarmy i poziomy zagrożenia na mapie znów działają, ale znaczniki dronów i rakiet na mapie pozostają wyłączone."
  - date: 2026-11-02
    text: "Grupa nazywająca się Hitcore przyznaje się do ataku w rozmowie z jednym z kanałów na Telegramie. Władze nie potwierdziły tej deklaracji."
  - date: 2026-11-02
    text: "Dla kontekstu: rosyjskie Ministerstwo ds. Sytuacji Nadzwyczajnych podaje, że jego własna aplikacja padła ofiarą „zmasowanego cyberataku”, a użytkownicy dostali fałszywe informacje. Nikt nie wykazał, że oba ataki są powiązane."
detect:
  - "Rodzaje alarmów, które prawie nigdy się nie pojawiają, i to wszystkie naraz: promieniowanie, zagrożenie chemiczne, walki uliczne i czerwony poziom w całym kraju w ciągu kilku minut."
  - "Treść alarmu, która odbiega od zwykłych wzorców: inny język, kpiący ton albo link do kanału na Telegramie."
  - "Alarmy w aplikacji, których nie ma w oficjalnym źródle, z którego powinny pochodzić — tutaj na kanałach samych Sił Powietrznych."
  - "Logowania do konsoli wysyłającej alarmy lub do serwerów z nowego urządzenia, miejsca albo o nietypowej porze, zwłaszcza tuż przed falą dziwnych alarmów."
check:
  - "Jeśli twoja organizacja wysyła alarmy lub powiadomienia push do wielu osób, wymagaj zatwierdzenia przez drugą osobę dla rzadkich typów alarmów (promieniowanie, zagrożenie chemiczne) i wszystkiego, co trafia do całego kraju."
  - "Chroń każde konto administratora i operatora uwierzytelnianiem dwuskładnikowym odpornym na phishing, np. kluczami sprzętowymi, a prace administracyjne wykonuj na osobnych, zabezpieczonych komputerach."
  - "Miej sprawdzony sposób na natychmiastowe zatrzymanie wszystkich powiadomień push i gotowy komunikat z korektą."
  - "Jeśli twoje syreny, głośniki czy drzwi same reagują na alarmy z innego systemu, sprawdź, co zrobią z typem alarmu, którego nigdy wcześniej nie dostały."
  - "W Ukrainie włącz powiadomienia alarmowe w ustawieniach telefonu (przychodzą nawet w trybie cichym), zwracaj uwagę na syreny i nie polegaj na jednej aplikacji."
  - "Nigdy nie klikaj linków w powiadomieniach o alarmie."
unknown:
  - "Jak atakujący dostali się do środka i do czego dotarli: do serwerów aplikacji, do konsoli wysyłającej alarmy czy do konta administratora."
  - "Czy deklaracja Hitcore jest prawdziwa. Władze jej nie skomentowały."
  - "Ile osób dostało fałszywe alarmy i jak długo dokładnie były widoczne."
  - "Jak fałszywy sygnał dotarł do głośników w obwodzie lwowskim i czy podobnie zadziałały urządzenia gdzie indziej."
  - "Kiedy na mapę wrócą znaczniki dronów i rakiet i co zmienił zespół."
  - "Czy atak na aplikację rosyjskiego Ministerstwa ds. Sytuacji Nadzwyczajnych kilka godzin później ma z tym związek."
  - "Czy awaria z 17 października miała z tym coś wspólnego. Żadne źródło ich nie łączy."
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

„Alarm powietrzny” («Повітряна тривога») to aplikacja, z której Ukraińcy dowiadują się, że trzeba iść do schronu. Ajax Systems i Stfalcon stworzyły ją w pierwszych dniach pełnoskalowej inwazji, przy wsparciu Ministerstwa Transformacji Cyfrowej. W marcu firma Ajax podała, że codziennie korzysta z niej ponad 6,7 mln osób.

Około 22:47 czasu kijowskiego w niedzielę 1 listopada aplikacja zaczęła pokazywać alarmy, które nie były prawdziwe. Użytkownicy w Kijowie i Charkowie dostali ostrzeżenia o promieniowaniu, zagrożeniu chemicznym i walkach ulicznych, a cała mapa kraju zrobiła się czerwona — to poziom zmasowanego ataku dronów lub rakiet. Jedna wiadomość, po rosyjsku, zapowiadała „alarm jądrowy” i rzekomo lecącą rosyjską rakietę balistyczną Oriesznik, z linkiem do kanału na Telegramie. W obwodzie lwowskim część głośników ulicznych odtworzyła sygnał „Niebezpieczeństwo radiacyjne”; władze obwodu tłumaczyły to awarią aplikacji.

O 23:02 Siły Powietrzne podały, że zagrożenia radiacyjnego nie ma, a aplikacja prawdopodobnie padła ofiarą wrogiej ingerencji. Później rzecznik Sił Powietrznych Jurij Ihnat powiedział RBK-Ukraina, że „według naszych danych” aplikację zhakowano. Zespół aplikacji poinformował o nieuprawnionej ingerencji osób trzecich, wyłączył powiadomienia push i wstrzymał działanie aplikacji. Około 2:00 zaczęła ona wracać: z alarmami i poziomami zagrożenia, ale bez znaczników dronów i rakiet na mapie. Zespół zapewnia, że aplikacja nie przechowuje danych osobowych. Syreny i państwowy system ostrzegania działały normalnie, zapewniły Ministerstwo Transformacji Cyfrowej i Państwowa Służba ds. Sytuacji Nadzwyczajnych.

Nikt oficjalnie nie podał, jak atakujący dostali się do środka. Grupa nazywająca się Hitcore twierdzi, że podstępem nakłoniła administratora systemu do otwarcia złośliwego pliku; nie zostało to potwierdzone. Kilka godzin później rosyjskie Ministerstwo ds. Sytuacji Nadzwyczajnych poinformowało, że jego własna aplikacja padła ofiarą „zmasowanego cyberataku” i rozesłała fałszywe informacje. Nikt nie wykazał, że oba ataki są powiązane.
