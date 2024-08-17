//🔔Always write clean code and meaning full code.🔔

//🚩String
//The Javascript string are one or more character written inside double quote and single quote.
//Javascript string are used to store and manipulating text.

//🔔How can we define string?
//We can define string in 2 ways.
//1️⃣ways
const mySkill = "React js";
console.log(mySkill);                         //💥Output: React js
//2️⃣ways
const myLocation = new String("Bangalore");
console.log(myLocation);                     //💥Output: [String: 'Bangalore']

//🔔To check string length-
const myJob = "developer"
console.log(myJob.length);                //💥Output: 9

//🔔To access string each character-
const myHobby = new String("cricket")
console.log(myHobby[2]);               //💥Output: i

//🔔To check prototype of string-
const myCar = "honda";
console.log(myCar.__proto__);       //💥Output: {}


//🎁Escape character
let myDrivePath = "we know the \"SAP\" best courese"
let myKnow = 'we saw best movie "Panchayat" in amazon prime'
console.log(myDrivePath);                //💥Output: we know the "SAP" best courese
console.log(myKnow);                     //💥Output: we saw best movie "Pachayat" in amazon prime

//🎁indeOf()-
//indexOf() method/function is used to searching the character in string in forwardwise and return the 
//index no. of 1st occurence of character. if not found the return -1.
const char1 = "sumit"
console.log(char1.indexOf("m"));      //💥Output: 2
console.log(char1.indexOf("r"));      //💥Output: -1

//🎁lastIndeOf()-
//lastIndexOf() method/function is used to searching the character reverse wise and return the index no.
//of 1st occurence of character. if not found then return -1.
const char2 = "niharer"
console.log(char2.lastIndexOf("r"));     //💥Output: 6
console.log(char2.lastIndexOf("p"));     //💥Output: -1

//🎁charAt()-
//charAt() method is used to return the character as per specified number.
//if not found then return empty.
const char3 = "milika" 
console.log(char3.charAt(8));        //💥Output: i
console.log(char3.charAt(10));        //💥Output: empty

//🎁charCodeAt()-
//charCodeAt() method is used to return the unicode/ASCII code of the charcter as per specified number.
//if not found then return NaN.
const char4 = "mihika";
console.log(char4.charCodeAt(6));     //💥Output: NaN
console.log(char4.charCodeAt(5));     //💥Output: 97

//🎁search()-
//search() method same like indexOf() is used to searching the character in string and return index no. of 1st occurence of character.
//if not found then it return -1.
const char5 = "sunejaj";
console.log(char5.search("j"));        //💥Output: 4
console.log(char5.search("t"));        //💥Output: -1

//🎁slice()-
//slice() method is used to extract string character and return that extracted part. it takes 2 argument i.e. start number
//and end number. It starts extracting from start number to till before end number. it doesn't include end argument.
const char6 = "virat kohli"
console.log(char6.slice(2, 8));                                          //💥Output: rat ko
console.log(char6.slice(char6.indexOf("a"),char6.lastIndexOf("i")));     //💥Output: at kohl
console.log(char6.slice(1, -3));                                         //💥Output: irat ko
console.log(char6.slice(-3));                                           //💥Output: hli

//🎁substring()-
//substring() method also same like slice() method, but the difference is it doesn't take single -ve value(-3).
//if we give -ve single value then it return all character.
const char7 = "lomror";
console.log(char7.substring(2,5));                       //💥Output: mro
console.log(char7.substring(2,-3));                       //💥Output: lo
console.log(char7.substring(-3));                       //💥Output: lomror

//🎁substr()-
//substr() method is same like slice() and substring() method but the differnece is if we give -ve value for
//end number then it returns empty.
//substr() method doesn't prefer more. 
const char8 = "muralidhal"
console.log(char8.substr(3, 7));              //💥Output: alidhal
console.log(char8.substr(1, -4));            //💥Output: empty
console.log(char8.substr(-4));              //💥Output: dhal

//🎯NOTE: Difference between slice() & substring() & substr() ?
//Difference1️⃣
//If we pass -ve number for end number in slice() and substr() method then it returns empty,
//whereas substring() method returns character, it starts extracting from index no. 0 to till before start number,
//it doesn't include start number.
let car1 = "mahindra";
console.log(car1.slice(2, -5));            //💥Output: empty
console.log(car1.substr(2, -5));          //💥Output: empty
console.log(car1.substring(2, -5));      //💥Output: ma

//Difference2️⃣
//If we pass only single -ve number in slice() and substr() method then it starts count reversewise,
//but it returns extracted character forwardwise and it doesn't include the given number, includes till before the given number. 
//whereas substring() method returns all character.
let car2 = "toyota";
console.log(car2.slice(-4));          //💥Output: yota
console.log(car2.substr(-4));        //💥Output: yota
console.log(car2.substring(-4));    //💥Output: toyota


//🎁replace()-
//replace() method is used to replace the new value with existing value. it takes 2 parameter search value
//and replace value and returns a new string.
//it replaces the 1st match value only as per specified value. if there is multiple same character then it won't
//replace all character, it will replace only 1st matched character.
const char9 = "Virat kohli"
console.log(char9.replace("k", "K"));        //💥Output: Virat Kohli   
const char10 = "k,i,n,g,k,o,h,l,i"
console.log(char10.replace("k","K"));        //💥Output: K,i,n,g,k,o,h,l,i

//🎁concat()-
//concat() method is used to conatenate two or more string and return a single string.
const char11 = "anushka"
const char12 = "sharma"
console.log(char11.concat(" ",char12));      //💥Output: anushka sharma  

//🎁split()-
//split() method is used to convert the string into array.
//Note: Also we can use Array.from() or Array.of()  -- check out in 06_array.js
const char13 = "kiara advani"
console.log(char13.split(" "));             //💥Output: [ 'kiara', 'advani' ]    
const char14 = "k,a,t,r,i,n,a"
console.log(char14.split(","));             //💥Output: ['k', 'a', 't','r', 'i', 'n','a']

//🎁toUpperCase()-
//it converts lowercase to uppercase.
const char15 = "hitesh chaudhary";
console.log(char15.toUpperCase());          //💥Output:  HITESH CHAUDHARY

//🎁toLowerCase()-
//it converts lowercase to uppercase.
const char16 = "HITESH CHAUDHARY";
console.log(char15.toLowerCase());          //💥Output:   hitesh chaudhary

//🎁trim()-
//trim() method is used to remove the white spaces from both start side and end side of character.
const char17 = "    swati das     ";
console.log(char17);                         //💥Output:      swati das     (here both side space is there)
console.log(char17.trim());                  //💥Output: swati das  (here both side space is not there)

//🎁includes()-
//includes() method is used to serarching the charcter in string if found then return true if not return false.
const checkAvl = "nikhil6032@gmail.com"
console.log(checkAvl.includes("@"));         //💥Output: true

//🎁parseInt()-
//this method is used to convert the string into number/integer.
const char18 = "89"
console.log(parseInt(char18));             //💥Output: 89

//🎁parseFloat()-
//this method is used to convert the string into fraction number/integer.
const char19 = "89.78"
console.log(parseFloat(char19));             //💥Output: 89.78

//🎁toString()-
//this method is used to convert the number into string.
const char20 = 150
console.log(parseFloat(char20));             //💥Output: 150

//🎁toFixed()-
//it is also convert the number into string.
//it counts digits after decimal point.
//Also it works as Math.round() when you want ro round a no. to a specific no. of decimal places.
const char21 = 1256.36589
console.log(char21.toFixed(2));           //💥Output: 1256.36
console.log(char21.toFixed());            //💥Output: 1256

//🎁toPrecision()-
//this method formats a number to a specified length.
//when you want to control the number of significant digits.
const char22 = 2563.8957
console.log(char22.toPrecision(2));        //💥Output: 2.6e+3

//🎁toLocaleString()-
const char23 = 500000
console.log(char23.toLocaleString('En-In'));    //💥Output: 5,00,000

//🎁match()-
//match() method is used to verify the string and compare with regular expression.
//it returns true if matching with regular expression orelse false.
//NOTE: follow Sudhakar sharma note.

//🎁startsWith()-
//NOTE: follow Sudhakar sharma note.


//🎁endsWith()-
//NOTE: follow Sudhakar sharma note.


//🎯How to use all prototype of string?
const latestMovie = "Pachayat";
console.log(latestMovie.bold());             //💥Output: <b>Pachayat</b>
console.log(latestMovie.toUpperCase());      //💥Output: PACHAYAT
console.log(latestMovie.charAt(3));          //💥Output: h
console.log(latestMovie.indexOf("y"));       //💥Output: 5

// const myWifeName = "Swati Das";
// for(let i = myWifeName.length; i >= 0; i--){
//     let revName = " ";
//     revName += myWifeName[i]
//     console.log(revName);
// }


//🔴🟠🟡Very Very Important--Interview Question
//How to reverse string character and return these reverse character?
function myWifeyName(str){
    let revName = "";
    for(let i = str.length -1; i >= 0; i--){
        revName += str[i]
    }
    console.log(revName);
}
myWifeyName("swati das")


//🎯How to get all prototype from browser?
//Goto --browser console--and write below
console.log(new String("Nikhil"))           //💥Output: Nikhil

// [[Prototype]]: String
// anchor: ƒ anchor()                💥f - means function/method
// at: ƒ at()
// big: ƒ big()
// blink: ƒ blink()
// bold: ƒ bold()
// charAt: ƒ charAt()
// charCodeAt: ƒ charCodeAt()
// codePointAt: ƒ codePointAt()
// concat: ƒ concat()
// constructor: ƒ String()
// endsWith: ƒ endsWith()
// fixed: ƒ fixed()
// fontcolor: ƒ fontcolor()
// fontsize: ƒ fontsize()
// includes: ƒ includes()
// indexOf: ƒ indexOf()
// isWellFormed: ƒ isWellFormed()
// italics: ƒ italics()
// lastIndexOf: ƒ lastIndexOf()
// length: 0
// link: ƒ link()
// localeCompare: ƒ localeCompare()
// match: ƒ match()
// matchAll: ƒ matchAll()
// normalize: ƒ normalize()
// padEnd: ƒ padEnd()
// padStart: ƒ padStart()
// repeat: ƒ repeat()
// replace: ƒ replace()
// replaceAll: ƒ replaceAll()
// search: ƒ search()
// slice: ƒ slice()
// small: ƒ small()
// split: ƒ split()
// startsWith: ƒ startsWith()
// strike: ƒ strike()
// sub: ƒ sub()
// substr: ƒ substr()
// substring: ƒ substring()
// sup: ƒ sup()
// toLocaleLowerCase: ƒ toLocaleLowerCase()
// toLocaleUpperCase: ƒ toLocaleUpperCase()
// toLowerCase: ƒ toLowerCase()
// toString: ƒ toString()
// toUpperCase: ƒ toUpperCase()
// toWellFormed: ƒ toWellFormed()
// trim: ƒ trim()
// trimEnd: ƒ trimEnd()
// trimLeft: ƒ trimStart()
// trimRight: ƒ trimEnd()
// trimStart: ƒ trimStart()
// valueOf: ƒ valueOf()
// Symbol(Symbol.iterator): ƒ [Symbol.iterator]()
// [[Prototype]]: Object
// [[PrimitiveValue]]: ""
// [[PrimitiveValue]]: "Nikhil"
