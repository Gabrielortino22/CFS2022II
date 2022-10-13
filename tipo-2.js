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
var Mascota = /** @class */ (function () {
    function Mascota(especie, edad) {
        this.especie = especie;
        this.edad = edad;
    }
    Mascota.prototype.imprimir = function () {
        console.log("especie: ".concat(this.especie));
        console.log("Edad: ".concat(this.edad));
    };
    return Mascota;
}());
var Pajaro = /** @class */ (function (_super) {
    __extends(Pajaro, _super);
    function Pajaro(nombre, edad, alas) {
        var _this = _super.call(this, nombre, edad) || this;
        _this.alas = alas;
        return _this;
    }
    Pajaro.prototype.imprimir = function () {
        _super.prototype.imprimir.call(this);
        console.log("cantidad de alas: ".concat(this.alas));
    };
    Pajaro.prototype.poderVolar = function () {
        if (this.alas === 2)
            console.log("".concat(this.especie, " puede volar"));
        else
            console.log("".concat(this.especie, " no puede volar"));
    };
    return Pajaro;
}(Mascota));
var mascota1 = new Mascota('perro', 5);
mascota1.imprimir();
var pajaro1 = new Pajaro('gorrion', 6, 2);
pajaro1.imprimir();
pajaro1.poderVolar();
