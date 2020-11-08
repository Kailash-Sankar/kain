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
          type_id: 1,
          status: 2,
        },
        {
          type: "broadcast",
          type_id: 2,
          status: 1,
        },
        {
          type: "broadcast",
          type_id: 3,
          status: 0,
        },
      ]);
    });
};
