// Entry for "Make the AI Judge Laugh": writes a one-line joke about an
// AI-written dating profile whose longest relationship is with a Wi-Fi router.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  'I asked an AI to write my dating profile and it listed my longest relationship as "with my Wi-Fi router."';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), line + "\n");
