exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: "ACueDwIpw7nJzwhueQ8lUS-c",
          name: "Saajan",
          email: "saajan@eva-bot-test.com",
          active: true,
          meta: JSON.stringify({ test_user: true, seed: "data" }),
        },
        {
          id: "2yUxoPQxVH9C7rZHGSXddu-k",
          name: "Sindhu",
          email: "sindhu@eva-bot-test.com",
          active: true,
          meta: JSON.stringify({ test_user: true, seed: "data" }),
        },
        {
          id: "9zdNoNT7tEU2PZNs9sMnG8-c",
          name: "Shubhansh",
          email: "shubhansh@eva-bot-test.com",
          active: true,
          meta: JSON.stringify({ test_user: true, seed: "data" }),
        },
        {
          id: "JkNWRd72OJP28eAQU8lDmx-k",
          name: "Kailash",
          email: "kailash@eva-bot-test.com",
          active: true,
          meta: JSON.stringify({ test_user: true, seed: "data" }),
        },
        {
          id: "1SgVaYXL2BKH5gceS5TNjl-k",
          name: "Helper",
          email: "help@eva-bot-test.com",
          active: false,
          meta: JSON.stringify({ test_user: true, seed: "data" }),
        },
      ]);
    });
};
