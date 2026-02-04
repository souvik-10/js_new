const marvel_heros = ['spiderman', 'ironman', 'thor']
const dc_heros = ['superman', 'batman', 'flash']

// marvel_heros.push(dc_heros)

// console.log(marvel_heros)
// console.log(marvel_heros[3][1]) // accessing batman from nested array // bad practise of accessing

// concat
// const all_heros = marvel_heros.concat(dc_heros) // merging two arrays
// console.log(all_heros) // good practise of merging two arrays

// spread operator
const all_new_heros = [...marvel_heros, ...dc_heros] // merging two arrays
// console.log(all_new_heros) // good practise of merging two arrays in another way using spread operator 


// flat
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // flat method is use

console.log(real_another_array) // flattening an array using flat method
//

console.log(Array.isArray("souvik")) // to check whether the given variable is an array or not
console.log(Array.from("souvik")) // to convert a string into an array // used in data scrapping
console.log(Array.from({name : "souvik"}) )// to convert an object into an array // used in data scrapping; // it will return an empty array as the object does not have any index based properties // interesting use case

//

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) // to convert a list of items into an array)








