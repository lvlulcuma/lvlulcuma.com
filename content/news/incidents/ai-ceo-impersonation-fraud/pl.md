---
# An incident breakdown → lvlulcuma.com/pl/news/incidents/ai-ceo-impersonation-fraud/
title: "Prezesi sklonowani przez AI i fałszywi prawnicy: jak trzech mężczyzn miało wyłudzić 129 mln dolarów"
dek: "5 listopada 2026 roku prokuratorzy w Nowym Jorku ujawnili zarzuty wobec trzech mężczyzn, którzy według nich od lipca 2024 do lutego 2026 roku za pomocą głosów i wideo z AI podszywali się pod szefów firm i prawników i nakłonili pracowników do przelania ponad 129 mln dolarów."
type: takedown
status: unfolding       # unfolding | confirmed | report (the victim or investigators published a full report)
date: 2026-11-05        # when it became public
published: 2026-11-09   # when this breakdown was published
who: "Firmy w USA i za granicą, m.in. sieci szpitali w Missouri i Kalifornii, bank na Rhode Island, brytyjska firma fintech, firma funduszy inwestycyjnych z Massachusetts i producent karmy dla zwierząt z Florydy"
sector: "Ochrona zdrowia, banki, finanse i inne branże"
entry: "Socjotechnika: e-mail rzekomo od prezesa, potem rozmowy z podrobionym przez AI prezesem i fałszywym prawnikiem"
impact: "Ponad 129 mln dolarów przelanych na konta w dziewięciu krajach, według prokuratorów; największa pojedyncza strata to ok. 11,6 mln dolarów"
timeline:
  - date: 2024-07
    text: "Według aktu oskarżenia zaczyna działać cały proceder."
  - date: 2024-11
    text: "Sieć szpitali z Missouri przelewa ok. 4,83 mln dolarów, a bank z Rhode Island ok. 2,68 mln."
  - date: 2024-12
    text: "Sieć szpitali z Kalifornii traci ok. 2,97 mln dolarów."
  - date: 2025-03
    text: "Brytyjska firma fintech traci ok. 11,58 mln dolarów, najwięcej ze wszystkich ofiar w zarzutach."
  - date: 2025-04
    text: "Firma funduszy inwestycyjnych z Massachusetts traci ok. 4,64 mln dolarów."
  - date: 2025-06
    text: "Producent karmy dla zwierząt z Florydy traci ok. 5,24 mln dolarów."
  - date: 2026-02
    text: "Ostatni miesiąc objęty zarzutami."
  - date: 2026-06-17
    text: "W Hiszpanii zostaje zatrzymany 41-letni Jacob Soall."
  - date: 2026-08-05
    text: "W Hiszpanii zostaje zatrzymany 54-letni Sharon Hazan."
  - date: 2026-09-07
    text: "W Wielkiej Brytanii zostaje zatrzymany 42-letni Guy Sheetrit."
  - date: 2026-11-05
    text: "W Południowym Dystrykcie Nowego Jorku zostaje ujawniony akt oskarżenia: siedem zarzutów, m.in. oszustwo z użyciem środków łączności (wire fraud), kradzież tożsamości w okolicznościach obciążających i pranie pieniędzy. Cała trójka czeka na ekstradycję."
attack:
  - tactic: "Rekonesans"
    id: T1591.004
    name: "Gather Victim Org Information: Identify Roles"
    text: "Wybierali pracowników, głównie z księgowości, którzy mogli zatwierdzać duże przelewy."
  - tactic: "Dostęp początkowy"
    id: T1566
    name: "Phishing"
    text: "Wysyłali przez usługę podpisu elektronicznego e-mail, rzekomo od prezesa pracownika, o poufnej transakcji."
  - tactic: "Ukrywanie się"
    id: T1656
    name: "Impersonation"
    text: "Za pomocą AI kopiowali w rozmowach głos, a czasem i twarz prezesa, a potem podszywali się pod prawników z dużych międzynarodowych kancelarii."
  - tactic: "Wpływ"
    id: T1657
    name: "Financial Theft"
    text: "Kazali przelewać pieniądze na kontrolowane przez siebie konta i zamieniali je na kryptowaluty."
detect:
  - "Prośba o pilną, poufną płatność, która przychodzi nietypowym kanałem, np. przez usługę podpisu elektronicznego."
  - "„Prezes” albo „prawnik”, który nalega na dyskrecję i powołuje się na poufność albo przepisy o wykorzystywaniu informacji poufnych, żeby powstrzymać cię przed rozmową z kolegami."
  - "Duże przelewy do nowych odbiorców w krajach, do których firma nigdy nie płaciła."
  - "Telefon od szefa zaraz po niespodziewanym e-mailu, w sprawie transakcji, o której nikt inny w dziale finansów nie słyszał."
check:
  - "Potwierdzaj każdą nietypową płatność, oddzwaniając pod numer, który już masz, a nie pod ten podany w e-mailu czy w rozmowie."
  - "Wymagaj, żeby duże albo pilne przelewy zatwierdzały dwie osoby, i spraw, żeby spowolnienie prośby „z góry” było czymś normalnym."
  - "Powiedz pracownikom finansów, że głos i twarz w rozmowie da się dziś podrobić za pomocą AI."
  - "Ustal z członkami zarządu z wyprzedzeniem, jak będzie potwierdzana prawdziwa poufna transakcja."
  - "Jeśli twoja firma mogła paść ofiarą, FBI zaapelowało do poszkodowanych o kontakt."
unknown:
  - "Które firmy zostały oszukane. Dokumenty oskarżenia ich nie wymieniają."
  - "Ile z tysięcy zaatakowanych firm faktycznie zapłaciło."
  - "Jakich narzędzi AI użyto do kopiowania głosów i twarzy."
  - "Czy odzyskano jakiekolwiek pieniądze. Nie informowano o tym."
  - "Czy i kiedy trójka oskarżonych zostanie wydana USA. Prawnicy jednego z nich mówią, że nie ma on nic wspólnego ze sprawą."
  - "Kto jeszcze, według prokuratorów, dzielił się pieniędzmi."
jobs: [cybercrime-investigator, awareness-specialist, security-manager, incident-responder, threat-intelligence-analyst]
topics: [fraud-investigations, ai-enabled-threats, social-engineering-tests, crypto-tracing, international-cooperation]
sources:
  - name: "CyberScoop: Authorities accuse trio of using AI deepfakes to defraud $129M from businesses"
    url: "https://cyberscoop.com/ai-deepfakes-impersonate-ceo-lawyer-defraud-companies/"
  - name: "Gizmodo: DOJ Says Deepfaked CEOs and Lawyers Helped Steal $129 Million From Hospitals, Banks, and Others"
    url: "https://gizmodo.com/doj-says-deepfaked-ceos-and-lawyers-helped-steal-129-million-from-hospitals-banks-and-others-2000836456"
  - name: "The Record: CEO-spoofing scammers used AI to help steal more than $100 million, feds say"
    url: "https://therecord.media/ceo-spoofing-scammers-charged"
  - name: "CBS News: 3 allegedly used AI to steal some $129 million from companies by impersonating executives and lawyers"
    url: "https://www.cbsnews.com/news/3-ai-steal-129-million-companies-impersonating-executives-lawyers/"
  - name: "SecurityWeek: 3 Charged in Scheme to Use AI to Impersonate CEOs and Attorneys to Steal $129 Million"
    url: "https://www.securityweek.com/3-charged-in-scheme-to-use-ai-to-impersonate-ceos-and-attorneys-to-steal-129-million/"
  - name: "Good Morning America: Trio used AI to impersonate corporate execs, defrauding companies of nearly $130 million: DOJ"
    url: "https://www.goodmorningamerica.com/news/story/trio-ai-impersonate-corporate-execs-defrauding-companies-130-137894421"
  - name: "IBTimes UK: Fake CEOs and Lawyers Tricked Companies Worldwide Into Sending $129M Using AI Voice and Video Impersonations, DOJ Says"
    url: "https://www.ibtimes.co.uk/ai-impersonation-global-fraud-scheme-129-million-1830610"
---

W czwartek, 5 listopada, Prokuratura Federalna dla Południowego Dystryktu Nowego Jorku ujawniła zarzuty wobec trzech mężczyzn: 41-letniego Jacoba Soalla, mieszkającego w Hiszpanii i Wielkiej Brytanii, 54-letniego Sharona Hazana z Izraela i 42-letniego Guya Sheetrita z Izraela i Zjednoczonych Emiratów Arabskich. Według prokuratorów od lipca 2024 do lutego 2026 roku za pomocą AI podszywali się pod szefów firm i prawników i nakłonili pracowników do przelania ponad 129 mln dolarów.

Według zarzutów wybierali pracowników, głównie z księgowości, którzy mogli zatwierdzać duże przelewy. Pracownik dostawał e-mail wysłany przez usługę podpisu elektronicznego, rzekomo od swojego prezesa, w sprawie poufnej transakcji. Potem przychodziła rozmowa telefoniczna albo wideo, w której AI kopiowała głos, a czasem i twarz prezesa, a pracownik słyszał, że ma się skontaktować z prawnikiem z dużej międzynarodowej kancelarii. Ten „prawnik”, też podrobiony, objaśniał transakcję i podawał numer konta. Soall miał mieć odręczny scenariusz zatytułowany „Lawyer Call”, który zniechęcał pracowników do rozmów o transakcji z kolegami.

Prokuratorzy twierdzą, że pieniądze trafiały na konta w dziewięciu krajach, m.in. w USA, Hiszpanii, ZEA i Chinach, i były zamieniane na kryptowaluty. Wśród ofiar są sieci szpitali w Missouri i Kalifornii, bank na Rhode Island, brytyjska firma fintech, która straciła ok. 11,6 mln dolarów, firma funduszy inwestycyjnych z Massachusetts i producent karmy dla zwierząt z Florydy. Celem były tysiące firm na całym świecie.

Soalla i Hazana zatrzymano w Hiszpanii, a Sheetrita w Wielkiej Brytanii, między czerwcem a wrześniem; wszyscy trzej czekają na ekstradycję. To na razie zarzuty: prawnicy Sheetrita mówią, że nie ma on nic wspólnego ze sprawą. FBI zaapelowało do innych firm, które mogły paść ofiarą, o kontakt.
