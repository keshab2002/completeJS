// filter: apply any function (that return true/ false) on each array elements and returns new array
let nums = [1, 2, ,3 ,4 ,5 ,6 ,7 ,8 ,9, 10];
let newNums = nums.filter( (num) => num % 2 == 0 );
console.log(newNums);   // [ 2, 4, 6, 8, 10 ]



// Book Array
const books = [
    {
        "name": "1984",
        "authorname": "George Orwell",
        "publich": 1949,
        "edition": 2004,
        "genre": "Dystopian Fiction"
    },
    {
        "name": "To Kill a Mockingbird",
        "authorname": "Harper Lee",
        "publich": 1960,
        "edition": 2006,
        "genre": "Southern Gothic"
    },
    {
        "name": "Pride and Prejudice",
        "authorname": "Jane Austen",
        "publich": 1813,
        "edition": 2007,
        "genre": "Romance"
    },
    {
        "name": "The Great Gatsby",
        "authorname": "F. Scott Fitzgerald",
        "publich": 1925,
        "edition": 2004,
        "genre": "Tragedy"
    },
    {
        "name": "One Hundred Years of Solitude",
        "authorname": "Gabriel García Márquez",
        "publich": 1967,
        "edition": 2003,
        "genre": "Magical Realism"
    },
    {
        "name": "Moby Dick",
        "authorname": "Herman Melville",
        "publich": 1851,
        "edition": 2005,
        "genre": "Adventure Fiction"
    },
    {
        "name": "The Catcher in the Rye",
        "authorname": "J.D. Salinger",
        "publich": 1951,
        "edition": 2001,
        "genre": "Coming-of-Age"
    },
    {
        "name": "The Lord of the Rings",
        "authorname": "J.R.R. Tolkien",
        "publich": 1954,
        "edition": 2002,
        "genre": "High Fantasy"
    },
    {
        "name": "Frankenstein",
        "authorname": "Mary Shelley",
        "publich": 1818,
        "edition": 2003,
        "genre": "Gothic Fiction"
    },
    {
        "name": "Don Quixote",
        "authorname": "Miguel de Cervantes",
        "publich": 1605,
        "edition": 2004,
        "genre": "Satire"
    }
]

// User want to serach book based on filters:
let outputBooks = books.filter( (book) => book.genre === 'Southern Gothic' );
console.log(outputBooks);

outputBooks = books.filter( (book) => book.publich > 1950);
console.log(outputBooks);


// map: apply any function on each element of an array

nums = [1, 2 , 3 , 4 , 4, 5, 6 ,7];
newNums = nums.map( (num) => num**2 );
console.log(newNums); // [ 1,  4,  9, 16, 16, 25, 36, 49 ]


// Chaining

// Do this operatons on each element of array sequentially
// 1. Add 10
// 2. Sqare
// 3. select only odd numbers
nums = [1, 2, 3, 4, 5];
newNums = nums
            .map( (num) => num+10 )
            .map( (num) => num**2 )
            .filter( (num) => num%2 != 0 );4
console.log(newNums); // [ 121, 169, 225 ]




// Reduce:

// calculate sum of all the digits in an array
nums = [1,2,3];
let initialAccValue = 100;
let total = nums.reduce( function( accumulator, currentValue ){
    console.log(`Accumulator: ${accumulator}, Current Value:  ${currentValue}`);
    return accumulator + currentValue;
}, initialAccValue);
console.log(total); // 106



// calculate total price of all the items in shoping cart
let shoppingCart = [
    {
        itemName : 'biscuit',
        price : 60,
    },
    {
        itemName : 'rice',
        price : 460,
    },
    {
        itemName : 'spices',
        price : 169,
    },
];

let totalPrice = shoppingCart.reduce( (acc, item) => (acc + item.price), 0 );
console.log(totalPrice); // 689

