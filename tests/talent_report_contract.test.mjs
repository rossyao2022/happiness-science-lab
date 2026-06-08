import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const html = readFileSync(resolve("talent.html"), "utf8");

const requiredTokens = [
  ["answers storage", "talentAnswers"],
  ["report view", 'id="reportView"'],
  ["report storage key", "happykua-talent-report"],
  ["generate report action", "generateTalentReport"],
  ["render report function", "renderReport"],
  ["restart function", "restartTalentLab"],
  ["core talent section", "coreTalent"],
  ["KUA action section", "kuaActions"],
];

for (const [label, token] of requiredTokens) {
  assert.ok(html.includes(token), `Missing ${label}: ${token}`);
}

const functionContracts = [
  "buildTalentReport",
  "detectTalentThemes",
  "generateTalentReport",
  "renderReport",
  "saveTalentState",
];

for (const fn of functionContracts) {
  assert.match(html, new RegExp(`function\\s+${fn}\\s*\\(`), `Missing ${fn}()`);
}

console.log("talent report contract passed");
