// Objecto com a logica dos controladores de cada metodo de requisição
class clientsControllers {

    // Controlador de requisições get
    getClients = (req, res) => {
        res.send('Lista de clientes');
    }

    // Controlador de requisições post
    postClient = (req, res) => {
        res.send('Cliente cadastrado');
    }

    // Controlador de requisições put
    putClient = (req, res) => {
        res.send('Cliente atualisado');
    }

    // Controlador de requisições delete
    deleteClient = (req, res) => {
        res.send('Cliente deletado');
    }
}

// Exportação de uma instancia do objecto de controladores
module.exports = new clientsControllers();