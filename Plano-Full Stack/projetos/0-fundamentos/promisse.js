function request(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        let body = null;
        
        xhr.open('GET', url, true);

        xhr.responseType = 'json';

        xhr.addEventListener('loadend', (erro) => {
            if (erro) {
                reject('Erro: '+erro);
                return;
            }
            resolve(xhr.response);
        });
        xhr.addEventListener('error', (erro) => {
            reject('Erro...', erro);
        });

        xhr.send();
    });
}

const url = 'http://localhost:3000/users';
request(url).then(dados => {
    console.log('Dados: '+dados);
}).catch(erro => {
    console.log('Erro: '+erro);
    
});