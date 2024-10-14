const express = require("express");
const teacherCtrl = require("../controllers/teacherctrls");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const teacherRoute = express.Router();
let authMiddleware = (req, res, next) => {
  let bearerToken = req.headers.authorization.split(" ");

  try {
    var decoded = jwt.verify(bearerToken[1], process.env.JWT_TOKEN);
  } catch (e) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
};
teacherRoute.post("/teacher/create", authMiddleware, teacherCtrl);

module.exports = teacherRoute;
