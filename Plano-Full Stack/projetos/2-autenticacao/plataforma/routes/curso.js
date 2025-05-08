const { curso: controller } = require('../controllers');

const router = require('express').Router();

router.get('/curso', controller.assistir);
router.get('/cursos', controller.listar);

module.exports = { router };