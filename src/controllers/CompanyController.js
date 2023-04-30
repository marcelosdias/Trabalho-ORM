const Company = require('../models/Company');

class CompanyController {
  // Listar  empregos de uma empresa
  async getJobs(request, response) {
    const { id } = request.params;

    const companyJobs = await Company.query().withGraphJoined('jobs.[category]').findById(id);

    return response.json(companyJobs);
  }

  // Criar empresa
  async store(request, response) {
    const {
      name, email, password, city, address,
    } = request.body;

    const company = await Company.query().insert({
      name, email, password, city, address,
    });

    return response.json(company);
  }

  // Criar uma vaga associada a empresa
  async createJob(request, response) {
    const {
      title, description, companyId, categorieId,
    } = request.body;

    const teste = await Company.relatedQuery('jobs')
      .for(companyId)
      .insert({ title, description, categories_id: categorieId });

    return response.json(teste);
  }
}

module.exports = new CompanyController();
