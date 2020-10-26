exports.up = function (knex) {
  return knex.schema.createTable("messages", function (table) {
    table.increments(); // primary key, incrementing id
    table.string("title").notNullable();
    table.string("description").notNullable();
    table.boolean("status").defaultTo(0);
    table.timestamps(false, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("messages");
};
