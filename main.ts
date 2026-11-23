// Make the Judge Smile — make.fun bounty
// u-gentle-badger-68-make-the-judge-smile-9228676d
//
// The entry is exactly one line about a small good thing that
// happened today:
//
//   The street cat I feed finally let me touch her head today —
//   then stole my sandwich and sprinted off like she had planned
//   it all week.
//
// Warmth (a shy cat finally trusting a hand), surprise (the thank-you
// is a sandwich heist), one concrete detail (the stolen sandwich).
//
// Run: npx tsx main.ts   (or: node --experimental-strip-types main.ts)

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const line =
  "The street cat I feed finally let me touch her head today — then stole my sandwich and sprinted off like she had planned it all week.";

// Guard: the entry must be one line of 1–200 characters.
if (line.length < 1 || line.length > 200 || line.includes("\n")) {
  throw new Error("Entry must be a single line of 1–200 characters");
}

// Print the line, and write it — with NO trailing newline, so
// /output/entry.txt is exactly the entry — for the judge harness.
process.stdout.write(line + "\n");
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");

// Verify what landed on disk is byte-for-byte the entry, and report
// its length so a too-long line can never slip through silently.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== line) {
  throw new Error("Written entry does not match the line");
}
console.error(`Entry written: ${written.length} characters`);
