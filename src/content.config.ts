// Tells Astro where the editable text lives. Everything a visitor reads is in the
// top-level content/ folder; this file only describes its shape so mistakes are
// caught when you run `npm run build`.
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const lang = "{en,pl,ua}";

// content/articles/2026-10/en.md  →  /en/articles/2026-10/
const articles = defineCollection({
  loader: glob({ pattern: `*/${lang}.md`, base: "./content/articles" }),
  schema: z.object({
    title: z.string().min(1),
    date: z.coerce.date(),
    topic: z.enum(["research", "api", "lab"]),
    dek: z.string().min(1),
    related: z.string().optional(),
    // The same article on Medium, once it's there (import it from this site's address, so Medium points
    // search engines back here). Shows "Also on Medium" in the box and at the end of the article.
    medium: z.string().url().optional(),
    draft: z.boolean().default(false),
    // Changes after publishing; shown as REV B, C, … in the title block.
    revisions: z.array(z.object({ date: z.coerce.date(), note: z.string() })).optional(),
  }),
});

// content/research/ransomware-by-sector/en.md  →  /en/research/ransomware-by-sector/
const research = defineCollection({
  loader: glob({ pattern: `*/${lang}.md`, base: "./content/research" }),
  schema: z.object({
    order: z.number().int().positive(),
    status: z.enum(["in-progress", "planned"]),
    page: z.boolean().default(true),
    title: z.string().min(1),
    summary: z.string().min(1),
    question: z.string().optional(),
    why: z.string().optional(),
    method: z.array(z.object({ step: z.string(), text: z.string() })).optional(),
    sources: z.array(z.string()).optional(),
    status_note: z.string().optional(),
    related_article: z.string().optional(),   // folder name in content/articles/
    published: z.coerce.date(),
    current_step: z.number().int().min(0).default(0),
    revisions: z.array(z.object({ date: z.coerce.date(), note: z.string() })).optional(),
  }),
});

// content/pages/<page>/en.md  →  the fixed pages (home, about, contact, …)
const pages = defineCollection({
  loader: glob({ pattern: `*/${lang}.md`, base: "./content/pages" }),
  schema: z.object({ updated: z.coerce.date().optional() }).passthrough(),
});

// content/ui/en.yml  →  menu labels and other small interface words
const ui = defineCollection({
  loader: glob({ pattern: `${lang}.yml`, base: "./content/ui" }),
  schema: z.object({}).passthrough(),
});

// content/settings.yml  →  published languages, email, GitHub, Medium, PGP
const settings = defineCollection({
  loader: glob({ pattern: "settings.yml", base: "./content" }),
  schema: z.object({
    languages: z
      .array(z.enum(["en", "pl", "ua"]))
      .min(1)
      .refine((l) => l.includes("en"), "languages: must include en (English is the default language)")
      .default(["en", "pl", "ua"]),
    email: z.string().email(),
    github: z.string().url(),
    medium: z.string().url().or(z.literal("")).default(""),
    pgp_fingerprint: z.string().default(""),
    pgp_key_path: z.string().default("/pgp-key.txt"),
  }),
});

// content/guides/<slug>/en.md  →  /en/guides/<slug>/
const guides = defineCollection({
  loader: glob({ pattern: `*/${lang}.md`, base: "./content/guides" }),
  schema: z.object({
    title: z.string().min(1),
    date: z.coerce.date(),
    category: z.enum(["install", "quick", "configure", "use", "harden", "fix"]),
    dek: z.string().min(1),
    order: z.number().int().default(99),   // position within its category
    time: z.number().int().positive(),       // rough minutes to complete
    platforms: z.array(z.enum(["windows", "macos", "linux"])).min(1),
    requires: z.array(z.string()).default([]), // guide folders to do first
    draft: z.boolean().default(false),
    revisions: z.array(z.object({ date: z.coerce.date(), note: z.string() })).optional(),
  }),
});

// content/guides/planned.yml  →  guides that pages already point to but that aren't written yet. Their rows in a
// "Step by step" box show the working title and "Coming soon" until the guide is published (src/lib/content.ts).
const guidePlan = defineCollection({
  loader: glob({ pattern: "planned.yml", base: "./content/guides" }),
  schema: z.object({
    guides: z.array(z.object({
      slug: z.string().regex(/^[a-z0-9-]+$/),                    // the folder it will get in content/guides/
      title: z.string().min(1),                                  // working title; the guide's own replaces it
      category: z.enum(["install", "quick", "configure", "use", "harden", "fix"]),
      platforms: z.array(z.enum(["windows", "macos", "linux"])).min(1),
      scope: z.string().optional(),                              // notes for whoever writes it; never shown
    })).default([]),
  }),
});

// content/lab/<idea>/en.md  →  /en/lab/<idea>/
// One home lab idea: a full step-by-step guide to building one practice setup. Listed on /en/lab/ by group.
// Keep the groups and levels in step with LAB_GROUPS and LAB_LEVELS in src/i18n/ui.ts.
const lab = defineCollection({
  loader: glob({ pattern: `*/${lang}.md`, base: "./content/lab" }),
  schema: z.object({
    title: z.string().min(1),
    date: z.coerce.date(),                                       // when it was published
    group: z.enum(["attack", "defend", "network", "analysis"]),  // which group it's listed under
    order: z.number().int().default(99),                         // position within its group
    level: z.enum(["beginner", "intermediate", "advanced"]),
    dek: z.string().min(1),                                       // one sentence: what you build and what it's for
    time: z.number().positive(),                                  // rough hours to build it the first time
    ram: z.number().int().positive(),                             // GB of free memory it needs while it runs
    jobs: z.array(z.string()).default([]),                        // Roadmap job folders this practice helps with
    requires: z.array(z.string()).default([]),                    // other ideas to build first (folder names)
    files: z.array(z.string()).default([]),                       // downloads in public/lab/<idea>/, linked in the box
    related_article: z.string().optional(),                       // folder name in content/articles/
    draft: z.boolean().default(false),
    revisions: z.array(z.object({ date: z.coerce.date(), note: z.string() })).optional(),
  }),
});

// Roadmap: the fields of cybersecurity, and the jobs in each, for people choosing where to start.
// content/roadmap/fields/cloud-security/en.md  →  one field: a card on /en/roadmap/ and its own page /en/roadmap/cloud-security/
// content/roadmap/jobs/cloud-security-engineer/en.md  →  one job, listed on its field's page (anchor #cloud-security-engineer)
//
// content/roadmap/topics/networking-basics/en.md  →  one topic, shared by every job that needs it. Shown as its title and
//   summary on job pages; once it has text under the dashes, it gets its own page /en/roadmap/topics/networking-basics/.
// content/roadmap/jobs/soc-analyst/learn.yml  →  what to learn for that job, level by level, and its own page
//   /en/roadmap/security-operations/soc-analyst/. Written once for all languages (it only lists topic folder names).
const fields = defineCollection({
  loader: glob({ pattern: `*/${lang}.md`, base: "./content/roadmap/fields" }),
  schema: z.object({
    group: z.enum(["defend", "attack", "build", "govern"]),   // which group it's listed under
    order: z.number().int().default(99),                        // position within its group
    title: z.string().min(1),
    summary: z.string().min(1),                                  // one or two sentences on the card
    also: z.array(z.string()).default([]),                       // other names people search for
  }),
});

const jobs = defineCollection({
  loader: glob({ pattern: `*/${lang}.md`, base: "./content/roadmap/jobs" }),
  schema: z.object({
    field: z.string().min(1),                                    // folder name in content/roadmap/fields/ (checked at build)
    level: z.enum(["entry", "mid", "senior", "any"]),           // how far into a career people usually are
    order: z.number().int().default(99),                        // position within its level
    title: z.string().min(1),
    summary: z.string().min(1),                                  // one or two sentences: what the job is, day to day
    also: z.array(z.string()).default([]),                       // other titles used in job ads
  }),
});

const topics = defineCollection({
  loader: glob({ pattern: `*/${lang}.md`, base: "./content/roadmap/topics" }),
  schema: z.object({
    title: z.string().min(1),
    summary: z.string().min(1),                                  // what exactly to know, in one or two sentences
  }),
});

const topicList = z.array(z.string()).default([]);
const learn = defineCollection({
  loader: glob({ pattern: "*/learn.yml", base: "./content/roadmap/jobs" }),
  schema: z.object({
    hire: z.enum(["beginner", "knowledgeable", "intermediate", "advanced", "expert"]),   // the level employers usually expect when hiring
    beginner: topicList,
    knowledgeable: topicList,
    intermediate: topicList,
    advanced: topicList,
    expert: topicList,
    sources: z.array(z.object({ name: z.string().min(1), url: z.string().url() })).default([]),
    updated: z.coerce.date(),
  }),
});

// News: a short weekly digest of what happened, and breakdowns of big incidents (src/lib/news.ts).
// content/news/weeks/2026-w43/en.md      →  /en/news/2026-w43/            (folder = year and ISO week number)
// content/news/incidents/<name>/en.md    →  /en/news/incidents/<name>/
// The type of attack (`type:`) uses the same list in both, and its words are `newsTypes:` in content/ui/<lang>.yml.
// `example: true` marks made-up sample entries: they're labelled on the page and kept out of Google, the sitemap and RSS.
const newsType = z.enum(["ransomware", "breach", "supply-chain", "accounts", "vulnerability", "phishing", "ddos", "espionage", "takedown", "rules"]);
const source = z.object({ name: z.string().min(1), url: z.string().url() });
// A date in a list can be a full day (2026-10-14) or just a month (2026-10). YAML turns an unquoted
// full date into a Date, so it's turned back into text here.
const dayOrMonth = z.preprocess(
  (v) => (v instanceof Date ? v.toISOString().slice(0, 10) : v),
  z.string().regex(/^\d{4}-\d{2}(-\d{2})?$/, "dates look like 2026-10-14 (or 2026-10 when only the month is known)"),
);
const revisions = z.array(z.object({ date: z.coerce.date(), note: z.string() })).optional();

const weeks = defineCollection({
  loader: glob({ pattern: `*/${lang}.md`, base: "./content/news/weeks" }),
  schema: z.object({
    title: z.string().min(1),                  // page heading, browser tab and Google title
    dek: z.string().min(1),                    // one line under the heading; also the Google description
    date: z.coerce.date(),                     // when this digest was published
    example: z.boolean().default(false),
    draft: z.boolean().default(false),
    action: z.string().optional(),             // "If you do one thing this week": shown in a box under the intro
    stories: z.array(z.object({
      title: z.string().min(1),
      type: newsType,
      // What happened, in plain words: one short paragraph, or a list of them.
      text: z.union([z.string().min(1), z.array(z.string().min(1)).min(1)]),
      // Side notes beside the story: the most striking detail, a number, or a term explained.
      notes: z.array(z.object({ label: z.string().min(1), text: z.string().min(1) })).default([]),
      why: z.string().min(1),                  // why it matters
      do: z.string().optional(),               // what a reader should do about it, if anything
      incident: z.string().optional(),         // folder name in content/news/incidents/ when there's a full breakdown
      sources: z.array(source).default([]),
    })).min(1),
    // "Fun story of the week": a light, true story from the same week that isn't one of the stories above.
    // Shown beside the latest week on /news/ (in the empty right column on wide screens, under the week on others).
    fun: z.object({
      title: z.string().min(1),
      text: z.union([z.string().min(1), z.array(z.string().min(1)).min(1)]),   // one short paragraph, or a list
      sources: z.array(source).default([]),
    }).optional(),
    revisions,
  }),
});

const incidents = defineCollection({
  loader: glob({ pattern: `*/${lang}.md`, base: "./content/news/incidents" }),
  schema: z.object({
    title: z.string().min(1),
    dek: z.string().min(1),
    type: newsType,
    status: z.enum(["unfolding", "confirmed", "report"]),   // how settled the facts are
    date: z.coerce.date(),                     // when the incident became public
    published: z.coerce.date(),                // when this breakdown was published
    who: z.string().min(1),                    // who was hit
    sector: z.string().min(1),
    entry: z.string().min(1),                  // how the attackers got in
    impact: z.string().min(1),
    timeline: z.array(z.object({ date: dayOrMonth, text: z.string().min(1) })).min(1),
    // Each step of the attack as a MITRE ATT&CK technique: T1190, or a sub-technique like T1003.001.
    attack: z.array(z.object({
      tactic: z.string().min(1),
      id: z.string().regex(/^T\d{4}(\.\d{3})?$/, "ATT&CK technique IDs look like T1190 or T1003.001"),
      name: z.string().min(1),
      text: z.string().min(1),
    })).default([]),
    detect: z.array(z.string()).default([]),   // what would have caught it (`backticks` show as code)
    check: z.array(z.string()).default([]),    // what readers should check in their own systems
    unknown: z.array(z.string()).default([]),  // open questions
    jobs: z.array(z.string()).default([]),     // Roadmap job folders (checked at build)
    topics: z.array(z.string()).default([]),   // Roadmap topic folders (checked at build)
    sources: z.array(source).min(1),
    example: z.boolean().default(false),
    draft: z.boolean().default(false),
    revisions,
  }),
});

// CWE: common software weaknesses, explained for attackers and defenders.
// content/cwe/owasp-2025.yml  →  the OWASP Top 10:2025 categories and the 249 CWEs mapped to them (the /cwe/ page lists them all)
// content/cwe/639/en.md       →  one write-up: /en/cwe/639/ (plus /attack/ and /defend/ views of the same page)
const cweMap = defineCollection({
  loader: glob({ pattern: "owasp-2025.yml", base: "./content/cwe" }),
  schema: z.object({
    categories: z.array(z.object({
      id: z.string().regex(/^a\d\d$/),          // a01 … a10, also the anchor on the /cwe/ page
      code: z.string().min(1),                  // "A01:2025"
      name: z.string().min(1),                  // OWASP's name, kept in English
      url: z.string().url(),
      cwes: z.array(z.tuple([z.number().int().positive(), z.string().min(1)])).min(1),
    })).length(10),
  }),
});

// content/cwe/plan.yml  →  which write-up explains which CWEs (all 249 on 67 pages), in the order they'll be written
const cwePlan = defineCollection({
  loader: glob({ pattern: "plan.yml", base: "./content/cwe" }),
  schema: z.object({
    pages: z.array(z.object({
      cwe: z.number().int().positive(),                       // the page's main CWE, also its folder name
      covers: z.array(z.number().int().positive()).default([]),   // the other CWEs it explains
      kind: z.enum(["full", "short"]),
      title: z.string().min(1),                               // working title; the write-up's own title is what readers see
    })).min(1),
  }),
});

const cwe = defineCollection({
  loader: glob({ pattern: `*/${lang}.md`, base: "./content/cwe" }),
  schema: z.object({
    title: z.string().min(1),                   // plain and searchable, e.g. "IDOR: when changing an ID shows someone else's data"
    cwe: z.number().int().positive(),           // must match the folder name
    name: z.string().min(1),                    // MITRE's official name, kept in English
    also: z.array(z.string()).default([]),      // other names people use (IDOR, BOLA, …)
    owasp: z.string().regex(/^A\d\d:2025$/),    // its OWASP Top 10:2025 category
    api: z.string().optional(),                 // OWASP API Security Top 10, e.g. "API1:2023"
    top25: z.number().int().min(1).max(25).optional(),   // rank in MITRE's latest CWE Top 25
    dek: z.string().min(1),
    date: z.coerce.date(),                      // first published
    sources: z.array(source).min(1),
    draft: z.boolean().default(false),
    revisions,
  }),
});

export const collections = { articles, research, pages, ui, settings, guides, guidePlan, lab, fields, jobs, topics, learn, weeks, incidents, cweMap, cwePlan, cwe };
