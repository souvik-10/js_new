// Functions in js

function sayMyName(){
    console.log("s")
    console.log("o")
    console.log("u")
    console.log("v")
    console.log("i")
    console.log("k")    
}

// sayMyName() // sayMyName is for function refercence and () is for execution 
//  only sayMyName reference cant be use for execution


// function example 
// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
    
// }

// good way of decalring a function and getting correct output with storing the values and using return 
function addTwoNumbers(number1, number2){

    let result = number1 + number2
    return number1 + number2 // more easy way of execution of result 
    // console.log("souvik") // it got executed cuz it is declared before the return command 
    // return result // when the code will execute it will return the value of result without console log
    // console.log("souvik") // it will never get execute cuz after using return no else command is recognised 
    
    
    
}

const result = addTwoNumbers(10, 10)
// console.log("result:",  result) // it will show the result: undefined not 20 bcz the result function is not storing th value of two numbers


// function example 

// function loginUserMessage(username){
//     return `${username} just logged in`

// }

// console.log(loginUserMessage("souvik")) // just using return wont give you output you have to use console log after that to store the values and print it 
// console.log(loginUserMessage()) // it will give you undefined username cuz we haven't declared any name 

// function examle with if cond


function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a username:")
        return
        
    }
    return `${username} just logged in`

}

// console.log(loginUserMessage()) // it will give you undefined username cuz we haven't declared any name to print 
// console.log(loginUserMessage("souvik"))
 

// function example of rest operator

function calculateCartPrice(val1, val2, ...num1){ // ... is used as a rest operator here not as a spread operator, and val1 and val2 are not included int the output cuz ... rest operator is used after val1,val2 
    return num1

}

// console.log(calculateCartPrice(100,250,550,2000,4000))

// passing object in function

const user = {
    username: "souvik",
    price: 399

}

function handleObject(anyobject){
    // console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
    

}

// handleObject(user)
handleObject({
    username: "souvik",
    price: 499
}) // another way of executing for giving value by creating object within the function


// passing arrays in functions

const myNewArray = [200, 480, 700, 988]

function returnSecondValue(getArray){ 
    return getArray[1] // it will only print the 2nd value from the array with 0th index so it will print 480 as 2nd value 

}
console.log(returnSecondValue(myNewArray))


