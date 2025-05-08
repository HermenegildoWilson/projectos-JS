const fs = require('fs').promises;

async function acessarLinhaEspecifica(caminho, numeroLinha) {
  try {
    const data = await fs.readFile(caminho, 'utf8');
    const linhas = data.split('\n');

    if (numeroLinha > 0 && numeroLinha <= linhas.length) {
      console.log(`Linha ${numeroLinha}:`, linhas[numeroLinha - 1]);
    } else {
      console.error('Número de linha fora do alcance!');
    }
  } catch (err) {
    console.error('Erro ao ler o arquivo:', err);
  }
}

acessarLinhaEspecifica('exemplo.txt', 3); // Acessa a linha 3
