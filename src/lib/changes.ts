// What changed on the site in the last 7 days, for the "New this week" box on the home page
// (src/components/Announcements.astro). Worked out when the site is built, from the dates already in the content:
//
//   News        a weekly digest's `date:`, an incident breakdown's `published:`
//   Articles    `date:`          Guides  `date:`          CWE  `date:`
//   Roadmap     `updated:` in a job's learn.yml (its "what to learn" list)
//   Research    `published:`
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
import { getIncidents, getWeeks, incidentHref, weekHref } from "./news";
import { getJobs, getLearn } from "./roadmap";

export type ChangeKind = "week" | "incident" | "article" | "cwe" | "guide" | "roadmap" | "research" | "site";
/** The order of things published on the same day. */
const KINDS: ChangeKind[] = ["week", "incident", "article", "cwe", "guide", "roadmap", "research", "site"];

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

/** Everything published or changed in the last 7 days, newest first. */
export async function getChanges(lang: Lang): Promise<Change[]> {
  const to = today();
  const from = addDays(to, -(WINDOW_DAYS - 1));
  const inWindow = (d: Date) => { const s = iso(d); return s >= from && s <= to; };
  const out: Change[] = [];

  // One row per thing: "new" if it was first published in the window (later changes are part of that),
  // otherwise "updated" with its latest change, if that falls in the window.
  function add(c: Omit<Change, "day" | "date" | "updated" | "note">, published: Date, revisions: Dated) {
    if (inWindow(published)) return out.push({ ...c, day: iso(published), date: published, updated: false });
    const last = (revisions ?? []).filter((r) => inWindow(r.date)).sort((a, b) => b.date.valueOf() - a.date.valueOf())[0];
    if (last) out.push({ ...c, day: iso(last.date), date: last.date, updated: true, note: last.note });
  }

  // Made-up sample entries (`example: true`) never count.
  for (const w of (await getWeeks(lang)).filter((w) => !w.example))
    add({ kind: "week", title: w.entry.data.title, lang: w.lang, href: weekHref(w) }, w.entry.data.date, w.entry.data.revisions);
  for (const i of (await getIncidents(lang)).filter((i) => !i.example))
    add({ kind: "incident", title: i.entry.data.title, lang: i.lang, href: incidentHref(i) }, i.entry.data.published, i.entry.data.revisions);
  for (const a of await getArticles(lang))
    add({ kind: "article", title: a.entry.data.title, lang, href: `/${lang}/articles/${a.slug}/` }, a.date, a.entry.data.revisions);
  for (const c of await getCwes(lang))
    add({ kind: "cwe", tag: `CWE-${c.id}`, title: c.entry.data.title, lang: c.lang, href: `/${c.lang}/cwe/${c.id}/` }, c.entry.data.date, c.entry.data.revisions);
  for (const g of await getGuides(lang))
    add({ kind: "guide", title: g.entry.data.title, lang: g.lang, href: `/${g.lang}/guides/${g.slug}/` }, g.date, g.entry.data.revisions);

  const home = (await getPage("home", lang)).data;
  const words = home.changes ?? {};
  const learn = await getLearn();
  for (const j of await getJobs(lang)) {
    const l = learn.get(j.slug);
    if (!l) continue;
    const title = String(words.roadmap ?? "{job}").replace("{job}", j.entry.data.title);
    add({ kind: "roadmap", title, lang: j.lang, href: `/${lang}/roadmap/${j.field}/${j.slug}/` }, l.data.updated, undefined);
  }

  for (const p of await getProjects(lang)) {
    const d = p.entry.data;
    add({ kind: "research", title: d.title, lang, href: d.page ? `/${lang}/research/${p.slug}/` : `/${lang}/research/` }, d.published, d.revisions);
  }

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
