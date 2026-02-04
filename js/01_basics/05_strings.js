const name = "souvik"
const repoCount = 10

// console.log(name +  repoCount + " value") // old way of concatenation(adding strings)

console.log(`hello my name is ${name} and my repo count is ${repoCount}`) // new way of concatenation

const gameName = new String('souvik-valo-com') // another way of creating strings

// console.log(gameName[0]) // accessing first character of string

// console.log(gameName.__proto__) // accessing prototype of string object

// console.log(gameName.length) // length of string

// console.log(gameName.toUpperCase()) // converting string to uppercase

console.log(gameName.charAt(2)) // accessing character at index 2
console.log(gameName.indexOf('u')) // accessing index of character 'u'

const newString = gameName.substring(0, 4) // extracting substring from index 0 to 4
console.log(newString)

const anotherString = gameName.slice(-9, 4) // extracting substring from index -9 to 4
console.log(anotherString)

const newStringOne = "    souvik    "
console.log(newStringOne)
console.log(newStringOne.trim()) // removing emptyspaces from both ends of string;

const url = "https://souvik.com%20name=souvik"
console.log(url.replace('%20', '-')) // replacing %20 with -

console.log(url.includes('souvik')) // checking if string includes 'souvik' or not

console.log(gameName.split('-')) // splitting string into array based on '-'




















