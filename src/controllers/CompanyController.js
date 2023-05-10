const Company = require('../models/Company');

class CompanyController {
  // Listar todas as empresas
  async index(request, response) {
    const companies = await Company.query();

    return response.json(companies);
  }
  // Listar uma categoria pelo id
  async show(request, response) {
    const { id } = request.params;

    const company = await Company.query()
      .findById(id);

    return response.json(company);
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

  // Atualizar uma empresa
  async update(request, response) {
    const {
      name, email, password, city, address,
    } = request.body;

    const { id } = request.params;

    const updatedCompany = await Company.query().patchAndFetchById(id, {
      name, email, password, city, address,
    });

    return response.json(updatedCompany);
  }

  // Deletar uma empresa
  async delete(request, response) {
    const { id } = request.params;

    const isDeleted = await Company.query().deleteById(id);

    if (!isDeleted) { return response.status(404).json({ message: 'Empresa não encontrado' }); }

    return response.json({ message: 'Empresa deletada' });
  }

  // Listar  empregos de uma empresa
  async getJobs(request, response) {
    const { id } = request.params;

    const companyJobs = await Company.query().withGraphJoined('jobs.[category]').findById(id);

    return response.json(companyJobs);
  }

  // Criar uma vaga associada a empresa
  async createJob(request, response) {
    const {
      title, description, companyId, categorieId,
    } = request.body;

    const job = await Company.relatedQuery('jobs')
      .for(companyId)
      .insert({ title, description, categories_id: categorieId });

    return response.json(job);
  }
}

module.exports = new CompanyController();
