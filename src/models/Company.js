const Model = require('./index');

const guid = require('objection-guid')();

class Company extends guid(Model) {
  static get tableName() {
    return 'companies';
  }

  static get idColumn() {
    return 'id';
  }

  static get relationMappings() {
    const Job = require('./Job');
    return {
      jobs: {
        relation: Model.HasManyRelation,
        modelClass: Job,
        join: {
          from: 'companies.id',
          to: 'jobs.companies_id',
        },
      },
    };
  }
}

module.exports = Company;
