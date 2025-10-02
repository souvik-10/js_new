// ******************* data types *******************


// primitive data types:

// 7 types: string, number, boolean, null, undefined, symbol, bigint

const marks = 80
const marksrev = 82.5
let name = "souvik" //string

const isLoggedIn = false
const outsideTemp = null
let userEmail 

const id =Symbol('158')
const anotherId = Symbol('158') // symbol is unique 

console.log(id === anotherId)

const bigNumber = 3737327473070470237n  // bigint example 



// reference (non primitive) data types:


//  object, array, function

const heros = ["thor", "ironman", "hulk"]  // array example

let myObj = {
    name : "souvik",
    age : 21,

} // object example

const myFunction = function(){
    console.log("hello souvik")
    
} // function example




// *******************************  Memory ********************************************

// types of memory: stack: (used in primitive data types) - jo bhi variable declare karte hai uska humko ek copy milta hai  

// and heap: (used in non primitive data types)- aur jab bhi hum kuch reference type ka data create karte hai to uska reference heap me store hota hai aur original data milta hai 


// stack example:

let myName = "souvik"

let anotherName = myName
anotherName = "das"

console.log(myName) 
console.log(anotherName) // jab maine anothername ki value change ki to myName ki value change nahi hui kyuki anotherName ne copy uthai aur jab changes hue toh sirf copy hi change hui 

// heap example:

let userOne ={
    name: "souvik",
    age: 21
}

let userTwo = userOne

userTwo.age = 22

console.log(userOne.age)
console.log(userTwo.age)// values change hui hai kyuki userTwo ne userOne ka reference liya hua hai aur heap memory mai original data hi store hota hai

