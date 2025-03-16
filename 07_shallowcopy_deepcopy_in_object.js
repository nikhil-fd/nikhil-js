//🔔NOTE: We can copy object from existing object into a new object using spread operator(...objname).

//🎁Shallow Copy
//Define in My Own way:👇
// In a shallow copy, if we change the value in a child (inner) object of the existing object,
// the value will also change in the new object because only references of nested objects are copied, not the actual objects.

//Define chatgpt way:👇
// A shallow copy creates a new object, but it only copies references of nested objects instead of duplicating them.
// This means that changes to a nested (child) object in the copied object will also reflect in the original object, and vice versa.

//🕑Example:
let originalObj = {
    studentname: "pratikshya",
    details: {age: 26, city: "balasore"}
}

let shallowCopyObj = { ...originalObj } //👈Used Spread Operator
console.log(shallowCopyObj);            //💥Output: { studentname: 'pratikshya', details: { age: 26, city: 'balasore' } }

//👇Now changing value in nested(child) object i.e. "details" in originalObj.
//The value is getting changed in both shallowCopyObj and originalObj.
originalObj.details.age = 30;
console.log(originalObj);       //💥Output: { studentname: 'pratikshya', details: { age: 30, city: 'balasore' } }
console.log(shallowCopyObj);   //💥Output: { studentname: 'pratikshya', details: { age: 30, city: 'balasore' } }

//👇Now changing value in nested object i.e. details in shallowCopyObj.
//The value is getting changed in both shallowCopyObj and originalObj.
shallowCopyObj.details.city = "cuttack";
console.log(shallowCopyObj);               //💥Output: { studentname: 'pratikshya', details: { age: 30, city: 'cuttack' } }
console.log(originalObj);                 //💥Output: { studentname: 'pratikshya', details: { age: 30, city: 'cuttack' } }


//🎁Deep Copy
//Define in my own way:👇
// To avoid shallow copy, we can use deep copy. In a deep copy, if we change the value in a child (inner) object
// of the original object, it will not affect the copied object, and vice versa. Each object, including nested objects, is entirely independent.


//Define in chatgpt way:👇
// A deep copy creates a completely independent copy of an object, including all nested objects.
// Changes made to the original object or its nested objects do not affect the copied object, and vice versa.

//🕑Example:
let originalObject = {
    employeename: "sudhanshu",
    location: "bengaluru",
    profile: {skill: "sap", salary: 35000}
}

//covt object ----> string
let convOriginalObj4Deep = JSON.stringify(originalObj);
//covt string ----> object
let deepCopyObj = JSON.parse(convOriginalObj4Deep)
console.log(deepCopyObj);                             //💥Output: { studentname: 'pratikshya', details: { age: 30, city: 'cuttack' } }
//👇Here we gonna change value in nested object details in deepcopyobj.
//The changes only reflect on deepcopyobj but won't reflect in originalobj.
deepCopyObj.details.age = 40;
console.log(deepCopyObj);         //💥Output: { studentname: 'pratikshya', details: { age: 30, city: 'cuttack' } }
console.log(originalObj);        //💥Output: { studentname: 'pratikshya', details: { age: 30, city: 'cuttack' } }

//👇Now we change value in nested object in original object.
//The changes will reflect on original object the changes won't reflect on deepcopyobj.
originalObj.details.city = "bhubaneswar";
console.log(originalObj);                 //💥Output: { studentname: 'pratikshya', details: { age: 40, city: 'cuttack' } } 
console.log(deepCopyObj);                //💥 Output: { studentname: 'pratikshya', details: { age: 40, city: 'cuttack' } }





































