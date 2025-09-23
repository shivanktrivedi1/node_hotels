// import express from 'express'

const express = require('express')
const app = express()
const db = require('./db')

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

app.listen(3000, ()=> {
    console.log('Listening on port 3000!');
})