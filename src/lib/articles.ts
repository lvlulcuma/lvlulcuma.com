import { getCollection, type CollectionEntry } from "astro:content";
import { LANGS, TOPICS, ui, type Lang, type Topic } from "../i18n/ui";
import type { Block } from "./block";

export type Article = {
  entry: CollectionEntry<"articles">;
  lang: Lang;
  slug: string;
  /** The article's number in hex, like the hacker zine Phrack: 0x01, 0x02 … 0x09, 0x0A … 0x10. Numbered by date across the whole site. */
  issue: string;
  /** The same number in plain digits (3), for the hover hint. */
  n: number;
  mins: number;
  date: Date;
};

const visible = (e: CollectionEntry<"articles">) => import.meta.env.DEV || !e.data.draft;

export const iso = (d: Date) => d.toISOString().slice(0, 10);

/** Code blocks and margin notes ("> [!ASIDE]") don't count: they are side reading, not the article. */
export function readingMinutes(text: string): number {
  const words = text
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/^>[ \t]*\[!ASIDE\][^\n]*(?:\n>[^\n]*)*/gim, " ")
    .split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

/** Last Monday of a month (month0 is 0-11), in UTC. */
export function lastMonday(year: number, month0: number): Date {
  const d = new Date(Date.UTC(year, month0 + 1, 0));
  const back = (d.getUTCDay() + 6) % 7;
  d.setUTCDate(d.getUTCDate() - back);
  return d;
}

/** The planned date of the issue after `after`: the last Monday of the following month. */
export function nextIssueDate(after: Date): Date {
  return lastMonday(after.getUTCFullYear(), after.getUTCMonth() + 1);
}

async function allVisible() {
  return getCollection("articles", visible);
}

/** 3 → "0x03", 10 → "0x0A", 16 → "0x10" */
export const hexIssue = (n: number) => `0x${n.toString(16).toUpperCase().padStart(2, "0")}`;

/** Each article folder's number (1, 2, 3 …), in the order the articles were first published. */
function issueNumbers(entries: CollectionEntry<"articles">[]): Map<string, number> {
  const first = new Map<string, number>();
  for (const e of entries) {
    const slug = e.id.split("/")[0];
    const t = e.data.date.valueOf();
    if (!first.has(slug) || t < first.get(slug)!) first.set(slug, t);
  }
  const ordered = [...first.entries()].sort((a, b) => a[1] - b[1]).map(([s]) => s);
  return new Map(ordered.map((s, i) => [s, i + 1]));
}

/** Articles for one language, newest first. */
export async function getArticles(lang: Lang): Promise<Article[]> {
  const all = await allVisible();
  const numbers = issueNumbers(all);
  return all
    .filter((e) => e.id.endsWith(`/${lang}`))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
    .map((entry) => {
      const slug = entry.id.split("/")[0];
      const n = numbers.get(slug)!;
      return { entry, lang, slug, issue: hexIssue(n), n, mins: readingMinutes(entry.body ?? ""), date: entry.data.date };
    });
}

/** Languages in which an article slug does not exist (used by the language switcher). */
export async function missingLangs(slug: string): Promise<Lang[]> {
  const all = await allVisible();
  return LANGS.filter((l) => !all.some((e) => e.id === `${slug}/${l}`));
}

/** The "Topic" filter for the box beside the articles list: All plus each topic, with counts. */
export function topicFilter(lang: Lang, all: Article[], current?: Topic): NonNullable<Block["filter"]> {
  const t = ui[lang];
  return {
    label: t.topic,
    items: [
      { text: t.all, href: `/${lang}/articles/`, count: all.length, current: !current },
      ...TOPICS.map((k) => ({ text: t.topics[k], href: `/${lang}/articles/${k}/`, count: all.filter((a) => a.entry.data.topic === k).length, current: current === k })),
    ],
  };
}

/** "Go to" links for an article: the next and previous article (and anything else passed in). */
export function articleLinks(lang: Lang, newer?: Article, older?: Article) {
  const t = ui[lang];
  return [
    ...(newer ? [{ kicker: `${t.nextIssue} · ${newer.issue}`, text: newer.entry.data.title, href: `/${lang}/articles/${newer.slug}/` }] : []),
    ...(older ? [{ kicker: `${t.prev} · ${older.issue}`, text: older.entry.data.title, href: `/${lang}/articles/${older.slug}/` }] : []),
  ];
}
