const router = require('express').Router();

// import controller
const controller = require('../controllers/controller');

router.get('/', controller.index);

router.get('/login', controller.getLogin);

module.exports = router;