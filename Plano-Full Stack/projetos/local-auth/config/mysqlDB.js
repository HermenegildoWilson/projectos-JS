const mysqlDB = require('mysql').createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'plataforma'
    }
);

module.exports = { mysqlDB };