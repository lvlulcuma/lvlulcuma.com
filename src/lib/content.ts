// Reads the editable text in content/ for the page templates.
import { getCollection, getEntry, type CollectionEntry } from "astro:content";
import { ALL_LANGS, GUIDE_CATS, HTML_LANG, LANG_LABEL, LANGS, ui, type GuideCat, type Lang, type Platform } from "../i18n/ui";
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

/** True when a text links to this guide (/<lang>/guides/<slug>/, any language). */
const linksTo = (body: string | undefined, slug: string) =>
  new RegExp(`\\(/(?:${ALL_LANGS.join("|")})/guides/${slug}/?(?:#[^)]*)?\\)`).test(body ?? "");

/** True when a page points to this guide in any way: a Markdown link, an HTML link in its front matter (the words of
 *  Get started's pictures), a "Step by step" mention in its text (<!-- guide: a, b -->), or a `guide:` field in its
 *  front matter (a card's mention). */
const usesGuide = (text: string | undefined, slug: string) =>
  linksTo(text, slug) ||
  new RegExp(`href="/(?:${ALL_LANGS.join("|")})/guides/${slug}/?(?:#[^"]*)?"`).test(text ?? "") ||
  guideMentionsIn(text).includes(slug);

/** A "Step by step" mention in a page's text: <!-- guide: install-utm --> or, for one task on several systems,
 *  <!-- guide: set-up-kali-virtualbox, set-up-kali-utm -->, at the end of the paragraph or list item that talks
 *  about the task (or on its own line after it). fillGuideRefs() turns it into a line of links. */
export const GUIDE_REF = /<!--\s*guides?:\s*([a-z0-9,\s-]+?)\s*-->/g;
const slugList = (s: string) => s.split(",").map((x) => x.trim()).filter(Boolean);
/** Every guide a page mentions: in its text, and in `guide:` / `dockerGuide:` fields of its front matter (as JSON). */
export const guideMentionsIn = (text: string | undefined) => [
  ...[...(text ?? "").matchAll(GUIDE_REF)].flatMap((m) => slugList(m[1])),
  ...[...(text ?? "").matchAll(/"(?:guide|dockerGuide)":"([a-z0-9-]+)"/g)].map((m) => m[1]),
];

export type GuidePlanned = { slug: string; title: string; category: GuideCat; platforms: Platform[]; scope?: string };

/** content/guides/planned.yml: guides that pages already point to but that aren't published yet. */
export async function getGuidePlan(): Promise<GuidePlanned[]> {
  const entry = await getEntry("guidePlan", "planned");
  const list = (entry?.data.guides ?? []) as GuidePlanned[];
  const published = new Set((await getCollection("guides", (e) => !e.data.draft)).map((e) => e.id.split("/")[0]));
  const seen = new Set<string>();
  for (const p of list) {
    if (seen.has(p.slug)) throw new Error(`content/guides/planned.yml: "${p.slug}" is listed twice.`);
    seen.add(p.slug);
    if (published.has(p.slug)) throw new Error(`content/guides/planned.yml: "${p.slug}" is published now. Delete its entry from planned.yml.`);
  }
  return list;
}

/** "Windows only", or "Windows, macOS and Linux". */
export function platformLine(lang: Lang, platforms: Platform[]) {
  const t = ui[lang];
  const names = platforms.map((p) => t.platforms[p]);
  return names.length === 1 ? t.platformOnly.replace("{os}", names[0]) : `${names.slice(0, -1).join(", ")} ${t.listAnd} ${names.at(-1)}`;
}

export type StepRow = { slug: string; title: string; meta: string; href?: string; lang: Lang };

/** The guides a "Step by step" mention names, in the order given. A published guide gets its link, time and systems;
 *  a planned one its working title, systems and "Coming soon". A folder that's neither stops the build, so a typo
 *  never ships. `where` names the file for that message. */
export async function stepRows(lang: Lang, slugs: string[], where: string): Promise<StepRow[]> {
  const t = ui[lang];
  const all = await getGuides(lang);
  const plan = await getGuidePlan();
  return slugs.map((slug) => {
    const g = all.find((x) => x.slug === slug);
    if (g) return { slug, title: g.entry.data.title, meta: `~${g.time} ${t.min} · ${platformLine(lang, g.entry.data.platforms)}`, href: `/${g.lang}/guides/${g.slug}/`, lang: g.lang };
    const p = plan.find((x) => x.slug === slug);
    if (p) return { slug, title: p.title, meta: `${platformLine(lang, p.platforms)} · ${t.comingSoon}`, lang: "en" as Lang };
    throw new Error(`${where}: names the guide "${slug}", but there is no guide content/guides/${slug}/ and it isn't in content/guides/planned.yml.`);
  });
}

const esc = (x: string) => x.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** A "Step by step" line: where a page talks about a task, the guide that shows every click. A published guide is a
 *  link with its time; one that isn't written yet (content/guides/planned.yml) is quiet text with "Coming soon".
 *  The full line ("Step by step  Install UTM on a Mac") goes in running text; `short` ("Step-by-step guide") goes in
 *  a card that already names the tool. Guides are English-only for now, so other languages mark them EN.
 *  Returned as HTML, because it often sits inside a paragraph or a list item. */
export function guideRefHtml(lang: Lang, rows: StepRow[], short = false): string {
  const t = ui[lang];
  const mark = (r: StepRow) => (r.lang !== lang ? `<span class="gc-lang">${LANG_LABEL[r.lang]}</span>` : "");
  const items = rows.map((r) => {
    const name = short ? `${esc(t.stepByStepShort)}<span class="vh">: ${esc(r.title)}</span>` : `<span lang="${HTML_LANG[r.lang]}">${esc(r.title)}</span>`;
    const time = r.href ? esc(r.meta.split(" · ")[0]) : esc(t.comingSoon);
    return r.href
      ? `<span class="gref-i"><a href="${r.href}"${r.lang !== lang ? ` hreflang="${HTML_LANG[r.lang]}"` : ""}>${name}${mark(r)}<span class="arr" aria-hidden="true"></span></a> <span class="gref-m">${time}</span></span>`
      : `<span class="gref-i soon"><span class="gref-t">${name}${mark(r)}</span> <span class="gref-m">${time}</span></span>`;
  });
  return short
    ? `<span class="gref short">${items.join("")}</span>`
    : `<span class="gref"><span class="gref-k">${esc(t.stepByStep)}</span><span class="gref-list">${items.join("")}</span></span>`;
}

/** Turns every <!-- guide: … --> in a page's rendered text into its "Step by step" line. */
export async function fillGuideRefs(html: string, lang: Lang, where: string): Promise<string> {
  const found = [...html.matchAll(GUIDE_REF)];
  const lines = await Promise.all(found.map(async (m) => guideRefHtml(lang, await stepRows(lang, slugList(m[1]), where))));
  let i = 0;
  return html.replace(GUIDE_REF, () => lines[i++]);
}

/** A guide for several systems keeps each system's steps apart: a line <!-- for: windows --> (or several systems,
 *  <!-- for: macos, linux -->) opens a box labelled with the system's name on its top edge, so readers find their
 *  part at a glance and skip the other. The box runs until the next such line, a line <!-- /for --> (text for every
 *  system follows), or the section's end (the next ## heading). The label is a heading for screen readers too. */
const LANE = /<!--\s*(?:for:\s*([a-z,\s]+?)|\/for)\s*-->|<h2[\s>]/g;
export function fillLanes(html: string, lang: Lang, platforms: Platform[], where: string): string {
  const t = ui[lang];
  let open = false;
  const out = html.replace(LANE, (m, list?: string) => {
    const close = open ? "</div>" : "";
    open = false;
    if (m.startsWith("<h2")) return close + m;
    if (list === undefined) return close;
    const systems = list.split(",").map((s) => s.trim()).filter(Boolean) as Platform[];
    for (const s of systems) if (!platforms.includes(s)) throw new Error(`${where}: <!-- for: ${list} --> names "${s}", which isn't in the guide's platforms: [${platforms.join(", ")}].`);
    open = true;
    const names = systems.map((s) => t.platforms[s]);
    const label = names.length === 1 ? names[0] : `${names.slice(0, -1).join(", ")} ${t.listAnd} ${names.at(-1)}`;
    return `${close}<div class="lane"><h3 class="lane-tab">${label}</h3>`;
  });
  return open ? `${out}</div>` : out;
}

/** Guides that send the reader to this one from one of their steps (a link in their text), without needing it
 *  first. That's how the short, reusable how-tos (Quick steps) are used: "Used in" on their page and their card. */
export const guideMentions = (all: Guide[], g: Guide) =>
  all.filter((x) => x !== g && !x.entry.data.requires.includes(g.slug) && linksTo(x.entry.body, g.slug));

/** Other pages on the site that link to a guide in their text (lab ideas, the lab's "Get started" page, articles,
 *  CWE write-ups), found by looking for /<lang>/guides/<slug>/ in them, so a guide shows where it's used without
 *  anyone keeping a list. Guides are English-only for now, so English links count on every language's page. */
export async function guideLinks(lang: Lang, slug: string): Promise<{ kicker: string; title: string; href: string; lang: Lang }[]> {
  const t = ui[lang];
  const links = (body: string | undefined) => usesGuide(body, slug);
  const out: { kicker: string; title: string; href: string; lang: Lang }[] = [];
  for (const i of await getIdeas(lang)) if (links(i.entry.body)) out.push({ kicker: t.nav.lab, title: i.entry.data.title, href: `/${i.lang}/lab/${i.slug}/`, lang: i.lang });
  const start = await getPage("lab-start", lang);
  if (links(start.entry.body) || links(JSON.stringify(start.data.visuals ?? {}).replaceAll('\\"', '"'))) out.push({ kicker: t.nav.lab, title: start.data.title, href: `/${lang}/lab/start/`, lang });
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
