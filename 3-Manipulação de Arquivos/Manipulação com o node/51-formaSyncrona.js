const fs = require('fs');

try {
  const data = fs.readFileSync('texto.txt', 'utf8');
  console.log('Conteúdo do arquivo:');
  console.log(data);
} catch (err) {
  console.error('Erro ao ler o arquivo:', err);
}
