// format and dispatch a broadcast event
function BroadcastDispatcher({ db, log }) {
  return (msg) => {
    log("dispatching boradcast event", msg);
  };
}

function BroadcastScheduler({ db, log }) {
  return (msg) => {
    log("scheduling boradcast event", msg);
  };
}

module.exports = {
  BroadcastDispatcher,
  BroadcastScheduler,
};
