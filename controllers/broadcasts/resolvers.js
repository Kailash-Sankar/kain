const resolvers = {
  Query: {
    async broadcasts(root, args, ctx) {
      const broadcasts = await ctx.db.select().from("broadcasts");
      return broadcasts;
    },
    async broadcast(root, args, ctx) {
      const broadcast = await ctx.db("broadcasts").where("id", args.id).first();
      return broadcast;
    },
  },
  Mutation: {
    async addBroadcast(root, args, ctx) {
      const { title, description, type, date } = args.message;
      // add broadcast
      const [id] = await ctx.db("broadcasts").insert({
        title,
        description,
        type,
        date,
      });
      // add to scheduler queue
      await ctx.db("scheduler_queue").insert({
        type: "broadcast",
        type_id: id,
      });
      const newBroadcast = await ctx.db("broadcasts").where("id", id).first();
      return newBroadcast;
    },
  },
};

module.exports = resolvers;
