// The site's main feed: /<lang>/rss.xml, everything published (src/lib/feed.ts lists the feeds).
import type { APIContext } from "astro";
import { feedResponse, getStaticFeedPaths } from "../../lib/feed";

export const getStaticPaths = getStaticFeedPaths;
export const GET = (context: APIContext) => feedResponse(context, "all");
