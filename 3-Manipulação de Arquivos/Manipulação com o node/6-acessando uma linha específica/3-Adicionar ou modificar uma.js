const fs = require('fs').promises;

async function substituirLinha(caminho, numeroLinha, novoConteudo) {
  try {
    const data = await fs.readFile(caminho, 'utf8');
    const linhas = data.split('\n');

    if (numeroLinha > 0 && numeroLinha <= linhas.length) {
      linhas[numeroLinha - 1] = novoConteudo; // Substitui a linha desejada
      await fs.writeFile(caminho, linhas.join('\n')); // Reescreve o arquivo
      console.log('Linha substituída com sucesso!');
    } else {
      console.error('Número de linha fora do alcance!');
    }
  } catch (err) {
    console.error('Erro ao modificar o arquivo:', err);
  }
}

substituirLinha('exemplo.txt', 2, 'Esta é a nova linha 2!');
