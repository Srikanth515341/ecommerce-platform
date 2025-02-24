const express = require('express');
const router = express.Router();
const client = require('../db');  // Import the database connection

// Route for getting all products
router.get('/products', async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM products');
    res.status(200).json(result.rows);  // Send all products
  } catch (err) {
    res.status(400).json({ error: 'Error fetching products' });
  }
});

module.exports = router;
