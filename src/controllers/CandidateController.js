const Candidate = require('../models/Candidate');
const AuthService = require('../helpers/AuthService');

class CandidateController {
  // Listar todos candidatos
  async index(request, response) {
    const candidates = await Candidate.query();

    return response.json(candidates);
  }

  // Listar um cadidato pelo id
  async show(request, response) {
    const { id } = request.params;

    const candidate = await Candidate.query()
      .findById(id);

    return response.json(candidate);
  }

  // Listar um candidado pelo id com todas suas categorias de interesse
  async getCategories(request, response) {
    const { id } = request.params;

    const candidate = await Candidate.query()
      .withGraphJoined('categories')
      .findById(id);

    return response.json(candidate);
  }

  // Listar todas as vagas do candidato
  async getJobs(request, response) {
    const { id } = request.params;

    const candidate = await Candidate.query().withGraphJoined('jobs.[company, category]')
      .findById(id);

    return response.json(candidate);
  }

  // Listar todas vagas do candidato com as entrevistas
  async getInterviews(request, response) {
    const { id } = request.params;

    const interviews = await Candidate.query().withGraphJoined('candidateJobs.[interviews, job]')
      .findById(id);

    return response.json(interviews);
  }

  // Criar candidado
  async store(request, response) {
    const { name, email, password } = request.body;

    const candidate = await Candidate.query().insert({
      name,
      email,
      password,
    });

    const token = await AuthService.generateToken({ id: candidate.id });

    return response.json({ candidate, token });
  }

  // Atualizar candidato
  async update(request, response) {
    const { name, email, password } = request.body;

    const { id } = request.params;

    const updatedCandidate = await Candidate.query().patchAndFetchById(id, {
      name, email, password,
    });

    return response.json(updatedCandidate);
  }

  // Deletar Candidato
  async delete(request, response) {
    const { id } = request.params;

    const isDeleted = await Candidate.query().deleteById(id);

    if (!isDeleted) { return response.status(404).json({ message: 'Usuário não encontrado' }); }

    return response.json({ message: 'Usuário deletado' });
  }

  // Associar um candidado a uma categoria
  async relationCategories(request, response) {
    const { candidateId, categoriesId } = request.body;

    const candidate = await Candidate.query().findById(candidateId);

    if (!candidate) {
      return response.status(404).json({ message: 'Usuário não encontrado' });
    }

    const isCreated = await Candidate.relatedQuery('categories')
      .for(candidateId)
      .relate(categoriesId);

    return response.json(isCreated);
  }

  async login(request, response) {
    const { email, password } = request.body;

    const candidate = await Candidate.query().findOne({ email });

    if (!candidate) {
      return response.status(403).json({ message: 'Seu e-mail ou senha estão incorretos' });
    }

    const validPassword = await candidate.verifyPassword(password);

    if (!validPassword) {
      return response.status(403).json({ message: 'Seu e-mail ou senha estão incorretos' });
    }

    const token = await AuthService.generateToken({ id: candidate.id });

    return response.json({ candidate, token });
  }

  // Retirar vinculo entre candidato e categoria
  async deleteRelationCategory(request, response) {
    const { candidateId, categoryId } = request.params;

    const isDeleted = await Candidate.relatedQuery('categories')
      .for(candidateId)
      .unrelate()
      .where({ categories_id: categoryId });

    if (!isDeleted) { return response.status(404).json({ message: 'Relação não encontrada' }); }

    return response.json(isDeleted);
  }

    // Retirar vinculo entre candidato e vaga
  async deleteRelationJob(request, response) {
    const { candidateId, jobId } = request.params;

    const isDeleted = await Candidate.relatedQuery('jobs')
      .for(candidateId)
      .unrelate()
      .where({ jobs_id: jobId });

    if (!isDeleted) { return response.status(404).json({ message: 'Relação não encontrada' }); }

    return response.json(isDeleted);
  }

  // Relacionar um candidato a uma vaga
  async relationJob(request, response) {
    const { candidatesId, jobsId } = request.body;

    const isCreated = await Candidate.relatedQuery('jobs')
      .for(candidatesId)
      .relate(jobsId);

    return response.json(isCreated);
  }
}

module.exports = new CandidateController();
