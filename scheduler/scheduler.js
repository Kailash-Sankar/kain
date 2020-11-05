const schedule = require("node-schedule");
const { AlertScheduler } = require("./alert");
const { BroadcastScheduler } = require("./broadcast");
const Dispatcher = require("./dispatcher");

// format and dispatch event to bot
function EventScheduler({ db, log }) {
  const handleAlert = AlertScheduler({ db, log });
  const handleBroadcast = BroadcastScheduler({ db, log });
  const dispatcher = Dispatcher({ db, log });

  return async (event) => {
    // log("scheduling event", event);
    let res = {};

    switch (event.type) {
      case "alert":
        res = await handleAlert(event);
        break;
      case "broadcast":
        res = await handleBroadcast(event);
        break;
      default:
        log("invalid type");
    }

    log("processed event", res);
    const { date, data } = res;
    if (date && data) {
      if (date === "now") {
        setTimeout(() => dispatcher(event, data));
      } else {
        schedule.scheduleJob(date, () => {
          dispatcher(event, data);
        });
      }
    }
  };
}

module.exports = EventScheduler;
