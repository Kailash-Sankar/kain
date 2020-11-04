const initRouter = require("../../utils/initRouter");
const router = initRouter("user");

// get a user by conversation_id
router.get("/:conversationId", async (ctx) => {
  const conversationId = ctx.params.conversationId;
  const userRow = await ctx
    .db("users")
    .where("conversation_id", conversationId);

  ctx.body = userRow.length
    ? {
        data: userRow[0],
      }
    : {
        message: "User not found",
        data: null,
      };
});

// add user
router.post("/", async (ctx) => {
  const { name, email, conversation_id } = ctx.request.body;
  const [id] = await ctx.db("users").insert({
    name,
    email,
    conversation_id,
  });
  const newUser = await ctx.db("users").where("id", id);
  ctx.body = newUser[0];
});

module.exports = router;
