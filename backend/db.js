const mongoose = require("mongoose")
const mongooseURI = "mongodb://localhost:27017"

const connectToMongoose = async () => {
    try {
        await mongoose.connect(mongooseURI)
        console.log("Connected to Mongoose...")

    } catch (error) {
        console.log("Connection Failed.... Due to=>", error)
    }
}

module.exports = connectToMongoose;