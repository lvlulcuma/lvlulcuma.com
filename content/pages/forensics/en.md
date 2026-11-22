---
# Forensics hub → lvlulcuma.com/en/forensics/
# Everything on the site about digital forensics, in one place. The page holds no lessons of its own: it lists the
# learning path of the Roadmap job in `path: job:` (each topic becomes a link once its own page is written), the lab
# ideas in the "forensics" group (content/lab/), the write-ups (content/forensics/writeups/) and the jobs in `jobs: list:`.
# "What digital forensics is" (`what:` is its heading, the text is below the second ---) stays high level, like every
# overview page: the details belong on the topic pages.
updated: 2026-11-22
title: "Digital forensics"
intro: "Working out what happened on a computer or phone from the traces it keeps, in a way that holds up when someone checks. A learning path, lab ideas and worked cases, added as they're written."
what: "What digital forensics is"
path:
  job: forensics-analyst   # the Roadmap job whose learning path this page lists (content/roadmap/jobs/<job>/learn.yml)
  heading: "Learn it step by step"
  intro: "The topics a digital forensics analyst needs, from first steps to expert. A topic becomes a link once its own page is written, basics first."
  pages: "{n} of {total} written"   # {n} topics with their own page, out of {total}
  full: "The full path, with what each topic covers"
labs:
  heading: "Practice in a lab"
  intro: "Make the evidence yourself: disk images, memory captures and logs from virtual machines you own, so you can take them apart without touching anyone's real data."
  empty: "The first forensics lab ideas are on the way."
writeups:
  heading: "Write-ups"
  intro: "Worked cases from start to finish: the question, the evidence, every step of the analysis and the answer. Some come from my own lab, others from public challenges whose rules allow write-ups."
  empty: "No write-ups yet. The first ones will follow the first lab ideas."
jobs:
  heading: "Where it leads"
  intro: "Jobs where these skills are the core of the work, each with its own learning path."
  list: [forensics-analyst, cybercrime-investigator, incident-responder]   # Roadmap job folders
---

Digital forensics is finding, preserving and reading the traces that computers, phones and online services leave
behind, so you can say what happened, when, and who or what did it, and back every claim up. The same skills serve a
police investigation, a company dealing with a break-in, and a court case.

What sets it apart from ordinary troubleshooting is that someone may check your work later: another examiner, a
lawyer, a judge. So every case follows the same four steps, as [NIST SP 800-86](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-86.pdf)
describes them:

1. **Collection:** find the sources (a laptop, a phone, a cloud account, server logs) and acquire their data without
   changing it.
2. **Examination:** process what you collected, with tools and by hand, to pull out what matters.
3. **Analysis:** put the pieces together to answer the questions of the case.
4. **Reporting:** write down what you found, how you found it, and what it does and doesn't show.

A few rules hold it all together. Work on a verified copy, never on the original. Check every copy with a hash, a
fingerprint of the data that changes if a single bit does. Keep notes as you go, so someone else can repeat each step
and get the same result. And record who had the evidence, when, and what they did with it: the chain of custody.

The learning path below starts from those basics and goes on to memory, mobile and cloud forensics.
