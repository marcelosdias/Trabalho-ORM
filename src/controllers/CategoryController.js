const AuthService = require('../helpers/AuthService');
const Category = require('../models/Category');

class CategoryController {
  // Listar todas categorias
  async index(request, response) {
    const categories = await Category.query();

    return response.json(categories);
  }

  // Listar uma categoria pelo id
  async show(request, response) {
    const { id } = request.params;

    const candidate = await Category.query()
      .findById(id);

    return response.json(candidate);
  }
  // Criar categoria
  async store(request, response) {
    const { name } = request.body;

    const category = await Category.query().insert({
      name,
    });


    return response.json({ category });
  }

  // Atualizar categoria
  async update(request, response) {
    const { name } = request.body;

    const { id } = request.params;

    const updatedCategory = await Category.query().patchAndFetchById(id, {
      name
    });

    return response.json(updatedCategory);
  }

  // Deletar categoria
  async delete(request, response) {
    const { id } = request.params;

    const isDeleted = await Category.query().deleteById(id);

    if (!isDeleted) { return response.status(404).json({ message: 'Categoria não encontrada' }); }

    return response.json({ message: 'Categoria deletada' });
  }
}

module.exports = new CategoryController();
