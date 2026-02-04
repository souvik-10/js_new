// very important concept in js ar objects and Events // very very important 

// what is object?
// object is a collection of key value pair
// in other programming language object is known as "dictionary" or "map"
// in js object is denoted by curly braces {}

// Events in js are actions that happen in the system you are programming, which the system tells you about so your code can respond to them as needed.
// example: when a user clicks a button, an event is generated. You can write code to respond to that event, such as displaying a message or changing the button's color.
// what is event?
// when a user or browser does something then that is called event
// click, scroll, mouseover, mouseout, keypress etc are some events


// singleton object is created using constructor in which only one object is created and when you create object in other way then it is called multiple object 
// when we create object as literals then no singleton object is created
// when we create object using constructor then singleton object is created

//Object.create // creates singleton object

// object literal

const mySym = Symbol("key1") // declaring a symbol

const JsUser = {
    name: "Souvik Das",
    "fullname": "Souvik Das",
    [mySym]: "mykey1", // symbol as key
    age: 20,
    location: "bangalore",
    email: "souvik@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
}

// console.log(JsUser.email) // dot notation
// console.log(JsUser["email"]) // bracket notation best practice to use dot notation
// console.log(JsUser["fullname"]) // bracket notation
// // console.log(JsUser."fullname") // this will give error so we use bracket notation when key has space
// console.log(JsUser[mySym]) // accessing symbol key
// console.log(typeof JsUser[mySym]) // symbol
// //

JsUser.email = "souvik.das@gmail.com" // updating email
// Object.freeze(JsUser) // freezing the object so that no one can change it
JsUser.email = "sd@gmail.com" // this will not change the email
// console.log(JsUser) // email will be same as before freezing


// functions 

JsUser.greeting = function(){ // adding method to object
    console.log("Hello Js User")
    
}

JsUser.greetingTwo = function(){ 
    console.log(`Hello Js user, ${this.name}`) // for name reference we use this keyword

    
}
 
// console.log(JsUser.greeting)
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())













