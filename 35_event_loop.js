//🚩Event Loop👌
//👉First of all JavScript is a single thread language and it handles synchronous operation not asynchronous opertaion.
//👉In synchronous operation code execute 1 by 1.
//👉Event loop is used to handle asynchronous operation.
//👉Asynchronous operation are - setTimeOut, setInterval, promise and fetch API.
//👉Event loop is used to manages the execution of asynchronous operation.
//👉Event loop continuously checks the call stack and callback queue to decide which stack to execute next.

//Call stack -------- (where function are queued for execution)
//Callback queue ---- (where asynchronous operation are queued for execution)

//In call stack the tasks are executed 1 by 1, in which order they were added.
//When call stack is empty then event loop checking the callback queue, 
//if there are any task in callback queue to moved to the call stack for executiion.. 

//🤷‍♂️For Best Understanding Follow up the Diagram below.👇


