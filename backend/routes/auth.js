const express = require("express")
const router = express.Router()
const { validationResult, body } = require('express-validator');
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../models/User");

const JWT_SECRET = "182ab1efb3cea0e1eeb5a866b0197a5b"

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
    const securePassword = await bcrypt.hash(req.body.password, salt)

    let user = User({
        name: req.body.name,
        email: req.body.email,
        password: securePassword,
    })

    const data = {
        user: {
            id: user.id
        }
    }




    try {
        let isRegisterd = await User.findOne({ email: req.body.email })
        if (isRegisterd) {
            return res.status(409).send({ error: "User already exists" })
        }

        await user.save()
        const authToken = jwt.sign(data, JWT_SECRET)
        res.status(200).send({ authToken: authToken })

    } catch (error) {
        res.status(400).send({ error: error.message })
    }



})


// Login User

router.post('/login', [
    body('email', "Enter a valid Email").isEmail(),
    body('password', "Password cannot be blank").notEmpty(),
], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }


    const { email, password } = req.body

    try {
        let user = await User.findOne({ email })
        if (!user) {
            return res.status(400).send({ error: "Invalid Credential" })
        }

        const passwordCompare = await bcrypt.compare(password, user.password)
        if (!passwordCompare) {
            return res.status(400).send({ error: "Invalid Credential" })
        }


        const data = {
            user: {
                id: user.id
            }
        }

        const authToken = jwt.sign(data, JWT_SECRET)
        res.status(200).send({ authToken: authToken })



    } catch (error) {
        res.status(400).send({ error: error.message })
    }

})




module.exports = router