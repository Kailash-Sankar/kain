// format and schedule an alert
function AlertDispatcher({ db, log, bot }) {
  return async (event) => {
    log("dispatching alert event", event);
    const alert = await getAlert(db, event.alert_id);
    const { trigger_value, trigger_date, diagnostic_url } = event;
    const { metric, condition, value, name } = alert;
    const url = bot.config.alertEndpoint + "/" + alert.user_id;
    await bot.axios.post(url, {
      trigger_value,
      trigger_date,
      diagnostic_url,
      metric,
      condition,
      value,
      name,
    });
  };
}

function AlertScheduler({ db, log }) {
  return async (event) => {
    const alert = await getAlertEvent(db, event.type_id);
    return { date: "now", data: alert };
  };
}

function getAlertEvent(db, alert_event_id) {
  return db("alert_events").where("id", alert_event_id).first();
}

function getAlert(db, alert_id) {
  return db("alerts").where("id", alert_id).first();
}

module.exports = {
  AlertDispatcher,
  AlertScheduler,
};
