class User{
    constructor(username, passcode, email){
        this.username  = username;
        this.passcode = passcode;
        this.email = email;
    }
    getuserDetails(){
        return `User name: ${this.username}, Passcode: ${this.passcode}, email: ${this.email}`;
    }
    logInStatus(){
        let loggedIn = Math.floor(Math.random()*2);
        return loggedIn ? `${this.username} is logged in!` : `${this.username} is not logged in!`;
    }
}

const user1 = new User('Keshab', '123', 'keshab@example.com');
console.log(user1.getuserDetails());
console.log(user1.logInStatus());

/*
User name: Keshab, Passcode: 123, email: keshab@example.com
Keshab is not logged in!
*/


// Behind the Scene


// function User(username, passcode, email){
//     this.username  = username;
//     this.passcode = passcode;
//     this.email = email;
// }

// User.prototype.getuserDetails = function(){
//     return `User name: ${this.username}, Passcode: ${this.passcode}, email: ${this.email}`;
// }

// User.prototype.logInStatus = function(){
//     let loggedIn = Math.floor(Math.random()*2);
//     return loggedIn ? `${this.username} is logged in!` : `${this.username} is not logged in!`;
// }

// const user1 = new User('Keshab', '123', 'keshab@example.com');
// console.log(user1.getuserDetails());
// console.log(user1.logInStatus());

/*
User name: Keshab, Passcode: 123, email: keshab@example.com
Keshab is logged in!
*/