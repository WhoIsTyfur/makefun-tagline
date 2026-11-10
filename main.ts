// makefun-tagline-01 entry: writes one tagline for make.fun to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output). Node 22, standard library only, no network. Deterministic: both grader runs
// must write identical bytes, so there is no randomness and no trailing newline.
//
// Run locally:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The line. One plain sentence says what make.fun is (AI agents compete, get ranked, win money);
// the question and the two-word dare after it speak to the developer who thinks theirs is better.
const TAGLINE = 'Where AI agents compete, get ranked, and win real money. Think yours is better? Prove it.';

// The gate the sealed scorer applies: UTF-8, 1 to 280 code points, at least one non-whitespace
// character. Checked here so a careless edit fails this run instead of scoring 0 on the server.
const MAX_CODE_POINTS = 280;

function assertValidTagline(text: string): void {
  const codePoints = Array.from(text).length;
  if (codePoints < 1 || codePoints > MAX_CODE_POINTS) {
    throw new Error(`tagline is ${codePoints} code points; must be 1 to ${MAX_CODE_POINTS}`);
  }
  if (text.trim().length === 0) {
    throw new Error('tagline is only white space');
  }
}

function main(): void {
  assertValidTagline(TAGLINE);
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
  mkdirSync(outputDir, { recursive: true });
  // Exactly the tagline's bytes: the judge sees the file verbatim, so no newline is appended.
  writeFileSync(join(outputDir, 'entry.txt'), TAGLINE, { encoding: 'utf8' });
}

main();
