const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.send("Welcome to Node js, express js in Docker");
});

app.listen(5000, () => {
  console.log(`This is working on port 5000`);
});
