function Pessoa(nome, idade) {
    this.nome = nome;
    let _idade = idade;//Atributo privado

    this.interface = function() {
        return `Nome: ${this.nome} Idade: ${_idade}`
    }
}

const pessoaA = new Pessoa('Jose', 20)
console.log(pessoaA.interface())