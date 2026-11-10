---
# Home page → lvlulcuma.com/pl/
title: "Notatki terenowe o cyberbezpieczeństwie"   # browser tab, Google and RSS title
kicker: "Notatki terenowe · cyberbezpieczeństwo"   # small blue line above the headline
headline: "Jak zawodzą zabezpieczenia i jak sprawić, by wytrzymały."
intro: "Jeden praktyczny tekst o cyberbezpieczeństwie w miesiącu: badania, praca w laboratorium i listy kontrolne dla osób, które budują, chronią i testują systemy."   # sentence under the headline (also the Google description)
ls:   # the terminal menu under the headline: one short line per section, shown in the order of the header menu (counts are added automatically)
  news: "co tydzień wiadomości i analizy dużych ataków"
  articles: "jeden tekst miesięcznie"
  guides: "konfiguracja krok po kroku"
  cwe: "słabości oczami atakującego i obrońcy"
  roadmap: "dopiero zaczynasz? zacznij tutaj"
  research: "dłuższe badania na prawdziwych danych"
  lab: "pomysły na domowe laboratorium, krok po kroku"
  about: "czym jest ta strona i kto ją pisze"
  contact: "e-mail z gotowymi szablonami"
tree_summary: "{dirs} katalogów, {files} pliki"   # last line of the menu on phones (it turns into `tree` output there)
year:   # "{year} in articles", the last block: one card per month of this year and the days until the next article
  heading: "Artykuły w {year}"
  intro: "Jeden artykuł w miesiącu, zawsze w ostatni poniedziałek. Każda karta to miesiąc z jego artykułem."
  next: "Następny artykuł"
  in: "za {n}"        # {n} = "23 dni"
  today: "już dziś"
  day_one: "dzień"
  day_few: "dni"
  day_many: "dni"
  day_other: "dnia"
topic_week:   # "Topic of the week" beside the headline: a Roadmap topic that several jobs need, picked automatically (a different one each week, when the site is rebuilt)
  heading: "Temat tygodnia"
  more: "i jeszcze {n}"   # after the first jobs, when more than four jobs need the topic
  all: "Przejdź do Ścieżek kariery"   # link at the bottom, to the Roadmap
spotlight:   # "Job spotlight": one job from the Roadmap, a different one each week (picked automatically)
  heading: "Zawód tygodnia"
  all: "Wszystkie dziedziny"        # link at the top right, to the Roadmap
  go: "Zobacz w Ścieżkach kariery"
  path: "{count} — od pierwszych kroków po poziom ekspercki. Aplikuj po: {level} (tematy 1–{n})."   # under the bar of topics, for jobs with a "what to learn" list: {count} = all topics, {level} = the level employers usually expect, {n} = topics up to it
# "New this week": the box beside the headline (under it on phones). It fills itself with everything published
# or changed on the site in the last 7 days: weekly digests, incident breakdowns, articles, guides, CWE write-ups,
# Roadmap jobs and research, and their `revisions:`. A row drops off 7 days after its date (the site is rebuilt
# every night). Under the list the box adds when the next digest and the next article are due, and the RSS link.
changes:
  heading: "Nowości tygodnia"
  labels:   # the small word above each title, saying what it is (CWE write-ups show their number instead, like CWE-639)
    week: "Przegląd tygodnia"
    incident: "Analiza"
    article: "Artykuł"
    cwe: "CWE"
    guide: "Poradnik"
    roadmap: "Ścieżki kariery"
    research: "Badania"
    lab: "Pomysł na laboratorium"
    site: "Strona"   # the announcements below
  roadmap: "Czego się uczyć: {job}"   # title of a Roadmap row; {job} is the job's name
  roadmap_n: "Czego się uczyć: {jobs}"   # one line for several Roadmap jobs at once; {jobs} is "9 zawodów"
  updated: "Zaktualizowano"           # before the note of something that changed after it was published
  more: "Jeszcze {n}"   # opens the rest when there are more sections than fit (five, three on phones)
  empty: "W ostatnich 7 dniach nic nowego."
  next_digest: "Następny przegląd"
# Announcements: news about the site that the box can't see by itself (a new section, a new feature).
# Each one is in the box for 7 days from its date, like everything else, then drops off. Old ones can stay here.
#   date:   the day it went live (YYYY-MM-DD)
#   title:  a few words
#   text:   optional: one short sentence, shown under the title
#   link:   optional: a page on this site without the language, like "/guides/", or a full https:// address
announcements:
  - date: 2026-11-01
    title: "Nowy dział: Słabości (CWE)"
    text: "Słabości oprogramowania od strony ataku i obrony."
    link: "/cwe/"
  - date: 2026-10-26
    title: "Nowy dział: Poradniki"
    text: "Instrukcje krok po kroku, jak instalować i zabezpieczać narzędzia. Na start sześć."
    link: "/guides/"
---
