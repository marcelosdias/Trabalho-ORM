exports.seed = async (knex) => {
  const categories = [
    { name: 'Back-End' },
    { name: 'Front-End' },
    { name: 'Quality Assurance' },
  ];

  await knex.raw('ALTER SEQUENCE categories_id_seq RESTART WITH 1');

  await knex('categories').del();
  await knex('categories').insert(categories);
};
