// for loop

for (let i = 0; i <= 10; i++) { // initialization, condition; increment/decrement
    const element = i;
    if (element == 5) {
        // console.log("5 is found")
        
        
    }
    // console.log(element)
    
}

// console.log(element) // it wont print cuz its outside the block scope 

// loops inside loop example -- 

for (let i= 0; i <= 10 ; i++) {
    // console.log(`Outer loop value: ${i}`);
    
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop value: ${j} and inner loop ${i}`);
        // console.log(i + '*' + j + '=' + i*j ); // multiplication example of for loop 
        
        
        

    }
}

// for loop array example --

let myArray = ["batman", "superman", "deadpool"]
// console.log(myArray.length)

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element)
    
    
}


// break and continue keyword 

// break example 


// for (let index = 1; index <= 20; index++) {
//     if (index == 10) {
//         console.log("found 10")
//         break // it is used to stop and break the iteration at the index condtion 
        
//     }
//     console.log(`value of i is ${index}`)
    
    
// }


// continue example-- 


for (let index = 1; index <= 20; index++) {
    if (index == 10) {
        console.log("found 10")
        continue // it can allow one iteration and wont stop means it will not forgive you for one iteration but not more than that 
        
    }
    console.log(`value of i is ${index}`)
    
    
}

console.log("souvik")
console.log("hello")

