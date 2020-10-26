const { TransformRootFields } = require("apollo-server-koa");

const resolvers = {
  Query: {
    async Messages(root, args, ctx) {
      const messages = await ctx.db.select().from("messages");
      return messages;
    },
    async Message(root, args, ctx) {
      console.log("here", args);
      const message = await ctx.db("messages").where("id", args.id);
      console.log("result", message);
      return message[0];
    },
  },
};

module.exports = resolvers;
