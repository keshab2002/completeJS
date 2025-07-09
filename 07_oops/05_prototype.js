/*
                NULL
                  |
               OBJECT
                  |
    --------------------------------
    |              |                |
  Array         String           function
*/

// Any Property/functions of object can be asscessed by Array, string, function

Object.prototype.keshab = function(){
    console.log('Keshab is everywhere!');
}

const arr = [1, 2, 3];
const obj = {
    name: 'Huji',
    email: 'huji@google.com',
}
const func = function(){
    console.log('Curently you are in func function!');
}

arr.keshab();   //Keshab is everywhere!
obj.keshab();   //Keshab is everywhere!
func.keshab();   //Keshab is everywhere!

// But Property/functions of Array, string, function can not be accessed by upped levels or siblings

const a = [1, 2, 3];
Array.prototype.sumTotal = function(){
    let sum = 0
    this.forEach(element => {
        sum += element;
    });
    return sum;
}

console.log(a.sumTotal());
console.log(obj.sumTotal());    // ERROR: TypeError: obj.sumTotal is not a function

