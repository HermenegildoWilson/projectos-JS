// Estas são funções que podem retornar diferentes valores e serem chamadas diversas vezes, ou seja com estas é possivel criar uma função que é chamada e para sua execução em determinado lugar, e pode ser chamada novamente começando sua execução no ponto em que parou anteriormente.

//Estas são criadas adicionando um asterisco logo apos a palavra function ou logo antes do nome da função, e os pontos em que a função pode ser interrompida são iniciados com a palavra yield;

// Mas para executarmos a função de forma que elas se comportem da forma desejada devemos usar o seu metodo next() que executa a função até encontrar um yield;
function *percorrer() {
    console.log('Iniciando percurso...');
    yield 'Entrando noutra rodovia!';

    console.log('Percorrendo a avenida do chá...');
    yield 'Saindo da avenida';
    
    console.log('Percorrendo a avenida Deolinda Rodrigues...');
    yield 'Fim do percurso';
}

const percurso = percorrer();
for(let avenida of percurso) {
    console.log(avenida+'\n');
}