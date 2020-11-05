const schedule = require("node-schedule");
const { getCursor } = require("../middlewares/database");
const { generateLogger } = require("../middlewares/logger");
const EventScheduler = require("./scheduler");
const { getNextBatch } = require("./utils");
const date = new Date(Date.now() + 3000);

function init(config) {
  // log that it's working
  schedule.scheduleJob(date, () => {
    // setup queue manager
    const db = getCursor();
    const log = generateLogger(config);
    const eventScheduler = EventScheduler({ db, log });
    const queueManager = QueueManager({ db, log, eventScheduler });

    console.log("initialized schedular");
    setInterval(() => {
      queueManager();
    }, config.queuePollFrequency);
  });
}

// read from queue and schedule jobs
function QueueManager({ db, log, eventScheduler }) {
  return async () => {
    log("polling for events");
    const events = await getNextBatch(db);
    log("next batch", events);
    events.forEach((event) => {
      eventScheduler(event);
    });
  };
}

module.exports = init;
