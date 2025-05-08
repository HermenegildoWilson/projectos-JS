const express = require('express');

const app = express();

require('nunjucks').configure('./', {express: app});

const router = express.Router();
router.get('/', (req, res) => {
    res.render('cliente.html');
});

router.get('/users', (req, res) => {
    console.log('Atendendo a requisição');
    res.send(
        [{
            nome: 'Hermenegildo',
            idade: 20,
            sexo: 'M'
        }, {
            nome: 'Matono',
            idade: 20,
            sexo: 'M'
        }
    ]);
});

app.use(router);

app.listen(3000, (erro) => {
    if (erro) {
        console.log('Erro ao rodar servdor');
        return
    }
    console.log('Servidor rodando na porta 3000');
});