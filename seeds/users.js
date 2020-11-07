exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: "a1b",
          name: "Bubbles",
          email: "bubbles@powerpuffgirls.com",
          active: true,
          meta: JSON.stringify({ test_user: true, seed: "data" }),
        },
        {
          id: "a2b",
          name: "Buttercup",
          email: "buttercup@powerpuffgirls.com",
          active: true,
          meta: JSON.stringify({ test_user: true, seed: "data" }),
        },
        {
          id: "a3b",
          name: "Blossoms",
          email: "blossoms@powerpuffgirls.com",
          active: true,
          meta: JSON.stringify({ test_user: true, seed: "data" }),
        },
        {
          id: "x1y",
          name: "Mojo Jojo",
          email: "mojojojo@evilpowerpuffgirls.com",
          active: true,
          meta: JSON.stringify({ test_user: true, seed: "data" }),
        },
      ]);
    });
};
