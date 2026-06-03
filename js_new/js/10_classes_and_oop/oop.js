// object literal -- means literally an object.

const user = {
    username: "souvik",
    loginCount: 12,
    signedIn: true,

    getUserDetails: function(){
        //console.log("got user details from database");
        //console.log(`username: ${this.username}`); // here this helps to know the (console.log) to know that we are talking about this executional area.
        

        
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

// constructor function - 

// const promiseOne = new Promise()  // here (new) is constructor. and it is known as (new) cuz here we want new instance, we dont want to effect previous instance and fucntions. 
// const date = new date()  // here (new) keyword is acting as constructor. and (new) keyword is used to help to reduce the wrong code, improper code and overwrite of codes.


// constructor example -

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this
}

const userOne = new User("souvik", 12, true); // so here (new) keyword is used to help to reduce overwrite of codes.
const userTwo = new User("das", 16, false);
console.log(userOne);
console.log(userTwo);

