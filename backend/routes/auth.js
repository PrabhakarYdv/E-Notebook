const express = require("express")
const router = express.Router()

// Creating User

router.get('/signup', (req, res) => {
    res.send(req.body)
    console.log(req.body)
})


module.exports = router