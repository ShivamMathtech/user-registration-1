const express = require("express");
const registerRoute = require("./routes/registerRoute");
const loginRoute = require("./routes/loginRoute");
const app = express();
require("dotenv").config();
// Middleware for parsing JSON request bodies
app.use(express.json());
app.use("/api", registerRoute);
app.use("/api", loginRoute);
const Port = process.env.PORT || 3000;
app.listen(Port, () => {
  console.log(`Server is running at http://localhost:${Port}`);
});
