const { Router } = require('express');
const CompanyController = require('../controllers/CompanyController');

const companyRouter = Router();

companyRouter.get('/company/:id', CompanyController.getJobs);
companyRouter.post('/company', CompanyController.store);
companyRouter.post('/company/:id/jobs', CompanyController.createJob);

module.exports = companyRouter;
