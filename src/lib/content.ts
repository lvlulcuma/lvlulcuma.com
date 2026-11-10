// Reads the editable text in content/ for the page templates.
import { getCollection, getEntry, type CollectionEntry } from "astro:content";
import { ALL_LANGS, GUIDE_CATS, LANGS, ui, type GuideCat, type Lang } from "../i18n/ui";
import { getArticles, iso } from "./articles";
import type { Block } from "./block";
import { getCwes } from "./cwe";
import { getIdeas } from "./lab";

export type PageName = "home" | "news" | "articles" | "roadmap" | "research" | "lab" | "lab-start" | "lab-rules" | "about" | "contact" | "colophon" | "cwe";

/** One page's text in one language: content/pages/<name>/<lang>.md */
export async function getPage(name: PageName, lang: Lang) {
  const entry = await getEntry("pages", `${name}/${lang}`);
  if (!entry) throw new Error(`Missing file: content/pages/${name}/${lang}.md`);
  // Fields are free-form per page; templates read the ones they need.
  return { entry, data: entry.data as Record<string, any>, updated: entry.data.updated ? iso(entry.data.updated) : "" };
}

export async function getSettings() {
  const entry = await getEntry("settings", "settings");
  if (!entry) throw new Error("Missing file: content/settings.yml");
  return entry.data;
}

/** Your accounts elsewhere (GitHub, Medium), from content/settings.yml. One left empty is skipped. */
export async function getProfiles() {
  const s = await getSettings();
  return [
    { name: "GitHub", href: s.github },
    { name: "Medium", href: s.medium },
  ].filter((p) => p.href).map((p) => ({ ...p, text: p.href.replace(/^https:\/\/(www\.)?/, "") }));
}

export type Project = { entry: CollectionEntry<"research">; slug: string };

/** Research projects in one language, in the order set by `order:`. */
export async function getProjects(lang: Lang): Promise<Project[]> {
  const all = await getCollection("research", (e) => e.id.endsWith(`/${lang}`));
  return all
    .sort((a, b) => a.data.order - b.data.order)
    .map((entry) => ({ entry, slug: entry.id.split("/")[0] }));
}

export type Guide = {
  entry: CollectionEntry<"guides">;
  slug: string;
  /** The language this guide's text is in. Can differ from the page's language: see getGuides. */
  lang: Lang;
  category: GuideCat;
  date: Date;
  /** Rough minutes to complete, from the guide's `time:` field. */
  time: number;
  /** Numbered steps in the guide (top-level "1." lines). */
  steps: number;
};

const visibleGuide = (e: CollectionEntry<"guides">) => import.meta.env.DEV || !e.data.draft;

/**
 * Every guide, for the guides list in one language. A guide that isn't translated into that
 * language yet is included in English (its `lang` is then "en"), so the Polish and Ukrainian
 * lists stay complete. Sorted by category, then each guide's `order`, then date.
 */
export async function getGuides(lang: Lang): Promise<Guide[]> {
  const entries = await getCollection("guides", visibleGuide);
  const rank = (l: string) => (l === lang ? 0 : l === "en" ? 1 : 2);
  const best = new Map<string, CollectionEntry<"guides">>();
  for (const e of entries) {
    const [slug, l] = e.id.split("/");
    const cur = best.get(slug);
    if (!cur || rank(l) < rank(cur.id.split("/")[1])) best.set(slug, e);
  }
  const guides = [...best.values()]
    .map((entry) => ({
      entry,
      slug: entry.id.split("/")[0],
      lang: entry.id.split("/")[1] as Lang,
      category: entry.data.category,
      date: entry.data.date,
      time: entry.data.time,
      steps: ((entry.body ?? "").match(/^\d+\.\s/gm) ?? []).length,
    }))
    .sort((a, b) =>
      GUIDE_CATS.indexOf(a.category) - GUIDE_CATS.indexOf(b.category) ||
      a.entry.data.order - b.entry.data.order ||
      b.date.valueOf() - a.date.valueOf());
  // Catch typos in `requires:` when building, instead of shipping a broken link.
  const slugs = new Set(guides.map((g) => g.slug));
  for (const g of guides) for (const r of g.entry.data.requires)
    if (!slugs.has(r)) throw new Error(`content/guides/${g.slug}/${g.lang}.md: requires "${r}", but there is no guide folder with that name.`);
  return guides;
}

/** Languages a guide hasn't been translated into yet. */
export async function guideMissingLangs(slug: string): Promise<Lang[]> {
  const entries = await getCollection("guides", visibleGuide);
  return LANGS.filter((l) => !entries.some((e) => e.id === `${slug}/${l}`));
}

/** Guides that list this one under `requires:`. */
export const dependents = (all: Guide[], g: Guide) => all.filter((x) => x.entry.data.requires.includes(g.slug));

/** Paths through the guides, worked out from `requires:`: each guide that needs others and that no other guide
 *  builds on is a goal, and its path is everything it needs, in the order to do it (each guide after the ones it
 *  needs), then the goal itself. Shown as "Follow a path" on the guides list. */
export function guidePaths(all: Guide[]): { goal: Guide; steps: Guide[]; time: number }[] {
  const bySlug = new Map(all.map((g) => [g.slug, g]));
  return all
    .filter((g) => g.entry.data.requires.length > 0 && dependents(all, g).length === 0)
    .map((goal) => {
      const steps: Guide[] = [];
      const visit = (g: Guide) => {
        if (steps.includes(g)) return;
        for (const r of g.entry.data.requires) visit(bySlug.get(r)!);
        steps.push(g);
      };
      visit(goal);
      return { goal, steps, time: steps.reduce((n, g) => n + g.time, 0) };
    })
    .sort((a, b) => b.steps.length - a.steps.length || a.time - b.time);
}

/** Other pages on the site that link to a guide in their text (lab ideas, the lab's "Get started" page, articles,
 *  CWE write-ups), found by looking for /<lang>/guides/<slug>/ in them, so a guide shows where it's used without
 *  anyone keeping a list. Guides are English-only for now, so English links count on every language's page. */
export async function guideLinks(lang: Lang, slug: string): Promise<{ kicker: string; title: string; href: string; lang: Lang }[]> {
  const t = ui[lang];
  const links = (body: string | undefined) => new RegExp(`\\(/(?:${ALL_LANGS.join("|")})/guides/${slug}/?(?:#[^)]*)?\\)`).test(body ?? "");
  const out: { kicker: string; title: string; href: string; lang: Lang }[] = [];
  for (const i of await getIdeas(lang)) if (links(i.entry.body)) out.push({ kicker: t.nav.lab, title: i.entry.data.title, href: `/${i.lang}/lab/${i.slug}/`, lang: i.lang });
  const start = await getPage("lab-start", lang);
  if (links(start.entry.body)) out.push({ kicker: t.nav.lab, title: start.data.title, href: `/${lang}/lab/start/`, lang });
  for (const a of await getArticles(lang)) if (links(a.entry.body)) out.push({ kicker: t.nav.articles, title: a.entry.data.title, href: `/${lang}/articles/${a.slug}/`, lang });
  for (const c of await getCwes(lang)) if (links(c.entry.body)) out.push({ kicker: `CWE-${c.id}`, title: c.entry.data.title, href: `/${c.lang}/cwe/${c.id}/`, lang: c.lang });
  return out;
}

/** Resolves an article's `related:` value ("research/<slug>", "lab/<idea>", "lab/start" or "lab/rules") to a link. */
export async function pageRef(lang: Lang, path: string): Promise<{ href: string; tag: string; title: string } | null> {
  const [section, slug] = path.replace(/^\/+|\/+$/g, "").split("/");
  if (section === "research") {
    const p = (await getProjects(lang)).find((x) => x.slug === slug && x.entry.data.page);
    if (p) return { href: `/${lang}/research/${p.slug}/`, tag: ui[lang].nav.research, title: p.entry.data.title };
  }
  if (section === "lab" && (slug === "start" || slug === "rules")) {
    const page = await getPage(slug === "start" ? "lab-start" : "lab-rules", lang);
    return { href: `/${lang}/lab/${slug}/`, tag: ui[lang].nav.lab, title: page.data.title };
  }
  if (section === "lab") {
    const i = (await getIdeas(lang)).find((x) => x.slug === slug);
    if (i) return { href: `/${i.lang}/lab/${i.slug}/`, tag: ui[lang].nav.lab, title: i.entry.data.title };
  }
  return null;
}

/** The "Category" filter for the box beside the guides list: All plus each category, with counts. */
export function categoryFilter(lang: Lang, all: Guide[], current?: GuideCat): NonNullable<Block["filter"]> {
  const t = ui[lang];
  return {
    label: t.category,
    items: [
      { text: t.all, href: `/${lang}/guides/`, count: all.length, current: !current },
      // Only categories that have a guide (and the one being shown), like the type filter on News.
      ...GUIDE_CATS.filter((c) => c === current || all.some((g) => g.category === c))
        .map((c) => ({ text: t.guideCats[c], href: `/${lang}/guides/${c}/`, count: all.filter((g) => g.category === c).length, current: current === c })),
    ],
  };
}
