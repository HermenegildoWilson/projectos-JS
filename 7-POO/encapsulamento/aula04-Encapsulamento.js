//Encapsulamento com Closures
function Pessoa(nome, idade) {
    let _idade = idade; // Variável privada

    this.nome = nome; // Propriedade pública

    this.setIdade = function(idade) { // Método público
        if (idade > 0) {
            _idade = idade;
        }
    };

    this.getIdade = function() { // Método público
        return _idade;
    };
}

const pessoa = new Pessoa('João', 26);
console.log(pessoa.nome); // João
console.log(pessoa.getIdade()); // 25
console.log(pessoa._idade); // undefined (não acessível diretamente)


//Encapsulamento com Symbol
const _idade = Symbol('idade');

class Pessoa {
    constructor(nome) {
        this.nome = nome; // Público
        this[_idade] = 0; // "Privado"
    }

    setIdade(idade) {
        if (idade > 0) {
            this[_idade] = idade;
        }
    }

    getIdade() {
        return this[_idade];
    }
}

const pessoa2 = new Pessoa('Maria');
pessoa2.setIdade(30);
console.log(pessoa2.getIdade()); // 30
console.log(pessoa2._idade); // undefined




//Encapsulamento com WeakMap
const dadosPrivados = new WeakMap();

class Pessoa {
    constructor(nome) {
        this.nome = nome; // Público
        dadosPrivados.set(this, { idade: 0 }); // Privado
    }

    setIdade(idade) {
        if (idade > 0) {
            const dados = dadosPrivados.get(this);
            dados.idade = idade;
        }
    }

    getIdade() {
        return dadosPrivados.get(this).idade;
    }
}

const pessoa3 = new Pessoa('Carlos');
pessoa3.setIdade(40);
console.log(pessoa3.getIdade()); // 40
console.log(dadosPrivados.get(pessoa3)); // Não acessível diretamente




//Encapsulamento com Propriedades Privadas (ES2022)
class Pessoa {
    #idade; // Propriedade privada

    constructor(nome) {
        this.nome = nome; // Público
        this.#idade = 0; // Privado
    }

    setIdade(idade) {
        if (idade > 0) {
            this.#idade = idade;
        }
    }

    getIdade() {
        return this.#idade;
    }
}

const pessoa4 = new Pessoa('Ana');
pessoa4.setIdade(35);
console.log(pessoa4.getIdade()); // 35
console.log(pessoa4.#idade); // Erro: propriedade privada não é acessível


/**
 * Quando Usar Cada Método?
Closures: Simples e amplamente compatível, ideal para funções.
Symbol: Bom para adicionar privacidade em objetos ou classes.
WeakMap: Seguro, ideal para instâncias únicas.
Propriedades Privadas: Melhor escolha para encapsulamento em classes modernas, desde que o ambiente suporte ES2022+.
 */