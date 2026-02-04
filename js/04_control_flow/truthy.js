// Truthy and Falsy values in JavaScript
// In JavaScript, values can be classified as "truthy" or "falsy" based on their behavior in a boolean context.

// falsy values---
// false, 0, -0, 0n (BigInt zero), "", null, undefined, NaN

// truthy values---
// "0", 'false', " ", [], {}, function(){} 


//example ---

// const userEmail = "s@das.ai" 
// if (userEmail) {
//     console.log("Got user email")
    
    
// }else {
//     console.log("email not found")
    
// }

// array example ---

// const userEmail = []
// if (userEmail.length === 0) {
//     console.log("array is empty")
    
    
// }

// object example ---

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty")
    
}

// Nullish coalescing operator (??): null or undefined
// example ---

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 12
console.log(val1)


// Terniary operator (condition ? true : false)

// condition ? true : false

// example ---

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("price is less than 80") : console.log("price is more than 80")

