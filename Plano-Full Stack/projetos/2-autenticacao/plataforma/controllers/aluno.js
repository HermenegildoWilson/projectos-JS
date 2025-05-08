const { mysqlDB, knex } = require('../models');
const { validator, passport } = require('../middlewares');
const { getFullDate, render, session } = require('../utils');

class controllers {
    cadastro = (req, res) => {
        render(res, 'formularios/cadastro', { titulo: 'Cadastro' });
    }

    cadastrar = (req, res) => {
        const user = req.body;

        validator.user(user) 
            .then(result => {
                if (result.status) {
                    const dataAtual = getFullDate();

                    const values = { id: 'default', ...user, dataCadastro: dataAtual };
                    knex('aluno')
                        .insert(values)
                        .then((response) => {
                            console.log('Created user', user.email)

                            session.create(req, user.email)
                            return res.status(201).send(user.email);
                        })
                        .catch((erro) => {
                            return res.send('Erro ' + erro);
                        });
                } else {
                    return res.status(301).send(result);
                }
            })
            // Erro na validação
            .catch(erro => {
                res.status(500).send('Erro');
            });
    }

    login = (req, res) => {
        render(res, 'formularios/login', { titulo: 'Login' });
    }

    logar = (req, res) => {
        passport.authenticate('local', (erro, user, object) => {
            if (erro) return res.status(500).send('Erro no servidor... ' + erro);

            if (!user) return res.status(404).send(object);

            session.create(req, user.email)
            
            return res.status(200).send(user);
        })(req, res);
    }

    logout = (req, res) => {
        session.destroy(req, res);
    }
}

module.exports = new controllers();