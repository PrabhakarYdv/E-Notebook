const express = require("express")
const router = express.Router()
const { validationResult, body } = require('express-validator');
const bcrypt = require("bcryptjs")
const User = require("../models/User");

// Creating User

router.post('/signup', [
    body('name', "Name should be atleast 3 Character").isLength({ min: 3 }),
    body('email', "Enter a valid Email").isEmail(),
    body('password', "Password should be atleast 5 Character").isLength({ min: 5 }),
], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const salt = await bcrypt.genSalt(10)
    console.log(salt)
    const securePassword = await bcrypt.hash(req.body.password, salt)

    let user = User({
        name: req.body.name,
        email: req.body.email,
        password: securePassword,
    })

    try {
        let isRegisterd = await User.findOne({ email: req.body.email })
        if (isRegisterd) {
            return res.status(409).send({ error: "User already exists" })
        }
        await user.save()
        res.status(200).send(user)

    } catch (error) {
        res.status(400).send({ error: error })
    }



})


module.exports = router