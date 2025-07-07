// How to declare a string
const name = new String("Keshab");
const repoCount = "20";
console.log(`${name} has ${repoCount} repo in github!`);

// String Methods

// Length of a string
console.log("Keshab".length); //6

// Get character in specified index
console.log("Keshab".at(2)); //s

// Get character in specified index
console.log("Keshab".charAt(2)); //s

// Get unicode value of character in specified index
console.log("Keshab".charCodeAt(2)); //115(s)

// Concatinate n number of strings
console.log("Keshab".concat(" is", " very", " good"," boy"," !")); //6

// Check if a string stearts with a sepcified substring
console.log("Who are you".startsWith("Who")); //true

// Check if a string ends with a sepcified substring
console.log("Who are you".endsWith("you")); //true

// Checks if a substring is in main string (case sencetive match)
console.log("Keshab is og!".includes("is")); //true

// returns first occurance index of a substring in string
console.log("--A---A---A".indexOf("A-")); //2

// returns last occurance index of a substring in string
console.log("--A---A---A".lastIndexOf("A-")); //6

// check a string against regex
console.log("Keshab Dey".match(/[A-Z]/g));  //[ 'K', 'D' ]

// returns unicode normalization
console.log("\u0041\u006d\u00e9\u006c\u0069\u0065".normalize()) //Amélie

// Pad with specified string at the end of the main string
console.log("Keshab Dey".padEnd(15, "-+-")); //Keshab Dey-+--+

// Pad with specified string at the starting of the main string
console.log("Keshab Dey".padStart(15, "-+-")); //-+--+Keshab Dey

// repeat a string n number of times and returns the new joined repeated string
console.log(`I feel ${"Happy! ".repeat(4)}`); //I feel Happy! Happy! Happy! Happy!

// replace only first orrcureance of a substring in a given string
console.log("...AB....AB....AB".replace("AB", "XY")) //...XY....AB....AB

// replace only all orrcureance of a substring in a given string
console.log("...AB....AB....AB".replaceAll("AB", "XY")) //...XY....XY....XY

// return first occurance of a ragex in a string
console.log("I think Ruth's dog is cuter than your dog!".search(/[^\w\s']/g)); //41

// extarct a section/slice of a string
console.log("Keshab Dey".slice(7,));

// slpit based on a substring and reuturn array of string
console.log("America Asia Africa Europe".split(" ")) //[ 'America', 'Asia', 'Africa', 'Europe' ]

// to lower case
console.log("KESHAB".toLowerCase()); //keshab

// to upper case
console.log("Keshab".toUpperCase()); //KESHAB

// trom white spaces from start and end
console.log("  Keshab  ".trim()); //Keshab

// trom white spaces from start 
console.log("  Keshab  ".trimStart()); //Keshab   

// trom white spaces from end 
console.log("  Keshab  ".trimEnd()); //  Keshab






