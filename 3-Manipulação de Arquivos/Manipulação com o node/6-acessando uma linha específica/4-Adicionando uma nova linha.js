const fs = require('fs').promises;

async function adicionarLinha(caminho, numeroLinha, novoConteudo) {
  try {
    const data = await fs.readFile(caminho, 'utf8');
    const linhas = data.split('\n');

    if (numeroLinha > 0 && numeroLinha <= linhas.length) {
      linhas.splice(numeroLinha, 0, novoConteudo); // Adiciona uma linha após a posição
      await fs.writeFile(caminho, linhas.join('\n')); // Reescreve o arquivo
      console.log('Linha adicionada com sucesso!');
    } else {
      console.error('Número de linha fora do alcance!');
    }
  } catch (err) {
    console.error('Erro ao modificar o arquivo:', err);
  }
}

adicionarLinha('exemplo.txt', 2, 'Nova linha inserida aqui!');
