const { AlertDispatcher } = require("./alert");
const { BroadcastDispatcher } = require("./broadcast");

// format and dispatch event to bot
function Dispatcher({ db, log }) {
  const handleAlert = AlertDispatcher({ db, log });
  const handleBroadcast = BroadcastDispatcher({ db, log });

  return async (event, data) => {
    log("dispatching event", event);

    switch (event.type) {
      case "alert":
        handleAlert(data);
        break;
      case "broadcast":
        handleBroadcast(data);
        break;
      default:
        log("invalid type");
    }
  };
}

module.exports = Dispatcher;
