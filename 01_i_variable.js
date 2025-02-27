//Variable🚩
//Variable is a storage location in memory where we can store a value and use it as a part of any expression.
//Variable is defined in 3 keyword i.e. "var", "let", "const".

//🔔Difference between "var" "let" "const".
//🎁"var"
//var is used to define function scope variable.
//var allows initialization, declaration, assigning, shadowing and hoisting.
//📌NOTE: Don't use "var" because it doesn't maintain block scope only maintain function scope>
//        function scope: It means if the var is declared inside function then it can access
//                        only within the function.
//        block scope: It means if the variable is declared using "var" then it can access inside block scope,
//                     as well as outside block scope. so it's not good, that's why now-a-days evenrybody prefer "let" and "const",
//                     because "let" and "const" is used to define block scope they can access only within the block not outside block.

//🕑Example: "var" define in function scope
function sum() {
    var a = 20;
    var b = 30;
    return sum = a + b;
}
console.log(sum());         //💥Output: 50
var c = a - b;
console.log(c);          //💥output: Error "a is not defined"


//🕑Example: "var" defined in block scope
function multiply() {
    if (true) {
        var x = 100;
    }
    console.log(x);              //💥Output: 100
}
multiply();

//"let" & "const" defined in block scope
function divisionFunc() {
    if (true) {
        let z = 200;
    }
    // console.log(z);           //💥Output: Error ("z" is not defined) same for "const"
}
divisionFunc();

//🕑Example: block scope
if (true) {
    var y = 300;
}
console.log(y);         //💥Output: 300

if (true) {
    let p = 300;
}
console.log(p);         //💥Output: Error p is not defined

if (true) {
    const t = 300;
}
console.log(t);         //💥Output: Error t is not defined
//Example:
var empId = 78569
empId = 3659
console.log(empId);     //💥output-3659

//🎁shadowing
//shadowing is the process of re-declaring and initializing the same name identifier within the scope i.e.
//called shadowing. it allows only "var" keyword.
//Example:
function f3(){
    if(true){
        var x = 5;
        var x;
        x = 20;
        console.log(x);
    }
}
f3();

//🎁hoisting  (Best Explained in file 01_ii_hoisting.js👌)
//hoisting is a mechanism in JS where variable and function declaration are moved to top of their scope,
//before the code execute.
//Example
"use strict"
var myName;
function f1(){
    myName = "Nikhil"
    console.log(myName);   //💥output-Nikhil
}
f1();
//OR
"use strict"
function f2(){
    myEmp = "developer";
    console.log(myEmp);
    var myEmp;
}
f2();          //💥output-developer

//🎁"let"
//"let" is used to define the block scope variable.
//If the variable is declared or initialized in a block scope within the function, that variable's value
//can access only within the block scope that variable can't access out of block scope.
//"let" allows initializaion, declaration and assigning.
//"let" doesn't allow shadowing and hoisting.
//Example:
let userId ="nikhil6032"
userId = "niil6032"
console.log(userId);   //💥output-niil6032

//🎁"const"
//"const" is used to define block scope variable.
//"const" allows only initialization.
//"const" doesn't allow declaration, assigning, shadowing and hoisting.
//"const" is constant once we declared value then later we can't change value. whereas "let" & "var" allow
//to change later.
//Example:
const myCar ="ferrari"
myCar = "audi"
console.log(myCar);    //💥output-error
//OR
const myBike = "splendor"
console.log(myBike);   //💥output-splendor


//Example:
var accountId = 6032;
let accountName = "nikhil6032";
const accountPwd = "Happy@1222";
instaId = "arya236"
console.table([accountId, accountName, accountPwd, instaId]);
//💥output👇
// ┌─────────┬──────────────┐
// │ (index) │ Values       │
// ├─────────┼──────────────┤
// │ 0       │ 6032         │
// │ 1       │ 'nikhil6032' │
// │ 2       │ 'Happy@1222' │
// │ 3       │ 'arya236'    │
// └─────────┴──────────────┘

//🔔NOTE: variable re amey to jemiti hou value assign karidauchey, not only variable but also 
//        other javascript code, but taku final analyse/check nkaruchi "NodeJS" whether the written code
//        is correct or not if correct then "NodeJS" execute the code orelese return error.
//       "NodeJS" is the engine of JavaScript because "NodeJs" checks all code of javascript.