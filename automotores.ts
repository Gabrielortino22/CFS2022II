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

function crearAuto(Auto: string, arrayAutos: Array<RegistroAutomotor>): void {
    //transformo el elemento de tipo string en un objeto de tipo Profesor
    let autoAnotado = RegistroAutomotor.split (','); //[Juan Perez, 333333333, Karen Simari, 22222222]
    let marca: string = RegistroAutomotor[0];
    let año: number = Number(RegistroAutomotor[1]);
  
    //inserto el elemento de tipo Profesor en el arreglo recibido
    arrayAutos.push();
}

class LectorDeArchivos {
    private arregloString: string[];
    constructor(txtFileLocation: string) {
        let archivoTxt: string = fs.readFileSync(txtFileLocation, 'utf-8');
        this.arregloString = archivoTxt.split(';');  //vamos a tener nuestro "objetos" separados por ;
    }
    public mostrarArreglo(): void {
        console.log(this.arregloString);
    }
    public getArregloString(): string[] {
        return this.arregloString;
    }
}


//Eliminar profesor en una posicion y agregar uno nuevo
//instalamos readline-sync -- npm install readline-sync
//function borrarAuto(RegistroAutomotor: Array<registroAutomotor>,  position: number  {
    //editar un profesor en el arreglo
    // let nombre: string = readlineSync.question("Ingrese el nombre: ")
    // let DNI: number = Number(readlineSync.question("Ingrese el DNI: "));
    // let listaAlumnos: Array<Alumno> = arregloAlumnos;
   
    // let nuevoProfe: Profesor = new Profesor(nombre,DNI,listaAlumnos);
   // delete arregloAuto[position];
    // arregloProfe[position] = nuevoProfe;
 
//}
//Inicio programa
let Datos: LectorDeArchivos = new LectorDeArchivos('autos.txt');
let ArrayAutos: Array<RegistroAutomotor> = [];



//creo array de objetos
for (let i: number = 0; i < Datos.getArregloString().length; i++) {
    //Creo auto uno por uno leyendo el txt
    
    crearAuto(Datos.getArregloString()[i], ArrayAutos);
}
console.log(ArrayAutos);

