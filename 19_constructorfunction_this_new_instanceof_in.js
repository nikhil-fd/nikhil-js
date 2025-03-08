//🚩"this" concept
//👉"this" refers to object and it returns current context.
//👉"this" object can have different values depends on where it is placed.

//1️⃣When "this" placed insise an object(object literal)
//"this" returns current context in 2 place:👇
//#1❌(may not correct)If the variable is declared globally that means outside the function here it returns "current context".
//#2✅(correct)Inside object if there is a simple function defined so in that simple function if we use "this" it returns "current context".
//👉"this" can access object's properties inside the object/scope, "this" can't access the 
//   object's properties outside the object or outside the scope.

//2️⃣When "this" placed inside constructor.
//In this place "this" refers to the new object being created. 
//Check "this" example in below constructor function.

//3️⃣When "this" keyword stored in variable.
//In this place "this" create empty object.
//Check example below.

//🎁Object Literal: "this" concept
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
console.log(userDetails.saluteMsg());      //💥Output: niil
console.log(this.loginAttempt);           //💥Output: undefined
//👉Above here we are accessing object properties using "this" keyword in outside object so,
//  in this situation "this" can't access it returns "undefined". Here we use only object_name.
console.log(userDetails.loginAttempt);    //💥Output: 5


//🎯Example: "this" creates empty object{}👇
const myObj = this;
console.log(myObj);          //💥Output: {}
this.salary = 5000
this.state = "odisha"
this.country = function(){
    console.log(`Welcome to ${this.state}`);
}
console.log(myObj);             //💥Output: {salary: 5000, state: "odisha", country: [Function (anonymous)]}
myObj.country();               //💥Output: Welcome to odisha


//****************************************************************************************************************** */

//🚩"new"
//👉"new" keyword is known as constructor function.
//👉"new" keword creates a new instance(like create copy of existing data) of an object that has a constructor function.
//👉or we can say "new" keyword creates an empty object{}.
//👉"new" keyword creates a copy of data so that in future or later no-one can't override these data.
//👉if we not use new keyword then the new value will be override with existing value.
//👉constructor function gets call because of "new" keyword.


//************************************************************************************************************************************ */
//Same below constructor function already explained in file-👉07_object.js👈
//so you can skip this topic in 19_this file.

//🎁Constructor Function🎁
//1️⃣In javascript constructor function is used to create multiple object with same properties
//  and mthods.
//2️⃣It acts as a blueprint for object and provides a way to intialize properties when creating an object instance.
//3️⃣We can define constructor function by using "class" and "function" keyword.
//4️⃣When "this" uses inside constructor then "this" refers to the new object being created. 

//👌constructor function is useful for-- 👌
//1️⃣multiple object creation with same properties and methods.
//2️⃣Reusability to maintain DRY principle(Do not Repeat Yourself). means we don't need to define same properties recursively.
//3️⃣Scalability means in large application, constructor function help to maintain consistency and
//  structure by creating a object in standardrized way.

//👌When constructor function calling by the "new" keyword then what action happended?👌
//1️⃣"new" keyword creates an empty object that is called as new instance.
//2️⃣The new object internal "prototype" property is set the same as the prototype of
//   constructor function.
//3️⃣The "this" variable is made to point to the newely created object. The "new" keyword
//  binds the properties that is declared with the "this" keyword, to the new object.

//❌Example:🕑 
//NOTE: Here properties are repeating so it's not good in realtime.
const toyotaCar = {carname: "fortuner", model: 2023, price: "15lacs"}
const tataCar = {carname: "safari", model: 2021, price: "10lacs"}
const mahindraCar = {carname: "scorpio", model: 2024, price: "15lacs"}
console.log(toyotaCar.carname);            //💥Output: fortuner
console.log(tataCar.carname);             //💥Output: safari
console.log(mahindraCar.price);          //💥Output: 15lacs

//✅Example:🕑 
//NOTE: In above example properties are repeating but constructor function do not repeat the code,
//        constructor function uses DRY(Do not Repeat Yourself) Principle.
function cars(carname, model, price){
    this.carname = carname;
    this.model = model;
    this.price = price;
}
const toyotaCars = new cars("fortuner", 2023, "15lacs");
const tataCars = new cars("safari", 2021, "10lacs");
const mahindraCars = new cars("scorpio", 2024, "15lacs");
console.log(toyotaCars.price);            //💥Output: 15lacs
console.log(tataCars.carname);           //💥Output: safari
console.log(mahindraCars.model);        //💥Output: 2024

//🕑Example1:constructor function.👌
//🎯constructor function can be converted into class check -- Example2
function userData(username, age, skill){
    this.username = username;             
    this.age = age;
    this.skill = skill;
    //👆Here username,age,skill are stored in a variable that variable is "this" variable
}
//const userOne = userData("nikhil", 30, "sap");
// const userTwo = userData("Hitesh", 35, "js");
// console.log(userOne);   //💥Output: userData{username: "Hitesh", age: 35, skill: "js"}

//👆In above if we not create "new" instance or "new" object then later on these value can be override.
//  So, if we create new instance "new"/"new" object then "new" creates a copy of that data,
//  so that nobody can't override that data with a new value.

const userOne = new userData("nikhil", 30, "sap");
//👆Above here "new" keyword creates an object with these data and these data can't be override/replace.
const userTwo = new userData("Hitesh", 35, "js");
console.log(userOne);       //💥Output: userData{username: "nikhil", age: 30, skill: "sap"}
console.log(userTwo);      //💥Output: userData{username: "Hitesh", age: 35, skill: "js"}


//🕑Example2: Defined constructor function using "class" declaration/keyword.
class userData{
    constructor(username, age, skill){
        this.username = username;
        this.age = age;
        this.skill = skill;
        return this;
    }
}
const userThree = new userData("manish", 40, "angular")
console.log(userThree);  //💥Output: userData {username: "manish", age: 40, skill: "angular"}

//******************************************************************************************************* */
//🚩instanceOf(): Operator
//instanceOf() operator is used to check the type of an object at runtime.
//It returns boolean value true if an object is an instance of particular class or constructor or object.

//👉Syntax: objectname instanceOf constructor/classname

//💥Example:1
let myDate = new Date()
let myStr = new String()
console.log(myDate instanceof Object);       //💥Output: true
console.log(myDate instanceof Date);        //💥Output: true
console.log(myDate instanceof String);     //💥Output: false

console.log(myStr instanceof Object);      //💥Output: true
console.log(myStr instanceof Date);       //💥Output: false
console.log(myStr instanceof String);    //💥Output: true

//💥Example:2
let myArr = ["virat", "dhoni", "jaddu"]
console.log(myArr instanceof Array);       //💥Output: true
console.log(myArr instanceof Object);       //💥Output: true
console.log(myArr instanceof String);       //💥Output: false

//💥Example:3
//This constructor function may be converted to class declaration.
function CarDetails(brand, model, year){
    this.brand = brand
    this.model = model
    this.year = year
    // return this;       //👈Not mandatory
}
const fourWheeler = new CarDetails("Toyota", "Fortuner", 2020)
console.log(fourWheeler);    //💥Output: carDetails { brand: 'Toyota', model: 'Fortuner', year: 2020 }
console.log(fourWheeler instanceof CarDetails);    //💥Output: true




//🚩constructor(): Method
//constructor method is a special method of a class used to creating and initializing 
//object instance of that class.
//Every class having default constructor because it stores state(value).

//🎯Example:
class userData{
    constructor(username, age, skill){
        this.username = username;
        this.age = age;
        this.skill = skill;
    }
}
const userFour = new userData("manish", 40, "angular")
console.log(userFour);
//💥Output: userData {username: "manish", age: 40, skill: "angular"}



//🚩in: operator 
//"in" operator is used to check whether the particular paroperty is exist/available or not inside
// an object and returns a boolean value, if yes return "true", if not return "false".

//👉Syntax: "propertyname" in objectname
//always keep property name in " "/'' double quote/single quote.

//🎯Example:
const checkProperty = {state: "delhi", population: 85600, capital: "delhi"}
console.log("capital" in checkProperty);   //💥Output: true

//👆About these 3 we can get knowledge from mdn. these are easy not much complicated.

//👌If we check parent prototype of array i.e. "Object"
//👌same "string" parent prototype also "Object"
//👌But "object" parent prototype is "null" ("object" has no parent prototype)
 
