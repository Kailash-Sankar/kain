exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("broadcasts")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("broadcasts").insert([
        {
          id: 1,
          title: "Upcoming downtime",
          description: "blah blah",
          type: "downtime",
          date: "2020-10-26 12:17:36",
        },
        {
          id: 2,
          title: "Conviva Streaming Report",
          description: "Report released with a lot of stats",
          type: "general",
          date: "2020-10-26 12:17:36",
        },
        {
          id: 3,
          title: "Release 2.18",
          description: "features a and b",
          type: "release",
          date: "2020-10-26 12:17:36",
        },
        {
          id: 4,
          title: "Maintanance window",
          description: "planned maintanance on 10th Nov 2020",
          type: "maintanance",
          date: "2020-10-26 12:17:36",
        },
        {
          id: 5,
          title: "New version",
          description: "Updated kain instance was deployed",
          type: "release",
          date: "2020-11-10 12:17:36",
        },
      ]);
    });
};
