//ejercicio 1 y 2
var Auto = /** @class */ (function () {
    function Auto(acelerador, freno, color) {
        this.acelerador = acelerador;
        this.freno = freno;
        this.color = color;
    }
    Auto.prototype.acelerar = function () {
        this.acelerador = this.acelerador + 1;
    };
    Auto.prototype.frenar = function () {
        this.freno = this.freno - 1;
    };
    return Auto;
}());
var auto1 = new Auto(10, 20, "verde");
console.log(auto1);
