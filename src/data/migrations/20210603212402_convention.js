
exports.up = async function(knex) {
  await knex.schema.createTable("schedules", function(table) {
    table.increments("id");
    table.text("table_name").notNull().unique();
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

  await knex.schema.createTable("users", function(table) {
    table.increments("id");
    table.text("username").notNull().unique();
    table.text("password").notNull();

  });

  await knex.schema.createTable("user_event", function(table) {
      table.increments("id");
      //Should I add an "onUpdate()" ?
      table.integer("user_id").notNull().references("id").inTable("user");
      table.integer("event_id").notNull().references("id").inTable("event");
  })


};

exports.down = async function(knex) {
    
    await knex.schema.dropTableIfExists("events");
    await knex.schema.dropTableIfExists("schedules");
  
};
