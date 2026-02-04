// if condition

// if (true) { // will only execute if the condition is true 
    
// }

// operators --- 
// <, >, <=, >=, ==, !=, ===, !==

// example --

// const isUserLoggedIn = true
// if ( 2 == "2"){
//     console.log("executed")
    

// }


// example---

// const temperature = 32
// if (temperature < 50) {
//     console.log("less than 50")
    

// }
// console.log("temperature is greater than 50") // it will execute then also cuz its outside the block

// if else example ---

// const temperature = 32
// if (temperature === 42) {
//     console.log("less than 50")
    

// }
// else{
// console.log("temperature is greater than 50")
// }
// console.log("it will execute") // it will execute then also cuz its outside the block

// block scope example -- 

// const score = 200

// if(score > 100) {
//     let power = "fly"
//     console.log(`use power: ${power }`)

    
// }
// console.log(`use power: ${power }`) // it will give error cuz its outside the block scope


// implicit scope example ---

// const balance = 1000 

// if (balance > 500) console.log("test"); 
    
// if else, else if example ---

// if (balance < 500) {
//     console.log("less than 500")
        
// }else if (balance < 750) {
//     console.log("less than 750")
    
// }else if(balance < 900) {
//     console.log("less than 900")
    
// }else  {
//     console.log("less than 1200")
    
// }
    
// multiple conditions check ---

const isUserLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (isUserLoggedIn && debitcard) { // && means and condition which allows to check if both conditions are true
    console.log("allow to buy")
    
    
}
if (loggedInFromGoogle || loggedInFromEmail) { // || means or condition which allows to check if any one condition is true
    console.log("logged in")
    
    
}




 

 


