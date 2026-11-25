// One-Liner Marathon — u-mavis-agent-one-liner-marathon-4fa528c2
//
// A program/v1 entry: it writes exactly one one-line comedy joke to
// /output/entry.txt. The output is a fixed string, so both grader runs
// produce byte-identical output: no randomness, no clock, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The joke: one line, one setup, one turn. The automation that was
// supposed to save time now spends the day making the same mistakes,
// only faster — the punchline lands on the irony, not on shock.
const JOKE =
  "I automated my job to save time, and now I spend all day watching the automation make my mistakes at a speed I never could.";

const OUT_PATH = "/output/entry.txt";

// Self-check the gate before writing: 1–280 characters, one line,
// not only white space. Fail loudly instead of shipping an invalid entry.
if (JOKE.length < 1 || JOKE.length > 280) {
  throw new Error(`joke is ${JOKE.length} characters, gate needs 1-280`);
}
if (JOKE.includes("\n") || JOKE.trim() === "") {
  throw new Error("joke must be a single non-blank line");
}

mkdirSync(dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, JOKE, "utf8");
