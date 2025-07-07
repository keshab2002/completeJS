/*
Comaring variables with same datatype creates no confusin
But whe cmparing two differnet datatypes, may give unexpected results
*/

console.log(null >= 0); //true
console.log(null == 0); //false

/*
In JS, equality operator and other comparison operators acts differently
>, <, >=, <=, != converts null to 0
Hence null >= 0 returns ture
But euqlity operaotr returns false as null and 0 are not same
*/

// other confusing comparosons:
console.log(null == null); // true
console.log(undefined == null); // true
console.log(undefined == 0); // false



// equality check vs strict equality check

console.log("2" === 2); // false, does not convert datatypes inplicitly: differnt datatypes means not equal

console.log("2" == 2); // ture

