exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("alert_events").del();
};
