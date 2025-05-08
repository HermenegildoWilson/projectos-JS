// Importamos os controladores do repositório
const clientsControllers = require('./clientsControllers');
const productsControllers = require('./productsControllers');


// Exportamos os controladores para que estejam visiveis
module.exports = { clientsControllers, productsControllers };