const assert = require("node:assert/strict");
const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({
    headless: true,
    executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
  });
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });

  await page.goto("http://localhost:4173/index.html", { waitUntil: "networkidle" });
  await page.evaluate(() => {
    Object.keys(localStorage)
      .filter((key) => key.startsWith("happykua-"))
      .forEach((key) => localStorage.removeItem(key));
  });
  await page.reload({ waitUntil: "networkidle" });

  await page.locator("[data-hkua-account-toggle]").click();
  await page.locator('[name="name"]').fill("测试用户");
  await page.locator('[name="email"]').fill("test-user@happykua.local");
  await page.locator("[data-hkua-login-form]").locator("button").click();

  const currentAccount = await page.evaluate(() => localStorage.getItem("happykua-current-account"));
  assert.ok(currentAccount?.startsWith("user-"), "login should set current local account");

  await page.locator("#journeyHero").waitFor({ state: "visible", timeout: 4000 });
  await assertVisibleText(page, "测试用户 的档案");
  await page.locator('[data-economy-field="coins"]').waitFor({ state: "visible", timeout: 4000 });
  await page.locator('#journeyPath[data-scene="morning-start"]').waitFor({ state: "visible", timeout: 4000 });
  assert.equal(await page.locator("#journeyAvatar").count(), 0, "journey should not render a floating overlay avatar");
  assert.equal(await page.locator("#journeyPlane").count(), 0, "journey should not render a floating overlay plane");

  let economy = await page.evaluate(() => window.HappyKuaAuth.getEconomyState());
  assert.equal(economy.coins, 10, "daily homepage check-in should award 10 coins once");
  assert.equal(economy.happiness, 5, "daily homepage check-in should award 5 happiness once");
  assert.equal(economy.vipMinutes, 0, "new user should start with no VIP minutes");

  await page.goto("http://localhost:4173/three-good-things.html", { waitUntil: "networkidle" });
  await page.locator('[data-action="start-collect"]').click();
  for (const entry of ["今天认真吃了早餐", "朋友听我说话", "完成了一件小事"]) {
    await page.locator("#goodThingInput").fill(entry);
    await page.locator('[data-action="collect-spark"]').click();
  }
  await page.locator("button", { hasText: /我愿意做到|I'll do this/ }).click();

  let userData = await page.evaluate(() => {
    const id = localStorage.getItem("happykua-current-account");
    return JSON.parse(localStorage.getItem(`happykua-user-data:${id}`));
  });
  assert.equal(userData.modules.threeGoodThings.records.length, 1, "three good things should save under current user");
  assert.equal(userData.economy.coins, 45, "three good things should add 35 coins after check-in");
  assert.equal(userData.economy.happiness, 30, "three good things should add 25 happiness after check-in");
  assert.ok(userData.economy.eventLog.length >= 2, "reward events should be logged");

  await page.goto("http://localhost:4173/%E4%BA%BA%E7%94%9F100/index.html", { waitUntil: "networkidle" });
  await page.locator("#heroAgeInput").fill("42");
  await page.locator("#heroAgeForm button").click();

  userData = await page.evaluate(() => {
    const id = localStorage.getItem("happykua-current-account");
    return JSON.parse(localStorage.getItem(`happykua-user-data:${id}`));
  });
  assert.equal(userData.modules.life100.activeAge, 42, "life100 age should save under current user");
  assert.equal(userData.economy.coins, 57, "life100 guide should add 12 coins once");
  assert.equal(userData.economy.happiness, 38, "life100 guide should add 8 happiness once");

  await page.goto("http://localhost:4173/card.html", { waitUntil: "networkidle" });
  for (let index = 0; index < 4; index += 1) {
    await page.locator(".card-container").click();
  }

  userData = await page.evaluate(() => {
    const id = localStorage.getItem("happykua-current-account");
    return JSON.parse(localStorage.getItem(`happykua-user-data:${id}`));
  });
  assert.equal(userData.modules.card.draws, 4, "four card draws should be recorded");
  assert.equal(userData.economy.coins, 81, "only the first three daily card draws should add coins");
  assert.equal(userData.economy.happiness, 53, "only the first three daily card draws should add happiness");

  await page.goto("http://localhost:4173/index.html", { waitUntil: "networkidle" });
  await page.locator("[data-happykua-progress-panel]").waitFor({ state: "visible", timeout: 4000 });
  await assertVisibleText(page, "测试用户 的档案");
  await assertVisibleText(page, "1 天练习");
  await assertVisibleText(page, "最近查看 42 岁");
  await page.locator("#journeyHero").getByText("幸福币").first().waitFor({ state: "visible", timeout: 4000 });
  await assertVisibleText(page, "最近查看 42 岁");
  await page.evaluate(() => {
    window.HappyKuaAuth.awardHappinessAction("familyReportGenerated", {
      label: "测试家庭方案",
      coins: 0,
      happiness: 0,
      daily: false
    });
  });
  await page.locator('#journeyPath[data-scene="sunset-platform"]').waitFor({ state: "visible", timeout: 4000 });

  await page.evaluate(() => {
    window.HappyKuaAuth.awardHappinessAction("testBonus", {
      coins: 300,
      happiness: 0,
      label: "测试奖励",
      daily: false
    });
  });
  await page.reload({ waitUntil: "networkidle" });
  await page.locator('[data-action="open-journey-shop"]').click();
  await page.locator('[data-shop-item="sunnyHoodie"]').click();
  await page.locator('[data-shop-item="vip15"]').click();
  await page.reload({ waitUntil: "networkidle" });

  economy = await page.evaluate(() => window.HappyKuaAuth.getEconomyState());
  assert.ok(economy.ownedCosmetics.includes("sunnyHoodie"), "purchased avatar cosmetic should persist");
  assert.equal(economy.equippedCosmetics.avatar, "sunnyHoodie", "purchased avatar cosmetic should be equipped");
  assert.equal(economy.vipMinutes, 15, "purchased VIP minutes should persist");
  assert.equal(economy.coins, 101, "coin balance should subtract purchases");

  await page.screenshot({ path: "tests/user-account-flow.png", fullPage: true });
  await browser.close();
  console.log("user account browser flow passed");
})().catch((error) => {
  console.error(error);
  process.exit(1);
});

async function assertVisibleText(page, text) {
  await page.locator("[data-happykua-progress-panel]").getByText(text).first().waitFor({ state: "visible", timeout: 4000 });
}
