import express from "express";
import { config } from "dotenv";

config()

async function main() {
    const app = express();

    app.listen(3000, (erro) => {
        if (erro) {
            console.log('Erro ao rodar o servidor ' +erro);
            return
        }
        console.log('Servior rodando em: http://'+ process.env.hostname+':'+process.env.port);
    });
}
main()