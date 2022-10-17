var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.makeSound = function () {
        console.log('wuff wuff\n');
    };
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat(name) {
        this.name = name;
    }
    Cat.prototype.makeSound = function () {
        console.log('meow meow\n');
    };
    return Cat;
}());
var minino = new Cat('Pocky');
minino.makeSound(); // -> meow meow
var firulais = new Dog('Pocky');
firulais.makeSound(); // -> wuff wuff
