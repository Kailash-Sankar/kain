// seeds are run in alphabetical order

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("scheduler_queue")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("scheduler_queue").insert([
        {
          type: "broadcast",
          type_id: 5,
        },
      ]);
    });
};
