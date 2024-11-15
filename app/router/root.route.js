const express = require("express");
const studentRoute = require("./students.route");
const route = express.Router();

route.use("/students", studentRoute)

module.exports = route
