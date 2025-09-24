// import express from 'express'

const express = require('express')
const app = express()
const db = require('./db')
require('dotenv').config()

app.use(express.json())  

app.get('/', (req, res) => {
  res.send('Hi how can i help you')
})

app.get('/you', (req, res) => {
  res.send('Hi order your food')
})

app.get('/json-data', (req, res) => {
    var data = {
        name : "Shivank",
        age : 32,
        address : "UP"
    }
  res.send(data)
})

// import the router files
const personRoutes = require('./routes/personRoutes')
const menuRoutes = require('./routes/menuItemRoutes')

// use the routers
app.use('/person', personRoutes)
app.use('/menu', menuRoutes)

const PORT = process.env.PORT

app.listen(PORT, ()=> {
    console.log('Listening on port '+PORT+'!!');
})