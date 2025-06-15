// routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose'); 
const User = require('../models/User');

//  correct route handler signature
router.get('/alluser', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users); //  return users as JSON
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
