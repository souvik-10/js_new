// Arrow example


const user = {
    username: "souvik",
    price: 999,


    welcomeMessage: function(){
        // console.log(`${this.username}, welcome to the website`) // this keyword is used for declaring values from this block only 
        // console.log(this) //it wil give you full detail of the current context of components inside the block and the changes made also
        
    }


}
  
user.welcomeMessage()
user.username = "john"
user.welcomeMessage()

// console.log(this) // it will give an empty set as there is no context in this global scope

// function example of this

// function chai() {
//     // let username = "souvik"
//     // console.log(this.username) // it will give undefined value cuz (this) can only be used inside the object 
//     // console.log(this) // it will print all the protoypes and all in this fn
    
// }
// chai()

// example 

// const chai = function () {
//     let username = "souvik"
//     console.log(this.username) // it will give undefined value cuz (this) can only be used inside the object 
    
// }
// chai()

// use of arrow and this

const chai = () => { // (=>) this is arrow 
    let username = "souvik"
    console.log(this) // difference bw normal fn and this arrow fn is that (this) does not work in arrow fn
    
}
// chai()

// all about arrow 

// () => denotes arrow

// Basic arrow function ----

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(2, 8))

// implicit return ----


// const addTwo = (num1, num2) => num1 + num2 // implicit means to just assume without writing (return) 
// console.log(addTwo(2, 8))


// another easy and must use way of implicit return 

// const addTwo = (num1, num2) => (num1 + num2) // implicit means to just assume without writing (return)
const addTwo = (num1, num2) => ({username: "souvik"}) // must use (), mostly used in react 
console.log(addTwo(2, 8))
















