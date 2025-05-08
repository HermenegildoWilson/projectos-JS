const { mysqlDB } = require('../../models');

const passport = require('passport');
const { Strategy: localStrategy } = require('passport-local');

const strategy = new localStrategy({usernameField: 'email', passwordField: 'senha'}, (email, senha, done) => {    
    mysqlDB.select('aluno', { conditions: `where email = '${email}'`})
        .then(aluno => {
            if (!aluno[0]) {
                return done(null, false, {message: 'Email inválido'});
            }

            if (aluno[0].senha !== senha) {
                return done(null, false, {message: 'Senha incorreta'});
            }

            return done(null, aluno, {message: 'Logado ...'});
        })
        .catch(erro => {
            console.log(erro);
            return done(null, false);
        });
});

passport.use(strategy);

module.exports = { passport };