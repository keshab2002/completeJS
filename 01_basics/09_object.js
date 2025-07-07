// Singleton Objects: Instantiated usind Onject class constructor
const singletonObj = new Object();


// Object Literals:

let obj = {
    "full name": "Keshab Dey",
    age: 22,
    email: "keshab@gmail.com",
    isLoggedIn : true
};

console.log(obj["full name"]); //Keshab Dey
console.log(obj.email); //keshab@gmail.com

// Using a symbol as a key in an object
const mySymbol = Symbol("key");

obj = {
    [mySymbol]: "value",
};

console.log(obj[mySymbol]);  //value


// Overriding Object Values:

obj = {
    key1: 56,
}
obj.key1 = 69;
console.log(obj); //{ key1: 69 }

// Freezing an object: you can not override any values
Object.freeze(obj);
obj.key1 = "Changed Value";
console.log(obj); //{ key1: 69 }



// Functions in object
obj = {
    name: "Keshab",
    age: 22,
    email : "keshab@gmail.com",
    greetings: function(){
        console.log(`Hello ${this.name}`);
    }
}; 
obj.greetings();    // Hello Keshab


// nested Objects
const user = {
    personaDetails: {
        fullName: {
            firstName: "Keshab",
            lastname: "Dey",
        }
    }
}

console.log(`Full name of user: ${user.personaDetails.fullName.firstName} ${user.personaDetails.fullName.lastname}`); // Full name of user: Keshab Dey



// Marge mulriple objects:

const obj1 = {
    key1: "value1",
}
const obj2 = {
    key2: "value2",
}
const obj3 = {
    key3: "value3",
}

obj = Object.assign({}, obj1, obj2, obj3);
console.log(obj);   // { key1: 'value1', key2: 'value2', key3: 'value3' }

obj = {...obj1, obj2, obj3};
console.log(obj);   // { key1: 'value1', key2: 'value2', key3: 'value3' }



// Object Static Methods:
obj = {
    "full name": "Keshab Dey",
    age: 22,
    email: "keshab@gmail.com",
    isLoggedIn : true
};

console.log(obj.hasOwnProperty('isLoggedIn'))   // true
console.log(Object.keys(obj)); //   [ 'full name', 'age', 'email', 'isLoggedIn' ]
console.log(Object.values(obj)); // [ 'Keshab Dey', 22, 'keshab@gmail.com', true ]
console.log(Object.entries(obj)); 
/*[
  [ 'full name', 'Keshab Dey' ],
  [ 'age', 22 ],
  [ 'email', 'keshab@gmail.com' ],
  [ 'isLoggedIn', true ]
]*/




