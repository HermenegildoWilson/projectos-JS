const documento = [
    {
      id: 1,
      nome: 'Hermenegildo Wilson',
      sexo: 'M',
      nascimento: '2004-11-17',
      dataCadastro: '2025-01-15'
    },
    {
      id: 2,
      nome: 'Hermenegildo Panzo',
      sexo: 'M',
      nascimento: '2004-11-17',
      dataCadastro: '2025-01-24'
    },
    {
      id: 3,
      nome: 'Helena',
      sexo: 'F',
      nascimento: '2008-08-01',
      dataCadastro: '2025-01-24'
    },
    {
      id: 4,
      nome: 'Fineza',
      sexo: 'F',
      nascimento: '2011-03-19',
      dataCadastro: '2025-01-25'
    },
    {
      id: 5,
      nome: 'Acácio',
      sexo: 'M',
      nascimento: '2001-11-11',
      dataCadastro: '2025-01-25'
    },
    {
      id: 6,
      nome: 'Argilho',
      sexo: 'M',
      nascimento: '2012-07-11',
      dataCadastro: '2025-01-25'
    },
    {
      id: 7,
      nome: 'Paulinho',
      sexo: 'M',
      nascimento: '2016-04-15',
      dataCadastro: '2025-01-25'
    },
    {
      id: 8,
      nome: 'José',
      sexo: 'M',
      nascimento: '2001-11-11',
      dataCadastro: '2025-01-25'
    },
    {
      id: 9,
      nome: 'Madalena',
      sexo: 'F',
      nascimento: '1999-09-18',
      dataCadastro: '2025-01-25'
    },
    {
      id: 10,
      nome: 'Margarida',
      sexo: 'F',
      nascimento: '1983-11-11',
      dataCadastro: '2025-01-25'
    },
    {
      id: 11,
      nome: 'Honorato',
      sexo: 'M',
      nascimento: '1978-08-25',
      dataCadastro: '2025-01-25'
    }
]

const express = require('express');
const app = express();

// Rotas da aplicação
const router = express.Router();
router.get('/', (req, res) => {
    res.render('page', { script: 'XHR'});
});
router.get('/users', (req, res) => {
    setTimeout(() => {
        console.log(req.body);
        res.send(documento);
    }, 1500);
});
app.use(router);


// Template engine
require('nunjucks').configure('./', {express: app});
app.set('view engine', 'njk');

// Para poder ter acesso as assets
const path = require('path');
app.use(express.static(path.join(__dirname, './')));

app.listen(300, (erro) => {
    if (erro) {
        console.log('Erro ao rodar o servidor ...');
        return;
    }
    console.log('Servidor rodando na porta 3000 ...');
});