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

/** The topics a job's learning path lists up to the level employers usually expect (`hire:`), in order. */
export const readyTopics = (l: Learn) => l.levels.slice(0, LEARN_LEVELS.indexOf(l.data.hire) + 1).flatMap((x) => x.topics);

/** One career move from a job to another, worked out from their learning paths: `add` are the topics the other job
 *  needs to apply (up to its `hire:` level) that this job's path doesn't reach, in the other path's order, each with
 *  the level it's listed at there; `shared` the ones both have. */
export type Move = { to: Job; add: { slug: string; level: LearnLevel }[]; shared: string[]; total: number };

/** How many moves a job page shows, closest first. Every move shown has its own page, and only those. */
export const MOVES_SHOWN = 4;

/** Career levels in order, for "moves don't go down": a senior job's moves are to other senior jobs.
 *  "Any stage" (bug bounty) counts as mid level. */
const STAGE: Record<JobLevel, number> = { entry: 0, mid: 1, any: 1, senior: 2 };

/** Where someone in this job can move to, worked out from the learning paths (learn.yml), so every new path joins the
 *  moves by itself. Only real moves count:
 *  - to a job at the same career level, or one level up (entry → mid, mid → senior; never down, never skipping one);
 *  - in the same field, or sharing at least a fifth of the other job's specialist topics (its "enough to apply" list
 *    without the beginner basics every path shares), so a short path doesn't look close just because of the basics.
 *  The ones shown are the three step-ups and the one same-level move that share the most (same field counts extra),
 *  topped up from the rest, then listed with the fewest topics to add first. A job can show fewer than four, or none. */
export function jobMoves(job: Job, jobs: Job[], learn: Map<string, Learn>): Move[] {
  const from = learn.get(job.slug);
  if (!from) return [];
  const have = new Set(readyTopics(from));
  const scored = jobs
    .filter((j) => j.slug !== job.slug && learn.has(j.slug) && [0, 1].includes(STAGE[j.level] - STAGE[job.level]))
    .map((to) => {
      const l = learn.get(to.slug)!;
      const basics = new Set(l.levels[0].topics);
      const need = l.levels.slice(0, LEARN_LEVELS.indexOf(l.data.hire) + 1).flatMap((x) => x.topics.map((slug) => ({ slug, level: x.id })));
      const spec = need.filter((x) => !basics.has(x.slug));
      const cover = spec.length ? spec.filter((x) => have.has(x.slug)).length / spec.length : 0;
      const sameField = to.field === job.field;
      const move: Move = { to, add: need.filter((x) => !have.has(x.slug)), shared: need.filter((x) => have.has(x.slug)).map((x) => x.slug), total: need.length };
      return { move, ok: sameField || cover >= 0.2, score: cover + (sameField ? 0.15 : 0), up: STAGE[to.level] > STAGE[job.level] };
    })
    .filter((x) => x.ok)
    .sort((a, b) => b.score - a.score || a.move.add.length - b.move.add.length);
  const pick = [...scored.filter((x) => x.up).slice(0, MOVES_SHOWN - 1), ...scored.filter((x) => !x.up).slice(0, 1)];
  for (const x of scored) if (pick.length < MOVES_SHOWN && !pick.includes(x)) pick.push(x);
  return pick.map((x) => x.move).sort((a, b) =>
    a.add.length - b.add.length ||
    Number(b.to.field === job.field) - Number(a.to.field === job.field) ||
    a.to.entry.data.title.localeCompare(b.to.entry.data.title));
}

/** True when a move goes to a higher career level. */
export const isStepUp = (from: Job, m: Move) => STAGE[m.to.level] > STAGE[from.level];

/** Where a move's own page is: /<lang>/roadmap/<field>/<job>/to-<other job>/. */
export const moveHref = (lang: Lang, from: Job, to: Job) => `/${lang}/roadmap/${from.field}/${from.slug}/to-${to.slug}/`;
