//🚩Arrow function:
// Before learning arrow function 1st we need to understand about "this" object.

//🚩"this":🚩 "this" keyword is used to return current context and it refers to object.
//👉"this" refers to object and it returns current context.
//👉 current context means inside callibrace whatever context(context means value) is their i.e. called current context.
//👉"this" object can have different values depends on where it is placed.
//👉"this" can use only inside object, if you use inside function then it unable to return current context.

//"this" returns current context in 1 place:👇
//1️⃣Inside object if there is a simple function defined so in that simple function if we use "this" it returns "current context",
//  instead of simple function if we use arrow function then it returns window object not current context.

//If the variable is declared globally that means outside the function here it returns "current context".❌(but in real time it not true.)

//"this" returns window object in 3 situation:
//1: suppose direct you are printing "this" using console.log(this).
//2: inside an object if you define a arrow function and use "this" inside that arrow then it returns window object.
//3: when define "this" inside a normal function then it returns window object. 

//Place1️⃣
const myBio = {
    username: "Nikhil",
    price: 399,
    welcomemsg: function(){
        console.log(`Helo ${this.username} welcome to our website`);
        console.log(this);
    }
}
myBio.welcomemsg();                        //💥Output: Helo Nikhil welcome to our website
console.log(this);                         //💥Output: 

//Returing window object(global object).
function f1(){
    console.log(this);
}
f1();                            //💥Output: 

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
//👉 When use {} callibraces in arrow function then we must use "return" keyword, if you are returning any result like(+,-,/,*,%).
//                if you are not returning any result, only printing any value then no need to use "return" keyword.
//👉 When use () parenthesis in arrow function then no need to use "return" only put result inside that parenthesis.
//   And this () parenthesis technique mostly used in React..
//🙏NOTE: "return" do use, when you are returning any result like performing +, -, *, /, %, arithmatic operation,
//          after this operation performeed then we get a result so "return" keyword returnig this result. 

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


