// Importação do modulo express
const express = require('express');
// Criação de um instância de express
const app = express();

// Importação das rotas da aplicação
const router = require('./routes');
// Utilisamos as rotas
router.start(app);

const nunjucks = require('nunjucks');

nunjucks.configure('views', {
    autoescape: true,
    express: app,
    noCache: true
});
app.set('view engine', 'njk');


app.listen(8000, (erro) => {
    if (erro) {
        console.log('Erro ao rodar: '+erro);
        return
    }
    console.log('Rodando');
});