// The Worst Pizza Topping
// Entry program: writes one funny line (175 chars) pitching the worst pizza
// topping to /output/entry.txt. Deterministic: the same bytes on every run.
// The gate (RULES.txt) requires UTF-8 text of 1-200 characters, not only
// whitespace, so the program checks its own line before writing it.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Our new pizza is topped with the health inspector's 14-page report — laminated, lightly salted, and served before Inspector Ramos could finish reading the part about the rats.";

if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`topping line fails the gate: ${LINE.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
