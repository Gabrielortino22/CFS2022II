var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    RegistroAutomotor.prototype.getAño = function () {
        return this.año;
    };
    RegistroAutomotor.prototype.estaAgregado = function () {
        if (this.año > 2000) {
            console.log("El auto esta anotado");
        }
        else {
            console.log("El auto es muy antiguo");
        }
    };
    return RegistroAutomotor;
}());
function crearAuto(Auto, arrayAutos) {
    //transformo el elemento de tipo string en un objeto de tipo Profesor
    var autoAnotado = RegistroAutomotor.split(','); //[Juan Perez, 333333333, Karen Simari, 22222222]
    var marca = RegistroAutomotor[0];
    var año = Number(RegistroAutomotor[1]);
    //inserto el elemento de tipo Profesor en el arreglo recibido
    arrayAutos.push();
}
var LectorDeArchivos = /** @class */ (function () {
    function LectorDeArchivos(txtFileLocation) {
        var archivoTxt = fs.readFileSync(txtFileLocation, 'utf-8');
        this.arregloString = archivoTxt.split(';'); //vamos a tener nuestro "objetos" separados por ;
    }
    LectorDeArchivos.prototype.mostrarArreglo = function () {
        console.log(this.arregloString);
    };
    LectorDeArchivos.prototype.getArregloString = function () {
        return this.arregloString;
    };
    return LectorDeArchivos;
}());
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
var Datos = new LectorDeArchivos('autos.txt');
var ArrayAutos = [];
//creo array de objetos
for (var i = 0; i < Datos.getArregloString().length; i++) {
    //Creo auto uno por uno leyendo el txt
    crearAuto(Datos.getArregloString()[i], ArrayAutos);
}
console.log(ArrayAutos);
