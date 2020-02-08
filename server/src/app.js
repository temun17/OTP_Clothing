const express = require("express");

const app = express();

app.get("", (req, res) => {
  res.json("Hello Express!");
});

const port = 3001;

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}!`);
});
