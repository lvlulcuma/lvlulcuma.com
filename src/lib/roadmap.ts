// Reads the Roadmap: the fields of cybersecurity (content/roadmap/fields/) and the jobs in each
// (content/roadmap/jobs/).
//
// How the Roadmap grows (all three steps are built; topics are being written job by job):
//   1. Fields   content/roadmap/fields/<field>/<lang>.md   listed on /<lang>/roadmap/, grouped; each has a page
//   2. Jobs     content/roadmap/jobs/<job>/<lang>.md       each names its `field:` and `level:`; listed on /<lang>/roadmap/<field>/
//   3. Topics   content/roadmap/topics/<topic>/<lang>.md   one file per topic, shared by every job that needs it.
//               A job lists topic folder names per level (beginner, knowledgeable, intermediate, advanced,
//               expert) in content/roadmap/jobs/<job>/learn.yml; a topic shows as plain text (title and summary)
//               until its file has text under the dashes, then as a link to its page.
import { getCollection, type CollectionEntry } from "astro:content";
import { JOB_LEVELS, LEARN_LEVELS, ROADMAP_GROUPS, type JobLevel, type Lang, type LearnLevel, type RoadmapGroup } from "../i18n/ui";

export type Field = { entry: CollectionEntry<"fields">; slug: string; lang: Lang; group: RoadmapGroup };
export type Job = { entry: CollectionEntry<"jobs">; slug: string; lang: Lang; field: string; level: JobLevel };

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

/** Every field, in the page's language where it exists and in English otherwise; ordered by group, then `order`. */
export async function getFields(lang: Lang): Promise<Field[]> {
  return bestPerFolder(await getCollection("fields"), lang)
    .map((entry) => ({ entry, slug: entry.id.split("/")[0], lang: entry.id.split("/")[1] as Lang, group: entry.data.group }))
    .sort((a, b) =>
      ROADMAP_GROUPS.indexOf(a.group) - ROADMAP_GROUPS.indexOf(b.group) ||
      a.entry.data.order - b.entry.data.order ||
      a.entry.data.title.localeCompare(b.entry.data.title));
}

/** Every job, in the page's language where it exists and in English otherwise; ordered by level, then `order`. */
export async function getJobs(lang: Lang): Promise<Job[]> {
  const fieldSlugs = new Set((await getCollection("fields")).map((f) => f.id.split("/")[0]));
  return bestPerFolder(await getCollection("jobs"), lang)
    .map((entry) => {
      const slug = entry.id.split("/")[0];
      if (!fieldSlugs.has(entry.data.field)) {
        throw new Error(`content/roadmap/jobs/${slug}: field "${entry.data.field}" isn't a folder in content/roadmap/fields/.`);
      }
      return { entry, slug, lang: entry.id.split("/")[1] as Lang, field: entry.data.field, level: entry.data.level };
    })
    .sort((a, b) =>
      JOB_LEVELS.indexOf(a.level) - JOB_LEVELS.indexOf(b.level) ||
      a.entry.data.order - b.entry.data.order ||
      a.entry.data.title.localeCompare(b.entry.data.title));
}

export type Topic = { entry: CollectionEntry<"topics">; slug: string; lang: Lang; hasPage: boolean };

/** Every topic, in the page's language where it exists and in English otherwise. A topic has its own
 *  page once its file has text under the dashes. */
export async function getTopics(lang: Lang): Promise<Map<string, Topic>> {
  const all = bestPerFolder(await getCollection("topics"), lang);
  return new Map(all.map((entry) => {
    const slug = entry.id.split("/")[0];
    return [slug, { entry, slug, lang: entry.id.split("/")[1] as Lang, hasPage: !!(entry.body ?? "").trim() }];
  }));
}

export type Learn = { job: string; data: CollectionEntry<"learn">["data"]; levels: { id: LearnLevel; topics: string[] }[]; count: number };

/** What to learn for each job that has a content/roadmap/jobs/<job>/learn.yml, keyed by job folder.
 *  A topic folder that doesn't exist stops the build with a message naming the job. */
export async function getLearn(): Promise<Map<string, Learn>> {
  const topicSlugs = new Set((await getCollection("topics")).map((t) => t.id.split("/")[0]));
  const out = new Map<string, Learn>();
  for (const e of await getCollection("learn")) {
    const job = e.id.split("/")[0];
    const levels = LEARN_LEVELS.map((id) => ({ id, topics: e.data[id] as string[] }));
    const seen = new Map<string, LearnLevel>();
    for (const l of levels) for (const t of l.topics) {
      if (!topicSlugs.has(t)) throw new Error(`content/roadmap/jobs/${job}/learn.yml: ${l.id} lists "${t}", but there is no folder content/roadmap/topics/${t}/.`);
      if (seen.has(t)) throw new Error(`content/roadmap/jobs/${job}/learn.yml: "${t}" is listed twice (${seen.get(t)} and ${l.id}).`);
      seen.set(t, l.id);
    }
    out.set(job, { job, data: e.data, levels, count: seen.size });
  }
  return out;
}
