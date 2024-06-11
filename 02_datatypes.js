//🚩DataType:
//#1. Datatype defines the dat structure.
//#2. Every variable has a data structure that indicates what type of data and what range of
//    value can be store in variable.
//#3. In JavaScript there are 2 types of data type:
//         1️⃣Primitive Datatype - "Number", "String", "Boolean", "Null", "Undefined", "bigInt", "symbol".
//         2️⃣Non-primitive Datatype - "Array", "Object", "Regular Expression", "function", "map".

//1️⃣Primitive Datatype:
//#1. Primitive Datatypes are immutable type. immutable means once defined the value later we can't change the value.
//#2. Primitive datatypes uses Stack memory.
//#3. Primitive datatypes are predefined.
//#4. Primitive datatypes will have certain values.
//#5. Size depends on type of data structure.

//2️⃣Non-primitive Datatype:
//#1. Non-primitive data types are mutable type. Mutable means if we defined value late on we can change the value.
//#2. Non-primitive data types uses heap memory.
//#3. Non-primitive data types are created by programmer.
//#4. Non-primitive data types can be null.
//#5. Size are not fixed.

//Primitive data types uses Stack memory.
//Non-Primitive data types uses Heap memory.
// Stack memory : When you are changing value in variable it gives a copy of that variable.
// Heap memory : when you are changing value in array and object then it changing the value in
//               array's and object's original value.

//Example: Stack Memory
let myYoutubeName = "Cric Mic";
let myOtherYoutube = myYoutubeName;
myOtherYoutube = "Swanik Feast";
console.log(myYoutubeName);         //💥Output: Cric Mic  (it returns copy of existing value after changing with new value)
console.log(myOtherYoutube);        //💥Output: Swanik Feast

//Example: Heap Memory
let userOne = {
    username: "niil",
    userAge : 35
};
let userTwo = userOne;
userTwo.username = "nikhil";
console.log(userOne.username);     //💥Output: nikhil (it returns new value changing the original value)


//Example: All Datatypes
//String
let myFavPlayer = "virat";
//Number
let playerScore = 78;
//Boolean
let isPlayerRetire = false;
//Undefined
let playerAge;
//Null
let playerCentury = null;
let jerseyNo = "18";
let seriesCentury = 1;
//BigInt
let maxNum = Number.MAX_SAFE_INTEGER;
let minNum = Number.MIN_SAFE_INTEGER;
let bigNum = 9007199254740991n + 10n;
console.log(maxNum);                   //💥Output: 9007199254740991
console.log(minNum);                  //💥Output:  -9007199254740991
console.log(bigNum);                 //💥Output:  9007199254741001n

//🚩typeOf() -- it is used to check that what type of data and return that data type.
//🚩isNaN()  -- it is used to check whether it is a Number or not, and return boolean value true or false.

console.table([typeof(myFavPlayer),typeof(playerScore), typeof(isPlayerRetire), typeof(playerAge), typeof(playerCentury), typeof(jerseyNo), typeof(bigNum)]);
//💥Output👇
// ┌─────────┬───────────┐
// │ (index) │  Values   │
// ├─────────┼───────────┤
// │    0    │ 'string'  │
// │    1    │ 'number'  │
// │    2    │ 'boolean' │
// │    3    │'undefined'│
// │    4    │ 'object'  |
// │    5    |  'string' |
// |    6    | 'bigint'  |
// └─────────┴───────────┘
 console.table([isNaN(myFavPlayer), isNaN(playerScore), isNaN(isPlayerRetire), isNaN(playerAge), isNaN(playerCentury)]);
 //💥Output: Here output will come in boolean value.
 
 console.table([myFavPlayer, playerScore, isPlayerRetire, playerAge, playerCentury, jerseyNo, seriesCentury]);
//💥Output👇 
// ┌─────────┬───────────┐
// │ (index) │  Values   │
// ├─────────┼───────────┤
// │    0    │  'Virat'  │
// │    1    │    78     │
// │    2    │  false    │
// │    3    │ undefined │
// │    4    │   null    |
// │    5    |   "18"    |
// |    6    |    1      |
// └─────────┴───────────┘
// console.log(Number(jerseyNo));
// console.log(jerseyNo);

//🚩Number() method
//Here we convert the value from string to number using Number() method.
console.log(typeof(Number(jerseyNo)));    //💥Output: 18
console.log(typeof(jerseyNo));            //💥Output: Number


//🚩Boolean() method
//Here we convert the Number into Boolean using Boolean() method.
console.log(Boolean(seriesCentury));           //💥Output: true
console.log(typeof(Boolean(seriesCentury)));   //💥Output: boolean


//🚩Stirng() method
//Here we convert the number into string using Stirng() method.
console.log(String(playerScore));           //💥Output: "78"
console.log(typeof(String(playerScore)));   //💥Output: String


