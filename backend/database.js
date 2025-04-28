const { default: mongoose } = require("mongoose");
require('dotenv').config()

const string = process.env.MONGODB_URL

const connectToDatabase = async ()=>{
  try {
    await mongoose.connect(string);
    console.log("Connected to MongoDB")
  } catch (error) {
    console.log("Error connecting to MongoDB", error)
  }
}

module.exports = connectToDatabase;