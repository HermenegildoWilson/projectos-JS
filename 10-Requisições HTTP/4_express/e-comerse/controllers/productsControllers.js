// Objecto com a logica dos controladores de cada metodo de requisição
class productsControllers {

    // Controlador de requisições get
    getProducts = (req, res) => {
        res.render('index', {titulo: 'Express-nunjucks', nome:'Hermenegildo'});
        //res.send('Lista de produtos');
    }
    
    // Controlador de requisições post
    postProduct = (req, res) => {
        res.send('Produto cadastrado');
    }

    // Controlador de requisições put
    putProduct = (req, res) => {
        res.send('Produto atualisado');
    }

    // Controlador de requisições delete
    deleteProduct = (req, res) => {
        res.send('Produto deletado');
    }
}


// Exportação de uma instancia do objecto de controladores
module.exports = new productsControllers();