const express = require("express")
const router = express.Router()
const { validationResult, body } = require('express-validator');
const fetchUser = require("../middileware/fetchUser");
const Notes = require("../models/Notes")




// Get all Notes of current user

router.get('/allnotes', fetchUser, async (req, res) => {
    const notes = await Notes.find({ user: req.user.id })
    res.json({ notes })
})


// Add Note for current user

router.post('/addnote', fetchUser, [
    body('title', "Enter a valid Title").isLength({ min: 3 }),
    body('description', "Description must be atleast 5 character").isLength({ min: 5 })
], async (req, res) => {

    const { title, description, priority, tag } = req.body

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const note = new Notes({
        title, description, priority, tag, user: req.user.id
    })

    note.save()

    res.json({ note })
})

// Update any note of current user

// Delete any note of current user


module.exports = router