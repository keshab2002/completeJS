// Promise

// const promise1 = new Promise(function(resolve, reject){
//     // Do any async task
//     // Access DB, Network etc
//     setTimeout(function(){
//         console.log('This is promice 1');
//         resolve();
//     }, 2000);
// });

// promise1.then(function(){
//     console.log('Promice 1 resolved!');
// });

/*
This is promice 1
Promice 1 resolved!
*/


// Promise without Reference

// new Promise((resolve, reject)=>{
//     const readDB = setInterval(() => {
//         console.log('Reading the DB...');
//     }, 500);
//     setTimeout(() => {
//         clearInterval(readDB);
//         resolve();
//     }, 2000);
// }).then(()=>{
//     console.log('DB read Success');
// });

/*
Reading the DB...
Reading the DB...
Reading the DB...
DB read Success
*/



// Promise: forward data to then block

// const promiseThree = new Promise((resolve, reject)=>{
//     const readDB = setInterval(() => {
//         console.log('Reading DB...');
//     }, 300);

//     setTimeout(() => {
//         clearInterval(readDB);
//         const data = {
//             name: 'Keshab',
//             email: 'keshab@example.com'
//         };
//         resolve(data);
//     }, 2000);
// });

// promiseThree.then((data)=>{
//     console.log(`Recived Data from DB: ${data['name']},  ${data['email']} `);
// });

/*
Reading DB...
Reading DB...
Reading DB...
Reading DB...
Reading DB...
Reading DB...
Recived Data from DB: Keshab,  keshab@example.com
*/



// Promise: then chaining, catch handeling, finally 

// const promiseFour = new Promise((resolve, reject) => {
//     const readDB = setInterval(() => {
//         console.log('Reading Database...');
//     }, 300);

//     setTimeout(() => {
//         clearInterval(readDB);
//         let readSuccess = Math.floor((Math.random() * 2));
//         if (readSuccess) {
//             console.log('DATABASE read Successfull!');
//             data = {
//                 name: 'Keshab',
//                 email: 'keshab@example.com',
//             }
//             resolve(data);
//         } else {
//             reject('Something Went Wrong!');
//         }
//     }, 2000)
// }); 

// promiseFour.then((user)=>{
//     return user.name;
// }).then((username)=>{
//     console.log(`User name is: ${username}`);
// }).catch((err)=>{
//     console.log(err);
// }).finally(()=>{
//     console.log('Either Promice resolved or Rejected!');
// })

/*
Reading Database...
Reading Database...
Reading Database...
Reading Database...
Reading Database...
Reading Database...
DATABASE read Successfull!
User name is: Keshab
Either Promice resolved or Rejected!

OR

Reading Database...
Reading Database...
Reading Database...
Reading Database...
Reading Database...
Reading Database...
Something Went Wrong!
Either Promice resolved or Rejected!
*/


// handel promise using async await

// const promiseFive = new Promise((resolve, reject) => {
//     const readDB = setInterval(() => {
//         console.log('Reading Database...');
//     }, 300);

//     setTimeout(() => {
//         clearInterval(readDB);
//         let readSuccess = Math.floor((Math.random() * 2));
//         if (readSuccess) {
//             console.log('DATABASE read Successfull!');
//             data = {
//                 name: 'Keshab',
//                 email: 'keshab@example.com',
//             }
//             resolve(data);
//         } else {
//             reject('Something Went Wrong!');
//         }
//     }, 2000)
// });

// async function handelPromiseFive() {
//     try {
//         const resolve = await promiseFive;
//         console.log(`User name is: ${resolve.name}, emial: ${resolve.email} `);
//     } catch (error) {
//         console.log(error);
//     }
// }

// handelPromiseFive();

/*
Reading Database...
Reading Database...
Reading Database...
Reading Database...
Reading Database...
Reading Database...
DATABASE read Successfull!
User name is: Keshab, emial: keshab@example.com

OR

Reading Database...
Reading Database...
Reading Database...
Reading Database...
Reading Database...
Reading Database...
Something Went Wrong!
*/


// fetch using async await

// async function getRandomUserData(){
//     try{
//         const responce = await fetch('https://randomuser.me/api/');
//         const data = await responce.json();
//         console.log(data);
//     } catch (err){
//         console.log(`ERROR: ${err}`);
//     }
// }

// getRandomUserData();

/*
{
  results: [
    {
      gender: 'female',
      name: [Object],
      location: [Object],
      email: 'ceylan.corekci@example.com',
      login: [Object],
      dob: [Object],
      registered: [Object],
      phone: '(506)-275-5170',
      cell: '(006)-852-9830',
      id: [Object],
      picture: [Object],
      nat: 'TR'
    }
  ],
  info: { seed: '50b2f74b88be87c0', results: 1, page: 1, version: '1.4' }
}
*/


fetch('https://randomuser.me/api/')
.then((responce)=>{
    return responce.json();
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})

/*
{
  results: [
    {
      gender: 'male',
      name: [Object],
      location: [Object],
      email: 'wallace.willis@example.com',
      login: [Object],
      dob: [Object],
      registered: [Object],
      phone: '(979) 730-6614',
      cell: '(213) 277-8025',
      id: [Object],
      picture: [Object],
      nat: 'US'
    }
  ],
  info: { seed: 'a6f2d1493ad0b593', results: 1, page: 1, version: '1.4' }
}
*/




