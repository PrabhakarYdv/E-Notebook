const connectToMongoose = require("./db");
const express = require('express')

connectToMongoose()
const app = express()
const port = 5000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Authentication Required...')
})

app.use('/auth', require('./routes/auth'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
