const mongoose = require("mongoose");
const express = require("express");

const app = express();

const DATABASE = "mongodb://mymongo:27017/testup";

mongoose
  .connect(DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected");
  })
  .catch(() => {
    console.log("DB not connected");
  });

app.get("/", (req, res) => {
  res.json({
    messeges: "You are in root.",
  });
});

app.listen(3000, () => {
  console.log("App is on fire at 3000!");
});
