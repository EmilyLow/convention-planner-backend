
const bcrypt = require("bcryptjs");


exports.seed = async function(knex) {
  // Deletes ALL existing entries
  return await knex('users').del()
    .then(async function () {
      // Inserts seed entries
      return await knex('users').insert([
        {id: 1, username: 'name1', password: await bcrypt.hash("password1", 11)},
        {id: 2, username: 'name2', password: await bcrypt.hash("password2", 11)}
      ]);
    });
};
