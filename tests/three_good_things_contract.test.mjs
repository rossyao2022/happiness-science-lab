import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const html = readFileSync(resolve("three-good-things.html"), "utf8");

const requiredContracts = [
  ["start collection button", 'data-action="start-collect"'],
  ["collector view", 'id="collectorView"'],
  ["good thing input", 'id="goodThingInput"'],
  ["collect spark button", 'data-action="collect-spark"'],
  ["KUA action screen", 'id="kuaActionView"'],
  ["make easier action", 'data-action="make-easier"'],
  ["happiness garden", 'id="gardenView"'],
  ["local storage key", "happykua-three-good-things"],
];

for (const [label, token] of requiredContracts) {
  assert.ok(html.includes(token), `Missing ${label}: ${token}`);
}

const functionContracts = [
  "startCollection",
  "collectSpark",
  "renderKuaAction",
  "savePractice",
  "renderGarden",
];

for (const fn of functionContracts) {
  assert.match(html, new RegExp(`function\\s+${fn}\\s*\\(`), `Missing ${fn}()`);
}

console.log("three-good-things interaction contract passed");
