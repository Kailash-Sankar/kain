const initRouter = require("../../utils/initRouter");
const router = initRouter("user");

// get a user by conversation_id
router.get("/:conversationId", async (ctx) => {
  const conversationId = ctx.params.conversationId;
  const userRow = await ctx.db("users").where("id", conversationId).first();
  ctx.body = { data: userRow || null };
});

// add user
router.post("/", async (ctx) => {
  const { name, email, conversation_id } = ctx.request.body;
  await ctx.db("users").insert({
    id: conversation_id,
    name,
    email,
  });
  const newUser = await ctx.db("users").where("id", conversation_id).first();
  ctx.body = newUser;
});

// alerts by user
router.get("/:conversationId/alerts", async (ctx) => {
  const conversationId = ctx.params.conversationId;
  const alertsRow = await ctx
    .db("alerts")
    .where("user_id", conversationId)
    .orderBy("updated_at", "desc");
  ctx.body = { data: alertsRow };
});

module.exports = router;
