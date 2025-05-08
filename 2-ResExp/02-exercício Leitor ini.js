let db = require('fs')

db.readFile('arquivo.txt', 'utf8', abrir = (erro, texto) => {
    if (erro) {
        console.log('Erro ao abrir o arquivo')
    }else {
        let array = []
        let seccao = {titulo: '', definicao: '' ,conteudo: ''}
        
        let arrayConteudo = texto.split(/[\n\r]+/)
        
        arrayConteudo.forEach((linha, index) => {
            if(/^[(;+)|\s+]/.test(linha)) {
                return
            }else {
                if (/^\[.*\]$/.test(linha)) {//Cabecalho
                    seccao.titulo = linha
                }else if(/[^\=+]\=[^\=*]/.test(linha)) {//Definições
                    seccao.definicao = linha
                }else if (/.+/.test(linha)){//Conteudo
                    seccao.conteudo = linha
                }
                if (seccao.conteudo.length != 0) {
                    array.push(seccao)
                    seccao = {titulo: '', definicao: '' ,conteudo: ''}
                }
            }
        })
        console.log(array)
    }
})