// ejercicio 6 composicion
var Rueda = /** @class */ (function () {
    function Rueda(cantidadRuedas) {
        this.cantidadRuedas = cantidadRuedas;
    }
    return Rueda;
}());
var Motor = /** @class */ (function () {
    function Motor(marcaMotor) {
        this.marcaMotor = marcaMotor;
    }
    return Motor;
}());
var Automovil = /** @class */ (function () {
    function Automovil(rueda, motor) {
        this.rueda = rueda;
        this.motor = motor;
    }
    return Automovil;
}());
var rueda = new Rueda(4);
var motor = new Motor("bwm");
var auto10 = new Automovil(rueda, motor);
