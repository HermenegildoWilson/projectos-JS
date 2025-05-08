const fs = require('fs/promises');

async function lerArquivo() {
  try {
    const data = await fs.readFile('texto.txt', 'utf8');
    console.log('Conteúdo do arquivo:');
    console.log(data);
  } catch (err) {
    console.error('Erro ao ler o arquivo:', err);
  }
}

lerArquivo();