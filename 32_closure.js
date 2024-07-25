//🚩Closure:
//👉A closure is the combination of a function bundled together with references to its surrounding state(the lexical enviornment).
//👉In other words Closure gives access to an outer function scope from an inner function scope.
//👉It means the inner function can access outer function variable but outer function can't access inner function variable.
//👉In JS closure are created every time, when function is created.
//👉closure returns complete lexical scope, it doesn't return only return statment's executional context.

//👍Interview: closure return karuchi pura funcion sirf return statement function nuha pura lexical scope hine return karuchi.


//Example1:
function outerFunc(){
    let myName = "Nikhil"
    function innerFunc(){
        console.log(myName);
    }
    return innerFunc;
}
const myFunc = outerFunc();
myFunc();
//💥Output: Nikhil

//👌Note: In Example1 we understood that there return statement returning innerFunc(),
//      but innerFunc() consoleing/executional context is myName but myName is declared in outerFunc(),
//      so it should be return "error" because myName declared in outerFunc but outerFunc is not returned only,
//      innerFunc is returned.So here closure returns complete lexical scope(both outerFunc and innerFunc)  