const express = require("express");
const loginCtrl = require("../controllers/loginctrls");
const loginRoute = express.Router();

loginRoute.post("/login", loginCtrl);

module.exports = loginRoute;
