const mongoose = require('mongoose')
const mogoURL = 'mongodb://127.0.0.1:27017/hotels'

mongoose.connect(mogoURL)

const db = mongoose.connection

db.on('connected', ()=> {
    console.log('Connected to MongoDB successfully!');
})

db.on('error', ()=> {
    console.error('Error connecting to MongoDB:', err);
})

db.on('disconnected', ()=> {
    console.log('Disconnected to MongoDB!');
})

module.exports.db