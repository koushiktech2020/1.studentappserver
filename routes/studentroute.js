const studentrouter = require("express").Router();

const {
  addstudent,
  getallstudent,
  getstudentdetails,
  updatestudent,
  deletestudent,
} = require("../controllers/studentcontroller");

// add student
studentrouter.post("/addstudent", addstudent);

//get all student
studentrouter.get("/getallstudents", getallstudent);

//get student details
studentrouter.get("/getstudentdetails/:id", getstudentdetails);

//update student
studentrouter.put("/updatestudent/:id", updatestudent);

//delete student
studentrouter.delete("/deletestudent/:id", deletestudent);

module.exports = studentrouter;
