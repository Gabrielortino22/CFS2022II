//ejercicio 1 y 2

class Auto{
    private acelerador: number;
    private  freno:number;
    private color:string;
    public constructor(acelerador:number ,freno: number , color:string) {
      this.acelerador = acelerador;
      this.freno = freno;
      this.color = color;
    }
  
    acelerar() : void {
        this.acelerador = this.acelerador + 1;
    }
    frenar() : void {
        this.freno  = this.freno - 1; 
    }
}
    let auto1 = new Auto( 10, 20, "verde"); 
    console.log(auto1);
