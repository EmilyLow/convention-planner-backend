
exports.up = async function(knex) {
  await knex.schema.createTable("schedules", function(table) {
    table.increments("id");
  //   table.text("schedule_name").notNull().unique();
      table.text("schedule_name");
    //Does this need to be in '', e.g. 'false'?
    table.boolean("personal_schedule").defaultTo(false).notNull();
  })

  await knex.schema.createTable("events", function(table) {
    table.increments("id");
    table.integer("schedule_id").notNull().references("id").inTable("schedules");
    table.text("event_name").notNull();
    table.text("speaker");
    table.text("summary");
    table.text("location");
    table.integer("start_time").notNull();
    table.integer("end_time").notNull();
    table.integer("start_col");
    table.integer("span");
    table.text("color");

  })

  //TODO Making a new user should make a new schedule and assign it to the user (or user to it)
  await knex.schema.createTable("users", function(table) {
    table.increments("id");
    table.integer("schedule_id").notNull().references("id").inTable("schedules");
    table.text("username").notNull().unique();
    table.text("password").notNull();

  });



};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("schedules");
    await knex.schema.dropTableIfExists("events");
    await knex.schema.dropTableIfExists("users");
  
};
