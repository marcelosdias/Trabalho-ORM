const { Router } = require('express');
const CategoryController = require('../controllers/CategoryController');

const categoryRouter = Router();

categoryRouter.get('/category', CategoryController.index);
categoryRouter.get('/category/:id', CategoryController.getById);
categoryRouter.post('/category', CategoryController.create);
categoryRouter.delete('/category/:id', CategoryController.delete)

module.exports = categoryRouter;