//🚩Closure:
//👉A closure is the combination of a function bundled together with references to its surrounding state(the lexical enviornment).
//👉In other words Closure gives access to an outer function scope from an inner function scope.
//👉It means the inner function can access outer function variable but outer function can't access inner function variable.
//👉In JS closure are created every time, when function is created.
//👉Closure uses "return" keyword to return the lexical scope.

//👍Interview: closure return karuchi pura funcion sirf function nuha pura lexical scope hine return karuchi.


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