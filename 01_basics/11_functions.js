// Defult Values

function add(num1 , num2 = 10){
    if (! num1){
        return
    }
    return num1 + num2;
}

console.log(add(5)); //15

// Variable number of arguments: rest operator

function calculateShoppingCartPrice(price1, price2, ...prices){
    cost = price1 + price2;
    prices.forEach(price => {
        cost += price;
    });
    return cost;
}

console.log(calculateShoppingCartPrice(450, 896, 478, 2000, 5006)); //8830


// passing Object

function objectDetails(user){
    return `Age of ${user.name} is ${user.age}`;
}

console.log(objectDetails({
    name: "Keshab",
    age : 23,
}));    // Age of Keshab is 23



// Hosting

console.log(addOne(56)); // 57
function addOne(num){
    return ++num;
}

console.log(addTwo(48)); // ERROR!
const addTwo = function(num){
    return ++num;
}
