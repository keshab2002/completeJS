// Out Ancestor's coding style

const Animal = {
    name: 'Animal',
    eat: function(){
        return `${this.name} eats!`
    }
}

const Dog = {
    name: 'Dogesh',
    bark: function(){
        return `${this.name} barks!`;
    },
    __proto__ : Animal
}

console.log(Dog.eat());
console.log(Dog.bark());



// modern Coding Style

const Employee = {
    name: 'Rakesh',
    getDetails: function(){
        return `My name is: ${this.name}`;
    }
};

const Manager = {
    name: 'Monjulika',
    getDuties: function(){
        return `I maange ${this.name}!`;
    }
};

Object.setPrototypeOf(Manager, Employee);

console.log(Manager.getDetails());
console.log(Manager.getDuties());


