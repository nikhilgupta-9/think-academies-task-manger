const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { name, age, mobile, email, password } = req.body;

  // validate all required fields
  if (!name || !age || !mobile || !email || !password) {
    return res.status(400).json({ error: "All fields are required !!" });
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ $or: [{ email }, { mobile }] });

    if (existingUser) {
      return res.status(400).json({ error: "Email or Mobile Number already exists!" });
    }

    // Hash password
    const hashed = await bcrypt.hash(password, 10);

    // Create new user
    const user = await User.create({
      name,
      age,
      mobile,
      email,
      password: hashed
    });

    // ✅ Send only ONE response
    return res.status(201).json({
      message: "User Registered Successfully",
      user: {
        name: user.name,
        age: user.age,
        email: user.email,
        mobile: user.mobile
      }
    });

  } catch (err) {
    console.log("❌ Registration error:", err);

    if (err.name === 'ValidationError') {
      const firstError = Object.values(err.errors)[0].message;
      return res.status(400).json({ error: firstError });
    }

    return res.status(500).json({ error: "Server Error, Try again later!!" });
  }
};


exports.login = async (req, res) => {
  // Here we get login form data 
  const { email, password } = req.body;

  //  Check email and password
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required !!" });
  }

  //  Find user
  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ error: 'User Not Found' });

  //  Compare passwords
  console.log("🔍 Password:", password);
  console.log("🔍 User password from DB:", user.password);

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ error: 'Invalid Password' });

  //  Generate JWT Token
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '2h' });

  //  Send response
  return res.status(200).json({
    message: 'Login successful',
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email
    }
  });
};

exports.dashboard = (req, res) =>{
    res.json({ message: 'Welcome to dashboard', user: req.user });
}
