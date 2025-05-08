/*const output = document.querySelector('div');

document.querySelector('button').onclick = () => {
    
    const http = require('http');
    
    const requisicao = http.request({
        hostname: "localhost",
        port: 8000,
        method: "GET",
    }, function (resposta) {
        output.innerHTML = 'resposta'
        resposta.on('data', () => {
            output.innerHTML = 'resposta'
        })
    });

    requisicao.end('Terminado');
}
*/
const output = document.querySelector('div');
const http = require('http');

const requisicao = http.request({
    hostname: "localhost",
    port: 8000,
    method: "GET",
}, function (resposta) {
    output.innerHTML = 'resposta'
    resposta.on('data', () => {
        output.innerHTML = 'resposta'
    })
});

requisicao.end('Terminado');