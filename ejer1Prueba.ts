class Dog {
    public name: string;
    constructor(name: string) {
      this.name = name;
    }
    public makeSound(): void {
      console.log ('wuff wuff\n');
    }
   }
   class Cat {
    public name: string;
    constructor(name: string) {
      this.name = name;
    }
     public makeSound(): void {
      console.log('meow meow\n');
    }
   }
   let minino: Cat = new Cat('Pocky');
   minino.makeSound(); // -> meow meow
   let firulais: Dog = new Dog('Pocky');
   firulais.makeSound(); // -> wuff wuff
   