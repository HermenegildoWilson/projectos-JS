const { mysqlDB } = require('../../models');

const passport = require('passport');
const { Strategy: localStrategy } = require('passport-local');

const Strategy = new localStrategy(
    {usernameField: 'email', passwordField: 'senha'},
    (email, senha, done) => {
        mysqlDB.select('aluno', {condition: `where email = '${email}'`})
            .then(aluno => {
                if (aluno.length == 0) {
                    return done(null, false, {message: 'Email inválido'});
                }

                if (aluno[0].senha !== senha) {
                    return done(null, false, {message: 'Senha incorreto'});
                }

                return done(null, aluno[0], {message: 'Autenticado'});
            })
            .catch(erro => {
                return done(null, false, {message: erro});
            });
    }
);

passport.use(Strategy);

module.exports = { passport };