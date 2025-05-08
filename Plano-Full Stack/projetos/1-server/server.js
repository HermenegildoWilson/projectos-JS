//const express = require('express');
import express from 'express';
const app = express();

app.use(express.json());

import bodyParser  from 'body-parser';
app.use(bodyParser.urlencoded({ extended: true }));

import { router } from './routes';
app.use(router);

import nunjucks from 'nunjucks'
nunjucks.configure('views', { express: app } );
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