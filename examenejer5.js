var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//ejercicio 5 herencia
var Autos = /** @class */ (function () {
    function Autos(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadActual = 0;
    }
    Autos.prototype.acelerar = function () {
        this.velocidadActual += 10;
    };
    return Autos;
}());
var AutoDeportivo = /** @class */ (function (_super) {
    __extends(AutoDeportivo, _super);
    function AutoDeportivo(marca, modelo) {
        return _super.call(this, marca, modelo) || this;
    }
    AutoDeportivo.prototype.acelerar = function () {
        this.velocidadActual += 50;
    };
    return AutoDeportivo;
}(Autos));
var primerAuto = new Autos('Ford', 'Fiesta');
var superAuto = new AutoDeportivo('Ford', 'sierra');
primerAuto.acelerar();
superAuto.acelerar();
console.log(primerAuto);
console.log(superAuto);
