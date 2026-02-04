// for each loop in array (it is the higher order function loop)

const coding = ["java", "py", "cpp", "js"]

// coding.forEach(function (val){ // generally functions = have name but it wont cuz it is a callback function and callback function stores no name and value 
//         console.log(val);
        
// })

// another way of writing function in arrow function format

// coding.forEach( (item) => {
//     console.log(item);
    
// })

// function declaring way in for each loop 

// function printMe (item){
//     console.log(item);
    

// }

// coding.forEach(printMe)

// all other parameters of for each loop other than item--

// coding.forEach ( (item, index, arr)=>{ // it will print the item, index, and whole array in order 
    // console.log(item, index, arr);
    

// } )

// for each example of objects inside array --

const myCoding = [
    {
        languageName: "javascript",
        languageFile: "js"
    },
    {
        languageName: "java",
        languageFile: "java"
    },
    {
        languageName: "python",
        languageFile: "py"
    }
]

myCoding.forEach( (item) => {

    console.log(item.languageName);  
    

})








