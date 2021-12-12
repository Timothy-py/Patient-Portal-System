const router = require('express').Router();

// import controller
const controller = require('../controllers/controller');

router.get('/', controller.index);

router.get('/doctor/login', controller.getDoctorLogin);

router.get('/patient/login', controller.getPatientLogin);

router.get('/patient/signup', controller.getSignup);

router.get('/patient/visits', controller.getPatientVisits);

router.get('/patient/messages', controller.getPatientMessages);

router.get('/doctor/manage-patients',  controller.getManagePatients);

router.get('/doctor/patient-details', controller.getPatientDetails);

router.get('/doctor/create-message', controller.getCreateMessage);

router.get('/doctor/create-visit', controller.getCreateVisit);

module.exports = router;