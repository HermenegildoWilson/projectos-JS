const fs = require('fs');

const path = 'C:/Users/herme/OneDrive/Documentos/Scanned Documents/Digitalização de Boas-Vindas.jpg';

const x = fs.stat(path, (erro, stats) => {
    if (erro) {
        console.log('Erro ', erro.path);
        return 'ola';
    }
    console.log('É diretório? ',stats.isDirectory());
    console.log('É arquivo? ',stats.isFile());
    return 'ola';
});

console.log('Terminado...');