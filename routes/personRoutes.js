const express = require('express')
const router  = express.Router()

const Person = require('../models/Persons')
const { error } = require('console')

// Post request for saving record
router.post('/', async (req, res)=> {
    try {
        const data = req.body
        const newPerson = new Person(data)
        const response = await newPerson.save()
        console.log("Data saved")
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Internal Server Error'})
    }
})

// get all person data
router.get('/', async (req, res)=> {
    try {
        const data = await Person.find()
        console.log("Data fetched")
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Internal Server Error'})
    }
})

// get person based on type
router.get('/:workType', async (req, res)=> {
    try {
        const workType = req.params.workType
        if (workType == 'manager' || workType == 'chef' || workType == 'waiter') {
            const data = await Person.find({work: workType})
            console.log("Data fetched")
            res.status(200).json(data)
        } else {
            res.status(404).json({error: 'Invalid work type'})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Internal Server Error'})
    }
})

// update person based on id
router.put('/:id', async (req, res)=> {
    try {
        const personId = req.params.id
        const updatedPersonData = req.body

        const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
            new: true,
            runValidators: true
        })
        if (!response) {
            return res.status(404).json({error: "Person not found"})
        } 

        console.log("Data fetched")
        res.status(200).json(response)

    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Internal Server Error'})
    }
})

// delete person based on id
router.delete('/:id', async (req, res)=> {
    try {
        const personId = req.params.id

        const response = await Person.findByIdAndDelete(personId)
        if (!response) {
            return res.status(404).json({error: "Person not found"})
        } 

        console.log("Person deleted successfully")
        res.status(200).json(response)

    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Internal Server Error'})
    }
})
// Export module
module.exports = router