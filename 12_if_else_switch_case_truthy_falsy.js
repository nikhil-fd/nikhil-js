//🚩If--else statment/condition🚩

//👉syntax: if statement
// when this if condition will get true then it will enter into scope, orelse if condition false then it won't enter into scope.
// Remember 1 thing always think in condition whether we are doing questioning the value in yes or no, yes means true and no means false.
// In condition we always check value using these operator   "==", "===", "<", ">", "<=", ">=", "!=", "!==","true","false"
if (condition) {

}

//🕑example:
if(2 == "2"){
    console.log("executed");               //💥Output: executed
}
if(3 != 4){
    console.log("Number 3 is not equal with number 4");       //💥Output: Number 3 is not equal with number 4
}

//👉Syntax: if-else condition
// "if-else" checks whether the condition is true then the code execute in if scope,
// and if the condition is false then the code is executed in false scope.
// Example1:
const temperature = 32;
if(temperature < 30){
    console.log("Weather is Cold");
}else{
    console.log("weather is Hot");                //💥Output: weather is Hot
}

//🕑Example2:
// Here result can not access in "else" condition because result decalared in const keyword,
// inside a scope so it can access only within the scope.
const myScore = 250;
if (myScore > 200) {
    const result = "topper";
    console.log(`I am ${result}`);               //💥Output: I am topper
} else {
    console.log(`I am not ${result}`);           //💥Output: empty
} 

//🎁Syntax: if() else, else if(), else
// when we are checking more than 1 condition then use this statement.
//🕑Example1:
const mySalary = 25000;
if(mySalary < 10000){
    console.log("I can't go for Goa tour");
}else if(mySalary > 20000){
    console.log("I can go for Goa tour");                     //💥Output: I can go for Goa tour
}else{
    console.log("Salary not expected, you missed it");
}

//🕑Example2:
const haveLoggedIn = true;
const haveCreditCard = true;
const haveLoggedInEmail = false;
const haveLoggedInGoogle = true;
if(haveLoggedIn && haveCreditCard){
    console.log("You are eligible for purchase");        //💥Output: You are eligible for purchase
}else{
    console.log("Not eleigible for purchase");
}

if(haveLoggedInEmail || haveLoggedInGoogle){            
    console.log("Successfully logged in");              //💥Output: Successfully logged in  
}else{
    console.log("you do't have credential");
}


//🚩Switch-Case Statement🚩
// A Switch is execute only the block of statment that matches the given value or expression
//🎁"break": 
//  "break" is used to terminate the current block or current case which case value gets matched with the given condition 
//    and then it won't check ahead, remaining other cases except default. 

//🎁If not use "break":
//   if we not use break then wherever the case condition gets matched from that case to till the end all cases will get print include default.

//🎁"continue":
//It keeps on checkig cases wherever case's condition get matched then "continue" will skip that case and keep on checking
//ahead, remaining other cases except default.    

//🎁return:
//"return" is used to stop execution and terminate the program.

//🎁default:
//default indicates else statement. if the condition is false then default gets execute.


//👉Syntax:
switch (key) {            //👈key is variable's name
    case value:          //👈value is variable's value
        
        break;

    default:
        break;
}

//🕑Example1:
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
    
}                                      //💥Output: This is birthday month


//🚩Truthy & Falsy Value🚩
//Ethi amey condition re kichi bhi compare karuney(like myEmail == value or myEmail < value or myEmail > value) phir bhi yeh true execute heuchi jehetu,
// "myEmail" variabl re amey kichi value put karichey so JS assume kari nauchi jey kichi value achi maney true eita.
// Jodi "myEmail" value remove karideba empty string kari deba tahele eita falsy heijibo execute karibo false statement ku. 

//👉false values---false, 0, -0, Bigint 0n, "", null, undefined, NaN
//👉truthy values---"false", "0", true, " ", {}, [], function(){}

//🕑Example:
const myEmail = "nrd6032@google.com";              //💥Output: Got the mail id
// const myEmail = "";                            //💥Output: Didn't get the mail id  (empty strring means false that's why else statement executed)
if(myEmail){
    console.log("Got the mail id");
}else{
    console.log("Didn't get the mail id");
}


//🎯How to check String is empty or not?
const myStr = "";                            //💥Output: String has no character
// const myStr = "false";                   //💥Output: String has 5 character
if(myStr.length === 0){
    console.log("String has no character");
}else{
    console.log(`String has ${myStr.length} character`);
}

//🎯How to check Array is empty or not?
const myArr = [];                            //💥Output: Array is empty
// const myArr = [20, 50, 60];              //💥Output: Array contains 3 element/value
if(myArr.length === 0){
    console.log("Array is empty");
}else{
    console.log(`Array contains ${myArr.length} element/value`);
}


//🎯How to check Object is empty or not?
const myObj = {};                            //💥Output: Object is empty
// const myObj = {name: "niil", id: 5635}         //💥Output: Object has 2 properties
if(Object.keys(myObj).length === 0){           //👈Object.keys return all object's key in an array after got result in array then array has propery .length
    console.log("Object is empty");
}else{
    console.log(`Object has ${Object.keys(myObj).length} properties`);
}

