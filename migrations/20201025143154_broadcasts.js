exports.up = function (knex) {
  return knex.schema.createTable("broadcasts", function (table) {
    table.increments(); // primary key, incrementing id
    table.string("title").notNullable();
    table.string("description").notNullable();
    table.string("type").notNullable();
    table.datetime("date").defaultTo(knex.fn.now());
    table.timestamps(false, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("broadcasts");
};
