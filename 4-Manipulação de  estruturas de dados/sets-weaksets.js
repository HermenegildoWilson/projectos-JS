// JS não tem uma estrutura interna que funciona como set, ou seja uma estrutura que armazena dadso sem repetição, mas podemos usar alguns mecanismos para criar uma etrutura personalisada.

class set {
    #dados;
    constructor() {
        this.#dados = [];
    }

    add(numero) {
        if (this.#dados.indexOf(numero) == -1) {
            this.#dados.push(numero);
        }
    }

    show() {
        return this.#dados;
    }
}

let x = new set();


x.add(1);
x.add(2);
console.log(x.show())
