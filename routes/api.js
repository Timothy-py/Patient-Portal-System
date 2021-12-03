const router = require('express').Router();

// import controller
const controller = require('../controllers/controller');

router.get('/', controller.index);

module.exports = router;