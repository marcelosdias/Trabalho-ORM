const Interview = require('../models/Interview');

class InterviewController {
  async getInterviews(request, response) {
    // Listar todas as entrevistas de um candidato
    const { id } = request.params;

    const interviews = await Interview.query().withGraphJoined('candidateJobs.[candidate, job]')
      .where({ candidates_id: id });

    return response.json(interviews);
  }
  
  async store(request, response) {
    const { candidates_jobs_id, date } = request.body;

    const interview = await Interview.query().insert({
      candidates_jobs_id,
      date,
    });

    return response.json(interview);
  }

  // Listar uma entrevista pelo ID dela
  async show(request, response) {
    const { id } = request.params;

    const interview = await Interview.query()
      .findById(id);

    return response.json(interview);
  }
  // Atualizar entrevista
  async update(request, response) {
    const { status, date } = request.body;

    const { id } = request.params;

    const updatedInterview = await Interview.query().patchAndFetchById(id, {
      status, date
    });

    return response.json(updatedInterview);
  }

  // Deletar entrevista
  async delete(request, response) {
    const { id } = request.params;

    const isDeleted = await Interview.query().deleteById(id);

    if (!isDeleted) { return response.status(404).json({ message: 'Entrevista não encontrada' }); }

    return response.json({ message: 'Entrevista deletada' });
  }
}

module.exports = new InterviewController();
