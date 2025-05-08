const productsRouter = require('./productsRouter').router;
const usersRouter = require('./clientsRouter').router;

function start(app) {
    app.use(usersRouter);
    app.use(productsRouter);
};

// Colocamos as rotas visiveis para os outros repositórios
module.exports = { start };