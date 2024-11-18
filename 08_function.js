//🚩function:
//A function is a block of code designed to perform particular task.
//when function define at that time you need to call function then function can execute.

//🎯why need function?
//using function we can reuse code.
//Define code once and use it many times, only change argument to produce different output.

//🎁Callback function?
//👉Callback function is a function that passed as an argument to another function or method and it is executed after some operation,
//   has been completed.
//👉Callback function mostly used to handle asynchronous operation such as reading files, making network request and handling events.
//👉Callback function can define in such way inside a function/method -- asynchronous function(), () => {} arrow function.

//🎁Higher order function?
//A function takes/accept another function as an argument i.e. called Higher order function.
//🕑Example:
const add = (a,b) => {
    return a + b;
} 
const sub = (a,b) => {
    return a - b;
}
const multi = (a,b) => {
    return a * b;
}
const divi = (a,b) => {
    return a / b;
}
const calculation = (num1, num2, operator) => {
    return operator(num1, num2)
}
console.log(calculation(5,10,multi));     //💥Output: 5 * 10 =50


//🎯How to define function?   
function myData(){                     //👈function define 
    console.log("Developer Das");
    console.log("frontend developer");
}
myData       //👈function's reference
myData()     //👈function's execution/calling

//🎯what is function parameter?
//function parameter are the names listed in the function definition.
//function parameter name can be string and cannot start with number.

//🎯what is function argument?
//function argument are the rela values passed to the function.
//function argument value can be any data type i.e. primitive or non-primitive or complex such as-string, number,
//boolean, null, undefined, bigInt, symbol, array, object and function.

//🎈How to render function value in Simple Function🎈
//1️⃣way -- using parameter and argument:👇
function myLastName(lname){
    return lname;
}
console.log(myLastName("Das"));        //💥Output: Das

//🔔NOTE: "return" can't print value it return only result.
//         only console.log() can print value. 
//         so when using "return" at that time you need to use console.log also for print output.

//2️⃣way -- using parameter and argument:👇
function myMiddleName(mname){
    console.log(mname);
}
myMiddleName("Ranjan");           //💥Output: Ranjan

//🕑Example1:
function myBio(num1, num2){
    console.log(num1 * num2);
}
const dayResult = myBio(10,20)
console.log(dayResult);             //💥Output: undefined


//🕑Example2:
function myCar(){
    let car1 = 2000
    let car2 = 5000
    return car1 + car2
}
console.log(myCar());             //💥Output: 7000


//🕑Example3:
function myHobby(hoby){
    return `my passion is ${hoby}`
}   
console.log(myHobby("playing carrom"))          //💥Output: my passion is playing carrom


//🕑Example4:
function jooPark(animal){
    return `${animal}`
}
console.log(jooPark())                    //💥Output: undefined  (not given value in argument)


//🕑Example5:
//🔔Important🔔-In this example we have not given value in argument but we can give a default value in parameter.
function myJourney(vacation="goa"){
    if(!vacation){
        console.log("please give vacation value")
    }
    return `Yeah! We got trip to ${vacation}`
}
console.log(myJourney());         //💥Output: Yeah! We got trip to goa                    
//🔴OR🔴  (In below same above type code written only added else and didn't use return that's why it returns undefined)
function myTrip(vacationtrip="thailand"){
    if(!vacationtrip){
        console.log("please give vacation value")
    }else{
        console.log(`Yeah! We got trip to ${vacationtrip}`);
    }
}
console.log(myTrip());           //💥Output: Yeah! We got trip to thailand
                                //            undefined  (because of return)        


//🎁Arrow function:   (for arrow function follow 10_arrow_function_this_object.js)                             
//🎈How to render function value in Arrow Function🎈
//1️⃣way -- using parameter and argument:👇
const myJob = (developer) => {
    return developer;
}
console.log(myJob("React JS Frontend Developer"));        //💥Output: React JS Frontend Developer


//2️⃣way -- using parameter and argument:👇
const mySalary = (salary) => {
    console.log(salary);
}
mySalary(35789);                      //💥Output: 35789

//🕑Example:
const myPot = (num1, num2) => {
    return num1 + num2
}
console.log(myPot(10,20), "arrow function");           //💥Output: 30 arrow function
//OR
//🎯Implicity return:
//In arrow function if there is one line of code then no need to mention {} and return i.e. called implicity return.
const myHot = (num3, num4) => num3 * num4;
console.log(myHot(50,60), "arrow function implicity return");     //💥Output: 3000 arrow function implicity return


//🔔NOTE: After function execution "return" keyword returns the result of that function,
//        Once "return" keword defined after that you can't render any output using console.log() or any others.
//        You can do console.log() before "return" statement.
//        Only "return" value we can do console.log().

//🕑Example 1:
function myDetails(a, b){
    let result = a + b;
    return result;
    // console.log(result);
}
let result = myDetails(8, 9);
console.log(result);              //💥Output: 17


//🕑Example2:
//Jodi amey khali "return" karideba tahele ouput render heboni.
//After return you have to mention what you want to do "return" value,
//like you want to do console.log() or simply store that value in a variable.
//In this example i rendered that "return" value in console.log().
//console.log() means print. 
function myBook(uname){
    if(uname === undefined){
        console.log("(Plese enter a username)");
    }
    return `i am ${uname} working as a React JS developer`;
}
// myBio("Nikhil Das");
console.log(myBook("Nikhil"));           //💥Output: i am Nikhil working as a React JS developer         
//🔴OR🔴
function myBio(uname){
    if(!uname){
        console.log("Plese enter a username");
    }
    return `${uname}`
}
// myBio("Nikhil Das");
console.log(myBio());       //💥Output: Plese enter a username
                            //          undefined  (myBio() argument didn't pass any value that's why got undefined)

//🔔NOTE: In function we have mentioned (parameter) but we are not passing any value (in Argument),
//        then it returns "undefined". 


//🕑Example3:👇
//Here in parameter we are passing a default value so that if we are not passing any value in,
//argument then it can't return "undefined" because already we passed a default value in parameter.
//Suppose you are passing any value in argument then that value will be override in existing parameter value.
function mySkill(skill="ReactJS"){
    return `having 3+ years experience as a ${skill} developer`;
};
console.log(mySkill());
console.log(mySkill("SAP"));

//******************************************************************************************** */
//🎁Rest Parameter(...)
// A single parameter(formal parameter) can allow multiple actual value/argument value.
// Rest parameter return these multiple value in an array.
// If you have multiple parameter, in this case use rest parameter in the end of parameter list.

// Without Rest parameter, if we are passing multiple value in argument then it render only,
// 1st argument value it can't render all multiple value.
// So, in this case we use Rest Parameter(...), if we passing multiple value in argument it can 
// render all value and it retuns those value in an array.

//🕑Example1: With Rest Parameter👇
function todayExpectScore(...score){
    return score;
}
console.log(todayExpectScore(250,300,350));       //💥Output: [250,300,350]


//🕑Example2:
function myCompany(...compname){
    console.log(compname);
}
myCompany("dxc","capgemini","accenture","pwc")        //💥Output: ['dxc', 'capgemini', 'accenture', 'pwc']


//🕑Example3:
function myCompanyList(company1,company2,...favcompany){
    return `${favcompany} ${company1} ${company2}`
}
console.log(myCompanyList("dxc",1,"pwc",2,"capgemini",3));   //💥Output: pwc,2,capgemini,3 dxc 1


//🎯OR(Interview Question)
//Here 100 occupied for value1 and 200 occupied for value2 and then remaining all occupied by value3 i.e. rest parameter.
//🕑Example4:
function multiValue(value1, value2, ...value3){
    return value3;
}
console.log(multiValue(100,200,300,400,500));      //💥Output: [300,400,500]


//🕑Example5: Without Rest Parameter👇
function todayNotiMsg(msg){
    return msg;
}
console.log(todayNotiMsg(250,300,350));          //💥Output: 250


//🎁How to Access Object value in Function🎈
//So we can access object in function's argument/function in 2 method.
    //1️⃣ We can take object name as a parameter in function but in parmeter don't keep same object name just change the object name.
    //2️⃣ We can directly pass object in function's argument.

//Mehod1️⃣    (If object defined outside function) 
const ourState = {
    id: 25,
    name: "odisha"
};
//👇Rule-
//here below instead of "ourState" we kept "myState" as object name bcz same object name we can't mention in parameter,
// that's why object name👇 changed and gave "myState".
function callState(myState){       
    console.log(`my state code is ${myState.id} and state name is ${myState.name}`);
}
callState(ourState);               //💥Output: my state code is 25 and state name is odisha


//Mehod2️⃣    (If object defined in function argument) 
function myHotels(rooms){        //👈Rule: This "rooms" is object's name  
    console.log(`Room no is ${rooms.id} and name is ${rooms.name}`)
}
myHotels({
    id: 32,
    name: "nikhil"
});                       //💥Output: Room no is 32 and name is nikhil


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


