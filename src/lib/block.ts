// Shape of the title block (the box beside each page) and small helpers to build it.
import type { MarkdownHeading } from "astro";
import { iso } from "./articles";
import { MONTHS, type Lang } from "../i18n/ui";

export type Link = { text: string; href: string; hreflang?: string };
export type Row = [string, string | Link[]];
export type Stage = { text: string; state: "done" | "now" | "todo" };
export type Revision = { rev: string; date: string; note: string };
/** One choice in a filter list. Each choice is its own page, so no JavaScript is needed. */
export type FilterItem = { text: string; href: string; count?: number; current?: boolean };
/** A "Go to" link: an optional small line above (e.g. "Next article · 04") and what it leads to. */
export type GoItem = { kicker?: string; text: string; href: string; hreflang?: string; lang?: string };

export type Block = {
  /** The big fact at the top of the box: a plain-words label and its value. */
  key: { label: string; value: string };
  rows?: Row[];
  stages?: Stage[];
  contents?: { slug: string; text: string }[];
  revisions?: Revision[];
  /** A list of filter choices (topics, categories). Shown in the box on wide screens; phones keep the chips in the page. */
  filter?: { label: string; items: FilterItem[] };
  /** What the author is busy with right now (About page): a label, the month, and a few short items, some linked. */
  now?: { label: string; date?: string; items: { kicker: string; text: string; href?: string }[] };
  /** Links to where you'd go next. `label` defaults to "Go to"; `phone: false` keeps them out of the phone fold. */
  go?: { label?: string; items: GoItem[]; phone?: boolean };
  /** One-line summary shown on phones instead of the full box. */
  strip?: string[];
  labels: { stage: string; contents: string; revisions: string; goTo: string; onThisPage: string };
};

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
/** "Oct 2026" / "Paź 2026" / "Жов 2026" */
export const monthYear = (d: Date, lang: Lang) => `${cap(MONTHS[lang][d.getUTCMonth()])} ${d.getUTCFullYear()}`;
/** "30 Nov" / "30 lis" / "30 лис" */
export const dayMonth = (d: Date, lang: Lang) => `${d.getUTCDate()} ${MONTHS[lang][d.getUTCMonth()]}`;
/** "1 article", "3 articles", "5 artykułów", "6 kroków", … using the forms in content/ui/<lang>.yml */
export function countWord(n: number, lang: Lang, t: Record<string, string>, word: string) {
  const form = new Intl.PluralRules(lang === "ua" ? "uk" : lang).select(n);
  return `${n} ${t[`${word}_${form}`] ?? t[`${word}_other`]}`;
}
export const countArticles = (n: number, lang: Lang, t: Record<string, string>) => countWord(n, lang, t, "article");

/** Headings for the "Contents" list: the top level the text actually uses (## or ###). */
export function toc(headings: MarkdownHeading[]) {
  const levels = headings.map((h) => h.depth).filter((d) => d >= 2);
  if (!levels.length) return [];
  const top = Math.min(...levels);
  // The list numbers itself, so drop a leading "1." that a heading may already have.
  return headings.filter((h) => h.depth === top).map((h) => ({ slug: h.slug, text: h.text.replace(/^\d+[.)]\s+/, "") }));
}

/** REV A is the first publication; each entry in `revisions:` adds B, C, … in date order. */
export function revisionLog(published: Date, publishedLabel: string, extra: { date: Date; note: string }[] = []): Revision[] {
  const later = [...extra].sort((a, b) => a.date.valueOf() - b.date.valueOf());
  return [{ date: published, note: publishedLabel }, ...later].map((r, i) => ({
    rev: String.fromCharCode(65 + i),
    date: iso(r.date),
    note: r.note,
  }));
}

/** Method steps as a progress tracker. `current` is 1-based; 0 or missing = not started. */
export function stageList(steps: { step: string }[], current = 0): Stage[] {
  return steps.map((s, i) => ({ text: s.step, state: i + 1 < current ? "done" : i + 1 === current ? "now" : "todo" }));
}
