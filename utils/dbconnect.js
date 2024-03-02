const mongoose = require("mongoose");
const dotenv = require("dotenv"); // Importing dotenv for environment variables
const mongoUrl = process.env.MONGO_URL;

dotenv.config(); // Loading environment variables from .env file

//Testing Database connection for local Database
exports.dbconnect = async () => {
  try {
    await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};
