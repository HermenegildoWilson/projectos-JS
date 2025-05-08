const express = require('express');
const app = express();

app.use(express.json());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require('./routes')
    .start(app);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});