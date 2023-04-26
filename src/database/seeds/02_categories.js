exports.seed = async (knex) => {
  const categories = [
    { id: 1, name: 'Back-End' },
    { id: 2, name: 'Front-End' },
    { id: 3, name: 'Quality Assurance' },
  ];

  await knex('categories').del();
  await knex('categories').insert(categories);
};
