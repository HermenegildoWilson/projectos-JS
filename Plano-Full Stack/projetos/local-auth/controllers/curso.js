const { mysqlDB, knex } = require('../models');
const { session, render, getFullDate } = require('../utils');

class controllers {
    listar = (req, res) => {        
        mysqlDB.select('curso', { condition: 'order by nome' })
            .then(cursos => {
                console.log('Listando cursos...');
                render(res, 'pages/curso/index', {
                    titulo: 'Cursos',
                    classMain: 'listaCursos',
                    cursos: cursos,
                    session: session.isOnline(req),
                    tipo: 'lista'
                });
            })
            .catch(erro => {
                console.log(erro);
                res.send('Erro: ' + erro);
            });
    }

    assistir = (req, res) => {
        const { c: nomeCurso } = req.query;

        if (!session.isOnline(req)) {
            res.redirect('/login');
            return
        }

        if (nomeCurso) {
            mysqlDB.select('curso join aluno',
                {
                    columns: ['aluno.id as idAluno', 'curso.id as idCurso'],
                    condition: `on curso.nome = '${nomeCurso}' and aluno.email = '${req.session.email}'`
                })
                .then(dadosCursoAluno => {
                    dadosCursoAluno = dadosCursoAluno[0];

                    const condition = `where assiste.idAluno = ${dadosCursoAluno.idAluno} and assiste.idCurso = ${dadosCursoAluno.idCurso}`;
                    mysqlDB.select('assiste',
                        {
                            columns: '*',
                            condition: condition
                        }
                    ).then(assiste => {
                        if (assiste.length == 0) {

                            let dataAtual = getFullDate();

                            const values = {
                                id: 'default', dataInicio: dataAtual, aulasVistas: 0,
                                idCurso: dadosCursoAluno.idCurso, idAluno: dadosCursoAluno.idAluno
                            };
                            knex('assiste')
                                .insert(values)
                                .then((curso) => {
                                    console.log('Novo aluno inscrito no curso de '+nomeCurso);
                                    res.render('pages/curso/index', {
                                        titulo: 'Curso de ' + nomeCurso,
                                        classMain: 'listaCursos',
                                        nomeCurso: nomeCurso,
                                        session: session.isOnline(req),
                                        tipo: 'aula'
                                    });
                                })
                                .catch((erro) => {
                                    console.log(erro);
                                    return res.send('Erro ' + erro);
                                });
                        } else {
                            console.log('Aluno já inscrito no curso de '+nomeCurso);
                            res.render('pages/curso/index', {
                                titulo: 'Curso de ' + nomeCurso,
                                classMain: 'listaCursos',
                                nomeCurso: nomeCurso,
                                session: session.isOnline(req),
                                tipo: 'aula'
                            });
                        }
                    })
                    // Erro ao obter os do Assistemento kkk
                    .catch(erro => {
                        console.log(erro);
                        res.send('Erro: ' + erro);
                    });

                })
                // Erro ao obter os dados Curso e Aluno
                .catch(erro => {
                    console.log(erro);
                    res.send('Erro: ' + erro);
                });

        } else {
            res.redirect('/');
        }
    }
}

module.exports = new controllers();