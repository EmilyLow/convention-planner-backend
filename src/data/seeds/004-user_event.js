
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_event').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_event').insert([
        {id: 1, user_id: 1, event_id: 1},
        {id: 2, user_id: 1, event_id: 2},
        {id: 3, user_id: 1, event_id: 3},
        {id: 4, user_id: 2, event_id: 3},
        {id: 5, user_id: 3, event_id: 1},

      ]);
    });
};
