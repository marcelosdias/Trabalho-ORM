const Interview = require('../models/Interview');

class InterviewController {
  async getInterviews(request, response) {
    // Listar todas as entrevistas de um candidato
    const { id } = request.params;

    const interviews = await Interview.query().withGraphJoined('candidateJobs.[candidate, job]')
      .where({ candidates_id: id });

    return response.json(interviews);
  }

  async create(request, response) {
    const { candidates_jobs_id, date } = request.body;

    const interview = await Interview.query().insert({
      candidates_jobs_id,
      date,
    });

    return response.json(interview);
  }
}

module.exports = new InterviewController();
