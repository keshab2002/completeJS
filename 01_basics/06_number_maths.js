// Number
const num = new Number(12);

// Number Prototypes

//to get fixed number of digits after decinal point
console.log(3.14159265359.toFixed(2)); //3.14

// to get fixed number of significant digits
console.log(3141592.65359.toPrecision(3)); //3.14e+6

// to convert number to string
console.log(typeof 3.14159265359.toString()) //string

// use comma in big numbers
console.log(100000000000.00.toLocaleString("en-In")) //1,00,00,00,00,000


// Number class static methods

console.log(Number.MAX_VALUE) //1.7976931348623157e+308
console.log(Number.MIN_VALUE) // 5e-324
console.log(Number.POSITIVE_INFINITY) //Infinity
console.log(Number.NEGATIVE_INFINITY) //-Infinity
console.log(Number.EPSILON) //2.220446049250313e-16
console.log(Number.NaN) //NaN




// Mahts

console.log(Math.round(5.5));  // 6
console.log(Math.floor(8.9999)); // 8
console.log(Math.ceil(18.0001)); // 19

console.log(Math.pow(5,3)); // 125

console.log(Math.abs(-89)) //89

// Math.random

// get real number between 0.0 and 1.0
console.log(Math.random()) //0.33271189281295244

// get integer between 0 and 9
console.log(Math.floor(Math.random()*10)) // 7

// get integer between 1 and 10
console.log(Math.floor(Math.random()*10) + 1 ) // 10

// get integer between min and max
const min = 80;
const max = 90;
console.log(Math.floor (Math.random() * (max - min + 1) ) + min) // 84

