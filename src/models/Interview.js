const Model = require('./index');

const guid = require('objection-guid')();

class Interview extends guid(Model) {
  static get tableName() {
    return 'interviews';
  }

  static get idColumn() {
    return 'id';
  }

  static get relationMappings() {
    const CandidateJob = require('./CandidateJob');

    return {
      candidateJobs: {
        relation: Model.BelongsToOneRelation,
        modelClass: CandidateJob,
        join: {
          from: 'interviews.candidates_jobs_id',
          to: 'candidates_jobs.id',
        },
      },
    };
  }
}

module.exports = Interview;
