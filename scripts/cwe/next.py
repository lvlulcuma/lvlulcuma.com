"""Lists the CWE section's plan (content/cwe/plan.yml) in writing order and marks the pages already written.

Usage (from the repository root):
    python3 scripts/cwe/next.py          # the whole plan, then the next page to write
    python3 scripts/cwe/next.py --next   # only the next page: "<cwe> <kind> <covers, comma-separated or ->"

A page counts as written once its folder content/cwe/<cwe>/ has an en.md. Pages are written in plan order.
"""
import signal

signal.signal(signal.SIGPIPE, signal.SIG_DFL)  # stop quietly when piped into head
import os
import re
import sys

LINE = re.compile(r'^\s*-\s*\{\s*cwe:\s*(\d+),\s*covers:\s*\[([\d,\s]*)\],\s*kind:\s*(full|short),\s*title:\s*"([^"]*)"\s*\}')

pages = []
for line in open("content/cwe/plan.yml", encoding="utf-8"):
    m = LINE.match(line)
    if m:
        covers = [int(x) for x in m.group(2).replace(" ", "").split(",") if x]
        done = os.path.exists(f"content/cwe/{m.group(1)}/en.md")
        pages.append((int(m.group(1)), covers, m.group(3), m.group(4), done))

todo = [p for p in pages if not p[4]]
if "--next" in sys.argv:
    if todo:
        cwe, covers, kind, _, _ = todo[0]
        print(cwe, kind, ",".join(map(str, covers)) or "-")
    sys.exit(0)

total = sum(1 + len(p[1]) for p in pages)
explained = sum(1 + len(p[1]) for p in pages if p[4])
for i, (cwe, covers, kind, title, done) in enumerate(pages, 1):
    also = f"  (+ {', '.join(map(str, covers))})" if covers else ""
    print(f"{'✓' if done else ' '} {i:>2}. CWE-{cwe:<5} {kind:<5} {title}{also}")
print(f"\n{len(pages) - len(todo)} of {len(pages)} pages written; {explained} of {total} CWEs explained.")
if todo:
    print(f"Next: CWE-{todo[0][0]} ({todo[0][2]}): {todo[0][3]}")
