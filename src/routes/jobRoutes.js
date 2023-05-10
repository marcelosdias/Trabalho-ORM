const { Router } = require('express');
const JobController = require('../controllers/JobController');

const companyRouter = Router();

companyRouter.get('/jobs', JobController.index);
companyRouter.get('/jobs/:id', JobController.show);
companyRouter.get('/jobs/categories/:id', JobController.filteredJobs);
companyRouter.get('/jobs/candidate/:id', JobController.filterJobsForCandidate);
companyRouter.put('/jobs/:id', JobController.update);
companyRouter.delete('/jobs:id', JobController.delete);


module.exports = companyRouter;
