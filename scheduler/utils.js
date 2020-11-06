const axios = require("axios");
const BATCH_SIZE = 25;

function getBotInterface(config) {
  return {
    axios: axios.create({
      baseURL: process.env.BOT_URL,
      timeout: 3000,
    }),
    config,
  };
}

function getEvent(db, queue_id) {
  return db("scheduler_queue").where("id", queue_id).first();
}

function updateEvent(db, queue_id, status) {
  return db("scheduler_queue").where("id", queue_id).update({
    status,
  });
}

function getNextBatch(db) {
  return db("scheduler_queue")
    .where("status", 0)
    .orderBy("id", "asc")
    .limit(BATCH_SIZE);
}

module.exports = {
  getEvent,
  updateEvent,
  getNextBatch,
  getBotInterface,
};
