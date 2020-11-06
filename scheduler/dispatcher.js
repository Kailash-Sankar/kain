const { AlertDispatcher } = require("./alert");
const { BroadcastDispatcher } = require("./broadcast");
const { bot: botConfig } = require("../config");
const { updateEvent, getBotInterface } = require("./utils");

// format and dispatch event to bot
function Dispatcher({ db, log }) {
  const bot = getBotInterface(botConfig);
  const handleAlert = AlertDispatcher({ db, log, bot });
  const handleBroadcast = BroadcastDispatcher({ db, log, bot });

  return async (event, data) => {
    log("dispatching event", event);
    try {
      switch (event.type) {
        case "alert":
          await handleAlert(data);
          break;
        case "broadcast":
          await handleBroadcast(data);
          break;
        default:
          log("invalid type");
      }
      await updateEvent(db, event.id, 2);
    } catch (err) {
      log(event.id, err);
      await updateEvent(db, event.id, -1);
    }
  };
}

module.exports = Dispatcher;
