const mongoose = require("mongoose");

const mongouri = "mongodb://localhost:27017/StudentDB";

exports.dbconnect = async () => {
  try {
    await mongoose.connect(mongouri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};