---
# Research project → lvlulcuma.com/en/research/api-scanner-benchmark/
order: 2   # position in the research list
status: planned   # in-progress | planned
published: 2026-10-26   # date this project was first listed (revision A)
page: true   # false = listed only, shown as "Page coming soon"
title: "Open-source API scanners against the OWASP API Top 10"
summary: "Which categories automated scanners actually catch, measured on the same lab targets."   # one line in the research list
question: "Which OWASP API Top 10 categories do open-source scanners detect, and which ones still need a human?"
why: "Teams often treat a clean scan as a clean API. Knowing the blind spots tells them where manual review has to go."
method:   # the numbered boxes
  - step: "Targets"
    text: "Lab apps with a known list of planted flaws."
  - step: "Scan"
    text: "Each scanner, default settings, the same API specification."
  - step: "Score"
    text: "Detections per Top 10 category, false positives counted separately."
  - step: "Publish"
    text: "Results, configs and scoring sheet, so anyone can rerun it."
status_note: "Planned. Starts after the ransomware study is finished."
related_article: "2026-08"   # folder name in content/articles/
# revisions:   # add a line each time you change the project after publishing
#   - date: 2026-11-15
#     note: "Added first results"
---
