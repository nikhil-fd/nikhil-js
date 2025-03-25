//📌NOTE:"Here we have defined Promise in 7th way when you are accessing data from database or api then you can,
//use any 1 of them, But must preferred way is Process4️⃣5️⃣6️⃣7️⃣.📌


//🚩We can request data/access data from DataBase or API in 3 way.🚩
//1️⃣"Promise()"        -- ".then()" & ".catch()"
//2️⃣"Promise()         --  "async" & "await"  -- "try{}" & "catch{}"
//3️⃣Only "async" & "await" without "Promise"
//4️⃣"fetch()"          -- ".then()" & ".catch()"


//************************************************************************************************************************************** */
//🎁json()
// When fetch() method fetching data from API at that time fetch API response/return "object".
// But we need to convert the response object into json format then use json() method.

//🎁JSON.stringify()
//JSON.stringify() method is used to convert the object or value or array into json string format.
//it is often used when sending data to webserver/localstorage.

//🎁JSON.parse()
//JSON.parse() method is used to convert the json string into javascript object/array.
//it is often used when receiving json data from webserver/localstorage.

//************************************************************************************************************************************************* */
//🎁Promise
//✅CoHort✅
//👉When we call api using fetch() then we get Promise instantly instead of getting value
//  because it's value gets delay due to traveling from server so later Promise returns value or error.
//👉If promise gets fullfilled then it returns "data" in .then() method if promise gets rejected then
//   it returns "error" in .catch() method and when promise gets settled then "finally" gets invoked.
//👉Promise has 3 stage "pending" -- "fulfill" -- "rejected"

//🕑Example: Promise
console.log("Hii Nikhil Babu");
const data = fetch("https://api.freeapi.app/api/v1/public/quotes/quote/random")
            .then((response) => response.json())           //👌here response.json() is used to convert object into json format. But response.json() returns promise so we can use .then() and .catch() and we used .then in next line for code readability. 
            .then((dataitems) => console.log(dataitems.data.content))   //💥Promise fullfilled O/P: 4️⃣I never think of the future - it comes soon enough.
            .catch((error) => console.log(error))
            .finally(() => console.log("finally promise got return"))
console.log(data);
console.log("Bye Nikhil Jiii");
//💥Output:
//1️⃣Hii Nikhil Babu
//2️⃣Promise { <pending> }
//3️⃣Bye Nikhil Jiii
//4️⃣I never think of the future - it comes soon enough.
//5️⃣finally promise got return

//📍synchronouse operation -- jo turant instantly hoga
//Example:
// let a = 20;   let sum = a + b;  yeh sab instantly hota hey

//📍asynchronous operation -- jisko time lagta hey aur badd me hoga
//Example:
//fetch("https://amazon.com") -- yeh request server pe jata hey phir server se response aata he to yeh to
//  instantly nehi horaha hey taking time this is why it is asynchornous.
//So to track the asynchronous operation we need Promise.


//✅Youtube: Chai Aur JS✅
//1️⃣Promise:
//👉The Promise object representing the eventual completion or failure of an aynchronous operation and its resulting value.
//👉We can use "Promise()" with ".then()" and ".catch()" method, also we can use "promise()" with "async" and "await".
//  "async"/"await" uses "try" and "catch" for error handling.
//👉.then(() => {}) and .catch(() => {}) and .finally(() => {}) always takes call back function.

//📌new Promise(function(resolve,reject){}).then().catch().finally().
//📌new Promise(function(resolve,reject){}) async, await, try, catch.
//From above You can use any one because both are doing same work.


//************************************************************************************************************************** */
//🖐Creating Promises: PROCESS1️⃣
//🎯Example1: Promise() with ".then()" & ".catch()" & "finally()"
const promiseOne = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Promise executed");
        resolve();
    }, 1000);
});
promiseOne.then(() => {
    console.log("Promise Suceessed");
})
//💥Output:1️⃣Promise executed
//         2️⃣Promise Suceessed

//👉above created "new" as object(instance) for Prmoise same like xmlHttpRequest.
//👉"Promise" takes callback functiion(simple function/arrow func)
//👉And callback funcion takes 2 parameter "resolve" and "reject".

//👉 inside "resolve()" we can pass data/value in object or array.
//👉 inside "reject()" we can pass any "error message". 

//👉"then()"    method internally connected with "resolve". "then()" method takes callback function and "then()" can use as a chainable.
//              "then" indicates that when response is comeing from either database or api. that means we are able to get data.
//👉"catch()"   method internally connected with "reject". "catch()" method takes callback funcion & "catch()" can use as a chainable.
//               "catch" indicates that when response is not comeing from database or api. that means we are not able to acess data so we can show "error" msg here.
//👉"finally()" method it takes callback function and it returns the final message whether Promise is resoved or rejected.
//              "finally()" can use as a chainable. 

//*************************************************************************************************************** */ 
//🖐Creating Promises: PROCESS2️⃣
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise2 Executed");
        resolve();
    }, 1000)
}).then(() => {
    console.log("Promise2 Resolved");
})
//💥Output:1️⃣Promise2 Executed
//         2️⃣Promise2 Resolved

//👆NOTE: In above we didn't store the "Promise" in a variable directly,
//        after that used "then" method in chainable.


//******************************************************************************************************* */
//🖐Creating Promises: PROCESS3️⃣
//🎯Example2: Promise() with ".then()" & ".catch()" & "finally()"
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise three is executed");
        resolve({username: "nikhil6032", email: "niil49@google.com"});
    }, 1000)
})
promiseThree.then((userdata) => {
    console.log(userdata);
    console.log(userdata.username);
})
//💥Output:1️⃣{username: "nikhil6032", email: "niil49@google.com"}
//         2️⃣nikhil6032

//👆Note: In above all same according to Example1 but the difference is,
//      here in "resolve" we can pass data in object or array format.
//After that in "then()" method we took a "userdata" as a reference name of object which object placed in "resolve". 


//***************************************************************************************************************** */
//🖐Creating Promises: PROCESS4️⃣     👍BEST BEST

//🎯Example3: Promise() with ".then()" & ".catch()" & "finally()"
const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({profile: "React JS", experience: 4})
        }else{
            reject("Error: Something went wrong")
        }
        }, 1000)
})

promiseFour.then((userprofile) => {
    console.log(userprofile);           //1️⃣
    return userprofile.profile;        //👈but here "return" --"error", it is not returning the data so that in next step one more time used ".then" and now it is returning value i.e. userprofile.profile
}).then((profile) => {
    console.log(profile);              //2️⃣💥Output: React JS
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("The Promise either got resolved or rejected");     //3️⃣
});
//💥Output:1️⃣{profile: "React JS", experience: 4}
//         2️⃣React JS
//         3️⃣The Promise either got resolved or rejected

//👆NOTE: in above example we understood that "then()" method used when returning any data successfully.
//        And "catch()" method used when any error comeing at that time we use "catch()" to show the error.
//These process mostly used when we are accessing the data from DataBase or API. 
//You know that from DB or API data comes by network, so there could be network issue or any db issue so in that case we use "Promise".
//👉if no error then easily show data using "resolve".
//👉if error then we can display the error details using "reject" .
//👉In the end after performing everyting like if the code is successfully executed we saw the msg by "then()",
//   and if error came then we saw the msg by "catch",
//   after done chainable to both "then" and "catch" then we can use "finally" as a chainable,
//   chainable display that you both(then & catch) dispaly your task now finally display the final message.


//*********************************************************************************************************************************** */
//🖐Creating Promises: PROCESS5️⃣   👍BEST BEST

//2️⃣Promise() with "async" & "await" 🚩
//👉"async" makes a function asynchronous. use "async" before a function.
//👉"async" keyword tranform a regular function into an asynchronous function, becasue it need to return a promise.
//👉"async" function always returns a promise.
//👉"await" keyword can only be used inside an async function.
//👉"await" makes a funcion wait for promise.
//👉"await" makes the code wait until promise returns a value.
//👉"async" "await" enables use of ordinary "try" "catch" blocks around asynchonous code.
//👉Where we use "await", when dealing with "network request" or "converting string into json/object etc.",
//  or dealing with any "data" like object's data and other data.

//🎯Example4: "async" & "await"
//             👌Promise "async" & "await" are similar to Promise "then" and "catch" only syntax is different but process same.
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({userskill: "sap basis", company: "pwc"});
        }else{
            reject("Error: something got wrong");
        }
    }, 1000)
});

async function executionPromiseFive(){
    try{
        const response = await promiseFive;
        console.log(response);                  //💥Output: {userskill: "sap basis", company: "pwc"}
        console.log(response.userskill);       //💥Output: sap basis
    }catch(error){
        console.log(error);
    }
}
executionPromiseFive();

//👆NOTEs: In above program we used "async" "await" it is same as Promise "then" & "catch".
//      Both "async" & "await" doing same functionality like "then" & "catch".

//✍Basically "async" "await" execute when it returns true or we can say when no error comes.

//✍Use "async" before function and "await" use before Promise/fetch/xmlHttpRequest. 
//   suppose promise stored in variable then use "await" before that variable-name.

//✍"await" means wait because data comeing by network from database or api or even our local system so, 
//    it takes some time fot this "await" is saying wait data coming.  

//✍If error not comes then it successfully get execute.
//✍If error then it won't execute. so when error comes at that time we can define "try" "catch" condition.

//✍Basically "try" is used to execute "true" statement/condition.
//✍And "catch" is used to execute "error" or "false" statement/condition.       


//************************************************************************************************************************************* */
//🖐Creating Promises: PROCESS6️⃣   👍BEST BEST

//3️⃣Only "async" & "await" without "Promise"
//🎯Example5: "async" & "await" request from API 
//  async function always returns a "Promise".
//👉Where we use "await" when dealing with "network request" or "converting string into json/object etc."

//🕑Example: Using Regular function
async function getUserData(){
    try{
        const apiResponse = await fetch("https://randomuser.me/api/");      //👈await used in Network request 
        const convertJson = await apiResponse.json();                      //👈await used in converting string into json
        //Above data comes through url that means that data type is in string format so,
        //".json()" convert the string data into json format.
        console.log(convertJson);
    }catch(error){
        console.log("Jio Network", error);
    }
}
getUserData();


//🕑Example:Using Arrow function
const collegeUser = async() => {
    try{
        const apiData = await fetch("https://jsonplaceholder.typicode.com/users")
        const convData = await apiData.json();
        console.log(convData);               //💥Output: [{},{},{},{},{},{},{},{},{},{}]
        console.log(convData[9].email);     //💥Output: Rey.Padberg@karina.biz 
    }catch(error){
        console.log(error);
    }
}
collegeUser();


//******************************************************************************************************************************* */
//🖐Creating Promises: PROCESS7️⃣   👍BEST BEST

//4️⃣"fetch()"          -- ".then()" & ".catch()"
//👉"fetch" method starts the process of fetch resources/data from server and returns a promise.
//👉When fetch() method fetching data from API at that time fetch API response/return "object".
//👉"fetch" uses ".then()" & ".catch()" similar to Promise ".then" & ".catch".
//👉.then(() => {}) and .catch(() => {}) always takes call back function.
//👉actually "xmlHttpRequest" is a callback-based API.
//👉But "fetch" is a Promise based API and provides a better alternative that can be used in service workers.
//👉"fetch" also integrates advanced HTTP concepts such as CORS(Cross Origin Resource Sharing) and othes HTTP extension.
//👉A "fetch" promise only reject when a network error is encountered.
//👉A "fetch" promise doesn't reject on HTTP errors like 404 or etc.
//👉when http error occur then it will render in "then" not in "catch".
//👉when network error encounter then it will render in "catch" not in "then". 

//🎯Example6: "fetch()"
fetch("https://randomuser.me/api/").then((response) => {
    return response.json();
}).then((dataofresponse) => {
    console.log(dataofresponse);
}).catch((error) => {
    console.log(error);
});

//OR
fetch("https://randomuser.me/api/")
.then((response) => {
    return response.json();
}).then((dataofresponse) => {
    console.log(dataofresponse);
}).catch((error) => {
    console.log(error);
});