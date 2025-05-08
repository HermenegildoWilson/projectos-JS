const fs = require('fs');

fs.readFile('exemplo.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Erro ao ler o arquivo:', err);
    return;
  }

  const linhas = data.split('\n'); // Divide o conteúdo em linhas
  const linhaEspecifica = 2; // Número da linha que deseja acessar (começa em 1)

  if (linhaEspecifica > 0 && linhaEspecifica <= linhas.length) {
    console.log(`Linha ${linhaEspecifica}:`, linhas[linhaEspecifica - 1]);
  } else {
    console.error('Número de linha fora do alcance!');
  }
});
