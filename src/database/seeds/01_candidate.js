const { v4: uuidV4 } = require('uuid');

const HashService = require('../../helper/HashService');

exports.seed = async (knex) => {
  const users = [
    {
      id: uuidV4(), name: 'Marcelo Dias', email: 'marcelodias@gmail.com', password: HashService.generateHash('1234'),
    },
    {
      id: uuidV4(), name: 'Marcelo Ribeiro', email: 'marceloribeiro@gmail.com', password: HashService.generateHash('1234'),
    },
  ];

  await knex('candidates').del();
  await knex('candidates').insert(users);
};
