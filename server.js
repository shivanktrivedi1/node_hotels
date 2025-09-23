const address = 'Kanpur, UP'

// function add(a,b){
//     return a+b
// }

// var add = function(a,b) {
//     return a+b
// }

// var add = (a,b) => {return a+b}

var add = (a,b) => a+b
var result = add(2, 4)

console.log("result = "+ result)

const addTwoNumbers = function(a, b, workDone) {
    var result = a + b 
    console.log("Result: "+result)
    workDone()
}

addTwoNumbers(10,30, function(){
    console.log("Your work is done")
})

addTwoNumbers(10,30, ()=> console.log("Your work is done with short hand"))

module.exports = {
    address,
    add,
    addTwoNumbers
}