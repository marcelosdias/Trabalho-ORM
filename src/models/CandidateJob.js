const Model = require('./index');

class Category extends Model {
  static get tableName() {
    return 'candidates_jobs';
  }

  static get idColumn() {
    return 'id';
  }

  static get relationMappings() {
    const Candidate = require('./Candidate');
    const Job = require('./Job');
    const Interview = require('./Interview');

    return {
      candidate: {
        relation: Model.BelongsToOneRelation,
        modelClass: Candidate,
        join: {
          from: 'candidates_jobs.candidates_id',
          to: 'candidates.id',
        },
      },
      job: {
        relation: Model.BelongsToOneRelation,
        modelClass: Job,
        join: {
          from: 'candidates_jobs.jobs_id',
          to: 'jobs.id',
        },
      },

      interviews: {
        relation: Model.HasManyRelation,
        modelClass: Interview,
        join: {
          from: 'candidates_jobs.id',
          to: 'interviews.candidates_jobs_id',
        },
      },
    };
  }
}

module.exports = Category;
