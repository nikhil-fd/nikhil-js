//Advance JS Object prototype.
//🚩Object.getOwnPropertyDescriptor(Object, "key");

//🚩Object.defineProperty(object, "key", {writable: true, enumerable: true, configurable: true})
//   Object.defineProperty(object, "key", {}) it takes 3 argument and it uses when we take single key.

//🚩Object.defineProperties(object, "key", {}); 
//   same it takes 3 argument but it uses when we take multiple key. 

// Using this prototype we can check all object properties internal setup like,
// writable: true,
// enumerable: true,
// configurable: true
// So using those internal settings we can stop any object iteration, if we change "enumerable: false".

//✍Example1: In this example we are trying to change "PI" value using writable, enumerable & configurable = true,
//          but we can't change the "PI" value. So this propery not allow everywhere to change the internal settings,
//          somewhere it allows to change the property.
const piValue = Math.PI;
Math.PI = 4.256
console.log(piValue);         //💥Output: 3.141 did not changed to 4.256

const mathValue = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(mathValue);
//💥Output:
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }

const myObj = Object.defineProperty(Math, "PI", {
    writable: true,
    enumerable: true,
    configurable: true
})
console.log(myObj);     //💥Output: error--can not redefine property PI


//✍Example2: In this example we are trying to stop the iteration of any 1 object's property.
const UserMeal = {
    meal: "chicken-lolipop",
    price: 389,
    isAvailable: true,
    myFunc: function(){
        console.log("function is disabled");
    }
}
console.log(Object.getOwnPropertyDescriptor(UserMeal, "meal"));
Object.defineProperty(UserMeal, "meal", {
    writable: false,
    enumerable: false
});
console.log(Object.getOwnPropertyDescriptor(UserMeal, "meal"));

for(let [key, value] of Object.entries(UserMeal)){
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
    // console.log(`${key}:${value}`);
}


//✍Example3: Here we are preventing iteraration of age property apart from that other value can iterate.
let myBio = {
    name: "nikhil",
    age: 38,
    isReady: true
}
console.log(Object.getOwnPropertyDescriptor(myBio, "age"));
//💥Output: { value: 38, writable: true, enumerable: true, configurable: true }

Object.defineProperty(myBio, "age", {
    enumerable: false
})
for(let bio of Object.values(myBio)){
    console.log(bio);                   //💥Output: nikhil, true
}

