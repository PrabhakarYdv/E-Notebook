const express = require("express")
const router = express.Router()
const { query, validationResult, body } = require('express-validator');

// Creating User

router.get('/signup', [
    body('name', "Name should be atleast 3 Character").isLength({ min: 3 }),
    body('email', "Enter a valid Email").isEmail(),
    body('password', "Password should be atleast 5 Character").isLength({ min: 5 }),
], (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    res.send(req.body)
})


module.exports = router