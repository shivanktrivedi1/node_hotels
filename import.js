const server = require('./server.js')
var _ = require('lodash')

var address = server.address
var results = server.add(18, 9)
console.log(address)
console.log("Data is "+results)

var data = ["Ram", "Ram Singh", 2, 5, 8, 5, "Ram"]
var uniqData = _.uniq(data)

console.log("uniq data is = "+ uniqData)
console.log(_.isString(data[0]))
