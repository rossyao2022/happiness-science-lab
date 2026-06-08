const assert = require("node:assert/strict");
const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({
    headless: true,
    executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
  });
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await page.goto("http://localhost:4173/talent.html", { waitUntil: "networkidle" });
  await page.evaluate(() => {
    localStorage.removeItem("happykua-talent-state");
    localStorage.removeItem("happykua-talent-report");
  });
  await page.reload({ waitUntil: "networkidle" });

  const messages = [
    "开始",
    "小时候我喜欢写故事、观察同学，也经常被说太敏感。",
    "我很自然就能把复杂的问题分析清楚，也能听出别人真正想表达什么。",
    "做创作和帮助别人梳理问题会让我很累，但精神很亮。",
    "我羡慕那些能公开表达自己、持续做作品的人。"
  ];

  for (const message of messages) {
    await page.locator("#userInput").fill(message);
    await page.locator("#sendButton").click();
    await page.waitForTimeout(650);
  }

  await page.locator("#generateButton").waitFor({ state: "visible", timeout: 4000 });
  await page.locator("#generateButton").click();
  await page.locator("#reportView.active").waitFor({ state: "visible", timeout: 4000 });

  const coreTalent = await page.locator("#coreTalent").innerText();
  assert.ok(coreTalent.length > 2, "core talent should be generated");

  const report = await page.evaluate(() => JSON.parse(localStorage.getItem("happykua-talent-report") || "null"));
  assert.ok(report, "report should be saved");
  assert.equal(report.clues.length, 4, "report should include four clues");
  assert.equal(report.kua.length, 3, "report should include KUA actions");

  await page.screenshot({ path: "tests/talent-report-flow.png", fullPage: true });
  await browser.close();
  console.log("talent report browser flow passed");
})().catch(error => {
  console.error(error);
  process.exit(1);
});
