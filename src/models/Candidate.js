const Model = require('./index');

const visibilityPlugin = require('objection-visibility').default;

class Candidate extends visibilityPlugin(Model) {
  static get tableName() {
    return 'candidates';
  }

  static get idColumn() {
    return 'id';
  }

  static get relationMappings() {
    return {};
  }
}

module.exports = Candidate;
