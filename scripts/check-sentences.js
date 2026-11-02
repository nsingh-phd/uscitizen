#!/usr/bin/env node
/*
 * Checks that every practice sentence in english.js uses only words from the
 * official USCIS reading or writing vocabulary list it belongs to.
 *
 *   node scripts/check-sentences.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ctx = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(__dirname, "..", "english.js"), "utf8"), ctx);
const data = ctx.window.ENGLISH_DATA;

const words = (s) => s.toLowerCase().replace(/[’']/g, "").replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter(Boolean);

let problems = 0;
for (const kind of ["reading", "writing"]) {
  const allowed = new Set();
  for (const [, list] of data[`${kind}Vocab`]) {
    for (const entry of list) for (const form of entry.split("/")) words(form).forEach((w) => allowed.add(w));
  }
  for (const sentence of data[kind]) {
    const extra = words(sentence).filter((w) => !allowed.has(w));
    if (extra.length) {
      problems++;
      console.error(`${kind}: "${sentence}" uses words not on the list: ${extra.join(", ")}`);
    }
  }
  console.log(`${kind}: ${data[kind].length} sentences checked against ${allowed.size} official words`);
}
process.exit(problems ? 1 : 0);
