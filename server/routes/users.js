const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const client = require('../db'); // Import the database connection
const { generateToken } = require('../authUtils'); // Import the JWT utility functions

// User Signup Route
router.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10); // Hash the password

  try {
    const result = await client.query(
      'INSERT INTO users(email, password) VALUES($1, $2) RETURNING *',
      [email, hashedPassword]
    );
    const user = result.rows[0];
    const token = generateToken(user.id); // Generate JWT token
    res.status(201).json({ user, token }); // Send the user data and token
  } catch (err) {
    res.status(400).json({ error: 'Error creating user' });
  }
});

// User Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await client.query('SELECT * FROM users WHERE email = $1', [email]);
    const user = result.rows[0];

    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Compare the provided password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const token = generateToken(user.id); // Generate JWT token
    res.status(200).json({ user, token }); // Send user data and token
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
