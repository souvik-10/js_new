const score = 400
// console.log(score)

const balance = new Number(100) // declarating a number manuually
// console.log(balance)

// console.log(balance.toString())
// console.log(balance.toString().length)

// console.log(balance.toFixed(2)) // to set decimal points;

const otherNumber = 123.889

// console.log(otherNumber.toPrecision(4)) // to set the length of the number


const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')) // to set the number format based on locale(indian number format)



// ************************************  Maths ************************************

// console.log(Math) // Math is a built-in object that has properties and methods for mathematical constants and functions.

// console.log(Math.abs(-2)) // absolute value
// console.log(Math.round(2.4)) // rounds to nearest integer
// console.log(Math.ceil(2.4)) // rounds up to nearest integer
// console.log(Math.floor(2.4)) // rounds down to nearest integer

// console.log(Math.min(2, 5, 6, 4, 9,3)) // returns the minimum value
// console.log(Math.max(2, 5, 6, 4, 9,3)) // returns the maximum value


console.log(Math.random()) // returns a random number between 0 and 1
console.log((Math.random() * 10) + 1) // returns a random number between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // returns a random number between min and max (inclusive






















