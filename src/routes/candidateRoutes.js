const { Router } = require('express');

const CandidateController = require('../controllers/CandidateController');

const candidateRouter = Router();

candidateRouter.get('/', CandidateController.index);

module.exports = candidateRouter;
