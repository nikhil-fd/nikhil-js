//🚩new Date():
//It returns date and time.
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
console.log(Date.now()/1000);                //💥Output: 1703123210.942
console.log(Math.floor(Date.now()/1000));     //💥Output: 1703123280

console.log(new Date("2023-11-16"));
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