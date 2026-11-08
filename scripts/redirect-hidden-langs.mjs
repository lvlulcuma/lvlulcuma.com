// Runs after `astro build` (see "build" in package.json).
// A language switched off in content/settings.yml (`languages:`) has no pages in dist/.
// So that old links and search results don't end in a 404, this adds redirects for it to
// dist/_redirects: /pl/anything → /en/anything. They're temporary (302), because the language
// is coming back. Once it's in `languages:` again, the build stops adding them.
import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";

const root = "dist";
const file = `${root}/_redirects`;
const all = readdirSync("content/ui").filter((f) => f.endsWith(".yml")).map((f) => f.slice(0, -4));
const hidden = all.filter((l) => l !== "en" && !existsSync(`${root}/${l}/index.html`));

if (hidden.length) {
  const note = `# Added by scripts/redirect-hidden-langs.mjs: ${hidden.join(", ")} switched off in content/settings.yml`;
  const exact = hidden.map((l) => `/${l}  /en/  302`);
  const wild = hidden.map((l) => `/${l}/*  /en/:splat  302`);
  // Cloudflare wants exact rules before wildcard ones, so the exact ones go above the first wildcard rule.
  const lines = existsSync(file) ? readFileSync(file, "utf8").replace(/\n+$/, "").split("\n") : [];
  const firstWild = lines.findIndex((l) => /^\/\S*[*:]/.test(l));
  const at = firstWild === -1 ? lines.length : firstWild;
  lines.splice(at, 0, note, ...exact, "");
  if (at > 0 && lines[at - 1] !== "") lines.splice(at, 0, "");
  lines.push("", note, ...wild);
  writeFileSync(file, lines.join("\n") + "\n");
  console.log(`Switched-off languages: ${hidden.join(", ")}. Their addresses redirect to /en/ (see dist/_redirects).`);
}
