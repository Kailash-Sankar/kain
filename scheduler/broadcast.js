const { axiosBot } = require("./utils");

// format and dispatch a broadcast event
function BroadcastDispatcher({ bot, db, log }) {
  return (msg) => {
    log("dispatching boradcast event", msg);
    const { title, description, type } = msg;
    const url = bot.broadcastEndpoint;
    axiosBot.post(url, {
      title,
      description,
      type,
    });
  };
}

function BroadcastScheduler({ db, log }) {
  return async (event) => {
    const broadcast = await getBroadcastEvent(db, event.type_id);
    // TODO: format input date
    return { date: new Date(Date.now() + 5000), data: broadcast };
  };
}

function getBroadcastEvent(db, id) {
  return db("broadcasts").where("id", id).first();
}

module.exports = {
  BroadcastDispatcher,
  BroadcastScheduler,
};
