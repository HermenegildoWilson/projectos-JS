const formularioLogin = document
    .querySelector('#formularioLogin');

formularioLogin.addEventListener('submit', (event) => {
    event.preventDefault();

    const formDate = new FormData(formularioLogin);
    const bodyForm = Object.fromEntries(formDate.entries());

    logar('/login', bodyForm)
        .then(result => {
            if (result.nome) {                
                window.location.href = '/';
            }else {
                console.log(result);
                alert(result.message);
            }
        })
        .catch(erro => {
            console.log(erro);
        });
});

async function logar(url, body) {
    return await new Promise((res, rej) => {
        try {
            const xhr = new XMLHttpRequest();
    
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    res(xhr.response);
                }
            }
    
            xhr.open('POST', url, true);
            xhr.setRequestHeader("Content-Type", "application/json");

            xhr.responseType = 'json';
    
            xhr.send(`${JSON.stringify(body)}`);
        } catch (erro) {
            rej('Erro: '+erro);
        }
    });
}