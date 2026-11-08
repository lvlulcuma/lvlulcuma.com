---
# Home page → lvlulcuma.com/ua/
title: "Практичні нотатки про кібербезпеку"   # browser tab, Google and RSS title
kicker: "Практичні нотатки · кібербезпека"   # small blue line above the headline
headline: "Чому захист дає збій і як зробити його надійним."
intro: "Один практичний матеріал про кібербезпеку на місяць: дослідження, робота в лабораторії та чек-листи для тих, хто створює, захищає й тестує системи."   # sentence under the headline (also the Google description)
ls:   # the terminal menu under the headline: one short line per section, shown in the order of the header menu (counts are added automatically)
  news: "новини безпеки щотижня і розбори великих атак"
  articles: "один матеріал на місяць"
  guides: "налаштування крок за кроком"
  cwe: "слабкі місця очима атакувальника і захисника"
  roadmap: "новачок у безпеці? почніть тут"
  research: "ґрунтовні дослідження на реальних даних"
  lab: "ідеї для домашньої лабораторії, крок за кроком"
  about: "що це за сайт і хто його пише"
  contact: "пошта з готовими шаблонами листів"
tree_summary: "{dirs} каталогів, {files} файли"   # last line of the menu on phones (it turns into `tree` output there)
year:   # "{year} in articles", the last block: one card per month of this year and the days until the next article
  heading: "Статті {year} року"
  intro: "Одна стаття на місяць, завжди в останній понеділок. Кожна картка — це місяць зі своєю статтею."
  next: "Наступна стаття"
  in: "через {n}"     # {n} = "23 дні"
  today: "вже сьогодні"
  day_one: "день"
  day_few: "дні"
  day_many: "днів"
  day_other: "дня"
topic_week:   # "Topic of the week" beside the headline: a Roadmap topic that several jobs need, picked automatically (a different one each week, when the site is rebuilt)
  heading: "Тема тижня"
  more: "і ще {n}"   # after the first jobs, when more than four jobs need the topic
  all: "Перейти до розділу «Кар'єра»"   # link at the bottom, to the Roadmap
spotlight:   # "Job spotlight": one job from the Roadmap, a different one each week (picked automatically)
  heading: "Професія тижня"
  all: "Усі напрями"        # link at the top right, to the Roadmap
  go: "Детальніше в розділі «Кар'єра»"
  path: "{count} — від перших кроків до експертного рівня. Подаватися після: {level} (теми 1–{n})."   # under the bar of topics, for jobs with a "what to learn" list: {count} = all topics, {level} = the level employers usually expect, {n} = topics up to it
# "New this week": the box beside the headline (under it on phones). It fills itself with everything published
# or changed on the site in the last 7 days: weekly digests, incident breakdowns, articles, guides, CWE write-ups,
# Roadmap jobs and research, and their `revisions:`. A row drops off 7 days after its date (the site is rebuilt
# every night). Under the list the box adds when the next digest and the next article are due, and the RSS link.
changes:
  heading: "Нове за тиждень"
  labels:   # the small word above each title, saying what it is (CWE write-ups show their number instead, like CWE-639)
    week: "Огляд тижня"
    incident: "Розбір"
    article: "Стаття"
    cwe: "CWE"
    guide: "Інструкція"
    roadmap: "Кар'єра"
    research: "Дослідження"
    lab: "Ідея для лабораторії"
    site: "Сайт"   # the announcements below
  roadmap: "Що вивчати: {job}"   # title of a Roadmap row; {job} is the job's name
  updated: "Оновлено"           # before the note of something that changed after it was published
  more: "Ще {n}"                # opens the rest when there are more than five rows (three on phones)
  empty: "За останні 7 днів нічого нового."
  next_digest: "Наступний огляд"
# Announcements: news about the site that the box can't see by itself (a new section, a new feature).
# Each one is in the box for 7 days from its date, like everything else, then drops off. Old ones can stay here.
#   date:   the day it went live (YYYY-MM-DD)
#   title:  a few words
#   text:   optional: one short sentence, shown under the title
#   link:   optional: a page on this site without the language, like "/guides/", or a full https:// address
announcements:
  - date: 2026-11-01
    title: "Новий розділ: «Слабкі місця (CWE)»"
    text: "Слабкі місця програм очима атакувальника і захисника."
    link: "/cwe/"
  - date: 2026-10-26
    title: "Новий розділ: «Інструкції»"
    text: "Покрокові інструкції зі встановлення та захисту інструментів. Для початку — шість."
    link: "/guides/"
---
