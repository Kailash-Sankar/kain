
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, tasks: 'Setup environments', status: 0 },
        {id: 2, tasks: 'Addd some tests', status: 0 },
        {id: 3, tasks: 'Setup GraphQL', status: 0 },
        {id: 4, tasks: 'Error handling', status: 0 },
        {id: 5, tasks: 'Docker file', status: 0 },
      ]);
    });
};
