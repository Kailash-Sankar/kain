const broadcast = require("../scheduler/broadcast");

exports.up = function (knex) {
  return knex.schema.createTable("users", function (table) {
    // conversation id
    table.string("id").notNullable().unique();
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.boolean("active").defaultTo(true);
    table.json("meta").notNullable();
    table.timestamps(false, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
