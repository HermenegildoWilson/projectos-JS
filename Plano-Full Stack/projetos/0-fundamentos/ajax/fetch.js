const output = document.querySelector('div');
const button = document.querySelector('button');
const paragrafo = document.querySelector('p');

button.addEventListener('click', () => {
    paragrafo.classList.add('carregando');
    const url = 'http://localhost:3000/users';
    output.innerHTML = ''
    requisitar(url).then(dados => {
        dados.forEach(user => {
            let usuario = `
            <span>${user.id}</span> - 
            <span>${user.nome}</span>
            <br>
            `
            output.innerHTML += usuario;
        });
    });
});

async function requisitar(url) {
    try {
        const resposta = await fetch(url);
    
        paragrafo.classList.remove('carregando');

        return await resposta.json();
    } catch (error) {
        return 'Erro ao atender a requisição...';
    }
}