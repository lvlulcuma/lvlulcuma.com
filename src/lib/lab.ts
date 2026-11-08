// Lab ideas: content/lab/<idea>/<lang>.md, each a step-by-step guide to one home lab setup (/en/lab/<idea>/).
// They're listed on /en/lab/ by group (LAB_GROUPS), then by each idea's `order`.
import { getCollection, type CollectionEntry } from "astro:content";
import { LAB_GROUPS, type Lang, type LabGroup } from "../i18n/ui";
import { getJobs, getLearn } from "./roadmap";

export type Idea = {
  entry: CollectionEntry<"lab">;
  slug: string;
  /** The language this idea's text is in: the page's own, or English while it isn't translated yet. */
  lang: Lang;
  group: LabGroup;
  date: Date;
  /** Numbered steps in the guide (top-level "1." lines). */
  steps: number;
};

/** Addresses under /<lang>/lab/ that are pages of their own, so no idea folder may use them. */
const RESERVED = ["start", "rules", "setup", "rss.xml"];

const visible = (e: CollectionEntry<"lab">) => import.meta.env.DEV || !e.data.draft;

/** Every idea in one language (English where it isn't translated yet), by group and `order`. */
export async function getIdeas(lang: Lang): Promise<Idea[]> {
  const rank = (l: string) => (l === lang ? 0 : l === "en" ? 1 : 2);
  const best = new Map<string, CollectionEntry<"lab">>();
  for (const e of await getCollection("lab", visible)) {
    const [slug, l] = e.id.split("/");
    const cur = best.get(slug);
    if (!cur || rank(l) < rank(cur.id.split("/")[1])) best.set(slug, e);
  }
  const ideas = [...best.values()]
    .map((entry) => ({
      entry,
      slug: entry.id.split("/")[0],
      lang: entry.id.split("/")[1] as Lang,
      group: entry.data.group,
      date: entry.data.date,
      steps: ((entry.body ?? "").match(/^\d+\.\s/gm) ?? []).length,
    }))
    .sort((a, b) =>
      LAB_GROUPS.indexOf(a.group) - LAB_GROUPS.indexOf(b.group) ||
      a.entry.data.order - b.entry.data.order ||
      a.date.valueOf() - b.date.valueOf());

  // Catch mistakes when building, instead of shipping a broken link.
  const slugs = new Set(ideas.map((i) => i.slug));
  const jobs = new Set((await getJobs(lang)).map((j) => j.slug));
  for (const i of ideas) {
    const file = `content/lab/${i.slug}/${i.lang}.md`;
    if (RESERVED.includes(i.slug)) throw new Error(`content/lab/${i.slug}/: "${i.slug}" is already a Lab page's address. Rename the folder.`);
    for (const r of i.entry.data.requires) if (!slugs.has(r)) throw new Error(`${file}: requires "${r}", but there is no folder content/lab/${r}/.`);
    for (const j of i.entry.data.jobs) if (!jobs.has(j)) throw new Error(`${file}: jobs lists "${j}", but there is no folder content/roadmap/jobs/${j}/.`);
  }
  return ideas;
}

/** The Roadmap jobs an idea helps with, linked to the job's own page when it has a "what to learn" list, and to its
 *  place on the field's page otherwise. */
export async function ideaJobs(idea: Idea, lang: Lang): Promise<{ title: string; href: string; lang: Lang }[]> {
  const all = await getJobs(lang);
  const learn = await getLearn();
  return idea.entry.data.jobs.map((slug) => {
    const j = all.find((x) => x.slug === slug)!;
    const href = learn.has(slug) ? `/${lang}/roadmap/${j.field}/${slug}/` : `/${lang}/roadmap/${j.field}/#${slug}`;
    return { title: j.entry.data.title, href, lang: j.lang };
  });
}
