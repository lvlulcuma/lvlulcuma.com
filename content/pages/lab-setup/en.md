---
# Lab setup → lvlulcuma.com/en/lab/setup/
updated: 2026-11-08
title: "Setup"
summary: "Hardware, targets and network layout."   # one line on the Lab overview page
intro: "A small, disposable lab. Everything can be rebuilt from one compose file in a few minutes."
related_article: "2026-09"   # a monthly article linked at the bottom (folder name in content/articles/)
key:   # the big fact at the top of the box beside the page
  label: "Targets"
  value: "4"
---

| Component | Detail |
|---|---|
| Host | A laptop with Docker Desktop; x86-only images run under emulation |
| Targets | OWASP crAPI, Pixi, OWASP Juice Shop, DVGA |
| Proxy | Burp Suite Community Edition |
| Network | Separate Docker network, every port bound to 127.0.0.1 |
| Second machine | A Linux computer for longer jobs |
