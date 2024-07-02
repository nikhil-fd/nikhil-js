//🚩Nullish Coalescing operator (??): null/undefined🚩
//Nullish Collescing adds the ability to check the "nullish"(null/undefined) value insted of "false" value.
//If the left operand has no value i.e. null or undefined then it returns value of right operand.
//If the left operand has value and right operand has null/undefined then it returns value of left operand.
//Nullish collescing opertor -- (??)

//🔔NOTE: sometimes when we are fetching data from database or api in this situation data successfully can get or can't get,
//        so for this situation we can give a default value/alternate value.

let age;
//Here it takes 1st value i.e. 10
age = 10 ?? 20;
console.log(age);                                     //💥Output: 10
//Here below it takes value 130 not take null
let score = null ?? 130;
console.log(score);                                  //💥Output: 130
//Here below it takes value 55 not take undefined
let num = undefined ?? 55;
console.log(num);                                    //💥Output: 55
//Here Below it takes 1st value only i.e. 25
let result = null ?? 25 ?? 33;
console.log(result);                                //💥Output: 25

let result1 = "love you maa" ?? 13589;
console.log(result1);                             //💥Output: love you maa

let result2 = 52899 ?? undefined;
console.log(result2);                            //💥Output: 52899

let result3 = false ?? "love you mama"
console.log(result3);                           //💥Output: false


//🕑Example1:
//"meArr" has no value that indicates undefined whereas "yourArr" has value that's why right operand returned value.
let meArr = []
let yourArr = [20,60,40]
console.log(meArr[1] ?? yourArr[1]);         //💥Output: 60


//🕑Example2:
//In below it indicates that when "myArr1" has value then map method will execute and return value,
//if when "myArr" has no value then map method will not execute and return empty array [].
let myArr1 = [];
let myArr2 = myArr1 ?.map((elem) => {
    return elem
});
console.log(myArr2);                      //💥Output: []

//👇
let myArr3 = ["nikhil","virat","rohit"];
let myArr4 = myArr3 ?.map((elem) => {
    return elem
})
console.log(myArr4);                        //💥Output: [ 'nikhil', 'virat', 'rohit' ]


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
