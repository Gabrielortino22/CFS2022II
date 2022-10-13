class Auto {
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
   
  class Camion extends Auto {
    private carga:number;
    constructor(marca:string, motor:number, carga:number) {
      super(marca, motor);
      this.carga = carga;
    }
   
    imprimir() {
      super.imprimir();
      console.log(`carga: ${this.carga}`);  	
    }
   
    permisoCircular() {
      if (this.carga>20000)
        console.log(`${this.carga} no puede circular`);
      else
        console.log(`${this.carga} puede circular`);
    }
  }
   
  const auto1=new Auto('ford', 1800);
  auto1.imprimir();
   
  const camion1=new Camion('fiat', 2000, 7000);
  camion1.imprimir();
  camion1.permisoCircular();