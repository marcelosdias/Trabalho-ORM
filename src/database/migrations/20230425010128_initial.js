exports.up = (knex) => knex.schema
  .createTable('candidates', (table) => {
    table.increments('id').unique().notNullable().primary();
    table.string('name');
    table.string('email');
    table.string('password');
    table.timestamps(true, true);
  })

  .createTable('categories', (table) => {
    table.increments('id').unique().notNullable().primary();
    table.string('name');
    table.timestamps(true, true);
  })

  .createTable('candidates_categories', (table) => {
    table.increments('id').unique().notNullable().primary();
    table.integer('candidate_id');
    table.integer('category_id');
    table.timestamps(true, true);
  });

exports.down = (knex) => knex.schema
  .dropTableIfExists('candidates_categories')
  .dropTableIfExists('categories')
  .dropTableIfExists('candidates');
