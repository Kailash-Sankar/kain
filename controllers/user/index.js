const initRouter = require("../../utils/initRouter");
const router = initRouter("user");

const formatUser = (userRow) => ({
  ...userRow,
  meta: JSON.parse(userRow.meta),
});

// get all users or user by conversation_id
router.get("/:conversationId", async (ctx) => {
  const conversationId = ctx.params.conversationId;
  if (conversationId === "all") {
    const usersList = await ctx
      .db("users")
      .where("active", true)
      .orderBy("updated_at", "desc");
    ctx.body = { data: usersList.map((userRow) => formatUser(userRow)) };
  } else {
    const userRow = await ctx.db("users").where("id", conversationId).first();
    ctx.body = { data: userRow ? formatUser(userRow) : null };
  }
});

// update a user's meta info
router.post("/:conversationId", async (ctx) => {
  const conversationId = ctx.params.conversationId;
  const { meta } = ctx.request.body;
  await ctx
    .db("users")
    .where("id", conversationId)
    .update({
      meta: JSON.stringify(meta),
    });
  const updatedUser = await ctx.db("users").where("id", conversationId).first();
  ctx.body = { data: formatUser(updatedUser) };
});

// add user
router.post("/", async (ctx) => {
  const { name, email, conversation_id, meta } = ctx.request.body;
  await ctx.db("users").insert({
    id: conversation_id,
    name,
    email,
    meta: JSON.stringify(meta),
  });
  const newUser = await ctx.db("users").where("id", conversation_id).first();
  ctx.body = { data: formatUser(newUser) };
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
