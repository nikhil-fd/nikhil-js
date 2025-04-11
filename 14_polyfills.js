//🎁Polyfills  (TimeStamp 01:30:00 -- 01:40:00)

//🔥What is polyfills?
//👉A polyfills in js is a piece of code that allows older browser to use modern javascript features.

//When we access array then that array contains some method like map(), filter(), reduce() and many more.
//Why or how these method showing in browser as these method defined in Array.prototype.map,
//thats why when we use array then bydefault these method display.
//Who defined these method in Array.prototype?
//these method defined by browser's javascript engine and every browser like chrome, firefox, opera had defined,
//these method in Array.prototype except internet explore(IE) so these method won't work on IE.
//In thid scenario if we have used map() method in an array then it will work on chrome, firefox, opera but,
//when the code runs in internet explorer at that time the application will be crashed because
//internet explorer's javascript engine not define map method in Array.prototype. Then it is very riks so to avoid
//such situation we can create custom method(or we can create our own method) i.e. called "Polyfills" that will be working as map() method
//so that it can work on every browser.

//NOTE: Here i took map() method as an example but we can define all custom method like filter(), reduct() etc.
//      not only for array but also string.


//👌BEST: "this" defination👌
//💥"this" value always depends on current object and "this" value will be "current object",
// like now we are talking about which object suppose we are talking about current object i.e. "pen" then "this" value will be pen.
// suppose we are talking about samsung phone then "this" value will be samsung phoen.
//🔥"this" always use when calling an object.

//🎁How to write polyfills?
//1️⃣First of all understand the signature of that method suppose here i am taking "forEach" method.
//2️⃣Understand forEach() method what input takes and what output returns?
//3️⃣forEach(() => {}) method takes a callback function as a parameter.
//4️⃣And that callback function takes 3 parameter i.e. "element", "index" & "array".
//5️⃣At last forEach() method returns output "element", "index" & "array".
//NOTE: Write all polyfills about all method in this approach.

//🎁forEach() polyfills as myForEach()
let arra = [10, 20, 30, 40, 50];
if (!Array.prototype.myForEach) {
    Array.prototype.myForEach = function (callback) { //👈why we wrote callback because in forEach() method has parameter i.e. callback function thats why we passed "callback" as a callback function and callback function takes 3 argument i.e. element, index & array.
        for (let i = 0; i < this.length; i++){
            callback(this[i], i, this);  //👈here defined point 4
        }    
    }
}
arra.myForEach((elem, index) => console.log(`${elem} -- ${index}`));  //💥Output: 10 -- 0 20 -- 1 30 -- 2 40 -- 3 50 -- 4 



//i want to use map() it reutrn all value in a new array with multiply by 3.
//map() not mutating the original array.
//map() method takes a callback function that is user function.

//🎁 map() polyfills as nikhilMap()🚩

let arr100 = [100, 200, 300, 400, 500];

if (!Array.prototype.nikhilMap) {        //👈if nikhilMao() not available then we are creating polyfills as nikhilMap() in below
    Array.prototype.nikhilMap = function (callbackfunc) {         //👈Here we are passing callback function(callbackfunc) as a parameter so that it will return element, index, array.
        const newArr = [];
        for (let i = 0; i < this.length; i++){          //👈"this" value always current object's value like currently we are talking about which object, here currently we are talking about array i.e. "arr100" so "this" value is "arr100".
            let data = callbackfunc(this[i], i, this)        //👈here we are calling that callbackfunc() (or we can say user function) like in map() method also calls a callback function and it return element and index and array.
            newArr.push(data)
        }

        return newArr;
    }
}
const getData = arr100.nikhilMap((elem, index, arr) => {
    // let result = elem * 3
    // return Number(result);
    return `${elem} -- ${index} -- ${arr}`
});
console.log(getData);
//💥Output:
// [
//     '100 -- 0 -- 100,200,300,400,500',
//     '200 -- 1 -- 100,200,300,400,500',
//     '300 -- 2 -- 100,200,300,400,500',
//     '400 -- 3 -- 100,200,300,400,500',
//     '500 -- 4 -- 100,200,300,400,500'
//   ]



//🎁forEach polyfills as nikhilForEach()🚩
//Requirement:
//forEach() gives value in without array but it returns undefined.
//forEach() takes a callback function and that callback function returns element, index, array.
let arr10 = [10, 20, 30, 40, 50];
if (!Array.prototype.nikhilForEach) {
    Array.prototype.nikhilForEach = function (cbFunc) {
        for (let i = 0; i < this.length; i++){
            cbFunc(this[i], i, this)
        }
    }
}

arr10.nikhilForEach((elem, index, arr) => {
    console.log(`${elem} -- ${index} -- ${arr}`);
});
//💥Output: 10 -- 0 -- [10, 20, 30, 40, 50]
//20 -- 1 -- [10, 20, 30, 40, 50]
//30 -- 2 -- [10, 20, 30, 40, 50]
//40 -- 3 -- [10, 20, 30, 40, 50]
//50 -- 4 -- [10, 20, 30, 40, 50]



//🎁filter() polyfills as nikhilFilter()🚩
//Requirement:
//filter() takes a callback function as an argument and it return all matched element in a new array.
//filter() method returns all matched element in a new array as per the given condition.
//filter() checks the condition, if the condition is true then only it returns element.

let score = [150, 180, 200, 220, 260, 280];
if (!Array.prototype.nikhilFilter) {
    Array.prototype.nikhilFilter = function (callbckFunc) {
        let newArrValue = [];
        for (let i = 0; i < this.length; i++) {
            if (callbckFunc(this[i])) {               //👈here it checks condition if the callback function returns value then then if statement will execute. callback function will return value when condition gets true. so when "if" statement callback function will have value then "if" will execute.
                newArrValue.push(this[i])
           }
        }
        return newArrValue;
    }
}

let biggerData = score.nikhilFilter((elem) => {
    return (elem > 200);
})
console.log(biggerData);     //💥Output: [220, 260, 280]
console.log(score);         //💥Output: [150, 180, 200, 220, 260, 280]






