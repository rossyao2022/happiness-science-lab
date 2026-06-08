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

  await page.goto("http://localhost:4173/%E4%BA%BA%E7%94%9F100/index.html", { waitUntil: "networkidle" });
  await page.locator("#heroAgeInput").fill("42");
  await page.locator("#heroAgeForm button").click();

  userData = await page.evaluate(() => {
    const id = localStorage.getItem("happykua-current-account");
    return JSON.parse(localStorage.getItem(`happykua-user-data:${id}`));
  });
  assert.equal(userData.modules.life100.activeAge, 42, "life100 age should save under current user");

  await page.goto("http://localhost:4173/index.html", { waitUntil: "networkidle" });
  await page.locator("[data-happykua-progress-panel]").waitFor({ state: "visible", timeout: 4000 });
  await assertVisibleText(page, "测试用户 的档案");
  await assertVisibleText(page, "1 天练习");
  await assertVisibleText(page, "最近查看 42 岁");

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
