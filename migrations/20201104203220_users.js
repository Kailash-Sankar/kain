exports.up = function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.increments(); // primary key, incrementing id
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.string("conversation_id").notNullable();
    table.boolean("active").defaultTo(true);
    table.timestamps(false, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
