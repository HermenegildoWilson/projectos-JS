// Objecto de conexão ao banco de dados users
const knex = require('../config').dbConection;

class controllers {
    // Controller GET: 
        // Faz a listagem de todos os usuarios cadastrados
    listar = (req, res) => {
        knex('users')
            .select('*',)
            .then((users) => {
                // Renderização da página com a tabela de usuarios
                console.log(users)
                res.render('listagem', { titulo: 'Listar', users: users });
            })
            .catch((erro) => {
                res.send('Erro ' + erro);
            });
    }

    // Controller GET:
        // Faz a renderização da página com o formulário de cadastro de usuarios
    exibirFormularioCadastro = (req, res) => {
        res.render('formularioCadastro', { titulo: 'Cadastro' });
    }
    // Controller POST:
        // Faz a inserção de um novo registro ao banco de dados
    cadastrar = (req, res) => {
        let dataAtual = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();
        const values = { id: 'default', ...req.body, dataCadastro: dataAtual }; 
        console.log(req.body);
        res.redirect('/users');
    }

    // Controller GET: 
        // Faz a enderização da página com o formulário de edição de tarefas
    exibirFormularioAtualizacao = (req, res) => {
        const { id } = req.params;
        res.render('formularioAtualisacao', { titulo: 'Atualisação', id: id });
    }
    // Controller PUT:
        // Faz a atualização dos registro comforme o id fornecido
    atualisarCadastro = (req, res) => {
        const { id } = req.params;
        
        // Verificamos quais dados o usuario enviou para que estes sejam inseridos
        let values;
        if (req.body.nome) {
            const { nome } = req.body;
            values = { nome: nome };
        }
        if (req.body.sexo) {
            const { sexo } = req.body;
            values = { ...values, sexo: sexo };
        }
        if (req.body.nascimento) {
            const { nascimento } = req.body;
            values = { ...values, nascimento: nascimento };
        }

        if (values) {
            knex('users')
                .where('id', id)
                .update(values)
                .then(() => {
                    res.redirect('/users');
                })
                .catch((erro) => {
                    res.send('Erro', erro);
                });
        } else {
            // Se o usuario não enviou nada redirecionamos a página de atualização
            res.redirect(`/user/update/${id}`);
        }

    }

    // Controller DELETE:
        // Fas a exclusão de registros
    deletar = (req, res) => {
        const { id } = req.params;
        knex('users')
            .where('id', id)
            .del()
            .then(() => {
                res.redirect('/users');
            })
            .catch((erro) => {
                res.send('Erro ', erro);
            });
    }
}

module.exports = new controllers();