
const bcrypt = require("bcryptjs");


exports.seed = async function(knex) {
  // Deletes ALL existing entries
  return await knex('users').del()
    .then(async function () {
      // Inserts seed entries
      return await knex('users').insert([
        {id: 1, schedule_id: 5, username: 'name1', password: await bcrypt.hash("password1", 11)},
        {id: 2, schedule_id: 6, username: 'name2', password: await bcrypt.hash("password2", 11)}
      ]);
    });
};
