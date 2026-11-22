// Forensics: the /forensics/ hub and its write-ups.
//
// The hub doesn't hold lessons of its own. It gathers what the rest of the site already has for digital forensics:
//   - the learning path of a Roadmap job (`path:` in content/pages/forensics/<lang>.md), level by level, each topic
//     linked once it has its own page (content/roadmap/topics/<topic>/), so the hub fills up as topics are written;
//   - the lab ideas in the "forensics" group (content/lab/<idea>/, `group: forensics`);
//   - the write-ups (content/forensics/writeups/<slug>/<lang>.md), worked cases from a home lab or a public challenge.
import { getCollection, type CollectionEntry } from "astro:content";
import type { Lang } from "../i18n/ui";
import { getIdeas } from "./lab";
import { getTopics } from "./roadmap";

export type Writeup = {
  entry: CollectionEntry<"writeups">;
  slug: string;
  /** The language this write-up's text is in: the page's own, or English while it isn't translated yet. */
  lang: Lang;
  date: Date;
};

/** Addresses under /<lang>/forensics/writeups/ that a write-up folder may not use. */
const RESERVED = ["rss.xml"];

const visible = (e: CollectionEntry<"writeups">) => import.meta.env.DEV || !e.data.draft;

export const writeupHref = (w: Writeup) => `/${w.lang}/forensics/writeups/${w.slug}/`;

/** Every write-up in one language (English where it isn't translated yet), newest first. Checks its `topics:` and
 *  `lab:` against the Roadmap and the lab ideas, so a typo stops the build instead of shipping a dead link. */
export async function getWriteups(lang: Lang): Promise<Writeup[]> {
  const rank = (l: string) => (l === lang ? 0 : l === "en" ? 1 : 2);
  const best = new Map<string, CollectionEntry<"writeups">>();
  for (const e of await getCollection("writeups", visible)) {
    const [slug, l] = e.id.split("/");
    const cur = best.get(slug);
    if (!cur || rank(l) < rank(cur.id.split("/")[1])) best.set(slug, e);
  }
  const list = [...best.values()]
    .map((entry) => ({ entry, slug: entry.id.split("/")[0], lang: entry.id.split("/")[1] as Lang, date: entry.data.date }))
    .sort((a, b) => b.date.valueOf() - a.date.valueOf() || a.slug.localeCompare(b.slug));

  const topics = await getTopics(lang);
  const ideas = new Set((await getIdeas(lang)).map((i) => i.slug));
  for (const w of list) {
    const file = `content/forensics/writeups/${w.slug}/${w.lang}.md`;
    if (RESERVED.includes(w.slug)) throw new Error(`content/forensics/writeups/${w.slug}/: "${w.slug}" is already an address. Rename the folder.`);
    for (const t of w.entry.data.topics) if (!topics.has(t)) throw new Error(`${file}: topics lists "${t}", but there is no folder content/roadmap/topics/${t}/.`);
    if (w.entry.data.lab && !ideas.has(w.entry.data.lab)) throw new Error(`${file}: lab is "${w.entry.data.lab}", but there is no folder content/lab/${w.entry.data.lab}/.`);
  }
  return list;
}

/** The lab ideas in the "forensics" group, in their order. */
export async function getForensicIdeas(lang: Lang) {
  return (await getIdeas(lang)).filter((i) => i.group === "forensics");
}
