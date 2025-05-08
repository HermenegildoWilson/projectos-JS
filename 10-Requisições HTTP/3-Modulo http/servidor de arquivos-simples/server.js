// Metodo fs
const fs = require('fs');

const http = require('http');

// Criação dos métodos de requisição que o servidor vai poder atender {GET, PUT E DELETE}
const metodos = Object.create(null);

//Criação do método GET
metodos.GET = function (path, responder) {
    // Esta função do modulo fs serve para obter informações sobre determinado arquivo e também  verifica se o mesmo existe e/ou se é um diretório.
    fs.stat(path, function (erro, stats) {

        if (erro && erro.code == 'ENOENT') {
            responder(404, 'Arquivo nao encontrado!');
        } else if (erro) {
            responder(500, erro.toString());
        } else if (stats.isDirectory()) {
            fs.readdir(path, function (erro, arquivos) {
                if (erro) {
                    responder(500, erro.toString());
                } else {
                    responder(200, arquivos.join('\n'));
                }
            });
        } else {
            responder(200, fs.createReadStream(path) /*, require('mine').lookup(path)*/);//npm i --save-dev @types/mine
        }
    });
}


function respondErrorOrNothing(responder) {
    return function (error) {
        if (error)
            responder(500, error.toString());
        else
            responder(204);
    };
}
metodos.DELETE = function (path, responder) {
    fs.stat(path, (erro, stat) => {
        if (erro && erro.code == 'ENOENT') {
            responder(204);
        } else if (erro) {
            responder(500, erro.toString());
        } else if (stat.isDirectory()) {
            fs.rmdir(path, respondErrorOrNothing(responder));
        }else {
            fs.unlink(path, respondErrorOrNothing(responder));
        }
    })
}

metodos.PUT = function(path, responder, requisicao) {
    const writeStrem = fs.createWriteStream(path);
    writeStrem.on('error', (erro) => {
        responder(500, erro.toString);
    });

    writeStrem.on('finish', () => {
        responder(200);
    });

    requisicao.pipe(writeStrem);
}


//Criamos um servidor com o modulo http
http.createServer(function (requisicao, resposta) {
    // Função que vai ser responsavel por formular a resposta para a requisição
    // Ela recebe um código de erro, o corpo da resposta e o tipo de documento a retornar
    function responder(codigo, corpo, tipo = 'text/html') {
        // Escrita do cabeçalho da resposta
        resposta.writeHead(codigo, { 'content-type': tipo });

        // Se o corpo da requisição conter um stream de leitura este tem um método pipe
        //E usamos este mesmo metodo para retornar/encaminhar uma stream de escrita.
        if (corpo && corpo.pipe) {
            corpo.pipe(resposta);
        } else {
            // Se não conter o metodo pipe assumimos que o corpo seja null
            resposta.end(null);
        }
    }

    // Função que vai pegar o caminho da url, este converte a url de string quate para formato de uma url comun dando mais clareza a esta.
    function urlToPath(url) {
        const path = require('url').parse(url).pathname;
        return '.' + decodeURIComponent(path);
    }

    // Se o método usado na requisição existir no nosso objecto de métodos, então...
    if (requisicao.method in metodos) {
        // Retornamos o que o usuaario solicita
        console.log(urlToPath(requisicao.url));

        metodos[requisicao.method](urlToPath(requisicao.url), responder, requisicao);
    } else {
        // Caso contrário retornamos um erro 404
        responder(404, 'Metodo ' + requisicao.method + ' nao encontrado');
    }

}).listen(8000);