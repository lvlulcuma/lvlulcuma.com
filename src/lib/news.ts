// Reads the News section: weekly digests (content/news/weeks/) and incident breakdowns (content/news/incidents/).
//
//   A week      content/news/weeks/2026-w43/<lang>.md       →  /<lang>/news/2026-w43/
//               Five or so short stories: what happened, why it matters, what to do. A story can point to a breakdown.
//   An incident content/news/incidents/<name>/<lang>.md      →  /<lang>/news/incidents/<name>/
//               One big attack taken apart: at a glance, timeline, ATT&CK steps, detection, checklist, Roadmap links.
//
// Like guides, an entry gets a page only in the languages it's written in; the lists in other languages
// show it in English (with an EN mark) and link to the English page.
// Entries with `example: true` are made-up samples: labelled on the page, and kept out of Google, the sitemap,
// RSS and the home page.
import { getCollection, type CollectionEntry } from "astro:content";
import { LANGS, NEWS_TYPES, ui, type Lang, type NewsType } from "../i18n/ui";
import type { Block, GoItem } from "./block";
import { dayMonth } from "./block";
import { getJobs, getLearn, getTopics } from "./roadmap";

const visible = (e: { data: { draft: boolean } }) => import.meta.env.DEV || !e.data.draft;

/** One entry per folder: the page's language where it exists, English otherwise. */
function bestPerFolder<E extends { id: string }>(entries: E[], lang: Lang): E[] {
  const rank = (l: string) => (l === lang ? 0 : l === "en" ? 1 : 2);
  const best = new Map<string, E>();
  for (const e of entries) {
    const [slug, l] = e.id.split("/");
    const cur = best.get(slug);
    if (!cur || rank(l) < rank(cur.id.split("/")[1])) best.set(slug, e);
  }
  return [...best.values()];
}

export type Week = {
  entry: CollectionEntry<"weeks">;
  slug: string;
  /** The language this week's text is in (can be "en" on a Ukrainian list, see above). */
  lang: Lang;
  year: number;
  week: number;
  /** Monday and Sunday of the ISO week. */
  from: Date;
  to: Date;
  date: Date;
  example: boolean;
};

export type Incident = {
  entry: CollectionEntry<"incidents">;
  slug: string;
  lang: Lang;
  type: NewsType;
  date: Date;
  example: boolean;
};

const WEEK = /^(\d{4})-w(\d{2})$/;
const DAY = 24 * 60 * 60 * 1000;

/** Monday and Sunday of an ISO week (week 1 is the one with 4 January in it). */
export function isoWeekRange(year: number, week: number) {
  const jan4 = Date.UTC(year, 0, 4);
  const back = (new Date(jan4).getUTCDay() + 6) % 7; // days since Monday
  const from = new Date(jan4 - back * DAY + (week - 1) * 7 * DAY);
  return { from, to: new Date(from.valueOf() + 6 * DAY) };
}

/** "19–25 Oct 2026", or "26 Oct – 1 Nov 2026" when the week spans two months. */
export function weekSpan(w: { from: Date; to: Date }, lang: Lang) {
  const y = w.to.getUTCFullYear();
  return w.from.getUTCMonth() === w.to.getUTCMonth()
    ? `${w.from.getUTCDate()}–${dayMonth(w.to, lang)} ${y}`
    : `${dayMonth(w.from, lang)} – ${dayMonth(w.to, lang)} ${y}`;
}

/** "October 2026" / "Жовтень 2026" / "Październik 2026" */
export function monthTitle(d: Date, lang: Lang) {
  const m = new Intl.DateTimeFormat(lang === "ua" ? "uk" : lang, { month: "long", timeZone: "UTC" }).format(d);
  return `${m.charAt(0).toUpperCase()}${m.slice(1)} ${d.getUTCFullYear()}`;
}

/**
 * Weeks grouped by month for the list of all weeks, newest first. A week goes under the month its Thursday
 * is in, so a week that spans two months is listed where most of its days are (26 Oct – 1 Nov is October).
 */
export function weeksByMonth(weeks: Week[], lang: Lang) {
  const groups: { id: string; title: string; weeks: Week[] }[] = [];
  for (const w of weeks) {
    const thu = new Date(w.from.valueOf() + 3 * DAY);
    const id = `m-${thu.getUTCFullYear()}-${String(thu.getUTCMonth() + 1).padStart(2, "0")}`;
    const g = groups.at(-1);
    if (g?.id === id) g.weeks.push(w);
    else groups.push({ id, title: monthTitle(thu, lang), weeks: [w] });
  }
  return groups;
}

/** Folder names of every incident (any language), to check links to them. */
async function incidentSlugs() {
  return new Set((await getCollection("incidents", visible)).map((e) => e.id.split("/")[0]));
}

/** Weekly digests for one language's lists, newest first. */
export async function getWeeks(lang: Lang): Promise<Week[]> {
  const known = await incidentSlugs();
  return bestPerFolder(await getCollection("weeks", visible), lang)
    .map((entry) => {
      const slug = entry.id.split("/")[0];
      const file = `content/news/weeks/${entry.id}.md`;
      const m = slug.match(WEEK);
      if (!m) throw new Error(`content/news/weeks/${slug}: folder names are the year and ISO week number, like 2026-w44.`);
      const year = Number(m[1]), week = Number(m[2]);
      if (week < 1 || week > 53) throw new Error(`content/news/weeks/${slug}: there is no week ${week}.`);
      entry.data.stories.forEach((s, i) => {
        if (s.incident && !known.has(s.incident)) throw new Error(`${file}: story ${i + 1} links to incident "${s.incident}", but there is no folder content/news/incidents/${s.incident}/.`);
      });
      return { entry, slug, lang: entry.id.split("/")[1] as Lang, year, week, ...isoWeekRange(year, week), date: entry.data.date, example: entry.data.example };
    })
    .sort((a, b) => b.year - a.year || b.week - a.week);
}

/** Incident breakdowns for one language's lists, newest first (by when the incident became public). */
export async function getIncidents(lang: Lang): Promise<Incident[]> {
  const jobSlugs = new Set((await getCollection("jobs")).map((e) => e.id.split("/")[0]));
  const topicSlugs = new Set((await getCollection("topics")).map((e) => e.id.split("/")[0]));
  return bestPerFolder(await getCollection("incidents", visible), lang)
    .map((entry) => {
      const slug = entry.id.split("/")[0];
      const file = `content/news/incidents/${entry.id}.md`;
      // /news/incidents/<type>/ is the list filtered to one type, so an incident can't use a type's name.
      if ((NEWS_TYPES as readonly string[]).includes(slug)) throw new Error(`content/news/incidents/${slug}: "${slug}" is the name of a type filter. Pick another folder name.`);
      for (const j of entry.data.jobs) if (!jobSlugs.has(j)) throw new Error(`${file}: jobs lists "${j}", but there is no folder content/roadmap/jobs/${j}/.`);
      for (const t of entry.data.topics) if (!topicSlugs.has(t)) throw new Error(`${file}: topics lists "${t}", but there is no folder content/roadmap/topics/${t}/.`);
      return { entry, slug, lang: entry.id.split("/")[1] as Lang, type: entry.data.type, date: entry.data.date, example: entry.data.example };
    })
    .sort((a, b) => b.date.valueOf() - a.date.valueOf());
}

/** Languages (of the published ones) a week or incident isn't written in yet. The language switch sends those to /news/. */
export async function newsMissingLangs(collection: "weeks" | "incidents", slug: string): Promise<Lang[]> {
  const all = await getCollection(collection, visible);
  return LANGS.filter((l) => !all.some((e) => e.id === `${slug}/${l}`));
}

/** Where an entry's page is: its own language, or English when it isn't translated yet. */
export const weekHref = (w: Week) => `/${w.lang}/news/${w.slug}/`;
/** The list of every weekly digest. */
export const weeksHref = (lang: Lang) => `/${lang}/news/weeks/`;
export const incidentHref = (i: Incident) => `/${i.lang}/news/incidents/${i.slug}/`;

/** Link to a technique on attack.mitre.org: T1003.001 → /techniques/T1003/001/ */
export const attackUrl = (id: string) => `https://attack.mitre.org/techniques/${id.replace(".", "/")}/`;

/** Splits text on `backticks`, so short bits like event IDs or commands can show as code. */
export function ticks(text: string): { code: boolean; s: string }[] {
  return text.split("`").map((s, i) => ({ code: i % 2 === 1, s })).filter((p) => p.s);
}

/** "Type of attack" filter for the incident lists: All plus each type that has a breakdown, with counts. */
export function typeFilter(lang: Lang, all: Incident[], current?: NewsType): NonNullable<Block["filter"]> {
  const t = ui[lang];
  return {
    label: t.incidentType,
    items: [
      { text: t.all, href: `/${lang}/news/incidents/`, count: all.length, current: !current },
      ...NEWS_TYPES
        .map((k) => ({ k, n: all.filter((i) => i.type === k).length }))
        .filter(({ k, n }) => n > 0 || k === current)
        .map(({ k, n }) => ({ text: t.newsTypes[k], href: `/${lang}/news/incidents/${k}/`, count: n, current: current === k })),
    ],
  };
}

/** "Go to" links: the newer and older week. */
export function weekLinks(lang: Lang, newer?: Week, older?: Week): GoItem[] {
  const t = ui[lang];
  return [
    ...(newer ? [{ kicker: `${t.nextWeek} · ${t.week} ${newer.week}`, text: newer.entry.data.title, href: weekHref(newer), lang: newer.lang !== lang ? newer.lang : undefined }] : []),
    ...(older ? [{ kicker: `${t.prevWeek} · ${t.week} ${older.week}`, text: older.entry.data.title, href: weekHref(older), lang: older.lang !== lang ? older.lang : undefined }] : []),
  ];
}

export type RoadmapLink = { slug: string; title: string; summary: string; href?: string; lang: Lang; kind: "job" | "topic"; learn?: boolean };

/**
 * An incident's Roadmap links. A job links to its "what to learn" page when it has one, otherwise to its
 * card on the field's page. A topic links to its own page when it has text, otherwise to where it's listed
 * on a job's page (one of the incident's jobs first), otherwise it's shown without a link.
 */
export async function roadmapLinks(lang: Lang, jobSlugs: string[], topicSlugs: string[]): Promise<RoadmapLink[]> {
  const jobs = await getJobs(lang);
  const learn = await getLearn();
  const topics = await getTopics(lang);
  const jobLinks = jobSlugs.map((slug) => {
    const j = jobs.find((x) => x.slug === slug)!;
    const href = learn.has(slug) ? `/${lang}/roadmap/${j.field}/${slug}/` : `/${lang}/roadmap/${j.field}/#${slug}`;
    return { slug, title: j.entry.data.title, summary: j.entry.data.summary, href, lang: j.lang, kind: "job" as const, learn: learn.has(slug) };
  });
  const topicLinks = topicSlugs.map((slug) => {
    const x = topics.get(slug)!;
    let href: string | undefined;
    if (x.hasPage) href = `/${lang}/roadmap/topics/${slug}/`;
    else {
      const lists = (job: string) => !!learn.get(job)?.levels.some((l) => l.topics.includes(slug));
      const job = jobSlugs.find(lists) ?? [...learn.keys()].sort().find(lists);
      const j = job && jobs.find((y) => y.slug === job);
      if (j) href = `/${lang}/roadmap/${j.field}/${j.slug}/#t-${slug}`;
    }
    return { slug, title: x.entry.data.title, summary: x.entry.data.summary, href, lang: x.lang, kind: "topic" as const };
  });
  return [...jobLinks, ...topicLinks];
}
