"""Writes one Roadmap job's "what to learn" path from a topics module.

Usage (from the repository root):
    python3 scripts/roadmap/write_job.py <module.py> <job-slug> <field-slug> <updated YYYY-MM-DD>

<module.py> is a file you write (keep it outside the repository, e.g. /tmp/topics_tia.py) with:
    HIRE    = "knowledgeable" | "intermediate" | "advanced"   (the level employers usually expect)
    T       = {slug: {"en": (title, summary), "ua": (...), "pl": (...)}}   new topics
    UPDATE  = {slug: {"en": (title, summary), ...}}                         optional: rewrite shared topics
    LEVELS  = {"beginner": [...], "knowledgeable": [...], "intermediate": [...], "advanced": [...], "expert": [...]}
    SOURCES = [(name, url), ...]                                            shown as "This list is based on …"
See docs/claude/roadmap-job.md for a template and the rules.

It only creates new topic folders (refuses to overwrite), applies UPDATE to existing shared topics,
writes content/roadmap/jobs/<job>/learn.yml, and checks: no duplicates, every listed topic exists,
every new topic is used. Titles and summaries can't contain straight double quotes.
"""
import importlib.util
import os
import re
import sys

if len(sys.argv) != 5:
    sys.exit(__doc__)
path, job, field, updated = sys.argv[1:5]
spec = importlib.util.spec_from_file_location("topics_module", path)
mod = importlib.util.module_from_spec(spec)
spec.loader.exec_module(mod)
T, LEVELS, SOURCES = mod.T, mod.LEVELS, mod.SOURCES
UPDATE = getattr(mod, "UPDATE", {})
HIRE = getattr(mod, "HIRE", "knowledgeable")
root = "content/roadmap/topics"


def q(s):
    assert '"' not in s, f"straight double quote in: {s}"
    return '"' + s + '"'


assert os.path.isdir(f"content/roadmap/jobs/{job}"), f"no folder content/roadmap/jobs/{job}/"
assert os.path.isdir(f"content/roadmap/fields/{field}"), f"no folder content/roadmap/fields/{field}/"
existing = set(os.listdir(root))
for slug in T:
    assert slug not in existing, f"topic {slug} already exists"
used = [s for l in LEVELS.values() for s in l]
assert len(used) == len(set(used)), "a topic is listed twice"
missing = [s for s in used if s not in existing and s not in T]
assert not missing, f"unknown topics: {missing}"
unused = [s for s in T if s not in used]
assert not unused, f"new topics not used: {unused}"

for slug, langs in T.items():
    os.makedirs(f"{root}/{slug}")
    for l, (title, summary) in langs.items():
        with open(f"{root}/{slug}/{l}.md", "w") as f:
            f.write(f'''---
# Roadmap topic. Its title and summary show on every job page that lists "{slug}" in learn.yml.
# Write text under the dashes to give it its own page: lvlulcuma.com/{l}/roadmap/topics/{slug}/
title: {q(title)}
summary: {q(summary)}
---
''')
for slug, langs in UPDATE.items():
    for l, (title, summary) in langs.items():
        p = f"{root}/{slug}/{l}.md"
        s = open(p).read()
        s, a = re.subn(r'^title: ".*"$', f"title: {q(title)}", s, flags=re.M)
        s, b = re.subn(r'^summary: ".*"$', f"summary: {q(summary)}", s, flags=re.M)
        assert a == b == 1, p
        open(p, "w").write(s)

y = [f"# What to learn for this job, from first steps to expert: its page is lvlulcuma.com/en/roadmap/{field}/{job}/",
     "# Each line is a topic folder in content/roadmap/topics/ (shared between jobs; titles and summaries live there).",
     "# A topic folder that doesn't exist, or one listed twice, stops the build with a message.",
     f"updated: {updated}",
     f"hire: {HIRE}   # the level employers usually expect when hiring: everything up to and including this one",
     ""]
for lvl, items in LEVELS.items():
    y.append(f"{lvl}:")
    y += [f"  - {s}" for s in items]
y += ["", '# Shown under the list as "This list is based on …"', "sources:"]
for name, url in SOURCES:
    y += [f"  - name: {q(name)}", f"    url: {q(url)}"]
y.append("")
p = f"content/roadmap/jobs/{job}/learn.yml"
assert not os.path.exists(p), p
open(p, "w").write("\n".join(y))
print(f"{len(T)} new topics, {len(UPDATE)} updated, {len(used)} topics in {job}")
