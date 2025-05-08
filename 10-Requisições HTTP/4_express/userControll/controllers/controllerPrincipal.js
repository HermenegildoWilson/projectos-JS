const knex = require('../config').dbConection;

class controllers {
    home = (req, res) => {
        res.render('index', {titulo: 'Home' } );
    }
}

module.exports = new controllers();