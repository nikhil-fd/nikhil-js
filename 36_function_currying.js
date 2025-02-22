//👇function currying
const sum = (num1) => {
    return (num2) => {
        return (num3) => {
            console.log(num1+num2+num3);
        }
    }
}
sum(8)(10)(20);

//OR (because one line code so removed return and {})
// const sums = (num1) => (num2) => (num3) => console.log(num1+num2+num3);


//👍NOTE: here sum(8)(10)(20) takes 3 argument that means we need to define 3 function. so, here
//      we define 3 callback function 1 inside another in nested way.