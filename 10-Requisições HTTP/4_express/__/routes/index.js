const allRoutes = require('./allRoutes').router;

function start(app) {
    app.use(allRoutes);
}

module.exports = { start };