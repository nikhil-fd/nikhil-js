//🎈How to render function value in Simple Function🎈
//1st way -- using parameter and argument:👇
function myLastName(lname){
    return lname;
}
console.log(myLastName("Das"));


//2nd way -- using parameter and argument:👇
function myMiddleName(mname){
    console.log(mname);
}
myMiddleName("Ranjan");


//🎈How to render function value in Arrow Function🎈

//1st way -- using parameter and argument:👇
const myJob = (developer) => {
    return developer;
}
console.log(myJob("React JS Frontend Developer"));

//2nd way -- using parameter and argument:👇
const mySalary = (salary) => {
    console.log(salary);
}
mySalary(35789);


//NOTE: After function execution "return" keyword returns the result of that function,
//      Once "return" keword defined after that you can't render any output using console.log() or any others.
//      You can do console.log() before "return" statement.
//      Only "return" value we can do console.log().

//Example 1:👇
function myDetails(a, b){
    let result = a + b;
    return result;
    // console.log(result);
}
let result = myDetails(8, 9);
console.log(result);


//Example2:👇
//Jodi amey khali "return" karideba tahele ouput render heboni.
//After return you have to mention what you want to do that "return" value,
//like you want to do console.log() or simply store that value in a variable.
//In this example i rendered that "return" value in console.log().
//console.log() means print. 
function myBio(uname){
    if(uname === undefined){
        console.log("(Plese enter a username)");
    }
    return `i am ${uname} as a React JS developer`;
}
// myBio("Nikhil Das");
console.log(myBio("Nikhil"));

//NOTE: In function we have mentioned (parameter) but we are not passing any value (in Argument),
//      then it returns "undefined". 

//OR

function myBio(uname){
    if(!uname){
        console.log("(Plese enter a username)");
    }
    return `i am ${uname} as a React JS developer`;
}
// myBio("Nikhil Das");
console.log(myBio());


//Example3:👇
//Here in parameter we are passing a default value so that if we are not passing any value in,
//argument then it can't return "undefined" because already we passed a default value in parameter.
//Suppose you are passing any value in argument then that value will be override in existing parameter value.
function mySkill(skill="ReactJS"){
    return `having 3+ years experience as a ${skill} developer`;
};
console.log(mySkill());
console.log(mySkill("SAP"));

//******************************************************************************************** */
//🎈Rest Parameter🎈
// Without Rest parameter, if we are passing multiple value in argument then it render only,
// 1st argument value it can't render all multiple value.
// So, in this case we use Rest Parameter(...), if we passing multiple value in argument it can 
// render all value and it retuns those value in an array.

//With Rest Parameter👇
function todayExpectScore(...score){
    return score;
}
console.log(todayExpectScore(250,300,350));

//🎯OR(Interview Question)
//Here 100 occupied for value1 and 200 occupied for value2 and then remaining all occupied by value3.
function multiValue(value1, value2, ...value3){
    return value3;
}
console.log(multiValue(100,200,300,400,500));


//Without Rest Parameter👇
function todayNotiMsg(msg){
    return msg;
}
console.log(todayNotiMsg(250,300,350));

//********************************************************************************************* */

//🎈How to Access Object value in Function🎈
const ourState = {
    id: 25,
    name: "odisha"
};
//here below instead of "ourState" we kept "myState" object name bcz same object name we can't mention in parameter,
// that's why object name changed and gave "myState".
function callState(myState){
    console.log(`my state code is ${myState.id} and state name is ${myState.name}`);
}
callState(ourState);


//OR
const ourDist = {
    code: 1,
    name: "bls"
};

function distList(dist){
    return dist;
}
console.log(distList(ourDist));


//OR(direct pass object in argument)

function myHotels(rooms){
    console.log(`Room no is ${rooms.id} and name is ${rooms.name}`)
}
myHotels({
    id: 32,
    name: "nikhil"
});


//********************************************************************************************** */

//🎈How to Access Array value in Function🎈
const myMarks = [78, 85, 56, 68];
function classResult(marks){
    return marks;
}
console.log(classResult(myMarks));


//OR
function myPincode(pincode){
    console.log(pincode);
}
myPincode([756036,560100,560037]);