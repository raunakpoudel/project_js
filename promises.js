// A Promise is a proxy for a value not necessarily known when the promise is created. 
// It allows you to associate handlers with an asynchronous action's eventual success value or
//  failure reason. This lets asynchronous methods return values like synchronous methods: instead 
//  of immediately returning the final value, the asynchronous method returns a promise to supply the value
//   at some point in the future.

// -------------------------------------------------------------------------------------------------------------------
// Example for promises resolver problems in js 
// In this all examples (.then ) will only perform task for resolver argument 






// const promisone =new Promise((resolve , reject )=>{
//     setTimeout(()=>{
// console.log("resolved")
        
//  resolve();
//     },2000)
// });

// promisone.then(()=>{
//     console.log("Promises")
// })



// new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//     console.log("promisesTwo setTimeout executed ")
// resolve()
//    },2000) 
// }).then(
//     console.log("PromiseTwo resolved")
// );


//--------------------------------------------------------------------------------------------------------------------
// now in this example we use the data transfering as shown in the example 


// const promisefour =new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Resolved")
//     resolve({username:"Jeevan Poudel",Email:"example@gmail.com"})
//     },1000)
// });

// promisefour.then(
//     (user)=>{
//         console.log(user);
//         return user;
//     }
// ).then(
//     (user)=>{
// console.log(user.username);
//     }
// )


// ---------------------------------------------------------------------------------------------------------
// now let's try rejection too
