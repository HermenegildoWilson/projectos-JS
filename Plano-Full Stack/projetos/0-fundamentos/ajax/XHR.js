const output = document.querySelector('div');
const paragrafo = document.querySelector('p');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    paragrafo.classList.add('carregando');
    output.innerHTML = ''
    const url = 'http://localhost:3000/users';
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
    return await new Promise((resolve, reject) => {
        try {
            const xhr = new XMLHttpRequest();
            
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    paragrafo.classList.remove('carregando')
                    if (xhr.status >= 200 && xhr.status < 300) {
                        const dados = xhr.response;
                        resolve(dados);
                    } else {
                        reject('Requisição atendida com o codigo '+xhr.status);
                    }
                }
            }
            xhr.onerror = () => {
                reject('Erro ao atender a requisição...');
            }

            xhr.open('GET', url, true);
            xhr.responseType = 'json';

            xhr.send();
        } catch (error) {
            reject('Erro ao atender a requisição...');
        }
    });
}