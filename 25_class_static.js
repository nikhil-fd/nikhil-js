//🚩"static" : * "static" keyword define static methods for classes.
//             * "static" methods are called/accessed directly on the class, without creating an instance/object.
//             * "static" method can not be called/accessed directly on instances of class.

class User{
    constructor(username){
        this.username = username;
    }
    createUser(){
        console.log(`Username: ${this.username}`);
    }
    static createUserId(){
        return `590`;
    }
}

const userData = new User("mahi7");
userData.createUser();                  //💥Output- Username: mahi7

class UserCourse extends User{
    constructor(username, email){
        super(username);
        this.email = email;
    }
}

const uniqueUser = new UserCourse("mahirat", "mahi@google.com");
console.log(uniqueUser);
console.log(User.createUserId());                   //💥Output: 590
console.log(uniqueUser.createUserId());            //💥Output: Error
console.log(uniqueUser instanceof UserCourse);    //💥Output: true
uniqueUser.createUser();                         //💥Output: Username: mahirat


//👉NOTE:
//1️⃣"static" method can access directly by it's own class name, on which class "static" method is define
//   but it can't access by other class name.
//2️⃣"static" method can't access other defined properties also, only we can pass direct value. 
