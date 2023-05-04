const Job = require('../models/Job');
const Candidate = require('../models/Candidate');

class JobController {
  // Listar todas as vagas
  async index(request, response) {
    const jobs = await Job.query().withGraphJoined('company');

    return response.json(jobs);
  }

  // Listar todas vagas filtradas por uma categoria
  async filteredJobs(request, response) {
    const { id } = request.params;

    const jobs = await Job.query().withGraphJoined('company')
      .where({ categories_id: id });

    return response.json(jobs);
  }

  // Listar todas as vagas que possuem categorias de interesse do candidato
  async filterJobsForCandidate(request, response) {
    const { id } = request.params;

    const jobs = await Job.query().whereIn(
      'categories_id',
      Candidate.relatedQuery('categories')
        .for(id)
        .select('categories.id'),
    );

    return response.json(jobs);
  }
}

module.exports = new JobController();
