const { getRandomNumber } = require("./utils");

async function generateAlert(db, alert) {
  // add to alert events
  const [event_id] = await db("alert_events").insert({
    alert_id: alert.id,
    trigger_value: getRandomNumber({ min: 25, max: 50 }),
    trigger_date: new Date().toLocaleString(),
    diagnostic_url: "/report/work-in-progress",
  });

  // add to scheduler
  await db("scheduler_queue").insert({
    type: "alert",
    type_id: event_id,
  });
}

function mockAlertEvent({ db, config = {}, log }) {
  if (config.enabled) {
    setInterval(async () => {
      log("generating mock alerts");
      const alerts = await getAlerts(db);
      const howMany = getRandomNumber(config.rate);
      for (let i = 0; i < howMany; i++) {
        // pick a random alert and generate event
        const alert = alerts[getRandomNumber({ min: 0, max: alerts.length })];
        await generateAlert(db, alert);
      }
    }, config.frequency);
  }
}

function getAlerts(db) {
  return db("alerts").where("active", true).orderBy("id", "desc").limit(100);
}

module.exports = mockAlertEvent;
module.exports.generateAlert = generateAlert;
