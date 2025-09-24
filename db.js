const mongoose = require('mongoose')
require('dotenv').config()

// const mogoURL = process.env.MONGODB_LOCAL_URL // Local
const mogoURL =  process.env.MONGODB_URL

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