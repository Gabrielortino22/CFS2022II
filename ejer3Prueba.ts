class Vehiculo {
    protected marca:string;
    protected motor:number;
    constructor(marca:string, motor:number) {
      this.marca = marca;
      this.motor = motor;
    }
   
    imprimir() {
      console.log(`marca: ${this.marca}`);
      console.log(`motor: ${this.motor}`);
    }	
  }
   
  class Moto extends Vehiculo {
    private ruedas:number;
    constructor(marca:string, motor:number, ruedas:number) {
      super(marca, motor);
      this.ruedas = ruedas;
    }
   
    imprimir() {
      super.imprimir();
      console.log(`ruedas: ${this.ruedas}`);  	
    }
   
    permisoCircular() {
      if (this.ruedas===2)
        console.log(`tiene ${this.ruedas} ruedas es una moto`);
      else
        console.log(`tiene ${this.ruedas} ruedas no es una moto`);
    }
  }
   
  const vehiculo1=new Vehiculo('ford', 1800);
  vehiculo1.imprimir();
   
  const moto1=new Moto('honda', 2000, 2);
  moto1.imprimir();
  moto1.permisoCircular();