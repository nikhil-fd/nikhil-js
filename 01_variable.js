//Variable🚩
//Variable is a storage location in memory where we can store a value and use it as a part of any expression.
//Variable is defined in 3 keyword i.e. "var", "let", "const".

//🔔Difference between "var" "let" "const".
//🎁"var"
//var is used to define function scope variable.
//you can declare and initialize the variable in any block of a function and this variable's value can access
//it another block in same function.
//var allows initialization, declaration, assigning, shadowing and hoisting.
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

//🎁hoisting
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