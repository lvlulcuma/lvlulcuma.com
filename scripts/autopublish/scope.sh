#!/usr/bin/env bash
# Decides whether a pull request may be published without a review (used by .github/workflows/digest-auto-publish.yml).
#
#   scripts/autopublish/scope.sh <branch> <main commit> <pull request commit>
#
# Two kinds of branch qualify, and each may change only these folders:
#   claude/digest-YYYY-wNN               content/news/weeks/YYYY-wNN/  (the weekly digest), and the breakdowns
#                                        written with it: new folders in content/news/incidents/, each one linked
#                                        from a story of that week (`incident: <name>` in its en.md). A digest may
#                                        not change a breakdown that's already on main.
#   claude/autopublish-incident-<name>   content/news/incidents/<name>/, and at most one week that's already on
#                                        main (to add a story that links to the breakdown)
# Prints the folders to take from the pull request, one per line, and exits 0 when everything is in scope.
# Otherwise explains why and exits 1. Messages go to stderr, so stdout holds only the folders.
set -euo pipefail

ref="$1" base="$2" head="$3"
no() { echo "$*" >&2; exit 1; }

changed=$(git diff --name-only "$base...$head")
echo "Changed files:" >&2
printf '%s\n' "$changed" | sed 's/^/  /' >&2
[ -n "$changed" ] || no "Nothing changed."

case "$ref" in
  claude/digest-*)
    week="${ref#claude/digest-}"
    [[ "$week" =~ ^[0-9]{4}-w[0-9]{2}$ ]] || no "Branch $ref isn't named claude/digest-YYYY-wNN."
    folders="content/news/weeks/$week"
    # Breakdowns written with the digest: only new folders, and only ones a story of this week links to.
    for name in $(printf '%s\n' "$changed" | sed -n 's|^content/news/incidents/\([^/]*\)/.*|\1|p' | sort -u); do
      [[ "$name" =~ ^[a-z0-9]+(-[a-z0-9]+)*$ ]] || no "content/news/incidents/$name/: a folder name may only use a-z, 0-9 and dashes."
      if git cat-file -e "$base:content/news/incidents/$name" 2>/dev/null; then
        no "content/news/incidents/$name/ is already on main: a digest may only add new breakdowns, not change published ones."
      fi
      git show "$head:content/news/weeks/$week/en.md" 2>/dev/null \
        | grep -Eq "^[[:space:]]*incident:[[:space:]]*[\"']?${name}[\"']?[[:space:]]*\$" \
        || no "content/news/incidents/$name/ isn't linked from a story in $week (incident: $name in en.md)."
      folders="$folders content/news/incidents/$name"
    done
    ;;
  claude/autopublish-incident-*)
    name="${ref#claude/autopublish-incident-}"
    [[ "$name" =~ ^[a-z0-9]+(-[a-z0-9]+)*$ ]] || no "Branch $ref: the incident folder name may only use a-z, 0-9 and dashes."
    printf '%s\n' "$changed" | grep -q "^content/news/incidents/$name/" \
      || no "Branch $ref doesn't change content/news/incidents/$name/."
    weeks=$(printf '%s\n' "$changed" | grep -o '^content/news/weeks/[0-9]\{4\}-w[0-9]\{2\}/' | sort -u || true)
    [ "$(printf '%s' "$weeks" | grep -c .)" -le 1 ] || no "More than one week folder changed."
    folders="content/news/incidents/$name"
    if [ -n "$weeks" ]; then
      git cat-file -e "$base:${weeks%/}" 2>/dev/null || no "${weeks%/} isn't on main yet: only an already published week can get a story here."
      folders="$folders ${weeks%/}"
    fi
    ;;
  *)
    no "Branch $ref isn't one that's published automatically."
    ;;
esac

allowed="^($(printf '%s/|' $folders | sed 's/|$//'))"
if outside=$(printf '%s\n' "$changed" | grep -Ev "$allowed"); then
  printf '%s\n' "$outside" | sed 's/^/  /' >&2
  no "The files above are outside $(printf '%s/ ' $folders)so it won't be published automatically."
fi
printf '%s\n' $folders
