import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const authPath = resolve("auth.js");
assert.ok(existsSync(authPath), "Missing shared auth.js account system");
assert.ok(existsSync(resolve("assets/journey-hero-scene.png")), "Missing generated journey hero scene asset");

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
  ["economy state", "economy"],
  ["coins field", "coins"],
  ["happiness field", "happiness"],
  ["level field", "level"],
  ["vip minutes field", "vipMinutes"],
  ["owned cosmetics field", "ownedCosmetics"],
  ["equipped cosmetics field", "equippedCosmetics"],
  ["reward ledger field", "rewardLedger"],
  ["event log field", "eventLog"],
  ["login API", "loginAccount"],
  ["logout API", "logoutAccount"],
  ["module data reader", "getModuleData"],
  ["module data writer", "setModuleData"],
  ["module data clearer", "clearModuleData"],
  ["economy API", "getEconomyState"],
  ["journey API", "getJourneyState"],
  ["award API", "awardHappinessAction"],
  ["purchase API", "purchaseShopItem"],
  ["equip API", "equipCosmetic"],
  ["progress summary", "getProgressSummary"],
  ["account widget", "injectAccountWidget"],
  ["home progress panel", "renderProgressPanel"],
  ["shop items", "shopItems"],
  ["sunny hoodie shop item", "sunnyHoodie"],
  ["sprout cape shop item", "sproutCape"],
  ["rainbow backpack shop item", "rainbowBackpack"],
  ["grass road shop item", "grassRoad"],
  ["star road shop item", "starRoad"],
  ["VIP 15 shop item", "vip15"],
  ["VIP 60 shop item", "vip60"],
];

for (const [label, token] of authContracts) {
  assert.ok(auth.includes(token), `Missing auth contract ${label}: ${token}`);
}

const pageContracts = [
  ["home loads auth", pages.home, 'src="auth.js"'],
  ["home account widget mount", pages.home, 'id="accountWidget"'],
  ["home progress panel", pages.home, "happykua-progress-panel"],
  ["home journey hero", pages.home, "journeyHero"],
  ["home journey path", pages.home, "journeyPath"],
  ["home generated journey art", pages.home, "assets/journey-hero-scene.png"],
  ["home 3d journey plane", pages.home, "journeyPlane"],
  ["home floating event orbs", pages.home, "floating-event-orb"],
  ["home avatar", pages.home, "journeyAvatar"],
  ["home event card", pages.home, "journeyEventCard"],
  ["home shop button", pages.home, "openJourneyShop"],
  ["home shop modal", pages.home, "journeyShop"],
  ["home economy render", pages.home, "renderJourneyHero"],
  ["home daily check-in award", pages.home, 'awardHappinessAction("dailyCheckIn"'],
  ["three good things loads auth", pages.threeGoodThings, 'src="auth.js"'],
  ["three good things module key", pages.threeGoodThings, 'threeGoodThings'],
  ["three good things reward", pages.threeGoodThings, 'awardHappinessAction("threeGoodThingsSaved"'],
  ["science loads auth", pages.science, 'src="auth.js"'],
  ["science module key", pages.science, '"science"'],
  ["science reward", pages.science, 'awardHappinessAction("scienceVisit"'],
  ["talent loads auth", pages.talent, 'src="auth.js"'],
  ["talent module key", pages.talent, '"talent"'],
  ["talent reward", pages.talent, 'awardHappinessAction("talentReportGenerated"'],
  ["card loads auth", pages.card, 'src="auth.js"'],
  ["card module key", pages.card, '"card"'],
  ["card reward", pages.card, 'awardHappinessAction("cardDraw"'],
  ["family loads auth", pages.family, 'src="auth.js"'],
  ["family module key", pages.family, '"family"'],
  ["family reward", pages.family, 'awardHappinessAction("familyReportGenerated"'],
  ["book loads auth", pages.book, 'src="auth.js"'],
  ["book module key", pages.book, '"book"'],
  ["book reward", pages.book, 'awardHappinessAction("bookOpened"'],
  ["life100 loads auth", pages.life100, 'src="../auth.js"'],
  ["life100 module key", pages.life100Script, '"life100"'],
  ["life100 reward", pages.life100Script, 'awardHappinessAction("life100GuideGenerated"'],
];

for (const [label, html, token] of pageContracts) {
  assert.ok(html.includes(token), `Missing page contract ${label}: ${token}`);
}

console.log("user account contract passed");
