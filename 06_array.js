//Array: We can store multiple element in mutliple data types on a single variable i.e. called Array.
//join(): it adds all the elements of array into a string and separeated by comma bydefault.
//        comma is bydefaut but we can add our own symbol instead of comma like arrow,star etc..
const myFavPlayers = ["Virat",18,true,"Rahul",1,false,"Rohit",42,true];
const newArr = myFavPlayers.join("-->");
console.log(newArr);

//splice(): this method is usually used for adding and removing element into a specific location
//          into an array.it takes 3 arguments start index,delete count and new element.
//          if you are deleteing any element into an array then it returns the deleted element into an array.
//          if you are not deleteing any element only adding element then it returns empty array.
const ourPlayers = ["virat","rahul","rohit","iyer"];
const updatedPlayers = ourPlayers.splice(3,1,"gill");
console.log(updatedPlayers);
console.log(ourPlayers);

//slice(): it returns the extracted element and it starts extracting from start index number
//         to till before end index no.it doesn't include end argument.
let mySkill = ["sap","html","css","js","react js","bootstrap"];
let sliceValue = mySkill.slice(1,4);
console.log(sliceValue);
console.log(mySkill);