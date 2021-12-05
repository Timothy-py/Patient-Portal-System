const router = require('express').Router();

// import controller
const controller = require('../controllers/controller');

router.get('/', controller.index);

router.get('/doctor/login', controller.getDoctorLogin);

router.get('/patient/login', controller.getPatientLogin);

router.get('/patient/signup', controller.getSignup);

router.get('/patient/visits', controller.getPatientVisits);

router.get('/patient/messages', controller.getPatientMessages);

module.exports = router;