// Ciação da alicação principal
const express = require('express');
const app = express();

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// Configurações bodyParser, para que os dados possam ser trafegados porv meio de ormulários HTML
const bodyParser = require('body-parser');
app.use( bodyParser.urlencoded({ extended: true }));

// Configuração das rotas da aplicação
const routes = require('./routes');
routes(app);

// Configuração da template engine
const nunjucks = require('nunjucks');
nunjucks.configure('views', ({
    express: app,
    autoescape: true,
    noCache: true
}));
app.set('view engine', 'njk');


// Botando o servidor para rodar
app.listen(3000, (erro) => {
    if (erro) {
        console.log('Erro ao rodar o servidor ', erro);
        return;
    }
    console.log('Servidor rodando na porta 3000...');
});