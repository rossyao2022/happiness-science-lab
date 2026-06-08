import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const authPath = resolve("auth.js");
assert.ok(existsSync(authPath), "Missing shared auth.js account system");

const auth = readFileSync(authPath, "utf8");
const pages = {
  home: readFileSync(resolve("index.html"), "utf8"),
  threeGoodThings: readFileSync(resolve("three-good-things.html"), "utf8"),
  science: readFileSync(resolve("science.html"), "utf8"),
  talent: readFileSync(resolve("talent.html"), "utf8"),
  card: readFileSync(resolve("card.html"), "utf8"),
  family: readFileSync(resolve("family.html"), "utf8"),
  book: readFileSync(resolve("book.html"), "utf8"),
  life100: readFileSync(resolve("人生100/index.html"), "utf8"),
  life100Script: readFileSync(resolve("人生100/script.js"), "utf8"),
};

const authContracts = [
  ["global namespace", "window.HappyKuaAuth"],
  ["account index key", "happykua-accounts"],
  ["current account key", "happykua-current-account"],
  ["user data namespace", "happykua-user-data:"],
  ["login API", "loginAccount"],
  ["logout API", "logoutAccount"],
  ["module data reader", "getModuleData"],
  ["module data writer", "setModuleData"],
  ["module data clearer", "clearModuleData"],
  ["progress summary", "getProgressSummary"],
  ["account widget", "injectAccountWidget"],
  ["home progress panel", "renderProgressPanel"],
];

for (const [label, token] of authContracts) {
  assert.ok(auth.includes(token), `Missing auth contract ${label}: ${token}`);
}

const pageContracts = [
  ["home loads auth", pages.home, 'src="auth.js"'],
  ["home account widget mount", pages.home, 'id="accountWidget"'],
  ["home progress panel", pages.home, "happykua-progress-panel"],
  ["three good things loads auth", pages.threeGoodThings, 'src="auth.js"'],
  ["three good things module key", pages.threeGoodThings, 'threeGoodThings'],
  ["science loads auth", pages.science, 'src="auth.js"'],
  ["science module key", pages.science, '"science"'],
  ["talent loads auth", pages.talent, 'src="auth.js"'],
  ["talent module key", pages.talent, '"talent"'],
  ["card loads auth", pages.card, 'src="auth.js"'],
  ["card module key", pages.card, '"card"'],
  ["family loads auth", pages.family, 'src="auth.js"'],
  ["family module key", pages.family, '"family"'],
  ["book loads auth", pages.book, 'src="auth.js"'],
  ["book module key", pages.book, '"book"'],
  ["life100 loads auth", pages.life100, 'src="../auth.js"'],
  ["life100 module key", pages.life100Script, '"life100"'],
];

for (const [label, html, token] of pageContracts) {
  assert.ok(html.includes(token), `Missing page contract ${label}: ${token}`);
}

console.log("user account contract passed");
