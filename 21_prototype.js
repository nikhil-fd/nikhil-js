 //CC JS Vdo Part2 : Time Stamp : 7:42:00

 //🎁Prototype:🎁
 //In javascript "prototype" is used to add/create methods and properties to object.
 //Syntax:
 //👉ConstructorfunctionName.prototype.MethodName(give any name) = function(){}👈

 //✅Where we can use "prototype"?
 //"prototype" is used in constructor function to create methods and properties.
 //But "class" doesn't required "prototype" to create methods. In class we can directly create method using "method name".

 //✅Why we create "method"?
 //In method we define code once and use it many times wherever you want. just call the method then you can get the data on that method's.

 //🕑Example: class not requrired "prototype" to create methods.
 class userCredential{
    constructor(username, password, email){
        this.username = username;
        this.password = password;
        this.email = email;
    }
    updateUserName(){
        return `${this.username.toUpperCase()}`
    }
    updateEmail(){
        return `${this.email.toLowerCase()}`
    }
 };
 const user1 = new userCredential("Rohit65", "rohit@123", "rohit58@gmail.com");
 const user2 = new userCredential("Virat18", "virat@18", "virat18@yahoo.com");

 console.log(user1.updateUserName());         //💥Output: ROHIT65
 console.log(user2.updateEmail());           //💥Output: virat18@yahoo.com
 console.log(user2.password);               //💥Output: virat@18

 //🕑Example: Constructor function requried "prototype" to create method.
 function managerCredential(managername, manageremail, emplcode){
    this.managername = managername;
    this.manageremail = manageremail;
    this.emplcode = emplcode;

    managerCredential.prototype.updateManagerEmail = function(){
        return `${this.manageremail.toUpperCase()}`
    }
    managerCredential.prototype.updateManagerName = function(){
        return `${this.managername.toUpperCase()}`
    }
 }
 const manager1 = new managerCredential("karthik", "karthik.sonwane@pwc.com", 8596);
 const manager2 = new managerCredential("yogesh", "yogesh.umtol@pwc.com", 3586);

 console.log(manager1.updateManagerEmail());        //💥Output: KARTHIK.SONWANE@PWC.COM
 console.log(manager2.updateManagerName());        //💥Output: YOGESH
 console.log(manager2.emplcode);                  //💥Output: 3586
 
// NOTE: updateManagerEmail() and updateManagerName() are method we defined code once and can use it many times
//       at any time. 
 
 
 
