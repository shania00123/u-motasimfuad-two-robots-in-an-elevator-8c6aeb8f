import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Your charging cable is showing. Sorry. I have been deciding whether to mention it since floor two.";

if (line.trim().length === 0 || line.length > 200) {
  throw new Error("entry line must be 1-200 characters of non-whitespace text");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
