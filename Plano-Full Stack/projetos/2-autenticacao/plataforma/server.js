const express = require('express');
const app = express();

const session = require('express-session');
app.use(session({
    secret: 'ola',
    resave: false, 
    saveUninitialized: false
}));
 
app.use(express.json());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const { router } = require('./routes');
router(app);

const nunjucks = require('nunjucks')
    .configure('views', { express: app } );
app.set('view engine', 'njk');

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, (erro) => {
    if (erro) {
        console.log('Erro ao rodar o servidor');
        return
    }
    console.log('Servidor rodando em: http://localhost:3000');
});