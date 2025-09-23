var fs = require('fs')
var os = require('os')

var userInfo = os.userInfo()
console.log(userInfo)
console.log(userInfo.username)

fs.appendFile('greetings.txt', 'Hi '+ userInfo.username +'!\n', ()=>{
    console.log("File is created")
})