
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('schedules').del()
    .then(function () {
      // Inserts seed entries
      return knex('schedules').insert([
        {id: 1, table_name: 'Test Table'},
        {id: 2, table_name: 'Test Table 2'},
        {id: 3, table_name: 'Test Table 3'},
      ]);
    });
};
