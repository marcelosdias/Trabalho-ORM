const { Router } = require('express');
const JobController = require('../controllers/JobController');

const companyRouter = Router();

companyRouter.get('/jobs', JobController.index);
companyRouter.get('/jobs/categories/:id', JobController.filteredJobs);

module.exports = companyRouter;
