// array, string, functions all are object in js

function Items(item, price){
    this.item = item;
    this.price = price;
}

console.log(Items.prototype);   // {}: Context of function items (this)

// if function is an object, can I insert properties or other function on it?
Items.prototype.printItems = function(){
    console.log(`Price of ${this.item} is: ${this.price}`);
}

Items.prototype.addTax = function(){
    this.price += 15;
}


const cofee = new  Items('cold cofee', 250);
const tea = new Items('masala chai', 150);

cofee.addTax()
console.log(cofee.printItems());    

/*
Price of cold cofee is: 265
undefined
*/



/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
