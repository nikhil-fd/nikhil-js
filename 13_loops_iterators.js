//🚩for..loop🚩
// in for..loop takes initialization, condition and iteration.
// for..lopp 1st check condition like while loop, if the condition is true then it enter into scope,
// if condition is false it won't enter into scope.

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
// Here we are printing table(ponika) from 1 to 10.
// In this loop, "a" loop will run 1st and 2nd loop runs till 10th after that 1st loop will increment,
// then again 2nd loop will run till 10th this process will run till 1st loop reach at 10.
for(let a = 1; a <= 10; a++){
    console.log(`Table ${a}`);
    for(let b = 1; b <= 10; b++){
        console.log(`${a} * ${b} = ${a * b}`);
    }
}


//👉for..loop used in Array👈
let myArr = ["virat","rahul","jaddu","iyer"];
for(let score = 0; score < myArr.length; score++){
    console.log(myArr[score]);
}


//👉Using "break" in for..loop👈
//break: it keep on checking the case or statement acooriding to the given value or condition,
//       wherever the condition gets matched it will stop there(it will terminate that statement) 
//       and won't check ahead.

//continue: it keep on checking the case or statment according to the given value or condition,
//          wherever the condition gets matched it will skip that case and keep on checking ahead.


//Example: we want to stop the number when iteration reached in 5.
for(let num = 1; num <= 8; num++){
    if(num == 5){
        console.log("Reached at 5");
        break;
    }
    console.log(num);
}

//Example: "continue"
for(let num = 1; num <= 8; num++){
    if(num == 5){
        console.log("Reached at 5");
        continue;
    }
    console.log(num);
}


//🚩while..loop🚩
// 1st it checks condition if the condition is true then it enter into scope for print the value or execute the statement,
// if the conditio is false then it won't enter into scope.
let myAge = 18;
while(myAge <= 25){
    console.log(myAge);
    myAge++;
}

//While using Array
let myArr1 = ["chahal","jaddu","kuldeep","siraj"];
let m = 0;
while(m < myArr1.length){
    console.log(myArr1[m]);
    m++;
}


//🚩do-while..loop🚩
// It retuns at least 1 value if the condition is false because 1st it execute the statement after that,
// it checks the condition,if conditon is true,then it keep on iterarting if false it won't iterate.

let n = 7;
do{
    console.log(n);
    n++;
}while(n <= 5);



//🚩for..of loop/iterators🚩
// These "for..of" and "for..in" loop mostly use in Array.
// But we can use it for acces the value of array[], array of object [{}], string "".
// But object can't get access by "for..of" loop.
// object can access by "for..in" loop
// "for..of" loop it returns the element/value.

//👉Array []:
let myPlayers = ["cummins","ajay","nishu","radhey"];
for(let elem of myPlayers){
    console.log(elem);
}

//👉String "":
let greetings = "Welcome 2024";
for(let greet of greetings){
    console.log(greet);
}

//👉Array of object [{}] :
let footballPlayers = [{player1: "messi", player2: "ronaldo", player3: "neymar"}];
for(const players of footballPlayers){
    const playersObj = Object.values(players);
    console.log(playersObj);
}

//🚩for..in loop/iterators🚩
// it returns index no. of array and it returns key of object.

//👉Object {}:
const favGames = {game1: "igi", game2: "nfs", game3: "vice-city"};
for(let gamesKey in favGames){
    console.log(`${gamesKey} ${favGames[gamesKey]}`);
} 


//👉Array []:
const topGames = ["igi", "nfs", "vice-city"];
for(let games in topGames){
    console.log(`${games}`);
} 


//🚩forEach() loop/iterators🚩
// it returns elment, index and array when we are not storeing in variable.
// But when we are storeing that forEach() value,index & array in a variable at that time it returns undefined.
// mostly it is used when you are accessing array of object values.
// forEach() loop uses callback function.
// A functin without name i.e. called callback function. 

//Syntax:
Array.forEach((element, index, array) => {
    console.log(`${element} ${index} ${array}`);
})


//Example1: forEach() value store in variable
const myCourses = ["sap","react","python","java"];
const storeValues = myCourses.forEach((elem, index, array) => {
    console.log(`${elem} ${index} ${array}`);
});
console.log(storeValues);


//Example2: forEach() here used function() without name i.e. call back funciton
const myGames = [
    {game: "counter-strike", type: "action"},
    {game: "igi", type: "action"},
    {game: "nfs", type: "raceing"},
    {game: "vice-city", type: "raceing"},
];
myGames.forEach(function(elem){
    console.log(elem["game"]);
    console.log(elem.type);
})


//Example3: forEach() here used arrow function () => and it is not haviing any name i.e. also call back funciton
const myCars = [
    {brand: "bmw", model: "X5", price: 15000},
    {brand: "audi", model: "R8", price: 55000},
    {brand: "honda", model: "city", price: 78589},
    {brand: "suzuki", model: "omni", price: 76000},
];
myCars.forEach((elem) => {
    console.log(`${elem.brand} ${elem.model}`);
})



//🚩Map()🚩
// "Map" is a object, it holds key-value pairs and remember the original insertion order of the key.
// it means, it doesn't allow duplicate value only original value it allows.
// if there is same value multiple times then it allow only 1 value of them. 
// this is not array.prototype.map() ---  this "map" m is lowercase
// object Map() -- this "Map" M is uppercase so both are different.

const myData = new Map();
myData.set("id", 50)
myData.set("name", "nikhil")
myData.set("skill", "react js")
myData.set("name", "nikhil")
console.log(myData);
for(let [key, value] of myData){
    console.log(`${key} -- ${value}`);
}


