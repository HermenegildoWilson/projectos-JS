// Qunado não sabemos o numero exato de parametros passados para uma função podemos usar o ov«bjecto arguments que toda função possui, este objecto é um 'array' que contem todos os argumentos passados para a função.
function somar() {
    let soma=0;
    for(let i = 0; i < arguments.length; i++){
        soma += arguments[i];
    }
    return soma;
}
somar(2,1);

// Com o ES6 podemos ter a mesma funcionalidade mais com um pouco mais de elegância, para isto passamos um parametro para a função precedido de reticências, assim estremos a criar um objecto arguments personalisado
function somar2(...valores) {
    if (valores.length == 0) return 0;
    return valores.reduce((soma, valor) => {
        return soma += valor;
    }, 0);
}
console.log(somar2());

// Podemos ainda identificar parametros que estarão de fora do array para isso basta passa-los antes do objecto arguments.