class Alimentos{
    protected nombre:string;
    protected calorias:number;
    constructor(nombre:string, calorias:number) {
      this.nombre = nombre;
      this.calorias = calorias;
    }
   
    imprimir() {
      console.log(`nombre: ${this.nombre}`);
      console.log(`calorias: ${this.calorias}`);
    }	
  }
   
  class Bebidas extends Alimentos {
    private tamaño:number;
    constructor(nombre:string, calorias:number, tamaño:number) {
      super(nombre, calorias);
      this.tamaño = tamaño;
    }
   
    imprimir() {
      super.imprimir();
      console.log(`contiene: ${this.tamaño}`);  	
    }
   
    cantidadLitros() {
      if (this.tamaño===1000)
        console.log(`${this.tamaño} contiene 1 litro`);
      else
        console.log(`${this.tamaño} no contiene un litro`);
    }
  }
   
  const  alimentos1=new Alimentos('pan', 300);
  alimentos1.imprimir();
   
  const bebidas1=new Bebidas('coca', 500, 1000);
  bebidas1.imprimir();
  bebidas1.cantidadLitros();