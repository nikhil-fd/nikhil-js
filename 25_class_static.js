//🚩"static" : * "static" keyword define static methods for classes.
//             * "static" methods are called directly on the class, without creating an instance/object.

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
console.log(uniqueUser.createUserId());