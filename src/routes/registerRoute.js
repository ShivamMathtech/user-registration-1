const express = require("express");
const userCtrsl = require("../controllers/userCtrls");
const registerRoute = express.Router();
registerRoute.post("/register", userCtrsl);

module.exports = registerRoute;
