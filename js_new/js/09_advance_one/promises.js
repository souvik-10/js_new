// creating promises in js-
 
const promiseOne = new Promise(function(resolve, reject){
    // do an async task
    // DB calls, cryptography, network calls.
    setTimeout(function(){
        console.log("async task is complete");
        resolve();
        
    }, 1000) // (settimeout) is used to gives an output just after the time interval mentioned.


});

promiseOne.then(function(){  // (then) is related with (resolve).
    console.log("promise consumed");
    
    
});

// another easy way of using promises.

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve();
        
    }, 1000);



}).then(function(){
    console.log("async 2 resolved");
    
})

// promise three - 

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "souvik", email: "souvikk279@gmail.com"}) // the parameters passed here will be showed down in the console.log.

    }, 1000)


})

promiseThree.then(function(user){
    console.log(user); // it fetch data from the (promisethree) resolve and gives output.
    
})

// promise four - 

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
       let error = true; // this will show error in output cuz error is considered as true.
      //  let error = false;  // this will run the username and the ful output too if we want. cuz error is considered as false here.
        
        if (!error) {

        
            resolve({username: "souvik", password: "123"})
        } else {
            reject('error: something went wrong') // reject is used for checking if the conditions are true or not. the condition of if and else condition.
        }    

    }, 1000)
})

// chaining method for if else condition check with then and catch. it is used for database connection.
promiseFour
.then((user) => {
    console.log(user);
    return user.username; // used to return just username as output. not password.
    
}).then((username) => {
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(() => console.log("the promise is either resolved or rejected ") // this (finally) is used to validate at last as if the promise is resolved or rejected at last what happens. it is kinda used as default.
)

// promise five- 
// asyn await - 

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true; //even now error is considered as true. so we have to wrap async await in try and catch block.
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('error: Js went wrong')
        }
    }, 1000)
})

async function consumepromiseFive(){// it is same as then and catch, it just wait for the condition if it executes then it move forward. and we have to wrap this in try catch block cuz of error considered as true.
    try {
        const response = await promiseFive
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
     
}

consumepromiseFive();


// trying dummy api for taking asyc await examples - 

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users') // fetch is used for checking some api and give callback.
        
        const data = await response.json();
        console.log(data);
        
    } catch (error) {
        console.log("E:", error);
        
        
    }


}

getAllUsers();


// same example with then and catch method.

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => console.log(error))   