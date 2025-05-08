const fs = require('fs/promises');

async function combinarArquivos() {
  try {
    const data1 = await fs.readFile('arquivo1.txt', 'utf8');

    const data2 = await fs.readFile('arquivo2.txt', 'utf8');

    await fs.writeFile('resultado.txt', data1 + data2);
    
    console.log('Arquivos combinados com sucesso!');
  } catch (err) {
    console.error('Erro:', err);
  }
}

combinarArquivos();