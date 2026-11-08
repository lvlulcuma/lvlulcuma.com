// Shared by the two RSS feeds (src/pages/[lang]/rss.xml.ts and src/pages/[lang]/news/rss.xml.ts): how a feed looks
// when someone opens it in a browser. Feed readers ignore all of this.
//
// - The feed links a stylesheet (src/styles/feed.css, or feed-ua.css for Ukrainian), so a browser draws it in the
//   site's colours instead of showing raw XML. Vite builds it like the site's own CSS (fonts included) and gives
//   back its address in /_astro/.
// - Each post gets an empty XHTML link (<a xmlns="http://www.w3.org/1999/xhtml" href=… aria-label=…/>) that the
//   stylesheet stretches over the post's box, so the whole box opens the post. RSS allows elements from other
//   namespaces; feed readers skip ones they don't know.
// - At the end of the channel, an XHTML link to the site's home page with the text "lvlulcuma.com".
import feedCss from "../styles/feed.css?url";
import feedCssUa from "../styles/feed-ua.css?url";
import type { Lang } from "../i18n/ui";

const XHTML = "http://www.w3.org/1999/xhtml";
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export const feedStylesheet = (lang: Lang) => (lang === "ua" ? feedCssUa : feedCss);

/** @astrojs/rss writes <?xml-stylesheet href="…"?> without a type (it only adds one for XSL); browsers need
 *  type="text/css" to apply a CSS file, so add it to the finished feed. */
export async function withCssType(res: Response): Promise<Response> {
  const xml = (await res.text()).replace(/<\?xml-stylesheet href="([^"]+\.css)"\?>/, '<?xml-stylesheet type="text/css" href="$1"?>');
  if (!xml.includes('<?xml-stylesheet type="text/css"')) throw new Error("RSS: the feed's stylesheet line wasn't found (src/lib/feed.ts).");
  return new Response(xml, { status: res.status, headers: res.headers });
}

/** The empty link over a post's box. */
export const itemLink = (site: URL, path: string, title: string) =>
  `<a xmlns="${XHTML}" href="${esc(new URL(path, site).href)}" aria-label="${esc(title)}"></a>`;

/** The link to the home page at the end of the feed. */
export const homeLink = (site: URL, lang: Lang) => `<a xmlns="${XHTML}" href="${esc(new URL(`/${lang}/`, site).href)}">lvlulcuma.com</a>`;
