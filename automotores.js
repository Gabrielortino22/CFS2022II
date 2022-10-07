"use strict";
exports.__esModule = true;
var fs = require("fs");
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
var LectorDeArchivos = /** @class */ (function () {
    function LectorDeArchivos(txtFileLocation) {
        var archivoTxt = fs.readFileSync(txtFileLocation, 'utf-8');
        this.arregloString = archivoTxt.split(';');
    }
    LectorDeArchivos.prototype.mostrarArreglo = function () {
        console.log(this.arregloString);
    };
    LectorDeArchivos.prototype.getArregloString = function () {
        return this.arregloString;
    };
    return LectorDeArchivos;
}());
//funcion para crear un nuevo auto
function crearauto(auto, arrayAuto) {
    //transformo el elemento de tipo string en un objeto de tipo automotor
    var propiedadAuto = auto.split(',');
    var marca = propiedadAuto[0];
    var modelo = propiedadAuto[1];
    var año = Number(propiedadAuto[2]);
    var nuevoAuto = new RegistroAutomotor(marca, modelo, año);
    //inserto el elemento de tipo auto en el arreglo recibido
    arrayAuto.push(nuevoAuto);
}
function borrarAuto(arregloAuto, position) {
    //editar un auto en el arreglo
    //let marca: string = (readlineSync.question("Ingrese marca: "));
    // let modelo: string = (readlineSync.question("Ingrese modelo: "));
    //let año: number = Number(readlineSync.question("ingrese año"));
    // let nuevoProfe: RegistroAutomotor = new RegistroAutomotor(marca,modelo,año);
    delete arregloAuto[position];
    //  arregloAuto[position] = nuevoAuto ;
}
//Inicio programa
var dato = new LectorDeArchivos('autos.txt');
var arrayAuto = [];
var datos = new RegistroAutomotor("fiat", "duna", 1999);
datos.estaAgregado();
console.log(datos.getAño());
console.log(datos);
//creo array de objetos
for (var i = 0; i < dato.getArregloString().length; i++) {
    crearauto(dato.getArregloString()[i], arrayAuto);
}
console.log(arrayAuto);
