//🚩object: object is a collection of properties, properties contains key and value pair
//          properties value can be a fucntion and different data types.
//          object defined in two ways 1️⃣object literals 2️⃣object constructor
//          object literal not create single ton but object constructor create single ton
//          In JavaScript Object Keys can be a "string" & "Integer" type.
//          In JavaScript Object values can be "string","number","boolen","symbol","null","undefined",
//          "array", "object", and "function".

//1️⃣way of define👉--object literal(Non-singletone object)
const mySymb = Symbol("swanik")
const myDetails = {
    Name: "Nikhil",                          //string
    experience: 3,                          //number     
    havingJob: true,                       //boolean
    [mySymb]: "cric mic",                 //symbol
    18: "virat kohli",                   //key as number
    "players": 11,                      //key as string
    Company: ["flipkart","myntra"],                               //array
    schoolBags: {tiffin: "milton", gbox: "natraj", scale: 2},     //object
    myFunc: function(){                                           //function
        console.log(`Be prepare for board exam ${this.experience}`);
    }
}
//🔔Note: We can access Object value in 2 ways "object.key" and object["key"] (keep string key in "" double quote/single quote)
//        Best approach is -- object["key"]
console.log(myDetails.Name);                    //💥Output: Nikhil
console.log(myDetails.experience);             //💥Output: 3
console.log(myDetails["experience"]);         //💥Output: 3
console.log(myDetails["havingJob"]);         //💥Output: true
console.log(myDetails[mySymb]);             //💥Output: cric mic
console.log(myDetails[18]);                //💥Output: virat kohli
console.log(myDetails["players"]);        //💥Output: 11
console.log(myDetails["Company"][1]);             //💥Output: myntra
console.log(myDetails["schoolBags"]["gbox"]);     //💥Output: natraj
//OR
console.log(myDetails.schoolBags.gbox);           //💥Output: natraj
console.log(myDetails["myFunc"]());                //💥Output: Be prepare for board exam 3.
//OR
console.log(myDetails.myFunc());                  //💥Output: Be prepare for board exam 3.  


//🎁"Object.values()"
//we can access all value using "Object.values()" method and it stores all vlaue in an array.
console.log(Object.values(myDetails));   //💥Output: ['virat kohli','Nikhil', 3, true, 11, ['flipkart', 'myntra'], { tiffin: 'milton', gbox: 'natraj', scale: 2 },undefined]

//🎁"Object.keys()"
//same we can access all keys using "Object.keys()" method and it stores all key in an array
console.log(Object.keys(myDetails));   //💥Output: ['18','Name', 'experience', 'havingJob','players','Company','schoolBags','myFunc']

//🎁"Object.entries()"
//"Object.entries()" method separates all key and value in an separate array.
console.log(Object.entries(myDetails));  //💥Output: [['18', 'virat kohli'],[ 'Name', 'Nikhil' ], [ 'Experience', 3 ], [ 'havingJob', true ], [ 'players', 11 ], [ 'Company', ['flipkart','myntra']],[ 'schoolBags', { tiffin: 'milton', gbox: 'natraj', scale: 2 } ],[ 'myFunc', undefined ] ]

//🎁"hasOwnProperty()"
//"hasOwnProperty()" this method will check whether this property/key available or not in object
//if avilable it returns "true" and if not returns "false".
//OR: we can say whether the specified property is its own property or not if yes then return "true" if not then "false". 
console.log(myDetails.hasOwnProperty("havingJob"));   //💥Output: true   



//************************************************************************** */
//👇here below we are changing value of "Skill"
myDetails.Name = "Nikhil Ranjan Das";
//OR
myDetails["Name"] = "Nikhil Ranjan Das";
console.log("A ", myDetails["Name"]);    //💥Output: A Nikhil Ranjan Dass

//🎁"Object.freeze()"
//here i want to lock my all vlaues so that nobody can change value in future. 
//we can lock value using "Object.freeze()"
Object.freeze(myDetails);
myDetails.Name = "Backend Developer";
console.log(myDetails);         //💥Output:{Name: "Nikhil",Experience: 3,Skill: "ReactJS",havingJob: true,Company: ["flipkart","myntra"]} 
console.log(myDetails.Name);   //💥Output: Nikhil Ranjan Das

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//🎯how to define a primitive data types "Symbol" and use it as a key in object?
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


//2️⃣way👉 of define object literal
const myTour = {};
myTour.flight = "indigo"
myTour.destiny = "thailand"
myTour.totalday = 5
myTour.person = 2
console.log(myTour);                  //💥Output: { flight: 'indigo', destiny: 'thailand', totalday: 5, person: 2 }  
console.log(myTour.destiny);         //💥Output: thailand
console.log(myTour.person);         //💥Output: 2 


//2️⃣way of define Object👉 Object Constructor(Singletone object)
const myData = new Object();
myData.name = "Ranjan Das",
myData.age = 28,
myData.skill = "Web Developer"
console.log(myData);
console.log(myData.skill);          //💥Output: Web Developer
console.log(myData["age"]);        //💥Output: 28


//😎Nested Object
const myLocal = {
    badPlayer: {
        allName:{
            fName: "sukant",
            lName: "mondal"
        }
    }
};
console.log(myLocal.badPlayer);                //💥Output: {allName: {fName: 'sukant', lName: 'mondal'}}
console.log(myLocal.badPlayer.allName.fName);  //💥Output: sukant
console.log(myLocal.badPlayer?.allName.fName);  //💥Output: sukant
//👆this ? mark indicates to nullish collescing that means if the badPlayer exists then it return value,
//if not exist then return undefined. this technique is best when you are accessing data by API, you can
//easily know that object whether exists or not.


//🎁spread operator(...) in object. Through this we can merge/combine nth number of object(2 or 3 or 4 etc.) and return in single object.
const list1 = {a: "dil", b: "mil", c: "fil"}
const list2 = {x: "sam", y: "bam", z: "jam"}
const mergeList1 = {...list1,...list2};
const mergeList = {list1,list2}         //here inside an object another object will come same as in array also.
console.log(mergeList1);    //💥Output: {a: "dil", b: "mil", c: "fil", x: "sam", y: "bam", z: "jam"}
console.log(mergeList);    //💥Output: {list1: { a: 'dil', b: 'mil', c: 'fil' },list2: { x: 'sam', y: 'bam', z: 'jam' }}
//OR
//🎁"Object.assign()" 
//Object.assign() method is used to combine/merge one or more object.
//same above we can do through "Object.assign()" method
//Object.assign() it takes 2 parameter i.e. target and source. Here "target" indicates to {}, reamining all
//existing object are "source".
//## But in real-time mostly use spread operator instead of Object.assign().
const list3 = {d: "dil", e: "mil", f: "fil"}
const list4 = {m: "sam", n: "bam", o: "jam"}
const mergeList2 = Object.assign({},list3,list4);   //without {} also we can use.
console.log(mergeList2);  //💥Output: {d: "dil", e: "mil", f: "fil", m: "sam", n: "bam", o: "jam"}


//😎how to access array of object basically these type of values comes from database.
const dbData = [
    {id: 25, email: "mdn@infosys.com"},
    {id: 26, email: "mvp@infosys.com"},
    {id: 27, email: "mjp@infosys.com"},
];
console.log(dbData[0].id);                  //💥Output: 25
console.log(dbData[1].email);               //💥Output: mvp@infosys.com
console.log(dbData[2].id);                  //💥Output: 27
const objValue = Object.values(dbData[0]);
const objKey = Object.keys(dbData[0]);
console.log(objValue);                      //💥Output: [25, 'mdn@infosys.com']
console.log(objKey);                        //💥Output: ['id', 'email']
console.log(Object.entries(dbData[1]));     //💥Output: [['id', 26], ['email', 'mvp@infosys.com']]

//***********************************************************************************
//🎁Object Destructuring */
const myBio = {name: "nikhil", exp: 3, skill: "ReactJs"}
const {name, exp, skill} = myBio;
console.log(exp);                  //💥Output: 3 

//🎯In React most of the time we can see this type of object destructuring.
const reactObj = ({id}) => {

}
reactObj(id="6032niil")

//🎁Object Literal: "this" concept
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
        console.log(this.userName);         //💥Output: niil
        // console.log(userDetails.userName);
        //👉when we are accessing object properties inside object at that time we can use "this"
        //  Although instead of "this" we can use same object_name also, but "this" mostly do refer.
    }
}
console.log(userDetails.saluteMsg());      //💥Output: niil
console.log(this.loginAttempt);            //💥Output: 5
//Output: undefined
//👉Above here we are accessing object properties using "this" keyword in outside object so,
//  in this situation "this" can't access it returns "undefined". Here we use only object_name.
console.log(userDetails.loginAttempt);     //💥Output: 5


//🟠🔴🟡Check all prototype of object
// const obj = {nmae: "sak"}
// undefined
// obj
// {nmae: 'sak'}
// nmae: "sak"
// [[Prototype]]: Object
// constructor: ƒ Object()
// hasOwnProperty: ƒ hasOwnProperty()
// isPrototypeOf: ƒ isPrototypeOf()
// propertyIsEnumerable: ƒ propertyIsEnumerable()
// toLocaleString: ƒ toLocaleString()
// toString: ƒ toString()
// valueOf: ƒ valueOf()
// __defineGetter__: ƒ __defineGetter__()
// __defineSetter__: ƒ __defineSetter__()
// __lookupGetter__: ƒ __lookupGetter__()
// __lookupSetter__: ƒ __lookupSetter__()
// __proto__: (...)
// get __proto__: ƒ __proto__()
// set __proto__: ƒ __proto__()


