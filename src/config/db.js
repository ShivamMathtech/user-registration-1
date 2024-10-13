const { mongoose } = require("mongoose");
require("dotenv").config();
mongoose
  .connect("mongodb://localhost:27017")
  .then((d) => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

exports.mongoose = mongoose;
