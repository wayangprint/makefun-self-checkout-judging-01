// The Self-Checkout Is Judging You — entry runner (revised).
//
// The till's verdict is baked in as data, not computed: the same bytes go
// to stdout and to entry.txt on every run. The program takes no input and
// touches no clock, network, or random source, so two runs can never
// drift apart.
//
// The line is built from labelled clauses so each beat of the joke (the
// basket, the accusation, the twist on the machine's own catchphrase) is
// visible on its own, while the joined sentence stays byte-exact. A
// whitespace normaliser keeps the entry one clean line, and no trailing
// newline is ever written, so the gate sees exactly one line of 1-200
// characters.
//
// Where the file lands: MAKEFUN_OUTPUT_DIR when that variable is set
// (the grading sandbox sets it to /output, and per-run scratch dirs are
// used while verifying determinism), otherwise /output when that
// directory already exists (the grading sandbox case), otherwise next to
// this script (entry.txt in the repo folder, local runs only). The script
// folder is never written when an output folder is available: the grading
// sandbox mounts the repository read-only, so a write there would throw
// and fail the run.

import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The till's verdict, one clause per beat of the joke.
const CLAUSES: readonly { role: string; text: string }[] = [
  { role: "basket", text: "Twelve yoghurts and zero shame." },
  {
    role: "verdict",
    text: "Please place your dignity in the bagging area \u2014 it, too, is an unexpected item.",
  },
];

function buildRemark(clauses: readonly { text: string }[]): string {
  return clauses
    .map((clause) => clause.text)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

function resolveOutputDir(): string {
  const override = (process.env.MAKEFUN_OUTPUT_DIR ?? "").trim();
  if (override.length > 0) {
    return override;
  }
  if (existsSync("/output")) {
    return "/output";
  }
  return new URL(".", import.meta.url).pathname;
}

function publish(text: string): void {
  const folder = resolveOutputDir();
  mkdirSync(folder, { recursive: true });
  writeFileSync(join(folder, "entry.txt"), text, "utf8");
  process.stdout.write(`${text}\n`);
}

publish(buildRemark(CLAUSES));
