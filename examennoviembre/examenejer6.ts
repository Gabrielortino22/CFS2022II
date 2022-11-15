// ejercicio 6 composicion
class Rueda {
   private cantidadRuedas:number;
   public constructor(cantidadRuedas:number){
    this.cantidadRuedas=cantidadRuedas;
   }
}
class Motor {
    private marcaMotor:string;
    public constructor(marcaMotor:string){
        this.marcaMotor=marcaMotor;
    }
}
class Automovil {
    private rueda:Rueda;
    private motor:Motor;
    public constructor(rueda:Rueda,motor:Motor){
        this.rueda=rueda;
        this.motor=motor;
    }
}
let rueda : Rueda = new Rueda(4);

let motor : Motor = new Motor("bwm");

let auto10 : Automovil = new Automovil(rueda,motor);


