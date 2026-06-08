const assert = require("node:assert/strict");
const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({
    headless: true,
    executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
  });
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await page.goto("http://localhost:4173/three-good-things.html", { waitUntil: "networkidle" });
  await page.evaluate(() => localStorage.removeItem("happykua-three-good-things"));
  await page.reload({ waitUntil: "networkidle" });

  await page.locator('[data-action="start-collect"]').click();
  await assertVisible(page, "#collectorView.active", "collector view should open");

  const entries = [
    "今天早上阳光很好",
    "朋友给我发了一条消息",
    "我完成了一个小任务"
  ];

  for (const entry of entries) {
    await page.locator("#goodThingInput").fill(entry);
    await page.locator('[data-action="collect-spark"]').click();
  }

  await assertVisible(page, "#kuaActionView.active", "KUA action view should open after three sparks");
  const firstAction = await page.locator("#actionText").innerText();
  assert.ok(firstAction.length > 4, "KUA action should be generated");

  await page.locator('[data-action="make-easier"]').click();
  const easierAction = await page.locator("#actionText").innerText();
  assert.notEqual(easierAction, firstAction, "make easier should simplify the action");

  await page.locator("button", { hasText: /我愿意做到|I'll do this/ }).click();
  await assertVisible(page, "#gardenView.active", "garden should open after saving");

  const records = await page.evaluate(() => JSON.parse(localStorage.getItem("happykua-three-good-things") || "[]"));
  assert.equal(records.length, 1, "one practice record should be saved");
  assert.equal(records[0].things.length, 3, "saved record should contain three good things");
  assert.ok(records[0].action, "saved record should include KUA action");

  await page.screenshot({ path: "tests/three-good-things-flow.png", fullPage: true });
  await browser.close();
  console.log("three-good-things browser flow passed");
})().catch(async error => {
  console.error(error);
  process.exit(1);
});

async function assertVisible(page, selector, message) {
  await page.locator(selector).waitFor({ state: "visible", timeout: 4000 });
  assert.ok(await page.locator(selector).isVisible(), message);
}
