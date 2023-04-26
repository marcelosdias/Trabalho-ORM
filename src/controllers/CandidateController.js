const Candidate = require('../models/Candidate');

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
}

module.exports = new CandidateController();
