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
    table.uuid('candidates_id')
      .references('id')
      .inTable('candidates')
      .onDelete('CASCADE');
    table.integer('categories_id')
      .references('id')
      .inTable('categories')
      .onDelete('CASCADE');
  })

  .createTable('companies', (table) => {
    table.uuid('id').unique().notNullable().primary();
    table.string('name').unique().notNullable();
    table.string('email').unique().notNullable();
    table.string('password').notNullable();
    table.string('city').notNullable();
    table.string('address').notNullable();
    table.timestamps(true, true);
  })

  .createTable('jobs', (table) => {
    table.uuid('id').unique().notNullable().primary();
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.uuid('companies_id')
      .references('id')
      .inTable('companies')
      .onDelete('CASCADE');
    table.integer('categories_id')
      .references('id')
      .inTable('categories')
      .onDelete('CASCADE');
    table.timestamps(true, true);
  })

  .createTable('candidates_jobs', (table) => {
    table.increments('id').unique().notNullable().primary();
    table.uuid('jobs_id')
      .references('id')
      .inTable('jobs')
      .onDelete('CASCADE');
    table.uuid('candidates_id')
      .references('id')
      .inTable('candidates')
      .onDelete('CASCADE');
  })

  .createTable('interviews', (table) => {
    table.uuid('id').unique().notNullable().primary();
    table.integer('candidates_jobs_id')
      .references('id')
      .inTable('candidates_jobs')
      .onDelete('CASCADE');
    table.date('date').notNullable();
  });

exports.down = (knex) => knex.schema
  .dropTableIfExists('interviews')
  .dropTableIfExists('candidates_jobs')
  .dropTableIfExists('jobs')
  .dropTableIfExists('companies')
  .dropTableIfExists('candidates_categories')
  .dropTableIfExists('categories')
  .dropTableIfExists('candidates');
