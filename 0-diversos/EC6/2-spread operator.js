// Operadores spread são muito úteis pois os mesmos permitem 'desembrulhar' o conteudo de um objecto iteravel, ou seja estes são usados para separar os elementos de um objecto permitindo que lidemos com eles de forma individual.

// Ele pode ser usado tanto quando queremos passar como parametros para uma função os valores contidos em um aray individualmente, ou ainda para concatenar diferentes arrays, e muito mais

let array = [1, 2, 3, 4];
let palavra = 'portugal';
let letras = [...palavra];
let array2 = [...array, 2, 3];

console.log(letras);