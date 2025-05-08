const dbConection = require('./dbConection').knex;

// Exportamos a conexao para que ela esteja visivel por todo o programa
module.exports = { dbConection }