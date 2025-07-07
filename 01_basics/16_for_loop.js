// for of

/*
for (const iterator of iterableObject) {
    //
}
*/

nums = [25, 26, 27, 28, 29];
for(const num of nums){
    console.log(num)
}

greetings = "Hello!";
for (const greet of greetings){
    console.log(greet);
}

const myMap = new Map();
myMap.set('IN', 'India');
myMap.set('USA', 'United States of America');
myMap.set('FR', 'France');
for( const [key, value] of myMap){
    console.log(`${key}: ${value}`);
}

// We can not iterate thorugh object using for of


// for in loop

/*
for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}
*/

nums = [25, 26, 27, 28, 29];
for(const key in nums){
    console.log(nums[key]);
}

greetings = "Hello!";
for(const greet in greetings){
    console.log(greetings.charAt(greet));
}

// for in can not be used in map

const myLang = {
    js: 'javascript',
    cpp: 'c++',
    py: 'python'
}

for(const key in myLang){
    console.log(myLang[key]);
}




// for each loop

/*
array.forEach(element => {
    
});
*/

const myArray = [25, 26, 27, 28];
myArray.forEach( function(num){
    console.log(num);
} );

myArray.forEach( (num) => {
    console.log(num)
} );

function printMe(item){
    console.log(item);
}
myArray.forEach(printMe);

myArray.forEach( (item, index, fullArray) =>{
    console.log(`${item} present in ${index} in array (${fullArray})`);
})


const codingLanguages = [
    {
        languageName: 'javascript',
        extension: 'js'
    },
    {
        languageName: 'java',
        extension: 'java'
    },
    {
        languageName: 'python',
        extension: 'py'
    },
];

codingLanguages.forEach( (language) =>{
    console.log(`${language.languageName} has extension: ${language.extension}`);
});