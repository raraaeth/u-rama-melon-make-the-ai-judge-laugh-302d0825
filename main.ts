// Entry for "Make the AI Judge Laugh": writes a one-line joke about an
// AI-written dating profile whose longest relationship is with a Wi-Fi router.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  'I asked an AI to write my dating profile and it listed my longest relationship as "with my Wi-Fi router."';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
const entryPath = join(outputDir, "entry.txt");
writeFileSync(entryPath, line + "\n");

// Verify-after-write: read the file back and make sure the bytes on disk
// are exactly the expected line plus one trailing newline.
const written = readFileSync(entryPath, "utf8");
if (written !== line + "\n") {
  console.error("error: entry.txt content does not match the expected line");
  process.exit(1);
}
