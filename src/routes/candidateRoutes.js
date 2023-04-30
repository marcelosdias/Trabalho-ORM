const { Router } = require('express');

const CandidateController = require('../controllers/CandidateController');

const candidateRouter = Router();

candidateRouter.get('/candidates', CandidateController.index);
candidateRouter.get('/candidates/:id', CandidateController.show);
candidateRouter.get('/candidates/:id/categories', CandidateController.getCategories);
candidateRouter.get('/candidates/:id/jobs', CandidateController.getJobs);

candidateRouter.post('/candidates/categories', CandidateController.relationCategories);
candidateRouter.post('/candidates/register', CandidateController.store);
candidateRouter.post('/candidates/login', CandidateController.login);
candidateRouter.post('/candidates/jobs', CandidateController.relationJob);

candidateRouter.put('/candidates/:id', CandidateController.update);

candidateRouter.delete('/candidates/:id', CandidateController.delete);
candidateRouter.delete('/candidates/:id/categories/:id', CandidateController.deleteRelationCategory);

module.exports = candidateRouter;
