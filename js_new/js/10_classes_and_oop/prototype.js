// (.trim().length) vs (.truelength) 


// let myName = "souvik    "

// console.log(myName.trim().length); // this (.trim()) will also give us the true length of the string including extraa spaces but there is an other method of (true) which is more efficient.

// so we want a method of (.truelength) which is more efficient and good code.

let anotherUsername = "souvik    "

String.prototype.trueLength = function(){
    console.log(`${this}`); // jisne call kiya hoga uske liye use hoga. (this) ka matlab jis.
    console.log(`true legth is: ${this.trim().length}`);
    
    
    
}

anotherUsername.trueLength()
"vipul".trueLength()
"abhishek".trueLength()

// creating our own properties in any object  -

let myHeros = ["thor", "deadpool"]


let heropower = {

}

Object.prototype.souvik = function(){ // through this we have created our own propeties in the object.
    // console.log(`souvik have all the heros power`);

    
}

Array.prototype.heysouvik = function(){
    // console.log(`other heros have souvik power??`);
    
}

// heropower.souvik()
// myHeros.souvik() // even (myheros) the array, in that we can add our own property. so it works with array too. so array works with array.
// myHeros.heysouvik() // this is from an object so it can have created properties.
// heropower.heysouvik() // but this is from an object and getting to array so it cant have that top hierarchy.



// inheritance --

// this one is old style, not used mostly nowadays

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}


const TASupport = {
    makeAssignment: 'js assignment',
    fullTime: true,
    __proto__: TeachingSupport // (__proto__) is used to link one object to another.
}


// even we can link objects outside the functional scopes. 

Teacher.__proto__ = User // now even teacher can also access properties of user.

// modern syntax -- 

Object.setPrototypeOf(TeachingSupport, Teacher) // modern syntax of inheritance




