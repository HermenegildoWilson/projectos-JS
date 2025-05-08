class controllers {
    info = (req, res) => {
        res.render('info', {titulo: 'Informações'});
    }
}

module.exports = new controllers();