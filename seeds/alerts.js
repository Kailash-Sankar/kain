exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("alerts")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("alerts").insert([
        {
          name: "VSF Alerts",
          metric: "VideoStartFailures",
          condition: "> 2%",
          user_id: "a1b",
        },
        {
          name: "Alert xyz",
          metric: "VideoPlaybackFailures",
          condition: "> 10%",
          user_id: "a2b",
        },
        {
          name: "Buffering alert",
          metric: "RebufferingRatio",
          condition: "> 3%",
          user_id: "a3b",
        },
        {
          name: "Secondary VSF Alerts",
          metric: "VideoStartFailures",
          condition: "> 4%",
          user_id: "a1b",
        },
      ]);
    });
};
