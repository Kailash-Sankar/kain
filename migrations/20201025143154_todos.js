
exports.up = function(knex) {
  return knex.schema.createTable('todos', function(table){
    table.increments(); // primary key, incrementing id
    table.string('tasks');
    table.integer('priority');
    table.boolean('status');
    table.timestamps();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('todos');
};
