const router = require('express').Router();

// import controller
const controller = require('../controllers/controller');

router.get('/', controller.index);

router.get('/doctor/login', controller.getDoctorLogin);

router.get('/patient/login', controller.getPatientLogin);

router.get('/patient/signup', controller.getSignup);

module.exports = router;