// Instanciamos um objecto rotas
const router = require('express').Router();

// Importamos os controladores de produtos
const { productsControllers } = require('../controllers');

// Rota get usuarios
router.get('/products', productsControllers.getProducts);

// Rota post usuario
router.post('/product', productsControllers.postProduct);

// Rota put usuario
router.put('/product', productsControllers.putProduct);

// Rota delete usuario
router.delete('/product', productsControllers.deleteProduct);

// Exportamos as rotas para o projecto
module.exports = { router };