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
var Alimentos = /** @class */ (function () {
    function Alimentos(nombre, calorias) {
        this.nombre = nombre;
        this.calorias = calorias;
    }
    Alimentos.prototype.imprimir = function () {
        console.log("nombre: ".concat(this.nombre));
        console.log("calorias: ".concat(this.calorias));
    };
    return Alimentos;
}());
var Bebidas = /** @class */ (function (_super) {
    __extends(Bebidas, _super);
    function Bebidas(nombre, calorias, tamaño) {
        var _this = _super.call(this, nombre, calorias) || this;
        _this.tamaño = tamaño;
        return _this;
    }
    Bebidas.prototype.imprimir = function () {
        _super.prototype.imprimir.call(this);
        console.log("contiene: ".concat(this.tamaño));
    };
    Bebidas.prototype.cantidadLitros = function () {
        if (this.tamaño === 1000)
            console.log("".concat(this.tamaño, " contiene 1 litro"));
        else
            console.log("".concat(this.tamaño, " no contiene un litro"));
    };
    return Bebidas;
}(Alimentos));
var alimentos1 = new Alimentos('pan', 300);
alimentos1.imprimir();
var bebidas1 = new Bebidas('coca', 500, 1000);
bebidas1.imprimir();
bebidas1.cantidadLitros();
