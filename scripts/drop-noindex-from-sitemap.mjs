// Runs after `astro build` (see "build" in package.json).
// Pages marked <meta name="robots" content="noindex"> (made-up example entries in News, the 404 page)
// shouldn't be offered to search engines, so this removes them from the sitemap Astro wrote.
import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";

const root = "dist";
const site = "https://lvlulcuma.com";
const noindex = (loc) => {
  const path = decodeURI(loc.replace(site, "")).replace(/\/?$/, "/index.html");
  const file = `${root}${path}`;
  return existsSync(file) && /<meta name="robots" content="noindex"/.test(readFileSync(file, "utf8"));
};

let dropped = 0;
for (const f of readdirSync(root).filter((f) => /^sitemap-\d+\.xml$/.test(f))) {
  const xml = readFileSync(`${root}/${f}`, "utf8");
  const out = xml.replace(/<url>[\s\S]*?<\/url>/g, (u) => {
    const loc = u.match(/<loc>([^<]+)<\/loc>/)?.[1] ?? "";
    if (noindex(loc)) { dropped++; return ""; }
    return u;
  });
  writeFileSync(`${root}/${f}`, out);
}
console.log(`Sitemap: ${dropped} page(s) marked noindex left out.`);
