const mongoose = require("mongoose");

const stduentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Student = new mongoose.model("Student", stduentSchema);

module.exports = Student;
