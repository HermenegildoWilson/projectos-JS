import { mysqlDB }  from'../models';
import { Router}  from'express'
const router = Router()

router.get('/', (req, res) => {
    res.send('<h1>Ola mundo</h1>');
    //res.render('index', {titulo: 'Home'});
});

router.put('/foto', (req, res) => {
    res.redirect('/');
});

export { router };