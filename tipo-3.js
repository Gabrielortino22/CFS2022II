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
var Auto = /** @class */ (function () {
    function Auto(marca, motor) {
        this.marca = marca;
        this.motor = motor;
    }
    Auto.prototype.imprimir = function () {
        console.log("marca: ".concat(this.marca));
        console.log("motor: ".concat(this.motor));
    };
    return Auto;
}());
var Camion = /** @class */ (function (_super) {
    __extends(Camion, _super);
    function Camion(marca, motor, carga) {
        var _this = _super.call(this, marca, motor) || this;
        _this.carga = carga;
        return _this;
    }
    Camion.prototype.imprimir = function () {
        _super.prototype.imprimir.call(this);
        console.log("carga: ".concat(this.carga));
    };
    Camion.prototype.permisoCircular = function () {
        if (this.carga > 20000)
            console.log("".concat(this.carga, " no puede circular"));
        else
            console.log("".concat(this.carga, " puede circular"));
    };
    return Camion;
}(Auto));
var auto1 = new Auto('ford', 1800);
auto1.imprimir();
var camion1 = new Camion('fiat', 2000, 7000);
camion1.imprimir();
camion1.permisoCircular();
