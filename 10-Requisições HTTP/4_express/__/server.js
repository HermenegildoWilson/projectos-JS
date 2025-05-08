// Criação da app/express principal
const express = require('express');
const app = express();


// Configuração das rotas
const router = require('./routes');
router.start(app);

const conexao = require('../userController/config/dbConection');

// Configuração da template engine
const nunjucks = require('nunjucks');
nunjucks.configure('views', ({
    //autoscape: true,
    express: app,
    noCache: true
}));
app.set('view engine', 'njk');

// Rodar o servidor
app.listen(3000, (erro) => {
    if (erro) {
        console.log('Erro ao rodar o servidor...');
        return;
    }
    console.log('Servidor rodando na porta 3000');
});