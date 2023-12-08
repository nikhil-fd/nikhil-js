//Note: Check the "getter" & "setter" defination in "28_class_getter_setter_get_set.js" file.
//👉getter & setter same used in function like used in class.

function User(email, password){
    this._email = email
    this._password = password

    Object.defineProperty(this, "email", {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

    Object.defineProperty(this, "password", {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })
}
const UserData = new User("kfc@google.com", "Welcome@123")
console.log(UserData.email);
console.log(UserData.password);