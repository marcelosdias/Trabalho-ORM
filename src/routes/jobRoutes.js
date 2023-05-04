const { Router } = require('express');
const JobController = require('../controllers/JobController');

const companyRouter = Router();

companyRouter.get('/jobs', JobController.index);
companyRouter.get('/jobs/categories/:id', JobController.filteredJobs);
companyRouter.get('/jobs/candidate/:id', JobController.filterJobsForCandidate);

module.exports = companyRouter;
