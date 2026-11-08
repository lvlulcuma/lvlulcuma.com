// Checks every link inside the site in the built pages (dist/): each one must lead to a page or file that exists.
// Run after `npm run build`:  npm run check:links   (or: node scripts/check-links.mjs dist)
// Links to other websites aren't checked here.
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const root = process.argv[2] ?? "dist";
if (!existsSync(root)) {
  console.error(`${root}/ doesn't exist. Run npm run build first.`);
  process.exit(1);
}

let pages = 0;
let links = 0;
const broken = [];

const isFile = (p) => existsSync(p) && statSync(p).isFile();
function exists(href) {
  let path;
  try {
    path = join(root, decodeURI(href));
  } catch {
    path = join(root, href);
  }
  return isFile(path) || isFile(join(path, "index.html")) || isFile(`${path}.html`);
}

function walk(dir) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith(".html")) check(p);
  }
}

function check(file) {
  pages++;
  const html = readFileSync(file, "utf8");
  // Links that start with one slash ("/en/news/"), not two ("//example.com").
  for (const m of html.matchAll(/href="(\/(?!\/)[^"#?]*)/g)) {
    links++;
    if (!exists(m[1])) broken.push(`${file.slice(root.length)}  →  ${m[1]}`);
  }
}

walk(root);
for (const b of broken) console.log("BROKEN", b);
console.log(`${links} links on ${pages} pages checked, ${broken.length} broken.`);
process.exit(broken.length ? 1 : 0);
