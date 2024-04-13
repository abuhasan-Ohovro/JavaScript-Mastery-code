// IN this file we will discuss about promises in JavaScript. 
// So what is promises in JavaScript. =>>
//A Promise contains both the producing code and calls to the consuming code or we can say that => The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
/*  Description about promisese :

     A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

    States in promises:

    A Promise is in one of these states:

      =>  pending: initial state, neither fulfilled nor rejected.
      =>  fulfilled: meaning that the operation was completed successfully.
    => rejected: meaning that the operation failed.
     
     */


//First method to create a promise

const promiseOne = new Promise (function(resolve,reject){
    // Do an async task 
    // DB calls, crytograpy,network calls 
    setTimeout(function(){
        console.log('Async task is completed');
        resolve();
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

//** Seccond approach to declare a promises */


new Promise (function (resolve, reject){
    setTimeout(function(){
        console.log("Async task two");
        resolve();
    },1000)
}).then(function(){
    console.log("Async task two is resolved");
})

//* Third way to create a promises */

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({userName : "hasan", email : "hasan@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
      console.log(user)
})

// Forth way to create a promise

const promisesFour = new Promise (function (resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({userName : "hasan", password : " 1234546"});
        } else {
            reject("ERROR : Soomething Went Wrong")
        }
    },1000)
});

promisesFour
.then((user)=>{
    console.log(user)
    return user.userName
})
.then((userName)=>{
    console.log(userName)
})
.catch((err)=>{
    console.log(err);
})
.finally(()=>{
    console.log("Promise is either resolved or rejected")
})

// Method five to create a promise using async- await 


const promisesFive = new Promise (function (resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({userName : "JavaScript", password : " 1234546"});
        } else {
            reject("ERROR : JS Went Wrong")
        }
    },1000)
});

async function  consumePromiseFive(){
    try {
        const response = await promisesFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


// Basic discussion on fetch 

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log("E::",err)
})
