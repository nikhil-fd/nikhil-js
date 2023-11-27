//🚩object: object is a collection of properties, properties contains key and value pair
//          properties value can be a fucntion and different data types.
//          object defined in two ways 1.object literals 2.object constructor
//          object literal not create single ton but object constructor create single ton

//😎Example1: object literal(Non-singletone object)😎
const myDetails = {
    Name: "Nikhil",
    Experience: 3,
    Skill: "ReactJS",
    havingJob: true,
    Company: ["flipkart","myntra"]
}
console.log(myDetails.Skill);
console.log(myDetails["Skill"]);
//we can access all value using "Object.values()" method and it stores all vlaue in an array.
console.log(Object.values(myDetails));
//same we can access all keys using "Object.keys()" method and it stores all key in an array
console.log(Object.keys(myDetails));
//"Object.entries()" method it will separate all properties and value in an array.
console.log(Object.entries(myDetails));
//"hasOwnProperty()" this method will check whether this property available or not in object
//if avilable it returns "true" and if not returns "false".
console.log(myDetails.hasOwnProperty("havingJob"));



//************************************************************************** */
//here below we are changing value of "Skill"
myDetails.Skill = "Frontend Developer";
console.log("A ", myDetails["Skill"]);
//here i want to lock my all vlaues so that nobody can change value in future. 
//we can lock value using "Object.freeze()"
Object.freeze(myDetails);
myDetails.Skill = "Backend Developer";
console.log(myDetails);
console.log(myDetails.Skill);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//🤔how to define a primitive data types "Symbol" and use it as a key in object?
const mySym = Symbol("key1");
const myList = {
    hero: "Sunil",
    heroine: "Anushka",
    age: 25,
    [mySym]: "keynew1",
    film: "julia"
}
console.log("A ", myList[mySym]);
console.log("B ",myList["hero"]);
console.log("C ", myList);
console.log(this.heroine);

//2nd way of define object literal
const myTour = {};
myTour.flight = "indigo"
myTour.destiny = "thailand"
myTour.totalday = 5
myTour.person = 2
console.log(myTour);
console.log(myTour.destiny);
console.log(myTour.person);

//😎Example2: Object Constructor(Singletone object)😎
const myData = new Object();
myData.name = "Ranjan Das",
myData.age = 28,
myData.skill = "Web Developer"
console.log(myData);
console.log(myData.skill);


//😎Nested Object
const myLocal = {
    badPlayer: {
        allName:{
            fName: "sukant",
            lName: "mondal"
        }
    }
};
console.log(myLocal.badPlayer);
console.log(myLocal.badPlayer.allName.fName);


//😎spread operator(...) in object. Through this we can merge/combine 2 or 3 or 4 etc. object.
const list1 = {a: "dil", b: "mil", c: "fil"}
const list2 = {x: "sam", y: "bam", z: "jam"}
const mergeList1 = {...list1,...list2};
console.log(mergeList1);
//OR
//same above we can do through "Object.assign()" method
const list3 = {d: "dil", e: "mil", f: "fil"}
const list4 = {m: "sam", n: "bam", o: "jam"}
const mergeList2 = Object.assign({},list3,list4);
console.log(mergeList2);

//😎how to access array of object basically these type of values comes from database.
const dbData = [
    {id: 25, email: "mdn@infosys.com"},
    {id: 26, email: "mvp@infosys.com"},
    {id: 27, email: "mjp@infosys.com"},
];
console.log(dbData[0].id);
console.log(dbData[1].email);
console.log(dbData[2].id);
const objValue = Object.values(dbData[0]);
const objKey = Object.keys(dbData[0]);
console.log(objValue);
console.log(objKey);
console.log(Object.entries(dbData[1]));

//***********************************************************************************
//🚩Object Destructuring */
const myBio = {name: "nikhil", exp: 3, skill: "ReactJs"}
const {name, exp, skill} = myBio;
console.log(exp);


//🚩Object Literal: "this" concept
//👉"this" refers to object and it returns current context.
//👉"this" object can have different values depends on where it is placed.
//"this" returns current context in 2 place:👇
//1️⃣If the variable is declared globally that means outside the function here it returns "current context".
//2️⃣Inside object if there is a simple function defined so in that simple function if we use "this" it returns "current context".

const userDetails = {
    userName: "niil",
    signedIn: true,
    loginAttempt: 5,
    saluteMsg: function(){
        console.log(this.userName);
        // console.log(userDetails.userName);
        //👉when we are accessing object properties inside object at that time we can use "this"
        //  Although instead of "this" we can use same object_name also, but "this" mostly do refer.
    }
}
console.log(userDetails.saluteMsg());
console.log(this.loginAttempt);
//Output: undefined
//👉Above here we are accessing object properties using "this" keyword in outside object so,
//  in this situation "this" can't access it returns "undefined". Here we use only object_name.
console.log(userDetails.loginAttempt);
//Output: 5

