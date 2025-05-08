const http = require('http');

const servidor = http.createServer(function(requisicao, resposta) {
    resposta.writeHead(200, {"content-type":"text/html"});
    resposta.write('<h1>Ola como posso ajudar-te<h1>');

    resposta.end();
})

const url = require('url').parse('file:///D:/S%C3%B3%20Book/My%20World/Developer/Biblioteca/JS/Eloquent_JavaScript%202%C2%AAEd-Portugu%C3%AAs.pdf').pathname;

console.log(decodeURIComponent(url))
//servidor.listen(8000);