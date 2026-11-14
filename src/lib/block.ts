// Shape of the title block (the box beside each page) and small helpers to build it.
import type { MarkdownHeading } from "astro";
import { iso } from "./articles";
import { MONTHS, type Lang } from "../i18n/ui";

export type Link = { text: string; href: string; hreflang?: string };
export type Row = [string, string | Link[]];
export type Stage = { text: string; state: "done" | "now" | "todo" };
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
  /** The day of the page's latest change after publishing (its newest `revisions:` line), if it has changed: the
   *  box adds an "Updated" row at the bottom and the phone strip says it too. What changed isn't shown on the page,
   *  so the box stays short however often a page changes; the notes go to the RSS feed (src/lib/feed.ts). */
  changed?: string;
  /** A list of filter choices (topics, categories). Shown in the box on wide screens; phones keep the chips in the page. */
  filter?: { label: string; items: FilterItem[] };
  /** What the author is busy with right now (About page): a label, the month, and a few short items, some linked. */
  now?: { label: string; date?: string; items: { kicker: string; text: string; href?: string }[] };
  /** Links to where you'd go next. `label` defaults to "Go to"; `phone: false` keeps them out of the phone fold. */
  go?: { label?: string; items: GoItem[]; phone?: boolean };
  /** One-line summary shown on phones instead of the full box. */
  strip?: string[];
  labels: { stage: string; contents: string; published: string; updated: string; goTo: string; onThisPage: string };
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

/**
 * How tall the box beside a page will be, in px, so that TitleBlock.astro can tell on which screens it fits
 * (see .tb in global.css). `tight`: with its rows tightened (2px less padding, titles cut to one line).
 * It errs on the tall side: it assumes the box at its narrowest (224px, on screens 1340–1399px wide), a wide
 * average letter for each font (Ukrainian is set in Fixel, which is wider), and it wraps whole words. The sizes
 * follow the .tb rules in global.css; change them together.
 */
export function boxHeight(block: Block, lang: Lang, tight: boolean): number {
  const y = tight ? -2 : 0;
  const most = tight ? 1 : 2; // lines a clamped title may take (.tb-clamp)
  const W = 190; // inside the box: 224px minus borders and 16px padding each side
  const lines = (text: string, width: number, size: number, max = Infinity, bold = false) => {
    const per = Math.max(1, Math.floor(width / (size * LETTER[lang] * (bold ? 1.05 : 1))));
    let n = 1, used = 0;
    for (const word of text.split(/\s+/).filter(Boolean)) {
      if (used && used + 1 + word.length <= per) used += 1 + word.length;
      else { if (used) n++; used = word.length; }
      while (used > per) { n++; used -= per; } // a word longer than a line breaks anywhere
    }
    return Math.min(max, n);
  };
  const sum = (xs: number[]) => xs.reduce((a, b) => a + b, 0);
  // A middle section: its top line, padding, the small label in capitals and the gap under it.
  const section = (inner: number) => 1 + (12 + y) + 15.4 + (6 + y / 2) + inner + (10 + y);
  const { key, filter, stages, now, contents, go } = block;
  const rows = footRows(block);

  let h = 2 + (12 + y) + lines(key.label, W, 12.5) * 18.2 + 3 + lines(key.value, W, 17, Infinity, true) * 22.1 + (14 + y);
  if (filter?.items.length)
    h += section(sum(filter.items.map((i) => 2 * (4 + y) + lines(i.text, W - 48, 13.5, Infinity, i.current) * 19.6)));
  if (stages?.length) h += section(sum(stages.map((s) => lines(s.text, W - 18, 13.5) * 19.6)) + 4 * (stages.length - 1));
  if (now?.items.length)
    h += section(sum(now.items.map((i) => 2 * (6 + y) + lines(i.kicker, W - 36, 11.5) * 15 + 2 + lines(i.text, W - 36, 13.5, Infinity, true) * 18.3)));
  if (contents && contents.length > 1) {
    const number = contents.length >= 10 ? 26 : 20;
    h += section(sum(contents.map((c) => 2 * (5 + y) + lines(c.text, W - number, 13.5, most) * 18.3)));
  }
  if (go?.items.length)
    h += section(sum(go.items.map((i, n) => {
      // The arrow spans two grid rows; with no small line above the title, the second one is 9.5px of its own.
      const kicker = i.kicker && i.kicker !== go.items[n - 1]?.kicker ? lines(i.kicker, W - 36, 11.5) * 15 + 1 : 9.5;
      return 2 * (6 + y) + kicker + lines(i.text, W - 36, 13.5, most, true) * 18.3;
    })));
  if (rows.length) {
    const row = ([k, v]: Row) => lines(`${k} ${typeof v === "string" ? v : v.map((l) => l.text).join(" · ")}`, W - 12, 13) * 18.9;
    h += 1 + (11 + y) + (12 + y) + (5 + y / 2) * (rows.length - 1) + sum(rows.map(row));
  }
  return Math.ceil(h);
}
/** Average letter width as a share of the font size, a little on the wide side. */
const LETTER: Record<Lang, number> = { en: 0.54, pl: 0.56, ua: 0.58 };

/** Headings for the "Contents" list: the top level the text actually uses (## or ###). */
export function toc(headings: MarkdownHeading[]) {
  const levels = headings.map((h) => h.depth).filter((d) => d >= 2);
  if (!levels.length) return [];
  const top = Math.min(...levels);
  // The list numbers itself, so drop a leading "1." that a heading may already have.
  return headings.filter((h) => h.depth === top).map((h) => ({ slug: h.slug, text: h.text.replace(/^\d+[.)]\s+/, "") }));
}

/** The day of the latest change after publishing (the newest `revisions:` line), or nothing if there was none.
 *  Pass it to the box as `changed`. */
export function lastChange(revisions: { date: Date }[] = []): string | undefined {
  return revisions.length ? iso(new Date(Math.max(...revisions.map((r) => r.date.valueOf())))) : undefined;
}

/** The facts at the bottom of the box: the page's own rows, with "Updated" and the day of its latest change right
 *  under "Published" (or last, if the page has no "Published" row). */
export function footRows(block: Block): Row[] {
  const rows = [...(block.rows ?? [])];
  if (!block.changed) return rows;
  const at = rows.findIndex(([k]) => k === block.labels.published);
  rows.splice(at < 0 ? rows.length : at + 1, 0, [block.labels.updated, block.changed]);
  return rows;
}

/** Method steps as a progress tracker. `current` is 1-based; 0 or missing = not started. */
export function stageList(steps: { step: string }[], current = 0): Stage[] {
  return steps.map((s, i) => ({ text: s.step, state: i + 1 < current ? "done" : i + 1 === current ? "now" : "todo" }));
}
