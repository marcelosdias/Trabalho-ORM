exports.seed = async (knex) => {
  const relation = [
    { candidate_id: 1, category_id: 1 },
    { candidate_id: 1, category_id: 3 },
    { candidate_id: 2, category_id: 2 },
  ];

  await knex('candidates_categories').del();
  await knex('candidates_categories').insert(relation);
};
