// Declare an array

let arr = ["Bob", "Alice", 56, true, [], {}];
arr = new Array("Bob", "Alice", 56, true, [], {});
console.log(arr); //[ 'Bob', 'Alice', 56, true, [], {} ]

arr = Array.from(arr, (x) => {return typeof(x) == "number" ? x: false});
console.log(arr); //[ false, false, 56, false, false, false ]

let socre1 = 0;
let socre2 = 100;
let socre3 = 50;
let score = Array.of(socre1, socre2, socre3)
console.log(score);  // [ 0, 100, 50 ]
console.log(Array.isArray(score));  // true

// Array Mehtods:

// Get the element at specified index
arr = new Array("Bob", "Alice", 56, true, [], {});
console.log(arr[1]); // Alice
console.log(arr.at(1));  // Alice

// Concat n number of array (returns a new array)
let = arr1 = [1,2,3];
let = arr2 = [true, false];
let = arr3 = ["Bob", "Alice"];
console.log(arr1.concat(arr2, arr3)); // [ 1, 2, 3, true, false, 'Bob', 'Alice' ]


// Add elemet at the end (shallow copy)
arr = [4,5,6,7];
arr.push(8);
console.log(arr); //[ 4, 5, 6, 7, 8 ]

// Delete elemet from tha last index
arr = [4,5,6,7];
console.log(arr.pop()); //7
console.log(arr); // [ 4, 5, 6 ]

// Append element at first:
arr = [1,2,3,4,5];
arr.unshift(0)
console.log(arr); //[ 0, 1, 2, 3, 4, 5 ]

// Delete element at first:
arr = [0,1,2,3,4,5];
arr.shift(0)
console.log(arr); //[ 1, 2, 3, 4, 5 ]

// Converts to string
arr = ["Bob", "Alice", 56, true, [], {}];
console.log(arr.toString()); //Bob,Alice,56,true,,[object Object]

// returns a shallow copy of a portion of an array into a new array 
arr = ["Bob", "Alice", 56, true, 89];
subarr = arr.slice(1,4);
console.log("Original Array: "+arr); // [Bob,Alice,56,true,89]
console.log("Sliced Array: "+subarr); //[ Alice,56,true ]

// changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
arr = ["Bob", "Alice", 56, true, 89];
subarr = arr.splice(1,2);
console.log("Original Array: "+arr); // [Bob,true,89] : starting from index 1, two elemets are spliced
console.log("Sliced Array: "+subarr); //[Alice,56]
// Value can be inserted using splice:
arr = ['jan','apr', 'may', 'jun', 'jul', 'aug'];
arr.splice(1, 0, 'feb', 'mar');
console.log(arr);


// joins all elemts of an array into a string joined using specified delimeter
arr = ['jan','apr', 'may', 'jun', 'jul', 'aug'];
console.log( arr.join(" - ") ); //jan - apr - may - jun - jul - aug

// spread array
marvel = ['ironman', 'thor'];
dc = ['batman', 'flash'];
all_hero = [...marvel, ...dc];
console.log(all_hero); //[ 'ironman', 'thor', 'batman', 'flash' ]


// flatten array
arr = [1, [2, 3, [ 4, 5, [6]], 7], 8, 9]
flattenArray = arr.flat(Infinity);
console.log(flattenArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

