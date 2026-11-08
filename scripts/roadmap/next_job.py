"""Lists every Roadmap job in site order and marks the ones that already have a "what to learn" path.

Usage (from the repository root):
    python3 scripts/roadmap/next_job.py          # the whole list, then the next job to do
    python3 scripts/roadmap/next_job.py --next   # only the next job: "<job> <field> <level>"

Site order: fields by group (defend, attack, build, govern) and their `order:`, then jobs inside a field
by level (entry, mid, senior, any) and their `order:`. Jobs are done one at a time in this order.
"""
import signal

signal.signal(signal.SIGPIPE, signal.SIG_DFL)  # stop quietly when piped into head
import os
import re
import sys

GROUPS = ["defend", "attack", "build", "govern"]
LEVELS = ["entry", "mid", "senior", "any"]


def front(path):
    data = {}
    for line in open(path):
        m = re.match(r'^(\w+):\s*"?([^"#]*?)"?\s*(#.*)?$', line.rstrip("\n"))
        if m:
            data[m.group(1)] = m.group(2).strip()
    return data


fields = {}
for slug in os.listdir("content/roadmap/fields"):
    d = front(f"content/roadmap/fields/{slug}/en.md")
    fields[slug] = (GROUPS.index(d["group"]), int(d["order"]), d.get("title", slug))
jobs = []
for slug in os.listdir("content/roadmap/jobs"):
    d = front(f"content/roadmap/jobs/{slug}/en.md")
    f = d["field"]
    done = os.path.exists(f"content/roadmap/jobs/{slug}/learn.yml")
    jobs.append((fields[f][0], fields[f][1], LEVELS.index(d["level"]), int(d["order"]), slug, f, d["level"], d.get("title", slug), done))
jobs.sort()
todo = [j for j in jobs if not j[8]]
if "--next" in sys.argv:
    print(f"{todo[0][4]} {todo[0][5]} {todo[0][6]}" if todo else "all done")
    sys.exit(0)
for n, j in enumerate(jobs, 1):
    print(f"{n:2}. {'✓' if j[8] else ' '} {j[7]} ({j[4]}; {j[5]}, {j[6]})")
print(f"\n{len(jobs) - len(todo)} of {len(jobs)} done." + (f" Next: {todo[0][7]} ({todo[0][4]}; {todo[0][5]}, {todo[0][6]})" if todo else ""))
