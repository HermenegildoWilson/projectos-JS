const { homeControllers } = require('../controllers');
const router = require('express').Router();

router.get('/', homeControllers.welCome);

module.exports = { router };