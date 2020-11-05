// format and schedule an alert
function AlertDispatcher({ db, log }) {
  return (alert) => {
    log("dispatching alert event", alert);
  };
}

function AlertScheduler({ db, log }) {
  return async (item) => {
    const alert = await getAlert(db, item.type_id);
    return { date: "now", data: alert };
  };
}

function getAlert(db, alert_id) {
  return db("alerts").where("id", alert_id).first();
}

module.exports = {
  AlertDispatcher,
  AlertScheduler,
};
