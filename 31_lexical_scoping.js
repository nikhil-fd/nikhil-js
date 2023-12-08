//🚩Lexical Scoping:
//Lexical scoping means inner function scope can get access to their parent functions variable,
//But vice versa not true(that means outer function can not get access inner function variable).

//"var": using "var" keyword vice versa can possible like parent scope function can access inner function variable.
//"let" & "const" : using "let" & "const" only inner function can access outer function variable but
//                  outer function can't access inner function variable.

function outerFunc(){
    let myName = "Nikhil"

    function innerFuncOne(){
        let mySkill = "ReactJS"
        console.log("inner", myName);
    }
    innerFuncOne();

    function innerFuncTwo(){
        console.log("inner 2", myName);
        console.log("inner1", mySkill);
    }
    innerFuncTwo();

    console.log(`My Name is ${myName} and my skill is ${mySkill}`);
}
outerFunc();

//🌟Note: Here one parent function and that parent function has 2 child function both child function
//      can access parent function data but both child can not get access another child data
//      (like func1 can't access fun2 data and func2 can't access fun1 data).

