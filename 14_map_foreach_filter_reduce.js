//🚩array.filter()🚩
// "filter()" can search the value and return all the element in a new array that matches the given condition.
// if the condition do not match then it returns an empty array [].

//👉Syntax:
array.filter((elem) => {
    return condition
});

//OR

array.filter((elem) => (
    condition
));

//🕑Example1:
const myNum = [1,2,3,4,5,6,7,8,9,10];
const searchValue = myNum.filter((elem) => {
    return elem > 5
});
console.log(searchValue);                       //💥Output: [6,7,8,9,10]

//🎁forEach
//🕑Same Example1 we can do by forEach() loop also..👇
const myScore = [10,20,30,40,50,60,70,80,90,100];
const searchScore = [];
myScore.forEach((elem) => {
    if(elem > 50){
        searchScore.push(elem)
    }
})
console.log(searchScore);                     //💥Output: [60,70,80,90,100]


//🕑Example2:
const books = [
    {title: "book1", genre: "history", publish: 2011, edition: 2016},
    {title: "book2", genre: "science", publish: 2000, edition: 2005},
    {title: "book3", genre: "economics", publish: 1995, edition: 1998},
    {title: "book4", genre: "history", publish: 2008, edition: 2010},
    {title: "book5", genre: "science", publish: 1993, edition: 2007},
    {title: "book6", genre: "economics", publish: 2003, edition: 2010},
    {title: "book7", genre: "history", publish: 1998, edition: 2009},
];
const searchBooks = books.filter((elem) => {
    // return elem.genre === "history"
    // return elem.publish >= 2000
    return elem.genre === "history" && elem.publish >= 2000
});
console.log(searchBooks);
//💥Output:👆
// [
//     {title: "book1", genre: "history", publish: 2011, edition: 2016},
//     {title: "book4", genre: "history", publish: 2008, edition: 2010},
// ]


//🚩array.map()🚩
//  1. map() mehod is used to return element in a new array when use "return" statement. map() also returns index and array.
//  2. When not storing map() method into a variable or use console.log instead of "return" statement at that time
//     it returns value without array.
//  3. map() method returing value without mutating the original array.
//  4. map() method is a chainable method after performing map() we can add again map(), filter(), sort(), reduce() etc..
//👉Syntax:
array.map((element, index, array) => {
    return element, index, array
});

//OR

array.map((element,index,array) => (
    element, index, array
));


//🕑Example1:
//Add 5 of each element in array and return these element in an array.
const nums = [15,25,35,45,55];
const addNums = nums.map((elem) => {
    return elem + 5
});
console.log(addNums);                      //💥Output: [20, 30, 40, 50, 60]


//🕑Example2:
//const overs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// In overs multiply 6 and whtever value will come add with 2 each from here which value is more than 20 print these value.

const overs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const updateOvers = overs.map((elem) => (elem * 6))
                         .map((elem) => (elem + 2))
                         .filter((elem) => (elem > 20))
console.log(updateOvers);                                   //💥Output:[26, 32, 38, 44, 50, 56, 62]


//🚩forEach() loop/iterators🚩  (Same forEach() loop explained in file no. 👉13_loops_iterators.js👈)
// forEach() method returns "undefined" when use "return" statement.
// forEach() method returns value without array when use console.log instead of return.
// forEach() returns elment, index and array when we are not storeing in variable.
// mostly it is used when you are accessing array of object values.
// forEach() loop uses callback function.
// Callback function is a function that is passed as an argument to another function or method and it is executed
// after some operation has been completed.  
//🔴 forEach() loop returns value without mutating the original array, same as map() method. 
//🔴 The difference between forEach() and map() is returning value forEach() return "undefined" whereas map() return "element in a new array".

//🔔Syntax:
//1️⃣
Array.forEach((element, index, array) => {
    console.log(`${element} ${index} ${array}`);      //💥Output: element index array
})
//2️⃣
Array.forEach((element, index, array) => {
    return `${element} ${index} ${array}`
})                                         //💥Output: undefined (store this forEach() in a variable and use console.log() then it returns "undefined")     


//🕑Example1:
const myBday = [1992, 1993, 1994]
myBday.forEach((elem) => console.log(elem + 2))          //💥Output: 1994 1995 1996
console.log(myBday);                              //💥Output: [1992, 1993, 1994]   (without mutating the original array)

//🕑Example2: forEach() value store in variable
const myCourses = ["sap","react","python","java"];
const storeValues = myCourses.forEach((elem, index, array) => {
    return(`${elem} ${index} ${array}`);
});
console.log(storeValues);                  //💥Output: undefined



//🚩array.reduce()🚩
// reduce() method is used for flattern the array and data manipulation like add,sub,mul,div etc,
// and it returns a single value.
// It takes 4 arguments -
//                  (1) accumulator
//                  (2) current value
//                  (3) current index
//                  (4) source array

//👉Syntax:
// Here accumulator stores the initial value i.e. here we mentioned 0 only once accumulator takes initial value,
// after that it takes currentValue, so currentValue stores the arrary value and then it returns a single value.

array.reduce((accumulator, currentValue, index, array) => {
    return condition
},0);              //👈instead of 0 we can give any number(1,2,3..) this number holds as initial value of "accumulator" 


//🕑Example1:
const series = [1,2,3,4,5,6];
const updateSeries = series.reduce((accumulator, currentValue) => {
    console.log(`${accumulator}  curVal ${currentValue}`);
    return accumulator + currentValue
},0)                               //👈over here 0 is initial value for accumulator
console.log(updateSeries);             //💥Output: 21


//🕑Example2:
const buyCourse = [
    {coursename: "sap", price: 3000},
    {coursename: "java", price: 5000},
    {coursename: "python", price: 2000},
    {coursename: "rubby", price: 4000},
];
const totalPrice = buyCourse.reduce((acc, items) => {
    return acc + items.price
},0)
console.log(totalPrice);               //💥Output: 14000


//🕑Example3:
const popularCourses = [
    {course1: "data science", price: 13000},
    {course2: "fullstack developer", price: 15000},
    {course3: "reactjs developer", price: 20000},
    {course4: "database developer", price: 12000},
    {course4: ".net", price: 22000}
];
const totalCoursePrice = popularCourses.filter((elem) => {
    return elem > 10000
}).reduce((accu, elem) => {
    return accu + elem
}, 0)
console.log(totalCoursePrice);               //💥Output: error coming have to check code..pending..