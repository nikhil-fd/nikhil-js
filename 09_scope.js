//🚩Scope🚩
// {} --->This callibrace called scope

//🕑Exampe1:👇
//Here if you are declared value using "let" & "const" keyword inside a scope these value can access
//only within the scope but it can't access out of the scope. However, if you decalred value using "var" keyword
//it can access out of scope and inner scope as well so, var is not good most of the cases so must of the time we use "let" & "const".
if(true){
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);         //💥Output: 10
    console.log(b);        //💥Output: 20
    console.log(c);       //💥Output: 30
}
console.log(a);           //💥Output: 10
console.log(b);          //💥Output: error 
console.log(c);         //💥Output: error

//🎁Global Scope🚩
//if you are decalring any variavle out of scope i.e. called global scope.
//🔔Remember one thing in browser console global scope is different and node enviornment global scope is different.
//  node means (node 09_scope.js)

//🕑Example1:
const p = 150;
if(true){
    let m = 50;
    const n = 80;
    console.log(m);           //💥Output: 50
    console.log(n);          //💥Output: 80
    console.log(p);         //💥Output: 150
}
//🕑Example2:
const x = 300
if(true){
    let y = 350;
    let z = 370;
    let x = 390;
    console.log(x);          //💥Output: 390
    console.log(y);         //💥Output:  350
    console.log(z);        //💥Output: 370
}
console.log(x);          //💥Output: 300
console.log(y);         //💥Output: error
console.log(z);        //💥Output: error


//🎁Lexical Scoping:🚩
//In lexical scoping inner scope can access parent scope function variable(this parent scope we can say also global scope variable),
//but parent scope can't, access inner scope variable i.e. called lexical scoping.
//It is possible only if you are using "let" and "const" keyword.
//But if you use "var" keyord parent scope(global scope) can access inner scope and inner scope can access parent scope(global scope) vice versa. 

function f1(){
    let x = 60;
    if(true){
        let y = 80;
        const z = 100;
        console.log(`X value is ${x} Y value is ${y} and Z value is ${z}`);       //💥Output: 60 80 100 
    }
    console.log(`x = ${x} `);                    //💥Output: x = 60
    console.log(`y = ${y} z = ${z}`);           //💥Output: error
}
f1();


//🎁Nested Scope🚩
//Nested scope it is same to same like Lexical scoping.
//Nested scope means Inside a function we are defining another function like that we can define function till any level.
//Nested scope itself we called as "Closure"  also. 

function one(){
    const myFastName = "Nikhil";
    function two(){
        let myLastName = "Das";
        console.log(`my first name is ${myFastName} and last name is ${myLastName}`);        //💥Output: my first name is Nikhil and last name is Das
    }
    two();
    console.log(myFastName);       //💥Output: Nikhil
    console.log(myLastName);      //💥Output: error
}
one();
//🔴OR🔴
if(true){
    const myFavPlayer = "Virat Kohli";
    if(myFavPlayer == "Virat Kohli"){
        const anotherPlayer = " MS Dhoni"
        console.log(myFavPlayer + anotherPlayer);       //💥Output: Virat Kohli MS Dhoni
    }
    console.log(anotherPlayer);                      //💥Output: error
}
console.log(myFavPlayers);               //💥Output: error

//🕑Example:👇
//🟢Correct (we called it "hoisting")
console.log(f3(5));            //💥Output: 6
function f3(num){
    return num + 1;
} 

//🔴Incorrect: (Because Before Initialization we can not access the value only can access after initialization)
//Here function defined inside a variable that's why.
console.log(myNum(8));              //💥Output: error
const myNum = function(num){
    return num + 2;
}

