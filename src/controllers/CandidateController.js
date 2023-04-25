const Candidate = require('../models/Candidate');

class CandidateController {
  async index(request, response) {
    const candidates = await Candidate.query();
    return response.json(candidates);
  }
}

module.exports = new CandidateController();
