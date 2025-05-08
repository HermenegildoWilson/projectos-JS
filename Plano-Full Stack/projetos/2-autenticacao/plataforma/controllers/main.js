const { mysqlDB, knex } = require('../models');
const { session } = require('../utils');

class controllers {
    home = (req, res) => {
        if (session.isOnline(req)) {
            const condition = 
            `on assiste.idAluno = aluno.id and assiste.idCurso = curso.id and aluno.email = '${req.session.email}'`;

            mysqlDB.select('assiste join curso join aluno',
                { columns: ['curso.nome as nome', 'curso.descricao as descricao'], condition: condition })
                .then(response => {
                    if (response.length != 0) {
                        res.render('pages/aluno/index', {
                            titulo: 'Home',
                            classMain: 'listaCursos',
                            cursos: response,
                            aluno: 'true'
                        });
                    } else {
                        res.render('pages/aluno/index', {
                            titulo: 'Home',
                            classMain: 'landingPage',
                            cursos: response,
                            aluno: 'false'
                        });
                    }

                })
                .catch(erro => {
                    console.log(erro);
                    res.send('Erro: ' + erro);
                });
        } else {
            res.render('index', {
                titulo: 'Home',
                classMain: 'landingPage'
            });
        }
    }
}

module.exports = new controllers();