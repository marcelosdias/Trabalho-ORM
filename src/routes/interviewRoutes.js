const { Router } = require('express');
const InterviewController = require('../controllers/InterviewController');

const interviewRouter = Router();

interviewRouter.get('/interview/:id', InterviewController.getInterviews);

interviewRouter.post('/interview', InterviewController.create);

module.exports = interviewRouter;
