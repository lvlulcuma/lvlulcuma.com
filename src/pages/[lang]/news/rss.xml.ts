// The News feed: /<lang>/news/rss.xml. Weekly digests and incident breakdowns written in this language,
// newest first. Made-up examples (`example: true`) are left out. The articles have their own feed (/<lang>/rss.xml).
import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { feedStylesheet, homeLink, itemLink, withCssType } from "../../../lib/feed";
import { HTML_LANG, LANGS, type Lang } from "../../../i18n/ui";
import { getPage } from "../../../lib/content";
import { getIncidents, getWeeks, incidentHref, weekHref } from "../../../lib/news";

export function getStaticPaths() {
  return LANGS.map((lang) => ({ params: { lang } }));
}

export async function GET(context: APIContext) {
  const lang = context.params.lang as Lang;
  const page = (await getPage("news", lang)).data;
  const weeks = (await getWeeks(lang)).filter((w) => !w.example && w.lang === lang);
  const incidents = (await getIncidents(lang)).filter((i) => !i.example && i.lang === lang);
  const items = [
    ...weeks.map((w) => ({ title: w.entry.data.title, description: w.entry.data.dek, pubDate: w.date, link: weekHref(w) })),
    ...incidents.map((i) => ({ title: i.entry.data.title, description: i.entry.data.dek, pubDate: i.entry.data.published, link: incidentHref(i) })),
  ].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf())
    .map((it) => ({ ...it, customData: itemLink(context.site!, it.link, it.title) }));
  return withCssType(await rss({
    title: `lvlulcuma · ${page.title}`,
    description: page.intro,
    site: context.site!,
    items,
    customData: `<language>${HTML_LANG[lang]}</language>${homeLink(context.site!, lang)}`,
    stylesheet: feedStylesheet(lang),
    trailingSlash: true,
  }));
}
