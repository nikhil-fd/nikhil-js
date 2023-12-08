///👉Note: Check the "getter" & "setter" defination in "28_class_getter_setter_get_set.js" file.
//👉getter & setter same used in Object like used in class & function.

const userDetails = {
    _username: "niil6032",
    _password: "Welcome@2023",

    get username() {
        return this._username.toUpperCase()
    },
    set username(value) {
        this._username = value
    },

    get password() {
        return this._password.toUpperCase()
    },
    set password(value) {
        this._password = value
    }
}
const userData = Object.create(userDetails);
console.log(userData.username);
console.log(userData.password);