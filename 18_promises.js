//🚩We can request data (access data) from DataBase or API in 3 way.🚩
//1️⃣"Promise()"        -- ".then()" & ".catch()"
//2️⃣"async" & "await"  -- "try{}" & "catch{}"
//3️⃣"fetch()"          -- ".then()" & ".catch()"


//1️⃣Promise:
//👉Promise is an object representing the eventual completion or failure of an aynchronous operation.

//🖐Creating  Promises
//🎯Example1: Promise()
const promiseOne = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Promise executed");
        resolve();
    }, 1000);
});
promiseOne.then(() => {
    console.log("Promise Suceessed");
})
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

 
//🤘OR🤘

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise2 Executed");
        resolve();
    }, 1000)
}).then(() => {
    console.log("Promise2 Resolved");
})
//👆NOTE: In above we didn't store the "Promise" in a variable directly,
//        after that used "then" method in chainable.


//🎯Example2: Promise()
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

//👆Note: In above all same according to Example1 but the difference is,
//      here in "resolve" we can pass data in object or array format.
//After that in "then()" method we took a "userdata" as a reference name of object which object placed in "resolve". 


//🎯Example3: Promise()
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
    console.log(userprofile);
    console.log(userprofile.profile);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("The Promise either got resolved or rejected");
})

//OR
promiseFour.then((userprofile) => {
    console.log(userprofile);
    return userprofile.profile;
}).then((profile) => {
    console.log(profile);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("The Promise either got resolved or rejected");
});

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


//2️⃣"async" & "await" 🚩
//👉"async" makes a function asynchronous. use "async" before a function.
//👉"async" keyword tranform a regular function into an asynchronous function, becasue it need to return a promise.
//👉"async" function always returns a promise.
//👉"await" keyword can only be used inside an async function.
//👉"await" makes a funcion wait for promise.
//👉"await" makes the code wait until promise returns a value.
//👉"async" "await" enables use of ordinary "try" "catch" blocks around asynchonous code.

//🎯Example4: "async" & "await"
//              "async" & "await" are similar to Promise "then" and "catch" only syntax is different but process same.
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
        console.log(response);
        console.log(response.userskill);
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


//🎯Example5: "async" & "await" request from API 
async function getUserData(){
    try{
        const apiResponse = await fetch("https://randomuser.me/api/");
        const convertJson = await apiResponse.json();
        //Above data comes through url that means that data type is in string format so,
        //".json()" convert the string data into json format.
        console.log(convertJson);
    }catch(error){
        console.log("Jio Network", error);
    }
}
getUserData();


//3️⃣"fetch()"
//👉"fetch" method starts the process of fetch resources/data from server and returns a promise.
//👉"fetch" uses ".then()" & ".catch()" similar to Promise.
//👉actually "xmlHttpRequest" is a callback-based API.
//👉But "fetch" is a Promise based API and provides a better alternative that can be used in service workers.
//👉"fetch" also integrates advanced HTTP concepts such as CORS(Cross Origin Resource Sharing) and othes HTTP extension.
//👉A "fetch" promise only reject when a network error is encountered.
//👉A "fetch" promise doesn't reject on HTTP errors like 404 or etc.

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