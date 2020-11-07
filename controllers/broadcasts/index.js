const initRouter = require("../../utils/initRouter");
const router = initRouter("broadcasts");

router.get("/", async (ctx) => {
  let broadcasts = await ctx.db.select().from("broadcasts");
  const queue = await ctx.db.select().from("scheduler_queue");
  const statusObj = {
    "-1": "Scheduled",
    "2": "Delievered"
  }
  broadcasts = broadcasts.map(broadcast => {
    const broadcastStatus = queue.find(item => (item.type_id == broadcast.id));
    return {
      ...broadcast,
      status: statusObj[broadcastStatus.status]
    }
  });
  ctx.body = broadcasts;
});

router.get("/err", (ctx) => {
  throw new Error("simulated error");
});

module.exports = router;
