exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          name: "Bubbles",
          email: "bubbles@powerpuffgirls.com",
          conversation_id: "a1b",
          active: true,
        },
        {
          id: 2,
          name: "Buttercup",
          email: "buttercup@powerpuffgirls.com",
          conversation_id: "a2b",
          active: true,
        },
        {
          id: 3,
          name: "Blossoms",
          email: "blossoms@powerpuffgirls.com",
          conversation_id: "a3b",
          active: true,
        },
        {
          id: 4,
          name: "Mojo Jojo",
          email: "mojojojo@evilpowerpuffgirls.com",
          conversation_id: "x1y",
          active: true,
        },
      ]);
    });
};
