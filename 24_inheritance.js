//🚩Inheritance: * Inheritance is useful for code reusability, reuse properties and method of an
//                 existing class when you create a new class. 
//                * To create a class inheritance, use the "extends" keyword.

//👉"super" : * super() method refers to the parent class.
//            * When calling the "super()" method in the "constructor()" method, that means
//              calling the parent "constructor()" method and gets access to the parent's properties and methods.                

//Example:
//Parent class👇
class UserDetails{
    constructor(username){
        this.username = username;
    }
    modifyUser(){
        console.log(`Username is ${this.username}`);
    }
}

//new "class"👇
class UserCourse extends UserDetails{
    constructor(username, password, course){
        super(username);
        this.password = password;
        this.course = course;
    }
    addCourse(){
        console.log(`React js added by user ${this.username}`);
    }
}

const userCoursedata = new UserCourse("virat18", 459687, "React js");
console.log(userCoursedata);
userCoursedata.modifyUser();
userCoursedata.addCourse();


