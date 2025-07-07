// Console log a date

const myDate = new Date(); 
console.log(typeof myDate); // object
console.log(myDate); // 2025-07-06T09:39:05.131Z
console.log(myDate.toString()); // Sun Jul 06 2025 15:09:05 GMT+0530 (India Standard Time)
console.log(myDate.toISOString()); // 2025-07-06T09:39:05.131Z
console.log(myDate.toLocaleString()); // 6/7/2025, 3:09:05 pm

// To Declare a date

let newDate = new Date(2015, 0, 12);
console.log(newDate.toString()); // Mon Jan 12 2015 00:00:00 GMT+0530 (India Standard Time)

newDate = new Date(2015, 0, 12, 5, 45, 56);
console.log(newDate.toString()); // MMon Jan 12 2015 05:45:56 GMT+0530 (India Standard Time)

newDate = new Date("2017-01-12");
console.log(newDate.toString()); // Thu Jan 12 2017 05:30:00 GMT+0530 (India Standard Time)



// Time Stamping

// returns differnece between current time and 1st Jan 1970 00:00:00
let myTimeStamp =  Date.now();
console.log("In miliseconds: "+myTimeStamp); //1751795314213 milisecond
console.log("In seconds: "+ Math.round(myTimeStamp/1000)); //1751795613 seconds


// returns differnece between specified time and 1st Jan 1970 00:00:00
let myNewDate = new Date(2017, 12, 5, 14, 45, 45);
console.log(myNewDate.toString());  //Fri Jan 05 2018 14:45:45 GMT+0530 (India Standard Time)
console.log(myNewDate.getTime()); //1515143745000



// Others Methods

let eDate = new Date();
console.log(eDate.toString()); //Sun Jul 06 2025 15:30:08 GMT+0530 (India Standard Time)
console.log(eDate.getTime()); // 1751795931217
console.log(eDate.getDay()); // 0
console.log(eDate.getDate()); //6
console.log(eDate.getMonth()); // 6
console.log(eDate.getFullYear()); // 2025