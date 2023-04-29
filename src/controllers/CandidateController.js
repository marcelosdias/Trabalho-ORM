const Candidate = require('../models/Candidate');
const AuthService = require('../helpers/AuthService');

class CandidateController {
  async index(request, response) {
    const candidates = await Candidate.query();

    return response.json(candidates);
  }

  async show(request, response) {
    const { id } = request.params;

    const candidate = await Candidate.query()
      .withGraphJoined('categories')
      .findById(id);

    return response.json(candidate);
  }

  async store(request, response) {
    const { name, email, password } = request.body;

    const candidate = await Candidate.query().insert({
      name,
      email,
      password,
    });

    return response.json(candidate);
  }

  async update(request, response) {
    const { name, email, password } = request.body;

    const { id } = request.params;

    const updatedCandidate = await Candidate.query().patchAndFetchById(id, {
      name, email, password,
    });

    return response.json(updatedCandidate);
  }

  async delete(request, response) {
    const { id } = request.params;

    const isDeleted = await Candidate.query().deleteById(id);

    if (!isDeleted) { return response.status(404).json({ message: 'Usuário não encontrado' }); }

    return response.json({ message: 'Usuário deletado' });
  }

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

    const validPassword = await candidate.verifyPassword(password);

    if (!validPassword) {
      return response.status(403).json({ message: 'Seu e-mail ou senha estão incorretos' });
    }

    const token = await AuthService.generateToken({ id: candidate.id });

    return response.json({ candidate, token });
  }

  async deleteRelationCateoory(request, response) {
    const { candidateId, categoryId } = request.params;

    const isDeleted = await Candidate.relatedQuery('categories')
      .for(candidateId)
      .unrelate()
      .where({ category_id: categoryId });

    if (!isDeleted) { return response.status(404).json({ message: 'Relação não encontrada' }); }

    return response.json(isDeleted);
  }
}

module.exports = new CandidateController();
