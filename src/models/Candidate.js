const Model = require('./index');

const visibilityPlugin = require('objection-visibility').default;

class Candidate extends visibilityPlugin(Model) {
  static get tableName() {
    return 'candidates';
  }

  static get idColumn() {
    return 'id';
  }

  static get hidden() {
    return 'password';
  }

  static get relationMappings() {
    const Category = require('./Category');

    return {
      categories: {
        relation: Model.ManyToManyRelation,
        modelClass: Category,
        join: {
          from: 'candidates.id',
          through: {
            from: 'candidates_categories.candidate_id',
            to: 'candidates_categories.category_id',
          },
          to: 'categories.id',
        },
      },
    };
  }
}

module.exports = Candidate;
