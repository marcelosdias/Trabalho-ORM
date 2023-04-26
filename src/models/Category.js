const Model = require('./index');

class Category extends Model {
  static get tableName() {
    return 'categories';
  }

  static get idColumn() {
    return 'id';
  }

  static get relationMappings() {
    return {};
  }
}

module.exports = Category;
