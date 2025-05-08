// Importação do mudulo que permite a criação de servidor
const http = require('http');

// Iniciamos um servidor com o metodo createServer do modulo, este recebe como parametro uma função de calback que tem dois objectos:
    // request: Recebe as solicitações de acesso as páginas web;
    // response: Responsavel por enviar as respostas as páginas;

http.createServer((req, res) => {
    // Colocamos as configurações do servidor;
    
    // OBJECTO REQUISIÇÃO: Este nos da a possibilida de acessar á algumas propriedades da requisição, tais como:
    
    const dadosReq = {cabecalho: req.headers, metodo: req.method, url: req.url};
        // Cabeçalho de configurações da requisição - headers
        // O metodo(verbo) http usado n requisição - method 
        // O caminho de onde a requisição vem - url
    console.log(dadosReq);
    
    // OBJECTO RESPOST: Serve para o servidor enviar as respostas as requisições do usuario.
        // Configuração do cabeçalho da resposta.
        // Codigo de status;
        // Tipo de documento que vamos retornar: text/plain, text/html, aplication/json, etc...
    res.writeHead(200, {'content-type':'aplication/json'});
    let corpo = '<h1>Ola mundo</h1>';

        // Corpo da resposta;
    res.end(corpo);

}).listen(18);// Definimos a porta em que o servidor estará funcionando;