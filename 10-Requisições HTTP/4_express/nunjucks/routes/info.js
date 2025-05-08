const { infoControllers } = require('../controllers');
const router = require('express').Router();

router.get('/info', infoControllers.info);

module.exports = { router };