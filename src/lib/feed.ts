// The RSS feeds, one set per language. Built from the same list as the "New this week" box (getEntries in
// src/lib/changes.ts), so anything published on the site shows up in them by itself.
//
//   /<lang>/rss.xml             Everything: news, articles, guides, CWE write-ups, Roadmap jobs, research, lab ideas.
//                               Each title starts with what it is ("Breakdown · …", "CWE-639 · …").
//   /<lang>/news/rss.xml        Weekly digests and incident breakdowns.
//   /<lang>/articles/rss.xml    Monthly articles.          /<lang>/guides/rss.xml     Guides.
//   /<lang>/cwe/rss.xml         CWE write-ups.             /<lang>/roadmap/rss.xml    Roadmap jobs' "what to learn".
//   /<lang>/research/rss.xml    Research projects.         /<lang>/lab/rss.xml        Home lab ideas.
//
// A change made after publishing (a `revisions:` line) is a post of its own, "Updated · <title>", with the note as
// its text, so readers following an unfolding incident see each update. Its link is the page with #updated-<date>
// after it, because feed readers tell posts apart by their link.
//
// How a feed looks when someone opens it in a browser (feed readers ignore all of this):
// - The feed links a stylesheet (src/styles/feed.css, or feed-ua.css for Ukrainian), so a browser draws it in the
//   site's colours instead of showing raw XML. Vite builds it like the site's own CSS (fonts included) and gives
//   back its address in /_astro/.
// - Each post gets an empty XHTML link (<a xmlns="http://www.w3.org/1999/xhtml" href=… aria-label=…/>) that the
//   stylesheet stretches over the post's box, so the whole box opens the post. RSS allows elements from other
//   namespaces; feed readers skip ones they don't know.
// - Under the description, a row of XHTML links to all the feeds (this one marked), so someone who opened one feed
//   finds the others; at the end of the channel, an XHTML link to the site's home page with the text "lvlulcuma.com".
import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import feedCss from "../styles/feed.css?url";
import feedCssUa from "../styles/feed-ua.css?url";
import { HTML_LANG, LANGS, ui, type Lang } from "../i18n/ui";
import { getEntries, type Entry } from "./changes";
import { iso } from "./articles";
import { getPage, type PageName } from "./content";

export const FEEDS = ["all", "news", "articles", "guides", "cwe", "roadmap", "research", "lab"] as const;
export type Feed = (typeof FEEDS)[number];

/** What each feed holds. */
const KINDS: Record<Feed, Entry["kind"][]> = {
  all: ["week", "incident", "article", "cwe", "guide", "roadmap", "research", "lab"],
  news: ["week", "incident"],
  articles: ["article"],
  guides: ["guide"],
  cwe: ["cwe"],
  roadmap: ["roadmap"],
  research: ["research"],
  lab: ["lab"],
};

/** A feed's address: /en/rss.xml for everything, /en/news/rss.xml and so on for a section. */
export const feedHref = (lang: Lang, feed: Feed) => (feed === "all" ? `/${lang}/rss.xml` : `/${lang}/${feed}/rss.xml`);

/** The feed of the section a page belongs to (Base.astro's `nav`), if that section has one. */
export const sectionFeed = (nav: string | undefined): Feed | undefined =>
  nav && nav !== "all" && (FEEDS as readonly string[]).includes(nav) ? (nav as Feed) : undefined;

/** A feed's short name: "Everything", or the section's name in the menu. */
export function feedName(lang: Lang, feed: Feed): string {
  const t = ui[lang];
  const name = feed === "all" ? t.rssAll : t.nav[feed];
  if (!name) throw new Error(`content/ui/${lang}.yml: ${feed === "all" ? "rssAll" : `nav → ${feed}`} is missing (RSS).`);
  return name;
}

/** A feed's title in feed readers: "lvlulcuma · Field notes on cybersecurity" for everything, "lvlulcuma · News"
 *  for a section. */
export async function feedTitle(lang: Lang, feed: Feed): Promise<string> {
  return feed === "all" ? `lvlulcuma · ${(await getPage("home", lang)).data.title}` : `lvlulcuma · ${feedName(lang, feed)}`;
}

export const getStaticFeedPaths = () => LANGS.map((lang) => ({ params: { lang } }));

const XHTML = "http://www.w3.org/1999/xhtml";
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const abs = (site: URL, path: string) => new URL(path, site).href;

/** @astrojs/rss writes <?xml-stylesheet href="…"?> without a type (it only adds one for XSL); browsers need
 *  type="text/css" to apply a CSS file, so add it to the finished feed. */
async function withCssType(res: Response): Promise<Response> {
  const xml = (await res.text()).replace(/<\?xml-stylesheet href="([^"]+\.css)"\?>/, '<?xml-stylesheet type="text/css" href="$1"?>');
  if (!xml.includes('<?xml-stylesheet type="text/css"')) throw new Error("RSS: the feed's stylesheet line wasn't found (src/lib/feed.ts).");
  return new Response(xml, { status: res.status, headers: res.headers });
}

/** The row of links to every feed, shown under the description when the feed is opened in a browser. */
function feedMenu(site: URL, lang: Lang, current: Feed): string {
  const label = ui[lang].rssMenu;
  if (!label) throw new Error(`content/ui/${lang}.yml: rssMenu is missing (RSS).`);
  const links = FEEDS.map((f) =>
    `<a href="${esc(abs(site, feedHref(lang, f)))}"${f === current ? ' aria-current="page"' : ""}>${esc(feedName(lang, f))}</a>`).join(" ");
  return `<nav xmlns="${XHTML}" aria-label="${esc(label)}"><b>${esc(label)}</b> ${links}</nav>`;
}

/** Builds one feed. */
export async function feedResponse(context: APIContext, feed: Feed): Promise<Response> {
  const lang = context.params.lang as Lang;
  const site = context.site!;
  const home = (await getPage("home", lang)).data;
  const words = home.changes ?? {};
  const updated = String(words.updated ?? "");
  if (!updated) throw new Error(`content/pages/home/${lang}.md: changes → updated is missing (RSS).`);

  // The kind's word before each title in the everything feed ("Breakdown", or a CWE write-up's number).
  const prefix = (e: Entry) => {
    if (feed !== "all") return "";
    const word = e.tag ?? words.labels?.[e.kind];
    if (!word) throw new Error(`content/pages/home/${lang}.md: changes → labels → ${e.kind} is missing (RSS).`);
    return `${word} · `;
  };
  const category = (e: Entry) => String(words.labels?.[e.kind] ?? e.kind);

  const entries = (await getEntries(lang)).filter((e) => KINDS[feed].includes(e.kind));
  const items = entries.flatMap((e) => [
    { title: `${prefix(e)}${e.title}`, description: e.description, pubDate: e.published, link: abs(site, e.href), categories: [category(e)] },
    ...e.revisions.map((r) => ({
      title: `${updated} · ${prefix(e)}${e.title}`,
      description: r.note,
      pubDate: r.date,
      link: abs(site, `${e.href}#updated-${iso(r.date)}`),
      categories: [category(e)],
    })),
  ])
    // Newest first; on the same day, a new post before an update.
    .sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf() || Number(a.link.includes("#updated-")) - Number(b.link.includes("#updated-")))
    // Full addresses: the library leaves those as they are (it would add a slash after #updated-… otherwise).
    .map((it) => ({ ...it, customData: `<a xmlns="${XHTML}" href="${esc(it.link)}" aria-label="${esc(it.title)}"></a>` }));

  // The description: the intro of the home page, or of the section's page.
  const description = String(feed === "all" ? home.intro : (await getPage(feed as PageName, lang)).data.intro ?? "");
  if (!description) throw new Error(`content/pages/${feed === "all" ? "home" : feed}/${lang}.md: intro is missing (RSS).`);

  return withCssType(await rss({
    title: await feedTitle(lang, feed),
    description,
    site,
    items,
    customData: `<language>${HTML_LANG[lang]}</language>${feedMenu(site, lang, feed)}<a xmlns="${XHTML}" href="${esc(abs(site, `/${lang}/`))}">lvlulcuma.com</a>`,
    stylesheet: lang === "ua" ? feedCssUa : feedCss,
    trailingSlash: true,
  }));
}
