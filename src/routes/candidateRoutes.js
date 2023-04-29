const { Router } = require('express');

const CandidateController = require('../controllers/CandidateController');

const candidateRouter = Router();

candidateRouter.get('/candidates', CandidateController.index);
candidateRouter.get('/candidates/:id', CandidateController.show);
candidateRouter.get('/candidates/categories', CandidateController.getCategories);
candidateRouter.post('/candidates/categories', CandidateController.relationCategories);
candidateRouter.post('/candidates/register', CandidateController.store);
candidateRouter.post('/candidates/login', CandidateController.login);
candidateRouter.put('/candidates/:id', CandidateController.update);
candidateRouter.delete('/candidates/:id', CandidateController.delete);
candidateRouter.delete('/candidates/categories/:id', CandidateController.deleteRelationCateoory);

module.exports = candidateRouter;
