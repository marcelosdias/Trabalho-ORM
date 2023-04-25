const { Router } = require('express');

const candidateRouter = require('./candidateRoutes');

const router = Router();

router.use(candidateRouter);

module.exports = router;
