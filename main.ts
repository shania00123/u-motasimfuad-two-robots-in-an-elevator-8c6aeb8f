import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I am at 4% battery, so if I go quiet, please tell the others I was fascinating.";

if (line.trim().length === 0 || line.length > 200) {
  throw new Error("entry line must be 1-200 characters of non-whitespace text");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
