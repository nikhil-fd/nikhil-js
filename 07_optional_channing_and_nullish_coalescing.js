//🎁Optional Channing (?):
//"optional channing" it checks whether the proprty(key) is defined or not in object if not,
// it returns "undefined" instead of throwing error.
//📍"optional channing" works on: "object", "array" & "function".

//🎁Nullish Coalescing (??):
//"nullish coalescing" returns default value if the left operand has "null" or "undefined" value,
//then it returns fallback value(right operand value).
//📍"nullish coalescing" works on: any value.

//👉"optional channing" and "nullish coalescing" both are different, but we can use them together.

//🕑Example1:
const contactList = {
    name: "mahesh",
    contactdetails: "client"
}
console.log(contactList.contactdetails.emailid ?? "email id not exist");
//💥Output: email id not exist

//🚩NOTE:👆 In this scenarion "optional channing" is not needed because contactdetails exist and it stores
//  string value if it doesn't store string or number or boolean or array or object only store "null" or "undefined"
//  then we need to use "optional channing".👌👌

//🕑Example2: define it without "optional channing" but used "nullish coalescing"
const workList = {
    name: "mahesh",
    workdetails: null
}
// console.log(workList.workdetails.workexperience ?? "No workexperience");
//💥Output: Cannot read properties of null (reading 'workexperience')

//Above same example define it through "optional channing" & "nullish coalescing"
const workLists = {
    name: "mahesh",
    workdetails: null
}
console.log(workList.workdetails?.workexperience);
//💥Output: undefined
console.log(workList.workdetails?.workexperience ?? "No work experience");
//💥Output: No work experience  (here combinely used "optional channing" & "nullish coalescing")



//🕑Example3:
const contactBook = {
    contactname: "nilesh",
    contactnumber: {
        mob: 9999888555,
        country: "india",
        yahoomail: {
            yahoomail: "abc@yahhoo.com"
        }
    }
}
console.log(contactBook.contactnumber.gmail ?? "gmail not exist");
//💥Output: gmail not exist
//👆here without optional channing the left operand returns undefined instead of "error",
//since contactnumber is a object and inside that object accessing gmail property that's why
//return undefined it contactnumber stores null or undefined instead of object then we have to use "optional channing". 



//🕑Example4:
const contactBooks = {
    contactname: "nilesh",
    contactnumber: {
        mob: 9999888555,
        country: "india",
        yahoomail: {
            mailid: "abc@yahhoo.com"
        }
    }
}
console.log(contactBook.contactnumber.gmail.mailid);
//💥Output- Error: Cannot read properties of undefined (reading 'mailid')
console.log(contactBook.contactnumber.gmail.mailid ?? "gmail not exist");
//💥Output- Error: Cannot read properties of undefined (reading 'mailid')
//Here left operand return error thats why it is not returning fallback value(right operand value).
//if lef oprand would be return null or undefined then you could get fallback value.

//👆Above example done using optional channing and nullish collescing.
const contactBookss = {
    contactname: "nilesh",
    contactnumber: {
        mob: 9999888555,
        country: "india",
        yahoomail: {
            mailid: "abc@yahhoo.com"
        }
    }
}
console.log(contactBook.contactnumber.gmail?.mailid);
//💥Output: undefined
console.log(contactBook.contactnumber.gmail?.mailid ?? "gmail not exist");
//💥Output: gamil not exist
