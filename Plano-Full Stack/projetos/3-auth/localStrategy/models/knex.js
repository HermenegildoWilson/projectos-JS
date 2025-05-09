const knex = require('knex')({
    client: 'mysql',
    connection : {
        host: 'localhost',
        user: 'root',
        database: 'plataforma',
        password: ''
    }
});

module.exports = { knex }