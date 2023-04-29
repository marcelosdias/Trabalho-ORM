const Model = require('./index');

const { compose } = require('objection');

const visibilityPlugin = require('objection-visibility').default;
const guid = require('objection-guid')();
const Password = require('objection-password')();

const mixing = compose(visibilityPlugin, Password, guid);

class Candidate extends mixing(Model) {
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
