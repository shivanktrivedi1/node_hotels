const express = require('express')
const router  = express.Router()

const MenuItem = require('../models/MenuItem')

// save menu item
router.post('/', async (req, res)=> {
    try {
        const data = req.body
        const newMenuItem = new MenuItem(data)
        const response = await newMenuItem.save()
        console.log("Data saved")
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Internal Server Error'})
    }
})


// get all menu items
router.get('/', async (req, res)=> {
    try {
        const data = await MenuItem.find()
        console.log("Data fetched")
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Internal Server Error'})
    }
})

// get menu based on taste
router.get('/:taste', async (req, res)=> {
    try {
        const tasteType = req.params.taste
        if (tasteType == 'sweet' || tasteType == 'spicy' || tasteType == 'sour') {
            const data = await MenuItem.find({taste: tasteType})
            console.log("Data fetched")
            res.status(200).json(data)
        } else {
            res.status(404).json({error: 'Invalid taste type'})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Internal Server Error'})
    }
})

// update menu based on id
router.put('/:id', async (req, res)=> {
    try {
        const menuItemId = req.params.id
        const updatedMenuItemData = req.body

        const response = await MenuItem.findByIdAndUpdate(menuItemId, updatedMenuItemData, {
            new: true,
            runValidators: true
        })
        if (!response) {
            return res.status(404).json({error: "MenuItem not found"})
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
        const menuItemId = req.params.id

        const response = await MenuItem.findByIdAndDelete(menuItemId)
        if (!response) {
            return res.status(404).json({error: "MenuItem not found"})
        } 

        console.log("MenuItem deleted successfully")
        res.status(200).json(response)

    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Internal Server Error'})
    }
})

module.exports = router