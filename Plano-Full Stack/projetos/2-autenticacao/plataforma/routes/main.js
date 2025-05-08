const { main: controller } = require('../controllers');

const router = require('express').Router();

router.get('/', controller.home);


module.exports = { router };