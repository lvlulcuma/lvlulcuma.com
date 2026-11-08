// Two small additions to how Markdown becomes HTML (used in astro.config.mjs).
//
// 1. Callouts. A quote that starts with a marker becomes a labelled box:
//      > [!NOTE]      → "Note" box (blue)
//      > [!TIP]       → "Tip" box (green)
//      > [!WARNING]   → "Warning" box (amber)
//      > [!ASIDE] Label   → a margin note, written right after the paragraph (or list) it explains.
//                         The label (rest of the line) is optional. See 2 for where it shows.
//    A plain ">" quote without a marker stays an ordinary quote.
//
// 2. Margin notes. The paragraph and its note are wrapped together in <div class="noted">, so wide
//    screens can show the note beside the paragraph (in the right margin) and smaller ones right after
//    it. Several notes in a row become one note. A note with nothing before it stays a plain note.
//
// 3. Code blocks get a caption bar ("PowerShell", "Terminal", "YAML", …). Shell commands
//    also get a prompt (PS> or $), drawn by CSS so it isn't copied with the command:
//      ```powershell   → PowerShell, PS> prompt
//      ```bash         → Bash, $ prompt
//      ```sh           → Terminal (any system), $ prompt
//    Lines that start with spaces continue the line above, so they get no prompt.
//
// Words like "Tip" and "Terminal" come from content/ui/<lang>.yml (calloutTip, codeTerminal, …).
import { readFileSync } from "node:fs";

const LANGS = ["en", "pl", "ua"];
const files = {};

/** The page's language, from its file name: content/…/<slug>/pl.md → "pl". */
function langOf(fileURL) {
  const m = String(fileURL ?? "").match(/\/(en|pl|ua)\.md$/);
  return m ? m[1] : "en";
}

/** A top-level `key: "text"` line from content/ui/<lang>.yml, falling back to English. */
function word(lang, key, fallback) {
  for (const l of [lang, "en"]) {
    if (!LANGS.includes(l)) continue;
    files[l] ??= readFileSync(new URL(`../../content/ui/${l}.yml`, import.meta.url), "utf8");
    const m = files[l].match(new RegExp(`^${key}:\\s*"([^"]*)"`, "m"));
    if (m) return m[1];
  }
  return fallback;
}

const el = (tagName, className, children) => ({ type: "element", tagName, properties: className ? { className } : {}, children });
const txt = (value) => ({ type: "text", value });

/** A clean copy of a node, without the processor's internal bookkeeping. */
function copy(n) {
  if (n.type === "text" || n.type === "raw" || n.type === "comment") return { type: n.type, value: n.value };
  if (n.type === "element") return { type: "element", tagName: n.tagName, properties: { ...(n.properties || {}) }, children: (n.children || []).map(copy) };
  return n;
}

const CALLOUTS = { note: "calloutNote", tip: "calloutTip", warning: "calloutWarning" };

export const callouts = {
  name: "lvlulcuma-callouts",
  element: {
    filter: ["blockquote"],
    visit(node, ctx) {
      const kids = node.children.map(copy);
      const p = kids.find((k) => k.type === "element");
      const first = p?.tagName === "p" ? p.children[0] : null;
      const m = first?.type === "text" ? first.value.match(/^\[!(\w+)\][ \t]*\n?/) : null;
      const type = m?.[1].toLowerCase();
      if (type === "aside") {
        // The rest of the marker's line is the label; the text starts on the next line.
        let rest = first.value.slice(m[0].length), label = "";
        const nl = rest.indexOf("\n");
        if (nl !== -1 && !m[0].endsWith("\n")) { label = rest.slice(0, nl).trim(); rest = rest.slice(nl + 1); }
        first.value = rest;
        if (!first.value) p.children.shift();
        if (!p.children.length) kids.splice(kids.indexOf(p), 1);
        ctx.replaceNode(node, el("aside", ["side"], [...(label ? [el("p", ["side-label"], [txt(label)])] : []), ...kids]));
        return;
      }
      if (!type || !CALLOUTS[type]) return;
      first.value = first.value.slice(m[0].length);
      if (!first.value) p.children.shift();
      if (!p.children.length) kids.splice(kids.indexOf(p), 1);
      const label = word(langOf(ctx.fileURL), CALLOUTS[type], type[0].toUpperCase() + type.slice(1));
      ctx.replaceNode(node, el("aside", ["callout", `callout-${type}`], [el("p", ["callout-label"], [txt(label)]), ...kids]));
    },
  },
};

const isSide = (n) => n?.type === "element" && n.tagName === "aside" && [].concat(n.properties?.className ?? []).includes("side");
/** Index of the next (d = 1) or previous (d = -1) element among `kids`, skipping line breaks; -1 if none. */
const step = (kids, i, d) => {
  for (let j = i + d; j >= 0 && j < kids.length; j += d) if (kids[j].type === "element") return j;
  return -1;
};

// On wide screens a margin note longer than its paragraph may hang down beside the text that follows instead of
// pushing it apart ("hang"), but only if it surely ends before the next note's paragraph (or the end of the text).
// Heights are guessed from character counts, on purpose too tall for notes (~24 characters a line, really ~30)
// and too short for text (~100 a line, really ~90; headings and code count as nothing), so a hanging note can't
// overlap another one. A note that might not fit takes its own room next to its paragraph, as before.
const textOf = (n) => (n.type === "text" ? n.value : (n.children || []).map(textOf).join(""));
const lines = (s, perLine) => Math.max(1, Math.ceil(s.trim().length / perLine));
const kidsOf = (n) => (n.children || []).filter((k) => k.type === "element");
function noteHeight(notes) {
  let h = 12 + 16; // padding above the text, and a gap below it
  for (const n of notes) for (const p of kidsOf(n)) h += lines(textOf(p), 24) * 21 + 4;
  return h;
}
function textHeight(n) {
  if (n.tagName === "p") return lines(textOf(n), 100) * 28 + 18;
  if (n.tagName === "ul" || n.tagName === "ol") return kidsOf(n).reduce((h, li) => h + lines(textOf(li), 100) * 28 + 8, 18);
  return 0;
}

export const sideNotes = {
  name: "lvlulcuma-side-notes-2",  // change the number when the output changes, so cached pages are rebuilt
  element: {
    filter: ["aside"],
    visit(node, ctx) {
      if (!isSide(node)) return;
      const kids = ctx.parent(node).children, i = ctx.indexOf(node);
      const before = step(kids, i, -1);
      if (before === -1 || isSide(kids[before])) return; // nothing to sit beside, or taken in by the note before it
      const notes = [node];
      let j = step(kids, i, 1);
      for (; j !== -1 && isSide(kids[j]); j = step(kids, j, 1)) notes.push(kids[j]);
      // The room beside the text: this paragraph and what follows, up to the paragraph of the next note.
      let next = j;
      while (next !== -1 && !isSide(kids[next])) next = step(kids, next, 1);
      const stop = next === -1 ? kids.length : step(kids, next, -1);
      let room = textHeight(kids[before]);
      for (let k = j; k !== -1 && k < stop; k = step(kids, k, 1)) room += textHeight(kids[k]);
      const cls = noteHeight(notes) <= room ? ["noted", "hang"] : ["noted"];
      ctx.wrapNode(kids[before], el("div", cls, [el("aside", ["side"], notes.flatMap((n) => n.children.map(copy)))]));
      for (const n of notes) ctx.removeNode(n);
    },
  },
};

const NAMES = { powershell: "PowerShell", ps1: "PowerShell", bash: "Bash", zsh: "zsh", yaml: "YAML", yml: "YAML", json: "JSON", http: "HTTP", toml: "TOML", ini: "INI" };
const TERMINAL = ["sh", "shell", "console"];
const SHELLS = { powershell: "ps", ps1: "ps", bash: "sh", zsh: "sh", sh: "sh", shell: "sh", console: "sh" };

export const codeBlocks = {
  name: "lvlulcuma-code",
  element: {
    filter: ["pre"],
    visit(node, ctx) {
      const code = node.children.find((k) => k.type === "element" && k.tagName === "code");
      if (!code) return;
      const cls = [].concat(code.properties?.className ?? []);
      const id = (cls.find((c) => String(c).startsWith("language-")) ?? "").slice(9).toLowerCase();
      const name = NAMES[id] ?? (TERMINAL.includes(id) ? word(langOf(ctx.fileURL), "codeTerminal", "Terminal") : id.toUpperCase());
      const shell = SHELLS[id];
      const source = ctx.textContent(code).replace(/\n$/, "");
      let body;
      if (shell) {
        body = [];
        source.split("\n").forEach((ln, i, all) => {
          body.push(el("span", /^\s/.test(ln) || !ln ? ["ln", "cont"] : ["ln"], [txt(ln)]));
          if (i < all.length - 1) body.push(txt("\n"));
        });
      } else body = [txt(source)];
      const pre = el("pre", null, [el("code", cls.length ? cls : null, body)]);
      const classes = ["code", ...(shell ? [`shell-${shell}`] : [])];
      ctx.replaceNode(node, el("figure", classes, [...(name ? [el("figcaption", null, [txt(name)])] : []), pre]));
    },
  },
};
