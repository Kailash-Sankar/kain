const initRouter = require("../../utils/initRouter");
const router = initRouter("broadcasts");

router.get("/", async (ctx) => {
  console.log("on route");
  const todos = await ctx.db.select().from("broadcasts");
  ctx.body = todos;
});

router.get("/err", (ctx) => {
  throw new Error("simulated error");
});

module.exports = router;
