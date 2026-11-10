---
# Home page → lvlulcuma.com/en/
title: "Field notes on cybersecurity"   # browser tab, Google and RSS title
kicker: "Field notes · cybersecurity"   # small blue line above the headline
headline: "How security fails, and how to make it hold."
intro: "One practical write-up a month on cybersecurity: research, lab work and checklists for people who build, defend and test systems."   # sentence under the headline (also the Google description)
ls:   # the terminal menu under the headline: one short line per section, shown in the order of the header menu (counts are added automatically)
  news: "security news every week, big attacks explained"
  articles: "one write-up a month"
  guides: "set something up, step by step"
  cwe: "weaknesses explained for attackers and defenders"
  roadmap: "new to security? start here"
  research: "longer studies with real data"
  lab: "home lab ideas, built step by step"
  about: "what this site is and who writes it"
  contact: "email, with ready-made templates"
tree_summary: "{dirs} directories, {files} files"   # last line of the menu on phones (it turns into `tree` output there)
year:   # "{year} in articles", the last block: one card per month of this year and the days until the next article
  heading: "{year} in articles"
  intro: "One article a month, out on the last Monday. Each card is a month with its article."
  next: "Next article"
  in: "in {n}"        # {n} = "23 days"
  today: "out today"
  day_one: "day"
  day_other: "days"
topic_week:   # "Topic of the week" beside the headline: a Roadmap topic that several jobs need, picked automatically (a different one each week, when the site is rebuilt)
  heading: "Topic of the week"
  more: "and {n} more"   # after the first jobs, when more than four jobs need the topic
  all: "Explore the Roadmap"   # link at the bottom, to the Roadmap
spotlight:   # "Job spotlight": one job from the Roadmap, a different one each week (picked automatically)
  heading: "Job spotlight"
  all: "All fields"        # link at the top right, to the Roadmap
  go: "See it on the Roadmap"
  path: "{count}, from first steps to expert. Apply after: {level} (topics 1–{n})."   # under the bar of topics, for jobs with a "what to learn" list: {count} = all topics, {level} = the level employers usually expect, {n} = topics up to it
# "New this week": the box beside the headline (under it on phones). It fills itself with everything published
# or changed on the site in the last 7 days: weekly digests, incident breakdowns, articles, guides, CWE write-ups,
# Roadmap jobs, research and lab ideas, and their `revisions:`. A row drops off 7 days after its date (the site is rebuilt
# every night). Under the list the box adds when the next digest and the next article are due, and the RSS link.
changes:
  heading: "New this week"
  labels:   # the small word above each title, saying what it is (CWE write-ups show their number instead, like CWE-639)
    week: "Weekly digest"
    incident: "Breakdown"
    article: "Article"
    cwe: "CWE"
    guide: "Guide"
    roadmap: "Roadmap"
    research: "Research"
    lab: "Lab idea"
    site: "Site"   # the announcements below
  roadmap: "What to learn: {job}"   # title of a Roadmap row; {job} is the job's name
  roadmap_n: "What to learn for {jobs}"   # one line for several Roadmap jobs at once; {jobs} is "9 jobs"
  updated: "Updated"                # before the note of something that changed after it was published
  more: "{n} more"   # opens the rest when there are more sections than fit (five, three on phones)
  empty: "Nothing new in the last 7 days."
  next_digest: "Next digest"
# Announcements: news about the site that the box can't see by itself (a new section, a new feature).
# Each one is in the box for 7 days from its date, like everything else, then drops off. Old ones can stay here.
#   date:   the day it went live (YYYY-MM-DD)
#   title:  a few words
#   text:   optional: one short sentence, shown under the title
#   link:   optional: a page on this site without the language, like "/guides/", or a full https:// address
announcements:
  - date: 2026-11-01
    title: "New section: Weaknesses (CWE)"
    text: "Software weaknesses explained for attackers and defenders."
    link: "/cwe/"
  - date: 2026-10-26
    title: "New section: Guides"
    text: "Step-by-step instructions for installing and securing tools, starting with six."
    link: "/guides/"
---
