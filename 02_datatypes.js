let myFavPlayer = "virat kohli";
let playerScore = 78;
let isPlayerRetire = false;
let playerAge;
let playerCentury = null;
let jerseyNo = "18";
let seriesCentury = 1;


// console.table([typeof(myFavPlayer),typeof(playerScore), typeof(isPlayerRetire), typeof(playerAge), typeof(playerCentury)]);
// console.table([isNaN(myFavPlayer), isNaN(playerScore), isNaN(isPlayerRetire), isNaN(playerAge), isNaN(playerCentury)]);
// console.log(Number(jerseyNo));
// console.log(jerseyNo);

//Here we convert the value from string to number using Number() method.
// console.log(typeof(Number(jerseyNo)));
// console.log(typeof(jerseyNo));

//🚩Boolean() method
//Here we convert the Number into Boolean using Boolean() method.
console.log(Boolean(seriesCentury));           //💥Output: true
console.log(typeof(Boolean(seriesCentury)));   //💥Output: boolean

//🚩Stirng() method
//Here we convert the number into string using Stirng() method.
console.log(String(playerScore));           //💥Output: "78"
console.log(typeof(String(playerScore)));   //💥Output: String

//🚩Number() method
//Here we convert the string into number using Number() method.
console.log(Number(jerseyNo));          //💥Output: 18
console.log(typeof(Number(jerseyNo)));  //💥Output: Number

//Primitive data types uses Stack memory.
//Non-Primitive data types uses Heap memory.
// Stack memory : When you are changing value in variable it gives a copy of that variable.
// Heap memory : when you are changing value in array and object then it changing the value in
//               array's and object's original value.

//Example: Stack Memory
let myYoutubeName = "Cric Mic";
let myOtherYoutube = myYoutubeName;
myYoutubeName = "Swanik Feast";
console.log(myYoutubeName);
console.log(myOtherYoutube);

//Example: Heap Memory
let userOne = {
    username: "niil",
    userAge : 35
};
userOne.username = "nikhil";
console.log(userOne.username);