class controllers {
    get = (req, res) => {
        res.render('index', {titulo: 'Home', nome:'Hermenegildo'});
    }

    exerciciosTabuada = (req, res) => {
        const { numero } = req.params
        res.render('exercicios', {titulo: 'Exercícios-tabuada', nome: 'Hermenegildo', numero: numero});
    }

    exerciciosSoma = (req, res) => {
        const { numero1 } = req.params
        const { numero2 } = req.params
        res.render('exercicios', {titulo: 'Exercícios-soma', nome: 'Hermenegildo',  numero1: numero1, numero2: numero2 });
    }
}

module.exports = new controllers();