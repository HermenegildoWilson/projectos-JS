import express from "express";

const app = express();

app.listen(3000, (erro) => {
    if (erro) {
        console.log("Erro: "+erro);
        return
    }
    console.log("Servidor rodando em https://localhost:3000");
});