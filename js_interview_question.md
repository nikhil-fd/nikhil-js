```text
1️⃣Can you change javascript "Math.PI = 3.141" value if yes, then how? if not then why?
```
```javascript
//No we can't change the Math.PI value because javascript in behind the scene configured that PI value in false in Objec Descriptor(Object.getOwnPropertyDescriptor) in object descriptor there is 3 properties is there i.e "writable", "enumerable" and "configurable" and these 3 property set in "false". That property "false" value can not be change to "true". So for this reason Math.PI=3.141 value is constant we can't change the PI value.
const piValue = Math.PI;
Math.PI = 4.256
console.log(piValue);               //💥Output: Still 3.141 not changed to 4.256

const mathValue = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(mathValue); 
//💥Output:👇 
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }


//👇Over here we want to change the descriptor all property value to "true". But it can't chnge.
const myObj = Object.defineProperty(Math, "PI", {
    writable: true,
    enumerable: true,
    configurable: true
})
console.log(myObj);     //💥Output: Error--can not redefine property PI
```
```text
2️⃣i don't want to loop or change a particular property in object, how to do it?
```
```javascript
//In below object's model propery don't want to loop or dont't want to change it.
const carDetails = {
    brand: "audi",
    model: "A8",
    price: 3589900
}
const checkDesc = Object.getOwnPropertyDescriptor(carDetails, "model")
console.log(checkDesc);
//💥Output:{ value: 'A8', writable: true, enumerable: true, configurable: true }

const defObj = Object.defineProperty(carDetails, "model", {
    enumerable: false,
})
console.log(defObj);
//💥Output:{ brand: 'audi', price: 3589900 }

for(let car in carDetails){
    console.log(`${car} - ${carDetails[car]}`);
}
//💥Output:
// brand - audi
// price - 3589900
```