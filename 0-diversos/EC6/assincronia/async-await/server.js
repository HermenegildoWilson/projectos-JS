const http = require('http');

const fs = require('fs');
const fsp = require('fs/promises');

// METODOS DE REQUISIÇÂO HTTP
class metodos {
    // Metodo get
    GET (caminho) {
        // Usamos uma promisse async/await para conseguirmos acessar aos dados fornecidos pela função fs.stat, de modo que estes possam ser retornados

        // Criamos uma função assincrona
        async function verificarRequisicao() {
            try{
                // Executamos o metodo stat da promise (fs/promise), e usamos o await para fazer a sua leitura
                const statObject = await fsp.stat(caminho);

                // Caso o path corresponda a um arquivo
                if (statObject.isFile()) {
                    // Lemos o arquivo de forma assincrona
                    async function lerArquivo() {
                        const conteudo = await fsp.readFile(caminho, 'utf8');
                        return {codigo: 200, corpo: conteudo};
                    }

                    // Retornamos o objecto JSON retornado na leitura do arquivo
                    return lerArquivo();

                    // Caso seja um diretorio
                } else if (statObject.isDirectory()) {
                    async function lerDiretorio() {
                        const arquivos = await fsp.readdir(caminho, 'utf8');
                        return {codigo: 200, corpo: arquivos};
                    }
                    return lerDiretorio();
                } else {
                    return {codigo: 404, corpo: 'Arquivo nao encontrado'};
                }

                // Em caso de erro
            }catch (erro) {
                // Convertemos o erro para string para termos acesso ao seu conteudo
                let erroDesc = new String(erro);

                // Caso a mensagem de erro contenha a string ENOENT, é porque o arquivo não foi encontrado
                if (erroDesc.includes('ENOENT')) {
                    return {codigo: 404, corpo: 'Arquivo nao encontrado'};
                }else {
                    // Caso contrário ouve um erro do servidor
                    return {codigo: 500, corpo: 'O servidor falhou!'};
                }
            }
        }

        // Por ultimo retornamos a promisse;
        return verificarRequisicao();
    }


    PUT (caminho, conteudo='Ola') {
        async function verificarRequisicao() {
            try {
                const statObject = await fsp.stat(caminho);

                if (statObject.isFile()) {
                    async function adicionarConteudo() {
                        fsp.appendFile(caminho, conteudo);
                        return {codigo: 200, corpo: 'Conteudo adicionado com exito'};
                    }
                    return adicionarConteudo();

                }else if (statObject.isDirectory()) {
                    async function adicionarArquivo() {
                        await fsp.mkdir(caminho);
                        return {codigo: 200, corpo: 'Diretorio criado com exito'};
                    }
                    return adicionarArquivo();
                    
                } else {
                    return {codigo: 404, corpo: 'Arquivo não encontrado'};
                }

            } catch (erro) {
                // Convertemos o erro para string para termos acesso ao seu conteudo
                let erroDesc = new String(erro);

                // Caso a mensagem de erro contenha a string ENOENT, é porque o arquivo não foi encontrado
                if (erroDesc.includes('ENOENT')) {
                    return {codigo: 404, corpo: 'Arquivo nao encontrado'};
                }else {
                    // Caso contrário ouve um erro do servidor
                    return {codigo: 500, corpo: 'O servidor falhou!'};
                }
            }
        }
        return verificarRequisicao();
    }
}

http.createServer(function(req, res) {
    const metodosHTTP = new metodos();

    function convertURL(url) {
        return '.' + decodeURIComponent(require('url').parse(url).pathname)
    }
    
    if (req.method in metodosHTTP) {
        const dadosRequisicao = []
        const caminho = convertURL(req.url)
        
        metodosHTTP['PUT'](caminho).then((texto) => {
            dadosRequisicao.push(texto.codigo);
            dadosRequisicao.push(texto.corpo);

            res.writeHead(dadosRequisicao[0], {'content-type':'text/html'});

            res.end(dadosRequisicao[1]);
        });
    }
}).listen(8000);