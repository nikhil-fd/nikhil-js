//🚩"this":🚩 
//👉"this" keyword is used to return current context and it refers to object.
//👉"this" refers to object and it returns current context.
//👉 current context means inside callibrace whatever context(context means key's value) is their i.e. called current context.
//👉"this" object can have different values depends on where it is placed.
//👉"this" can use only inside object, if you use inside function then it unable to return current context.

//🟢"this" returns current context in 1 place:👇
//1️⃣ Inside object if there is a simple function defined so in that simple function if we use "this" it returns "current context",
//    instead of simple function if we use arrow function then it returns window object not current context.

//If the variable is declared globally that means outside the function here it returns "current context".❌(but in real time it not true.)

//Place1️⃣
const myBio = {
    username: "Nikhil",
    price: 399,
    welcomemsg: function(){
        console.log(`Helo ${this.username} welcome to our website`);     //💥Output: Helo Nikhil welcome to our website
        console.log(this);                                              //💥Output: { username: 'Nikhil', price: 399, welcomemsg: [Function: welcomemsg] }
    } 
}
myBio.welcomemsg();                        

//🔴"this" returns window object on browser in 3 place:
//1️⃣ suppose direct you are printing "this" using console.log(this).
//2️⃣ inside an object if you define a arrow function and use "this" inside that arrow then it returns window object.
//3️⃣ when define "this" inside a normal function then it returns window object. 


//Place1️⃣
console.log(this);                   //💥Output: window object

//Place2️⃣
const marvelHero = {
    picture: "spider man",
    id: 8968,
    moveFunc: () => {
        return `${this.picture}`
    }
}
console.log(marvelHero.moveFunc());          //💥Output: undefined

//Place3️⃣
//Returing window object(global object).
// If you use "this" inside a simple function, then in node enviorment "this" returns some method and global object.
// method like setTimeout, clearTimeout, setInterval, clearInterval and global object like fetch, navigator etc.
function f1(){
    console.log(this);
}
f1();      //💥Output: global object (setinerval, settimeout, clearinterval etc..)


//🔔When "this" define inside arrow function and access the variable value then it returns {} undefined in node enviornment.
//  if you direct print "this" then it is returning {} empty object in node enviornment.
const myJob = () => {
    let profile = "React JS";
    console.log(this.profile);               //💥Output: undefined
    console.log(this);                      //💥Output: {}
}
myJob();


//🔔NOTE:
//1️⃣If you use "this" object in browser console.log then it returns window object.
//goto browser console-and then type below-
console.log(this);       //💥Output: Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}

//2️⃣If you use "this" object in node enviornment(Node.js) console.log then it returns empty object {}.
console.log(this)
//goto cmd/bash--node 07_object.js       💥Output: {}

//3️⃣If you use "this" inside a simple function, then in node enviorment "this" returns some method and global object.
//   method like setTimeout, clearTimeout, setInterval, clearInterval and global object like fetch, navigator etc.
function myHero(){
    console.log(this);
}
myHero();                   //💥Output: global object and some methods


//********************************************************************************************** ****************/
//📌Summary:👇
//1️⃣In an object method, this refers to the object.

//2️⃣In a regular function, this refers to the global object (or undefined in strict mode).

//3️⃣In an arrow function, Arrow functions do not have their own this; instead, they inherit this from the surrounding lexical scope."

//4️⃣In a constructor function or class, this refers to the instance of the object.

//5️⃣In event listeners, this refers to the element that triggered the event.

//6️⃣this can be manually controlled using call(), apply(), or bind().