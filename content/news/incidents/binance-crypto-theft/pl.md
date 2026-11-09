---
# An incident breakdown → lvlulcuma.com/pl/news/incidents/binance-crypto-theft/
title: "Kradzież w Binance: fałszywa rozmowa o pracę, wewnętrzne narzędzie AI i 6,34 mld dolarów w cztery godziny"
dek: "Od czerwca do października 2026 roku napastnicy przedostawali się od komputerów dwóch inżynierów do usługi podpisywania transakcji Binance, a 29 października wyprowadzili ok. 6,34 mld dolarów — to największa odnotowana kradzież kryptowalut; FBI obwinia Koreę Północną."
type: phishing
status: confirmed       # unfolding | confirmed | report (the victim or investigators published a full report)
date: 2026-10-29        # when it became public
published: 2026-11-09   # when this breakdown was published
who: "Binance, jedna z największych giełd kryptowalut na świecie"
sector: "Giełdy kryptowalut"
entry: "Fałszywa rozmowa o pracę: inżynier uruchomił na służbowym komputerze „zadanie rekrutacyjne” od fałszywego rekrutera, które zainstalowało złośliwe oprogramowanie"
impact: "Ok. 6,34 mld dolarów w kryptowalutach wyprowadzonych z gorących portfeli w około dziesięciu blockchainach (szacunek Binance); ok. 2,85 mld dolarów zamrożonych lub przechwyconych; wypłaty wstrzymane na mniej więcej dwa dni"
timeline:
  - date: 2026-06
    text: "Inżynier Binance z zespołu portfeli (inżynier A) szuka popularnego narzędzia AI do programowania i pobiera podrobiony instalator Homebrew. Binance to wykrywa, wymienia mu urządzenie i zmienia dane logowania, ale jego stanowisko i koledzy z zespołu portfeli są już znani napastnikom."
  - date: 2026-09
    text: "Osoba podająca się za dyrektora projektu kontaktuje się na legalnym portalu z ofertami pracy z programistą Binance (inżynier B), w którego profilu jest mowa o Binance. Fałszywa osoba z HR przeprowadza z nim rozmowę wideo, a fałszywy prezes zmyślonej firmy — drugą, w komunikatorze."
  - date: 2026-09
    text: "Na koniec inżynier B dostaje prośbę o pobranie na służbowy komputer repozytorium z „zadaniem rekrutacyjnym”. Jego uruchomienie podmienia część pyenv, narzędzia programistycznego do Pythona, na złośliwą wersję. Ochrona stacji końcowych Binance tego nie wykrywa."
  - date: 2026-10-20
    text: "Z komputera inżyniera B napastnicy przez wewnętrzne narzędzie AI przejmują komputery inżyniera A i programisty portfeli (inżynier C). Na maszynie inżyniera A jest token, który pozwala wdrażać kontenery."
  - date: 2026-10-29
    text: "Między 17:15 a 19:56 UTC napastnicy logują się na komputer inżyniera C, wdrażają kontener ze skradzionymi danymi logowania inżyniera A i uruchamiają skrypt, który dociera do wewnętrznej usługi podpisywania transakcji Binance."
  - date: 2026-10-29
    text: "Od 20:05 UTC pieniądze zaczynają wypływać: najpierw 233,46 mln XRP z pięciu gorących portfeli, potem SOL, OP i 18 270 BTC. W Ethereum usługa podpisywania podpisuje 50 autoryzacji EIP-7702, które dają kontraktowi napastników częściową kontrolę nad gorącym portfelem, a oni dalej przez niego wyprowadzają środki."
  - date: 2026-10-29
    text: "O 23:56 UTC przechodzi ostatni nieautoryzowany przelew — 2961,9 ETH. Tether, Circle i inni emitenci stablecoinów zaczynają zamrażać skradzione tokeny; TRM Labs łączy kradzież z północnokoreańską grupą TraderTraitor."
  - date: 2026-10-30
    text: "O 00:10 UTC Binance usuwa delegację EIP-7702 z gorącego portfela. Elliptic też wskazuje na TraderTraitor."
  - date: 2026-10-31
    text: "FBI wskazuje jako sprawców TraderTraitor. Binance podaje, że z własnych środków uzupełniła 98% poszkodowanych tokenów."
  - date: 2026-11-01
    text: "Od 06:00 UTC Binance stopniowo przywraca wypłaty."
  - date: 2026-11-03
    text: "Binance publikuje wstępne ustalenia o tym, jak napastnicy dostali się do środka. Korea Północna odrzuciła już oskarżenia FBI jako „absurdalne”."
attack:
  - tactic: "Dostęp początkowy"
    id: T1566.003
    name: "Phishing: Spearphishing via Service"
    text: "Fałszywy „dyrektor projektu” odezwał się do inżyniera na portalu z ofertami pracy; rozmowy odbywały się przez wideo i w komunikatorze."
  - tactic: "Wykonanie"
    id: T1204.002
    name: "User Execution: Malicious File"
    text: "Inżynier uruchomił „zadanie rekrutacyjne” na służbowym komputerze, a ono podmieniło część pyenv na złośliwą wersję."
  - tactic: "Ruch boczny"
    id: T1072
    name: "Software Deployment Tools"
    text: "Przez wewnętrzne narzędzie AI, dostępne z zainfekowanego komputera, przejęli komputery dwóch programistów portfeli."
  - tactic: "Dostęp do poświadczeń"
    id: T1528
    name: "Steal Application Access Token"
    text: "Zabrali z komputera jednego z inżynierów token, który pozwalał wdrażać kontenery."
  - tactic: "Wykonanie"
    id: T1610
    name: "Deploy Container"
    text: "Wdrożyli kontener ze skradzionymi danymi logowania i uruchomili skrypt, który dotarł do usługi podpisywania transakcji."
  - tactic: "Wpływ"
    id: T1657
    name: "Financial Theft"
    text: "W niecałe cztery godziny wyprowadzili z gorących portfeli ok. 6,34 mld dolarów."
detect:
  - "Podmiana narzędzia programistycznego na laptopie: tutaj `pyenv` w `/opt/homebrew` utworzono, usunięto, przemianowano i ponownie podlinkowano, a potem uruchomiła się powłoka."
  - "Nowy kod z dopiero co pobranego repozytorium, uruchamiany zaraz po rozmowie kwalifikacyjnej albo innym kontakcie z zewnątrz."
  - "Wewnętrzne narzędzie, np. asystent AI, nagle wykonujące działania na kilku komputerach pracowników po kolei, zwłaszcza w zespole portfeli."
  - "Kontener wdrożony z laptopa inżyniera zamiast przez zwykły pipeline, z tokenem należącym do kogoś innego."
  - "Żądania podpisu, które nie przychodzą ze zwykłego systemu wypłat, i autoryzacja EIP-7702 z gorącego portfela na nieznany kontrakt. Współprezes Binance powiedział, że ten krok „nie przeszedł przez nasze zwykłe mechanizmy zatwierdzania”."
check:
  - "Nie pozwalaj pracownikom uruchamiać zadań rekrutacyjnych ani innego obcego kodu na służbowych komputerach; daj im do tego osobną maszynę albo jednorazową maszynę wirtualną."
  - "Instaluj narzędzia programistyczne tylko z zatwierdzonych źródeł i sprawdzaj, skąd pobrano instalatory takie jak Homebrew."
  - "Ogranicz, co wewnętrzne narzędzia AI i narzędzia administracyjne mogą robić na komputerach pracowników, i loguj każde ich działanie."
  - "Nie trzymaj na laptopach tokenów, które pozwalają wdrażać kontenery albo dotrzeć do systemów podpisywania; niech będą krótkotrwałe i przypisane do jednej osoby."
  - "Ustaw usługi podpisywania tak, żeby odrzucały wszystko spoza zwykłego procesu wypłat, w tym delegacje EIP-7702, i przećwicz szybkie ich cofanie."
  - "Uprzedź osoby na wrażliwych stanowiskach, że rekruter, który się do nich odzywa, może być napastnikiem. Binance twierdzi, że w tym roku zablokowała 57 podejrzanych prób powiązanych z Koreą Północną, zanim ta się powiodła."
unknown:
  - "Jaki portal z ofertami pracy, komunikator, narzędzie AI do programowania i wewnętrzne narzędzie AI były zaangażowane. Binance ich nie podaje."
  - "Jak dokładnie wewnętrzne narzędzie AI mogło przejąć komputery innych inżynierów."
  - "Dlaczego czerwcowe włamanie, które Binance wykryła, nie skończyło się ostrzejszą kontrolą wokół zespołu portfeli."
  - "Ile uda się odzyskać: ok. 2,85 mld dolarów jest zamrożonych lub przechwyconych, ale zamrożonych tokenów jeszcze nie zwrócono, a resztę napastnicy zamieniają na ETH i przenoszą mostami między blockchainami."
  - "Co wykaże niezależny audyt. Binance mówi, że część szczegółów technicznych zachowuje w tajemnicy."
  - "Dokładna kwota: Binance podaje 6,34 mld dolarów, TRM Labs — 6,36 mld, a Elliptic — 6,43 mld, bo liczą według różnych cen."
jobs: [incident-responder, threat-intelligence-analyst, endpoint-security-engineer, devsecops-engineer, awareness-specialist]
topics: [crypto-tracing, initial-access, secrets-management, privileged-access, actor-tracking]
sources:
  - name: "Binance: Binance Security Incident on October 30, 2026: Update on Preliminary Investigation Findings and Response"
    url: "https://www.binance.com/en/square/post/384314395829022"
  - name: "TRM Labs: North Korea Steals USD 6.36 Billion From Binance in the Largest Hack in History"
    url: "https://www.trmlabs.com/resources/blog/north-korea-steals-usd-6-36-billion-from-binance-in-the-largest-hack-in-history"
  - name: "Elliptic: The largest theft in history: North Korea behind the $6.4 billion Binance hack"
    url: "https://www.elliptic.co/insights/binance-largest-hack-in-history/"
  - name: "The Hacker News: FBI Links North Korea's TraderTraitor to Record $6.43 Billion Binance Crypto Heist"
    url: "https://thehackernews.com/2026/11/fbi-links-north-koreas-tradertraitor-to.html"
  - name: "Fortune: North Korea used LinkedIn, fake job interviews to trick Binance engineer in $6.3 billion hack"
    url: "https://fortune.com/2026/11/03/binance-hack-details-linkedin/"
  - name: "Security Affairs: Binance Hack: How Fake Job Interviews and AI Abuse Led to a $6.34 Billion Attack"
    url: "https://securityaffairs.com/202369/cyber-crime/binance-hack-how-fake-job-interviews-and-ai-abuse-led-to-a-6-34-billion-attack.html"
  - name: "The Block: Inside the largest crypto hack on record: How attackers breached Binance for $6.3 billion"
    url: "https://www.theblock.co/news/business/2026-10-30-binance-hack-largest-crypto-hack-north-korea-432225"
  - name: "RTÉ: North Korea calls FBI's Binance hack allegations 'absurd' as it test-fires missiles"
    url: "https://www.rte.ie/news/world/2026/1103/1597715-korea-binance-world/"
---

Binance to jedna z największych giełd kryptowalut na świecie. Wieczorem 29 października (według UTC) napastnicy wyprowadzili ok. 6,34 mld dolarów z jej gorących portfeli, czyli portfeli online, z których giełda realizuje wypłaty. To największa odnotowana kradzież kryptowalut, dużo większa niż 1,46 mld dolarów skradzione z Bybit w lutym 2025 roku. Ok. 2,85 mld dolarów zamrożono lub przechwycono, w dużej części stablecoiny zamrożone przez Tether i Circle. Binance twierdzi, że odłożyła z własnych środków więcej niż całą kwotę.

Atak trwał miesiącami. W czerwcu inżynier z zespołu portfeli, szukając narzędzia AI do programowania, pobrał podrobiony instalator Homebrew. Binance to wykryła, ale napastnicy wiedzieli już, kto pracuje przy portfelach. We wrześniu fałszywy „dyrektor projektu” odezwał się do innego inżyniera na portalu z ofertami pracy. Po rozmowie wideo z fałszywą osobą z HR i drugiej z fałszywym prezesem zmyślonej firmy inżynier dostał prośbę o pobranie „zadania rekrutacyjnego” na służbowy komputer. Zadanie podmieniło część pyenv, narzędzia programistycznego do Pythona, na złośliwe oprogramowanie, którego zabezpieczenia Binance nie wykryły.

20 października napastnicy przez wewnętrzne narzędzie AI, dostępne z tego komputera, przejęli maszyny dwóch programistów portfeli. Na jednej z nich był token, który pozwalał wdrażać kontenery. 29 października użyli go, żeby wdrożyć kontener, dotrzeć do wewnętrznej usługi podpisującej transakcje portfeli i o 20:05 UTC zacząć wyprowadzać pieniądze. W Ethereum użyli funkcji EIP-7702, żeby dać swojemu kontraktowi częściową kontrolę nad gorącym portfelem, i wyprowadzali przez niego środki aż do 23:56 UTC.

31 października FBI wskazało jako sprawców północnokoreańską grupę TraderTraitor; analitycy blockchaina z TRM Labs i Elliptic wskazali na nią już wcześniej. Korea Północna nazwała te oskarżenia absurdalnymi. 3 listopada Binance poinformowała, że odbudowała system portfeli i narzędzie AI, wymieniła zaatakowane urządzenia, unieważniła dane logowania i tokeny inżynierów, a niezależny audyt trwa.
