

// PROMISE //

// A Promise is a proxy for a value not necessarily known when the promise is created. 
// It allows you to associate handlers with an asynchronous action's eventual success value or
//  failure reason. This lets asynchronous methods return values like synchronous methods: instead 
//  of immediately returning the final value, the asynchronous method returns a promise to supply the value
//   at some point in the future.

// -------------------------------------------------------------------------------------------------------------------
// Example for promises resolver problems in js 
// In this all examples (.then ) will only perform task for resolver argument 






const promisone =new Promise((resolve , reject )=>{
    setTimeout(()=>{
console.log("resolved")
        
 resolve();
    },2000)
});

promisone.then(()=>{
    console.log("Promises")
})



new Promise((resolve,reject)=>{
   setTimeout(()=>{
    console.log("promisesTwo setTimeout executed ")
resolve()
   },2000) 
}).then(
    console.log("PromiseTwo resolved")
);


//--------------------------------------------------------------------------------------------------------------------
// now in this example we use the data transfering as shown in the example 


const promisefour =new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Resolved")
    resolve({username:"Jeevan Poudel",Email:"example@gmail.com"})
    },1000)
});

promisefour.then(
    (user)=>{
        console.log(user);
        return user;
    }
).then(
    (user)=>{
console.log(user.username);
    }
)


// ---------------------------------------------------------------------------------------------------------
// now let's try rejection too
const promisefive =new Promise((resolve,reject)=>{
    setTimeout( ()=>{
            error =true
            if(!error){
                resolve();
            }
            else{
                reject();
            }
        },1000)
    }
);

promisefive.then(
()=>{
    console.log("True");

})
promisefive.catch(
()=>{
    console.log("False");

})

// -------------------------------------------------------------------------------------------------------------------------------------------
// async and await in promises


const promisesix =  new promise((resolve,reject)=>{
    setTimeout(()=>{
        const error = true;
        if(!error){
            resolve(
                ()=>{
                    console.log("No error")
                }
            )
        }
        else{
            reject(()=>{
                console.log("Error present")
            })
        }
    },2000)
})

async function compromise(){
    try {
        const a =await promisesix(
            console.log(a)

        )
    } catch (error) {
        console.log(error)
    }
}

// -------------------------------------------------------------------------------------------------------------------------------------------
// fatching data using json 



fetch('https://jsonplaceholder.typicode.com/users')
.then(
    (response)=>{
   return response.json()
    }
).then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})

// --------------------------------------------------------------------------------------------------------------------------------------------

