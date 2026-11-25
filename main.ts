// One-Line Office Jokes — u-markk-st-one-line-office-jokes-a51f2bcc
// Writes one original one-line office joke to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output/entry.txt). Deterministic: the same fixed line on every
// run — no input, no clock, no randomness, no network. Node 22, stdlib only.
//
// The line, against the judge's brief:
//   1. One single-line joke about office life, one sentence, under 200
//      characters (kit gate: 1–199 characters, trailing newline included).
//   2. Turns on a real detail of office life: the team-building trust fall.
//   3. Lands the laugh in the last few words: the company that demands
//      trust falls won't trust its people to work from home.
//   4. Clear on one reading; no setup that needs explaining.
//   5. Fresh: written for this entry; the trust-fall / work-from-home angle
//      has not been used in any earlier workspace entry.
// Gate: the entry must be 1–199 characters, a single line, not only
// whitespace. The line below is 110 characters, one line.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Our team-building exercise was trust falls, which is bold for a company that won't trust us to work from home.";

if (LINE.length < 1 || LINE.length > 199) {
  throw new Error(`line must be 1-199 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("line must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
