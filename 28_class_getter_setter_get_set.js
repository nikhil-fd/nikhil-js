//🚩"Getter" & "Setter"
//👉"getter" & "setter" is defined by using "get" & "set" keyword.
//👉When we are defining getter & setter that means we are defining a method that is 
//  associated with a paritcular property of an object.

//👉"get" keyword is used to get the value.
//👉"set" keyword is used to set the value.

//👉Inside "set" keyword/setter define "value"(value-just a reference name we can give any other name also) as a parameter.
//  "set" is used to set the value that's why takeing "value" as a parameter.

//👉Inside "get" & "set" always use _(underscore) before properties as prefix.
//   Because _(underscore) define as private properties not local.

//👉Both "get" & "set" can used also in class, function & object .  

//👌Benefit: "getter" & "setter" benefit is inside the class whatever value is there if somebody
//            wants to access these value they can't access directly.But without "get" & "set" method everybody
//            can access these value easily so to avoid this type of thing we can use "get" & "set" method.

class User{
    constructor(username, password){
        this.username = username
        this.password = password
    }
    get password(){
        return `${this._password.toUpperCase()}`
        //🤚"get" is used to get the value.
    }
    set password(value){
        this._password = value
        //NOTE:
        //🤚"set" is used to set the value. 
        //🤚keep same name for setter properties as constructor properties.
        //🤚when set the password then we need to change the properties name,
        //  just add _(underscore) before that properties so that the setter properties name will be different,
        //  but it looks like same constructor properties name.
        //🤚if we changed the properties name in setter same changed it for getter.
        //🤚if we keep same name then setter can't set the value because js will understand that
        //  constructor() method properties also set the value and setter also set the value. 
        //🤚that is why we need to chang the setter properties name because here both constructor() and setter set the value. 
    }

    get username(){
        return this._username.toUpperCase()
    }
    set username(value){
        this._username = value
    }
}
const UserData = new User("niil6032", "Happy@123");
console.log(UserData.password);
console.log(UserData.username);
