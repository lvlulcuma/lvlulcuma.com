// Creates next month's article in all three languages, in its own folder:
//   content/articles/2026-11/en.md, pl.md, ua.md
//   npm run new-article              -> the month after your latest article
//   npm run new-article -- 2026-12   -> a specific month
// The date is set to the last Monday of that month, and the article starts as a draft.
// The Polish file is created too, even while Polish is switched off, so it's ready when it comes back.
import { existsSync, mkdirSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const base = "content/articles";
const langs = ["en", "pl", "ua"];

function lastMonday(year, month0) {
  const d = new Date(Date.UTC(year, month0 + 1, 0));
  d.setUTCDate(d.getUTCDate() - ((d.getUTCDay() + 6) % 7));
  return d.toISOString().slice(0, 10);
}

let slug = process.argv[2];
if (!slug) {
  const existing = readdirSync(base).filter((f) => /^\d{4}-\d{2}$/.test(f)).sort();
  const last = existing.at(-1);
  const [y, m] = last ? last.split("-").map(Number) : [new Date().getUTCFullYear(), new Date().getUTCMonth()];
  const next = new Date(Date.UTC(y, m, 1)); // month index m == the month after `last`
  slug = `${next.getUTCFullYear()}-${String(next.getUTCMonth() + 1).padStart(2, "0")}`;
}
if (!/^\d{4}-\d{2}$/.test(slug)) {
  console.error(`Use the form YYYY-MM, for example: npm run new-article -- 2026-12`);
  process.exit(1);
}
const [year, month] = slug.split("-").map(Number);
const date = lastMonday(year, month - 1);

const placeholders = {
  en: { title: "Title in English", dek: "One-sentence summary in English.", body: "## First heading\n\nWrite the article here.\n" },
  pl: { title: "Tytuł po polsku", dek: "Jednozdaniowe podsumowanie po polsku.", body: "## Pierwszy nagłówek\n\nTutaj napisz artykuł.\n" },
  ua: { title: "Заголовок українською", dek: "Підсумок в одному реченні українською.", body: "## Перший заголовок\n\nНапишіть статтю тут.\n" },
};

const dir = join(base, slug);
mkdirSync(dir, { recursive: true });
for (const lang of langs) {
  const file = join(dir, `${lang}.md`);
  if (existsSync(file)) {
    console.log(`skip   ${file} (already exists)`);
    continue;
  }
  const p = placeholders[lang];
  writeFileSync(file, `---
title: "${p.title}"
date: ${date}
topic: api            # research | api | lab
dek: "${p.dek}"
# related: "research/ransomware-by-sector"   # optional link to a research or lab page
draft: true           # remove this line (or set false) to publish
# revisions:          # after publishing, add a line for each change (shown as REV B, C, …)
#   - date: 2026-12-02
#     note: "Fixed a typo in the table"
---

${p.body}`);
  console.log(`create ${file}`);
}
console.log(`\nPublish date: ${date} (last Monday of the month).`);
console.log(`Preview with: npm run dev   then open http://localhost:4321/en/articles/${slug}/`);
