const moduloFS = require('fs')

let conteudo = 'Este é um arquivo de exemplo. Aprendendo manipulação de arquivos com Node.js.'

moduloFS.writeFile('txto.txt', conteudo, (erro) => {
    console.log('Dado adicionado')
})

moduloFS.readFile('texto.txt', 'utf8', (erro, dado) => {
    console.log(dado)
})