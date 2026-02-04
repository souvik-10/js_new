// Map method -- used to  

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums= myNumbers.map( (num) => num + 10 )
// console.log(newNums);

// chaining mehod -- using more than one method like (map,filter etc)

const newNums = myNumbers
               .map( (num) => num * 10 ) // it will *10 to the array elements then pass this value to the chain of second map
               .map( (num) => num + 1) // it will take values from the previous map value
               .filter( (num) => num > 40)
console.log(newNums);

















