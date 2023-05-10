const Job = require('../models/Job');
const Candidate = require('../models/Candidate');

class JobController {
  // Listar todas as vagas
  async index(request, response) {
    const jobs = await Job.query().withGraphJoined('company');

    return response.json(jobs);
  }

  // Listar uma vaga pelo id
  async show(request, response) {
    const { id } = request.params;

    const job = await Job.query()
      .findById(id);

    return response.json(job);
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

  // Atualizar vaga
  async update(request, response) {
    const { title, description, categoriesId } = request.body;

    const { id } = request.params;

    const updatedJob = await Category.query().patchAndFetchById(id, {
      title, description, categoriesId
    });

    return response.json(updatedJob);
  }

  // Deletar vaga
  async delete(request, response) {
    const { id } = request.params;

    const isDeleted = await Job.query().deleteById(id);

    if (!isDeleted) { return response.status(404).json({ message: 'Vaga não encontrada' }); }

    return response.json({ message: 'Vaga deletada' });
  }
}

module.exports = new JobController();
