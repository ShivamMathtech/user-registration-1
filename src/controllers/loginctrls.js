const { User } = require("../modal/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const loginCtrl = (req, res) => {
  // validate the request here
  // if validation fails, return error response
  // if validation passes, call the user controller's login method
  // if login is successful, generate a JWT token and send it back to the client
  // if login fails, send an error response

  const { email, password } = req.body; // destrucre
  // call the user controller's login method
  //check user name in the db
  User.findOne({ email: email }).then((d) => {
    if (!d) {
      res.status(401).json({ message: "Invalid email or password" });
    } else {
      if (d.password === password) {
        const token = jwt.sign({ toker: d.email }, process.env.JWT_TOKEN);
        res.status(200).json({
          message: "User logged in successfully",
          name: d,
          token: token,
        });
      } else {
        res.status(401).json({ message: "Invalid email or password" });
      }
    }

    // generate jwt token
  });
};

module.exports = loginCtrl;
