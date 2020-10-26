exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("messages")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("messages").insert([
        {
          id: 1,
          title: "Setup environments",
          description: "Test entry",
          status: 0,
        },
        {
          id: 2,
          title: "Addd some tests",
          description: "Test entry",
          status: 0,
        },
        { id: 3, title: "Setup GraphQL", description: "Test entry", status: 1 },
        {
          id: 4,
          title: "Error handling",
          description: "Test entry",
          status: 0,
        },
        { id: 5, title: "Docker file", description: "Test entry", status: 0 },
      ]);
    });
};
