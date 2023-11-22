//🚩array.filter()🚩
// "filter()" can search the value and return all the element in a new array that matches the given condition.
// if the condition do not match then it returns an empty array [].

//👉Syntax:
// array.filter((elem) => {
//     return condition
// });

//OR

// array.filter((elem) => (
//     condition
// ));

//Example1:
const myNum = [1,2,3,4,5,6,7,8,9,10];
const searchValue = myNum.filter((elem) => {
    return elem > 5
});
console.log(searchValue);


//Same Example1 we can do by forEach() loop also.👇
const myScore = [10,20,30,40,50,60,70,80,90,100];
const searchScore = [];
myScore.forEach((elem) => {
    if(elem > 50){
        searchScore.push(elem)
    }
})
console.log(searchScore);


//Example2:
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


//🚩array.map()🚩
// "map()" method also same like forEach() loop.
// It returns element, index and array in a new array without mutating the original array.
// map() is a chainable method after map() method agian we can add/use map() method,filter(),sort() and reduce() method as well.

//👉Syntax:
// array.map((element, index, array) => {
//     return element, index, array
// });

//OR

// array.map((element,index,array) => (
//     element, index, array
// ));


//Example1:
const nums = [15,25,35,45,55];
const addNums = nums.map((elem) => {
    return elem + 5
});
console.log(addNums);


//Example2:
//const overs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// In overs multiply 6 and whtever value will come add with 2 each from here which value is more than 20 print these value.

const overs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const updateOvers = overs.map((elem) => (elem * 6))
                         .map((elem) => (elem + 2))
                         .filter((elem) => (elem > 20))
console.log(updateOvers);


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

// array.reduce((accumulator, currentValue) => {
//     return condition
// },0);


//Example1:
const series = [1,2,3,4,5,6];
const updateSeries = series.reduce((accumulator, currentValue) => {
    console.log(`${accumulator}  curVal ${currentValue}`);
    return accumulator + currentValue
},0)
console.log(updateSeries);


//Example2:
const buyCourse = [
    {coursename: "sap", price: 3000},
    {coursename: "java", price: 5000},
    {coursename: "python", price: 2000},
    {coursename: "rubby", price: 4000},
];
const totalPrice = buyCourse.reduce((acc, items) => {
    return acc + items.price
},0)
console.log(totalPrice);