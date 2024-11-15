const express = require("express");
const router = require("./router/root.route");
const app = express();
require('dotenv').config()
const port = process.env.PORT;

app.use(express.json())
app.use(router)

app.listen(port, function () {
  console.log(`http://localhost:${port}`);
});

app.get("/", function (req, res) {
  return res.send("Hello World!");
});
