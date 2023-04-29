const { Router } = require('express');

const CandidateController = require('../controllers/CandidateController');

const candidateRouter = Router();

candidateRouter.get('/candidates', CandidateController.index);
candidateRouter.get('/candidates/:id/categories', CandidateController.show);
candidateRouter.post('/candidates/:id/categories', CandidateController.relationCategories);
candidateRouter.post('/candidates', CandidateController.store);
candidateRouter.post('/candidates/login', CandidateController.login);
candidateRouter.put('/candidates/:id', CandidateController.update);
candidateRouter.delete('/candidates/:id', CandidateController.delete);
candidateRouter.delete('/candidates/:candidateId/categories/:categoryId', CandidateController.deleteRelationCateoory);

module.exports = candidateRouter;
