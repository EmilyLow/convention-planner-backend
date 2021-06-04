
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {id: 1, schedule_id: 2, event_name: "Test Event 1", start_time: 0, end_time: 0},
        {id: 2, schedule_id: 1, event_name: "Test Event 2", start_time: 0, end_time: 0},
        {id: 3, schedule_id: 1, event_name: "Test Event 3", start_time: 0, end_time: 0},
      ]);
    });
};
