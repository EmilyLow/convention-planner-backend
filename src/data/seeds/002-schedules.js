
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('schedules').del()
    .then(function () {
      // Inserts seed entries
      return knex('schedules').insert([
        {id: 1, schedule_name: 'Core', personal_schedule: false},
        {id: 2, schedule_name: 'Events', personal_schedule: false},
        {id: 3, schedule_name: 'Test Table 3', personal_schedule: false},
        {id: 4, personal_schedule: true},
        {id: 5, personal_schedule: true},
      ]);
    });
};
