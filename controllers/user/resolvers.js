const resolvers = {
  Query: {
    async Users(root, args, ctx) {
      const users = await ctx.db.select().from("users").orderBy("id", "desc");
      return users;
    },
    async User(root, args, ctx) {
      const user = await ctx.db("users").where("id", args.id).first();
      return user;
    },
  },
};

module.exports = resolvers;
