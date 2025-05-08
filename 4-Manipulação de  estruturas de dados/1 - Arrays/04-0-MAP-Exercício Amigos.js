let array = ['Wilson', 20, 'Americo', 20, 'Matondo', 19, 'Bena', 21]
array.push('Egas', 22)

const array2 = array.map((valor, ind, n) => {
    if (typeof valor == 'string') {
        return 'Nome: '+valor
    }else {
        return 'Idade: '+valor
    }
})

const arrayObjecto = array.map((valor, index, arrayCompleto) => {
    if (typeof valor == 'string') {
        let pessoa = {Nome : arrayCompleto[index], idade : arrayCompleto[index+1]}
        return pessoa
    }else{
        return 'Código da Pessoa: 0'+index
    }
})

console.log(arrayObjecto)