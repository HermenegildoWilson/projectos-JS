// A desestruturação consiste em extrair valores de um objecto de forma mais elegante e menos verbosa, podendo trazer muita praticidade evitando a declaração de inúmeras variaveis, quando a necessidade é que estas armazenem valores provenientes de um mesmo objecto.


const usuario = {
    nome:'Wilson',
    senha:'123',
    emeil:'hermenegildo@gmail.com'
}

// Declaramos uma 'unica variavel' que vai conter entre chavetas outras variaveis que devem corresponder as chaves do objecto

// Se quisermos que o nome danova variavel seja diferente do nome da chave do objecto usamos labels, ou seja depos do nome da chave colocamos dois pontos e de seguida o novo nome que queremos dar a variavel.
let {nome:jo, emeil} = usuario;
console.log(jo, emeil);

// --------------------------------------------------
// Já para o caso dos arrays usamos parenteses retos ao inves de chavetas, e percorremos o array separando por virgula, ate que cheguemos a posição onde esta o valor que queremos acessar, e para a posição deste valor damos um nome
const familha = ['Wilson', 'Acacio', 'José', 'Honorato'];
const [,,,pai] = familha;
console.log(pai);

const rotas	= {
    rapidas: ['Rodovia', 'Estrada X', 'Estrada Y']
};
const {rapidas:[primeiraRota]} = rotas;

console.log(primeiraRota);
