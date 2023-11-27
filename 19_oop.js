//Object Literal: "this" concept
const userDetails = {
    userName: "niil",
    signedIn: true,
    loginAttempt: 5,
    saluteMsg: function(){
        console.log(this.userName);
        // console.log(userDetails.userName);
        //👉when we are accessing object properties inside object at that time we can use "this"
        //  Although instead of "this" we can use same object_name also, but "this" mostly do refer.
    }
}
console.log(userDetails.saluteMsg());
console.log(this.loginAttempt);
//Output: undefined
//👉Above here we are accessing object properties using "this" keyword in outside object so,
//  in this situation "this" can't access it returns "undefined". Here we use object_name.
console.log(userDetails.loginAttempt);
//Output: 5


//🚩"new" -- constructor function
//👉"new" is known as constructor function.
//👉"new" creates a new instance(like new copy of data) or can say "new" creates a new empty object.
//👉"new" creates a copy of data so that in future or later noone can't override these data.

//Example:
function userData(username, age, skill){
    this.username = username;
    this.age = age;
    this.skill = skill;
    //In above all, we kept all parameter data inside an object by using "this" because "this" keyword is a object.
    //We can keep object "key" name same as function property.
    // console.log(this);

    return this;
}
//const userOne = userData("nikhil", 30, "sap");
//  In above if we not create "new" instance or "new" object then later on these value can be override.
//  So, if we create new instance "new"/"new" object then "new" creates a copy of that data,
//  so that nobody can override that data with a new value.

const userOne = new userData("nikhil", 30, "sap");
//Above here we created a "new" instance or "new" object so these data can't be override/replace.
const userTwo = new userData("Hitesh", 35, "js");
console.log(userOne);
console.log(userTwo);

