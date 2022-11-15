class Auto1 {
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
    apagarautos() {
        this.estaPrendido = false;
    }
    prenderautos() {
        this.estaPrendido = true;
    }
    getandando() {
        return "esta andando a  " + this.freno;
    }
    setautos(acelerar: number) {
        this.acelerador = acelerar;
    }
}
let auto11 = new Auto1( 10, 20, true );
console.log(auto11.getandando())
auto11.setautos(20);
auto11.frenar();

console.log(auto11);
