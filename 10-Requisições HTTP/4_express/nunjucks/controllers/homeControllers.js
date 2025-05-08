class controllers {
    welCome = (req, res) => {
        res.render('index', {titulo: 'Home'});
    }
}

module.exports = new controllers();