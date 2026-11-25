import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I simulated 900 greetings and chose silence; your charging port has been open since floor two.";

if (line.trim().length === 0 || line.length > 200) {
  throw new Error("entry line must be 1-200 characters of non-whitespace text");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
