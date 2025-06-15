const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: [3, "Name must be at least 3 characters"]
  },
  age: {
    type: Number,
    required: [true, "Age is required"],
    min: [10, "Minimum age is 10"],
    max: [100, "Maximum age is 100"]
  },
  mobile: {
    type: Number,
    required: [true, "Mobile number is required"],
    unique: true,
    validate: {
      validator: function (v) {
        return /^[6-9]\d{9}$/.test(v); // Indian mobile number format
      },
      message: props => `${props.value} is not a valid 10-digit mobile number!`
    }
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, "Please enter a valid email"]
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be atleast 6 character~~"]
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("User", userSchema);
