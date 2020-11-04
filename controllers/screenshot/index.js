const initRouter = require("../../utils/initRouter");
const router = initRouter("screenshot");
const puppeteer = require('puppeteer');

router.get('/', async (ctx) => {
    ctx.body = "Koa server" + JSON.stringify(ctx.request.body);
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
    await page.waitForSelector('#puppeteer', {visible: true})
    await page.screenshot({ path: 'public/images/screenshot/example.png', fullPage: true });
    await browser.close();
});

module.exports = router;