
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('schedules').del()
    .then(function () {
      // Inserts seed entries
      return knex('schedules').insert([
        {id: 1, schedule_name: 'Core', personal_schedule: false},
        {id: 2, schedule_name: 'Talks', personal_schedule: false},
        {id: 3, schedule_name: 'Games', personal_schedule: false},
        {id: 4, schedule_name: 'Shows', personal_schedule: false},
        {id: 5, personal_schedule: true},
        {id: 6, personal_schedule: true},
      ]);
    });
};
