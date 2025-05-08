let array = ['Wilson', 20, 'Americo', 20, 'Matondo', 19, 'Bena', 21]
array.push('Egas', 22)


// Encontra um dado especifico
const nome = array.find((nome) => {
    return nome == 'Wilson';
})
console.log(nome);


// Verifica se os dados do vetor obedecem a um critério
const nome2 = array.every((nome) => {
    return nome == 'Wilson';
})
console.log(nome2);