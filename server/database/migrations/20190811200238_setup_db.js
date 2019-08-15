
exports.up = function(knex) {
  return Promise.all([

    knex.schema.createTable("questions", function(table) {
      table.increments("id").primary();
      table.string("text");
      table.string("meaning");
    }),

    knex.schema.createTable("answers", function(table) {
      table.increments("id").primary();
      table.integer("agree_rating");
      table.integer("user_id").unsigned().index().references("id").inTable("users");
      table.integer("question_id").unsigned().index().references("id").inTable("questions");
    }),

    knex.schema.createTable("users", function(table) {
      table.increments("id").primary();
      table.string("email").notNullable();
      table.string("perspective_result").notNullable();
    })

  ]);
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTableIfExists("answers"),
    knex.schema.dropTableIfExists("questions"),
    knex.schema.dropTableIfExists("users")
  ]);
};
