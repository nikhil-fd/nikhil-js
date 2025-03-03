//🚩Array: We can store multiple element in mutliple data types on a single variable i.e. called Array.
//         In array we can store string, number, boolean, array, object and function as well.

//🎯We can define Array in 2 ways-
//1️⃣way-
const myArr1 = [25,55,65,75,85]
console.log(myArr1[3]);

//2️⃣way-
const myArr2 = new Array(95,105,205,305,405,505)
console.log(myArr2[4]);
//Also we can check length of Array.
console.log(myArr2.length);


//🎯We can access Array's element/value in 5 ways.
//1️⃣Index no.
//2️⃣Loop (for, while, do-while)
//3️⃣Iterators (for..in, for..of)
//4️⃣toString()
//5️⃣map() & forEach() method.

//1️⃣Using Index no.
let myBios = ["Nikhil", 30, "ReactJS", function(){console.log("Welcome to Nikhil Profile")}];
console.log(myBios[0]);          //💥Output: Nikhil
console.log(myBios[2]);          //💥Output: ReactJS
console.log(myBios[3]());        //💥Output: Welcome to Nikhil Profile


//2️⃣Loop (for, while, do-while).
let myPlayers = ["virat", 32, true, "rahul", 31, "sky", 36];
        for(let i = 0; i < myPlayers.length; i++){
            console.log(myPlayers[i]);             //💥Output: virat 32 true rahul 31 sky 36
        }


//3️⃣Iterators (for..in, for..of)
let myWomenPlayers = ["smriti", 32, true, "kaur", 31, "ellypse", 36];
        for(let players of myWomenPlayers){
            console.log(players);          //💥Output: virat 32 true rahul 31 sky 36
        }        


//4️⃣toString()
let myFemalePlayers = ["smriti", 32, true, "kaur", 31, "ellypse", 36];
console.log(myFemalePlayers.toString());     //💥Output: smriti, 32, true, kaur, 31, ellypse, 36


//5️⃣map() & forEach() method.
let myGirlsPlayers = ["smriti", 32, true, "kaur", 31, "ellypse", 36];
myGirlsPlayers.map((element, index) => {
    console.log(element);              //💥Output: smriti 32 true kaur 31 ellypse 36
});   


//👉Storing map() method inside a variable.
const morePlayers = myGirlsPlayers.map((element, index) => {
    return element;
});
console.log(morePlayers);   //💥Output: ['smriti', 32, true, 'kaur', 31, 'ellypse', 36]


//forEach()
let myGPlayers = ["smriti", 32, true, "kaur", 31, "ellypse", 36];
myGPlayers.forEach((element, index) => {
    console.log(element);            //💥Output: smriti 32 true kaur 31 ellypse 36
});   


//👉Storing forEach() method inside a variable.
let myGoPlayers = ["smriti", 32, true, "kaur", 31, "ellypse", 36];
const morePlay = myGoPlayers.forEach((element, index) => {
    return element;
});
console.log(morePlayers);   //💥Output: Undefined

//OR
let myGodPlayers = ["smriti", 32, true, "kaur", 31, "ellypse", 36];
const moresPlay = myGoPlayers.forEach((element, index) => {
    console.log(element);      //💥Output: Undefined
});

//🕑Example:
//forEach() returning value without mutating the original array.
const myBday = [1992, 1993, 1994]
myBday.forEach((elem) => console.log(elem + 2))            //💥Output: 1994 1995 1996
console.log(myBday);                                //💥Output: [1992, 1993, 1994]

//🕑Example:
//map() returning value without mutating the original array.
const meBday = [1992, 1993, 1994]
myBday.map((elem) => console.log(elem + 2))            //💥Output: 1994 1995 1996
console.log(myBday);                                //💥Output: [1992, 1993, 1994]



//🚨🚨Follow file no. "14_array_methods.js" for better explained map() and forEach()🚨🚨


//🎁Difference Between map() method & forEach()🎁     
// The main difference between map() and forEach() is returning value.
//✅map() --1. map() mehod is used to return the "element" in a new array when use "return" statement. map() also return "index" and "array".
//          2. When not storing/assign map() method into a variable and use console.log instead of "return" statement at that time
//             it returns value without array.
//          3. map() method returing value without mutating the original array.
//          4. map() method is a chainable method after performing map() we can add again map(), filter(), sort(), reduce() etc..

//✅forEach() --1. Whereas forEach() method returns "undefined" when use "return" statement.
//              2. When not storing forEach() method into a variable or instead of "return" statement use console.log
//                 at that time it returns value without array. 
//              3. forEach() method also returing value without mutating the original array. 
//              4. forEach() method is not a chainable method.



//🎁join(): it adds all the elements of array into a string and separeated by comma bydefault.
//          comma is bydefaut but we can add our own symbol instead of comma like arrow,star etc..
//          it returns value in string.
//         2. Using join() method we can convert Array element into a string by space(" "), hyphen("-"),
//            comma(",") and your own symbol as well. it is not mutating the original array.
const myFavPlayers = ["Virat","Rahul","Rohit"];
const newArr = myFavPlayers.join();
console.log(newArr);                    //💥Output: Virat,Rahul,Rohit
console.log(typeof newArr);            //💥Output: string
console.log(myFavPlayers.join(" "));   //💥Output: virat Rahul Rohit
console.log(myFavPlayers.join("-"));   //💥Output: virat-Rahul-Rohit



//🎁flat(): * It is used to flattern all sub array and return a new array. 
//          * Returns a new array with all sub-array elements concatenated into it recursively 
//            up to the specified depth.
const favJesey = [18,7,1,[17,25,100],[65,87,95]];
const flatArr = favJesey.flat(Infinity);
console.log(flatArr);


//🎁reduce(): 1.reduce() method is used to reduce the 2dimensional and 3dimensional array into a single dimensional array
//              also it is used for data manipulation like addition, sub, div, mul and return a single value.
//              it takes 4 arguments accumulator,element,index & array. accumulator stores the initial value and element strores the current value. 
//            2.reduce() method does not change the original value.
        
//🕑Example1:
        const myNum = [10,20,30,40,50,60];
        const result = myNum.reduce((accumulator,elem) => {
            return accumulator + elem;
        });
        console.log(result);          //💥Output: 210

//🕑Example2:
       const primeNum = [50, 500, 5000];
       const finalPrime = primeNum.reduce((accu, elem) => {
        return accu += elem; 
       },10) 
       console.log(finalPrime);      //💥Output: 5560 (accu = 10 & elem = 50)
              

//🕑Example3:  V.V.I
//1st get the student who scored above 80, then calculate their average score individually. 

let passStudent = [68, 75, 82, 80, 95, 70, 98];
let getResult = passStudent
    .filter((elem) => elem > 80)       //[82, 95, 98]
    .reduce((acc, score, _, arr) => acc + score / arr.length, 0);
console.log(getResult);
//💥Output: 91.67

//👆V.V.I  (how line no. 163 calculating explained below👇)
//.reduce((acc, score, _, arr) => acc + score / arr.length, 0)
//Now "acc" = 0 and "score" = 82 and arr.length = 3 >>> here 0 + 82 = 82 / 3❌ NO

//⏳Applied "ବ ର ହ ଗୁ ମି ଫେ" sutra (ବ--ବନ୍ଧନୀ  ର    ହ--ହରଣ   ଗୁ--ଗୁଣନ   ମି--ମିଶାଣ   ଫେ--ଫେଡ଼ାଣ )
//⏳BODMAS (Bracket, Order, Division, Multiplication, Addition, Subtraction)
//According to this formula below are calculating👇.

//1️⃣iteration-->Now "acc" = 0 and "score" = 82 and arr.length = 3 >>> here 0 + 82 / 3✔ here 1st 82/3 is dividing and result is 27.33 whatever value got, that value add with 0 i.e. 0 + 27.33 = 27.33
//2️⃣iteration-->Now "acc" = 27.33 and "score" = 95 and arr.length = 3 >>> here 27.33 + 95 / 3✔ here 1st 95/3 is dividing and result is 31.67 whatever value got, that value add with 27.33 i.e. 27.33 + 31.67 = 59.00
//3️⃣iteration-->Now "acc" = 59.00 and "score" = 98 and arr.length = 3 >>> here 59.00 + 98 / 3✔ here 1st 98/3 is dividing and result is 32.67 whatever value got, that value add with 31.67 i.e. 31.67 + 32.67 = 91.67
        


//🎁find():  1.find() method is used to search the element/value in an array and returns the 1st occurence element
//              as per the given condition.
//            2.if condition not matched then it returns undefined.

        const myScore = [5, 15, 25, 35, 45, 55];
        const scoreResult = myScore.find((elem) => {
            return elem > 20;
        });
        console.log(scoreResult);   //💥Output: 25

        
//🎁filter():  1.filter() method is used to search the element/value in an array and returns all matched element/value
//                in a new array as per the given condition.
//             2.If the condition not matched then it returns empty array [].
//             3.It is not mutating the original array. 

        const preAge = [15, 18, 22, 26, 28, 30];
        const preResult = preAge.filter((elem) => {
            return elem < 25;
        });
        console.log(preResult);   //💥Output: [15, 18, 22] 
        
        
//🎁sort():  1.sort() method is used to arranges the array element in ascending order,
//              and return these element in a new array.
//           2.It arranges 1st-negative number, 2nd-positive number, 3rd-special charcter, 4th-charcter/alphabet
//          📍3.It is mutating the origianl array.

// 4.when we are sorting "number" from small number to large number meanwhile we need to pass a callback function
//   in sort() method then it will arrange all number element from small number to large number or large to small.
//   sort((a,b) => a - b) -- small to large number
//   sort((a,b) => b - a) -- large to small number


// 5.When we are sorting "string" value then no nedd to pass callback function in sort() method only
//  simple use sort() then it will arrange all string element in ascending order.
//sort()
let age = [25, 30, 2, 12, 20, 52];
console.log(age.sort((a,b) => a - b));  //💥output: [ 2, 12, 20, 25, 30, 52 ]
console.log(age.sort((a,b) => b - a));  //💥output: [ 52, 30, 25, 20, 12, 2 ]
console.log(age.sort());            //💥Output: [ 12, 2, 20, 25, 30, 52 ]
console.log(age);                  //💥Output: [ 12, 2, 20, 25, 30, 52 ]


let members = ["vishal", "ayush", "suyash", "arjit", "nikhil"]
console.log(members.sort());       //💥output: [ 'arjit', 'ayush', 'nikhil', 'suyash', 'vishal' ]
console.log(members);             //💥output: [ 'arjit', 'ayush', 'nikhil', 'suyash', 'vishal' ]

const alphaVal = ["P", "S", "N", "R", "B", "J", 4, 2, 3, -10, 10, "@niil"];
console.log(alphaVal.sort());  //💥Output: [-10, 10, 2, 3, 4, '@niil', 'B', 'J', 'N', 'P', 'R', 'S']


//🎁reverse():  1.reverse() mehod is used to arranges the array element in reverse order.
//                from (bottom to top / right to left) and it returns all element in a new array 
//             📍2.It is mutating the original array.

        const alphaNumVal = ["P", "S", "N", "R", "B", "J", 4, 2, 3];
        console.log(alphaNumVal.reverse());    //💥Output: [3, 2, 4, 'J', 'B', 'R', 'N', 'S', 'P']
        console.log(alphaNumVal);             //💥Output: [3, 2, 4, 'J', 'B', 'R', 'N', 'S', 'P']


//🎁findIndex():  1. findIndex() metod can serach and returns the index no. of 1st occurnece of element,
//                   as per given condition. 
//                2. if condition not matched then it returns -1.
        const scores = [5, 10, 15, 20, 25];
        const scoresResult = scores.findIndex((elem) => {
            return elem > 22
        });
        console.log(scoresResult);  //💥Output: 4


//🎁indexOf():   1. This method is used to return the index no. of 1st occurence of element as per the given value.
//               2. If the value not matched then it returns -1.
//               3. indexOf() seraching the value forwardwise.
        const players = ["virat", "dhoni", "rahul", "sikhar"];
        const playResult = players.indexOf("rahul");
        console.log(playResult);    //💥Output: 2


//🎁lastIndexOf():   1. This method is used to search the value reverse wise and return the index no of 
//                       last occurence of element as per the given condition.

        const playerSus = ["virat", "dhoni", "rahul", "sikhar", "rahul", "dhoni"];
        const playResults = players.lastIndexOf("rahul");
        console.log(playResults);

//🎁push():  1.push() method is used to add one or more element in the end of an array.
//              And returns the new length of an array.
//          📍2.It is mutating the original array.        

        const films = ["fadar", "rohini", "tejas"];
        const allFilms = films.push("animals", "tiger3");
        console.log(allFilms); //💥Output: 5
        console.log(films);  //💥Output: [ 'fadar', 'rohini', 'tejas', 'animals', 'tiger3' ]


//🎁unshift():   1.unshift() method is used to add one or more element in the beginning of an array.
//                 And returns the new length of an array. 
//              📍2.It is mutating the original array.       

        const favGames = ["igi", "nfs", "gta"];
        const allGames = favGames.unshift("spy", "bird");
        console.log(allGames);  //💥Output: 5
        console.log(favGames);  //💥Output: [ 'spy', 'bird', 'igi', 'nfs', 'gta' ]


//🎁pop():   1. pop() method is used to remove the last element of an array and return the removed element.
//           2. This method changes the length of an array.
//          📍3. It is mutating the original array.
        
        const filmss = ["fadar", "rohini", "tejas"];
        const allFilmss = filmss.pop();
        console.log(allFilmss); //💥Output: tejas


//🎁shift(): 1. shift() method is used to remove the first elment of an array and returns that removed element.
//           2. This method changes the length of an array.
//          📍3. It is mutating the original array.

        const favGamess = ["igi", "nfs", "gta"];
        const allGamess = favGamess.shift();
        console.log(allGamess);  //💥Output: igi

//🎁some()
// some() mthod takes a callback function and it checks every array elements 1 by 1 as per the
// given condition as soon as the condition gets matched with "true" fromthere to ahead it will stop checking other elements,
// and returns "true" if the condition not matched with all elements then it returns "false".
const arr = [1, 2, 3, 4, 5]
console.log(arr.some((element) => element === 2))       //💥Output: true

//🎁every()
// every() mthod takes a callback function and it checks every array elements 1 by 1 as per the
// given condition as soon as the condition gets matched with "false" fromthere to ahead it will stop checking other elements,
// and returns "false" if the condtion not matched with all elements then it return "true".
const names = [
    {name: "nikhil", answer: "yes"},
    {name: "mohan", answer: "yes"},
    {name: "manoj", answer: "no"},
    {name: "ajay", answer: "yes"},
];
console.log(names.every((name) => name.answer === "yes"))   //💥Output: false



//🎁splice(): this method is usually used for perform crud operation adding, removing and replace element into a specific location
//            in an array.it takes 3 arguments start index,delete count and new element.
//            if you are deleteing any element into an array then it returns the deleted element into an array.
//            if you are not deleteing any element only adding element then it returns empty array.
//            delete count strat from 1,2,3....
        const ourPlayers = ["virat","rahul","rohit","iyer","gill"];
        const updatedPlayers = ourPlayers.splice(1,3);        //removing start from start count to till delete count 3
        const allPlayers = ourPlayers.splice(3,0,"gill");
        console.log("A ", updatedPlayers); //💥Output: A [ 'rahul', 'rohit', 'iyer' ]
        console.log("C ", allPlayers);     //💥Output: C []
        console.log("D ", ourPlayers);     //💥Output: D [ 'virat', 'gill' ]

        const favActors = ["salman", "hrithik", "remo", "nanapatekar"];
        const allActors =  favActors.splice(2,0,"tiger");
        console.log(allActors); //💥Output: []
        console.log(favActors); //💥Output: [ 'salman', 'hrithik', 'tiger', 'remo', 'nanapatekar' ]

        const favActor = ["salman", "hrithik", "remo", "nanapatekar"];
        const allFav = favActor.splice(2,1,"bipasa");
        console.log(allFav);   //💥Output: ['remo']
        console.log(favActor); //💥Output: ['salman', 'hrithik', 'bipasa', 'nanapatekar']


//🎁slice(): 1. it returns the extracted element in a new array and it starts extracting from start number 
//              to till before the end number. it doesn't include end number. 
//          📍2.it is not mutating the original array.
//           3.If you give -ve number only, then it extract only last numbet of element whatever number will be mention.
//              Suppose mentioned -2 then it will extract only last element.           
//**slice() method can be use in both Array and String but subString() and subStr() method can use only String.

        let mySkill = ["sap","html","css","js","react js","bootstrap"];
        let sliceValue = mySkill.slice(1,4);
        console.log(sliceValue);             //💥Output: [ 'html', 'css', 'js' ]
        console.log(mySkill);               //💥Output: ['sap', html', 'css', 'js', 'react js', 'bootstrap']
        console.log(mySkill.slice(-2));    //💥Output: ["react js", "bootstrap"]
        

        
//🎯Difference between slice() and splice() method ?        
//slice() -- slice() method doesn't mutating(changing) the original array when extracting element in array.
const extElem = [10,20,30,40,50,60]
const elemNew = extElem.slice(2,4)
console.log(elemNew);               //💥Output: [ 30, 40 ]
console.log(extElem);              //💥Output:  [ 10, 20, 30, 40, 50, 60 ]   --same original array

//splice() -- splice() method mutating(changing) the original array when performing add or remove or replace element.  
const remoElem = [100,200,300,400,500,600,700]
const elemsNew = remoElem.splice(1,2,1000)
console.log(elemsNew);               //💥Output: [ 200, 300 ]
console.log(remoElem);              //💥Output:  [ 100, 1000, 400, 500, 600, 700 ]  --changed original array 

//🎁concat(): concat() method is used to combine/merge/concatenate two or more array and it returns a 
//            new array without modifying the existing array.
//            "spread operator" also working same as it is concat(), in real-time mostly use "spread operator"
//             instead of concat() method.
const team1Elem = ["dc", "rcb"]
const team2Elem = ["mi", "srh"]
const team3Elem = ["csk", "kkr"]
console.log(team1Elem.concat(team2Elem,team3Elem));    //💥Output: ['dc','rcb','mi','srh','csk','kkr']
console.log(team1Elem);                         //💥Output:  [ 'dc', 'rcb']
//OR
//By using push(): Below push() method adds 'bowlElem' full array inside 'batsElem' array.
const batsElem = ["virat", "kohli", "pant"]
const bowlElem = ["bumrah", "siraj", "arshdeep"]
const allPlyerElem =  batsElem.push(bowlElem);
console.log(allPlyerElem);                 //💥Output: 4
console.log(batsElem);                    //💥Output: [ 'virat', 'kohli', 'pant', [ 'bumrah', 'siraj', 'arshdeep' ] ]
console.log(batsElem[3][1]);              //💥Output: siraj

//🎁spread operator(...)
//It is used to merge the number of array or object and return a new single array or object.
const myIplBatsman = ["virat","dhoni","ishan",];
const myIplBowlers = ["chahal","shami","siraj","kuldeep"];
const mergeAllPlayers = [...myIplBatsman,...myIplBowlers];
console.log(mergeAllPlayers);        //💥Output: ['virat','dhoni','ishan','chahal','shami','siraj','kuldeep']

//😍how to check whether it is Array or String in array?
//1st it checks is it array value or not.
//🎁Array.isArray()
console.log(Array.isArray("NIKHIL DAS"));       //💥Output: false  

//🎁Array.from()
//It can convert single string value into an array. Also it can convert object by it's key and value.
console.log(Array.from("NIKHIL DAS"));      //💥Output: ['N', 'I', 'K', 'H','I', 'L', ' ', 'D','A','S']

const myName = "Nihil Das";
console.log(Array.isArray(myName));        //💥Output: false   

const myTech = "Developer";
console.log(Array.from(myTech));           //💥Output: ['D', 'e', 'v','e', 'l', 'o','p', 'e', 'r']

//🎁Array.of()
//it converts multiple string value into single/an array.
const myProject1 = "ecommerce";
const myProject2 = "calculator";
console.log(Array.of(myProject1,myProject2));    //💥Output: [ 'ecommerce', 'calculator' ] 


//🚩Array Destructuring:
//It is a technique used to extract the array elements and store in individual references.
//In this technique we don't need to mention array again and agian also it avoid the DRY(Donot Repeat Yourself) principle
const myBioss = ["Nikhil", 3, "React Js", "Flipkart"];
console.log(myBioss[0]);
console.log(myBioss[1]);
console.log(myBioss[2]);
console.log(myBioss[3]);
//Note: Above Here we have to metnion array[0] repeateldly/recursively.
//      But below we used Array destructuring and there no need to use array[0] repeatedly,
//      we can access only thorugh reference name.

//Array De-structuring:
const myBio = ["Nikhil", 3, "React Js", "Flipkart"];
const [name, exp, skill, company] = myBio;
console.log(skill);


//🚩Array.from(data)
//It converts any type of data(i.e. string,object) into array .
//check the example in file "dom.html"


//🎁How to Access Array value in Function🎈
//we can access array in fucntion in two ways
    //1️⃣ We can take array name as a parameter in function but in parmeter don't keep same array name just change the array name.(same like object case)
    //2️⃣ Also we can pass array directly in function's argument.

//Method1️⃣     (If array defined outside function)    
const myMarks = [78, 85, 56, 68];
function classResult(marks){      //👈Rule - changed array name as "marks" instead of "myMarks" (same like object case)
    return marks[2];
}
console.log(classResult(myMarks));        //💥Output: 56 


//Method2️⃣    (If array defined in function argument) 
function myPincode(pincode){        //👈Rule: This "pincode" is array's name
    console.log(pincode[1]);
}
myPincode([756036,560100,560037]);        //💥Output: 560100



//🎯Check Prototype of Array.
// const myArr = [1,2,3,5]
// myArr
// (4) [1, 2, 3, 5]
// 0: 1
// 1: 2
// 2: 3
// 3: 5
// length: 4
// [[Prototype]]: Array(0)
// at: ƒ at()
// concat: ƒ concat()
// constructor: ƒ Array()
// copyWithin: ƒ copyWithin()
// entries: ƒ entries()
// every: ƒ every()
// fill: ƒ fill()
// filter: ƒ filter()
// find: ƒ find()
// findIndex: ƒ findIndex()
// findLast: ƒ findLast()
// findLastIndex: ƒ findLastIndex()
// flat: ƒ flat()
// flatMap: ƒ flatMap()
// forEach: ƒ forEach()
// includes: ƒ includes()
// indexOf: ƒ indexOf()
// join: ƒ join()
// keys: ƒ keys()
// lastIndexOf: ƒ lastIndexOf()
// length: 0
// map: ƒ map()
// pop: ƒ pop()
// push: ƒ push()
// reduce: ƒ reduce()
// reduceRight: ƒ reduceRight()
// reverse: ƒ reverse()
// shift: ƒ shift()
// slice: ƒ slice()
// some: ƒ some()
// sort: ƒ sort()
// splice: ƒ splice()
// toLocaleString: ƒ toLocaleString()
// toReversed: ƒ toReversed()
// toSorted: ƒ toSorted()
// toSpliced: ƒ toSpliced()
// toString: ƒ toString()
// unshift: ƒ unshift()
// values: ƒ values()
// with: ƒ with()
// Symbol(Symbol.iterator): ƒ values()
// Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}
// [[Prototype]]: Object
