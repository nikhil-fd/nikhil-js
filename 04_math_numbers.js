//🔔Always write clean code and meaning full code.🔔
//Number🚩
//Goto Browser --> console --> write --> console.log(new Number); --> it returns all Number's method/function.

//🎁toString():
//toString() method is used to convert the number into string. 
const score = 250;
const walletBal = new Number(200);
const newBal = walletBal.toString();
console.log(newBal);                    //💥Output: 200
console.log(typeof(newBal));           //💥Output: string
console.log(score);                   //💥Output: 250
console.log(typeof score);           //💥Output: number

//🎁toFixed():
//toFixed() method it takes a parameter in number as per parameter number after decimal any digit of number is there,
//it will return the decimal digit as per the specified value mentioned in toFixed() and that decimal number increment with 1. 
const price = 189.758;
const fixedBal = price.toFixed(2);
console.log(fixedBal);               //💥Output: 189.76


//🎁toPrecision():
//toPrcecision() method of number values return a string representing this number to the specified precision. 
const precisionBal = price.toPrecision(4);
console.log(precisionBal);                   //💥Output: 189.8
console.log(price.toPrecision(3));           //💥Output: 190


//🎁toLocaleString():
//This method is used to separate the digit by comma.
const countPrice = 1000000;
console.log(countPrice.toLocaleString());        //💥Output: 1,000,000  (it returns usa standard value separated by comma)
console.log(countPrice.toLocaleString('en-In'));  //💥Output: 10,00,000  (it convert into india standard number separated by comma)
 

//Math🚩
//Goto Browser --> console --> write --> console.log(Math); --> it returns all Math's method/function.

//🎁Math.round():
//This method is used to return the integer value only if after decimal the number is 5 or more than 5 then the 
//integer value incrementd with 1.
let x = 12.589;
let m = -12.589;
let n = 12.214;
console.log(Math.round(x));    //💥Output:13
console.log(Math.round(m));     //💥Output: -13
console.log(Math.round(n));      //💥Output: 12

//🎁Math.abs():
//It returns the fractional number and it converts negative(-) number into positive(+) number.
let y = -12.569;
let p = 12.569;
console.log(Math.abs(y));      //💥Output: 12.569
console.log(Math.abs(p));       //💥Output: 12.569

//🎁Math.ceil():
//It returns the integer value only if after decimal any number is there then the integer value,
//will increment with 1 but negative number will not increment. 
let z = 13.159;
let r = -13.159;
console.log(Math.ceil(z));      //💥Output: 14
console.log(Math.ceil(r));       //💥Output: -13

//🎁Math.floor():
//It returns the integer value only.
//If there is negative(-) integer value then it will increment with 1.
let a = 14.235;
let c = -14.235;
console.log(Math.floor(a));       //💥Output: 14
console.log(Math.floor(c));        //💥Output: -15

//🎁Math.trunc():
//It returns only integer value.
//If there is any positive(+) & negative(-) integer value still it won't increment with 1.
let b = -14.256;
let d = 14.256;
console.log(Math.trunc(b));       //💥Output: -14
console.log(Math.trunc(d));        //💥Output: 14

//🎁Math.sqrt():
//It returns the square root of a number.
const bigNum = 625;
console.log(Math.sqrt(bigNum));       //💥Output: 25

//🎁Math.PI:
//It returns a pie value.
const pieNum = Math.PI;
console.log(pieNum);                  //💥Output: 3.141592653589793

//🎁Math.min():
//It returns a minimum number.
console.log(Math.min(3, 6, 2, 12, -32, -20));      //💥Output: -32

//🎁Math.max():
//It returns a maximum number.
console.log(Math.max(3, 6, 2, 12, -32, -20));      //💥Output: 12

//🎁Math.random(): 
//This method returns random value between 0 to 1 in decimal.
console.log(Math.random());        //💥Output: 0.795768563

//here we multiply 10 means to get value in interger
console.log((Math.random() * 10));   //💥Output: 7.95768563

//here we add 1 means interger will not bring 0
console.log((Math.random() * 10) + 1);     //💥Output: 8.5689635


//🎯Return a number between 10 to 20 and it inclused both min value max value as well.
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);   //💥Output: 11
//In above 1st we got random number and it gave between o.1 to 0.9
//2nd we convert random number into integer number by multiplying (max-min) but it includes 0 as well.
//3rd to avoid 0 number then we added 1.
//4th to get the number between 10 to 20 then we added min number.
//5th we returned number into an integer by using Math.floor(). 


