var auto = /** @class */ (function () {
    function auto(acelerador, freno, estaPrendido) {
        this.acelerador = acelerador;
        this.freno = freno;
        this.estaPrendido = estaPrendido;
    }
    auto.prototype.acelerar = function () {
        this.acelerador = this.acelerador + 1;
    };
    auto.prototype.frenar = function () {
        this.freno = this.freno - 1;
    };
    auto.prototype.apagarauto = function () {
        this.estaPrendido = false;
    };
    auto.prototype.prenderauto = function () {
        this.estaPrendido = true;
    };
    auto.prototype.getandando = function () {
        return "esta andando a  " + this.freno;
    };
    auto.prototype.setauto = function (acelerar) {
        this.acelerador = acelerar;
    };
    return auto;
}());
var auto1 = new auto(10, 20, true);
console.log(auto1.getandando());
auto1.setauto(20);
auto1.frenar();
auto1.apagarauto();
console.log(auto1);
