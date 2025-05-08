// Importamos as rotas e colocamos-la visiveis para a app principal

const { controllerPrincipal } = require('../controllers');
const userRoutes = require('./userRoutes').routes;

const routes = require('express').Router();
routes.get('/', controllerPrincipal.home);

module.exports = (app) => {
    app.use(routes);
    app.use(userRoutes);
};