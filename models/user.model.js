const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // ✅ Ensure email is unique
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  isVerified: { 
    type: Boolean, 
    default: false 
  },
  role: {
    type: String,
    enum: ["admin", "manager", "employee"], // ✅ Only allow specific roles
    default: "employee", // ✅ Default role
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
