// The CWE section: common software weaknesses, each explained for both attackers and defenders.
//
// content/cwe/owasp-2025.yml  the OWASP Top 10:2025 categories and the 249 CWEs mapped to them
// content/cwe/plan.yml        which write-up explains which CWEs (every CWE on exactly one page), in writing order
// content/cwe/<id>/<lang>.md  one write-up (the folder name is its main CWE number)
//
// A write-up has parts for everyone, parts for attackers and parts for defenders. A "##" heading ending in
// <!-- attack --> or <!-- defend --> starts a part for one side; it runs until the next "##" heading.
// Every write-up has three addresses: /<lang>/cwe/<id>/ (everything), …/<id>/attack/ and …/<id>/defend/
// (the parts for the other side left out). The /cwe/ list has the same three views, so a reader's choice
// carries on as they click from page to page. All of it is plain HTML and CSS: no JavaScript.
import { getCollection, getEntry, type CollectionEntry } from "astro:content";
import { LANGS, ui, type Lang } from "../i18n/ui";
import { readingMinutes } from "./articles";
import type { Block } from "./block";

export const VIEWS = ["both", "attack", "defend"] as const;
export type View = (typeof VIEWS)[number];
export type Side = "attack" | "defend";

export type CweCategory = { id: string; code: string; name: string; url: string; cwes: [number, string][] };

/** The ten OWASP Top 10:2025 categories with their CWEs, in OWASP's order. */
export async function getCategories(): Promise<CweCategory[]> {
  const entry = await getEntry("cweMap", "owasp-2025");
  if (!entry) throw new Error("Missing file: content/cwe/owasp-2025.yml");
  return entry.data.categories as CweCategory[];
}

export type PlanPage = { cwe: number; covers: number[]; kind: "full" | "short"; title: string };

/**
 * The plan (content/cwe/plan.yml): which write-up explains which CWEs, in writing order.
 * Checked when building: every CWE in owasp-2025.yml must be on exactly one page, and nothing else.
 */
export async function getPlan(): Promise<PlanPage[]> {
  const entry = await getEntry("cwePlan", "plan");
  if (!entry) throw new Error("Missing file: content/cwe/plan.yml");
  const pages = entry.data.pages as PlanPage[];
  const listed = new Set((await getCategories()).flatMap((c) => c.cwes.map(([n]) => n)));
  const seen = new Map<number, number>();
  for (const p of pages) for (const n of [p.cwe, ...p.covers]) {
    if (!listed.has(n)) throw new Error(`content/cwe/plan.yml: CWE-${n} (page CWE-${p.cwe}) isn't in content/cwe/owasp-2025.yml.`);
    if (seen.has(n)) throw new Error(`content/cwe/plan.yml: CWE-${n} is on two pages, CWE-${seen.get(n)} and CWE-${p.cwe}.`);
    seen.set(n, p.cwe);
  }
  const missing = [...listed].filter((n) => !seen.has(n));
  if (missing.length) throw new Error(`content/cwe/plan.yml: these CWEs aren't on any page yet: ${missing.map((n) => `CWE-${n}`).join(", ")}.`);
  return pages;
}

export type Cwe = {
  entry: CollectionEntry<"cwe">;
  /** The CWE number, which is also the folder name. */
  id: number;
  /** The language this write-up is in. Can differ from the page's language: see getCwes. */
  lang: Lang;
  category: CweCategory;
  /** The other CWEs this write-up explains, from content/cwe/plan.yml. */
  covers: number[];
};

const visible = (e: CollectionEntry<"cwe">) => import.meta.env.DEV || !e.data.draft;

/**
 * Every written weakness, for one language. One that isn't translated yet is included in English
 * (its `lang` is then "en"), so the lists stay complete. Sorted by CWE number.
 */
export async function getCwes(lang: Lang): Promise<Cwe[]> {
  const categories = await getCategories();
  const plan = await getPlan();
  const rank = (l: string) => (l === lang ? 0 : l === "en" ? 1 : 2);
  const best = new Map<string, CollectionEntry<"cwe">>();
  for (const e of await getCollection("cwe", visible)) {
    const [folder, l] = e.id.split("/");
    const cur = best.get(folder);
    if (!cur || rank(l) < rank(cur.id.split("/")[1])) best.set(folder, e);
  }
  return [...best.values()].map((entry) => {
    const [folder, l] = entry.id.split("/");
    const file = `content/cwe/${folder}/${l}.md`;
    const id = entry.data.cwe;
    // Catch mistakes when building, instead of shipping a wrong page.
    if (String(id) !== folder) throw new Error(`${file}: cwe: ${id} doesn't match the folder name "${folder}".`);
    const category = categories.find((c) => c.code === entry.data.owasp);
    if (!category) throw new Error(`${file}: owasp: "${entry.data.owasp}" isn't a category in content/cwe/owasp-2025.yml.`);
    if (!category.cwes.some(([n]) => n === id)) throw new Error(`${file}: CWE-${id} isn't listed under ${category.code} in content/cwe/owasp-2025.yml.`);
    const page = plan.find((p) => p.cwe === id);
    if (!page) {
      const host = plan.find((p) => p.covers.includes(id));
      throw new Error(`${file}: CWE-${id} isn't a page of its own in content/cwe/plan.yml${host ? ` (it's explained on the CWE-${host.cwe} page)` : ""}.`);
    }
    return { entry, id, lang: l as Lang, category, covers: page.covers };
  }).sort((a, b) => a.id - b.id);
}

/** Languages a write-up hasn't been translated into yet. */
export async function cweMissingLangs(id: number): Promise<Lang[]> {
  const entries = await getCollection("cwe", visible);
  return LANGS.filter((l) => !entries.some((e) => e.id === `${id}/${l}`));
}

/** Which write-up explains a CWE number: its own page, or the page that covers it in content/cwe/plan.yml. */
export function writtenFor(all: Cwe[], n: number) {
  return all.find((c) => c.id === n) ?? all.find((c) => c.covers.includes(n));
}

const tail = (view: View) => (view === "both" ? "" : `${view}/`);
export const listHref = (lang: Lang, view: View) => `/${lang}/cwe/${tail(view)}`;
export const cweHref = (lang: Lang, id: number, view: View) => `/${lang}/cwe/${id}/${tail(view)}`;

/** The "Show" choice in the box: everything, or one side only. Each choice is its own page. */
export function viewFilter(lang: Lang, current: View, href: (v: View) => string): NonNullable<Block["filter"]> {
  const t = ui[lang];
  return { label: t.cweShow, items: VIEWS.map((v) => ({ text: t[`cweView_${v}`], href: href(v), current: v === current })) };
}

const MARK = /<!--\s*(attack|defend)\s*-->/;

/**
 * Wraps each "##" part of a rendered write-up that's meant for one side in <section class="for-attack"> or
 * <section class="for-defend">, with a small label above its heading. Returns the new HTML and which
 * heading (by id) belongs to which side, for the contents list.
 */
/** A heading marked for a side keeps a trailing "-" in its slug (from the stripped comment); drop it. */
export const cleanSlug = (s: string) => s.replace(/-+$/, "");

export function markSides(html: string, file: string, labels: Record<Side, string>) {
  const sides = new Map<string, Side>();
  const parts = html.split(/(?=<h2[\s>])/);
  const out = parts.map((part) => {
    const head = part.match(/^<h2[^>]*>[\s\S]*?<\/h2>/);
    const side = head?.[0].match(MARK)?.[1] as Side | undefined;
    if (!head || !side) return part;
    // A part must be whole blocks; a margin note right after a "##" heading wraps the heading in a <div>,
    // which would be cut in half here. Put some text between the heading and the note instead.
    const opens = (part.match(/<div[\s>]/g) ?? []).length, closes = (part.match(/<\/div>/g) ?? []).length;
    if (opens !== closes) throw new Error(`${file}: the part "${head[0].replace(/<[^>]+>/g, "").trim()}" can't be marked for one side. Don't put a margin note right after its heading.`);
    const id = head[0].match(/\bid="([^"]+)"/)?.[1];
    // Strip the marker from the heading, and the trailing "-" it leaves in the id, so the anchor is clean.
    let h2 = head[0].replace(/\s*<!--\s*(attack|defend)\s*-->\s*/, "");
    if (id) { sides.set(cleanSlug(id), side); h2 = h2.replace(`id="${id}"`, `id="${cleanSlug(id)}"`); }
    return `<section class="for-${side}"><p class="for-tag">${labels[side]}</p>${h2}${part.slice(head[0].length)}</section>`;
  });
  return { html: out.join(""), sides };
}

/** Reading time for one view: the parts for the other side don't count. */
export function viewMinutes(body: string, view: View) {
  if (view === "both") return readingMinutes(body);
  const kept = body.split(/^(?=## )/m).filter((part) => {
    const side = part.match(/^## [^\n]*<!--\s*(attack|defend)\s*-->/)?.[1];
    return !side || side === view;
  });
  return readingMinutes(kept.join("\n"));
}
