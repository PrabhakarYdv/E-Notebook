const jwt = require('jsonwebtoken')
const JWT_SECRET = "182ab1efb3cea0e1eeb5a866b0197a5b"


const fetchUser = (req, res, next) => {
    const token = req.header("auth-token")
    if (!token) {
        res.status(401).send({ error: "Authentication required" })
    } else {
        try {
            const data = jwt.verify(token, JWT_SECRET)
            req.user = data.user
            next()
        } catch (error) {
            res.status(400).send({error:error.message})
        }
    }

}
module.exports = fetchUser;