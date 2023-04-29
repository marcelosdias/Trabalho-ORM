exports.up = (knex) => knex.schema
  .createTable('candidates', (table) => {
    table.uuid('id').unique().notNullable().primary();
    table.string('name').unique().notNullable();
    table.string('email').unique().notNullable();
    table.string('password').notNullable();
    table.timestamps(true, true);
  })

  .createTable('categories', (table) => {
    table.increments('id').unique().notNullable().primary();
    table.string('name');
    table.timestamps(true, true);
  })

  .createTable('candidates_categories', (table) => {
    table.increments('id').unique().notNullable().primary();
    table.uuid('candidate_id')
      .references('id')
      .inTable('candidates')
      .onDelete('CASCADE');
    table.integer('category_id')
      .references('id')
      .inTable('categories')
      .onDelete('CASCADE');
    table.timestamps(true, true);
  });

exports.down = (knex) => knex.schema
  .dropTableIfExists('candidates_categories')
  .dropTableIfExists('categories')
  .dropTableIfExists('candidates');
