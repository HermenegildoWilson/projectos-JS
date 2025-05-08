let nome = `Hermenegildo Panzo`

console.log(nome.toLowerCase())
console.log(nome.toUpperCase())

console.log(nome.substring(3, 5))//Como parametro passamos o intervalo de fatiamento -> (inicio, fim)

let array = nome.split('')//Cria uma lista separando os item com o caractere indicado, caso este exista na string
console.log(array)

let array2 = nome.slice(0,2)
console.log(array2)
