class Carro {
    constructor(modelo, chassi, qtddPortas) {
        this.modelo = modelo;
        this.chassi = chassi;
        this.qtddPortas = qtddPortas;
    }
    andar() {
        console.log('Caminhando...');
    }
}

class CarroSonix extends Carro {
    constructor(modelo, chassi, qtddPortas, aC, pneusCromados) {
        super(modelo, chassi, qtddPortas);
        this.aC = aC;
        this.pneusCromados = pneusCromados;
    }
}

const carro1 = new Carro('Jetour', '2353', 4);
carro1.andar()

const carroSoni = new CarroSonix('Sonix', '2453', 4, true, true);
carroSoni.andar();