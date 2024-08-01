//🚩Local storage🚩
//1️⃣local storage store data in our local system web browser in key and value pair i.e. JSON format.
//2️⃣local storage data has no expiration date.And here the data will not be deleted when broser is closed,
//it will be save there by week by month by year.

//👇Set Data in LocalStorage.
//When set data in local storage then 1st give "key-name" and 2nd give value in JSON String format.
localStorage.setItem("nikhil-notes", JSON.stringify(textAreaData));

//👇Get Data in LocalStorage.
const getLSData = JSON.parse(localStorage.getItem("nikhil-notes"))


//🎁JSON.stringify()
//JSON.stringify() method is used to convert the object or value or array into "json string" format.
//it is often used when sending data to webserver/localstorage.

//when we store array or object in local storage then we use JSON.stringify() it converts
//javascript objec/array data into json string format like key will be in string and value will be in string.

//🎁JSON.parse()
//JSON.parse() method is used to convert the json string into javascript object/array.
//this is often used when receiving json data from webserver/localstorage.


//🎁How to get user input value from <input> element and <textarea> element. 
//we can get value from <textarea> and <input> element by using ".value" and rmaining other
//element such as <div> <span> <h1> <p> etc.. can get value by using .innerHTML/.innerText.
