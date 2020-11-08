const initRouter = require("../../utils/initRouter");
const router = initRouter("broadcasts");

router.get("/", async (ctx) => {
  const broadcasts = await ctx.db.select().from("broadcasts");
  ctx.body = broadcasts;
});

router.get("/err", (ctx) => {
  throw new Error("simulated error");
});

module.exports = router;
