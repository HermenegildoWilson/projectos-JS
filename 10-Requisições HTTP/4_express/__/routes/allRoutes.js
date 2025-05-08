const router = require('express').Router();

const allControllers = require('../controllers').allControllers;

router.get('/', allControllers.get);

router.get('/exercicios/tabuada/:numero', allControllers.exerciciosTabuada);

router.get('/exercicios/soma/:numero1/:numero2', allControllers.exerciciosSoma);

module.exports = { router };