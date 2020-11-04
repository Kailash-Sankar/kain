exports.up = function (knex) {
  return knex.schema.createTable("alerts", function (table) {
    table.increments(); // primary key, incrementing id
    table.string("name").notNullable();
    table.string("metric").notNullable();
    table.string("condition").notNullable();
    table.boolean("active").defaultTo(true);
    table.string("user_id").notNullable();
    table.timestamps(false, true);
    // foreign key to users table
    table.foreign("user_id").references("id").inTable("users");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("alerts");
};
