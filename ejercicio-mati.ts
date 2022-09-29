class auto {
    acelerador : number;
    freno : number;
    estaPrendido: boolean;
    constructor(acelerador: number, freno: number, estaPrendido: boolean) {
        this.acelerador = acelerador;
        this.freno = freno;
        this. estaPrendido = estaPrendido;
    }
    acelerar() : void {
        this.acelerador = this.acelerador + 1;
    }
    frenar() : void {
        this.freno  = this.freno - 1; 
    }
    apagarauto() {
        this.estaPrendido = false;
    }
    prenderauto() {
        this.estaPrendido = true;
    }
    getandando() {
        return "esta andando a  " + this.freno;
    }
    setauto(acelerar: number) {
        this.acelerador = acelerar;
    }
}
let auto1 = new auto( 10, 20,  true);
console.log(auto1.getandando())
auto1.setauto(20);
auto1.frenar();
auto1.apagarauto();
console.log(auto1);
