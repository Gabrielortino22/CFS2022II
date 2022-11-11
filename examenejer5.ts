class Autos {
    private marca: string;
    private modelo: string;
    protected velocidadActual: number;
    public constructor(marca: string, modelo: string) {
    this.marca = marca;
    this.modelo = modelo;
    this.velocidadActual = 0;
    }
    public acelerar(): void {
    this.velocidadActual += 10;
    }
    }
    
    class AutoDeportivo extends Autos {
    public constructor(marca: string, modelo: string) {
    super(marca, modelo);
    }
    public acelerar(): void {
    this.velocidadActual += 50;
    }
    }
    
    let primerAuto: Autos = new Autos('Ford', 'Fiesta');
    let superAuto: Autos = new AutoDeportivo('Ford', 'sierra');
    primerAuto.acelerar();
    superAuto.acelerar();
    console.log(primerAuto);
    console.log(superAuto);