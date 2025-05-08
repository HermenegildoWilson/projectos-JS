const moduloFS = require('fs');

moduloFS.readFile('texto.txt', 'utf8', Extdado = (erro, dado) => {
    console.log(dado)
})

let conteudo = moduloFS.readFileSync('texto.txt', 'utf8', () => {})

console.log(conteudo)

