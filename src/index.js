const express = require("express");
const registerRoute = require("./routes/registerRoute");
const app = express();
require("dotenv").config();
// Middleware for parsing JSON request bodies
app.use(express.json());
app.use("/api", registerRoute);
const Port = process.env.PORT || 3000;
app.listen(Port, () => {
  console.log(`Server is running at http://localhost:${Port}`);
});
