// array

const myArr = [0, 1, 2, 3, 4, 5] // array of numbers
const myHeros = ['spiderman', 'ironman', 'thor'] // array of strings
const myArr2 = new Array(1, 2, 3, 4) // another way to create array
// console.log(myArr[3]) // access value at index 3



// array methods

// myArr.push(6) // add 6 at the end of array
// myArr.push(7) // add 7 at the end of array
// myArr.pop() // remove last element from array

// myArr.unshift(0)// add 0 at the beginning of array
// myArr.shift() // remove first element from array

// console.log(myArr.includes(5)) // check if 5 is present in array or not
// console.log(myArr.indexOf(3)) // get index of 3 in array


// const newArr = myArr.join() // convert array to string


// console.log(myArr) 
// console.log(newArr)
// console.log(typeof newArr) // string


// slice, splice

console.log("A ", myArr) // original array remains unchanged

const myn1 = myArr.slice( 1, 3) // slice(startIndex, endIndex) - endIndex is not included

console.log(myn1)
console.log("B ", myArr) // original array remains unchanged

const myn2 = myArr.splice( 1, 3) // splice(startIndex, deleteCount) - removes elements
console.log("c ", myArr) // original array is changed
console.log(myn2) // removed elements are returned (most imp part of splice and most imp difference between slice and splice)









