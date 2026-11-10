// What changed on the site in the last 7 days, for the "New this week" box on the home page
// (src/components/Announcements.astro). Worked out when the site is built, from the dates already in the content.
// The same list of everything published (getEntries) also fills the RSS feeds (src/lib/feed.ts):
//
//   News        a weekly digest's `date:`, an incident breakdown's `published:`
//   Articles    `date:`          Guides  `date:`          CWE  `date:`
//   Roadmap     `updated:` in a job's learn.yml (its "what to learn" list)
//   Research    `published:`          Lab ideas  `date:`
//   Any of them `revisions:` (a change after publishing, shown as "Updated: <note>")
//   Site        `announcements:` in content/pages/home/<lang>.md, for anything else (a new section, a new feature)
//
// "The last 7 days" is today and the six days before it, by the calendar in Eastern Time (the site's clock for the
// weekly digest too). Something published on a Monday shows until Sunday and is gone on the next Monday. The site is
// rebuilt every night (.github/workflows/nightly-rebuild.yml), so the box empties itself even when nothing is pushed.
//
// To see the box as it would look on another day: SITE_TODAY=2026-11-04 npm run build
import { NAV, type Lang } from "../i18n/ui";
import { getArticles, iso } from "./articles";
import { getCwes } from "./cwe";
import { getGuides, getPage, getProjects } from "./content";
import { getIdeas } from "./lab";
import { getIncidents, getWeeks, incidentHref, weekHref } from "./news";
import { getJobs, getLearn } from "./roadmap";

export type ChangeKind = "week" | "incident" | "article" | "cwe" | "guide" | "roadmap" | "research" | "lab" | "site";
/** The order of things published on the same day. */
const KINDS: ChangeKind[] = ["week", "incident", "article", "cwe", "guide", "roadmap", "research", "lab", "site"];

export type Change = {
  kind: ChangeKind;
  /** The day it was published or changed (YYYY-MM-DD). */
  day: string;
  date: Date;
  /** false = published in the last 7 days; true = published earlier and changed since (see `note`). */
  updated: boolean;
  /** Shown instead of the kind's word above the title (CWE-639). */
  tag?: string;
  title: string;
  /** The language the title is in (a guide or a CWE write-up can still be English-only on a Ukrainian page). */
  lang: Lang;
  href?: string;
  /** The revision note, or an announcement's text. */
  note?: string;
  /** A weekly digest's number (45), for the box's summary line. */
  week?: number;
};

export const WINDOW_DAYS = 7;
const DAY = 24 * 60 * 60 * 1000;

/** Today's date in Eastern Time (YYYY-MM-DD), or SITE_TODAY when it's set (to preview another day). */
export function today(): string {
  const forced = process.env.SITE_TODAY;
  if (forced) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(forced)) throw new Error(`SITE_TODAY must look like 2026-11-04 (it is "${forced}").`);
    return forced;
  }
  return new Intl.DateTimeFormat("en-CA", { timeZone: "America/New_York", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
}

export const dayToDate = (day: string) => new Date(`${day}T00:00:00Z`);
const addDays = (day: string, n: number) => iso(new Date(dayToDate(day).valueOf() + n * DAY));

type Dated = { date: Date; note: string }[] | undefined;

/** Something published on the site, with its later changes. Shared by the "New this week" box and the RSS feeds
 *  (src/lib/feed.ts). Made-up sample entries (`example: true`) are left out. */
export type Entry = {
  kind: Exclude<ChangeKind, "site">;
  /** Shown instead of the kind's word (CWE-639). */
  tag?: string;
  title: string;
  /** The one-line summary (`dek:`, or `summary:` for research projects and Roadmap jobs). */
  description: string;
  /** A weekly digest's number (45). */
  week?: number;
  /** The language the title is in (a guide or a CWE write-up can still be English-only on a Ukrainian page). */
  lang: Lang;
  href: string;
  published: Date;
  revisions: NonNullable<Dated>;
};

/** Everything published on the site in this language: news, articles, CWE write-ups, guides, Roadmap jobs' "what to
 *  learn", research, lab ideas. In no particular order. */
export async function getEntries(lang: Lang): Promise<Entry[]> {
  const out: Entry[] = [];
  for (const w of (await getWeeks(lang)).filter((w) => !w.example))
    out.push({ kind: "week", week: w.week, title: w.entry.data.title, description: w.entry.data.dek, lang: w.lang, href: weekHref(w), published: w.entry.data.date, revisions: w.entry.data.revisions ?? [] });
  for (const i of (await getIncidents(lang)).filter((i) => !i.example))
    out.push({ kind: "incident", title: i.entry.data.title, description: i.entry.data.dek, lang: i.lang, href: incidentHref(i), published: i.entry.data.published, revisions: i.entry.data.revisions ?? [] });
  for (const a of await getArticles(lang))
    out.push({ kind: "article", title: a.entry.data.title, description: a.entry.data.dek, lang, href: `/${lang}/articles/${a.slug}/`, published: a.date, revisions: a.entry.data.revisions ?? [] });
  for (const c of await getCwes(lang))
    out.push({ kind: "cwe", tag: `CWE-${c.id}`, title: c.entry.data.title, description: c.entry.data.dek, lang: c.lang, href: `/${c.lang}/cwe/${c.id}/`, published: c.entry.data.date, revisions: c.entry.data.revisions ?? [] });
  for (const g of await getGuides(lang))
    out.push({ kind: "guide", title: g.entry.data.title, description: g.entry.data.dek, lang: g.lang, href: `/${g.lang}/guides/${g.slug}/`, published: g.date, revisions: g.entry.data.revisions ?? [] });

  const words = (await getPage("home", lang)).data.changes ?? {};
  const learn = await getLearn();
  for (const j of await getJobs(lang)) {
    const l = learn.get(j.slug);
    if (!l) continue;
    const title = String(words.roadmap ?? "{job}").replace("{job}", j.entry.data.title);
    out.push({ kind: "roadmap", title, description: j.entry.data.summary, lang: j.lang, href: `/${lang}/roadmap/${j.field}/${j.slug}/`, published: l.data.updated, revisions: [] });
  }

  for (const p of await getProjects(lang)) {
    const d = p.entry.data;
    out.push({ kind: "research", title: d.title, description: d.summary, lang, href: d.page ? `/${lang}/research/${p.slug}/` : `/${lang}/research/#${p.slug}`, published: d.published, revisions: d.revisions ?? [] });
  }
  for (const i of await getIdeas(lang))
    out.push({ kind: "lab", title: i.entry.data.title, description: i.entry.data.dek, lang: i.lang, href: `/${i.lang}/lab/${i.slug}/`, published: i.date, revisions: i.entry.data.revisions ?? [] });
  return out;
}

/** Everything published or changed in the last 7 days, newest first. */
export async function getChanges(lang: Lang): Promise<Change[]> {
  const to = today();
  const from = addDays(to, -(WINDOW_DAYS - 1));
  const inWindow = (d: Date) => { const s = iso(d); return s >= from && s <= to; };
  const out: Change[] = [];

  // One row per thing: "new" if it was first published in the window (later changes are part of that),
  // otherwise "updated" with its latest change, if that falls in the window.
  for (const e of await getEntries(lang)) {
    const c = { kind: e.kind, tag: e.tag, title: e.title, lang: e.lang, href: e.href, week: e.week };
    if (inWindow(e.published)) { out.push({ ...c, day: iso(e.published), date: e.published, updated: false }); continue; }
    const last = e.revisions.filter((r) => inWindow(r.date)).sort((a, b) => b.date.valueOf() - a.date.valueOf())[0];
    if (last) out.push({ ...c, day: iso(last.date), date: last.date, updated: true, note: last.note });
  }

  const home = (await getPage("home", lang)).data;
  // Announcements written by hand: anything the content can't tell by itself.
  const file = `content/pages/home/${lang}.md`;
  ((home.announcements ?? []) as any[]).forEach((a, i) => {
    const where = `${file}, announcement ${i + 1}`;
    const date = new Date(a?.date);
    if (!a?.title) throw new Error(`${where}: "title:" is missing.`);
    if (Number.isNaN(date.valueOf())) throw new Error(`${where}: "date:" must look like 2026-11-04.`);
    if (a.section && !(NAV as readonly string[]).includes(a.section)) throw new Error(`${where}: section "${a.section}" isn't one of: ${NAV.join(", ")}.`);
    const link = a.link ? String(a.link) : "";
    // "/guides/" means this site's guides page in the page's own language: /en/guides/, /ua/guides/.
    const href = !link ? undefined : /^https?:\/\//.test(link) ? link : `/${lang}/${link.replace(/^\/+/, "")}`;
    if (inWindow(date)) out.push({ kind: "site", day: iso(date), date, updated: false, title: String(a.title), lang, href, note: a.text ? String(a.text) : undefined });
  });

  // Newest first; on the same day, new things before changes to older ones.
  return out.sort((a, b) => b.day.localeCompare(a.day) || Number(a.updated) - Number(b.updated) || KINDS.indexOf(a.kind) - KINDS.indexOf(b.kind));
}

/** The "New this week" box shows one row per section of the site, not one per change, so it stays short and reads at
 *  a glance (17 changes in a week become three rows: News, Roadmap, Lab). */
export type ChangeGroup = {
  /** The section's name as in the menu ("News"), or "Site" for an announcement. */
  label: string;
  count: number;
  /** The title when it's one thing; a short summary when it's several. */
  summary: string;
  /** The language of the summary, when it's one thing's title in another language. */
  lang?: Lang;
  href?: string;
};

/** Where each kind of change lives in the menu. */
const SECTION: Record<Exclude<ChangeKind, "site">, (typeof NAV)[number]> = {
  week: "news", incident: "news", article: "articles", cwe: "cwe", guide: "guides", roadmap: "roadmap", research: "research", lab: "lab",
};

/** Groups the changes by section, the section with the newest change first. `words` are the box's words
 *  (`changes:` in content/pages/home/<lang>.md); `t` the interface words, for the menu names and plurals. */
export function groupChanges(changes: Change[], lang: Lang, words: Record<string, any>, t: Record<string, any>,
  count: (n: number, word: string) => string): ChangeGroup[] {
  const groups = new Map<string, Change[]>();
  changes.forEach((c, i) => {
    const key = c.kind === "site" ? `site-${i}` : SECTION[c.kind];
    groups.set(key, [...(groups.get(key) ?? []), c]);
  });
  const one = (c: Change) => (c.updated ? `${words.updated}: ${c.title}` : c.tag ? `${c.tag} · ${c.title}` : c.title);
  // The list is newest first, so a Map keeps the sections in the order of their newest change.
  return [...groups.entries()].map(([key, cs]) => {
    if (key.startsWith("site-")) return { label: String(words.labels.site), count: 1, summary: cs[0].title, href: cs[0].href };
    const section = key as (typeof NAV)[number];
    const label = String(t.nav[section]);
    if (cs.length === 1) return { label, count: 1, summary: one(cs[0]), lang: cs[0].lang, href: cs[0].href };
    const href = `/${lang}/${section}/`;
    if (section === "news") {
      // "Week 45 · 6 breakdowns": the digest by its number (it links to every story), then the breakdowns.
      const weeks = cs.filter((c) => c.kind === "week"), incidents = cs.filter((c) => c.kind === "incident");
      const parts = [...weeks.map((c) => c.week ? `${t.week} ${c.week}` : c.title), ...(incidents.length ? [count(incidents.length, "breakdown")] : [])];
      return { label, count: cs.length, summary: parts.join(" · "), href: weeks.length === 1 ? weeks[0].href : href };
    }
    if (section === "roadmap") return { label, count: cs.length, summary: String(words.roadmap_n).replace("{jobs}", count(cs.length, "job")), href };
    const plural: Partial<Record<string, string>> = { articles: "article", guides: "guide", lab: "idea" };
    const summary = plural[section] ? count(cs.length, plural[section]!) : cs.map((c) => c.tag ?? c.title).join(" · ");
    return { label, count: cs.length, summary, href };
  });
}

/** When the next weekly digest is due: the Monday after the week that follows the latest digest. */
export async function nextDigest(lang: Lang): Promise<Date | null> {
  const latest = (await getWeeks(lang)).filter((w) => !w.example)[0];
  if (!latest) return null;
  const now = today();
  let next = addDays(iso(latest.from), 14);
  // A week was skipped: the next Monday from today (today itself, if it's a Monday).
  if (next < now) {
    const d = dayToDate(now);
    next = addDays(now, (8 - d.getUTCDay()) % 7);
  }
  return dayToDate(next);
}
