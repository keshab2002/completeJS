// In node environment this refers to current context
console.log(this);  //{}

// Constructor fuction
function User(username , emial, isLoggedIn){
    this.username = username;
    this.emial = emial;
    this.isLoggedIn = isLoggedIn;
    return this;
}

const user1 = new User('Keshab', 'keshab@example.com', true);
const user2 = new  User('Mojesh', 'mojesh@example.com', false);
console.log(user1);
/*
User {
  username: 'Keshab',
  emial: 'keshab@example.com',
  isLoggedIn: true
}

*/
console.log(user2);
/*
User {
  username: 'Mojesh',
  emial: 'mojesh@example.com',
  isLoggedIn: false
}
*/
