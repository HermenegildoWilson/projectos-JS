//Coleta do botão de requisição e da caixa de out put
const btn = document.querySelector('button')
const output = document.querySelector('div')

//Abstração da requisição, numa função
function requisitar(url){
    return new Promise(function(functionSucesso, functionErro){
        const xhr = new XMLHttpRequest();

        //Configuração da requisição
        xhr.open('GET',url, true);

        //Monitoramento da requisição, em caso de sucesso
        xhr.onload = () => {
            if (xhr.status < 400) {
                functionSucesso(xhr.responseText);
            }else{
                functionErro(new Error(`Erro ${xhr.status}, tu fez uma cagada!!`));
            }
        }

        //Monitoramento em caso de erro
        xhr.onerror = () => {
            functionErro(new Error('Erro na requisição '));
        }

        //Envio da requisição
        xhr.send()
    })
}

//Adicionamos o evento de click no botão de fazer a requisiçaõ
btn.onclick = () => {
    requisitar('https://jsonplaceholder.typicode.com/posts').then(function(resposta) {
        const dados = JSON.parse(resposta);
        output.innerHTML = dados.map((dado) => `<p><h3>Cadastro - ${dado.id}</h3><strong>${dado.title}</strong>: ${dado.body}</p>`).join('');

    }).catch(function(erro){
        output.textContent = erro;
    })
}

