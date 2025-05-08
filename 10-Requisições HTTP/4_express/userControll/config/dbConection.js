// Conectamos nos ao banco de dados
const knex = require('knex')({
    client: 'mysql',
    connection : {
        host: 'localhost',
        user: 'root',
        database: 'usuarios',
        password: ''
    }
});

module.exports = { knex }