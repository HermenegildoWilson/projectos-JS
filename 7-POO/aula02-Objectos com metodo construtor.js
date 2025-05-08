function pessoa(nome, sobrenome, datanasc){
    this.nome = nome
    this.sobrenome = sobrenome
    let data = new Date(datanasc).toDateString().replaceAll(' ', ' - ')
    this.datanasc = data

    this.amigos = []

    this.obterNomeCompleto = () => {
        return this.nome + ' ' + this.sobrenome
    }

    this.adicionarAmigo = (amigo) => {
        if (!(this.amigos.includes(amigo)) && amigo != this) {
            this.amigos.push(amigo)
            amigo.amigos.push(this)
        }
    }

    this.verAmigos = () => {
        let listaDeAmigos = [`Lista de amigos do ${this.obterNomeCompleto()}: `]
        
        this.amigos.forEach(amigo => listaDeAmigos.push(' '+amigo.obterNomeCompleto()))
        
        return listaDeAmigos.toString().replace(',', '')
    }
}

pessoa.prototype.casado = Boolean

const pessoaA = new pessoa('Hermenegildo', 'Panzo', '11-18-2004')
const pessoaB = new pessoa('Wilson', 'Santos', '8-26-1978')
const pessoaC = new pessoa('Mboma', 'Araujo', '8-26-1978')

pessoaA.adicionarAmigo(pessoaB)
pessoaA.adicionarAmigo(pessoaC)

console.log(pessoaA.verAmigos())
console.log(pessoaB.verAmigos())
console.log(pessoaC.verAmigos())