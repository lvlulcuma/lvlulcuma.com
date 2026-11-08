// Fails the build if any page contains something the Content Security Policy would block (the rule in
// public/_headers that lets browsers load only this site's own files):
// <script> tags, inline <style> blocks, style="" attributes, inline event handlers or javascript: URLs.
// Run automatically by `npm run build`.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const root = "dist";
const rules = [
  [/<script\b/i, "<script> tag"],
  [/<style\b/i, "inline <style> block"],
  [/\sstyle\s*=\s*["']/i, "style=\"\" attribute"],
  [/\son[a-z]+\s*=\s*["']/i, "inline event handler (onclick etc.)"],
  [/href\s*=\s*["']\s*javascript:/i, "javascript: URL"],
  [/(src|href)\s*=\s*["']https?:\/\/(?!lvlulcuma\.com)[^"']+\.(css|js|woff2?)["']/i, "third-party asset"],
];

function* walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) yield* walk(p);
    else if (p.endsWith(".html")) yield p;
  }
}

let problems = 0;
let files = 0;
for (const file of walk(root)) {
  files++;
  const html = readFileSync(file, "utf8");
  for (const [re, what] of rules) {
    if (re.test(html)) {
      console.error(`CSP check: ${file} contains a ${what}`);
      problems++;
    }
  }
}
if (problems) {
  console.error(`\nCSP check failed: ${problems} problem(s). The live site would break under its Content-Security-Policy.`);
  process.exit(1);
}
console.log(`CSP check passed: ${files} pages, no inline scripts or styles.`);
