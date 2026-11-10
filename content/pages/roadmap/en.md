---
# Roadmap → lvlulcuma.com/en/roadmap/
# (Each field is in content/roadmap/fields/, each job in content/roadmap/jobs/.)
updated: 2026-10-28
# title: "..."   # optional page heading and browser tab; without it, the menu label ("Roadmap") is used
intro: "Cybersecurity isn't one job, it's many. Below are its main fields, grouped by the kind of work they involve. Open one to see its jobs, from entry level to senior. Some jobs already show what to learn for them, from beginner to expert, and more are added one by one."
groups:   # the heading and one line above each group of fields
  defend:
    title: "Defend and respond"
    text: "Watch systems, catch attacks and clean up after them."
  attack:
    title: "Attack and research"
    text: "Think like an attacker: find the weaknesses before criminals do."
  build:
    title: "Build and protect"
    text: "Design, build and run systems that are secure from the start."
  govern:
    title: "Govern and lead"
    text: "Set the rules, manage risk, and help people and organizations stay safe."
levels:   # on each field's page: the heading and one line above each group of jobs (a job picks one in its `level:`)
  entry:
    title: "Entry level"
    text: "Where people often start in security: straight after training, or after a job in IT support, networking or development."
  mid:
    title: "Mid level"
    text: "Usually asks for experience in IT or security, or hands-on skills you can show."
  senior:
    title: "Senior"
    text: "Takes many years of experience. Often means leading people or making decisions for a whole organization."
  any:
    title: "Any stage"
    text: "Open to anyone with the skills. Often done alongside another job."
levelsNote: "Levels are a rough guide. The same title can mean different things at different companies, so check what each job ad actually asks for."   # small print at the bottom of each field's page
learnLevels:   # on a job's "what to learn" page: the heading and one line above each level of topics
  beginner:
    title: "Beginner"
    text: "The IT basics everything else builds on. Start here if you're new."
  knowledgeable:
    title: "Knowledgeable"
    text: "You know the main ideas and tools of the job and can do everyday tasks with some help."
  intermediate:
    title: "Intermediate"
    text: "You handle most of the work on your own and know where to look when you're stuck."
  advanced:
    title: "Advanced"
    text: "You take on the hard cases, improve how the team works and help others learn."
  expert:
    title: "Expert"
    text: "You lead, decide how the work is done and set direction for others."
learnIntro: "Everything to learn for this job, from your first steps to expert level, grouped by how far along you are. Topics are shared between jobs, so you'll meet some of them again elsewhere on the Roadmap."
learnHire:   # the line after the level employers usually expect (`hire:` in the job's learn.yml)
  title: "Enough to apply for this job"
  text: "Employers usually expect everything above this line. The rest is how you grow in the job."
moves:   # career moves, worked out from the learning paths (src/lib/roadmap.ts, jobMoves)
  heading: "Where you can go next"   # on a job's page, after its learning path
  intro: "Jobs you can move to from here, closest first. The number is how many topics you'd still need on top of this job's, to be ready to apply."
  add: "{topics} to add"             # {topics} is "14 topics"
  shared: "{n} of {total} already in common"
  closest: "Closest next job"        # on a field's job cards
  title: "From {from} to {to}"       # a move's own page; {from} and {to} are job titles
  dek: "To be ready for {to} jobs, learn these {topics} on top of what you know from {from}. They're grouped by level, in the order they come in the {to} path."
  have: "What you already bring"     # the topics both jobs share, folded
  back: "Back to"
  full: "Full path"
  start: "Where people start, and where it leads"   # on the Roadmap page
  startText: "The most common first jobs, and the closest jobs you can move to from each."
attacks:   # on a job's page: incident breakdowns whose `jobs:` lists the job
  heading: "Seen in real attacks"
  intro: "Breakdowns from the News where this job's skills were needed, newest first."
  topics: "Topics from this path"
learnSources: "This list is based on"
learnAnd: "and"
---

Based on NIST's [NICE Framework](https://www.nist.gov/itl/applied-cybersecurity/nice/nice-framework-resource-center) and ENISA's [European Cybersecurity Skills Framework](https://www.enisa.europa.eu/topics/cybersecurity-education/european-cybersecurity-skills-framework), regrouped for people choosing where to start.
