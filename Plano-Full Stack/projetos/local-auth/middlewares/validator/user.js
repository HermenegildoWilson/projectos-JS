const { mysqlDB } = require('../../models');

anoAtual = new Date().getFullYear() - 18;

async function user(user) {
    return await mysqlDB.select('aluno', { condition: `where email = '${user.email}'` })
        .then(aluno => {
            if (aluno.length !== 0) {
                return {status: false, message: 'Email indisponível'};
            }

            const anoNascimento = user.dataNascimento.slice(0, 4);
            
            
            if (anoNascimento > anoAtual) {
                return {status: false, message: 'Só para maiores de 18 anos'};
            }
            
            return {status: true, message: 'Cadastrado'};
        })
        .catch(erro => {
            console.log(erro);
            return 'Erro na validação: ' + erro;
        });

}

module.exports = { user };