const initRouter = require("../../utils/initRouter");
const router = initRouter("todos");

router.get("/", async (ctx) => {
  console.log("on route");
  const todos = await ctx.db.select().table("todos");
  ctx.body = todos;
});

router.get("/err", (ctx) => {
  throw new Error("simulated error");
});

module.exports = router;
