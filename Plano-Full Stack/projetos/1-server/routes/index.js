import { mysqlDB }  from'../models';
import { Router}  from'express'
const router = Router()

router.get('/', (req, res) => {
    res.render('index', {titulo: 'Home'});
});

router.put('/foto', (req, res) => {
    res.redirect('/');
});

module.exports = { router };