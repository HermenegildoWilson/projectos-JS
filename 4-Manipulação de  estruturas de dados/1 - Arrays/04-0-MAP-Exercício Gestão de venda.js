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
    OBJECTIVO: Formatar o preco para R$ e dar descontro de 10% utilisando o map
*/
const produtos_atualisados = produtos.map(produto => {

    let preco_atual = produto.temDesconto ? produto.preco*0.9 : produto.preco

    preco_atual = `R$ ${preco_atual}`

    return {
        id: produto.id, nome: produto.nome, preco: preco_atual, temDesconto: produto.temDesconto, qtd: produto.qtd
    }
})

console.log(produtos_atualisados)
console.log(produtos)