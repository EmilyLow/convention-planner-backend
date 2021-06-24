
const bcrypt = require("bcryptjs");


exports.seed = async function(knex) {
  // Deletes ALL existing entries
  return await knex('users').del()
    .then(async function () {
      // Inserts seed entries
      return await knex('users').insert([
        {id: 1, schedule_id: 5, username: 'name1', password: await bcrypt.hash("password1", 11)},
        {id: 2, schedule_id: 6, username: 'name2', password: await bcrypt.hash("password2", 11)},
        {id: 3, schedule_id: 7, username: 'Kate Ascher', password: await bcrypt.hash("TheWorks", 11)},
        {id: 4, schedule_id: 8, username: 'SciFiLover8', password: await bcrypt.hash("8SciFi", 11)},

      ]);
    });
};
