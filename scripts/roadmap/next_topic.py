"""Lists one Roadmap job's topics in the order of its learn.yml and marks the ones that already have their own page.

Usage (from the repository root):
    python3 scripts/roadmap/next_topic.py <job>          # the job's topics by level, then the next one to write
    python3 scripts/roadmap/next_topic.py <job> --next   # only the next topic's folder name

A topic has its own page once its en.md has text under the front matter (docs/claude/roadmap-topic.md).
Topic pages are written one at a time, top to bottom, so the beginner basics come first.
"""
import signal

signal.signal(signal.SIGPIPE, signal.SIG_DFL)  # stop quietly when piped into head
import os
import re
import sys

args = [a for a in sys.argv[1:] if not a.startswith("--")]
if len(args) != 1:
    sys.exit(__doc__)
job = args[0]
path = f"content/roadmap/jobs/{job}/learn.yml"
if not os.path.exists(path):
    sys.exit(f"No learning path for {job!r}: {path} doesn't exist.")


def title(slug):
    for line in open(f"content/roadmap/topics/{slug}/en.md"):
        m = re.match(r'^title:\s*"?(.*?)"?\s*$', line)
        if m:
            return m.group(1)
    return slug


def has_page(slug):
    text = open(f"content/roadmap/topics/{slug}/en.md").read()
    m = re.match(r"^---\n.*?\n---\n?(.*)$", text, re.S)
    return bool(m and m.group(1).strip())


topics, level = [], None
for line in open(path):
    m = re.match(r"^(\w+):\s*$", line)
    if m:
        level = m.group(1)
        continue
    m = re.match(r"^\s+-\s+([a-z0-9-]+)\s*$", line)
    if m and level:
        topics.append((level, m.group(1)))

todo = [t for t in topics if not has_page(t[1])]
if "--next" in sys.argv:
    print(todo[0][1] if todo else "all done")
    sys.exit(0)
last = None
for n, (lvl, slug) in enumerate(topics, 1):
    if lvl != last:
        print(f"\n{lvl}")
        last = lvl
    print(f"{n:3}. {'✓' if has_page(slug) else ' '} {title(slug)} ({slug})")
print(f"\n{len(topics) - len(todo)} of {len(topics)} have a page." + (f" Next: {title(todo[0][1])} ({todo[0][1]})" if todo else ""))
