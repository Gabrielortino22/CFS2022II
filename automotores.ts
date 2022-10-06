import * as fs from 'fs';
class RegistroAutomotor {
    private marca: string ;
    private modelo: string; 
    private año: number;

    public constructor(marca: string, modelo: string, año: number){
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    public getAño(){
        return this.año;
    }

    public estaAgregado(){
        if(this.año > 2000){
            console.log("El auto esta anotado")
        } else {
            console.log("El auto es muy antiguo")
        }
    }
}
class LectorDeArchivos {

    private arregloString: string[];

    constructor(txtFileLocation: string) {

        let archivoTxt: string = fs.readFileSync(txtFileLocation, 'utf-8');
        this.arregloString = archivoTxt.split(';');  
       
    }


    public mostrarArreglo(): void {
        console.log(this.arregloString);
    }

    public getArregloString(): string[] {
        return this.arregloString;
    }

}

//funcion para crear un nuevo auto

function crearauto(auto: string, arrayAuto: Array<RegistroAutomotor>): void {

    //transformo el elemento de tipo string en un objeto de tipo automotor
    let propiedadAuto = auto.split(','); 
    let marca: string = propiedadAuto[0];
    let modelo: string = propiedadAuto[1];
    let año: number = Number(propiedadAuto[2]);

    let nuevoAuto : RegistroAutomotor = new RegistroAutomotor(marca,modelo,año);

    //inserto el elemento de tipo auto en el arreglo recibido
    arrayAuto.push(nuevoAuto);
}
function borrarAuto(arregloAuto: Array<RegistroAutomotor>,  position: number ): void {
    //editar un auto en el arreglo
     //let marca: string = (readlineSync.question("Ingrese marca: "));
    // let modelo: string = (readlineSync.question("Ingrese modelo: "));
     //let año: number = Number(readlineSync.question("ingrese año"));
   
    // let nuevoProfe: RegistroAutomotor = new RegistroAutomotor(marca,modelo,año);

    delete arregloAuto[position];

   //  arregloAuto[position] = nuevoAuto ;
 
}


//Inicio programa
let dato: LectorDeArchivos = new LectorDeArchivos('autos.txt');
let arrayAuto: Array<RegistroAutomotor> = [];
let datos = new RegistroAutomotor("fiat","duna",1999);

datos.estaAgregado();
console.log(datos.getAño());
console.log(datos);
//creo array de objetos

for (let i: number = 0; i < dato.getArregloString().length; i++) {

    
    
    crearauto(dato.getArregloString()[i], arrayAuto );

}

console.log(arrayAuto);