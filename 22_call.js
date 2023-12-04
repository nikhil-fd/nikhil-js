//🚩"call" method -- Time Stamp: 8:02:18
//👉"call" is a method of an object, that substituting(bodalaiba) another object for the current object.
//👉When "this" defined inside a child function and that child function is defined inside a parent function.
//  at that time "this" keyword returns a global execution context(window object) in window enviornment, but
//  same thing in node enviornment returns a empty object{}.
function setUserName(username){
    this.username = username;
} 

function createUserName(username, email, password){
    setUserName.call(this, username);
    //"call" holds the reference of parent function.if we not hold after execution the execution context gets deleted as we learned.
    this.email = email;
    this.password = password;
}

const userData = new createUserName("niil6032", "niil@google.com", "happy@123");
console.log(userData);