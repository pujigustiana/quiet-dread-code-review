import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "LGTM. Diff looks clean, tests pass, and this merge brings us one commit closer to the heat death of the universe.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
