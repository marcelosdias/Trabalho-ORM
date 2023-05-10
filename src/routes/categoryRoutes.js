const { Router } = require('express');

const CategoryController = require('../controllers/CategoryController')

const categoryRouter = Router();

categoryRouter.get('/category', CategoryController.index);
categoryRouter.get('/category/:id', CategoryController.show);

categoryRouter.post('/category', CategoryController.store);

categoryRouter.put('/category/:id', CategoryController.update);

categoryRouter.delete('/category/:id', CategoryController.delete);

module.exports = categoryRouter;
