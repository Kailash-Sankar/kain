const _ = require("lodash");
const statusObj = require("./util/status");

const resolvers = {
  Query: {
    async broadcasts(root, args, ctx) {
      let broadcasts = await ctx.db.select().from("broadcasts");
      const broadcastIds = _.map(broadcasts,"id");
      const queue = await ctx.db.select().from("scheduler_queue").whereIn("type_id", broadcastIds).where("type","broadcast");
      
      broadcasts = queue.map(queueItem => {
        const thisBroadCast = broadcasts.find(broadcast => (broadcast.id== queueItem.type_id));
          return {
            ...thisBroadCast,
            status: statusObj[queueItem.status]
          }
      });

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
