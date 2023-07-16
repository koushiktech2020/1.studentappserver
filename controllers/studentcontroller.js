const Student = require("../models/studentmodel");

//add student
exports.addstudent = async (req, res, next) => {
  try {
    const user = new Student({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
    });
    const result = await user.save();
    res.json({
      status: true,
      data: result,
      message: "One student added",
    });
  } catch (error) {
    res.json({
      status: false,
      message: error.message,
    });
  }
  next();
};

//get all student
exports.getallstudent = async (req, res, next) => {
  try {
    const studentsData = await Student.find({});
    res.json({
      status: true,
      data: studentsData,
      message: "Student fetched successfully",
    });
  } catch (error) {
    res.json({
      status: false,
      message: error.message,
    });
  }
  next();
};

//get student details
exports.getstudentdetails = async (req, res, next) => {
  try {
    const studentData = await Student.findById(req.params.id);
    if (!studentData) {
      return res.json({
        status: false,
        data: null,
        message: "Student details not found",
      });
    } else {
      res.json({
        status: true,
        data: studentData,
        message: "Student details fetched successfully",
      });
    }
  } catch (error) {
    res.json({
      status: false,
      message: error.message,
    });
  }
  next();
};

//update student
exports.updatestudent = async (req, res, next) => {
  try {
    const result = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({ status: true, data: result, message: "Student updated" });
  } catch (error) {
    res.json({
      status: false,
      message: error.message,
    });
  }
  next();
};
//delete student
exports.deletestudent = async (req, res, next) => {
  try {
    const result = await Student.findByIdAndDelete(req.params.id);
    if (result) {
      res.json({ status: true, message: "Student deleted" });
    } else {
      res.json({
        status: false,
        message: "Student not found",
      });
    }
  } catch (error) {
    res.json({
      status: false,
      message: error.message,
    });
  }
  next();
};
