const { router: aluno } = require('./aluno');
const { router:  main} = require('./main');
const { router: curso } = require('./curso');

function router(app) {
    app.use(aluno);
    app.use(curso);
    app.use(main);
}

module.exports = { router };