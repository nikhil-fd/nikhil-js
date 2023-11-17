//🎈Scope🎈
// {} --->This callibrace called scope

//Exampe:👇
//here if you are declared value using "let" & "const" keyword inside a scope these value can access
//only within the scope but it can't access out of the scope. However, if you decalred value using "var" keyword
//it can access out of scope so, var is not good most of the cases so must of the time we use "let" & "const".
if(true){
    var a = 10;
    let b = 20;
    const c = 30;
}
console.log(a);
console.log(b);
console.log(c);

//🚩Global Scope🚩
//if you are decalring any variavle out of scope i.e. called global scope.
let p = 150;
if(true){
    let m = 50;
    const n = 80;
    console.log(m);
    console.log(n);
    console.log(p);
}
console.log(p);
console.log(m);
console.log(n);

//🚩Lexical Scoping:🚩
//In lexical scoping inner scope can access parent scope function variable(this parent scope we can say also global scope variable),
//but parent scope can't, access inner scope variable i.e. called lexical scoping.
//It is possible only if you are using "let" and "const" keyword.
//But if you use "var" keyord parent scope(global scope) can access inner scope and inner scope can access parent scope(global scope) vice versa. 

function f1(){
    let x = 60;
    if(true){
        let y = 80;
        const z = 100;
        console.log(`X value is ${x} Y value is ${y} and Z value is ${z}`);
    }
    console.log(`x = ${x} `);
    console.log(`y = ${y} z = ${z}`);
}
f1();


//🚩Nested Scope🚩
//Nested scope it is same to same like Lexical scoping.
//Nested scope means Inside a function we are defining another function like that we can define function till any level.
//Nested scope itself we called as "Closure"  also. 

function one(){
    const myFastName = "Nikhil";
    function two(){
        let myLastName = "Das";
        console.log(`my first name is ${myFastName} and last name is ${myLastName}`);
    }
    two();
    console.log(myFastName);
    console.log(myLastName);
}
one();

//OR

if(true){
    const myFavPlayer = "Virat Kohli";
    if(myFavPlayer == "Virat Kohli"){
        const anotherPlayer = " MS Dhoni"
        console.log(myFavPlayer + anotherPlayer);
    }
    console.log(anotherPlayer);
}
console.log(myFavPlayers);

//Example:👇
//Correct
console.log(f3(5));
function f3(num){
    return num + 1;
}

//Incorrect: (Because Before Initialization we can not access the value only can access after initialization)
//Here function defined inside a variable that's why.
console.log(myNum(8));
const myNum = function(num){
    return num + 2;
}

