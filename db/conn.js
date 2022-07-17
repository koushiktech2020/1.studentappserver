const mongoose = require("mongoose");

const db = "mongodb://localhost:27017/student-api";
mongoose.connect(db, (err) => {
  if (err) throw err;
  else console.log("Successfully connected to MongoDB");
});
