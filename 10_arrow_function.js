// Before learning arrow function 1st we need to understand about "this" object.

//🚩"this":🚩 "this" keyword is used to return current context and it refers to object.
//"this" return different value because it depends on where it is placed.
//it returns current context in 2 situation:
//1: if inside an object used a simple function and inside that function used "this" then it returns current context.
//2: it returns current context if the variable is defined globally that means variable is declared outside the function.

//it returns window object in 3 situation:
//1: suppose direct you are printing "this" using console.log(this).
//2: inside an object if you define a arrow function and use "this" inside that arrow then it returns window object.
//3: when define "this" inside a normal function then it returns window object. 

const myBio = {
    username: "Nikhil",
    price: 399,
    welcomemsg: function(){
        console.log(`Helo ${this.username} welcome to our website`);
        console.log(this);
    }
}
myBio.welcomemsg();
console.log(this);

//Returing window object(global object).
function f1(){
    console.log(this);
}
f1();

//When "this" define inside arrow function and access the variable value then it returns {} undefined.
//if you direct print "this" then it is returning {} empty object.
const myJob = () => {
    let profile = "React JS";
    console.log(this.profile);
    console.log(this);
}
myJob();

//********************************************************************************************** */

//🚩Arrow Function🚩
//Example:
//👉 When use {} callibraces in arrow function then we must use "return".
//👉 When use () parenthesis in arrow function then no need to use "return" only put result inside that parenthesis.
//   And this () parenthesis technique mostly used in React.

//👉 Use {} in Arrow Function
const myNum = (num1, num2) => {
    return num1 + num2;
};
console.log(myNum(8, 10));


//👉 Use () in Arrow Function (Mostly used this technique in REACT JS)
const myScore = (score1, score2) => (
    score1 + score2
    );
console.log(myScore(50, 70));


//If there is 1 line statement in "return" then no need to use {} and return.
const myRollNum = (num5, num6) => num5 + num6;
console.log(myRollNum(100, 200));

//OR
const myValue = (num3, num4) => {
    console.log(num3 + num4);
}
myValue(20, 30);

//When use object inside arrow function keep it in () parenthesis.
const myPoint = (point1, point2) => (
    {userName : "nikhil"}
    );
console.log(myPoint(8, 9));


//🚩IIFE Function (Immediately Invoked Function Expression)🚩
// Sometimes we have to face problem from global scope pollution(like global scope valriable or any other),
// so to avoid this pollution we need to use IIFE Function. Also IIFE function immediately execute the function.
// IIFE function takes 2 parenthesis()(), 1 is for function declaration and another one is for function execution.

//Simple Function (Named IIFE)
(function myOrg(){
    console.log("Hello World");
})();
 
//Arrow Function (Unnanmed IIFE)
(() => {
    console.log("Hello JS");
})();

//Arrow function using parameter and argument
((param) => {
    console.log(`Connected to ${param} user`);
})("Nikhil");


