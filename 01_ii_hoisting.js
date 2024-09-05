//Very Very Important👌

//🎁hoisting
//hoisting is a mechanism in JS where variable and function declaration are moved to top of their scope,
//before the code execute.

//🎯hoisting work with which variable keyword?
//hoisting works with "var" keyword.✅
//We can hoist using "var" keyword with default initialization. so when access variable
//before initializaion then it will not throw "error" rather it gives "undefined".

//We can hoist also both "let" and "const" keyword without default initializaion.
//So when access variable before initialization it throw "error".(💥but it is not recommeded) 

//🕑Example: Variable hoisting🕑
console.log(`Voter age is ${age}`);    //💥Output: Voter age is undefined
var age = 20;
console.log(`Voter age is ${age}`);    //Output: Voter age is 20
//👆Most important👇
//NOTE: In obove example the declaration "var age" is hoisted to the top, but the assignment "age = 20" is not hoisted to top.
//      that's why it gives "undefined"


//🕑Example: function hoisting🕑
//NOTE: In function hoisting, function declaration are hoisted with function definition. Hence, allowing you
//      to call the function before the function declaration. 
carFunc();
function carFunc(){
    console.log("TATA Car Details Accessed Successfully");
}
//💥Output: TATA Car Details Accessed Successfully