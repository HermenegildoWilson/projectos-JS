class Pessoa {
    //Indicamos primeiramente os membros privados, para que possamos usa-los mais tarde
    #idade;
    #apresentar;

    constructor(nome, idade) {
        this.nome = nome;

        //Inicializamos os membros privados
        this.#idade = idade
        this.#apresentar = function() {
            return `Nome: ${this.nome}, Idade: ${this.#idade}`
        }
    }   

    getUser() {
        return this.#apresentar()
    }
}

const pessoaA = new Pessoa('Jose', 20);
console.log(pessoaA.getUser())