---
# CWE list → lvlulcuma.com/en/cwe/
# (Each write-up is in content/cwe/<number>/. The categories and CWE names are in content/cwe/owasp-2025.yml.)
updated: 2026-11-01
title: "Weaknesses (CWE)"
intro: "Every weakness behind the OWASP Top 10:2025, in one place. Open one to see how it works, how testers find it and how developers fix it."
# Short paragraphs under the intro. <strong> is allowed.
about:
  - "A <strong>CWE</strong> (Common Weakness Enumeration) is one type of mistake that makes software attackable, numbered and kept by MITRE. CWE-639, for example, is “the app trusts an ID you send it”. One CWE can be behind thousands of real bugs."
  - "OWASP groups the ones that matter most for web apps into ten categories, the OWASP Top 10, and maps 249 CWEs to them. That's the list below. The ones with a link are explained here; the ↗ arrow opens MITRE's own page for the rest."
  - "Every write-up starts with what everyone needs to know, then splits into an <strong>attack side</strong> (how testers spot it, how bad it is, how to prove and report it) and a <strong>defense side</strong> (how to fix it, catch it before release and notice it in production). Use <strong>Show</strong> to read both sides or only one. Your choice stays as you move from page to page."
# One line under each category heading, in plain words.
categories:
  a01: "People reach data or actions that aren't theirs: someone else's account, an admin page, a file outside their folder."
  a02: "Unsafe settings: debug mode left on, passwords in config files, cookies without protection, sharing rules that are too open."
  a03: "Weak spots in code you didn't write: outdated libraries, abandoned packages, components you can't trust or update."
  a04: "Encryption and randomness done wrong: data sent or stored as plain text, weak algorithms, keys and tokens that can be guessed."
  a05: "Input the app treats as code or commands: SQL injection, cross-site scripting (XSS), command injection and their relatives."
  a06: "Mistakes in the plan rather than the code: no limits, trusting the browser, business rules that can be bent."
  a07: "Problems with logging in and staying logged in: weak passwords allowed, unlimited guessing, sessions that never end."
  a08: "Trusting code or data without checking it: unsigned updates, unsafe deserialization, scripts loaded from other sites."
  a09: "Attacks nobody notices: nothing logged, the wrong things logged, or logs an attacker can fake."
  a10: "What happens when something goes wrong: errors that give away details, crashes, and checks that fail open."
---
