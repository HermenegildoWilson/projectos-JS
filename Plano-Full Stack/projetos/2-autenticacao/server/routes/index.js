const { router: login } = require('./login');

function start(app) {
    app.use(login);
}

module.exports = { start };