/*
ECMAScript (ES) is the standard on which JavaScript is based.

JavaScript is an implementation of the ECMAScript specification.

The comment points you to the official ECMAScript documentation at:
👉 https://tc39.es/ecma262/
This is maintained by TC39, the committee that evolves the JavaScript language.
*/




"use strict" 
// This is a directive, not a statement. It tells the JavaScript engine to run the code in strict mode.

/*
✅ Why use "use strict"?
Strict mode enforces stricter parsing and error handling in JavaScript code. It helps catch common bugs and unsafe actions early.

⚠️ Without strict mode:
Silent errors may go unnoticed.

Variables can be accidentally created in the global scope.

Deleting undeletable properties doesn’t throw an error.

Assignments to read-only properties fail silently.
*/



// Datatypes:

// Premitive (call by value): string, number, boolean, null, undefined, bigint,symbol

// string : used in "" or ''
console.log(typeof "keshab"); 

// number: up to 2^53 - 1
console.log(typeof 113); 

// boolean
console.log(typeof false); 

// null is a special object (this is a known quirk in JS)
console.log(typeof null); 

// undefined: a variable declared but not assigned
console.log(typeof undefined); 
let notAssigned;
console.log(typeof notAssigned);

// symbol: a unique identifier
const sym = Symbol("id");
console.log(typeof sym); // symbol


// bigint: for integers beyond 2^53 - 1
const bigIntVal = 1234567890123456789012345678901234567890n;
console.log(typeof bigIntVal); // bigint



// Non-premitive (Call By Refernefe): object, array, function


// object: collection of key-value pairs
const obj = {
    name: "Keshab",
    age: 23
};
console.log(typeof obj); 


// array: a special kind of object
const arr = [1, 2, 3];
console.log(typeof arr); // object
console.log(Array.isArray(arr)); // true


// function: callable object
function greet() {
    return "Hello!";
}
console.log(typeof greet); // function





// example with NaN
const result = "abc" / 2;
console.log(result); // NaN
console.log(typeof result); // number (another JS quirk)