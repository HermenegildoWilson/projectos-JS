const { passport } = require('../middlewares');

class controllers {
    logar = (req, res) => {
        passport.authenticate('local', (erro, aluno, object) => {
            if (erro) {
                return res.status(500).send('Erro lao logar');
            }

            if (!aluno) {
                return res.status(404).send(object.message);
            }

            return res.status(200).send(object.message);

        })(req, res);
    }
}

module.exports = new controllers();