const express = require("express")
const router = express.Router()
const { validationResult, body } = require('express-validator');
const fetchUser = require("../middileware/fetchUser");
const Notes = require("../models/Notes")




// Get all Notes of current user

router.get('/allnotes', fetchUser, async (req, res) => {
   const notes=await Notes.find({user:req.user.id})
   res.json({notes})
})


// Add Note for current user

// Update any note of current user

// Delete any note of current user


module.exports = router