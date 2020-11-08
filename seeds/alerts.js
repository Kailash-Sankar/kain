exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("alerts")
    .del()
    .then(function () {
      // Inserts seed entries
      /*
      return knex("alerts").insert([
        {
          name: "VSF Alerts",
          metric: "VideoStartFailures",
          condition: "greater",
          value: "10",
          user_id: "a1b",
        },
        {
          name: "Alert xyz",
          metric: "VideoPlaybackFailures",
          condition: "less",
          value: "2.6",
          user_id: "a2b",
        },
        {
          name: "Buffering alert",
          metric: "RebufferingRatio",
          condition: "equal",
          value: "12345",
          user_id: "a3b",
        },
        {
          name: "Secondary VSF Alerts",
          metric: "VideoStartFailures",
          condition: "greater",
          value: "9843",
          user_id: "a1b",
        },
      ]);
      */
    });
};
