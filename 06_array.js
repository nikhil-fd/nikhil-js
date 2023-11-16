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
const updatedPlayers = ourPlayers.splice(1,3);
const allPlayers = ourPlayers.splice(3,0,"gill");
console.log("A ", updatedPlayers);
console.log("C ", allPlayers);
console.log("D ", ourPlayers);

//slice(): it returns the extracted element and it starts extracting from start index number
//         to till before the end index no.it doesn't include end argument.
let mySkill = ["sap","html","css","js","react js","bootstrap"];
let sliceValue = mySkill.slice(1,4);
console.log(sliceValue);
console.log(mySkill);

//spread operator...
const myIplBatsman = ["virat","dhoni","ishan","surya","maxwell"];
const myIplBowlers = ["chahal","shami","siraj","kuldeep"];
const mergeAllPlayers = [...myIplBatsman,...myIplBowlers];
console.log(mergeAllPlayers);

//flat():
const favJesey = [18,7,1,[17,25,100],[65,87,95]];
const flatArr = favJesey.flat(Infinity);
console.log(flatArr);

//😍how to make your string value into an array?
//1st it checks is it array value or not.
console.log(Array.isArray("NIKHIL"));
//2nd it converts that string value into an array.
console.log(Array.from("NIKHIL"));

const myName = "Nihil Das";
console.log(Array.isArray(myName));

const myTech = "ReactJS Developer";
console.log(Array.from(myTech));

//it converts all the variable value into an array.
const myProject1 = "ecommerce";
const myProject2 = "calculator";
console.log(Array.of(myProject1,myProject2));

//Array Destructuring
const myBio = ["Nikhil", 3, "React Js", "Flipkart"];
const [name, exp, skill, company] = myBio;
console.log(skill);
