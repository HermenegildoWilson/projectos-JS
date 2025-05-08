const { aluno: controller } = require('../controllers');

const router = require('express').Router();

router.get('/cadastro', controller.cadastro);
router.post('/cadastro', controller.cadastrar);

router.get('/login', controller.login);
router.post('/login', controller.logar);
router.get('/logout', controller.logout);

module.exports = { router };