//🚩Object Literal: "this" concept
//👉"this" refers to object and it returns current context.
//👉"this" object can have different values depends on where it is placed.
//"this" returns current context in 2 place:👇
//1️⃣If the variable is declared globally that means outside the function here it returns "current context".
//2️⃣Inside object if there is a simple function defined so in that simple function if we use "this" it returns "current context".

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
//  in this situation "this" can't access it returns "undefined". Here we use only object_name.
console.log(userDetails.loginAttempt);
//Output: 5

//****************************************************************************************************************** */

//🚩"new" -- constructor function
//👉"new" keyword is known as constructor function.
//👉"new" keword creates a new instance(like new copy of data) or can say creates a new empty object.
//👉"new" keyword creates a copy of data so that in future or later noone can't override these data.

//Example1:
function userData(username, age, skill){
    this.username = username;
    this.age = age;
    this.skill = skill;
    //👆In above all, we kept all parameter data inside a variable in object by using "this" because "this" keyword creates a object.
    //👆We can keep object "key" name same as function property.
    //👆Here "this" variable binds the declared property to the "new" object (below mentioned).
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

//******************************************************************************************************* */
//🚩instanceOf(): Method

//🚩constructor: Method

//🚩in: Method

//👆About these 3 we can get knowledge from mdn. these are easy not much complicated.

//If we check parent prototype of array i.e. "Object"
//same "string" parent prototype also "Object"
//But "object" parent prototype is "null" ("object" has no parent prototype)
 
