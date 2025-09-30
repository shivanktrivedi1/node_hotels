const { uniq } = require('lodash')
const mongoose = require('mongoose')
const { type } = require('os')
const bcrypt = require('bcrypt')

// Define the person schema
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    work: {
        type: String,
        enum: ['chef', 'manager', 'waiter'],
        required: true
    },
    mobile: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    }, 
    address: {
        type: String,
    },
    salary: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

// This is for encrypting the password before saving to database
personSchema.pre('save', async function(next){
    const person = this
    if (!person.isModified('password')) return next()
    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(person.password, salt)
        person.password = hashedPassword
        next()
    } catch (error) {
        return next(error)
    }
})

personSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch
  } catch (error) {
    throw error;
  }
};

const Person = mongoose.model('Person', personSchema)
module.exports = Person