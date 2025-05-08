async function requisitar(url) {
    try {
        const resposta = await fetch(url);
        const dados = await resposta.json();

        return dados;
    } catch (error) {
        return 'Erro...'
    }
}

const url = 'http://localhost:3000/users';
requisitar(url).then(dados => {
    console.log(dados);
}).catch(erro => {
    console.log(erro);
});