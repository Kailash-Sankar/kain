const moment = require("moment");

// format and dispatch a broadcast event
function BroadcastDispatcher({ bot, db, log }) {
  return async (msg) => {
    log("dispatching boradcast event", msg);
    const { title, description, type } = msg;
    const url = bot.config.broadcastEndpoint;
    await bot.axios.post(url, {
      title,
      description,
      type,
    });
  };
}

function BroadcastScheduler({ db, log }) {
  return async (event) => {
    const broadcast = await getBroadcastEvent(db, event.type_id);
    // default, or for past entries
    let date = new Date(Date.now() + 1000);
    if (moment(broadcast.date).isAfter()) {
      date = new Date(broadcast.date);
    }
    return { date, data: broadcast };
  };
}

function getBroadcastEvent(db, id) {
  return db("broadcasts").where("id", id).first();
}

module.exports = {
  BroadcastDispatcher,
  BroadcastScheduler,
};
