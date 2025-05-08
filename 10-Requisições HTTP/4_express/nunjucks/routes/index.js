const homeRoutes = require('./home').router;
const infoRouter = require('./info').router;

function start(app) {
    app.use(homeRoutes);
    app.use(infoRouter);
}

module.exports = { start };