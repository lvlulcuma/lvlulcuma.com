---
# Roadmap → lvlulcuma.com/pl/roadmap/ (Polish is switched off for now)
# (Each field is in content/roadmap/fields/, each job in content/roadmap/jobs/.)
updated: 2026-10-28
title: "Ścieżki kariery w cyberbezpieczeństwie"   # page heading and browser tab (the menu label is in content/ui/pl.yml)
intro: "Cyberbezpieczeństwo to nie jeden zawód, tylko wiele różnych. Poniżej znajdziesz jego główne dziedziny, pogrupowane według rodzaju pracy. Otwórz dziedzinę, aby zobaczyć jej zawody: od tych, od których zwykle się zaczyna, po stanowiska dla doświadczonych specjalistów. Przy części zawodów widać już, czego trzeba się nauczyć, od poziomu początkującego do eksperckiego, a kolejne dochodzą stopniowo."
groups:   # the heading and one line above each group of fields
  defend:
    title: "Obrona i reagowanie"
    text: "Monitorowanie systemów, wykrywanie ataków i usuwanie ich skutków."
  attack:
    title: "Atak i badania"
    text: "Myśleć jak atakujący: znajdować słabe punkty, zanim zrobią to przestępcy."
  build:
    title: "Budowanie i ochrona"
    text: "Projektowanie, budowa i utrzymanie systemów bezpiecznych od samego początku."
  govern:
    title: "Zarządzanie i przywództwo"
    text: "Ustalanie zasad, zarządzanie ryzykiem i pomaganie ludziom oraz organizacjom w zachowaniu bezpieczeństwa."
levels:   # on each field's page: the heading and one line above each group of jobs (a job picks one in its `level:`)
  entry:
    title: "Początek kariery"
    text: "Tu często zaczyna się w bezpieczeństwie: zaraz po nauce albo po pracy w helpdesku, administracji sieciami lub programowaniu."
  mid:
    title: "Kilka lat doświadczenia"
    text: "Zwykle wymagają doświadczenia w IT lub bezpieczeństwie albo praktycznych umiejętności, które można pokazać."
  senior:
    title: "Doświadczeni specjaliści"
    text: "Wymagają wielu lat doświadczenia. Często oznaczają kierowanie ludźmi lub decyzje dla całej organizacji."
  any:
    title: "Każdy etap"
    text: "Otwarte dla każdego, kto ma potrzebne umiejętności. Często to praca obok głównej."
levelsNote: "Poziomy są orientacyjne. Ta sama nazwa stanowiska w różnych firmach może oznaczać coś innego, więc w każdym ogłoszeniu sprawdzaj, czego naprawdę się wymaga."   # small print at the bottom of each field's page
learnLevels:   # on a job's "what to learn" page: the heading and one line above each level of topics
  beginner:
    title: "Poziom początkujący"
    text: "Podstawy IT, na których opiera się cała reszta. Zacznij tutaj, jeśli jesteś nowy w temacie."
  knowledgeable:
    title: "Poziom podstawowy"
    text: "Znasz główne pojęcia i narzędzia zawodu i z niewielką pomocą wykonujesz codzienne zadania."
  intermediate:
    title: "Poziom średniozaawansowany"
    text: "Większość pracy wykonujesz samodzielnie i wiesz, gdzie szukać, gdy utkniesz."
  advanced:
    title: "Poziom zaawansowany"
    text: "Bierzesz trudne przypadki, usprawniasz pracę zespołu i pomagasz innym się uczyć."
  expert:
    title: "Poziom ekspercki"
    text: "Kierujesz, decydujesz, jak praca ma wyglądać, i wyznaczasz kierunek innym."
learnIntro: "Wszystko, czego warto się nauczyć do tego zawodu, od pierwszych kroków po poziom ekspercki, pogrupowane według tego, jak daleko jesteś. Tematy są wspólne dla różnych zawodów, więc niektóre spotkasz też w innych miejscach Ścieżek kariery."
learnHire:   # the line after the level employers usually expect (`hire:` in the job's learn.yml)
  title: "Wystarczy, by aplikować na to stanowisko"
  text: "Pracodawcy zwykle oczekują wszystkiego, co jest powyżej tej linii. Reszta to rozwój na stanowisku."
moves:   # career moves, worked out from the learning paths (src/lib/roadmap.ts, jobMoves)
  heading: "Dokąd możesz pójść dalej"
  intro: "Zawody, na które można stąd przejść, od najbliższych. Liczba mówi, ile tematów trzeba jeszcze dodać do tych z tego zawodu, aby aplikować."
  add: "jeszcze {topics}"
  shared: "{n} z {total} już wspólne"
  closest: "Najbliższy krok"
  title: "Przejście: {from} → {to}"
  dek: "Aby aplikować na stanowisko „{to}”, do tego, co znasz jako „{from}”, dodaj jeszcze {topics}. Są pogrupowane według poziomów, w kolejności ze ścieżki „{to}”."
  have: "Co już masz"
  back: "Wróć do"
  full: "Pełna ścieżka"
  start: "Od czego się zaczyna i dokąd to prowadzi"
  startText: "Najczęstsze pierwsze zawody i najbliższe, na które można z każdego z nich przejść."
attacks:
  heading: "W prawdziwych atakach"
  intro: "Analizy z działu Aktualności, w których potrzebne były umiejętności z tego zawodu, od najnowszych."
  topics: "Tematy z tej ścieżki"
learnSources: "Ta lista powstała na podstawie"
learnAnd: "i"
---

Na podstawie [NICE Framework](https://www.nist.gov/itl/applied-cybersecurity/nice/nice-framework-resource-center) (NIST) i [Europejskich Ram Umiejętności w Cyberbezpieczeństwie (ECSF)](https://www.enisa.europa.eu/topics/cybersecurity-education/european-cybersecurity-skills-framework) agencji ENISA, przegrupowanych dla osób wybierających, od czego zacząć.
