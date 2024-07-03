//🚩for..loop🚩
// in for..loop takes initialization, condition and iteration.
// for..lopp 1st check condition like while loop, if the condition is true then it enter into scope,
// if condition is false it won't enter into scope..

for(let num = 0; num <= 10; num++){
    console.log(num);
}


//👉inside loop used if--else👈
for(let x = 5; x <= 10; x++){
    const elem = x;
    if(elem == 8){
        console.log("8 is best number");
    }
    console.log(elem);
}


//👉inside for..loop used another for..loop👈
// 🎯Print multiple table(ponika) from 15 to 20 till 10.
// 15 * 1 = 15    15 * 2 = 30    
// 16 * 1 = 16    16 * 2 = 32
//You notice in this table 2 number is changing i.e. 15 to 20 and 1 to 10.
// In this loop, "a" loop will incrementing with 1. then 2nd loop "b" will runs till 10th.
// Then after completion 2nd loop iteration till 10 then loop "a" iteration increment with 1 again it move to "b" loop and "b" loop will iterate till 10.
for(let a = 15; a <= 20; a++){
    console.log(`Table ${a}`);
    for(let b = 1; b <= 10; b++){
        console.log(`${a} * ${b} = ${a * b}`);
    }
}
//💥Output:👆
// Table 15
// 15 * 1 = 15
// 15 * 2 = 30
// 15 * 3 = 45
// 15 * 4 = 60
// 15 * 5 = 75
// 15 * 6 = 90
// 15 * 7 = 105
// 15 * 8 = 120
// 15 * 9 = 135
// 15 * 10 = 150
// Table 16
// 16 * 1 = 16
// 16 * 2 = 32
// 16 * 3 = 48
// 16 * 4 = 64
// 16 * 5 = 80
// 16 * 6 = 96
// 16 * 7 = 112
// 16 * 8 = 128
// 16 * 9 = 144
// 16 * 10 = 160
// Table 17
// 17 * 1 = 17
// 17 * 2 = 34
// 17 * 3 = 51
// 17 * 4 = 68
// 17 * 5 = 85
// 17 * 6 = 102
// 17 * 7 = 119
// 17 * 8 = 136
// 17 * 9 = 153
// 17 * 10 = 170
// Table 18
// 18 * 1 = 18
// 18 * 2 = 36
// 18 * 3 = 54
// 18 * 4 = 72
// 18 * 5 = 90
// 18 * 6 = 108
// 18 * 7 = 126
// 18 * 8 = 144
// 18 * 9 = 162
// 18 * 10 = 180
// Table 19
// 19 * 1 = 19
// 19 * 2 = 38
// 19 * 3 = 57
// 19 * 4 = 76
// 19 * 5 = 95
// 19 * 6 = 114
// 19 * 7 = 133
// 19 * 8 = 152
// 19 * 9 = 171
// 19 * 10 = 190
// Table 20
// 20 * 1 = 20
// 20 * 2 = 40
// 20 * 3 = 60
// 20 * 4 = 80
// 20 * 5 = 100
// 20 * 6 = 120
// 20 * 7 = 140
// 20 * 8 = 160
// 20 * 9 = 180
// 20 * 10 = 200

//🎯Print a single Table of 35.
for(let c = 1; c <= 10; c++){
    let table = 35;
    console.log(`${table} * ${c} = ${table * c}`);
}
//💥Output:👆 
// 35 * 1 = 35
// 35 * 2 = 70
// 35 * 3 = 105
// 35 * 4 = 140
// 35 * 5 = 175
// 35 * 6 = 210
// 35 * 7 = 245
// 35 * 8 = 280
// 35 * 9 = 315
// 35 * 10 = 350

//🎯Print table 20, 30, 40 till 10.
//20 * 1 = 20     20 * 2 = 40
//30 * 1 = 30     30 * 2 = 60
//40 * 1 = 40     40 * 2 = 80

let arrTable = [10, 20, 30]
for(let m = 0; m < arrTable.length; m++){
    console.log(`Table of ${arrTable[m]}`);
    for(let n = 1; n <= 10; n++){
        console.log(`${arrTable[m]} * ${n} = ${arrTable[m] * n}`);
    }
}

//👆OR👇 (if the difference between 3 table is same then can prefer this approach here difference is 10)
for(let x = 10; x <= 30; x = x + 10){
    console.log(`Table of ${x}`);
    for(let y = 1; y <= 10; y++){
        console.log(`${x} * ${y} = ${x * y}`);
    }
}
//💥Output:👆
// Table of 10
// 10 * 1 = 10
// 10 * 2 = 20
// 10 * 3 = 30
// 10 * 4 = 40
// 10 * 5 = 50
// 10 * 6 = 60
// 10 * 7 = 70
// 10 * 8 = 80
// 10 * 9 = 90
// 10 * 10 = 100
// Table of 20
// 20 * 1 = 20
// 20 * 2 = 40
// 20 * 3 = 60
// 20 * 4 = 80
// 20 * 5 = 100
// 20 * 6 = 120
// 20 * 7 = 140
// 20 * 8 = 160
// 20 * 9 = 180
// 20 * 10 = 200
// Table of 30
// 30 * 1 = 30
// 30 * 2 = 60
// 30 * 3 = 90
// 30 * 4 = 120
// 30 * 5 = 150
// 30 * 6 = 180
// 30 * 7 = 210
// 30 * 8 = 240
// 30 * 9 = 270
// 30 * 10 = 300

//🎯Print table 2 to 10 till 10 each table except table 5 and 7.
for(let i = 2; i <= 10; i++){
    console.log(`Table of ${i}`);
    if(i === 5){
        console.log(`Don't print table 5`);
        continue;
    }else if(i === 7){
        console.log(`Don't print table 7`);
        continue;
    }
    for(let j = 1; j <= 10; j++){
        console.log(`${i} * ${j} = ${i * j}`);
    }
}
//👆OR👇  (instead of if-else used switch-case)
for(let i = 2; i <= 10; i++){
    console.log(`Table of ${i}`);
    switch (i){
        case 5:
            console.log(`Don't print Table 5`);
            continue;
            case 7:
                console.log(`Don't print Table 7`);
                continue;
    }
    for(let j = 1; j <= 10; j++){
        console.log(`${i} * ${j} = ${i * j}`);
    }
}
//💥Output:👇
// Table of 2
// 2 * 1 = 2
// 2 * 2 = 4
// 2 * 3 = 6
// 2 * 4 = 8
// 2 * 5 = 10
// 2 * 6 = 12
// 2 * 7 = 14
// 2 * 8 = 16
// 2 * 9 = 18
// 2 * 10 = 20
// Table of 3
// 3 * 1 = 3
// 3 * 2 = 6
// 3 * 3 = 9
// 3 * 4 = 12
// 3 * 5 = 15
// 3 * 6 = 18
// 3 * 7 = 21
// 3 * 8 = 24
// 3 * 9 = 27
// 3 * 10 = 30
// Table of 4
// 4 * 1 = 4
// 4 * 2 = 8
// 4 * 3 = 12
// 4 * 4 = 16
// 4 * 5 = 20
// 4 * 6 = 24
// 4 * 7 = 28
// 4 * 8 = 32
// 4 * 9 = 36
// 4 * 10 = 40
// Table of 5
// Don't print Table 5
// Table of 6
// 6 * 1 = 6
// 6 * 2 = 12
// 6 * 3 = 18
// 6 * 4 = 24
// 6 * 5 = 30
// 6 * 6 = 36
// 6 * 7 = 42
// 6 * 8 = 48
// 6 * 9 = 54
// 6 * 10 = 60
// Table of 7
// Don't print Table 7
// Table of 8
// 8 * 1 = 8
// 8 * 2 = 16
// 8 * 3 = 24
// 8 * 4 = 32
// 8 * 5 = 40
// 8 * 6 = 48
// 8 * 7 = 56
// 8 * 8 = 64
// 8 * 9 = 72
// 8 * 10 = 80
// Table of 9
// 9 * 1 = 9
// 9 * 2 = 18
// 9 * 3 = 27
// 9 * 4 = 36
// 9 * 5 = 45
// 9 * 6 = 54
// 9 * 7 = 63
// 9 * 8 = 72
// 9 * 9 = 81
// 9 * 10 = 90
// Table of 10
// 10 * 1 = 10
// 10 * 2 = 20
// 10 * 3 = 30
// 10 * 4 = 40
// 10 * 5 = 50
// 10 * 6 = 60
// 10 * 7 = 70
// 10 * 8 = 80
// 10 * 9 = 90
// 10 * 10 = 100


//🎁for..loop used in Array👈
let myArr = ["virat","rahul","jaddu","iyer"];
for(let score = 0; score < myArr.length; score++){
    console.log(myArr[score]);
}                                       //💥Output: virat rahul jaddu iyer


//🎁Using "break" in for..loop👈
//break: break is used to terminate the current scope/case where condition gets matched with specified value  
//       and it won't check ahead except default.

//continue: continue is used to skip the current scope/case where condition gets matched with specified value
//          and keep on checking ahead except default.


//🕑Example: Print 1 to 10 but we want to stop the number when iteration reached in 5.
for(let num = 1; num <= 10; num++){
    if(num == 5){
        console.log("Reached at 5");
        break;
    }
    console.log(`Print ${num}`);         
}
//💥Output:👆
//Print 1
//Print 2
//Print 3
//Print 4
//Reached at 5


//🕑Example: "continue" (same above example using "continue")
for(let num = 1; num <= 10; num++){
    if(num == 5){
        console.log("Reached at 5");
        continue;
    }
    console.log(`Print ${num}`);
}
//💥Output:👆 
// Print 1
// Print 2
// Print 3
// Print 4
// Reached at 5
// Print 6
// Print 7
// Print 8
// Print 9
// Print 10


//🚩while..loop🚩
// 1st it checks condition if the condition is true then it enter into scope for print the value or execute the statement,
// if the condition is false then it won't enter into scope.

//🔔Syntax: 
//It takes "initialization" outside while scope and "iteration" takes inside while scope after console
let myAge = 18;
while(myAge <= 25){
    console.log(myAge);
    myAge++;
}                               //💥Output: 18 19 20 21 22 23 24 25


//🕑Example1:
//While using Array
let myArr1 = ["chahal","jaddu","kuldeep","siraj"];
let m = 0;
while(m < myArr1.length){
    console.log(myArr1[m]);
    m++;
    //👆m = m + 1
}                                   //💥Output: chahal jaddu kuldeep siraj


//🚩do-while..loop🚩
// It retuns at least 1 value if the condition is false because 1st it execute the statement after that,
// it checks the condition,if conditon is true,then it keep on iterarting if false it won't iterate.

//🔔Syntax:
let n = 7;
do{
    console.log(n);
    n++;
}while(n <= 5);                 //💥Output: 7

//🕑Example1:
let majhi = 10;
do{
    console.log(majhi);
    majhi++;
    //majhi = majhi + 1
}while(majhi <= 15)                 //💥Output: 10 11 12 13 14 15


//🚩for..of loop/iterators🚩
// These "for..of" and "for..in" loop mostly use in Array.
// But we can use "for..of" loop for acces the value of array[], array of object [{}], string "".
// We can use "for..in" loop to access the value of object{}, array[] (In object for..in returns "keys" and in array returns "index no.") 
// But object can't get access by "for..of" loop.
// object can access by "for..in" loop
// "for..of" loop it returns the element/value.

//👉Array []:
let myPlayers = ["cummins","ajay","nishu","radhey"];
for(let elem of myPlayers){
    console.log(elem);                 //💥Output: cummins ajay nishu radhey
}

//👉String "":
let greetings = "Welcome 2024";
for(let greet of greetings){
    console.log(greet);                  //💥Output: W e l c o m e  2 0 2 4
}

//👉Array of object [{}] :
let footballPlayers = [{player1: "messi", player2: "ronaldo", player3: "neymar"}];
for(const players of footballPlayers){
    const playersObj = Object.values(players);
    console.log(playersObj);
}                                        //💥Output: ['messi', 'ronaldo', 'neymar']

//🕑Example:
//Extract each character of string and store these character in an array.
const meStr = "nikhil das"
let storeArr = []
for(let str of meStr){
    storeArr.push(str)
    
}
console.log(storeArr);                //💥Output: ['n', 'i', 'k', 'h', 'i', 'l', ' ', 'd', 'a', 's']


//🚩for..in loop/iterators🚩
// it returns "index no." of array and it returns "keys" of object.

//👉Object {}:
const favGames = {game1: "igi", game2: "nfs", game3: "vice-city"};
for(let gamesKey in favGames){
    console.log(`${favGames[gamesKey]}`);              //💥Output: igi nfs vice-city
} 


//👉Array []:
const topGames = ["igi", "nfs", "vice-city"];
for(let games in topGames){
    console.log(`${games}`);
}                                         //💥Output: 0 1 2


//🚩forEach() loop/iterators🚩
// forEach() method returns "undefined" when use "return" statement.
// forEach() method returns value without array when use console.log instead of return.
// forEach() returns elment, index and array when we are not storeing in variable.
// mostly it is used when you are accessing array of object values.
// forEach() loop uses callback function.
// Callback function is a function that is passed as an argument to another function or method and it is executed
// after some operation has been completed.  

//🔔Syntax:
//1️⃣
Array.forEach((element, index, array) => {
    console.log(`${element} ${index} ${array}`);      //💥Output: element index array
})
//2️⃣
Array.forEach((element, index, array) => {
    return `${element} ${index} ${array}`
})                                         //💥Output: undefined (store this forEach() in a variable and use console.log() then it returns "undefined")     



//🕑Example1: forEach() value store in variable
const myCourses = ["sap","react","python","java"];
const storeValues = myCourses.forEach((elem, index, array) => {
    return(`${elem} ${index} ${array}`);
});
console.log(storeValues);                  //💥Output: undefined


//🕑Example2:
const allExam = ["neet", "upsc", "jee", "cad"]
allExam.forEach((elem, index, array) => {
    console.log(`${elem} -- ${index} -- ${array}`);
})
//💥Output:👇
// neet -- 0 -- neet,upsc,jee,cad
// upsc -- 1 -- neet,upsc,jee,cad
// jee -- 2 -- neet,upsc,jee,cad
// cad -- 3 -- neet,upsc,jee,cad


//🕑Example3: forEach() here used function() without name i.e. call back funciton
const myGames = [
    {game: "counter-strike", type: "action"},
    {game: "igi", type: "action"},
    {game: "nfs", type: "raceing"},
    {game: "vice-city", type: "raceing"},
];
myGames.forEach(function(elem){
    console.log(elem["game"]);             //💥Output: counter-strike igi nfs vice-city
    console.log(elem.type);               //💥Output: action action raceing raceing
})


//🕑Example4: forEach() here used arrow function () => and it is not haviing any name i.e. also call back funciton
const myCars = [
    {brand: "bmw", model: "X5", price: 15000},
    {brand: "audi", model: "R8", price: 55000},
    {brand: "honda", model: "city", price: 78589},
    {brand: "suzuki", model: "omni", price: 76000},
];
myCars.forEach((elem) => {
    console.log(`${elem.brand} ${elem.model}`);        
})
//💥Output: 
// bmw X5
// audi R8
// honda city
// suzuki omni



//🚩Map()🚩
// It is not array.prototype.map() ---  Array "map" m is lowercase
// object Map() -- this "Map" M is uppercase so, both are different.

// "Map" is a object, it holds key-value pairs and remember the original insertion order of the key.
// it means, it doesn't allow duplicate value only original value it allows.
// if there is same value multiple times then it allow only 1 value of them. 


const myData = new Map();
myData.set("id", 50)
myData.set("name", "nikhil")
myData.set("skill", "react js")
myData.set("name", "nikhil")
console.log(myData);
for(let [key, value] of myData){                 //👈 here you can keep your own name instead of "key" "value".
    console.log(`${key} -- ${value}`);            //👆 above technique we can use for Map() object not in normal object.
}


