const moduloFS = require('fs')

moduloFS.appendFile('texto.txt', '\nExcrito por: Hermenegildo', (erro) => {})

moduloFS.readFile('texto.txt', 'utf8', (err, dado) => {
    console.log(dado)
})