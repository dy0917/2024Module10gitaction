require("dotenv").config();
const express = require("express");
const app = express();
const port = 8080;

console.log("process.env.HOST_ENV", process.env.SECRET);
app.get("/", (req, res) => {
  res.send(`Hello Kingsley! module 10 ${process.env.HOST_ENV} this is my secret value: 
     ${process.env.SECRET}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
