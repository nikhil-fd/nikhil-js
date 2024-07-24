//🚩"class": * A javascript "class" is not an object. It is a template for creating object.
//           * "class" is a type of function, instead of "function" keyword use "class" keyword,
//              and the properties are assigned inside a "constructor".

//✍constructor: # constructor method is a special method in class is used to creating and initializing,
//                 object in a class.
//               # "constructor" is executed automatically when a new object is created.
//               # it is used to initialize object properties.
//               # Every class having a default constructor because it stores "state".
//Example:
class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword(){
        return `${this.password}abc`;
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const userData = new User("niil081", "niil@yahoo.com", 7859);
console.log(userData);
console.log(userData.changeUsername());
console.log(userData.encryptPassword());


//🎁Same above Using Function (constructor function)
//Example:

function Users(username, password, email){
    this.username = username;
    this.password = password;
    this.email = email;
}
Users.prototype.encryptPassword = function(){
    return `${this.password}xyz`
}
Users.prototype.changeUsersname = function(){
    return `${this.username.toUpperCase()}`
}
const usersData = new Users("paanbahar", 6936, "lovely@yoga.com");
console.log(usersData);
console.log(usersData.encryptPassword());
console.log(usersData.changeUsersname());

//🙏Note: You can approach any 1 between "class" and "function" but in real time industry
//         mostly used "function" both "function" and "class" doing same thing.