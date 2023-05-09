const { Router } = require('express');

const CategoryController = require('../controllers/CategoryController')

const categoryRouter = Router();

categoryRouter.get('/candidates', CategoryController.index);
categoryRouter.get('/candidates/:id', CategoryController.show);

categoryRouter.post('/category', CategoryController.store);

categoryRouter.put('/candidates/:id', CategoryController.update);

categoryRouter.delete('/category/:id', CategoryController.delete);

module.exports = categoryRouter;
