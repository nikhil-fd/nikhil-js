//🚩Arrow function:
// Before learning arrow function 1st we need to understand about "this" object.

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


//4️⃣IIFE function using anonymous function.
(function(car1,car2){
    let totalPrice = car1 + car2;
    console.log(totalPrice);
})(5999,4001);                  //💥Output: 10000

//Using "return" statement
const ownCar =  (function(car1,car2){
    let totalPrice = car1 + car2;
    return totalPrice;
})(5999,4001);
console.log(ownCar);           //💥Output: 10000


//5️⃣IIFE function uses "return" statement
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


//🎁Difference between Regular function and Arrow function?
//👉The main difference is in Regular function we can use "this" keyword because it returns 
//window object/global object such as setTimeout, setInterval, clearTimeout, clearInterval.

//👉whereas in Arrow function we can't use "this" keyword because it returns empty object{}.

//👉Constructor function can use Regular function and it returns result.
//👉Constructor function can not use Arrow function and it returns error.

//Example: Regular Function use "this"
function arrFunc(){
    console.log(this);         //💥Output: setTimeout, setInterval, clearTimeout, clearInterval 
}
arrFunc();


//Example: Arrow function uses "this"
const arrFunc2 = () => {
    console.log(this);         //💥Output: {}
    
}
arrFunc2();



