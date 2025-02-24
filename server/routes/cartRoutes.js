const express = require('express');
const router = express.Router();
const protect = require('../authMiddleware');  // Import the protect middleware

// Example of a protected route to get the cart
router.get('/cart', protect, (req, res) => {
  // Only authenticated users can access this route
  res.status(200).json({ message: 'This is your cart data' });
});

module.exports = router;
