const initRouter = require("../../utils/initRouter");
const router = initRouter("screenshot");
const puppeteer = require("puppeteer");

router.post("/", async (ctx) => {
  const { type, range, name } = ctx.request.body;
  const browser = await puppeteer.launch({
    args: ["--no-sandbox"],
  });
  const page = await browser.newPage();
  await page.goto(`${process.env.UI_URL}/${type}?name=${name}&range=${range}`, {
    waitUntil: "networkidle2",
  });
  await page.waitForSelector("#puppeteer", { visible: true });
  await page.screenshot({
    path: `public/images/screenshot/${name}.png`,
    fullPage: true,
  });
  await browser.close();
  ctx.body = "Koa server" + JSON.stringify(ctx.request.body);
});

module.exports = router;
