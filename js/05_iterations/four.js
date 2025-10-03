// for in loop in object (for of loop is not iterable in object so we use for in loop in object)

const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(key);
    // console.log(`${key} shortcut is for ${myObject[key]}`);
    
    
   
}


// for in loop in arrays

const programming = ["js", "cpp", "py", "rb"]

for (const key in programming) {
    console.log(programming[key]);
    // console.log(key);
    
    
}


// for in loop cant execute in Map cuz it will be not iterable in case of Map
















