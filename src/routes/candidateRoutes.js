const { Router } = require('express');

const CandidateController = require('../controllers/CandidateController');

const candidateRouter = Router();

candidateRouter.get('/candidates', CandidateController.index);
candidateRouter.get('/candidates/:id', CandidateController.show);
candidateRouter.post('/candidates', CandidateController.store);

module.exports = candidateRouter;
