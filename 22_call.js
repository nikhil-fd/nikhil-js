//🚩"call()" method -- Time Stamp: 8:02:18
//👉"call" is a method of an object, that substituting(bodalaiba) another object for the current object.
//👉When "this" defined inside a child function and that child function is defined inside a parent function.
//  at that time "this" keyword returns a global execution context(window object) in window enviornment, but
//  same thing in node enviornment returns a empty object{}.

//👉call() method hold the reference of innerfunction with it's own "this" keyword, if we will not mention,
// "this" keyword inside call method then call method can not hold the reference of inner function.
// The call() method holds the innerfunction reference because the outerfunction execution to be complete.
// because after innerfunction got executed its execution context will be reomove
// as per standard rule of call stack but here outerfunction will not be execute thats why
// call method holds the reference of innerfunction so that outer function can be execute.

function createBoardingPass(boardingpass) {
    this.boardingpass = boardingpass
}

function userFlightImmigrationProfile(username, boardingpass, checkin) {
    this.username = username,
        createBoardingPass.call(this, boardingpass),
        this.checkin = checkin
}
const userRohit = new userFlightImmigrationProfile("rohit", "delhi", 9)
console.log(userRohit);


//📌SUMMARY EXPLAIN:
//here we have a function i.e. userFlightImmigrationProfile maintain username and checkin
//and boardingpass maintained in suppose in usa in a separate function but we want to acces
//that parameter i.e. boardingpass in our function.
//so here we need to hold the reference of innerfunciton with call method.
//that call method can hold the reference of innerfunction by explicitly "this" keyword.
//Why we nee to hold innerfuncion?
//Here inside parent function(userFlightImmigrationProfile) a child function(createBoardingPass) is defined so,
//in call stack 1st parent function's execution context gets create then above it child function execution contex
//will be create so first child function execition context will be execute then after execution its execution context
//will be remove, so here if innerfunction execution context will be remove then outerfunction execution can not be happened,
//so in order to executed the outerfunction we need to hold the reference of inner function using
//bind() method and bind() method taskes its own "this" keyword for holding the reference.
