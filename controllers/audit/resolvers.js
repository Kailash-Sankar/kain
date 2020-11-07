const resolvers = {
  Query: {
    async audit(root, args, ctx) {
      const auditLogs = await ctx.db
        .select()
        .from("scheduler_queue")
        .orderBy("id", "desc")
        .limit(10);
      return auditLogs;
    },
  },
};

module.exports = resolvers;
