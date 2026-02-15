const express = require("express")
const router = express.Router()
const { validationResult, body } = require('express-validator');
const fetchUser = require("../middileware/fetchUser");
const Notes = require("../models/Notes")




// Get all Notes of current user

router.get('/allnotes', fetchUser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id })
        res.json({ notes })
    } catch (error) {
        return res.status(404).send(error.message)
    }
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

    try {
        const note = new Notes({
            title, description, priority, tag, user: req.user.id
        })

        note.save()

        res.json({ note })
    } catch (error) {
        return res.status(500).send({ error: "Interal server error" })
    }
})

// Update any note of current user\

router.put('/edit/:id', fetchUser, [
    body('title', "Enter a valid Title").isLength({ min: 3 }),
    body('description', "Description must be atleast 5 character").isLength({ min: 5 })
], async (req, res) => {

    const { title, description, priority, tag } = req.body

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    try {
        const updatedNote = {}

        if (title) {
            updatedNote.title = title
        }
        if (description) {
            updatedNote.description = description
        }
        if (priority) {
            updatedNote.priority = priority
        }
        if (tag) {
            updatedNote.tag = tag
        }

        let note = await Notes.findById(req.params.id)
        if (!note) {
            return res.status(400).send({ error: "Not found" })
        }

        if (note.user.toString() !== req.user.id) {
            return res.status(401).send({ error: "Unauthorized Access" })
        }

        note = await Notes.findByIdAndUpdate(req.params.id, { $set: updatedNote }, { new: true })
        res.json({ updatedNote })

    } catch (error) {
        return res.status(500).send({ error: "Interal server error", error: error.message })

    }
})

// Delete any note of current user


module.exports = router