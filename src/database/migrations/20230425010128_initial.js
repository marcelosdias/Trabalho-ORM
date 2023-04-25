exports.up = (knex) => knex.schema
  .createTable('candidates', (table) => {
    table.increments('id').primary();
    table.string('name');
    table.string('email');
    table.string('password');
    table.timestamps(true, true, true);
  });

exports.down = (knex) => knex.schema
  .dropTableIfExists('candidates');
