// Builds the site with every language switched on (including ones turned off in content/settings.yml, like Polish),
// then checks the links, so text in a hidden language can't break anything before it's switched on.
// content/settings.yml is put back exactly as it was afterwards, even if the build fails.
// Run:  npm run build:all-langs   (then `npm run build` again if you want dist/ as it will be published)
import { readFileSync, writeFileSync } from "node:fs";
import { spawnSync } from "node:child_process";

const file = "content/settings.yml";
const original = readFileSync(file, "utf8");
const all = original.replace(/^languages:.*$/m, "languages: [en, pl, ua]");
if (all === original && !/^languages: \[en, pl, ua\]/m.test(original)) {
  console.error(`No "languages:" line found in ${file}.`);
  process.exit(1);
}

const run = (cmd, args) => spawnSync(cmd, args, { stdio: "inherit", shell: process.platform === "win32" }).status ?? 1;
let status = 1;
try {
  writeFileSync(file, all);
  status = run("npm", ["run", "build"]);
  if (status === 0) status = run("node", ["scripts/check-links.mjs", "dist"]);
} finally {
  writeFileSync(file, original);
}
console.log(status === 0 ? "All languages build and their links work." : "The build with all languages failed (see above).");
process.exit(status);
