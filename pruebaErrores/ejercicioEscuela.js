"use strict";
exports.__esModule = true;
var fs = require("fs");
//   import * as readFileSync from 'readline-sync'
var Alumno = /** @class */ (function () {
    function Alumno(nombre, nota, DNI) {
        this.nombre = nombre;
        this.nota = nota;
        this.DNI = DNI;
    }
    Alumno.prototype.getNota = function () {
        return this.nota;
    };
    // ejercicio de prueba de errores
    Alumno.prototype.estaAprobado = function () {
        if (this.nota < 0) {
            throw new Error("la nota no puede ser menor a 0");
        }
        else if (this.nota < 7) {
            console.log("El alumno esta desaprobado");
        }
        else if (this.nota > 7 && this.nota <= 10) {
            console.log("El alumno esta aprobado");
        }
        else if (this.nota > 10) {
            throw new Error(" la nota deve estar entre 0 y 10");
        }
    };
    return Alumno;
}());
var Profesor = /** @class */ (function () {
    function Profesor(nombre, DNI, listaAlumnos) {
        this.nombre = nombre;
        this.DNI = DNI;
        this.listaAlumnos = listaAlumnos;
    }
    Profesor.prototype.getListaAlumnos = function () {
        return this.listaAlumnos;
    };
    Profesor.prototype.mostrarAlumnos = function () {
        console.log(this.listaAlumnos);
    };
    Profesor.prototype.setListaAlumnos = function (arreglo) {
        this.listaAlumnos = arreglo;
    };
    return Profesor;
}());
var Escuela = /** @class */ (function () {
    function Escuela(nombre, direccion, listaAlumnos, listaProfes) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.listaAlumnos = listaAlumnos;
        this.listaProfes = listaProfes;
    }
    Escuela.prototype.getListaAlumnos = function () {
        return this.listaAlumnos;
    };
    Escuela.prototype.getListaProfes = function () {
        return this.listaProfes;
    };
    return Escuela;
}());
//instalar npm install @types/node
// creamos un gestor que nos permite leer un archivo de texto
var GestorDeArchivos = /** @class */ (function () {
    function GestorDeArchivos(txtFileLocation) {
        var archivoTxt = fs.readFileSync(txtFileLocation, 'utf-8'); //esta variable guarda "Juan Perez,333333333;Karen Simari,2222222"
        this.arregloString = archivoTxt.split(';'); //vamos a tener nuestro "objetos" separados por ;
        //["Juan Perez,333333333","Karen Simari,22222222"]
    }
    GestorDeArchivos.prototype.mostrarArreglo = function () {
        console.log(this.arregloString);
    };
    GestorDeArchivos.prototype.getArregloString = function () {
        return this.arregloString;
    };
    return GestorDeArchivos;
}());
//funcion para crear un nuevo profe
function crearProfesor(profesor, arrayProfesor, arrayAlumnos) {
    //transformo el elemento de tipo string en un objeto de tipo Profesor
    var propiedadProfe = profesor.split(','); //la variable profesor va a contener --->"Juan Perez,333333333" y profesor.split(',') = ["Juan Perez", "333333333"]
    var nombre = propiedadProfe[0];
    var DNI = Number(propiedadProfe[1]);
    var listaAlumnos = arrayAlumnos;
    var nuevoProfe = new Profesor(nombre, DNI, listaAlumnos);
    //inserto el elemento de tipo Profesor en el arreglo recibido
    arrayProfesor.push(nuevoProfe);
}
//Eliminar profesor en una posicion y agregar uno nuevo
//instalamos readline-sync -- npm install readline-sync
function borrarrProfe(arregloProfe, position, arregloAlumnos) {
    //editar un profesor en el arreglo
    // let nombre: string = readlineSync.question("Ingrese el nombre: ")
    // let DNI: number = Number(readlineSync.question("Ingrese el DNI: "));
    // let listaAlumnos: Array<Alumno> = arregloAlumnos;
    // let nuevoProfe: Profesor = new Profesor(nombre,DNI,listaAlumnos);
    delete arregloProfe[position];
    // arregloProfe[position] = nuevoProfe;
}
//Inicio programa
var datos = new GestorDeArchivos('profes.txt'); // devuelve un arreglo de strings con "elementos" de profesores.
var arrayProfe = [];
var alumno1 = new Alumno('Gloria Dominguez', -8, 252546346);
var alumno2 = new Alumno('Juan Dominguez', 5, 25254255);
var arrayAlumnos = [alumno1, alumno2];
//creo array de objetos
for (var i = 0; i < datos.getArregloString().length; i++) {
    //Creo Profe uno por uno leyendo el txt
    crearProfesor(datos.getArregloString()[i], arrayProfe, arrayAlumnos);
}
console.log(arrayProfe);
arrayProfe[1].mostrarAlumnos();
console.log(arrayProfe);
try {
    alumno1.estaAprobado();
    alumno2.estaAprobado();
}
catch (err) {
    console.log(err.message);
}
