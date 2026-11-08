import { getCollection, getEntry } from "astro:content";

// Interface text shared by every page, in all three languages.
// "ua" is used in URLs, folders and labels. In the HTML itself (lang="", hreflang="")
// Ukrainian must be "uk", its ISO 639-1 language code; "ua" is the country code and
// browsers, screen readers and search engines would not recognise it as a language.

/** Every language the site has text for. Each has its own file in content/ui/ and in every content folder. */
export const ALL_LANGS = ["en", "pl", "ua"] as const;
export type Lang = (typeof ALL_LANGS)[number];

/**
 * The languages that are published: `languages:` in content/settings.yml.
 * A language left out keeps all its files, but gets no pages, isn't in the language switch,
 * the sitemap or hreflang links, and its old addresses redirect to English
 * (scripts/redirect-hidden-langs.mjs adds those redirects after the build).
 */
const settings = await getEntry("settings", "settings");
const published = (settings?.data.languages ?? ALL_LANGS) as readonly string[];
export const LANGS: Lang[] = ALL_LANGS.filter((l) => published.includes(l));

/** Language codes for lang="", hreflang="", RSS <language> and the sitemap. */
export const HTML_LANG: Record<Lang, string> = { en: "en", pl: "pl", ua: "uk" };

export const LANG_LABEL: Record<Lang, string> = { en: "EN", pl: "PL", ua: "UA" };
export const LANG_NAME: Record<Lang, string> = { en: "English", pl: "Polski", ua: "Українська" };

export const NAV = ["news", "articles", "guides", "cwe", "roadmap", "research", "lab", "about", "contact"] as const;
export type NavKey = (typeof NAV)[number] | "colophon" | "home";

export const TOPICS = ["research", "api", "lab"] as const;
export type Topic = (typeof TOPICS)[number];

// Roadmap groups, in the order they're listed. A field picks one in its "group:" field.
export const ROADMAP_GROUPS = ["defend", "attack", "build", "govern"] as const;
export type RoadmapGroup = (typeof ROADMAP_GROUPS)[number];

// Career levels on a field's page, in the order they're listed. A job picks one in its "level:" field.
// "any" is for work open at any stage, such as bug bounty hunting.
export const JOB_LEVELS = ["entry", "mid", "senior", "any"] as const;
export type JobLevel = (typeof JOB_LEVELS)[number];

// How deep someone knows a job's subject, from first steps to expert. A job lists topics for each one
// (content/roadmap/jobs/<job>/learn.yml); the headings and their one-line meaning are `learnLevels:`
// in content/pages/roadmap/<lang>.md.
export const LEARN_LEVELS = ["beginner", "knowledgeable", "intermediate", "advanced", "expert"] as const;
export type LearnLevel = (typeof LEARN_LEVELS)[number];

// News: the type of attack a weekly story or an incident breakdown is about (`type:`), and how settled
// an incident's facts are (`status:`). Their words are `newsTypes:` and `incidentStatus:` in content/ui/<lang>.yml.
// Keep NEWS_TYPES in step with `newsType` in src/content.config.ts.
export const NEWS_TYPES = ["ransomware", "breach", "supply-chain", "accounts", "vulnerability", "phishing", "ddos", "espionage", "takedown", "rules"] as const;
export type NewsType = (typeof NEWS_TYPES)[number];
export const INCIDENT_STATUS = ["unfolding", "confirmed", "report"] as const;
export type IncidentStatus = (typeof INCIDENT_STATUS)[number];

// Guide categories. A guide picks one in its "category:" field.
export const GUIDE_CATS = ["install", "quick", "configure", "use", "harden", "fix"] as const;
export type GuideCat = (typeof GUIDE_CATS)[number];
export type Platform = "windows" | "macos" | "linux";

export const langPaths = () => LANGS.map((lang) => ({ params: { lang } }));

// The words themselves live in content/ui/en.yml, pl.yml and ua.yml.

type Strings = Record<string, string>;
export type UI = Strings & {
  nav: Record<NavKey, string>;
  topics: Record<Topic, string>;
  guideCats: Record<GuideCat, string>;
  platforms: Record<Platform, string>;
  newsTypes: Record<NewsType, string>;
  incidentStatus: Record<IncidentStatus, string>;
};

const uiEntries = await getCollection("ui");
export const ui = Object.fromEntries(uiEntries.map((e) => [e.id, e.data as unknown as UI])) as Record<Lang, UI>;
for (const l of ALL_LANGS) if (!ui[l]) throw new Error(`Missing content/ui/${l}.yml`);

export const MONTHS: Record<Lang, string[]> = {
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  pl: ["sty", "lut", "mar", "kwi", "maj", "cze", "lip", "sie", "wrz", "paź", "lis", "gru"],
  ua: ["січ", "лют", "бер", "кві", "тра", "чер", "лип", "сер", "вер", "жов", "лис", "гру"],
};
