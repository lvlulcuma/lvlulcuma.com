import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { feedStylesheet, homeLink, itemLink, withCssType } from "../../lib/feed";
import { HTML_LANG, LANGS, type Lang } from "../../i18n/ui";
import { getPage } from "../../lib/content";
import { getArticles } from "../../lib/articles";

export function getStaticPaths() {
  return LANGS.map((lang) => ({ params: { lang } }));
}

export async function GET(context: APIContext) {
  const lang = context.params.lang as Lang;
  const articles = await getArticles(lang);
  const home = (await getPage("home", lang)).data;
  return withCssType(await rss({
    title: `lvlulcuma · ${home.title}`,
    description: home.intro,
    site: context.site!,
    items: articles.map((n) => ({
      title: n.entry.data.title,
      description: n.entry.data.dek,
      pubDate: n.date,
      link: `/${lang}/articles/${n.slug}/`,
      customData: itemLink(context.site!, `/${lang}/articles/${n.slug}/`, n.entry.data.title),
    })),
    customData: `<language>${HTML_LANG[lang]}</language>${homeLink(context.site!, lang)}`,
    stylesheet: feedStylesheet(lang),
    trailingSlash: true,
  }));
}
