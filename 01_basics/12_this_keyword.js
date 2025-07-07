// 'this' refers the cuttent context

// 'this' acts differently on windows and on node

// in windows:

/*
console.log(this);

Window {0: global, window: Window, self: Window, document: document, name: '', location: Location, …}
*/

// in node:
console.log(this); //{}

// inside an object

const user = {
    userName: "Keshab",
    age: 22,
    email: "keshab@gmail.com",
    greetUser: function () {
        console.log(this);
        /*
        {
            userName: 'Keshab',
            age: 22,
            email: 'keshab@gmail.com',
            greetUser: [Function: greetUser]
        }
        */
       console.log(`Hello ${this.userName}`); // Hello Keshab
    }
};

user.greetUser()

// We can not use this inside a function

/*
function func(){
    let num = 9;
    console.log(this.num);
}
func(); // undefined
*/