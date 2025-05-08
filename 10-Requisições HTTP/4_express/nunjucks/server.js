const express = require('express');

const app = express();

const router = require('./routes')
    .start(app);

const nunjuck = require('nunjucks');
const viewEngine = nunjuck.configure('views', {
        autoescape: true,
        noCache: true,
        express: app
    }
);
app.set('view engine', 'njk');

// Criação de um filtro personalisado
viewEngine.addFilter('editar', (texto) => {
    return 'Nome: '+texto.toUpperCase();
});

//app.use(express.static('public'));
const path = require('path');
// Configurar arquivos estáticos
app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, (erro) => {
    if (erro) {
        console.log('Erro ao rodar o servidor');
        return
    }
    console.log('Servidor rodando na porta 3000');
});