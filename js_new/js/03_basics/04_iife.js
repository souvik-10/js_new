// Immediately Invoked Function Expressions (IIFE) -- helps to execute the function instantly without taking much time 

// example --
// named iife example --
(function chai(){
    console.log(`DB CONNECTED`)
    
})(); // this semicolon is must if you want to execute another iife after this, semicolon act as end here 

// iife syntax ---
   //  first () is for wrapping the function and 2nd () is for execution  
   // and iife is used for removing or avoiding the pollution of the global scopes


// arrow exaple of iife ---
// unamed iife example --- 
((name) => {
    console.log(`DB CONNECTED TWO ${name}`)
    
})("souvik")



