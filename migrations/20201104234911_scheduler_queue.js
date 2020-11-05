exports.up = function (knex) {
  return knex.schema.createTable("scheduler_queue", function (table) {
    // primary key, incrementing id
    table.increments();
    // type of action - alert, broadcast
    table.string("type").notNullable();
    // action data identifier, like alert_id or broadcast_id
    table.string("type_id").notNullable();
    // queue status, 0: waiting,  1:queued, 2:completed, -1: failed
    table.string("status").notNullable();
    table.timestamps(false, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("scheduler_queue");
};
