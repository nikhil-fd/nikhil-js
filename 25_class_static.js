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
userData.createUser();

class UserCourse extends User{
    constructor(username, email){
        super(username);
        this.email = email;
    }
}

const uniqueUser = new UserCourse("mahirat", "mahi@google.com");
console.log(uniqueUser);
console.log(User.createUserId());         //Directly it can be access     //💥Output: 590
console.log(uniqueUser.createUserId());    //It can't be access directly //💥Output: Error
console.log(uniqueUser instanceof UserCourse);                          //💥Output: true