class Pessoa {
    constructor(nome='Desconhecido', sobrenome='Desconhecido', datanasc='0-0-0'){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.datanasc = new Date(datanasc).toDateString()
    }

    obterNomeCompleto() {
        return this.nome +' '+ this.sobrenome
    }
}

const pessoaA = new Pessoa('Wilson', 'Santos', '11-18-2004')
const pessoaB = new Pessoa()


console.log(pessoaB)
console.log(pessoaA.datanasc)