exports.up = function (knex) {
  return knex.schema.createTable("alert_events", function (table) {
    table.increments(); // primary key, incrementing id
    table.string("alert_id").notNullable();
    table.integer("trigger_value").notNullable();
    table.string("trigger_date").notNullable();
    table.string("diagnostic_url").notNullable();
    table.timestamps(false, true);
    // foreign key to users table
    table.foreign("alert_id").references("id").inTable("alerts");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("alert_events");
};
