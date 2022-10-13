class Mascota {
    protected especie:string;
    protected edad:number;
    constructor(especie:string, edad:number) {
      this.especie = especie;
      this.edad = edad;
    }
   
    imprimir() {
      console.log(`especie: ${this.especie}`);
      console.log(`Edad: ${this.edad}`);
    }	
  }
   
  class Pajaro extends Mascota {
    private alas:number;
    constructor(nombre:string, edad:number, alas:number) {
      super(nombre, edad);
      this.alas = alas;
    }
   
    imprimir() {
      super.imprimir();
      console.log(`cantidad de alas: ${this.alas}`);  	
    }
   
    poderVolar() {
      if (this.alas===2)
        console.log(`${this.especie} puede volar`);
      else
        console.log(`${this.especie} no puede volar`);
    }
  }
   
  const mascota1=new Mascota('perro', 5);
  mascota1.imprimir();
   
  const pajaro1=new Pajaro('gorrion', 6, 2);
  pajaro1.imprimir();
  pajaro1.poderVolar();