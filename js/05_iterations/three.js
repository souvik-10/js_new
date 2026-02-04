// for of loops (specially made for arrays)


// for of loops in array example 

const arr = [1, 2, 3, 4, 5]

for (const num of arr) { // used for object,array,string and no declaration is required to check the condition 
    // console.log(num);
    

    
}

// for of loops in string example

const greetings = "hello world"

for (const greet of greetings) {
    // console.log(`each char is ${greet}`);
    
    
}


// Maps -- map is like an object which holds key value pairs and remembers the insertion order wise 
// and it is used for iterations but mostly used for arrays and it execute with unique values no numbers are repeated more than one 




const map = new Map()
map.set('In', "India")
map.set('Usa', "United states of America")
map.set('Fr', "France")
map.set('In', "India") // it wont get print again cuz map have unique value feature 

// console.log(map);


// for of in Map example 

for (const [key, value] of map) {
    // console.log(key, ":-", value);
    

    
}


// for of in object example (but for of doesnt work on objects )

const myObj = {
    "game1": "valo",
    "game2": "rdr2"
}

for (const [key, value] of myObj) {
    console.log(key, ":-", value); // it wont execute cuz for of dont work on objects so objects are not iterable 
    
    
    
    
}


















