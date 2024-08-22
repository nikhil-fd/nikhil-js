//🚩Arrow function:
// Before learning arrow function 1st we need to understand about "this" object.

//🚩"this":🚩 
//👉"this" keyword is used to return current context and it refers to object.
//👉"this" refers to object and it returns current context.
//👉 current context means inside callibrace whatever context(context means key's value) is their i.e. called current context.
//👉"this" object can have different values depends on where it is placed.
//👉"this" can use only inside object, if you use inside function then it unable to return current context.

//🟢"this" returns current context in 1 place:👇
//1️⃣ Inside object if there is a simple function defined so in that simple function if we use "this" it returns "current context",
//    instead of simple function if we use arrow function then it returns window object not current context.

//If the variable is declared globally that means outside the function here it returns "current context".❌(but in real time it not true.)

//Place1️⃣
const myBio = {
    username: "Nikhil",
    price: 399,
    welcomemsg: function(){
        console.log(`Helo ${this.username} welcome to our website`);     //💥Output: Helo Nikhil welcome to our website
        console.log(this);                                              //💥Output: { username: 'Nikhil', price: 399, welcomemsg: [Function: welcomemsg] }
    } 
}
myBio.welcomemsg();                        

//🔴"this" returns window object on browser in 3 place:
//1️⃣ suppose direct you are printing "this" using console.log(this).
//2️⃣ inside an object if you define a arrow function and use "this" inside that arrow then it returns window object.
//3️⃣ when define "this" inside a normal function then it returns window object. 


//Place1️⃣
console.log(this);                   //💥Output: window object

//Place2️⃣
const marvelHero = {
    picture: "spider man",
    id: 8968,
    moveFunc: () => {
        return `${this.picture}`
    }
}
console.log(marvelHero.moveFunc());          //💥Output: undefined

//Place3️⃣
//Returing window object(global object).
// If you use "this" inside a simple function, then in node enviorment "this" returns some method and global object.
// method like setTimeout, clearTimeout, setInterval, clearInterval and global object like fetch, navigator etc.
function f1(){
    console.log(this);
}
f1();                            //💥Output: window object


//🔔When "this" define inside arrow function and access the variable value then it returns {} undefined in node enviornment.
//  if you direct print "this" then it is returning {} empty object in node enviornment.
const myJob = () => {
    let profile = "React JS";
    console.log(this.profile);               //💥Output: undefined
    console.log(this);                      //💥Output: {}
}
myJob();


//🔔NOTE:
//1️⃣If you use "this" object in browser console.log then it returns window object.
//goto browser console-and then type below-
console.log(this);       //💥Output: Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}

//2️⃣If you use "this" object in node enviornment(Node.js) console.log then it returns empty object {}.
console.log(this)
//goto cmd/bash--node 07_object.js       💥Output: {}

//3️⃣If you use "this" inside a simple function, then in node enviorment "this" returns some method and global object.
//   method like setTimeout, clearTimeout, setInterval, clearInterval and global object like fetch, navigator etc.
function myHero(){
    console.log(this);
}
myHero();                   //💥Output: global object and some methods


//********************************************************************************************** ****************/

//🚩Arrow Function🚩
//Example:
//👉 When use {} callibraces in arrow function then we must use "return" keyword, if you are returning any result like(+,-,/,*,%).
//                if you are not returning any result, only printing any value then no need to use "return" keyword, direct write console.log after {} callibrace.
//👉 When use () parenthesis in arrow function then no need to use "return" keyword, if you are returning any retult like(+,-,/,*,%),
//    only put result inside that parenthesis.  And this () parenthesis technique mostly used in React..
//    if you are not returning any result, only printing any value then no need to use "return" keyword, direct write console.log after () parenthesis.
//🙏NOTE: "return" do use, when you are returning any result like performing +, -, *, /, %, arithmatic operation,
//          after this operation performeed then we get a result so "return" keyword returnig this result. 

//🎁Explicity return
//  You have to use "return" keyword that is called explicity return.
//👉 Use {} in Arrow Function
const myNum = (num1, num2) => {
    return num1 + num2;
};
console.log(myNum(8, 10));            //💥Output: 18


//👉 Use () in Arrow Function (Mostly used this technique in REACT JS)
const myScore = (score1, score2) => (
    score1 + score2
    );
console.log(myScore(50, 70));          //💥Output: 120


//🎁Implicity return:
//If there is 1 line statement in "return" then no need to use {} and return that is called as implicity return.
const myRollNum = (num5, num6) => num5 + num6;
console.log(myRollNum(100, 200));                //💥Output: 300

//OR
const myValue = (num3, num4) => {
    console.log(num3 + num4);
}
myValue(20, 30);                            //💥Output: 50

//When use object inside arrow function keep it in () parenthesis.
const myPoint = (point1, point2) => (
    {userName : "nikhil"}
    );
console.log(myPoint(8, 9));            //💥Output: undefined


//🚩IIFE Function (Immediately Invoked Function Expression)🚩
// Sometimes we have to face problem from global scope pollution(to remove global scope valriable or any other),
// so to avoid this pollution we need to use IIFE Function. Also IIFE function immediately execute the function.
// IIFE function takes 2 parenthesis()(), 1 is for function declaration and another one is for function execution.

//🔔NOTE:
//Suppose application ON karu karu amaku gote database file immediately execute karibar achi in this type of situation,
//we can use IIFE function, simple function also can execute immediately but when the variable is decalred globally,
//at that time simple function can't execute immediately or it can take some time to execute in this situation IIFE function
//avoid global scope and gets execute immediate.

//Simple function used without IIFE
function oracleDb(){
    console.log("Connection Succeed");
}
oracleDb();           //💥Output: Connection Succeed (same execute immediately like IIFE if variable declared globally then here problem gets occur)

//1️⃣Simple Function (Named IIFE)
(function myOrg(){
    console.log("Hello World");
})();                               //💥Output:  Hello World
 
//2️⃣Arrow Function (Unnanmed IIFE)
(() => {
    console.log("Hello JS");
})();                                 //💥Output: Hello JS

//3️⃣Arrow function using parameter and argument in IIFE
((param) => { 
    console.log(`Connected to ${param} user`);
})("Nikhil");                                          //💥Output: Connected to Nikhil user


//4️⃣IIFE function uses "return" statement
//🧠NOTE: when use "return" statment in IIFE function then we need to store IIFE functin in a variable.
const addition = (function(num50, num100){
    let result = num50 + num100;
    return result;
})(100,500);
console.log(addition);             //💥Output: 600

//IIFE using Arrow function with "return" statment.
const sumNum = ((val1, val2) => {
    let total = val1 + val2;
    return total;
})(900, 800);
console.log(sumNum);                //💥Output: 1700 




