const resolvers = {
  Query: {
    async Messages(root, args, ctx) {
      const messages = await ctx.db.select().from("messages");
      return messages;
    },
    async Message(root, args, ctx) {
      const message = await ctx.db("messages").where("id", args.id);
      return message[0];
    },
  },
  Mutation: {
    async addMessage(root, args, ctx) {
      const { title, description } = args.message;
      const [id] = await ctx.db("messages").insert({
        title: title,
        description: description,
      });
      const newMessage = await ctx.db("messages").where("id", id);
      return newMessage[0];
    },
  },
};

module.exports = resolvers;
