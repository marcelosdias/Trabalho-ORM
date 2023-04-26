exports.seed = async (knex) => {
  const users = [
    { name: 'Marcelo Dias', email: 'marcelodias@gmail.com', password: 'teste' },
    { name: 'Marcelo Ribeiro', email: 'marceloribeiro@gmail.com', password: 'teste' },
  ];

  await knex('candidates').del();
  await knex('candidates').insert(users);
};
