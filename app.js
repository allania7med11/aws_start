const express = require("express");
const app = express();
app.get("/", (req,res) => {
  res.send("Welcome to my server");
});
const port = 3000;
app.listen(port, () => {
  console.log(`the app work on http://localhost:${port}/`);
});
