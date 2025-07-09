class Animal{
    constructor(name){
        this.name = name;
    };
    eat(){
        return `${this.name} eats!`;
    };
    getDetails(){
        return `Animal name is: ${this.name}`;
    }
}

class Dog extends Animal{
    constructor(name, breed){
        super(name);
        this.breed = breed;
    }
    bark(){
        return `${this.name} barks!`;
    }
    getDetails(){
        return `Dog name is: ${this.name} and its breed is: ${this.breed}`;
    }
}

const dog1 = new Dog('Dogesh', 'Golden Retriver');

console.log(dog1.getDetails());
console.log(dog1.eat());
console.log(dog1.bark());

/*
Dog name is: Dogesh and its breed is: Golden Retriver
Dogesh eats!
Dogesh barks!
*/



// function Animal(name){
//     this.name = name;
// };

// Animal.prototype.eat = function(){
//         return `${this.name} eats!`;
// };

// Animal.prototype.getDetails = function(){
//         return `Animal name is: ${this.name}`;
// }

// function Dog(name, breed){
//     Animal.call(this, name),
//     this.breed = breed;
// }

// // Inherit methods (prototype chain)
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// Dog.prototype.bark = function(){
//         return `${this.name} barks!`;
// }

// Dog.prototype.getDetails = function(){
//     return `Dog name is: ${this.name} and its breed is: ${this.breed}`;
// }


// const dog1 = new Dog('Dogesh', 'Golden Retriver');

// console.log(dog1.getDetails());
// console.log(dog1.eat());
// console.log(dog1.bark());
