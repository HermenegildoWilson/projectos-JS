const produtos = [
    {id: 1, nome: 'Sanmgung S21', preco: 3999.99, temDesconto: true, qtd: 1},
    {id: 2, nome: 'Notepad', preco: 4500.00, temDesconto: false, qtd: 3},
    {id: 3, nome: 'Smart TV', preco: 2799, temDesconto: true, qtd: 5},
    {id: 4, nome: 'Fone de Ouvido', preco: 299.00, temDesconto: false, qtd: 2},
    {id: 5, nome: 'Camera', preco: 3200.00, temDesconto: true, qtd: 1},
    {id: 6, nome: 'Tablet Ipad', preco: 4199.00, temDesconto: false, qtd: 8},
    {id: 7, nome: 'Consola', preco: 4699.00, temDesconto: true, qtd: 2},
    {id: 8, nome: 'SmartWatch', preco: 2499.00, temDesconto: false, qtd: 7},
    {id: 9, nome: 'Impressora HP', preco: 599.00, temDesconto: true, qtd: 5},
    {id: 10, nome: 'Caixa de Som', preco: 1000.00, temDesconto: false, qtd: 3}
]

/*
    Aumentar 10 a quantidade de todos os produtos
    Filtrar os produtos com desconto
    E qual o faturamento total dos produtos com desconto
*/

const produtosAtualisados = produtos.map(produto => {
    let novaQtdd = produto.qtd + 10
    return {...produto, qtd: novaQtdd}
}).filter(produto => produto.temDesconto).reduce((total, produto) => {
    return (produto.preco * produto.qtd) + total
}, 0)


console.log(produtosAtualisados)

console.log(typeof JSON.stringify(produtos))
console.log(typeof JSON.parse(JSON.stringify(produtos)))