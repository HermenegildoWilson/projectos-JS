const { log } = require('console');
const http = require('http');
const fs = require('fs/promises');

const server = http.createServer((req, res) => {
    
    async function render(page) {
        try {
            return await fs.readFile(__dirname + page);
        } catch (error) {
            return error
        }
    }
    
    render('/cliente.html')
        .then(data => {
            res.writeHead(200, {"content-type": "text/html"})
            res.write(data)
            res.end();
        })
        .catch(erro => {
            res.writeHead(500, {"content-type": "text/html"})
            res.write(erro)
            res.end();
        })
})
    .listen(3000);