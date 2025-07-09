## Constructor in JavaScript

A **constructor** in JavaScript is a special function used to create and initialize objects. It acts as a blueprint for creating multiple instances of an object with the same properties and methods. When used with the `new` keyword, it allocates memory for the object and sets up inheritance.

#### Constructor Function Example:

```javascript
function Car(model, year) {
    this.model = model;
    this.year = year;
    this.displayInfo = function() {
        console.log(`${this.model} was made in ${this.year}`);
    };
}

let car1 = new Car('Toyota', 2020);
car1.displayInfo(); // Toyota was made in 2020
```

#### Constructor in ES6 Class:

```javascript
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    displayInfo() {
        console.log(`${this.model} was made in ${this.year}`);
    }
}

let car2 = new Car('Honda', 2022);
car2.displayInfo(); // Honda was made in 2022
```

The constructor method in a class is automatically called when a new instance of the class is created. It performs similar initialization tasks as constructor functions but with cleaner and more modern syntax.

---