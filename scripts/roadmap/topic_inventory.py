"""Prints every shared Roadmap topic with its titles in three languages and the jobs (and levels) that use it.

Usage (from the repository root):
    python3 scripts/roadmap/topic_inventory.py            # the table, as Markdown
    python3 scripts/roadmap/topic_inventory.py | grep -i log

Read it before choosing topics for a job (reuse first), and match its terms when translating.
Levels: beg = beginner, kno = knowledgeable, int = intermediate, adv = advanced, exp = expert.
"""
import signal

signal.signal(signal.SIGPIPE, signal.SIG_DFL)  # stop quietly when piped into head
import glob
import os
import re

root = "content/roadmap"
AB = {"beginner": "beg", "knowledgeable": "kno", "intermediate": "int", "advanced": "adv", "expert": "exp"}
used = {}
for p in sorted(glob.glob(f"{root}/jobs/*/learn.yml")):
    job = p.split("/")[-2]
    lvl = None
    for line in open(p):
        m = re.match(r"^(beginner|knowledgeable|intermediate|advanced|expert):", line)
        if m:
            lvl = m.group(1)
            continue
        if re.match(r"^\S", line):
            lvl = None
        m = re.match(r"^\s+-\s+([a-z0-9-]+)\s*$", line)
        if m and lvl:
            used.setdefault(m.group(1), []).append(f"{job}:{AB[lvl]}")


def title(slug, lang):
    path = f"{root}/topics/{slug}/{lang}.md"
    if not os.path.exists(path):
        return "—"
    for line in open(path):
        if line.startswith("title:"):
            return line.split(":", 1)[1].strip().strip('"')
    return "—"


slugs = sorted(os.listdir(f"{root}/topics"))
print(f"## Topic inventory ({len(slugs)} topics)\n")
print("| slug | EN | UA | PL | used by (job:level) |")
print("|---|---|---|---|---|")
for s in slugs:
    print(f"| {s} | {title(s, 'en')} | {title(s, 'ua')} | {title(s, 'pl')} | {', '.join(sorted(used.get(s, [])))} |")
unused = [s for s in slugs if s not in used]
print(f"\n{len(slugs)} topics; {len(unused)} unused{': ' + ', '.join(unused) if unused else ''}")
