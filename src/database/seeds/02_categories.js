exports.seed = async (knex) => {
  const categories = [
    { name: 'Back-End' },
    { name: 'Front-End' },
    { name: 'Quality Assurance' },
  ];

  await knex('categories').del();
  await knex('categories').insert(categories);
};
