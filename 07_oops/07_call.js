/*
PROBLEM: 

function setUserName(username){
    // Check in DB is same username exists
    this.username = username;
    console.log(`I am setUserName function and I have set username = ${this,username}`);
    // 
}

function CreateUser(username, email, passcode){
    setUserName(username);
    this.email = email;
    this.passcode = passcode;
}

const user1 = new CreateUser('Keshab', 'keshab@example.com', 123);

console.log(user1);     // CreateUser { email: 'keshab@example.com', passcode: 123 }

*/

// Soultion:

function setUserName(username){
    // Check in DB is same username exists
    this.username = username;
}

function CreateUser(username, email, passcode){
    setUserName.call(this, username);
    this.email = email;
    this.passcode = passcode;
}

const user1 = new CreateUser('Keshab', 'keshab@example.com', 123);

console.log(user1);   

/*
CreateUser {
  username: 'Keshab',
  email: 'keshab@example.com',
  passcode: 123
}

*/
