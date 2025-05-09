import express from "express";

const app = express();

app.set('port', 3000);
app.listen(app.get('port'), (erro) => {
    if (erro) {
        console.log("Erro ao rodar o servidor");
        return
    }
    console.log("Servidor rodando em: http://localhost:3000/");
});