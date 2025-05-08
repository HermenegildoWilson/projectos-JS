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

class Trabalhador extends Pessoa {
    constructor(nome, idade, saldo){
        super(nome, idade);
        this.saldo = saldo;
    }
}

const trabalhador = new Trabalhador('Mateus', 34, 3044)
console.log(trabalhador.getUser())