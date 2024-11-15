const express = require("express");
const {logFeature} = require("../middlewares/logger/log-feature")
const {checkEmty} = require("../middlewares/validations/student.validations")
const studentRoute = express.Router();
const {getListStudent , getDetails ,
     createStudent, updateStudent, deleteStudent} = require("../controllers/student.controllers")

studentRoute.get("/",logFeature,getListStudent)

studentRoute.get("/:id", getDetails)

studentRoute.post("/", checkEmty , createStudent)

studentRoute.put("/:id", updateStudent)

studentRoute.delete("/:id", deleteStudent)

module.exports = studentRoute