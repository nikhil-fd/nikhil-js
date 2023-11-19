//🚩If--else statment/condition🚩

//👉syntax: if statement
// when this if condition will get true then it will enter into scope, orelse if condition false then it won't enter into scope.
// Remember 1 thing always think in condition whether we are doing questioning the value in yes or no, yes means true and no means false.
// In condition we always check value using these operator   "==", "===", "<", ">", "<=", ">=", "!=", "!==","true","false"
if (condition) {

}

//example:
if(2 == "2"){
    console.log("executed");
}
if(3 != 4){
    console.log("Number 3 is not equal with number 4");
}

//👉Syntax: if-else condition
// "if-else" checks whether the condition is true then the code execute in if scope,
// and if the condition is false then the code is executed in false scope.
// Example1:
const temperature = 32;
if(temperature < 30){
    console.log("Weather is Cold");
}else{
    console.log("weather is Hot");
}

//Example2:
// Here result can not access in "else" condition because result decalared in const keyword,
// inside a scope so it can access only within the scope.
const myScore = 250;
if (myScore > 200) {
    const result = "topper";
    console.log(`I am ${result}`);
} else {
    console.log(`I am not ${result}`);
}

//👉Syntax: if()-else if()-else if()-else
// when we are checking more than 1 condition then use this statement.
//Example1:
const mySalary = 25000;
if(mySalary < 10000){
    console.log("I can't go for Goa tour");
}else if(mySalary > 20000){
    console.log("I can go for Goa tour");
}else{
    console.log("Salary not expected, you missed it");
}

//Example2:
const haveLoggedIn = true;
const haveCreditCard = true;
const haveLoggedInEmail = false;
const haveLoggedInGoogle = true;
if(haveLoggedIn && haveCreditCard){
    console.log("You are eligible for purchase");
}

if(haveLoggedInEmail || haveLoggedInGoogle){
    console.log("You can get discount");
}else{
    console.log("you do't have credential");
}


//🚩Switch-Case Statement🚩
// A Switch is execute only the block of statment that matches the given value or expression
// "break": break is used to terminate the current blcok which is matched according to the condition and will not check ahead.

//👉Syntax:
switch (key) {
    case value:
        
        break;

    default:
        break;
}

//Example1:
const month = "november";
switch(month){
    case "august":
        console.log("This is not birthday month");
        break;
    case "september":
        console.log("This is not birthday month");
        break;
    case "october":
        console.log("This is not birthday month");
        break;
    case "november":
        console.log("This is birthday month");
        break;
        default:
            console.log("choose your birthday month");
            break;
    
}

//🚩Truthy & Falsy Value🚩
//Ethi amey condition re kichi bhi compare karuney(like myEmail == value or myEmail < value or myEmail > value) phir bhi yeh true execute heuchi jehetu,
// "myEmail" variabl re amey kichi value put karichey so JS assume kari nauchi jey kichi value achi maney true eita.
// Jodi "myEmail" value remove karideba empty string kari deba tahele eita falsy heijibo execute karibo false statement ku. 

//👉false values---false, 0, -0, Bigint 0n, "", null, undefined, NaN
//👉truthy values---"false", "0", true, " ", {}, [], function(){}

//Example:
const myEmail = "nrd6032@google.com";
// const myEmail = 0;
if(myEmail){
    console.log("Got the mail id");
}else{
    console.log("Didn't get the mail id");
}


//👉How to check Array is empty or not?
const myArr = [];
if(myArr.length === 0){
    console.log("Array is empty");
}else{
    console.log("Array has Element");
}


//👉How to check Object is empty or not?
const myObj = {};
if(Object.keys(myObj).length === 0){
    console.log("Object is empty");
}else{
    console.log("Object have key and value");
}


//🚩Nullish Coalescing operator (??): null undefined🚩
let age;
//Here it takes 1st value i.e. 10
age = 10 ?? 20;
//Here below it takes value 130 not take null
age = null ?? 130;
//Here below it takes value 55 not take undefined
age = undefined ?? 55;
//Here Below it takes 1st value only i.e. 25
age = null ?? 25 ?? 33;
console.log(age);


//🚩Ternary Operator🚩
//It is the shortest way of if-else condition.
//Here we can write if-else condition in one line.
//It is the only operator in JS it takes 3 operand.
//Syntax:
(condition)?"true_statement":"false_statement"

//Example1:
const myAge = 25;
console.log((myAge > 18)?"eligible for vote":"not eligible");


//Example2:
const myBloodPressure = 220;
(myBloodPressure < 300)? console.log("Pressure is low"):console.log("Pressure is high");

