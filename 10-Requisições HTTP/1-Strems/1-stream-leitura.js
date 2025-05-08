const fs = require('fs');

let arquivo = 'arquivo2.docx';


fs.stat(arquivo, (erro, statObject) => {
    if (erro) {
        console.log('Erro, arquivo não encontrado!');
    } else if (statObject.isFile) {
        
        // Criação da stream de leitura
        const readStrem = fs.createReadStream(arquivo, {encoding: 'utf8'});
        
        // Evento ondata, verifica/monitora a chegada de cuks(pedaços/partes) fluxo de dados
        readStrem.on('data', (dado) => {
            console.log(dado);
        });

        // Evento onend, disparado quando a transação chegar ao fim;
        readStrem.on('end', () => {
            console.log('\nTerminado');
        });

        // Evento onerror, disparado casso ocorra um erro
        readStrem.on('error', () => {
            console.log('Erro na leitura');
        })

    }else {
        console.log(arquivo,' não é um arquivo!');
    }
});