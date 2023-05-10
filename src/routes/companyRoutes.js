const { Router } = require('express');
const CompanyController = require('../controllers/CompanyController');

const companyRouter = Router();

companyRouter.get('/company', CompanyController.index);
companyRouter.get('/company/:id', CompanyController.show);
companyRouter.put('/company/:id', CompanyController.update);
companyRouter.delete('/company/:id', CompanyController.delete);

companyRouter.get('/company/:id/jobs', CompanyController.getJobs);
companyRouter.post('/company', CompanyController.store);
companyRouter.post('/company/jobs', CompanyController.createJob);

module.exports = companyRouter;
