// Date

let myDate = new Date()
// // // console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// // // console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleDateString())
// // // console.log(myDate.toLocaleTimeString())
// // // console.log(myDate.toJSON())
// console.log(typeof myDate) // object

// let myCreatedDate = new Date(2025, 6, 30, 5, 30 )
// let myCreatedDate = new Date("2025-07-30")
let myCreatedDate = new Date("07-30-2025")
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime()) // timestamp

// console.log(Math.floor(Date.now()/1000)) // in seconds

let newDate = new Date()
console.log(newDate)
console.log(newDate.getFullYear())
console.log(newDate.getMonth())
console.log(newDate.getDate())

newDate.toLocaleString('default', {
    weekday : "long",
})




















