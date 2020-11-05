const BATCH_SIZE = 25;

function getEvent(db, queue_id) {
  return db("scheduler_queue").where("id", queue_id).first();
}

function getNextBatch(db) {
  return db("scheduler_queue")
    .where("status", 0)
    .orderBy("id", "asc")
    .limit(BATCH_SIZE);
}

module.exports = {
  getEvent,
  getNextBatch,
};
