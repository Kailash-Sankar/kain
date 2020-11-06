const router = require("koa-better-router")().loadMethods();
const osu = require("node-os-utils");

router.get("/", (ctx) => {
  ctx.body = "Kain server for Eva bot";
});

router.get("/health", async (ctx) => {
  const info = {
    cpu: await osu.cpu.usage(),
    drive: await osu.drive.free(),
    memory: await osu.mem.free(),
    uptime: await osu.os.uptime(),
  };

  ctx.body = info;
});

module.exports = router;
