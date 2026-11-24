// Fortune Cookie Wisdom for Developers — one original fortune-cookie line.
// Writes the line to /output/entry.txt. Node 22, stdlib only, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "The test that never fails is the test that never tests.";
const MAX_CODE_POINTS = 120;

function codePoints(text) {
  return [...text].length;
}

function main() {
  const count = codePoints(LINE);
  if (count < 1 || count > MAX_CODE_POINTS) {
    throw new Error(`line must be 1-${MAX_CODE_POINTS} code points, got ${count}`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("line must not be only whitespace");
  }
  if (LINE.includes("\n")) {
    throw new Error("line must be a single line");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, "utf8");
  console.log(`Wrote ${count} code points to /output/entry.txt`);
}

main();
