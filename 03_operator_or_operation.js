//🔔Always write clean code and meaning full code.🔔

//🚩Operator
//operator is an object that evaluate a value.
//In javascript operators are classified into following types.
//1️⃣Assignment Operator
//2️⃣Arithmatic Operator
//3️⃣Comparison Operator
//4️⃣Logical Operator
//5️⃣Ternary Operator
//6️⃣String Operator

//1️⃣Assignment Operator (=, +=, -=, /=, *=, %=)
//assignment operator is used to assign value to its left operand based on the value of right operand.
//🎁"+=" --- how it calculate, if the left operand has string and right operand has number,
//           then "+=" will concatenate two value and the value will appear like 1st left oprand value then immediate right to right operand value.
//           Suppose if both left operand and right operand has number then "+=" mathematically adding both value,
//           and gets store the evaluated value in left operand.

//🎁"-=" --- if left operand has string and right operand has number then "-=" mathematically substract both value,
//           and the evaluated value will store in left operand.
//          suppose if both left operand and right operand has string value then "-=" same mathematically substract both value,
//          and the evaluated value will store in left operand.

//🎁"*=", "/=", "%=" -- These are same performed like "-=" mathematically evaluate both string and number,
//                      also mathematically evaluate both number and number.
//Example:
let btn1 = 1;
let btn2 = "2";
let btn3 = "3";
let btn4 = "4";
let btn5 = "5";
btn1 += 10; 
console.log(btn1);               //💥Output: 11
console.log(typeof btn1);       //💥Output: number

btn2 += 10;
console.log(btn2);               //💥Output: 210
console.log(typeof btn2);       //💥Output: string

btn3 -= 10;
console.log(btn3);              //💥Output: -7
console.log(typeof btn3);      //💥Output: number

btn4 *= 10;
console.log(btn4);              //💥Output: 40
console.log(typeof btn4);      //💥Output: number

btn4 *= "10";
console.log(btn4);              //💥Output: 40
console.log(typeof btn4);      //💥Output: number

btn5 /= 10;
console.log(btn5);             //💥Output: 0.5
console.log(typeof btn5);     //💥Output: number

btn5 /= "10";
console.log(btn5);             //💥Output: 0.5
console.log(typeof btn5);     //💥Output: number


//2️⃣Arithmatic Operator (+, -, *, /, %)
//It takes a numerical value as their operand and return a single numerical value.
//Example:
let x = 10;
let y = 20;
console.log(x += y);                 //💥Output -- 30
console.log(10 + 20 + "30");         //💥Output -- 3030
console.log("30" + 20 + 10);         //💥Output -- 302010
console.log(10 + 20 + "30" + 40 + 50); //💥Output -- 30304050
console.log("Nikhil" - "swati");     //💥Output -- NaN
console.log("" + 0);                 //💥Output -- 0
console.log("" + "");                //💥Output -- empty

console.log(10 + "20");              //💥Output -- 1020 (string)
console.log("10" + "20");           //💥Output -- 1020 (string)
console.log(10 + 20);              //💥Output -- 30 (number)
console.log("Nikhil" - "swati");     //💥Output -- NaN

console.log(9 - "5");                  //💥Output -- 4 (number)
console.log("9" - "5");               //💥Output -- 4 (number)
console.log(9 - 5);                  //💥Output -- 4 (number)

console.log(10 * 20);                 //💥Output -- 200(number)
console.log("10" * "20");             //💥Output -- 200(number)    
console.log("10" * 20);             //💥Output -- 200 (number)   

console.log("20" / "10");            //💥Output -- 2(number)
console.log("20" / 10);            //💥Output -- 2(number)
console.log(20 / 10);               //💥Output -- 10(number)

console.log(20 % 10);              //💥Output -- 0(number)
console.log("20" % 10);              //💥Output -- 0(number)
console.log("20" % "10");              //💥Output -- 0(number)


//3️⃣Comparison Operator (==, ===, !==, !=, <, >, <=, >=)
//comparison operator is used to compare the value with left operand and right operand and return a logical value true or false.
// "=="  : it compares/checks only vlaue.
// "==="  : it compares/checks value as well as data types.

//Example1:
let m = "100"
let n = 200
let p = "300"
console.log(m == 100);      //💥Output -- true
console.log(n == 200);     //💥Output -- true
console.log(p === 300);    //💥Output -- false

console.log(10 == 20);     //💥Output -- false
console.log("10" == 10);   //💥Output -- true
console.log("50" === 50);  //💥Output -- false

//V.V.I👇
console.log(null > 0);     //💥Output -- false    here null converting into number treated as 0(zero).
console.log(null == 0);    //💥Output -- false
console.log(null >= 0);    //💥Output -- true     here null converting into number treated as 0(zero).

//V.V.I👇
console.log(undefined == 0);   //💥Output -- false
console.log(undefined > 0);    //💥Output -- false
console.log(undefined < 0);    //💥Output -- false
console.log(undefined >= 0);    //💥Output -- false


//4️⃣Logical Operator (!, &&, ||)
//logical operator returns a boolean value.
// Not "!" : it converts true to false and false to true.
// And "&&" : If there is multiple expression, any 1 of them expression gets false and other expression remains true,
//            then total expression evaluate false.
// Or "||" : If there is multiple expression, any 1 of them expression gets true and other expression remain false,
//           then the entire expression evaluate true.

//Example1: Not "!"
let result1 = true
let result2 = false
console.log(!result1);   //💥Output -- false
console.log(!result2);   //💥Output -- true

//Example2: And "&&"
let myResult = 780
console.log(myResult < 800 && myResult > 700 && myResult == 700);     //💥Output -- false
console.log(myResult < 800 && myResult > 700 && myResult == 780);     //💥Output -- true

//Example3: Or "||"
let myAge = 30;
console.log(myAge <= 40 || myAge >= 40 || myAge == 40);   //💥Output -- true

//5️⃣Ternary Operator -- (condition)?"statement_if_true":"statement_if_false"
//Ternary operator is a conditional operator the statement is executed based on condition true and false.
//It is the only operator in Javascript it takes 3 operand.
//Example:
let num = 10;
console.log((num <= 20) ? `${num} is smaller than 20`:`20 is bigger than ${num}`); 
console.log(num >= 50 ? "10 is bigger than 50":"50 is smaller than 10");
//💥Output -- 10 is smaller than 20
//💥Output -- 50 is smaller than 10

//6️⃣String Operator (+)
//string operator is used to concatenate two or mutliple string and return value in a single string.
//Example:
let myFastName = "Nikhil"
let myMiddleName = "Ranjan"
let myLastName = "Das"
console.log(myFastName + myMiddleName + myLastName);   //💥Output -- NikhilRanjanDas


//🔔Postfix increment (x++)
//1st the expression is evaluate with the existing value of the variable then that value is incremented.
//Example1:
let num1 = 5;
let num2 = num1++;
console.log(num1);      //💥Output -- 6
console.log(num2);     //💥Output -- 5

//Example2:
let sum1 = 20;
let sum2 = sum1++ * 5;
console.log(sum1);       //💥Output -- 21
console.log(sum2);      //💥Output -- 100

//🔔Prefix increment (++x)
//1st the existing value of the variable is incremented then the expression is evaluated with the new value.
//Example1:
let num3 = 5;
let num4 = ++num3;
console.log(num3);      //💥Output -- 6
console.log(num4);     //💥Output -- 6

//Example2:
let sum3 = 20;
let sum4 = 30 - ++sum3;
console.log(sum3);       //💥Output -- 21
console.log(sum4);      //💥Output -- 9


// this concept not good in real time project
console.log("1" + 3 + 2);
console.log(2 + 3 + "1");
console.log(6 + 8 * 12 - 5);

//⏳Production Level Code: 
//  If there is multiple arithmatic operation to perform then must use () parenthesis becayse,
//  it improves code readability and clean.
console.log((6 + 8) * (12 - 5));
console.log(((6 + 8) * 12) - 5);

console.log(true + true);
console.log(false + true);
console.log(false + false);

//📌write a program to swap two numbers without using third variable.
var e = 50
var f = 100
e = e  + f  //s=150
f = e - f //n = 50
e = e - f
console.log(e);      //💥Output: 100
console.log(f);      //💥Output: 50


//🔔NOTE: Typescript doesn't allow you to compare with different data types.
//        Whereas Javascript allow you to compare with different data types.

//👉👉In behind the scene we assume that "null" means 0 but javascript is saying "null" means empty value not 0.
