const Model = require('./index');

const guid = require('objection-guid')();

class Job extends guid(Model) {
  static get tableName() {
    return 'jobs';
  }

  static get idColumn() {
    return 'id';
  }

  static get relationMappings() {
    const Company = require('./Company');
    const Category = require('./Category');
    const Candidate = require('./Candidate');

    return {
      company: {
        relation: Model.BelongsToOneRelation,
        modelClass: Company,
        join: {
          from: 'jobs.companies_id',
          to: 'companies.id',
        },
      },

      category: {
        relation: Model.BelongsToOneRelation,
        modelClass: Category,
        join: {
          from: 'jobs.categories_id',
          to: 'categories.id',
        },
      },
      candidates: {
        relation: Model.ManyToManyRelation,
        modelClass: Candidate,
        join: {
          from: 'jobs.id',
          through: {
            from: 'candidates_jobs.jobs_id',
            to: 'candidates_jobs.candidates_id',
          },
          to: 'candidates.id',
        },
      },
    };
  }
}

module.exports = Job;
