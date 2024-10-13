const { mongoose } = require("../config/db");

let userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: "active" }, // default status is active if not provided.
  },
  { timestamps: true }
);
// let userschema = {
//   name: String,
//   email: String,
//   password_hash: String,
//   role: String, // default status is active if not provided.
// };

const User = mongoose.model("User", userSchema);

// const kitty = new Cat({ name: "Zildjian" });
// kitty.save().then(() => console.log("meow"));
exports.User = User;
