---
# An incident breakdown → lvlulcuma.com/pl/news/incidents/ukrinform-hack/
title: "Włamanie do Ukrinformu: podmieniona strona główna i przejęte konto na X państwowej agencji informacyjnej Ukrainy"
dek: "11 listopada 2026 roku atakujący zastąpili stronę główną Ukrinformu, państwowej agencji informacyjnej Ukrainy, antyukraińskim przekazem i przejęli jej konto na X; następnego dnia po południu strona znów działała, a sposobu włamania nie ujawniono."
type: accounts
status: unfolding       # unfolding | confirmed | report (the victim or investigators published a full report)
date: 2026-11-11        # when it became public
published: 2026-11-16   # when this breakdown was published
who: "Ukrinform, państwowa agencja informacyjna Ukrainy"
sector: "Media"
entry: "Jeszcze nieznane"
impact: "Strona główna zastąpiona antyukraińskim obrazem i linkiem do kanału na Telegramie; konto na X przemianowane, z prorosyjskim hasłem w opisie; strona w trybie prac technicznych do następnego dnia. Ukrinform nie informował o kradzieży danych."
timeline:
  - date: 2023-01-17
    text: "Dla kontekstu: systemy Ukrinformu atakuje wiper, czyli program kasujący dane. CERT-UA łączy atak z Sandworm, grupą powiązaną z rosyjskim wywiadem wojskowym. Agencja nadal działa."
  - date: 2026-11-01
    text: "Dla kontekstu: atakujący włamują się do interfejsu operatora ukraińskiej aplikacji „Alarm powietrzny” i wysyłają użytkownikom fałszywe alarmy."
  - date: 2026-11-04
    text: "Dla kontekstu: hakerzy przez system zarządzania treścią The Kyiv Independent i usługę newsletterów wysyłają czytelnikom fałszywe e-maile o ataku jądrowym."
  - date: 2026-11-06
    text: "Dla kontekstu: ktoś przejmuje konto newslettera „Ukraińskiej Prawdy”, a subskrybenci dostają fałszywy e-mail o „zamachu terrorystycznym w Kijowie”."
  - date: 2026-11-11
    text: "W nocy pracownicy Ukrinformu zauważają podejrzaną aktywność w systemach agencji. Do rana współpracują już z wyspecjalizowanymi służbami państwowymi."
  - date: 2026-11-11
    text: "Po południu atakującym udaje się przełamać zabezpieczenia strony. Na stronie głównej pojawiają się słowo „ZELENET”, przekreślona flaga Ukrainy i link do kanału na Telegramie, a konto na X zostaje przemianowane i dostaje prorosyjskie hasło. Obraz znika w ciągu kilku minut, a strona przechodzi w tryb prac technicznych."
  - date: 2026-11-11
    text: "Ukrinform potwierdza cyberatak na swoje zasoby informacyjne i podaje, że współpracuje z Państwową Służbą Łączności Specjalnej i SBU. Dyrektor generalny Serhij Czerewaty mówi IMI, że stoją za tym rosjanie."
  - date: 2026-11-12
    text: "Po południu Ukrinform informuje, że jego strona wznawia działanie."
attack:
  - tactic: "Wpływ"
    id: T1491.002
    name: "Defacement: External Defacement"
    text: "Zastąpili stronę główną agencji antyukraińskim obrazem i linkiem do kanału na Telegramie."
detect:
  - "Podejrzana aktywność w nocy: pracownicy Ukrinformu zauważyli ją kilka godzin przed podmianą strony głównej i do rana zaangażowali służby państwowe."
  - "Zmiany nazwy, opisu lub zdjęcia profilowego konta w mediach społecznościowych, których nikt z zespołu nie wprowadzał. Na X atakujący zmienili nazwę konta i jego opis."
  - "Logowania do panelu administracyjnego strony, hostingu lub kont społecznościowych z nowego urządzenia, miejsca lub o nietypowej porze oraz nowi administratorzy, których nikt nie dodawał."
  - "Zgłoszenia od czytelników i innych redakcji o dziwnej stronie lub poście. Daj im prosty sposób, by mogli to zgłosić o każdej porze."
check:
  - "Chroń panel administracyjny strony, hosting i konta w mediach społecznościowych uwierzytelnianiem wieloskładnikowym odpornym na phishing i ogranicz listę osób z uprawnieniami administratora."
  - "Miej przygotowaną stronę prac technicznych i wiedz, kto może na nią przełączyć. Ukrinform usunął podmieniony obraz w ciągu kilku minut."
  - "Ustal wcześniej, jak szybko odzyskać przejęte konto w mediach społecznościowych i gdzie w tym czasie odeślesz czytelników po prawdziwe wiadomości."
  - "W Ukrainie zgłaszaj incydenty do CERT-UA i współpracuj z Państwową Służbą Łączności Specjalnej i SBU, tak jak zrobił to Ukrinform."
  - "Czytelnicy: jeśli strona lub konto zaufanej redakcji nagle publikuje coś wrogiego lub dziwnego, sprawdź jej inne kanały, zanim to udostępnisz, i nie klikaj linków z przejętej strony."
unknown:
  - "Jak atakujący się dostali i czy stronę oraz konto na X przejęto w ten sam sposób."
  - "Dokładna godzina włamania, kiedy strona w pełni wróciła i czy konto na X odzyskano."
  - "Czy naruszono wewnętrzne systemy, dane lub opublikowane wiadomości."
  - "Kto to zrobił. Czerewaty obwinia rosję, ale nie opublikowano ustaleń technicznych i żadna grupa się nie przyznała."
  - "Czy ma to związek z incydentami z „Alarmem powietrznym”, The Kyiv Independent i „Ukraińską Prawdą” z początku miesiąca."
  - "Kiedy był wcześniejszy, silniejszy atak, o którym wspomniał Czerewaty."
jobs: [incident-responder, soc-analyst, iam-engineer, threat-intelligence-analyst, security-administrator]
topics: [crisis-communications, hacktivism-influence, identity-attacks, mfa-conditional-access, incident-response-process]
sources:
  - name: "Укрінформ: Сайт Укрінформу поновлює роботу після кібератаки"
    url: "https://www.ukrinform.ua/rubric-society/4183861-sajt-ukrinformu-ponovlue-robotu-pisla-kiberataki.html"
  - name: "Детектор медіа: Хакери з ночі атакують ресурси Укрінформу"
    url: "https://detector.media/infospace/article/253925/2026-11-11-khakery-z-nochi-atakuyut-resursy-ukrinformu/"
  - name: "IMI: Ukrinform website targeted in cyberattack"
    url: "https://imi.org.ua/en/russias-crimes/rosiyani-atakuvali-sajt-ukrinformu"
  - name: "ІМІ: Укрінформ поновлює роботу сайту після кібератаки"
    url: "https://imi.org.ua/news/ukrinform-vidnovyv-robotu-sajtu-pislya-kiberataky"
  - name: "The Kyiv Independent: Hackers target Ukraine's state news agency Ukrinform, replace website with anti-Ukrainian messages"
    url: "https://kyivindependent.com/hackers-target-ukraines-state-news-agency-ukrinform-replace-website-with-anti-ukrainian-messages/"
  - name: "Ukrainska Pravda (Yahoo News): Crossed-out flag and pro-Russian slogan: hackers attack state news agency Ukrinform"
    url: "https://www.yahoo.com/news/world/articles/crossed-flag-pro-russian-slogan-144400151.html"
  - name: "Hromadske: Hackers deface Ukraine's state news agency website and hijack its X profile"
    url: "https://hromadske.ua/en/ukraine/274208-hackers-deface-ukraines-state-news-agency-website-and-hijack-its-x-profile"
  - name: "24 Канал: Закреслений прапор та російські гасла: хакери зламали ресурси Укрінформу"
    url: "https://24tv.ua/kiberataka-ukrinform-hakeri-zlamali-sayt-sotsmerezhi_n3178523"
  - name: "dev.ua: A cyberattack was carried out on Ukrinform's information resources: specialists are working to restore work"
    url: "https://dev.ua/en/news/na-informatsiini-resursy-ukrinformu-zdiisneno-kiberataku-1794411083"
  - name: "AIN: Хакери атакують розсилки українських медіа: фейкові листи надіслали від імені «Української правди» та The Kyiv Independent"
    url: "https://ain.ua/2026/11/06/z-rozsilok-ukrayinskoyi-pravdi-ta-the-kyiv-independent-nadislali-feikovi-povidomlennia-pislia-zlamiv/"
  - name: "Суспільне: Зламали інтерфейс оператора, а не застосунок: розробники «Повітряної тривоги» пояснили, як сталася кібератака"
    url: "https://suspilne.media/1444525-zlamali-interfejs-operatora-a-ne-zastosunok-rozrobniki-povitranoi-trivogi-poasnili-ak-stalasa-kiberataka/"
  - name: "Еспресо: Одне з українських інформагенств атакували хакери, Держспецзв'язку підозрює їхню причетність до російського генштабу"
    url: "https://espreso.tv/odne-z-ukrainskikh-informagenstv-atakuvali-khakeri-derzhspetszvyazku-pidozryue-ikhnyu-prichetnist-do-rosiyskogo-genshtabu"
---

Ukrinform to państwowa agencja informacyjna Ukrainy. W nocy ze wtorku na środę 11 listopada jej pracownicy zauważyli podejrzaną aktywność w systemach agencji, a do rana współpracowali już z wyspecjalizowanymi służbami państwowymi. Po południu atakującym udało się przełamać zabezpieczenia strony. Stronę główną zastąpiono słowem „ZELENET”, przekreśloną flagą Ukrainy i linkiem do kanału na Telegramie. Konto Ukrinformu na X przemianowano w ten sam sposób i dodano do opisu prorosyjskie hasło.

Agencja usunęła obraz w ciągu kilku minut i przełączyła stronę w tryb prac technicznych z komunikatem, że wkrótce wróci. 12 listopada po południu Ukrinform poinformował, że strona wznawia działanie. Agencja podaje, że współpracuje z Państwową Służbą Łączności Specjalnej i Ochrony Informacji oraz z departamentem kontrwywiadu SBU odpowiedzialnym za bezpieczeństwo informacyjne, a przeciwnik stale doskonali swoje metody i narzędzia.

Dyrektor generalny Serhij Czerewaty powiedział IMI, że za atakiem stoją rosjanie, i dodał, że hakerzy nieustannie próbują atakować agencję. Według niego to mniej więcej czwarty podobny atak w czasie, gdy kieruje agencją, a poprzedni był silniejszy i wyłączył stronę na kilka godzin. Powiedział też, że za wcześnie, by mówić, jaki to był rodzaj ataku. Nikt się do niego nie przyznał, a oficjalnych ustaleń technicznych nie opublikowano.

To kolejny z serii ataków na kanały, którym w Ukrainie się ufa: fałszywe alarmy w aplikacji „Alarm powietrzny” 1 listopada, fałszywe e-maile wysłane przez systemy The Kyiv Independent 4 listopada i przez newsletter „Ukraińskiej Prawdy” 6 listopada. Nikt nie wykazał związku między nimi. Ukrinform był celem już wcześniej: w styczniu 2023 roku CERT-UA powiązał atak programem kasującym dane na agencję z Sandworm, grupą związaną z rosyjskim wywiadem wojskowym.
