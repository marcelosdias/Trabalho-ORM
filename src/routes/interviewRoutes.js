const { Router } = require('express');
const InterviewController = require('../controllers/InterviewController');

const interviewRouter = Router();

interviewRouter.get('/interview/candidates/:id', InterviewController.getInterviews);
interviewRouter.get('/interview/:id', InterviewController.show);

interviewRouter.post('/interview', InterviewController.store);

interviewRouter.put('/interview/:id', InterviewController.update);

interviewRouter.delete('/interview/:id', InterviewController.delete);

module.exports = interviewRouter;
