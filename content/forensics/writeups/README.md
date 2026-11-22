# Forensics write-ups

One folder per write-up, with `en.md`, `ua.md` and `pl.md`: `content/forensics/writeups/<slug>/en.md` becomes
`lvlulcuma.com/en/forensics/writeups/<slug>/` and is listed on the Forensics hub (`/en/forensics/`), newest first.

A write-up is a worked case: the question, the evidence, each step of the analysis with the commands and what they
showed, and the answer. It comes from one of two places (`source:`):

- `lab`: evidence made on purpose in a home lab. `lab:` names the lab idea in `content/lab/` that builds it, when there is one.
- `challenge`: a public DFIR challenge, only where the platform's rules allow publishing solutions. `challenge:` gives
  its name, platform, address and the page where those rules say so.

How to write one: `docs/claude/forensics-writeup.md`. The fields are described in `src/content.config.ts` (`writeups`).
