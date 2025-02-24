const express = require('express');
const router = express.Router();
const client = require('../db');  // Import the database connection

// Route for user signup
router.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await client.query(
      'INSERT INTO users(email, password) VALUES($1, $2) RETURNING *',
      [email, password]
    );
    res.status(201).json(result.rows[0]);  // Send created user data back
  } catch (err) {
    res.status(400).json({ error: 'Error creating user' });
  }
});

module.exports = router;
