const jwt = require('jsonwebtoken');

// Secret key for JWT (store this in an environment variable in production)
const JWT_SECRET_KEY = 'your-secret-key-here';

// Function to generate JWT
const generateToken = (userId) => {
  return jwt.sign({ userId }, JWT_SECRET_KEY, { expiresIn: '1h' });
};

// Function to verify JWT
const verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET_KEY);
};

module.exports = { generateToken, verifyToken };
