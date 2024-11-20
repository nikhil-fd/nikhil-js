//🚩new Date():
//It returns date and time.
//It calculates date and time since 1st January 1970 to till date.
const date = new Date();
console.log(typeof(date));                    //💥Output: object
console.log(new Date());                       //💥Output: 2023-12-21T01:48:00.657Z
console.log(new Date().toLocaleString());       //💥Output: 21/12/2023, 7:18:00 am
console.log(new Date().toLocaleDateString());    //💥Output: 21/12/2023
console.log(new Date().toLocaleTimeString());     //💥Output: 7:18:00 am
console.log(new Date().toDateString());            //💥Output: Thu Dec 21 2023
console.log(new Date().toTimeString());             //💥Output: 07:18:00 GMT+0530 (India Standard Time)
console.log(new Date().toISOString());               //💥Output: 2023-12-21T01:48:00.657Z
console.log(new Date().toJSON());                     //💥Output: 2023-12-21T01:48:00.657Z

//🚩Date.now():
//It returns numerical value in milliseconds since 01 jan 1970 to till date.
console.log(Date.now());                    //💥Output: 1703122901955

//Below we divided the millisecond into 1000 so that it can convert from millisecond to second.
console.log(Date.now()/1000);                //💥Output: 1703123210.942
console.log(Math.floor(Date.now()/1000));     //💥Output: 1703123280

//YYYY-MM-DD
console.log(new Date("2023-11-16"));
//DD-MM-YYYY
console.log(new Date("21-06-2024"));
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());

console.log(date.toLocaleString("default", {
    weekday: "long"
}));

//🚩getMonth(): 
//It returns month in number.
//0-jan 1-feb 2-mar 3-apr 4-may 5-june 6-july 7-aug 8-sep 9-oct 10-nov 11-dec
console.log(date.getMonth());       //💥Output: 11

//🚩getDay()
//It retuns day in number.
//0-sun 1-mon 2-tue 3-wed 4-thu 5-fri 6-sat 
console.log(date.getDay());       //💥Output: 4


//🎯How to get Date and Time?
const dtTime = new Date();
//🎁getHours()             [0-23]
console.log(dtTime.getHours());

//🎁getMinutes()           [0-59]
console.log(dtTime.getMinutes());

//🎁getSeconds()           [0-59]
console.log(dtTime.getSeconds());

//🎁getDate()              [current date]
console.log(dtTime.getDate());

//🎁getMonth()              [0/1/2/3/4/5/6/7/8/9/10/11]
console.log(dtTime.getMonth());

//🎁getFullYear()           [2024/2025...]
console.log(dtTime.getFullYear());

//🎁getDay()                [0/1/2/3/4/5/6]
console.log(dtTime.getDay());


//🎯How to set Date and Time?
//🎁setHours()             
//🎁setMinutes()           
//🎁setSeconds()           
//🎁setMilliSeconds()      
//🎁setDate()              
//🎁setMonth()              
//🎁setFullYear()           
//🎁setDay()       

//🎁toLocaleString()
const myDt = new Date()
console.log(myDt.toLocaleString("default", {            //use ctrl+space for suggestion
    dateStyle: "long",
    calendar: "calendar"
}));                        

//💥Output- June 20, 2024


