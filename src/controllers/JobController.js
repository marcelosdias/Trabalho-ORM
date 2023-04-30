const Job = require('../models/Job');

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
}

module.exports = new JobController();
