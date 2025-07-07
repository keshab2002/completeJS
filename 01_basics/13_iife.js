// Immediately Invoked Function Expression

/*
Sometime we want to execute a fucntion immediately after defination.
But sometime gobal varibale may pollute current variables. Hence we use iife
(function_defination)();
*/

(function(){
    console.log("DB Conneccted!");
})();


// iife executes automatically but don't know where to stop ! Hence use ; after iife 

/*
( ()=>{
    console.log("DB1 Conneccted!");
} )()

( ()=>{
    console.log("DB2 Conneccted!");
} )()

Error
*/


( ()=>{
    console.log("DB1 Conneccted!");
} )();

( ()=>{
    console.log("DB2 Conneccted!");
} )();
//DB1 Conneccted!
//DB2 Conneccted!



// Named iife

( function func(){
    console.log(`Hello Keshab`);
} )();  // Hello Keshab


// parameter passing in iife

(
    (name) =>{
        console.log(`hello ${name}`);
    }
)('keshab');    // hello keshab

