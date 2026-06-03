// objects concept in js, in js mostly everything is an object.
// js is kind of a language that never give up, it keeps searching till end.


function multipleBy5(num){
    return num*5

}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power); // this shows that everything is an object in js.
console.log(multipleBy5.prototype); // this shows that everything is an object in js. 

// function example -

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++ // how will this incrementation of score decide which one from below the (chai) and (coffee) to increment. so it will besolved by using (this.) to recieve the call from whoever is taking the call. (jisne bhi bulaya uska this mai use hoga)
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
    
}

const chai = new createUser("chai", 25) // this wont give output without (new) keyword.
const coffee = new  createUser("coffe", 250)

chai.printMe()
coffee.printMe()




/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/


