// about singleton object

// const tinderUser = new Object() // creating object using object constructor (singleton object)
const tinderUser = {} // creating object using object literal syntax (not singleton object)

tinderUser.id = "123abc"
tinderUser.name = "Souvik"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Souvik",
            lastname: "Das"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

// console.log(regularUser?.fullname?.userfullname?.firstname) // optional chaining

// mreging two objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}


// const obj3 = {obj1, obj2} // wrong way of merging two objects
const obj3 = {...obj1, ...obj2, ...obj4 } // right way of merging two objects using spread operator (best way of merging two objects)
// const obj3 = Object.assign({}, obj1, obj2, obj4) // another way of merging two objects using Object.assign method ({} is used to create a new empty object between obj1 and obj2) not used much

// console.log(obj3) 

// values from data base or api

const users = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
]

users[1].email // accessing email of second object in array of objects ([] is used to access array element and . is used to access object property)

// console.log(users[1].email)

// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser)) // convert whole object an array with keys and values

// console.log(tinderUser.hasOwnProperty('isLoggedIn')) //used for checking if the object has that mentioned property or not

// de - structuring of object 

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "souvik"
}

// course.courseInstructor // for accessing keys, but using it everytime will be dirty coding 

// good way of accessing keys in object

// const{courseInstructor} = course
// console.log(courseInstructor)


const {courseInstructor: tutor} = course // destructuring of object, we can change the key name as whatever we want 
console.log(tutor)

// react example de- structuring

// const navbar = ({company}) => {

// }

// navbar(company = "souvik")
//


// API(backend values se work proceed karna ) and JSON

// {
//     "name": "souvik",
//     "Coursename": "js in hindi",
//     "price": "free"
// } // json language example


// json can be in array format also

[
    {},
    {},
    {}
] 
//
























