// scopes

let a= 300
// const b = 20
// var c = 30 // this is global scope, values here can be inside the block scope


// {} //= {} this is known as scope in any programming lang, but as we know that {} is used in objects and functions also but this {} is scope only 


// scope example

if (true) { // inside this {} is known as block scope, but values here inside the block scope cant be out there in global scope

    
let a= 10
const b = 20  
// console.log("inner: ", a)



    
}


// console.log(a) 
// console.log(b)
// console.log(c) // but this c gets print cuz of var, thats why we should not use (var) ever in js 


// nested scoping exapmle

function one(){
    const username = "souvik"


    function two(){

        const website = "youtube"
        // console.log(username)
        
    }
    // console.log(website) // it cant be print cuz this (weubsite) is inside fn 2 and it cant be executed outside the fn2

    
    two()
}
// one()

// scoping example using if condition

if (true) {
    const username = "souvik"

    if (username === "souvik") {

        const website = " youtube"
        // console.log(username + website )
        
        
    }
    // console.log(website) // it cant be print cuz this (weubsite) is inside the 2nd if cond and it cant be executed outside it
    
    
}
// console.log(username) // it cant be print cuz this (username) is inside 1st if cond and it cant be executed outside the it


// *********************************** intresting concept *********************************************

console.log(addone(5)) // it get runs cuz we can declare it before the fn
function addone(num){
    return num + 1
}



// another example

// console.log(addTwo(5)) // but it wont execute cuz of expression 
const addTwo = function(num){ // it is a function but it will be considered as an expression 
    return num + 2
}


