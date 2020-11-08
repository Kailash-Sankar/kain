exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("broadcasts")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("broadcasts").insert([
        {
          id: 1,
          title: "Conviva Streaming Report",
          description: "Report released with a lot of stats",
          type: "general",
          date: "2020-11-01T11:15:00+05:30",
        },
        {
          id: 2,
          title: "Upcoming Release",
          description: "blah blah",
          type: "maintanence",
          date: "2020-11-08T09:00:00+05:30",
        },
        {
          id: 3,
          title: "Release Notes v2.18",
          description: "features a and b",
          type: "release",
          date: "2020-11-12T08:00:00+05:30",
        },
      ]);
    });
};
