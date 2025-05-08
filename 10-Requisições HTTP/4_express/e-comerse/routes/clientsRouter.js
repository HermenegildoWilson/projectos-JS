// Instanciamos um objecto rotas
const router = require('express').Router();

// Importamos os controladores de produtos
const clientsControllers = require('../controllers').clientsControllers;

// Rota get clientes
router.get('/users', clientsControllers.getClients);

// Rota post cliente
router.post('/user', clientsControllers.postClient);

// Rota put cliente
router.put('/user', clientsControllers.putClient);

// Rota delete cliente
router.delete('/user', clientsControllers.deleteClient);


// Exportamos as rotas para o projecto
module.exports = { router };