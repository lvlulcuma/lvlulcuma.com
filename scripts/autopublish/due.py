"""Says whether an automatically published pull request may go out now (used by digest-auto-publish.yml).

    python3 scripts/autopublish/due.py <branch> [--now-ok]

- claude/digest-YYYY-wNN: from 01:11 Eastern Time on the Monday after that week.
- claude/autopublish-incident-<name>: from 01:11 Eastern Time on the day of the run (the scheduled runs are on
  Mondays), so a breakdown written just after midnight goes out at 01:11 like the digest.
- --now-ok (a run started by hand): right away.
Exits 0 when it's due, 1 when it isn't yet.
"""
import datetime
import sys
import zoneinfo

ref = sys.argv[1]
tz = zoneinfo.ZoneInfo("America/New_York")
now = datetime.datetime.now(tz)

if "--now-ok" in sys.argv[2:]:
    print(f"  started by hand: due now ({now:%Y-%m-%d %H:%M %Z})")
    sys.exit(0)

if ref.startswith("claude/digest-"):
    year, week = ref.removeprefix("claude/digest-").split("-w")
    day = datetime.date.fromisocalendar(int(year), int(week), 1) + datetime.timedelta(days=7)
else:
    day = now.date()

release = datetime.datetime.combine(day, datetime.time(1, 11), tz)
print(f"  release {release:%Y-%m-%d %H:%M %Z}, now {now:%Y-%m-%d %H:%M %Z}")
sys.exit(0 if now >= release else 1)
