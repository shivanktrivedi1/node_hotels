var a = 5
var b = 5
var ans = a + b

// we have to run npm init for creating a project 

// console.log(ans)

// for(i = 0; i <=b; i++) {
//     console.log(i)
// }

const ages = [32, 43, 45, 16, 12]
const result = ages.filter(checkAge)

function checkAge(age) {
    return age < 18
}
console.log(result)

const person = {
    age : 22,
    address : "sdssdsd",
    isAdult : false
}
console.log(person.age)

var prompt = require('prompt-sync')();
const data = prompt("Enter any number")

if (data > 20) {
    console.log("Your number is higher than 20")
} else {
    console.log("Your number is lower than 20")
}


