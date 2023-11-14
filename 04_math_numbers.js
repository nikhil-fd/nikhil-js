const walletBal = new Number(200);
const newBal = walletBal.toString();
console.log(newBal);

const price = 189.758;
const fixedBal = price.toFixed(2);
console.log(fixedBal);

const precisionBal = price.toPrecision(1);
console.log(precisionBal);

const countPrice = 1000000;
console.log(countPrice.toLocaleString());
console.log(countPrice.toLocaleString('en-In'));

let x = 12.589;
let m = -12.589;
let n = 12.214;
console.log(Math.round(x));
console.log(Math.round(m));
console.log(Math.round(n));

let y = -12.569;
let p = 12.569;
console.log(Math.abs(y));
console.log(Math.abs(p));

let z = 13.159;
let r = -13.159;
console.log(Math.ceil(z));
console.log(Math.ceil(r));

let a = 14.235;
let c = -14.235;
console.log(Math.floor(a));
console.log(Math.floor(c));

let b = -14.256;
let d = 14.256;
console.log(Math.trunc(b));
console.log(Math.trunc(d));

//random() method returns value between 0 to 1 in decimal
console.log(Math.random());

//here we multiply 10 means to get value in interger
console.log((Math.random() * 10));

//here we add 1 means interger will not bring 0
console.log((Math.random() * 10) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);


