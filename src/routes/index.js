const { Router } = require('express');

const candidateRouter = require('./candidateRoutes');
const companyRouter = require('./companyRoutes');
const jobRouter = require('./jobRoutes');
const interviewRouter = require('./interviewRoutes');

const router = Router();

router.use(candidateRouter);
router.use(companyRouter);
router.use(jobRouter);
router.use(interviewRouter);

module.exports = router;
