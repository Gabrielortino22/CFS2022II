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
var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca, motor) {
        this.marca = marca;
        this.motor = motor;
    }
    Vehiculo.prototype.imprimir = function () {
        console.log("marca: ".concat(this.marca));
        console.log("motor: ".concat(this.motor));
    };
    return Vehiculo;
}());
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(marca, motor, ruedas) {
        var _this = _super.call(this, marca, motor) || this;
        _this.ruedas = ruedas;
        return _this;
    }
    Moto.prototype.imprimir = function () {
        _super.prototype.imprimir.call(this);
        console.log("ruedas: ".concat(this.ruedas));
    };
    Moto.prototype.permisoCircular = function () {
        if (this.ruedas === 2)
            console.log("tiene ".concat(this.ruedas, " ruedas es una moto"));
        else
            console.log("tiene ".concat(this.ruedas, " ruedas no es una moto"));
    };
    return Moto;
}(Vehiculo));
var vehiculo1 = new Vehiculo('ford', 1800);
vehiculo1.imprimir();
var moto1 = new Moto('honda', 2000, 2);
moto1.imprimir();
moto1.permisoCircular();
