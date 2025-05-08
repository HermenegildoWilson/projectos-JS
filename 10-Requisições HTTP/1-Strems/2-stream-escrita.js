const fs = require('fs');

// Criação da stream de escrita
const writeStream = fs.createWriteStream('arquivo.html');

// Adicionando conteudo ao fluxo de dados
writeStream.write('<h1>Conteudo');
writeStream.end('\nUltima linha.</h1>');

// Nesta também podemos usar os eventos das de leitura.