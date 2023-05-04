const Category = require('../models/Category');

class CategoryController {
  async index(request, response) {
    const categories = await Category.query();

    return response.json(categories);
  }

  async getById(request, response) {
    const { id } = request.params;

    try {
      const category = await Category.query().findById(id);
      if (category) return response.json(category);
      return response.status(404).json({
        message: 'Category not found',
      });
    } catch (error) {
      return response.status(500).json({
        message: 'bad request',
      });
    }
  }

  async create(request, response) {
    const { name } = request.body;

    try {
      const category = await Category.query().insert({
        name,
      });
      return response.json(category);
    } catch (error) {
      return response.status(500).json({
        message: 'bad request',
      });
    }
  }

  async delete(request, response) {
    const { id } = request.params;

    try {
      const isDeleted = await Category.query().deleteById(id);

      if (!isDeleted) {
        return response.status(404).json({
          message: 'Category not found',
        });
      }
      return response.status(200).json({ message: 'Category deleted' });
    } catch (error) {
      return response.status(500).json({
        message: 'bad request',
      });
    }
  }
}

module.exports = new CategoryController();
